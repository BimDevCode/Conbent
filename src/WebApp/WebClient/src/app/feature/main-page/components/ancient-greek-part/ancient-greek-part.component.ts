import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ancient-greek-part',
  templateUrl: './ancient-greek-part.component.html',
  styleUrl: './ancient-greek-part.component.scss'
})
export class AncientGreekPartComponent implements OnInit {
[x: string]: any;
  imageUrlA = '../../../../../assets/Image/OrderPartA.jpeg';
  imageUrlB = '../../../../../assets/Image/OrderPartB.jpeg';
  imageUrlC = '../../../../../assets/Image/OrderPartC.jpeg';
  imageUrlD = '../../../../../assets/Image/OrderPartD.jpeg';
  imageUrlE = '../../../../../assets/Image/OrderPartE.jpeg';
  imageUrlF = '../../../../../assets/Image/OrderPartF.jpeg';
  imageUrlG = '../../../../../assets/Image/OrderPartG.jpeg';

  
  ngOnInit() {
  }
}
