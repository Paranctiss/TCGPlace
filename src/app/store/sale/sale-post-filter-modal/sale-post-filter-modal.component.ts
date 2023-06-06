import {Component, OnInit} from '@angular/core';
import {CheckboxChangeEventDetail, CheckboxCustomEvent, ModalController} from "@ionic/angular";
import {ExtensionCardService} from "../../../home/components/extension-card-slider/services/extension-card.service";
import {Observable} from "rxjs";
import {ExtensionModel} from "../../../home/components/extension-card-slider/models/extension.model";
import {GradingModel} from "../../../core/models/grading.model";
import {GradingService} from "../../../core/services/GradingService/grading.service";

@Component({
  selector: 'app-sale-post-filter-modal',
  templateUrl: './sale-post-filter-modal.component.html',
  styleUrls: ['./sale-post-filter-modal.component.scss']
})
export class SalePostFilterModalComponent implements OnInit{

  extensions$!:Observable<ExtensionModel[]>
  gradings$!:Observable<GradingModel[]>
  checkedExtenions:ExtensionModel[] = []
  checkedGradings:GradingModel[] = []

  constructor(private modalCtrl: ModalController, private extensionService:ExtensionCardService, private gradingService:GradingService) {
  }

  ngOnInit(): void {
    this.extensions$ = this.extensionService.GetAllExtensions();
    this.gradings$ = this.gradingService.GetAllGradings();
  }

  checkboxExtensionChanged(event:any, value:ExtensionModel){
    if (event.detail.checked) {
      this.checkedExtenions.push(value);
    } else {
      const index = this.checkedExtenions.indexOf(value);
      if (index > -1) {
        this.checkedExtenions.splice(index, 1);
      }
    }
  }

  checkboxGradingChanged(event:any, value:GradingModel){
    if (event.detail.checked) {
      this.checkedGradings.push(value);
    } else {
      const index = this.checkedGradings.indexOf(value);
      if (index > -1) {
        this.checkedGradings.splice(index, 1);
      }
    }
  }

  cancell() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm(){
    return this.modalCtrl.dismiss({extensions : this.checkedExtenions, gradings: this.checkedGradings}, 'confirm');
  }


}
