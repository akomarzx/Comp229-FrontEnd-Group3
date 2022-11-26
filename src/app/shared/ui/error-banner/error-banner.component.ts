import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-error-banner',
  templateUrl: './error-banner.component.html',
  styleUrls: ['./error-banner.component.css']
})
export class ErrorBannerComponent implements OnInit {

  constructor() {
    this.shouldDisplay = false;
    this.errorMessage = '';
    this.errorDismissed = new EventEmitter<void>();
  }

  ngOnInit(): void {
  }

  @Input() shouldDisplay: boolean | null;
  @Input() errorMessage: string | null;
  @Output() errorDismissed: EventEmitter<void>

  onErrorDismissed() {
    this.errorDismissed.emit();
  }
}
