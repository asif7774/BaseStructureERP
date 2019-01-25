import { Component, OnInit, HostListener } from '@angular/core';
import { UIHelper } from '../helpers/ui.helpers';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  isMobile: boolean;
  gridHeight: number;
  showLoader: boolean = false;
  searchRequest: string = '';
  seriesData: number[];
  
  
  // UI Section
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    // apply grid height
    this.gridHeight = UIHelper.getMainContentHeight();

    // check mobile device
    this.isMobile = UIHelper.isMobile();
  }
  // End UI Section

  constructor() { }

  ngOnInit() {
    // check mobile device
    this.isMobile = UIHelper.isMobile();

    // Apply class on body start
    const element = document.getElementsByTagName("body")[0];
    element.className = "";
    element.classList.add("opti_body-dashboard");
    element.classList.add("opti_body-main-module");
    // Apply class on body end

    

    this.renderChart();
  }

  /**
   * RenderChart
  */
  public renderChart() {
    this.showLoader = true;
    setTimeout(()=>{    
      this.showLoader = false;
    }, 1000);
  }
 

  // pie chart code start
  public internetGrowthData = [{  
    data: [{
      category: 'New',
      value: 500
    }, {
      category: 'Updated',
      value: 700
    }, {
      category: 'Cancelled',
      value: 50
    }, {
      category: 'Draft',
      value: 500
    }]
  }];

  public model: any[] = this.internetGrowthData;

  public labelContent(e: any): string {
      return `${ e.category } \n ${e.value}`;
  }
  // pie chart code end

  // yearly chart code start
  public series: any[] = [{
    name: "New",
    data: [3.907, 7.943, 7.848, 9.284, 9.263]
  }, {
    name: "Updated",
    data: [4.743, 7.295, 7.175, 6.376, 8.153]
  }, {
    name: "Cancelled",
    data: [0.010, 0.375, 1.161, 0.684, 3.7]
  },{
    name: "Draft",
    data: [1.988, 2.733, 3.994, 3.464, 4.001]
  }];
  private categories: number[] = [2002, 2003, 2004, 2005, 2006];
  // yearly chart code end

}
