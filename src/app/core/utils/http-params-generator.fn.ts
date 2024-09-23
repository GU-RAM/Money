import { HttpParams } from '@angular/common/http';

export function getHttpParams<T>(model: T): HttpParams {
  let params = new HttpParams();

  if (model) {
    for (const [key, value] of Object.entries(model)) {
      if (value !== null && value !== undefined && value !== '') {
        if (Array.isArray(value)) {
          value.forEach((val) => (params = params.append(key, val)));
        } else {
          params = params.append(key, value as any);
        }
      }
    }
  }

  return params;
}
