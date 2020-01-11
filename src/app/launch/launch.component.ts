import { Component, OnInit, ViewChild} from '@angular/core';
import { LaunchService } from './launch.service';
import { Launch } from './launch';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-launch',
  templateUrl: './launch.component.html',
  styleUrls: ['./launch.component.scss']
})
export class LaunchComponent implements OnInit {
  
  // loads the data source to include Launch data pulled from API
  dataSource = new MatTableDataSource<Launch>();

  // sets column names, must be exact same as in the Launch model
  displayedColumns = ['flight_number', 'launch_year', 'rocket_name', 'details'];

  // Angular Materials MatSort and MatPaginator for use
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private launchService: LaunchService) {}

  ngOnInit() {
    this.loadLaunches();  // loads the data from API call using the LaunchService
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort; // add sort capabilty
    this.dataSource.paginator = this.paginator; // add paginator
  }

  // function that implements LaunchService to pull API data for all launches
  loadLaunches() {
    return this.launchService.getLaunches().subscribe(data => {
      this.dataSource.data = data as Launch[];
    });
  }

  // function to open new window with SpaceX presskit if launch.links.presskit is truthy
  goToURL(launch) {
    if(launch.links.presskit) {
    window.open(launch.links.presskit);
    }
  }

}
