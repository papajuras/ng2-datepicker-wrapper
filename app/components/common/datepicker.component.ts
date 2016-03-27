import {Component, AfterViewChecked, EventEmitter, Output, Input} from 'angular2/core';
@Component({
  selector: 'ng2-datepicker',
  templateUrl: `app/components/common/datepicker.component.html`
})
export class DatepickerComponent implements AfterViewChecked {
 @Input() ID: string;
 @Output() dateSelected: EventEmitter<string> = new EventEmitter();
 private date: string;
 ngAfterViewChecked(): void {
  let datepickerElement = $('#' + this.ID);
   datepickerElement.datetimepicker();
   datepickerElement.on('dp.change', e => {
            this.date = e.date;
            this.dateSelected.emit(this.date);
        });
 }
}
