import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlankComponent } from 'src/app/common/components/blank/blank.component';
import { SectionComponent } from 'src/app/common/components/blank/section/section.component';
import { ValidInputDirective } from 'src/app/common/directives/valid-input.directive';
import { LoadingButtonComponent } from 'src/app/common/components/loading-button/loading-button.component';
import { NavModel } from 'src/app/common/components/blank/models/nav.model';

@Component({
  selector: 'app-ucafs',
  standalone: true,
  imports: [CommonModule ,BlankComponent,SectionComponent, FormsModule,ValidInputDirective,LoadingButtonComponent,],
  templateUrl: './ucafs.component.html',
  styleUrls: ['./ucafs.component.css']
})
export class UcafsComponent {
navs: NavModel[] = [
    {
      routerLink: "/",
      class: "",
      name: "Ana Sayfa"
    },
    {
      routerLink: "/ucafs",
      class: "active",
      name: "Hesap Planı"
    }
  ]
  //ucafs: UcafModel[] = [];
  //updateModel:UcafModel = new UcafModel();
  ucafType: string = "M";
  filterText: string = "";

  isLoading: boolean = false;

  isAddForm: boolean = false;
  isUpdateForm: boolean = false;
}
