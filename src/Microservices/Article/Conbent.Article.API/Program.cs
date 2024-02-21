using Conbent.Article.API.Extensions;
using Conbent.Article.Core.Interfaces;
using Conbent.Article.Infrastructure.Context;
using Conbent.Article.Infrastructure.Repository;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddApplicationServices(builder.Configuration);
builder.Services.AddSwaggerDocumentation();

var app = builder.Build();
app.UseSwaggerDocumentation();

app.MapControllers();

using var scope = app.Services.CreateScope();

var services = scope.ServiceProvider;
var articleContext = services.GetRequiredService<ArticleContext>();
//var logger = services.GetRequiredService<ILogger<Program>>();

//dotnet ef database update  -p Conbent.Article.Infrastructure -s Conbent.Article.API -c ArticleContext -o ArticlesMigration
//dotnet ef migrations add ArticleContextInitial -p Conbent.Article.Infrastructure -s Conbent.Article.API -c ArticleContext -o ArticlesMigration
//dotnet ef migrations remove -p Conbent.Article.Infrastructure -s Conbent.Article.API -c ArticleContext

try
{
    await articleContext.Database.MigrateAsync();
    await ArticleContextSeed.SeedAsync(articleContext);
}
catch (Exception ex)
{
    //logger.LogError(ex, "An error occured during migration");
}

app.Run();
