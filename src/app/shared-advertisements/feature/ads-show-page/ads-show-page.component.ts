import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Update } from '@ngrx/entity';
import { Store } from '@ngrx/store';
import dateFormat from 'dateformat';
import { Observable, Subscription, tap } from 'rxjs';
import { selectHasAuthError, selectIsOwner } from 'src/app/auth/data-access/store';
import { selectRouteParams } from 'src/app/shared/store/router.selectors';
import { Advertisement } from '../../data-access/models/advertisement.model';
import { selectAllAdvertisement, selectHasApiErrored, selectIsAdvertisementExpired, selectAdvertisement } from '../../data-access/store';
import { selectHasApiError } from '../../data-access/store/advertisements/advertisement.reducer';
import * as fromAdsActions from '../../data-access/store/advertisements/advertisement.actions'
@Component({
  selector: 'app-ads-show-page',
  templateUrl: './ads-show-page.component.html',
  styleUrls: ['./ads-show-page.component.css']
})
export class AdsShowPageComponent implements OnInit {

  constructor(private route: ActivatedRoute, private store: Store, private router: Router, private fb: FormBuilder) {
    this.isCurrentUseTheOwner$ = this.store.select(selectIsOwner);
    this.hasError$ = this.store.select(selectHasApiErrored)
    this.isAdsExpired$ = this.store.select(selectIsAdvertisementExpired)
    this.currentAdvert$ = this.store.select(selectAdvertisement)
  }
  ngOnInit() {
    this.currentAdvert$.subscribe(
      (data) => {
        this.selectedAdvert = data;
      }
    )
  }

  currentAdvert$: Observable<Advertisement | undefined>;
  selectedAdvert!: Advertisement | undefined;
  isCurrentUseTheOwner$: Observable<boolean> | undefined;
  hasError$: Observable<boolean> | undefined;
  isAdsExpired$: Observable<boolean> | undefined;

  // isAnsweringActive: boolean = false;
  isQuestioningActive: boolean = false;

  onUserWantsToAsk() {
    this.isQuestioningActive = !this.isQuestioningActive;
  }
  // onOwnerWantsToAnswer() {
  //   this.isAnsweringActive = !this.isAnsweringActive;
  // }

  newQuestionForm = this.fb.group({
    question: ['', Validators.required],
    username: ['']
  }
  )

  answerQuestionForm = this.fb.group({
    answer: ['', Validators.required]
  })

  answerQuestion(i: number) {
    // console.log(this.selectedAdvert)
    let newData = this.selectedAdvert?.inquiries.map(
      (data, index) => {
        if (index === i) {
          return Object.assign({}, data, { answer: this.answerQuestionForm.get('answer')?.value });
        }
        return data;
      }
    )
    let newAd = Object.assign({}, this.selectedAdvert, { inquiries: newData })
    const editedAds: Update<Advertisement> = {
      id: this.selectedAdvert?._id!,
      changes: newAd
    }
    this.store.dispatch(fromAdsActions.onAnswerQuestion({ advertisement: editedAds }));
    this.answerQuestionForm.reset();
  }

  addNewQuestion() {
    let username = this.newQuestionForm.get('username')?.value;
    let question = this.newQuestionForm.get('question')?.value
    let newAds = Object.assign({}, this.selectedAdvert, { inquiries: [...this.selectedAdvert?.inquiries!, { username: username, question: question, answer: '' }] })
    const editedAds: Update<Advertisement> = {
      id: this.selectedAdvert?._id!,
      changes: newAds
    }
    this.store.dispatch(fromAdsActions.onAddNewQuestion({ advertisement: editedAds }));
    this.newQuestionForm.reset();
  }
}
