import { type Locator } from "@playwright/test"
import BaseElement from "./BaseElement"

export default class HeaderMenu extends BaseElement {

    constructor(el: Locator) {
        super(el)
    }

    async openBikesCatalog() {
        await this.el.getByRole('link', { name: 'Велосипеды' }).click()
    }

    async clickOnCartIcon() {
        await this.el.locator('[href="/basket/"]').first().click()
    }
}