using Elasticsearch.Net;
using GoLinks.Entities;
using GoLinks.Exceptions;
using Nest;
using SearchRequest = GoLinks.Entities.SearchRequest;

namespace GoLinks.Repositories;

/// <inheritdoc cref="IGoLinkRepository"/>
public class GoLinkRepository : IGoLinkRepository
{
    // TODO: Creare una Factory per permettere diversi storage
    private readonly IElasticClient _elasticClient;

    public GoLinkRepository(IElasticClient elasticClient)
    {
        _elasticClient = elasticClient;
    }

    /// <inheritdoc cref="IGoLinkRepository.CreateAsync"/>
    /// <exception cref="ElasticsearchClientException">When Elastic error occurs</exception>
    public async Task<GoLink> CreateAsync(GoLink link)
    {
        link.Id = link.Id.ToLowerInvariant().Trim();
        var response = await _elasticClient.IndexDocumentAsync(link);
        if (!response.IsValid)
            throw new ElasticsearchClientException($"Errore durante la creazione del goLink {link.Name}");
        return link;
    }

    /// <inheritdoc cref="IGoLinkRepository.GetByIdAsync"/>
    /// <exception cref="NotFoundException">When no GoLink found with the given id</exception>
    public async Task<GoLink> GetByIdAsync(string id)
    {
        var response = await _elasticClient.GetAsync<GoLink>(id.ToLowerInvariant().Trim());
        if (!response.Found)
            throw new NotFoundException($"Elemento con id: {id} non trovato");
        return response.Source;
    }

    /// <inheritdoc cref="IGoLinkRepository.DeleteAsync"/>
    /// <exception cref="ElasticsearchClientException">When Elastic error occurs</exception>
    public async Task DeleteAsync(string id)
    {
        var element = await GetByIdAsync(id);
        var response = await _elasticClient.DeleteAsync<GoLink>(element.Id);
        if (!response.IsValid)
            throw new ElasticsearchClientException($"Errore durante la cancellazione dell'id {element.Id}");
    }

    /// <inheritdoc cref="IGoLinkRepository.Search"/>
    /// <exception cref="ElasticsearchClientException">When Elastic error occurs</exception>
    public async Task<SearchResponse> SearchAsync(SearchRequest request)
    {
        var results = await _elasticClient.SearchAsync<GoLink>(s => CreateSearchBodyRequest(s, request));

        if (!results.IsValid)
            throw new ElasticsearchClientException("Errore durante la search dei GoLink");

        return new SearchResponse(results.Total, results.Documents);
    }

    private SearchDescriptor<GoLink> CreateSearchBodyRequest(SearchDescriptor<GoLink> descriptor, SearchRequest request)
    {
        var offset = request.Paging?.Offset ?? 0;
        var size = request.Paging?.DocPerPage ?? 10000;
        
        descriptor.From(offset)
            .Size(size)
            .Query(q => q.MultiMatch(mm =>
                mm.Fields(f =>
                    f.Field(g => g.Name).Field(g => g.Description).Field(g => g.Tags))
                        .Query(request.TextSearch)
            ));

        if (request.OrderBy != null)
        {
            descriptor.Sort(sort =>
            {
                switch (request.OrderBy.Type)
                {
                    case OrderBy.OrderType.Ascending:
                        sort.Ascending(request.OrderBy.Field);
                        break;
                    case OrderBy.OrderType.Descending:
                        sort.Descending(request.OrderBy.Field);
                        break;
                    default:
                        throw new ArgumentOutOfRangeException("");
                }

                return sort;
            });
        }

        return descriptor;
    }
}