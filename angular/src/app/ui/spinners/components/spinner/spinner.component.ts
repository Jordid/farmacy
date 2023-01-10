import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ImagesConfig } from 'src/app/core/config/images-config/images-config';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpinnerComponent {
  ImagesConfig = ImagesConfig
}
