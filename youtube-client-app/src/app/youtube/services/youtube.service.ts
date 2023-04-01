import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export default class YoutubeService {
  constructor(private router: Router) {}

  videoId?: string;

  redirectToDetailsPage(value: string): void {
    this.videoId = value;
    this.router.navigate(['youtube', this.videoId]);
  }

  returnToMainPage(): void {
    this.router.navigate(['youtube']);
  }

  redirectToPageNotFound(): void {
    this.router.navigate(['**']);
  }
}
