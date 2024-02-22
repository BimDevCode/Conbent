using Conbent.Article.Core.Entities;
using Conbent.Article.Infrastructure.Parser;

namespace Conbent.Article.Infrastructure.Context;
public abstract class ArticleContextSeed
{
    private const string ObsidianNotesPath = @"W:\Obsidian\Conbent\Conbent Development\Content";
    private const string SearchPattern = "*.md";

    public static async Task SeedAsync(ArticleContext context)
    {
        var markdownContents = new List<ArticleEntity>();
        var technology = new Technology() { Name = "Dotnet", HashId = Guid.NewGuid().ToString() };
        var tags = new List<Tag>()
        {
            new() { Name = "Dotnet", HashId = Guid.NewGuid().ToString() },
            new() { Name = "Initial", HashId = Guid.NewGuid().ToString() },
            new() { Name = "Generated", HashId = Guid.NewGuid().ToString() },
        };
        if (!context.Articles.Any())
        {
            ScanDirectoryForArticleEntity(ObsidianNotesPath, tags, technology, ref markdownContents);
        }

        var textContents = markdownContents.SelectMany(x => x.Texts!);
        if (!context.Technologies.Any())
        {
            context.Technologies.Add(technology);
        }
        if (!context.Tags.Any())
        {
            context.Tags.AddRange(tags);
        }
        if (!context.TextContents.Any())
        {
            context.TextContents.AddRange(textContents);
        }
        if (!context.Articles.Any())
        {
            context.Articles.AddRange(markdownContents);
        }

        //if (!context.ProductTypes.Any())
        //{
        //    var typesData = File.ReadAllText(path + @"/Data/SeedData/types.json");
        //    var types = JsonSerializer.Deserialize<List<ProductType>>(typesData);
        //    context.ProductTypes.AddRange(types);
        //}

        //if (!context.Products.Any())
        //{
        //    var productsData = File.ReadAllText(path + @"/Data/SeedData/products.json");
        //    var products = JsonSerializer.Deserialize<List<Product>>(productsData);
        //    context.Products.AddRange(products);
        //}

        //if (!context.DeliveryMethods.Any())
        //{
        //    var deliveryData = File.ReadAllText(path + @"/Data/SeedData/delivery.json");
        //    var methods = JsonSerializer.Deserialize<List<DeliveryMethod>>(deliveryData);
        //    context.DeliveryMethods.AddRange(methods);
        //}

        if (context.ChangeTracker.HasChanges()) await context.SaveChangesAsync();
    }

    private static void ScanDirectoryForArticleEntity(string directoryPath, List<Tag> tags,  Technology technology, ref List<ArticleEntity> markdownContents)
    {
        try
        {
            // Process all files in the current directory
            foreach (var filePath in Directory.GetFiles(directoryPath, SearchPattern))
            {
                var articleEntity = new ArticleEntity()
                {
                    Name = Path.GetFileNameWithoutExtension(filePath),
                    HashId = Guid.NewGuid().ToString(),
                    RelevantScore = 0,
                    Technology = technology,
                    Tags = tags
                };
                var fileContent = filePath
                    .ParseToStringContent()
                    .Select(x => new TextContent()
                    {
                        Name = Path.GetFileNameWithoutExtension(filePath),
                        HashId = Guid.NewGuid().ToString(),
                        Content = x,
                        Article = articleEntity
                    }).ToList();

                articleEntity.Texts = fileContent;

                markdownContents.Add(articleEntity);
            }

            // Recursively process all subdirectories
            foreach (var subDirectory in Directory.GetDirectories(directoryPath))
            {
                ScanDirectoryForArticleEntity(subDirectory, tags, technology, ref markdownContents);
            }
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Error scanning directory {directoryPath}: {ex.Message}");
        }
    }

}
