using Infrastructure.Entities;
using Microsoft.EntityFrameworkCore;

public class DataContext : DbContext
{
    #region Prop
    public DbSet<AppAccountEntity> AppGeneralAccounts { get; set; }

    #endregion

    #region Ctor
    public DataContext(DbContextOptions<DataContext> options, IServiceProvider serviceProvider) : base(options)
    {
    }
    public DataContext(DbContextOptions<DataContext> options) : base(options)
    {
    }

    #endregion

    #region Methods

    public DbSet<T> DbSet<T>() where T : class
    {
        return Set<T>();
    }

    public new async Task<int> SaveChangesAsync(CancellationToken cancellationToken = new CancellationToken())
    {
        return await base.SaveChangesAsync(cancellationToken);
    }

    public async Task<int> SaveChangesAsync()
    {
        return await base.SaveChangesAsync();
    }

    public new IQueryable<T> Query<T>() where T : class
    {
        return Set<T>();
    }

    #endregion

}