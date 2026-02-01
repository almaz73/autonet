import { defineConfig } from 'vite'
import { resolve } from 'path'
import { fileURLToPath, URL } from 'node:url'
import handlebars from 'vite-plugin-handlebars'
import liveReload from 'vite-plugin-live-reload'
import { viteStaticCopy } from 'vite-plugin-static-copy'
import sitemap from 'vite-plugin-sitemap'; // Импортируем плагин

export default defineConfig({
	server: {
		port: 9173,
		proxy: {
			'/api': { // тут пока прикидываясь новым сайтом или самим сервером не получается достать данные
				// target: 'ext.cartat.ru/exchange',
				target: 'https://xn--80aej9alefdt2f.xn--p1ai',
				changeOrigin: true,
				// secure: false,
				// withCredentials: true,
				// rewrite: path => path.replace(/^\/api/, '')
			}
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
		viteStaticCopy({
			targets: [
				{
					src: 'CNAME', // Этот файл копируем, чтобы сообщить гитхаб привязку к домену
					dest: '.'
				}
			]
		}),
		sitemap({
			// Ваши настройки, например, домен
			hostname: 'https://xn--80aej9alefdt2f.xn--p1ai',
			outDir: 'docs', // Выходная папка
			changefreq: 'monthly', // Устанавливаем частоту 'weekly' (еженедельно)
		}),
	],
	base: '',
	build: {
		rollupOptions: {
			input: {
				main: resolve(__dirname, 'index.html'),
				privacyPolicy: resolve(__dirname, './privacy-policy/index.html'),
				_404: resolve(__dirname, '404.html'),
				cars: resolve(__dirname, './cars/index.html'),
				vykup: resolve(__dirname, './services/vykup/index.html'),
				tyres: resolve(__dirname, './tyres/index.html'),
				car: resolve(__dirname, './cars/car.html'),
				podbor: resolve(__dirname, './services/autopodbor/index.html'),
				promo: resolve(__dirname, './promo/index.html'),
				p644223: resolve(__dirname, './promo/644223/index.html'),
				p644340: resolve(__dirname, './promo/644340/index.html'),
				p633448: resolve(__dirname, './promo/633448/index.html'),
				p647168: resolve(__dirname, './promo/647168/index.html'),
				p647169: resolve(__dirname, './promo/647169/index.html'),
				p651612: resolve(__dirname, './promo/651612/index.html'),
				p651613: resolve(__dirname, './promo/651613/index.html'),
				p651614: resolve(__dirname, './promo/651614/index.html'),
				p651615: resolve(__dirname, './promo/651615/index.html'),
				p651616: resolve(__dirname, './promo/651616/index.html'),
				p651617: resolve(__dirname, './promo/651617/index.html'),
				p651618: resolve(__dirname, './promo/651618/index.html'),
				p651619: resolve(__dirname, './promo/651619/index.html'),
				p651620: resolve(__dirname, './promo/651620/index.html'),
				p651621: resolve(__dirname, './promo/651621/index.html'),
				p651622: resolve(__dirname, './promo/651622/index.html'),
				p651623: resolve(__dirname, './promo/651623/index.html'),
				p651624: resolve(__dirname, './promo/651624/index.html'),
				p651625: resolve(__dirname, './promo/651625/index.html'),
				p651626: resolve(__dirname, './promo/651626/index.html'),
				about: resolve(__dirname, './about-the-company/index.html'),

				news: resolve(__dirname, './news/index.html'),
				n651961: resolve(__dirname,'./news/651961/index.html'),
				n651960: resolve(__dirname,'./news/651960/index.html'),
				n651959: resolve(__dirname,'./news/651959/index.html'),
				n651955: resolve(__dirname,'./news/651955/index.html'),
				n651954: resolve(__dirname,'./news/651954/index.html'),
				n649134: resolve(__dirname,'./news/649134/index.html'),
				n649133: resolve(__dirname,'./news/649133/index.html'),
				n649132: resolve(__dirname,'./news/649132/index.html'),
				n649131: resolve(__dirname,'./news/649131/index.html'),
				n649130: resolve(__dirname,'./news/649130/index.html'),
				n647054: resolve(__dirname,'./news/647054/index.html'),
				n647053: resolve(__dirname,'./news/647053/index.html'),
				n647051: resolve(__dirname,'./news/647051/index.html'),
				n647050: resolve(__dirname,'./news/647050/index.html'),
				n647049: resolve(__dirname,'./news/647049/index.html'),
				n645397: resolve(__dirname,'./news/645397/index.html'),
				n645396: resolve(__dirname,'./news/645396/index.html'),
				n645394: resolve(__dirname,'./news/645394/index.html'),
				n645021: resolve(__dirname,'./news/645021/index.html'),
				n645020: resolve(__dirname,'./news/645020/index.html'),
				n644318: resolve(__dirname,'./news/644318/index.html'),
				n644317: resolve(__dirname,'./news/644317/index.html'),
				n644221: resolve(__dirname,'./news/644221/index.html'),
				n644220: resolve(__dirname,'./news/644220/index.html'),
				n644217: resolve(__dirname,'./news/644217/index.html'),
				n643868: resolve(__dirname,'./news/643868/index.html'),
				n643866: resolve(__dirname,'./news/643866/index.html'),
				n643824: resolve(__dirname,'./news/643824/index.html'),
				n643022: resolve(__dirname,'./news/643022/index.html'),
				n653313: resolve(__dirname,'./news/653313/index.html'),
				n653314: resolve(__dirname,'./news/653314/index.html'),
				n653315: resolve(__dirname,'./news/653315/index.html'),
				n653316: resolve(__dirname,'./news/653316/index.html'),
				n653317: resolve(__dirname,'./news/653317/index.html'),
				n655165: resolve(__dirname,'./news/655165/index.html'),
				n655166: resolve(__dirname,'./news/655166/index.html'),
				n655169: resolve(__dirname,'./news/655169/index.html'),
				n655170: resolve(__dirname,'./news/655170/index.html'),
				n655171: resolve(__dirname,'./news/655171/index.html'),


				franshiza: resolve(__dirname, './franshiza/index.html'),
				contacts: resolve(__dirname, './contacts/index.html'),
				vacancy: resolve(__dirname, './work-in-autosite/index.html'),
				services: resolve(__dirname, './services/index.html'),
				insurance: resolve(__dirname, './services/insurance/index.html'),
				landlords: resolve(__dirname, './landlords/index.html'),
				crediting: resolve(__dirname, './services/crediting/index.html'),
				shinny: resolve(__dirname, './services/shinnyy-сentr/index.html'),
				osmotr: resolve(__dirname, './services/tehnicheskiy-osmotr/index.html'),
				obsluzh: resolve(__dirname, './services/servisnoe-obsluzhivanie/index.html'),
				remont: resolve(__dirname, './services/remont-dvigatel/index.html'),
				akpp: resolve(__dirname, './services/remont-akpp/index.html'),
				masla: resolve(__dirname, './services/zamena-masla/index.html'),
				compared: resolve(__dirname, './personal/list-compared/index.html'),
				favorite: resolve(__dirname, './personal/favorite-cars/index.html'),
				reserve: resolve(__dirname, './reserve/index.html')
			},
		},

		outDir: 'docs', // Выходная папка
		// sourcemap: true, // Генерация sourcemaps (путь js)
		chunkSizeWarningLimit: 1000, // Sets the warning limit to 1000 kB (1MB)
	},
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
		},
	},
})
