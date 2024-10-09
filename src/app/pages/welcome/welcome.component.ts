import { Component, OnInit } from '@angular/core';
import { ChooseCategoryComponent } from './choose-category/choose-category.component';
import { ChosenComponent } from './chosen/chosen.component';
import { PopularServicesComponent } from './popular-services/popular-services.component';
import { CommonModule } from '@angular/common';
import { NzInputModule } from 'ng-zorro-antd/input';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [ChooseCategoryComponent, ChosenComponent, PopularServicesComponent, CommonModule, NzInputModule],
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
