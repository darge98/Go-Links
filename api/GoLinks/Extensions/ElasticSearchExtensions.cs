using GoLinks.Entities;
using Nest;

namespace GoLinks.Extensions;

/// <summary>
/// Extension to initialize ElasticClient and setting defaults
/// </summary>
public static class ElasticSearchExtensions
{
    public static void AddElasticsearch(
        this IServiceCollection services, IConfiguration configuration)
    {
        var url = configuration["ELKConfiguration:Uri"];
        var defaultIndex = configuration["ELKConfiguration:index"];

        var settings = new ConnectionSettings(new Uri(url)) 
            //.BasicAuthentication(userName, pass)
            .PrettyJson()
            .DefaultIndex(defaultIndex);

        AddDefaultMappings(settings);

        var client = new ElasticClient(settings);

        services.AddSingleton<IElasticClient>(client);

        CreateIndex(client, defaultIndex);
    }

    private static void AddDefaultMappings(ConnectionSettings settings)
    {
        settings.DefaultMappingFor<GoLink>(m => m.IdProperty(l => l.Id));
    }

    private static void CreateIndex(IElasticClient client, string indexName)
    {
        client.Indices.Create(indexName,
            index => index.Map<GoLink>(x => x.AutoMap())
        );
    }
}