using Microsoft.AspNetCore.Mvc.ApplicationModels;
using WebUi;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using WebUi.Models;
using Microsoft.AspNetCore.Server.IIS;
using WebUi.Configuration;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.CodeAnalysis.Options;


#region Builder

var builder = WebApplication.CreateBuilder(args);


builder.Services.AddEntityFrameworkNpgsql()
    .AddDbContext<ConbentAccountDbContext>(opt => opt.UseNpgsql(
        builder.Configuration.GetConnectionString("WebUIContextConnection")));
builder.Services.AddEntityFrameworkNpgsql()
    .AddDbContext<ContentDbContext>(opt => opt.UseNpgsql(
        builder.Configuration.GetConnectionString("ContentConnection")));

builder.Services.AddIdentity<ConbentUser, IdentityRole>()
    .AddEntityFrameworkStores<ConbentAccountDbContext>()
    .AddDefaultUI()
    .AddDefaultTokenProviders();

#region Cookie Settings

builder.Services.AddCookieSettings();//Our Service for revoke cookie and main setting (time life, name)
builder.Services.AddAuthentication(CookieAuthenticationDefaults.AuthenticationScheme)
    .AddCookie(options =>//add cookie opt to proj
    {
        options.Cookie.HttpOnly = true;
        options.Cookie.SecurePolicy = CookieSecurePolicy.Always;
        options.Cookie.SameSite = SameSiteMode.Lax;
    });

#endregion

builder.Services.AddAuthorization(options =>
{
    options.AddPolicy("MustBeHR",
        policy => policy.RequireClaim("Department", "HR"));
});

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
    options.LowercaseUrls = true;
});
builder.Services.AddMvc(options =>
{
    options.Conventions.Add(new RouteTokenTransformerConvention(
        new SlugifyParameterTransformer()));
});

#endregion


#region App

var app = builder.Build();

app.Logger.LogInformation("App created...");

app.Logger.LogInformation("Seeding Database...");
using (var scope = app.Services.CreateScope())
{
    var scopedProvider = scope.ServiceProvider;
    try
    {
        var contentContext = scopedProvider.GetRequiredService<ContentDbContext>();
        await ContentDbContextSeed.SeedAsync(contentContext, app.Logger);

        //var userManager = scopedProvider.GetRequiredService<UserManager<ConbentUser>>();
        //var roleManager = scopedProvider.GetRequiredService<RoleManager<IdentityRole>>();
    }
    catch (Exception ex)
    {
        app.Logger.LogError(ex, "An error occurred seeding the DB.");
    }
}
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

#region Identity

app.UseCookiePolicy();
app.UseAuthentication();
app.UseAuthorization();

#endregion

app.MapControllerRoute(
    name: "default",
    pattern: "{controller:slugify=Home}/{action:slugify=Index}/{id?}");
app.MapRazorPages();

app.Run();

#endregion

