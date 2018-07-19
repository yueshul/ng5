import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';     // Add this
import { AboutComponent } from './about/about.component';  // Add this

const routes: Routes = [
{
    path: '',
    component: HomeComponent
},
{
    //This is designating that anything after about/ will be referred 
    //to as id, which is a route parameter. You can, of course, 
    //create multiple parameters within a single URL as such: about/:id/:whatever.
    path: 'about/:id',
    component: AboutComponent
}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }