import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DragAreaComponent } from './components/drag-area/drag-area.component';

const routes: Routes = [
  {path: "", component: DragAreaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
