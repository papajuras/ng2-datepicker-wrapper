import {Component} from 'angular2/core';
import {DatepickerComponent} from "./components/common/datepicker.component";
@Component({
  selector: 'ng2-datepicker-wrapper',
  templateUrl: `app/app.component.html`,
  directives: [DatepickerComponent]
})
export class AppComponent {
 private date: string;
 private date2: string;
}
