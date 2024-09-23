import { Pipe, PipeTransform, inject } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
  name: 'safeUrl',
  standalone: true,
})
export class SafeUrlPipe implements PipeTransform {
  domSanitizer = inject(DomSanitizer);

  transform(value: string): SafeResourceUrl {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(value);
  }
}
