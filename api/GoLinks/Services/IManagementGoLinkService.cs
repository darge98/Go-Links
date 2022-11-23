using GoLinks.Entities;

namespace GoLinks.Services;

/// <summary>
/// Service for manage GoLinks
/// </summary>
public interface IManagementGoLinkService
{
    /// <summary>
    /// Create new GoLink
    /// </summary>
    /// <param name="goLink">GoLink entity</param>
    /// <returns>Return created object</returns>
    public Task<GoLink> CreateLinkAsync(GoLink goLink);
    
    /// <summary>
    /// Give the GoLink with the specified id
    /// </summary>
    /// <param name="id">GoLink identifier</param>
    /// <returns>Return the GoLink with the given id</returns>
    public Task<GoLink> GetLinkByIdAsync(string id);
    
    /// <summary>
    /// Remove a GoLink
    /// </summary>
    /// <param name="id">GoLink identifier</param>
    public Task DeleteLinkAsync(string id);
}