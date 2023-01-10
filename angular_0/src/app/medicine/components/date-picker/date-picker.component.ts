import { Component, Input } from '@angular/core';

import { Injectable } from '@angular/core';
import { NgbCalendar, NgbDateAdapter, NgbDateParserFormatter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

/**
 * This Service handles how the date is represented in scripts i.e. ngModel.
 */
@Injectable()
export class CustomAdapter extends NgbDateAdapter<string> {

  readonly DELIMITER = '-';

  fromModel(value: string | null): NgbDateStruct | null {
    if (value) {
      let date = value.split(this.DELIMITER);
      return {
        day: parseInt(date[2], 10),
        month: parseInt(date[1], 10),
        year: parseInt(date[0], 10)
      };
    }
    return null;
  }

  toModel(date: NgbDateStruct | null): string | null {
    return date ? date.year + this.DELIMITER + ('00' + date.month).slice(-2) + this.DELIMITER + ('00' + date.day).slice(-2) : null;
  }
}

/**
 * This Service handles how the date is rendered and parsed from keyboard i.e. in the bound input field.
 */
@Injectable()
export class CustomDateParserFormatter extends NgbDateParserFormatter {
  constructor(private ngbCalendar: NgbCalendar,
    private dateAdapter: NgbDateAdapter<string>) {
    super()
  }

  get today() {
    return this.dateAdapter.toModel(this.ngbCalendar.getToday())!;
  }
  readonly DELIMITER = '-';

  parse(value: string): NgbDateStruct | null {
    if (value) {
      const separator = value.indexOf(".") >= 0 ? "." : value.indexOf("-") >= 0 ? "-" : value.indexOf("/") >= 0 ? "/" : null
      if (separator) {
        let date = value.split(separator);
        return {
          day: parseInt(date[2], 10),
          month: parseInt(date[1], 10),
          year: parseInt(date[0], 10)
        };
      }
    }
    return null;
  }

  format(date: NgbDateStruct | null): string {
    return date ? date.year + this.DELIMITER + ('00' + date.month).slice(-2) + this.DELIMITER + ('00' + date.day).slice(-2) : "";
  }
}


@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss']
})
export class DatePickerComponent {
  @Input() expirationDate: any;
  @Input() formIn: any;
}
