import { DashboardModule } from './dashboard.module';

describe('HomeModule', () => {
  let homeModule: DashboardModule;

  beforeEach(() => {
    homeModule = new DashboardModule();
  });

  it('should create an instance', () => {
    expect(homeModule).toBeTruthy();
  });
});
