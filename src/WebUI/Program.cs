using Microsoft.AspNetCore.Mvc.ApplicationModels;
using WebUi;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using WebUi.Areas.Identity.Data;
using WebUi.Data;
using Microsoft.Extensions.DependencyInjection;


#region Builder

var builder = WebApplication.CreateBuilder(args);

var connectionString = builder.Configuration.GetConnectionString("WebUIAccountContextConnection") ?? throw new InvalidOperationException("Connection string 'WebUIAccountContextConnection' not found.");

builder.Services.AddDbContext<WebUIAccountContext>(options =>
    options.UseNpgsql(connectionString));

builder.Services.AddIdentity<ConbentUser, IdentityRole<long>>()
    .AddEntityFrameworkStores<WebUIAccountContext>()
    .AddDefaultTokenProviders();

builder.Logging.AddConsole();
builder.Services.AddMemoryCache();

// Add services to the container.
builder.Services.AddControllersWithViews();
builder.Services.AddRazorPages();
builder.Services.AddRouting(options =>
{
    // Replace the type and the name used to refer to it with your own
    // IOutboundParameterTransformer implementation
    options.ConstraintMap["slugify"] = typeof(SlugifyParameterTransformer);
});
builder.Services.AddMvc(options =>
{
    options.Conventions.Add(new RouteTokenTransformerConvention(
        new SlugifyParameterTransformer()));
});

#endregion


#region App

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();
app.UseAuthentication();;

app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");
app.MapRazorPages();

app.Run();

#endregion

