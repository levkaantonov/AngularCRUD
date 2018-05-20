import { WebApiFrontendPage } from './app.po';

describe('web-api-frontend App', function() {
  let page: WebApiFrontendPage;

  beforeEach(() => {
    page = new WebApiFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
