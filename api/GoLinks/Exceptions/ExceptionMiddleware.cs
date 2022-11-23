using System.Net;
using Newtonsoft.Json;

namespace GoLinks.Exceptions;

/// <summary>
/// Generic Exception Response
/// </summary>
public class ExceptionResponse
{
    public int StatusCode { get; }
    public string MessageBody { get; }

    public ExceptionResponse(int statusCode, object messageBody)
    {
        StatusCode = statusCode;
        MessageBody = JsonConvert.SerializeObject(messageBody);
    }
}

/// <summary>
/// Middleware to handle response when Exception occured
/// </summary>
public class ExceptionMiddleware
{
    private readonly RequestDelegate _next;

    public ExceptionMiddleware(RequestDelegate next)
    {
        _next = next;
    }

    public async Task InvokeAsync(HttpContext httpContext)
    {
        try
        {
            await _next(httpContext);
        }
        catch (Exception ex)
        {
            await HandleExceptionAsync(httpContext, ex);
        }
    }

    private async Task HandleExceptionAsync(HttpContext context, Exception exception)
    {
        var response = CreateResponse(exception);
        context.Response.ContentType = "application/json";
        context.Response.StatusCode = response.StatusCode;
        await context.Response.WriteAsync(response.MessageBody);
    }

    private ExceptionResponse CreateResponse(Exception exception)
    {
        return exception switch
        {
            ModelNotValidException modelNotValid => new ExceptionResponse((int)HttpStatusCode.BadRequest,
                modelNotValid.GetDictionary()),
            
            NotFoundException _ => new ExceptionResponse((int)HttpStatusCode.NotFound, "Not Found"),

            _ => new ExceptionResponse((int)HttpStatusCode.InternalServerError, "Internal Server Error")
        };
    }
}