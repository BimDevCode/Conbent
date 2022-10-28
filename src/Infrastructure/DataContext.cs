using Infrastructure.Entities;
using Microsoft.EntityFrameworkCore;

public class DataContext : DbContext
{
    public DbSet<AppGeneralAccountEntity> AppGeneralAccounts { get; set; }

    public DataContext(DbContextOptions<DataContext> options, IServiceProvider serviceProvider) : base(options)
    {
    }
    /// <summary>
    /// #for future  Modifier
    /// </summary>
    /// <typeparam name="T"></typeparam>
    /// <returns></returns>
    public DbSet<T> DbSet<T>() where T : class
    {
        return Set<T>();
    }

    /// <summary>
    /// 
    /// </summary>
    /// <param name="cancellationToken"></param>
    /// <returns></returns>
    public async Task<int> SaveChangesAsync(CancellationToken cancellationToken = new CancellationToken())
    {
        return await base.SaveChangesAsync(cancellationToken);
    }

    public new IQueryable<T> Query<T>() where T : class
    {
        return Set<T>();
    }

}