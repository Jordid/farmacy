import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IIngredient } from 'src/app/ingredient/interfaces/ingredient.interface';

@Component({
  selector: 'app-medicine-nav',
  templateUrl: './medicine-nav.component.html',
  styleUrls: ['./medicine-nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MedicineNavComponent {
  @Input() ingredients: IIngredient[];
}
