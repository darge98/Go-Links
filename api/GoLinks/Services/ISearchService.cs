using GoLinks.Entities;

namespace GoLinks.Services;

/// <summary>
/// Service for manage GoLinks search
/// </summary>
public interface ISearchService
{
    /// <summary>
    /// Search
    /// </summary>
    /// <param name="request">Search request</param>
    /// <returns>GoLinks that match with the given request</returns>
    public Task<SearchResponse> SearchAsync(SearchRequest request) ;
    
    /// <summary>
    /// Get RedirectUrl of a GoLink
    /// </summary>
    /// <param name="id">GoLink identifier</param>
    /// <returns>GoLink redirect url</returns>
    public Task<string> GetRedirectUrlAsync(string id);
}