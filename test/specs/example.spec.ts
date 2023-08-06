import ExampleClass from "../pages/example.page"
describe('Google Search', () => {
  it('should search for sepcified text',async() => {
    await browser.url('https://www.google.com');
    await (await ExampleClass.searchInput).setValue("Webdriver IO Search Example");
    await browser.keys('Enter');
    await expect(await((await ExampleClass.firstResult).getText())).toContain("Selectors");
  });
});