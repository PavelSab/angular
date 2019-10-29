import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

const ngCoreModules = [
  CommonModule,
  ReactiveFormsModule,
];
const materialModules = [
];
@NgModule({
  imports: [...ngCoreModules, ...materialModules],
  exports: [...ngCoreModules, ...materialModules]
})
export class SharedModules {

}
