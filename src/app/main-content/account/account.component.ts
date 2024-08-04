import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { FinancialAccountInfo } from '../../model/financialAccountInfo';
import { FinancialAccountInfoService } from '../../service/financialAccountInfo.service';
import { SalaireInfo } from '../../model/account/salaireInfo';
import { SalaireService } from '../../service/account/salaireInfo.service';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent implements OnInit {
  financialItems: FinancialAccountInfo[] = [];
  chartData: any;
  chartOptions: any;
  salaireInfos!: SalaireInfo[];

  constructor(
    private financialAccountInfoService: FinancialAccountInfoService,
    private salaireService: SalaireService

  ) {}

  ngOnInit(): void {
    this.financialItems = this.financialAccountInfoService.getFinancialItems();

    this.chartData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      datasets: [
        {
          label: 'Salaire',
          data: [3000, 2900, 3100, 3200, 3300, 3400, 3500, 3000, 3300, 3400, 3500, 3000],
          fill: false,
          borderColor: '#42A5F5',
          tension: 0.4
        }
      ]
    };

    this.chartOptions = {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Évolution du Salaire'
        }
      }
    };

    this.salaireInfos = this.salaireService.getSalaireInfos();
  }

  getValueColor(index: number): string {
    const colors = ['text-blue-500', 'text-green-500', 'text-yellow-500', 'text-red-500'];
    return colors[index % colors.length];
  }
}
