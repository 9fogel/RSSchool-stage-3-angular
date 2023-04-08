import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export default class AuthInterceptor implements HttpInterceptor {
  // eslint-disable-next-line class-methods-use-this
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const KEY = 'AIzaSyDml6GPv6YEhFIYHqzztnCgxlGrQr5UHWA';
    const YOUTUBE_URL = 'https://www.googleapis.com/youtube/v3';

    return next.handle(
      request.clone({
        url: `${YOUTUBE_URL}/${request.url}`,
        setParams: {
          key: KEY,
        },
      }),
    );
  }
}
