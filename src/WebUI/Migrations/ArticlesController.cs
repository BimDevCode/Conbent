using Microsoft.AspNetCore.Mvc;

namespace WebUi.Migrations
{
    public class ArticlesController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
