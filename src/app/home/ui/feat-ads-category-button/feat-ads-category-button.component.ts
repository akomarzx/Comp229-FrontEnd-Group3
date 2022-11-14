import { AfterContentInit, Component, ContentChild, ElementRef, EventEmitter, OnDestroy, Output } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';

@Component({
  selector: 'app-feat-ads-category-button',
  templateUrl: './feat-ads-category-button.component.html',
  styleUrls: ['./feat-ads-category-button.component.css']
})
export class FeatAdsCategoryButtonComponent implements  AfterContentInit,OnDestroy {

  constructor() { 
    this.categoryActivated = new EventEmitter<void>;
  }
  ngOnDestroy(): void {
    this.buttonSubscription?.unsubscribe();
  }
  
  ngAfterContentInit(): void {
    this.buttonSubscription = fromEvent(this.button.nativeElement, 'click').subscribe( event => 
      this.categoryActivated.emit()
    )
  }
  
  @ContentChild('catButton') button! : ElementRef;
  @Output() categoryActivated : EventEmitter<void>;
  buttonSubscription! : Subscription | null;
}
