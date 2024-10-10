import { Component, OnInit } from '@angular/core';
import { ChooseCategoryComponent } from './choose-category/choose-category.component';
import { ChosenComponent } from './chosen/chosen.component';
import { PopularServicesComponent } from './popular-services/popular-services.component';
import { CommonModule } from '@angular/common';
import { NzInputModule } from 'ng-zorro-antd/input';
import { ASIDE_DATA, MAIN_SIDEBAR_CAROUSEL_DATA } from './models';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [
    ChooseCategoryComponent,
    ChosenComponent,
    PopularServicesComponent,
    CommonModule,
    NzInputModule,
    NzIconModule,
    NzCarouselModule,
  ],
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {
  asideNavData = ASIDE_DATA;
  mainSidebarCarouselData = MAIN_SIDEBAR_CAROUSEL_DATA;

  constructor() {}

  ngOnInit() {}
}
