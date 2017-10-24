import { ProjectEmailPage } from './app.po';

describe('project-email App', () => {
  let page: ProjectEmailPage;

  beforeEach(() => {
    page = new ProjectEmailPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
