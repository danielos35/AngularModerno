import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NotesComponent } from './notes/notes.component';
import { TestingRoutingModule } from './testing.routing.module';



@NgModule({
  declarations: [
    HomeComponent,
    NotesComponent
  ],
  imports: [
    CommonModule,
    TestingRoutingModule
  ]
})
export class TestingModule { }
