import { Component, Input } from '@angular/core';
import { SpinnerService } from '../../../core/core.index';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-loader',
    templateUrl: './loader.component.html',
    styleUrls: ['./loader.component.scss'],
    imports: [CommonModule],
})
export class LoaderComponent {
  @Input() type: 'page' | 'content' = 'page';
loading$!: Observable<boolean>; 
  constructor(public spinner: SpinnerService) {
    
  }
   ngOnInit() {
    this.loading$ = this.spinner.loading$;
  }


 

}
