import { Component } from '@angular/core';
import { NzCardModule } from 'ng-zorro-antd/card';
import { CHOOSE_CATEGORY } from '../models';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzLayoutModule } from 'ng-zorro-antd/layout';

const Modules = [RouterOutlet, RouterLink, NzLayoutModule, NzToolTipModule];

@Component({
  selector: 'choose-category',
  standalone: true,
  imports: [...Modules, NzCardModule],
  templateUrl: './choose-category.component.html',
  styleUrl: './choose-category.component.scss',
})
export class ChooseCategoryComponent {
  categories: string[] = CHOOSE_CATEGORY;
}
