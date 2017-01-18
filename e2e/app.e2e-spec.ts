import { RapulaPage } from './app.po';

describe('rapula App', function() {
  let page: RapulaPage;

  beforeEach(() => {
    page = new RapulaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
