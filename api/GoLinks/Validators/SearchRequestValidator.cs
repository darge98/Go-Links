using FluentValidation;
using GoLinks.Entities;

namespace GoLinks.Validators;

internal class OrderByValidator : AbstractValidator<OrderBy>
{
    public OrderByValidator()
    {
        RuleFor(x => x.Type)
            .IsInEnum()
            .WithMessage("Il campo orderType.type non rientra nei valori ammessi");
    }
}

internal class PagingValidator : AbstractValidator<Paging>
{
    public PagingValidator()
    {
        RuleFor(x => x.Offset)
            .GreaterThan(-1)
            .WithMessage("Il campo paging.offset non può essere negativo");
        RuleFor(x => x.DocPerPage)
            .GreaterThan(-1)
            .WithMessage("Il campo paging.docsPerPage non può essere negativo");
    }
}

public class SearchRequestValidator : AbstractValidator<SearchRequest>
{
    public SearchRequestValidator()
    {
        RuleFor(x => x.TextSearch)
            .NotNull().WithMessage("Il campo textSearch non può essere nullo");

        RuleFor(x => x.Paging)
            .SetValidator(new PagingValidator());

        RuleFor(x => x.OrderBy)
            .SetValidator(new OrderByValidator()!)
            .When(orderBy => orderBy != null);
    }
}