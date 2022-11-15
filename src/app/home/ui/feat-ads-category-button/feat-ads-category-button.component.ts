import { AfterContentInit, Component, ContentChild, ElementRef, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { fromEvent, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-feat-ads-category-button',
  templateUrl: './feat-ads-category-button.component.html',
  styleUrls: ['./feat-ads-category-button.component.css']
})
export class FeatAdsCategoryButtonComponent implements  AfterContentInit,OnDestroy {

  constructor() { 
    this.activated = new EventEmitter<void>;
  }
  ngOnDestroy(): void {
    this.buttonSubscription?.unsubscribe();
  }
  
  ngAfterContentInit(): void {
    this.buttonSubscription = fromEvent(this.button.nativeElement, 'click').subscribe( event => 
      this.activated.emit()
    )
  }
  @ContentChild('catButton') button! : ElementRef;
  @Output() activated : EventEmitter<void>;
  buttonSubscription! : Subscription | null;
}
