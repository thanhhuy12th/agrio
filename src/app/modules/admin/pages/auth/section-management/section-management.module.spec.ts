import { SectionManagementModule } from './section-management.module';

describe('SectionManagementModule', () => {
  let sectionManagementModule: SectionManagementModule;

  beforeEach(() => {
    sectionManagementModule = new SectionManagementModule();
  });

  it('should create an instance', () => {
    expect(sectionManagementModule).toBeTruthy();
  });
});
