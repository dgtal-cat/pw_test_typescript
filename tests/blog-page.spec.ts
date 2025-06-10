import { test, expect, BrowserContext, Page } from '@playwright/test'
import { BlogPage } from '../src/pages/BlogPage'

test.describe('Проверка страницы блога', () => {
    let context: BrowserContext
    let page: Page
    let blogPage: BlogPage

    test.beforeEach(async ({ browser }) => {
        context = await browser.newContext()
        page = await context.newPage()
        blogPage = new BlogPage(page)
        await blogPage.open()
    })

    test('Проверка элементов на странице', async () => {
        await expect(blogPage.listEmptyAlert.el, 'Проверка наличия ворнинга "Список элементов пуст"').toBeVisible()
        await expect(blogPage.subscribeNewsBlock.el, 'Проверка наличия блока подписки на новости').toBeVisible()
    })
})
