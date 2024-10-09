import { Component } from '@angular/core';
import { NzCardModule } from 'ng-zorro-antd/card';
import { POPULAR } from '../models';
import { CommonModule } from '@angular/common';
import { IMAGES } from '@wallet/core';

@Component({
  selector: 'popular-services',
  standalone: true,
  imports: [NzCardModule, CommonModule],
  templateUrl: './popular-services.component.html',
  styleUrl: './popular-services.component.scss',
})
export class PopularServicesComponent {
  popularServices: string[] = POPULAR.slice(0, 16);
  imagePath: string = IMAGES;

  gridStyle = {
    width: '12.5%',
    textAlign: 'center',
  };
}
