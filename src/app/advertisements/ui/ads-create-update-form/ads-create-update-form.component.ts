import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Advertisement } from '../../data-access/models/advertisement.model';
import dateFormat, { masks } from "dateformat";
import { now } from 'mongoose';
@Component({
  selector: 'app-ads-create-update-form',
  templateUrl: './ads-create-update-form.component.html',
  styleUrls: ['./ads-create-update-form.component.css']
})
export class AdsCreateUpdateFormComponent implements OnInit{

  constructor(private formBuilder: FormBuilder, private route : ActivatedRoute) {
    this.formSubmission = new EventEmitter<any>();
  }
  ngOnInit(): void {
    this.route.data.subscribe(({advertisement}) => {
      console.log(advertisement)
      let advert = advertisement as Advertisement;
      this.advertForm.setValue({
        _id: advert._id,
        adsTitle: advert.adsTitle,
        price: advert.price.toString(),
        status: advert.status,
        activeDate: dateFormat(+advert.activeDate, 'yyyy-mm-dd'),
        expiryDate: dateFormat(+advert.expiryDate, 'yyyy-mm-dd'),
        description: {
          itemName: advert.description.itemName,
          description: advert.description.description,
          category: advert.description.category,
          condition: advert.description.condition
        }
      })
    })
  }

  advertForm = this.formBuilder.group({
    _id: ['', Validators.required],
    adsTitle: ['', Validators.required],
    price: ['', Validators.required],
    status: ['', Validators.required],
    activeDate: ['', Validators.required],
    expiryDate: ['', Validators.required],
    description: this.formBuilder.group({
      itemName: ['', Validators.required],
      description: ['', Validators.required],
      category: ['', Validators.required],
      condition: ['', Validators.required]
    })
  })
  onSubmit() {
    this.formSubmission.emit(this.advertForm.value);
  }
  @Input() isEditMode: boolean | undefined;
  @Input() advetisementToUpdated: Advertisement | undefined;

  @Output() formSubmission: EventEmitter<any>;
}
