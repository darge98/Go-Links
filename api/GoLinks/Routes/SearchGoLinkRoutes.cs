using GoLinks.Entities;
using GoLinks.Services;

namespace GoLinks.Routes;

/// <summary>
/// Extension that add public search routes
/// </summary>
public static class SearchGoLinkRoutes
{
    public static void AddSearchGoLinkRoutes(this IEndpointRouteBuilder app)
    {
        app.SearchGoLinksRoute();
        app.RedirectToGoLinkRoute();
    }

    private static void SearchGoLinksRoute(this IEndpointRouteBuilder app)
    {
        app.MapPost("/_search", async (SearchRequest request, ISearchService searchService) => Results.Ok(await searchService.SearchAsync(request)))
            .Produces<SearchResponse>()
            .WithName("Search")
            .WithTags("Search");
    }

    /// <summary>
    /// If you want map this API to DNS, with the go/{link} we can call this endpoint 
    /// </summary>
    /// <param name="app"></param>
    private static void RedirectToGoLinkRoute(this IEndpointRouteBuilder app)
    {
        app.MapGet("/{id}", async (string id, ISearchService searchService) => Results.Redirect(await searchService.GetRedirectUrlAsync(id)))
            .Produces<SearchResponse>()
            .WithName("Redirect")
            .WithTags("Go");
    }
}