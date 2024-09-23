import { Component, effect, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { DecoratorService, LoadingService, Loading } from '@wallet/core';
import { NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NzSpinModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [DecoratorService, NzModalService],
})
export class AppComponent {
  //To create instance for decorators
  private _ = inject(DecoratorService);
  private _loadingService = inject(LoadingService);

  get isLoadingForGet(): boolean {
    return Loading.isLoadingForGet;
  }

  get isLoadingForRest(): boolean {
    return Loading.isLoadingForRest;
  }

  constructor() {
    effect(() => {
      Loading.isLoadingForGet = this._loadingService.loadingSubForGet();
      Loading.isLoadingForRest = this._loadingService.loadingSubForRest();
    });
  }
}
