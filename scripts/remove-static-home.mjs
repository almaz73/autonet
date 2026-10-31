// Главная должна рендериться сервером (SSR): статический index.html в корне сайта
// перехватывает "/" на nginx, и поисковики не видят ссылки на автомобили.
import fs from 'node:fs'
import path from 'node:path'
import {fileURLToPath} from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const targets = [
    path.join(root, 'dict', 'index.html'),
    path.resolve(root, '..', 'front', 'index.html'),
]

for (const file of targets) {
    fs.rmSync(file, {force: true})
    console.log(`Удалён статический ${file}`)
}
