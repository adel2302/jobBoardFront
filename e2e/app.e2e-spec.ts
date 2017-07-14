import { JobBoardPage } from './app.po';

describe('job-board App', () => {
  let page: JobBoardPage;

  beforeEach(() => {
    page = new JobBoardPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
