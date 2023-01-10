import { Component } from '@angular/core';
import { ImagesConfig } from 'src/app/core/config/images-config/images-config';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  ImagesConfig = ImagesConfig;
}
