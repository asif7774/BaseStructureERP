import { PortalHomeModule } from './portal-home.module';

describe('PortalHomeModule', () => {
  let portalHomeModule: PortalHomeModule;

  beforeEach(() => {
    portalHomeModule = new PortalHomeModule();
  });

  it('should create an instance', () => {
    expect(portalHomeModule).toBeTruthy();
  });
});
