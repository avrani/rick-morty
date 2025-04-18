import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../shared/services/api.service';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-charecter-detail-page',
  imports: [AsyncPipe],
  templateUrl: './charecter-detail-page.component.html',
  styleUrl: './charecter-detail-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharecterDetailPageComponent {

  private readonly route = inject(ActivatedRoute);
  private readonly apiService = inject(ApiService);

  charecterDetails$: Observable<any> = new Observable();

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.charecterDetails$ = this.apiService.getCharacterById(Number(params.get('id')));
    });
  }
}
