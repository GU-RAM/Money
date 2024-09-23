import { ApplicationConfig, provideZoneChangeDetection, importProvidersFrom } from '@angular/core';
import { provideRouter, withComponentInputBinding, withPreloading, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { icons } from './icons-provider';
import { provideNzIcons } from 'ng-zorro-antd/icon';
import { ka_GE, provideNzI18n } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import ka from '@angular/common/locales/ka';
import { FormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { CustomPreloadingStrategyService } from '@wallet/core';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

registerLocaleData(ka);

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withViewTransitions(), withPreloading(CustomPreloadingStrategyService), withComponentInputBinding()),
    provideNzI18n(ka_GE),
    importProvidersFrom(
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient],
        },
      }),
    ),
    provideNzIcons(icons),
    importProvidersFrom(FormsModule),
    provideAnimationsAsync(),
    provideHttpClient(),
  ],
};
