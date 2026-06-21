import { Page , Locator } from '@playwright/test'



export class HomePage{

    readonly page : Page;
    readonly pageLogo : Locator;
    readonly loginLink : Locator;

    constructor(page : Page){

        this.page = page;
        this.pageLogo = page.locator("img[alt='Website for automation practice']");
        this .loginLink = page.locator('a[href="/login"]');
    }

}