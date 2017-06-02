import { ApkaNaukaPage } from './app.po';

describe('apka-nauka App', () => {
  let page: ApkaNaukaPage;

  beforeEach(() => {
    page = new ApkaNaukaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
