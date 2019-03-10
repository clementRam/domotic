import { ScenesModule } from './scenes.module';

describe('ScenesModule', () => {
  let scenesModule: ScenesModule;

  beforeEach(() => {
    scenesModule = new ScenesModule();
  });

  it('should create an instance', () => {
    expect(scenesModule).toBeTruthy();
  });
});
