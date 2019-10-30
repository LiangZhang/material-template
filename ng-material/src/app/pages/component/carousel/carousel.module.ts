import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NgbdCarouselBasic } from './carousel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
 
const routes: Routes = [{
	path: '',
	data: {
      title: 'Carousel page',
      urls: [{title: 'Dashboard', url: '/'},{title: 'Angular Component'},{title: 'Carousel page'}]
    },
	component: NgbdCarouselBasic
}];

@NgModule({
	imports: [
    	FormsModule,
    	CommonModule,
      
      NgbModule,
    	RouterModule.forChild(routes)
    ],
	declarations: [NgbdCarouselBasic]
})
export class ButtonsModule { }