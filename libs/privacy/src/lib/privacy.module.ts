import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { PiracyComponent } from './piracy/shell-feature/piracy.component';

@NgModule({
  imports: [ CommonModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: PiracyComponent
      }
    ]), TranslateModule ],
  declarations: [PiracyComponent]
})
export class PrivacyModule {}
