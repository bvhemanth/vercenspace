import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashbardComponent } from './dashbard.component';
import { SpacexService } from '../services/spacex.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { RouterTestingModule } from "@angular/router/testing";
import { of } from 'rxjs';

const navUrl = '';

describe('DashbardComponent', () => {
  let component: DashbardComponent;
  let fixture: ComponentFixture<DashbardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashbardComponent ],
      imports: [NoopAnimationsModule, RouterTestingModule.withRoutes([])],
      providers: [
        { provide: SpacexService, useValue: MockSpaceService },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashbardComponent);
    component = fixture.componentInstance;
    fixture.whenStable();
  });

  it('should create', () => {
    
    expect(component).toBeTruthy();
  });
});


class MockSpaceService{
  getAll(){
    return of([]);
  }
}

class MockRouter {
  public url = '/';
  public navigateByUrl = () => {
    return this.url;
  }

  constructor(newUrl) {
    this.url = newUrl;
  }

  public navigate(url) {
    return true;
  }
  public getCurrentNavigation = () => {
    return {
      queryParams: {
        action: '',
      },
    };
  }
}