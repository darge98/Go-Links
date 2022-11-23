using FluentValidation;
using GoLinks.Entities;

namespace GoLinks.Validators;

public class GoLinkValidator : AbstractValidator<GoLink>
{
    public GoLinkValidator()
    {
        RuleFor(x => x.Id)
            .Cascade(CascadeMode.Stop)
            .NotNull().WithMessage("Il campo Id non può essere nullo")
            .NotEmpty().WithMessage("Il campo Id non può essere vuoto");

        RuleFor(x => x.Name)
            .Cascade(CascadeMode.Stop)
            .NotNull().WithMessage("Il campo Name non può essere nullo")
            .NotEmpty().WithMessage("Il campo Name non può essere vuoto");

        RuleFor(x => x.RedirectUrl)
            .Cascade(CascadeMode.Stop)
            .NotNull().WithMessage("Il campo RedirecURL non può essere nullo")
            .NotEmpty().WithMessage("Il campo RedirecURL non può essere vuoto");
        RuleFor(x => x.RedirectUrl);
        RuleFor(x => x.Tags).NotNull().WithMessage("Il campo Tags non può essere nullo");
    }
}