import { defineConfig } from 'vite'
import { resolve } from 'path'
import { fileURLToPath, URL } from 'node:url'
import handlebars from 'vite-plugin-handlebars'
import liveReload from 'vite-plugin-live-reload'
let devDir = '../front' // 'dict'
let __dirname = import.meta.dirname
// devDir = 'dict'
const pages = {
    main: resolve(__dirname, 'index.html'),
    privacyPolicy: resolve(__dirname, './privacy-policy/index.html'),
    agreement: resolve(__dirname, './privacy-policy/agreement.html'),
    _404: resolve(__dirname, '404.html'),
    documents: resolve(__dirname, 'documents/index.html'),
    cars: resolve(__dirname, './cars/index.html'),
    newCars: resolve(__dirname, './newCars/index.html'),
    vykup: resolve(__dirname, './services/vykup/index.html'),
    tyres: resolve(__dirname, './tyres/index.html'),
    car: resolve(__dirname, './cars/car.html'),
    podbor: resolve(__dirname, './services/autopodbor/index.html'),
    promo: resolve(__dirname, './promo/index.html'),
    about: resolve(__dirname, './about-the-company/index.html'),

    franshiza: resolve(__dirname, './franshiza/index.html'),
    contacts: resolve(__dirname, './contacts/index.html'),
    vacancy: resolve(__dirname, './work-in-autosite/index.html'),
    services: resolve(__dirname, './services/index.html'),
    insurance: resolve(__dirname, './services/insurance/index.html'),
    landlords: resolve(__dirname, './landlords/index.html'),
    crediting: resolve(__dirname, './services/crediting/index.html'),
    shinny: resolve(__dirname, './services/shinnyy-centr/index.html'),
    osmotr: resolve(__dirname, './services/tehnicheskiy-osmotr/index.html'),
    obsluzh: resolve(__dirname, './services/servisnoe-obsluzhivanie/index.html'),
    remont: resolve(__dirname, './services/remont-dvigatel/index.html'),
    akpp: resolve(__dirname, './services/remont-akpp/index.html'),
    masla: resolve(__dirname, './services/zamena-masla/index.html'),
    compared: resolve(__dirname, './personal/list-compared/index.html'),
    favorite: resolve(__dirname, './personal/favorite-cars/index.html'),
    reserve: resolve(__dirname, './reserve/index.html'),

    vacancyAdmin: resolve(__dirname, './admin/vacancy.html'),
    promoAdmin: resolve(__dirname, './admin/promo.html'),
    articleAdmin: resolve(__dirname, './admin/article.html'),
    loginAdmin: resolve(__dirname, './admin/login.html'),
    bdAdmin: resolve(__dirname, './admin/bd.html'),
    bdHistory: resolve(__dirname, './admin/history.html'),
    bdHistoryPeriod: resolve(__dirname, './admin/history_period.html'),
    bdHistoryPeriodDays: resolve(__dirname, './admin/history_period_days.html'),
    // fids: resolve(__dirname, './fids/autoset1.xml'),
}
// Превращаем пути в массив имен файлов для проверки (index.html, admin.html)
// const allowedHtmlFiles = Object.values(pages).map(p => p.split('/').pop());

export default defineConfig({
	server: {
		port: 9173,
		proxy: {
			'/api': {
                target: 'http://localhost:3000',
                changeOrigin: true,
			},
		},
	},
	plugins: [
		handlebars({
			compileOptions: {
				// Example config option: avoid auto-indenting partials
				preventIndent: true,
			},
			partialDirectory: resolve(__dirname, 'src/partials'),
			reloadOnPartialChange: true,
		}),
		liveReload(resolve(__dirname, 'src/partials/**/*'), { alwaysReload: true }),
	],
	base: '/',
	build: {
		rollupOptions: {
			input: pages,
		},

		outDir: devDir, // Выходная папка
		chunkSizeWarningLimit: 1000, // Sets the warning limit to 1000 kB (1MB)
        manifest: true, // Создаст manifest.json в папке сборки
	},
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
		},
	},
})
