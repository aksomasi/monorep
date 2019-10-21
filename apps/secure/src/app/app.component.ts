import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'nx-example-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'secure';
  constructor(private translateService: TranslateService){
    this.translateService.addLangs(['en-US']);
    this.translateService.setDefaultLang('en-US');
  }
}
