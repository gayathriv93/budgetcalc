import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from './popup/popup.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myform: FormGroup;
  x: any
  y: any
  z: any
  sav : any
  d:any
  title = 'budgetcalc';

  constructor(private fb: FormBuilder, public dialog: MatDialog) {
    this.myform = this.fb.group({
      income: ['', Validators.required],
      rent: [''],
      food: [''],
      utility: [''],
      insurance: [''],
      other: ['']


    })
  }

  openPupUp(): void {
    const dialogRef = this.dialog.open(PopupComponent, {
      data: [this.z, this.sav]
      
    });
    
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  onSubmit() {
    this.x = this.myform.value.income;
    console.log(this.x);
    this.y = (this.myform.value.rent + this.myform.value.food + this.myform.value.utility + this.myform.value.insurance + this.myform.value.other)
    console.log(this.y)
    this.z = this.x - this.y;
    this.sav =  (this.x*30/100);
    console.log(this.sav)
    this.openPupUp()
  
  }


}
