import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export default class AuthInterceptor implements HttpInterceptor {
  // eslint-disable-next-line class-methods-use-this
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const KEY = 'AIzaSyAO-0r8jsleM0rvGc5I-HcR3ZP83t6flS0';
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
