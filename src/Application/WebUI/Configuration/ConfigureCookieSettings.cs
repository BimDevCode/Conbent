namespace WebUi.Configuration;
/// <summary>
/// EShopOnWeb Project Class
/// </summary>
public static class ConfigureCookieSettings
{
    public const int ValidityMinutesPeriod = 60;//Save cookie period
    public const string IdentifierCookieName = "ConbentIdentifier";// cookieName

    public static IServiceCollection AddCookieSettings(this IServiceCollection services)//Use explict for creating cookie service
    {
        services.Configure<CookiePolicyOptions>(options =>
        {
                // This lambda determines whether user consent for non-essential cookies is needed for a given request.
                //TODO need to check that.
                //options.CheckConsentNeeded = context => true;
                options.MinimumSameSitePolicy = SameSiteMode.Strict;
        });
        services.ConfigureApplicationCookie(options =>
        {
            options.EventsType = typeof(RevokeAuthenticationEvents);
            options.Cookie.HttpOnly = true;
            options.ExpireTimeSpan = TimeSpan.FromMinutes(ValidityMinutesPeriod);
            options.LoginPath = "/Account/Login";
            options.LogoutPath = "/Account/Logout";
            options.Cookie = new CookieBuilder
            {
                Name = IdentifierCookieName,
                IsEssential = true // required for auth to work without explicit user consent; adjust to suit your privacy policy
                };
        });

        services.AddScoped<RevokeAuthenticationEvents>();

        return services;
    }
}
