import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Chart, LinearScale,  BarController, CategoryScale, BarElement } from 'chart.js';

Chart.register(LinearScale, BarController, CategoryScale, BarElement);

interface ResultsItem {
  interval_start: string; 
  interval_end: string; 
  consumption: number;
}
interface DataItem {
  count: number;
  next: string;
  previous: string;
  results: ResultsItem[];
}

@Component({
  selector: 'app-about',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  data: DataItem = { count: 0, next:'', previous:'', results: [] };
  chart: Chart;
  isLoading = false;
  
  constructor(private http: HttpClient) {
    this.chart = {} as Chart;
   }

  ngOnInit() {
   
  }

  fetchData(url: string) {
    this.isLoading = true;
    const headers = new HttpHeaders({ 
      Authorization: 'Basic ' + btoa('sk_live_tpaWQddjrHK2gS5nk38x4oAr') 
    });
   
    this.http.get<DataItem>(url, { headers })
      .subscribe((res: DataItem) => {
        this.data.count = res.count;
        this.data.results = res.results;
        this.data.next = res.next;
        this.data.previous = res.previous;

        this.createChart();
        
        this.isLoading = false;
      });
   
  }

  loadNext() {
    if (this.data.next) {
      this.fetchData(this.data.next);
    }
  }

  loadPrevious() {
    if (this.data.previous) {
      this.fetchData(this.data.previous);
    }
  }

  createChart() {
    // If this.chart is an instance of Chart, destroy the existing chart
    if (this.chart instanceof Chart) {
      this.chart.destroy();
    }
  
    const ctx = document.getElementById('myChart') as HTMLCanvasElement;
    this.chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: this.data.results.map(item => item.interval_start),
        datasets: [{
          label: 'Consumption',
          data: this.data.results.map(item => item.consumption),
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        },
        plugins: {
          tooltip: {
            enabled: true,
            callbacks: {
              label: function(context) {
                return 'Consumption: ' + context.parsed.y;
              }
            }
          }
        }
      }
    });
  }}

