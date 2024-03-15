using Conbent.Article.API.Extensions;
using Conbent.Article.Infrastructure.Context;
using Conbent.CommonInfrastructure.Middleware;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddApplicationServices(builder.Configuration);
builder.Services.AddSwaggerDocumentation();

var app = builder.Build();
app.UseMiddleware<ExceptionMiddleware>();
app.UseStatusCodePagesWithReExecute("/errors/{0}");

app.UseSwaggerDocumentation();
app.UseStaticFiles();
app.UseCors("AllowSpecificOrigin");

app.MapControllers();
app.MapFallbackToController("Index", "Fallback");
app.UseHttpsRedirection();

using var scope = app.Services.CreateScope();
var services = scope.ServiceProvider;
var articleContext = services.GetRequiredService<ArticleContext>();
//var logger = services.GetRequiredService<ILogger<Program>>();

//dotnet ef database update  -p Conbent.Article.Infrastructure -s Conbent.Article.API -c ArticleContext 
//dotnet ef migrations add ArticleContextInitial -p Conbent.Article.Infrastructure -s Conbent.Article.API -c ArticleContext -o ArticlesMigration
//dotnet ef migrations remove -p Conbent.Article.Infrastructure -s Conbent.Article.API -c ArticleContext
await articleContext.Database.MigrateAsync();
await ArticleContextSeed.SeedAsync(articleContext);
//await ArticleContextSeed.SeedAsyncWithoutParsing(articleContext);
//dotnet run --configuration Debug --launch-profile https 
app.Run();
