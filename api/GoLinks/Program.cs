using FluentValidation;
using GoLinks.Entities;
using GoLinks.Exceptions;
using GoLinks.Extensions;
using GoLinks.Repositories;
using GoLinks.Routes;
using GoLinks.Services;
using GoLinks.Validators;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Elastic
builder.Services.AddElasticsearch(builder.Configuration);

// Validators
builder.Services.AddScoped<IValidator<GoLink>, GoLinkValidator>();
builder.Services.AddScoped<IValidator<SearchRequest>, SearchRequestValidator>();
// Services
builder.Services.AddScoped<IManagementGoLinkService, ManagementGoManagementGoLinkService>();
builder.Services.AddScoped<ISearchService, SearchService>();
// Repositories
builder.Services.AddSingleton<IGoLinkRepository, GoLinkRepository>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseAuthorization();
app.UseMiddleware<ExceptionMiddleware>();


// Routes
app.AddManagementGoLinkRoutes();
app.AddSearchGoLinkRoutes();

app.Run();