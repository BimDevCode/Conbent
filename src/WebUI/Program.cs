using Microsoft.AspNetCore.Mvc.ApplicationModels;
using WebUi;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using WebUi.Models;
using Microsoft.AspNetCore.Server.IIS;


#region Builder

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddEntityFrameworkNpgsql().AddDbContext<ConbentAccountDbContext>(opt => opt.UseNpgsql(
    builder.Configuration.GetConnectionString("WebUIAccountContextConnection")));

builder.Services.AddIdentity<ConbentUser, IdentityRole>()
    .AddEntityFrameworkStores<ConbentAccountDbContext>()
     .AddDefaultUI()
    .AddDefaultTokenProviders();
//builder.Services.AddAuthentication(LoginModel.NameCookieAuth).AddCookie(LoginModel.NameCookieAuth, options =>
//{
//    options.Cookie.Name = LoginModel.NameCookieAuth;
//    options.LoginPath = "/Account/Login";
//    options.AccessDeniedPath = "/Account/AccessDenied";
//});

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
    options.ConstraintMap["slugify"] = typeof(IOutboundParameterTransformer);
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

app.UseAuthentication(); ;
app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");
app.MapRazorPages();

app.Run();

#endregion

