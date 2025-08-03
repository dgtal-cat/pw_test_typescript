import { type Page, type Locator } from "@playwright/test"
import { BasePage } from './BasePage'
import BaseElement from '../elements/BaseElement'

export class BikesPage extends BasePage {
    readonly catalogBlock: BaseElement
    readonly catalogItems: BaseElement
    
    constructor(page: Page) {
        super(page)
        this.catalogBlock = new BaseElement(this.page.locator('div.catalog_block_template'))
        this.catalogItems = new BaseElement(this.page.locator('div.catalog-block-view__item'))
    }

    async open() {
        await super.open('https://maxibike.ru/catalog/gornye-velosipedy/')
    }

    async addToCartItemById(id: number) {
        const item = this.page.locator('xpath=//div[contains(@class, "catalog-block-view__item")]').nth(id)
        const itemTitle = item.locator('xpath=//div[contains(@class, "item-title")]//span').textContent()
        await item.hover()
        await item.getByText('В корзину').first().click()
        await this.page.waitForTimeout(300)
        return itemTitle
    }
}
