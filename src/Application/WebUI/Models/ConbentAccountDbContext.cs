using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace WebUi.Models;

public sealed class ConbentAccountDbContext: IdentityDbContext<ConbentUser>
{
    public ConbentAccountDbContext(DbContextOptions<ConbentAccountDbContext> options) : base(options)
    {
        //Database.EnsureCreated();
    }
    public DbSet<AdditionalConbentUserData>? AdditionalConbentUserData { get; set; }

    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);
        // Customize the ASP.NET Identity model and override the defaults if needed.
        // For example, you can rename the ASP.NET Identity table names and more.
        // Add your customizations after calling base.OnModelCreating(builder);
    }
}