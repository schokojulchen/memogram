import { Pipe, PipeTransform } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Pipe({
  name: 'protectedImage'
})
export class ProtectedImagePipe implements PipeTransform {

  constructor(private http: HttpClient, private sanitizer: DomSanitizer) { }

  transform(url: string): any {

    //return this.http.get(url, { responseType: 'blob' })
    //  .subscribe(blob => {
    //    return URL.createObjectURL(blob);
    //  });

    return this.http.get(url, { responseType: 'blob' })
      .pipe(map(res => this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(res)))
      );

  }

}
