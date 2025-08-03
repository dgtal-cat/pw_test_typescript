import { type Page } from '@playwright/test'
import { BasePage } from './BasePage'
import BaseElement from '../elements/BaseElement'

export class CartPage extends BasePage {
    readonly title: BaseElement
    readonly emptyCartContainer: BaseElement

    constructor(page: Page) {
        super(page)
        this.title = new BaseElement(this.page.locator('h1', { hasText: 'Корзина' }))
        this.emptyCartContainer = new BaseElement(this.page.locator('div.bx-sbb-empty-cart-container'))
    }

    async open() {
        await super.open('https://maxibike.ru/basket/')
    }

    stripFrameSizeFromTitle(title: string): string {
        if (typeof title === null) {
            throw TypeError('didn\'t get the correct name')
        } else {
            const cleanTitle = title.split(' ')
            cleanTitle.pop()
            return cleanTitle.join(' ')
        }
    }

    async getFirstItemTitle(): Promise<string> {
        const itemTitle = await this.page.locator('[data-entity="basket-item-name"]')
            .textContent()
        return this.stripFrameSizeFromTitle(String(itemTitle))
    }

    async getAllItemsTitles(): Promise<string[]> {
        const ItemsTitlesArray: string[] = []
        const titlesElements = await this.page.locator('[data-entity="basket-item-name"]')
            .allTextContents()

        titlesElements.forEach((title) => {
            ItemsTitlesArray.push(this.stripFrameSizeFromTitle(String(title)))
        })

        return ItemsTitlesArray
    }
}