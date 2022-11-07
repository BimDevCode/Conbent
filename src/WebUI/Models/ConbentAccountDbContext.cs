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
}