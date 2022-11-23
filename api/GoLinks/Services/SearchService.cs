using FluentValidation;
using GoLinks.Entities;
using GoLinks.Exceptions;
using GoLinks.Repositories;

namespace GoLinks.Services;

/// <inheritdoc cref="ISearchService"/>
public class SearchService : ISearchService
{
    private readonly IValidator<SearchRequest> _validator;
    private readonly IGoLinkRepository _repository;
    
    public SearchService(IValidator<SearchRequest> validator, IGoLinkRepository repository)
    {
        _validator = validator;
        _repository = repository;
    }
    
    /// <inheritdoc cref="ISearchService.SearchAsync"/>
    /// <exception cref="ModelNotValidException">When model not valid</exception>
    public async Task<SearchResponse> SearchAsync(SearchRequest request)
    {
        var validationResult = await _validator.ValidateAsync(request);
        if (!validationResult.IsValid)
            throw new ModelNotValidException(validationResult);

        return await _repository.SearchAsync(request);
    }

    public async Task<string> GetRedirectUrlAsync(string id)
    {
        var response = await _repository.GetByIdAsync(id);
        return response.RedirectUrl;
    }
}