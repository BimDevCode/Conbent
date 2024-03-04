
using Conbent.Article.Core.Interfaces.Contractors;
using Conbent.Article.Core.Interfaces;
using Conbent.Article.Infrastructure.Repository.Contractors;
using Conbent.Article.Infrastructure.Repository;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Conbent.Article.Infrastructure.Context;
using Conbent.CommonInfrastructure.Errors;

namespace Conbent.Article.API.Extensions;

public static class Extensions
{
    public static IServiceCollection AddApplicationServices(this IServiceCollection services,
        IConfiguration config)
    {
        //.AddSingleton<IResponseCacheService, ResponseCacheService>();
        services.AddDbContext<ArticleContext>(opt =>
        {
            opt.UseNpgsql(config.GetConnectionString("DefaultConnection"));
        });
        //services.AddSingleton<IConnectionMultiplexer>(c =>
        //{
        //    var options = ConfigurationOptions.Parse(config.GetConnectionString("Redis"));
        //    return ConnectionMultiplexer.Connect(options);
        //});

        //services.AddScoped<ITokenService, TokenService>();
        services.AddScoped<IUnitOfWork, UnitOfWork>();
        services.AddScoped(typeof(IGenericRepository<>), typeof(GenericRepository<>));
        services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());
        services.Configure<ApiBehaviorOptions>(options =>
        {
            options.InvalidModelStateResponseFactory = actionContext =>
            {
                var errors = actionContext.ModelState
                    .Where(e => e.Value.Errors.Count > 0)
                    .SelectMany(x => x.Value.Errors)
                    .Select(x => x.ErrorMessage).ToArray();

                var errorResponse = new ApiValidationErrorResponse
                {
                    Errors = errors
                };

                return new BadRequestObjectResult(errorResponse);
            };
        });
        services.AddHttpsRedirection(options =>
            {
                options.RedirectStatusCode = StatusCodes.Status308PermanentRedirect;
                options.HttpsPort = 4200;
            });
        services.AddCors(opt =>
        {
            opt.AddPolicy("AllowSpecificOrigin",
                builder => builder.WithOrigins("https://localhost:4200")
                          .AllowAnyMethod()
                          .AllowAnyHeader());
        });

        return services;
    }
}