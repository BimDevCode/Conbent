using Microsoft.AspNetCore.Mvc;

namespace WebUi.Controllers;
public class ContentController : Controller
{

    public IActionResult Article()
    {
        return View();
    }

    public IActionResult Programming()
    {
        return View();
    }
}
