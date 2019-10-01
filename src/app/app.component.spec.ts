import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterOutlet, Router } from '@angular/router';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { NotificationComponent } from './shared/components/notification/notification.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { SharedModule } from './shared/shared.module';
import { AutomatisationModule } from './automatisation/automatisation.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { HomeModule } from './home/home.module';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        SharedModule,
        AutomatisationModule,
        DashboardModule,
        HomeModule],
      providers:[RouterOutlet],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'domotic'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('domotic');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to domotic!');
  }));
});
