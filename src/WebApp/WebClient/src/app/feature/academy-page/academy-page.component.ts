import { Component } from '@angular/core';

@Component({
  selector: 'app-academy-page',
  templateUrl: './academy-page.component.html',
  styleUrl: './academy-page.component.scss'
})
export class AcademyPageComponent {
  CodeVariable = `public async Task<IActionResult> Index()
                  {
                    return View(await _context.Articles.ToListAsync());
                  }`

}
