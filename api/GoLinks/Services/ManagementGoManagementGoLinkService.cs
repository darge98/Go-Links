using FluentValidation;
using GoLinks.Entities;
using GoLinks.Exceptions;
using GoLinks.Repositories;

namespace GoLinks.Services;

/// <inheritdoc cref="IManagementGoLinkService"/>
public class ManagementGoManagementGoLinkService : IManagementGoLinkService
{
    private readonly IValidator<GoLink> _validator;
    private readonly IGoLinkRepository _repository;

    public ManagementGoManagementGoLinkService(IValidator<GoLink> validator, IGoLinkRepository repository)
    {
        _validator = validator;
        _repository = repository;
    }

    /// <inheritdoc cref="IManagementGoLinkService.CreateLinkAsync"/>
    /// <exception cref="ModelNotValidException">When model is invalid</exception>
    public async Task<GoLink> CreateLinkAsync(GoLink goLink)
    {
        goLink.Id = goLink.Id.ToLowerInvariant().Trim();
        var validationResult = await _validator.ValidateAsync(goLink);
        if (!validationResult.IsValid)
            throw new ModelNotValidException(validationResult);

        return await _repository.CreateAsync(goLink);
    }

    /// <inheritdoc cref="IManagementGoLinkService.GetLinkByIdAsync"/>
    public Task<GoLink> GetLinkByIdAsync(string id)
    {
        return _repository.GetByIdAsync(id);
    }

    /// <inheritdoc cref="IManagementGoLinkService.DeleteLinkAsync"/>
    public Task DeleteLinkAsync(string id)
    {
        return _repository.DeleteAsync(id);
    }
}