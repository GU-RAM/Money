import { InjectionToken, PLATFORM_ID, inject } from '@angular/core';

export const WINDOW = new InjectionToken<Window>('Window Object', {
  providedIn: 'root',
  factory: () => {
    return inject(PLATFORM_ID) === 'browser' ? window : ({} as Window);
  },
});

export const BROWSER_STORAGE = new InjectionToken<Storage>('Browser Storage', {
  providedIn: 'root',
  factory: () => localStorage,
});
