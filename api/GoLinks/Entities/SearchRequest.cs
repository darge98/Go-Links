using Nest;

namespace GoLinks.Entities;

public class SearchRequest
{
    public string TextSearch { get; set; } = null!;
    public Paging? Paging { get; set; } = new() { Offset = 0, DocPerPage = 25 };
    public OrderBy? OrderBy { get; set; }
}

public class Paging
{
    public int Offset { get; set; }
    public int DocPerPage { get; set; }
}

public class OrderBy
{
    public enum OrderType
    {
        Ascending, Descending
    }

    public OrderType Type { get; set; }
    public string? Field { get; set; }
}
