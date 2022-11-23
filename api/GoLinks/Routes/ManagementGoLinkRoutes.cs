using GoLinks.Entities;
using GoLinks.Services;

namespace GoLinks.Routes;

/// <summary>
/// Extension that add management routes to handle GoLinks
/// </summary>
public static class ManagementGoLinkRoutes
{
    public static void AddManagementGoLinkRoutes(this IEndpointRouteBuilder app)
    {
        app.CreateGoLinkRoute();
        app.GetGoLinkByIdRoute();
        app.DeleteGoLinkRoute();
    }

    private static void CreateGoLinkRoute(this IEndpointRouteBuilder app)
    {
        app.MapPost("management/go",
                async (GoLink request, IManagementGoLinkService service) =>
                    Results.Created(request.Id, await service.CreateLinkAsync(request)))
            .Produces<GoLink>(StatusCodes.Status201Created)
            .WithName("CreateGoLink")
            .WithTags("Management");
    }
    private static void GetGoLinkByIdRoute(this IEndpointRouteBuilder app)
    {
        app.MapGet("management/go/{linkId}",
                async (string id, IManagementGoLinkService service) => Results.Ok(await service.GetLinkByIdAsync(id)))
            .Produces<GoLink>()
            .Produces(StatusCodes.Status404NotFound)
            .WithName("GetGoLink")
            .WithTags("Management");
    }
    private static void DeleteGoLinkRoute(this IEndpointRouteBuilder app)
    {
        app.MapDelete("management/go/{linkId}", async (string id, IManagementGoLinkService service) =>
            {
                await service.DeleteLinkAsync(id);
                return Results.Ok();
            })
            .Produces<GoLink>()
            .Produces(StatusCodes.Status400BadRequest)
            .Produces(StatusCodes.Status500InternalServerError)
            .WithName("DeleteGoLink")
            .WithTags("Management");
    }
}