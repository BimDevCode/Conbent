using System;
using System.Reflection;
using System.Reflection.Emit;
using Microsoft.EntityFrameworkCore;
using WebUi.Models.EntityImplementation;

namespace WebUi.Models;

public class ContentDbContext : DbContext
{
    public ContentDbContext(DbContextOptions<ContentDbContext> options) : base(options)
    {
    }
    public DbSet<Article> Articles { get; set; }

    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);
        builder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());
        builder.Entity<Article>()
            .HasIndex(p => new { p.Name})
            .IsUnique(true);
    }
}
