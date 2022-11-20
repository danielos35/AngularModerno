import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-child-stand-alone',
  standalone: true,
  imports: [CommonModule, MatExpansionModule],
  templateUrl: './child-stand-alone.component.html',
  styleUrls: ['./child-stand-alone.component.scss'],
})
export class ChildStandAloneComponent {}
