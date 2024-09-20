import GoogleSearchPage from '../pageObjects/googleSearch';

const googlesearchpage = new GoogleSearchPage()

fixture `Getting Started`
    .page `http://www.google.com`;

test('Verificar el title', async t => {
    const title = await googlesearchpage.getTitle()
    await t.expect(title).eql('Google')
});
