import { AngularPongPage } from './app.po';

describe('angular-pong App', () => {
  let page: AngularPongPage;

  beforeEach(() => {
    page = new AngularPongPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
