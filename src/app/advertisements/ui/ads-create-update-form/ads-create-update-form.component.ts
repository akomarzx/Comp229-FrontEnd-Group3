import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Advertisement } from '../../data-access/models/advertisement.model';

@Component({
  selector: 'app-ads-create-update-form',
  templateUrl: './ads-create-update-form.component.html',
  styleUrls: ['./ads-create-update-form.component.css']
})
export class AdsCreateUpdateFormComponent {

  constructor(private formBuilder : FormBuilder) { }

  advertForm = this.formBuilder.group({
    
  })

  @Input() isEditMode : boolean | undefined;
  @Input() advetisementToUpdated : Advertisement | undefined;


}
