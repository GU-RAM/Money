import { HttpResponse } from '@angular/common/http';

export function downloadExcel(response: HttpResponse<Blob>, fileName?: string) {
  const contentDisposition = response.headers.get('Content-Disposition');
  const nameFromServer = contentDisposition?.split(';')[1].split('filename')[1].split('=')[1].split('"')[1];

  const name = fileName ? fileName : nameFromServer;
  const blob = new Blob([response.body!]);
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);
  link.href = url;
  link.download = fileName ? `${name}.xlsx` : nameFromServer ?? '';
  link.click();
  URL.revokeObjectURL(url);
}
