import { Page } from '@playwright/test'
import { BasePage } from './BasePage'
import BaseElement from '../elements/BaseElement'

export class BlogPage extends BasePage {
    readonly listEmptyAlert: BaseElement
    readonly subscribeNewsBlock: BaseElement

    constructor(page: Page) {
        super(page)
        this.listEmptyAlert = new BaseElement(this.page.getByText('Список элементов пуст'))
        this.subscribeNewsBlock = new BaseElement(this.page.getByText('Будьте в курсе наших акций и новостей'))
    }

    async open() {
        await super.open("https://maxibike.ru/blog/")
    }
}