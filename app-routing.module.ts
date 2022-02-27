import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildComponent } from './components/child/child.component';
import { FormTestComponent } from './components/form-test/form-test.component';
import { ObservableTestComponent } from './components/observable-test/observable-test.component';
import { ParentComponent } from './components/parent/parent.component';
import { PipeComponent } from './components/pipe/pipe.component';
import { ProductsComponent } from './components/products/products.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path:"user", component:UserComponent},
  {path:"reg", component:RegisterComponent},
  {path:"parent", component:ParentComponent},
  {path:"prod", component:ProductsComponent},
  {path:"obsr", component:ObservableTestComponent},
  {path:"pipe", component:PipeComponent},
  {path:"form", component:FormTestComponent},
  {path:"**", component:UserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

