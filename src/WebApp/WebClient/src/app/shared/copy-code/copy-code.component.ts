import { AfterViewChecked, AfterViewInit, Component, ElementRef, Inject, OnInit, Renderer2, ViewChild } from '@angular/core';
import { PrismService } from '../../core/services/prism.service';
import Prism from 'prismjs';
import { ClipboardService } from 'ngx-clipboard';

@Component({
  selector: 'app-copy-code',
  templateUrl: './copy-code.component.html',
  styleUrl: './copy-code.component.scss'
})
export class CopyCodeComponent implements  AfterViewChecked{
  @ViewChild('codeBlock') codeBlock!: ElementRef;
  highlighted: boolean = false;
  code: string = `public class MappingProfiles : Profile
{
    public MappingProfiles()
    {
        CreateMap<ArticleEntity, ArticleDto>()
            .ForMember(d => d.Texts, o 
                => o.MapFrom(s => s.Texts!.Select(x => x.Content)))
            .ForMember(d => d.AuthorNameSurname, o
                => o.MapFrom(s => s.Author.Name))
            .ReverseMap();
    }
}`;

  constructor(private prismService: PrismService,private clipboardService: ClipboardService) {}

  ngAfterViewChecked(): void {
    try {
      this.prismService.returnLanguages();
      this.prismService.highlightAll();
    }
    catch (error)
    {
      console.log(error);
    }
  }

  copyText() {
    try {
      this.clipboardService.copyFromContent(this.code);
    } catch (error) {
      console.log(error);
    }
  }
}
