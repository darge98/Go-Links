using Nest;

namespace GoLinks.Entities;

[ElasticsearchType(RelationName = "go_links")]
public class GoLink
{
    public string Id { get; set; } = null!;

    [Text(Name = "name")] public string Name { get; set; } = null!;

    [Text(Name = "description")] public string Description { get; set; } = null!;

    [Text(Name = "redirectURL")] public string RedirectUrl { get; set; } = null!;

    [PropertyName("tags")] public IList<string> Tags { get; set; } = new List<string>();
}