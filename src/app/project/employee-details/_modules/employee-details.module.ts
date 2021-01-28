import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeDetailsService } from '../_services/employee-details.service';
import {MatCardModule} from '@angular/material/card';
import { EmployeeDetailsComponent } from '../employee-details.component';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button'
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http'
import { MatTableModule } from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatIconModule} from '@angular/material/icon';
import { EffectsModule, USER_PROVIDED_EFFECTS } from '@ngrx/effects';
import { EmployeeEffects } from '../_effects/employee.effects';


@NgModule({
  declarations: [
    EmployeeDetailsComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    FlexLayoutModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    EffectsModule.forRoot([EmployeeEffects])
    
    
  ],
  providers: [EmployeeDetailsService , EmployeeEffects,
    {
      provide: USER_PROVIDED_EFFECTS,
      multi: true,
      useValue: [EmployeeEffects],
    },]
})
export class EmployeeDetailsModule { }
