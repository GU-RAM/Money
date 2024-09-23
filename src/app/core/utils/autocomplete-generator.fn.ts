import { Observable, debounceTime, distinctUntilChanged, filter, map, switchMap } from 'rxjs';

export function GetAutocomplete<T>(search$: Observable<string>, sourceFn$: (search: string) => Observable<T>): Observable<T>;
export function GetAutocomplete<T, R>(
  search: Observable<string>,
  sourceFn$: (search: string) => Observable<T>,
  mapFn: (res: T) => R,
): Observable<R>;

export function GetAutocomplete<T, R = undefined>(
  search$: Observable<string>,
  sourceFn$: (search: string) => Observable<T>,
  mapFn?: (res: T) => R,
): Observable<T | R> {
  return search$.pipe(
    debounceTime(700),
    distinctUntilChanged(),
    filter((t) => !!t && t.length > 3),
    switchMap(sourceFn$),
    map((res) => {
      if (!!mapFn) {
        return mapFn(res);
      } else {
        return res;
      }
    }),
  );
}
