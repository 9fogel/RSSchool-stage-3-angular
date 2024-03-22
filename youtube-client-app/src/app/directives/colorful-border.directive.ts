import { Directive, ElementRef, Input, Renderer2, OnChanges } from '@angular/core';

enum Colors {
  NewPost = 'blue',
  FreshPost = 'yellow',
  RegularPost = 'green',
  OldPost = 'red',
}

@Directive({
  selector: '[appColorfulBorder]',
})
export default class ColorfulBorderDirective implements OnChanges {
  @Input() date?: string;

  private color = Colors.OldPost;

  constructor(private elementRef: ElementRef, private renderer2: Renderer2) {}

  ngOnChanges(): void {
    this.setColor();
    this.renderer2.setStyle(
      this.elementRef.nativeElement,
      'border-bottom',
      `5px solid ${this.color}`,
    );
  }

  private setColor(): void {
    if (this.date) {
      const PASSED_MS = Date.parse(this.date);
      const TODAY = Date.now();
      const TIME_DIFF = TODAY - PASSED_MS;

      const DAY_MS = 24 * 60 * 60 * 1000;
      const SEVEN_DAYS_MS = 7 * DAY_MS;
      const MONTH_MS = 30 * DAY_MS;
      const HALF_A_YEAR_MS = 6 * MONTH_MS;

      if (TIME_DIFF < SEVEN_DAYS_MS) {
        this.color = Colors.NewPost;
      } else if (TIME_DIFF >= SEVEN_DAYS_MS && TIME_DIFF < MONTH_MS) {
        this.color = Colors.FreshPost;
      } else if (TIME_DIFF >= MONTH_MS && TIME_DIFF < HALF_A_YEAR_MS) {
        this.color = Colors.RegularPost;
      } else {
        this.color = Colors.OldPost;
      }
    }
  }
}
