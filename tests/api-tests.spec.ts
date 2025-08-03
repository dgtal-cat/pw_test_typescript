import { test, expect } from '@playwright/test'
import type { SwapiPlanet } from '../types/api-types'

test.describe('Проверка ответов SWAPI', () => {
	test('Проверка планеты Alderaan', async ({ request }) => {
		const response = await request.get(
			'https://swapi.info/api/planets/2'
		)

		const planetInfo = await response.json() as SwapiPlanet

		expect(planetInfo.name).toEqual('Alderaan')
		expect(planetInfo.rotation_period).toEqual('24')
		expect(planetInfo.diameter).toEqual('12500')
		expect(planetInfo.population).toEqual('2000000000')
	})
})