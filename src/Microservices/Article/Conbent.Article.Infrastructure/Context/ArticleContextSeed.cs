using Conbent.Article.Core.Entities;
using Conbent.Article.Infrastructure.Parser;
using Conbent.CommonInfrastructure.Helpers;

namespace Conbent.Article.Infrastructure.Context;
public abstract class ArticleContextSeed
{
    private const string ObsidianNotesPath = @"W:\Obsidian\Conbent\Conbent Development\Content";
    private const string SearchPattern = "*" + SourceFileExtension;
    private const string SourceFileExtension = ".md";
    private static Dictionary<string, Tag> _hashTags = new();
    private static readonly Random _random = new();

    public static async Task SeedAsync(ArticleContext context)
    {
        var markdownContents = new List<ArticleEntity>();
        var technology = new Technology() { Name = "Dotnet", HashId = "Dotnet".ComputeSha256Hash()};
  
        if (!context.Articles.Any())
        {
            ScanDirectoryForArticleEntity(ObsidianNotesPath, technology, ref markdownContents);
        }

        var textContents = markdownContents.SelectMany(x => x.Texts!);
        if (!context.Technologies.Any())
        {
            context.Technologies.Add(technology);
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

    private static void ScanDirectoryForArticleEntity(string directoryPath, Technology technology, ref List<ArticleEntity> markdownContents)
    {
        try
        {
            // Process all files in the current directory
            foreach (var filePath in Directory.GetFiles(directoryPath, SearchPattern))
            {
                var relativePath = Path.GetRelativePath(ObsidianNotesPath, filePath);
               
                var articleEntity = new ArticleEntity()
                {
                    Name = Path.GetFileNameWithoutExtension(filePath),
                    HashId = Guid.NewGuid().ToString(),
                    RelevantScore = _random.Next(0,100),
                    TreePath = relativePath,
                    Technology = technology,
                };
                var tags = relativePath.Split('\\')
                    .Where(x => !x.Contains(SourceFileExtension))
                    .Select(t => new Tag()
                    { Name = t, HashId = t.ComputeSha256Hash(), Description = t }).ToList();
               
                var staticObjectTags = new HashSet<Tag>();
                foreach (var tag in tags)
                {
                    if(_hashTags.TryGetValue(tag.HashId, out var value))
                        staticObjectTags.Add(value);
                    else
                    {
                        _hashTags.Add(tag.HashId, tag);
                        staticObjectTags.Add(tag);
                    }
                }
                articleEntity.Tags = staticObjectTags;
                var fileContent = filePath
                    .ParseToStringContent()
                    .ToList();
                fileContent.ForEach(t => t.Article = articleEntity);
                articleEntity.Texts = fileContent;

                markdownContents.Add(articleEntity);
            }

            // Recursively process all subdirectories
            foreach (var subDirectory in Directory.GetDirectories(directoryPath))
                ScanDirectoryForArticleEntity(subDirectory, technology, ref markdownContents);
            
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Error scanning directory {directoryPath}: {ex.Message}");
        }
    }

}
