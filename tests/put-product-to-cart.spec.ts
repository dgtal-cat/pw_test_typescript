import { test, expect, BrowserContext, Page } from '@playwright/test'
import { MainPage } from '../src/pages/MainPage'
import { BikesPage } from '../src/pages/BikesPage'
import { CartPage } from '../src/pages/CartPage'

test.describe('Проверка складывания товара в корзину', () => {
    let context: BrowserContext
    let page: Page
    let mainPage: MainPage
    let cartPage: CartPage

    test.beforeEach(async ({ browser }) => {
        context = await browser.newContext()
        page = await context.newPage()
        mainPage = new MainPage(page)
        cartPage = new CartPage(page)
        await mainPage.open()
    })

    test('Проверка пустой корзины', async () => {
        await mainPage.headerMenu.openBikesCatalog()
        await mainPage.headerMenu.clickOnCartIcon()

        await expect(cartPage.title.el).toBeVisible()
        await expect(
            cartPage.emptyCartContainer.el,
            'Проверка наличия надписи о том, что корзина пуста'
        )
            .toContainText('Ваша корзина пуста')
    })

    test('Добавление товара в корзину', async () => {
        const bikesPage = new BikesPage(page)

        await mainPage.headerMenu.openBikesCatalog()

        await expect(bikesPage.catalogBlock.el).toBeVisible()
        await expect(bikesPage.catalogItems.el.nth(0)).toBeVisible()

        const itemTitle = await bikesPage.addToCartItemById(0)
        await mainPage.headerMenu.clickOnCartIcon()
        const itemTitleInCart = await cartPage.getFirstItemTitle()

        expect(
            itemTitleInCart,
            'Проверка совпадения наименования товара в корзине'
        ).toEqual(itemTitle)
    })

    test('Добавление нескольких товаров в корзину', async () => {
        const bikesPage = new BikesPage(page)

        await mainPage.headerMenu.openBikesCatalog()
        const item1Title = await bikesPage.addToCartItemById(0)
        const item2Title = await bikesPage.addToCartItemById(1)
        const item3Title = await bikesPage.addToCartItemById(2)
        await mainPage.headerMenu.clickOnCartIcon()

        await expect(cartPage.title.el).toBeVisible()

        const itemTitlesInCart = await cartPage.getAllItemsTitles()

        expect(
            itemTitlesInCart,
            'Проверка совпадения наименований товаров в корзине'
        ).toEqual([item1Title, item2Title, item3Title])
    })
})
