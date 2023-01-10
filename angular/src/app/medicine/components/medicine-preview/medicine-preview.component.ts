import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IMedicine } from '../../interfaces/medicine.interface';

@Component({
  selector: 'app-medicine-preview',
  templateUrl: './medicine-preview.component.html',
  styleUrls: ['./medicine-preview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MedicinePreviewComponent {
  @Input() medicine: IMedicine;
}
