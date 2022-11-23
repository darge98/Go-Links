using GoLinks.Entities;

namespace GoLinks.Repositories;

/// <summary>
/// Rapresent the repository for the GoLink storage
/// </summary>
public interface IGoLinkRepository
{
    /// <summary>
    /// Create new GoLink
    /// </summary>
    /// <param name="goLink">GoLink Model</param>
    /// <returns>The created object</returns>
    public Task<GoLink> CreateAsync(GoLink goLink);
    
    /// <summary>
    /// Return GoLink with the specified id
    /// </summary>
    /// <param name="id">GoLink identifier</param>
    /// <returns>Return the GoLink with the specified id</returns>
    public Task<GoLink> GetByIdAsync(string id);
    
    /// <summary>
    /// Remove a GoLink
    /// </summary>
    /// <param name="id">GoLink identifier</param>
    public Task DeleteAsync(string id);

    /// <summary>
    /// Search for obtain GoLinks
    /// </summary>
    /// <param name="request">Request</param>
    /// <returns>GoLinks returned by the request</returns>
    public Task<SearchResponse> SearchAsync(SearchRequest request);
}