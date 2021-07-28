import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageWeatherComponent } from './page-weather.component';

describe('PageWeatherComponent', () => {
  let component: PageWeatherComponent;
  let fixture: ComponentFixture<PageWeatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageWeatherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
