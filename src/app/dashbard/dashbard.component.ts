import { Component, OnInit, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { SpacexService } from '../services/spacex.service';
import { Router, ActivatedRoute } from '@angular/router';
import { pipe } from 'rxjs';
import { switchMap} from 'rxjs/operators';
@Component({
  selector: 'app-dashbard',
  templateUrl: './dashbard.component.html',
  styleUrls: ['./dashbard.component.scss']
})
export class DashbardComponent implements OnInit {
  launches=[];
  selectedyear;
  successlaunch:any;
  successlanding:any;
  notifyText:string ="Loading";
  loading:boolean= false;
  
  launchbutton : any;
  yearbutton: number;
  landingbutton: any;
  constructor(private spacex: SpacexService,
    private router: Router,
    private route: ActivatedRoute) {
      this.route.queryParams.subscribe(params => {
        this.selectedyear = params['launch_year'];
        this.successlaunch = params['launch_success'];
        this.successlanding = params['land_success'];
      });
  }

  ngOnInit(): void {
    if(this.selectedyear)
    {
      this.yearbutton = parseInt(this.selectedyear);
    }
    
    if(this.successlaunch === 'true')
    {
      this.launchbutton = 'successlaunch';
    }
    else if(this.successlaunch =='false'){
      this.launchbutton = 'failedlaunch';  
    }
  
    if(this.successlanding === 'true'){
      this.landingbutton = 'successlanding';
    }
    else if(this.successlanding == 'false'){
      this.landingbutton = 'failedlanding'
    }
    if(this.selectedyear || this.successlaunch || this.successlanding )
    {
      this.filter();
    }
    else
    {
      this.getData();
    }
  }


  getData(){
    this.loading=true;
    this.spacex.getAll().pipe(
      switchMap((result:any)=> result)).subscribe((data)=>{
      this.launches.push(data);
      this.loading=false;
    })  
  }

  filter(){
    this.loading=true;
    this.launches=[];
    let queryParams:any = {};
    queryParams.limit=100;

    if(this.yearbutton){ 
      queryParams.launch_year = this.yearbutton;
    }

    if(this.landingbutton === "successlanding"){
      queryParams.land_success=true;
    }
    else if(this.landingbutton === 'failedlanding'){
      queryParams.land_success=false;
    }

    if(this.launchbutton === "successlaunch"){ 
      queryParams.launch_success=true;
    }
    else if(this.launchbutton === "failedlaunch"){
      queryParams.launch_success=false;
    }
    
    this.navigate(queryParams).then((data)=>{
      const params = new URLSearchParams(window.location.search);
      this.spacex.getFilterData(window.location.search)
      .pipe(
        switchMap((result:any)=> {
          if(result.length)
          {
            return result;
          }
          else{
            return [];
          }
        }))
        .subscribe({
          next: x => {
            this.launches.push(x);
          },
          error: e => console.log('unhandled Error'),
          complete: () => {
            this.loading=false;
          }  
      })
    })
  }

  navigate(queryParams){
    this.router.navigate([], { queryParams: queryParams });
    return new Promise((resolve, reject)=>{
      resolve( queryParams)
    })
  }
  onClick(check){
    if(check==1){
      this.launchbutton = 'successlaunch';
    }else{
      this.launchbutton = 'failedlaunch';
    }    
    this.filter();
  }

  setYear(year){
    this.yearbutton =year;
    this.filter();
  }
  onClickLanding(landing){
    if(landing==1){
      this.landingbutton = 'successlanding';
    }else{
      this.landingbutton = 'failedlanding';
    }    
    this.filter();
  }
}

