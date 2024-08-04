import { Injectable } from '@angular/core';
import { FinancialAccountInfo } from '../model/financialAccountInfo';

@Injectable({
  providedIn: 'root'
})
export class FinancialAccountInfoService {
  private financialItems: FinancialAccountInfo[] = [
    { header: 'Salaire du Mois', icon: 'pi-dollar', value: 3000 },
    { header: 'Montant Économisé', icon: 'pi-save', value: 1500 },
    { header: 'Épargne', icon: 'pi-wallet', value: 5000 },
    { header: 'PEA', icon: 'pi-chart-line', value: 7000 }
  ];

  getFinancialItems(): FinancialAccountInfo[] {
    return this.financialItems;
  }
}
