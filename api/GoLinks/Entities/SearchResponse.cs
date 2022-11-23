namespace GoLinks.Entities;

public class SearchResponse
{
    public long TotalItem { get; set; }
    public IReadOnlyCollection<GoLink> Items { get; set; }

    public SearchResponse(long totalItem, IReadOnlyCollection<GoLink> items)
    {
        TotalItem = totalItem;
        Items = items;
    }
}