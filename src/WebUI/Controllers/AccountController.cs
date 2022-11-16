using Microsoft.AspNetCore.Mvc;

namespace WebUi.Controllers
{
    public class AccountController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
