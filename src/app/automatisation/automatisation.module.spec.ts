import { AutomatisationModule } from './automatisation.module';

describe('AutomatisationModule', () => {
  let automatisationModule: AutomatisationModule;

  beforeEach(() => {
    automatisationModule = new AutomatisationModule();
  });

  it('should create an instance', () => {
    expect(automatisationModule).toBeTruthy();
  });
});
