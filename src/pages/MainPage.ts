import { type Page } from '@playwright/test'
import { BasePage } from './BasePage'
import HeaderMenu from '../elements/HeaderMenu'

export class MainPage extends BasePage {
    readonly headerMenu: HeaderMenu

    constructor(page: Page) {
        super(page)
        this.headerMenu = new HeaderMenu(this.page.locator('div.header__main-part'))
    }

    async open() {
        await super.open("https://maxibike.ru/")
    }
}