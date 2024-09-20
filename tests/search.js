import GoogleSearchPage from '../pageObjects/googleSearch';
import SearchResultsPage from '../pageObjects/searchResults';

const googlesearchpage = new GoogleSearchPage()
const searchresultspage = new SearchResultsPage()

fixture `Getting Started`
    .page `http://www.google.com`;

test('Búsqueda de Google', async t => {
    await googlesearchpage.searchFor('Selenium')
    const seleniumText = await searchresultspage.getSeleniumText()
    await t.expect(seleniumText).contains('Selenium')
});