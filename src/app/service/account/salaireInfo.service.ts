import { Injectable } from '@angular/core';
import { SalaireInfo } from '../../model/account/salaireInfo';

@Injectable({
  providedIn: 'root'
})
export class SalaireService {
  private salaireInfos: SalaireInfo[] = [
    { month: 'January', value: 3000 },
    { month: 'February', value: 2900 },
    { month: 'March', value: 3100 },
    { month: 'April', value: 3200 },
    { month: 'May', value: 3300 },
    { month: 'June', value: 3400 },
    { month: 'July', value: 3500 },
    { month: 'January', value: 3000 },
    { month: 'February', value: 2900 },
    { month: 'March', value: 3100 },
    { month: 'April', value: 3200 },
    { month: 'May', value: 3300 },
    { month: 'June', value: 3400 },
    { month: 'July', value: 3500 }
  ];

  getSalaireInfos(): SalaireInfo[] {
    return this.salaireInfos;
  }
}
