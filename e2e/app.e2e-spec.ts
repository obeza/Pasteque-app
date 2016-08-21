import { FreshPage } from './app.po';

describe('fresh App', function() {
  let page: FreshPage;

  beforeEach(() => {
    page = new FreshPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
