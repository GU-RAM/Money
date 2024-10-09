import { Component } from '@angular/core';
import { NzCardModule } from 'ng-zorro-antd/card';
import { Chosen, CHOSEN } from '../models';
import { IMAGES } from '@wallet/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzLayoutModule } from 'ng-zorro-antd/layout';

const Modules = [RouterOutlet, RouterLink, NzLayoutModule, NzToolTipModule];

@Component({
  selector: 'chosen',
  standalone: true,
  imports: [...Modules, NzCardModule],
  templateUrl: './chosen.component.html',
  styleUrl: './chosen.component.scss',
})
export class ChosenComponent {
  chosenProducts: Chosen[] = CHOSEN.slice(0, 6);
  imagePath: string = IMAGES;
}
