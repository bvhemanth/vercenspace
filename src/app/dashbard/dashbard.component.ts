import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { SpacexService } from '../services/spacex.service';
import { Router, ActivatedRoute } from '@angular/router';
import { promise, ActionSequence } from 'protractor';
import { resolve } from 'dns';

@Component({
  selector: 'app-dashbard',
  templateUrl: './dashbard.component.html',
  styleUrls: ['./dashbard.component.scss']
})
export class DashbardComponent implements OnInit {
  //years=[{name:'year', value:2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020]
  launches;
  selectedyear;
  successlaunch:boolean;
  successlanding:boolean;
  notifyText:string ="Loading";
  loading:boolean= false;
  constructor(private spacex: SpacexService,
    private router: Router,
    private route: ActivatedRoute,
    private changeref: ChangeDetectorRef) {

  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.selectedyear = params['launch_year'];
      this.successlaunch = params['launch_success'];
      this.successlanding = params['land_success'];
      this.changeref.detectChanges();
    });
    if(this.selectedyear || this.successlaunch || this.successlanding )
    {
      console.log(this.selectedyear);
      this.filter();
    }
    else
    {
    this.getData();
    }
  }

  getData(){
    this.loading=true;
    this.spacex.getAll().subscribe((data)=>{
      this.launches=data;
      console.log(data);
      this.loading=false;
    })  
  }

  setYear(year){
    this.selectedyear=year;
    this.filter();
  }
  setLaunch(isSccess){
    this.successlaunch=isSccess;
    this.filter();
  }
  setLanding(isSccess){
    this.successlanding=isSccess;
    this.filter();
  }

  filter(){
    this.loading=true;
    this.launches='';
    let queryParams:any = {};
    queryParams.limit=100;

    if(this.selectedyear) queryParams.launch_year = this.selectedyear;
    
    if(this.successlaunch || this.successlaunch === false) queryParams.launch_success = this.successlaunch;

    if(this.successlanding || this.successlanding === false) queryParams.land_success = this.successlanding;
    
    this.navigate(queryParams).then((data)=>{
      const params = new URLSearchParams(window.location.search)
      this.spacex.getFilterData(window.location.search).subscribe((data)=>{
        this.launches=data;
        this.loading=false;
      })
    })
  }

  navigate(queryParams){
    this.router.navigate([], { queryParams: queryParams });
    return new Promise((resolve, reject)=>{
      resolve( queryParams)
    })
  }
  isActive = function (buttonName){
    return this.selectedyear === buttonName;
  }
}

