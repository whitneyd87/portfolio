import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { WorkComponent } from './work/work.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([

	  	{
	  		path: 'about', component: AboutComponent
	  	},
	  	{
	  		path: 'work', component: WorkComponent
	  	},
	  	{
	  		path: 'contact', component: ContactComponent
	  	}

  	])

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
