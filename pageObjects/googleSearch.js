import { Selector, t } from 'testcafe';

export default class GoogleSearchPage {

    get searchbox() {return 'textarea[name="q"]';}

    constructor() {
    }

    async getTitle(){
         return Selector('title').textContent
     }

     async searchFor(searchterm){
         await t.typeText(this.searchbox, searchterm)
         await t.pressKey('enter')
     }
}