import { Page } from "@playwright/test"

export class BasePage {

    readonly page: Page
    readonly url: string

    constructor(page: Page) {
        this.page = page
        this.url = 'https://maxibike.ru/'
    }

    async open(url: string): Promise<void> {
        await this.page.goto(url)
    }
}