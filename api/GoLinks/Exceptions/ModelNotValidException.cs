using FluentValidation.Results;

namespace GoLinks.Exceptions;

/// <summary>
/// Exception that represent a Not Valid Object
/// </summary>
public class ModelNotValidException : Exception
{
    private readonly ValidationResult _validationResult;

    public ModelNotValidException(ValidationResult validationResult)
        : base(string.Join("; ", validationResult.Errors.Select(e => e.ErrorMessage)))
    {
        _validationResult = validationResult;
    }

    public ModelNotValidException(ValidationResult validationResult, Exception inner)
        : base(string.Join("; ", validationResult.Errors.Select(e => e.ErrorMessage)), inner)
    {
        _validationResult = validationResult;
    }

    public IDictionary<string, string[]> GetDictionary()
    {
        return _validationResult.ToDictionary();
    }
}