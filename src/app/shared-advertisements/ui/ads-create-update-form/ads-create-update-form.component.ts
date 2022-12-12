import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Advertisement, AdvertRequiredProps } from '../../data-access/models/advertisement.model';
import dateFormat, { masks } from "dateformat";
import { Storage, ref, uploadBytesResumable, getDownloadURL } from '@angular/fire/storage';
import { BehaviorSubject, Observable } from 'rxjs';
@Component({
  selector: 'app-ads-create-update-form',
  templateUrl: './ads-create-update-form.component.html',
  styleUrls: ['./ads-create-update-form.component.css']
})
export class AdsCreateUpdateFormComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private storage: Storage) {
    this.formSubmission = new EventEmitter<any>();
  }
  ngOnInit(): void {
    if (this.isEditMode) {
      this.route.data.subscribe(({ advertisement }) => {
        let advert = advertisement as Advertisement;
        this.advertForm.setValue({
          _id: advert._id,
          adsTitle: advert.adsTitle,
          price: advert.price.toString(),
          status: advert.status,
          activeDate: dateFormat(advert.activeDate, 'yyyy-mm-dd', true),
          expiryDate: dateFormat(advert.expiryDate, 'yyyy-mm-dd', true),
          description: {
            itemName: advert.description.itemName,
            description: advert.description.description,
            category: advert.description.category,
            condition: advert.description.condition,
            image: advert.description.image
          },
        })
      })
      this.shouldSubmitBeDisabled$.next(false);
    }
  }

  advertForm = this.formBuilder.group({
    _id: [''],
    adsTitle: ['', Validators.required],
    price: ['', Validators.required],
    status: ['', Validators.required],
    activeDate: ['', Validators.required],
    expiryDate: ['', Validators.required],
    description: this.formBuilder.group({
      itemName: ['', Validators.required],
      description: ['', Validators.required],
      category: ['', Validators.required],
      condition: ['', Validators.required],
      image: ['']
    }),
  })


  onSubmit() {
    console.log(this.advertForm.value)
    this.formSubmission.emit(this.advertForm.value);
  }
  @Input() isEditMode: boolean | undefined;
  @Input() advetisementToUpdated: Advertisement | undefined;
  @Input() currentUser!: string;
  @Output() formSubmission: EventEmitter<any>;

  file: any;
  disableSubmit = true;
  progessNumber: number = 0;
  isUploadingCommenced = false;

  shouldSubmitBeDisabled$: BehaviorSubject<boolean> = new BehaviorSubject(true)
  onFileSelected(event: any) {
    this.file = event.target.files[0];
  }
  onUpload() {
    const storageRef = ref(this.storage, this.file.name)
    const uploadTask = uploadBytesResumable(storageRef, this.file);
    uploadTask.on('state_changed',
      (snapshot) => {
        this.progessNumber = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        this.isUploadingCommenced = true;
      },
      (error) => {
        console.log(error);
      },
      () => {
        this.shouldSubmitBeDisabled$.next(false);
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          this.advertForm.get('description')?.get('image')?.setValue(url)
        })
      }
    )
  }
}
