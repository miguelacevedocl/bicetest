import { Component } from '@angular/core';
import { ApiService } from '../../core/services/api.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Indicators } from '../../../../../shared/models/indicators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})




export class HomeComponent {
  //indicators: Indicators = new Indicators();
  constructor(
    private apiService: ApiService
  ) {}

  destroy$: Subject<boolean> = new Subject<boolean>();

  indi: any[] = [];

  ngOnInit(): void {

    this.apiService.getIndicators().pipe(takeUntil(this.destroy$)).subscribe((indi: any[]) => {
      this.indi = indi['data']['body'];
      console.log(this.indi);
    });

}

ngOnDestroy() {
  this.destroy$.next(true);
  this.destroy$.unsubscribe();
}

}
