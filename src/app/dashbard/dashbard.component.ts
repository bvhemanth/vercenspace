import { Component, OnInit } from '@angular/core';
import { SpacexService } from '../services/spacex.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashbard',
  templateUrl: './dashbard.component.html',
  styleUrls: ['./dashbard.component.scss']
})
export class DashbardComponent implements OnInit {
  //years=[{name:'year', value:2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020]
  launches;
  selectedyear =2020;
  successlaunch:boolean = true;
  successlanding:boolean = true;

  constructor(private spacex: SpacexService,
    private router: Router) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.spacex.getAll().subscribe((data)=>{
      this.launches=data;
      console.log(data);
    })  
  }

  filter(){

    let queryParams:any = {};
    if(this.selectedyear) queryParams.launchyear = this.selectedyear;
    
    if(this.successlaunch) queryParams.successlaunch = this.successlaunch;

    if(this.successlanding) queryParams.successlanding = this.successlanding;

    this.router.navigate([], { queryParams: queryParams });
    
    //https://api.spacexdata.com/v3/launches?limit=100&launch_success=true&land_success=&launch_year=2014

  }

}
