using Conbent.Service.Defaults.Extension;
using DPoPApi;
using Duende.IdentityServer.Demo;
using Serilog;
using Serilog.Events;

var builder = WebApplication.CreateBuilder(args);

builder.AddServiceDefaults();

builder.Services.AddControllersWithViews();

builder.AddNpgsqlDbContext<ApplicationDbContext>("IdentityDB");

// Apply database migration automatically. Note that this approach is not
// recommended for production scenarios. Consider generating SQL scripts from
// migrations instead.
builder.Services.AddMigration<ApplicationDbContext, UsersSeed>();

builder.Services.AddIdentity<ApplicationUser, IdentityRole>()
        .AddEntityFrameworkStores<ApplicationDbContext>()
        .AddDefaultTokenProviders();

builder.Services.AddIdentityServer(options =>
{
    options.IssuerUri = "null";
    options.Authentication.CookieLifetime = TimeSpan.FromHours(2);

    options.Events.RaiseErrorEvents = true;
    options.Events.RaiseInformationEvents = true;
    options.Events.RaiseFailureEvents = true;
    options.Events.RaiseSuccessEvents = true;
})
.AddInMemoryApiScopes(Config.ApiScopes)
.AddInMemoryIdentityResources(Config.IdentityResources)
.AddInMemoryApiResources(Config.ApiResources)
.AddInMemoryClients(Config.Clients)
.AddAspNetIdentity<ApplicationUser>()
.AddDeveloperSigningCredential()
.AddJwtBearerClientAuthentication();

//.AddInMemoryIdentityResources(Config.GetResources())
//.AddInMemoryApiScopes(Config.GetApiScopes())
//.AddInMemoryApiResources(Config.GetApis())
//.AddInMemoryClients(Config.GetClients(builder.Configuration))
//.AddAspNetIdentity<ApplicationUser>()
//.AddDeveloperSigningCredential() // Not recommended for production - you need to store your key material somewhere secure
//.AddJwtBearerClientAuthentication();




builder.Host.UseSerilog((ctx, logger) =>
{
    logger
        .MinimumLevel.Debug()
        .MinimumLevel.Override("Microsoft", LogEventLevel.Warning)
        .MinimumLevel.Override("System", LogEventLevel.Warning)
        .MinimumLevel.Override("Microsoft.AspNetCore.Authentication", LogEventLevel.Information)
        .WriteTo.Console(
            outputTemplate:
            "[{Timestamp:HH:mm:ss} {Level}] {SourceContext}{NewLine}{Message:lj}{NewLine}{Exception}{NewLine}")
        .Enrich.FromLogContext();
});

builder.Services.AddAuthentication()
    .AddLocalApi()
    .AddJwtBearer("dpop", options =>
    {
        //options.Authority = "https://localhost:5001";
        options.Authority = "https://demo.duendesoftware.com";

        options.TokenValidationParameters.ValidateAudience = false;
        options.MapInboundClaims = false;

        options.TokenValidationParameters.ValidTypes = new[] { "at+jwt" };
    });
builder.Services.ConfigureDPoPTokensForScheme("dpop", options =>
{
    options.Mode = DPoPMode.DPoPOnly;
});
//.AddOpenIdConnect("Google", "Sign-in with Google", options =>
//{
//    options.SignInScheme = IdentityServerConstants.ExternalCookieAuthenticationScheme;
//    options.ForwardSignOut = IdentityServerConstants.DefaultCookieAuthenticationScheme;

//    options.Authority = "https://accounts.google.com/";
//    options.ClientId = "708778530804-rhu8gc4kged3he14tbmonhmhe7a43hlp.apps.googleusercontent.com";

//    options.CallbackPath = "/signin-google";
//    options.Scope.Add("email");
//});

builder.Services.AddTransient<IProfileService, ProfileService>();
builder.Services.AddTransient<ILoginService<ApplicationUser>, EFLoginService>();
builder.Services.AddTransient<IRedirectService, RedirectService>();
builder.Services.AddTransient<IRedirectUriValidator, DemoRedirectValidator>();
builder.Services.AddTransient<ICorsPolicyService, DemoCorsPolicy>();

builder.Services.AddCors(options =>
{
    options.AddPolicy("allow_all",
        policy => { policy.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod(); });
});

var app = builder.Build();
app.UseSerilogRequestLogging();

app.MapDefaultEndpoints();

app.UseStaticFiles();

app.UseDeveloperExceptionPage();

// This cookie policy fixes login issues with Chrome 80+ using HTTP
app.UseCookiePolicy(new CookiePolicyOptions { MinimumSameSitePolicy = SameSiteMode.Lax });
app.UseRouting();
app.UseIdentityServer();
app.UseAuthorization();

app.MapDefaultControllerRoute();

app.UseCors("allow_all");
app.Run();
//dotnet ef migrations add UserContextInitial -c ApplicationDbContext -o Data
//dotnet ef database update  -c ApplicationDbContext 
//dotnet run --configuration Debug --launch-profile http