const server = 'https://ext.cartat.ru/exchange'
const Cache_serv = localStorage.getItem('CACHE_SERV')
let CACHE = Cache_serv ? JSON.parse(Cache_serv) : {}
if (CACHE instanceof Array) CACHE = {}

Object.keys(CACHE).map(key => {
    if (CACHE[key].hour && CACHE[key].hour < Date.now()) delete CACHE[key] // сразу чистим устаревшие по времени
})


/**************************************/
/* Некоторые методы кэшируем на определенное время, задаем в минутах*/

/* Некоторые методы кэшируем  пока не загрузится основной, для мгновенного показа, если нет времени ожидания */

export function withCache(request, callback, hour) {
   if (CACHE[request] ) {
        // if (hour && CACHE[request].hour > Date.now()) { //TODO пока временно во время разработки отключаем кэш
        //     return callback(CACHE[request].data)
        // }

       if (hour && location.href.includes('localhost')) { // для меня
           // не брать из интернета
           return callback(CACHE[request].data)
       }
        callback(CACHE[request].data)
    }


    // console.warn('Н А  С Е Р В Е Р   ! ! !')
    return fetch(server + request).then(res => {
        if (!res.ok) console.log(`HTTP error! status: ${res.status}`)
        showPreloader(false)
        return res.json();
    })
        .then(res => {
            CACHE[request] = {data: res}
            if (hour) CACHE[request].hour = Date.now() + hour * 60 * 1000
            if (res && Object.keys(res).length) localStorage.setItem('CACHE_SERV', JSON.stringify(CACHE))

            return callback(CACHE[request].data)
        })
        .catch(error => console.error('Произошла ошибка:', error));
}
