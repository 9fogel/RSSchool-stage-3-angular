import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export default class YoutubeService {
  constructor(private router: Router, private route: ActivatedRoute) {}

  videoId?: string;

  redirectToDetailsPage(value: string): void {
    this.videoId = value;
    this.router.navigate(['youtube', this.videoId]);
  }

  returnToMainPage(): void {
    this.router.navigate(['youtube']);
  }
}
