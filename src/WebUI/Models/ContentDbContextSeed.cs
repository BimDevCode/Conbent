using Microsoft.EntityFrameworkCore;
using WebUi.Models.Contents;
using WebUi.Models.EntityImplementation;

namespace WebUi.Models;

public class ContentDbContextSeed
{
    public static async Task SeedAsync(ContentDbContext contentContext,
        ILogger logger,
        int retry = 0)
    {
        var retryForAvailability = retry;
        try
        {
            await contentContext.Database.MigrateAsync();

            await contentContext.Articles.AddRangeAsync(
                GetPreconfiguredItems());
            await contentContext.SaveChangesAsync();
        }
        catch (Exception ex)
        {
            if (retryForAvailability >= 10) throw;

            retryForAvailability++;
            
            logger.LogError(ex.Message);
            await SeedAsync(contentContext, logger, retryForAvailability);
            throw;
        }
    }


    static IEnumerable<Article> GetPreconfiguredItems()
    {
        return new List<Article>
        {
            new FirstArticle(),
        };
    }

}
