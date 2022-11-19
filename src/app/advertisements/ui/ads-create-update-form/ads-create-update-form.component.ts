import { Component, Input, OnInit } from '@angular/core';
import { Advertisement } from '../../data-access/models/advertisement.model';

@Component({
  selector: 'app-ads-create-update-form',
  templateUrl: './ads-create-update-form.component.html',
  styleUrls: ['./ads-create-update-form.component.css']
})
export class AdsCreateUpdateFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() isEditMode : boolean | undefined;
  @Input() advetisementToUpdated : Advertisement | undefined;
}
