import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'nx-example-piracy',
  templateUrl: './piracy.component.html',
  styleUrls: ['./piracy.component.css']
})
export class PiracyComponent implements OnInit {

  name: string;
  constructor(private translate: TranslateService) {}

  ngOnInit() {
  this.translate.get('privacy.name', {title: 'Test'}).subscribe(value => {
      this.name = value;
    });
  }

}
