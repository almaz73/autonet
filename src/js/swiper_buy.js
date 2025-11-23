document.addEventListener('DOMContentLoaded', () => {
    let swiper_buy = document.querySelector('swiper_buy')
    if (!swiper_buy) return console.warn('карусель фоток не подключен')

    swiper_buy.innerHTML = block
})

let block = `
    <section class="swiper mySwiper buy_swiper" style="z-index: 1">
    <div class="swiper-wrapper">
        <div class="swiper-slide">
            <img class="buy_lg" src="../photo-buy/1/585х200.webp" alt="">
            <img class="buy_mg" src="../photo-buy/1/278х402.webp" alt="">
        </div>
         <div class="swiper-slide">
            <img class="buy_lg" src="../photo-buy/2/585х200.webp" alt="">
            <img class="buy_mg" src="../photo-buy/2/278х402.webp" alt="">
        </div>
         <div class="swiper-slide">
            <img class="buy_lg" src="../photo-buy/3/585х200.webp" alt="">
            <img class="buy_mg" src="../photo-buy/3/278х402.webp" alt="">
        </div>
         <div class="swiper-slide">
            <img class="buy_lg" src="../photo-buy/4/585х200.webp" alt="">
            <img class="buy_mg" src="../photo-buy/4/278х402.webp" alt="">
        </div>
         <div class="swiper-slide">
            <img class="buy_lg" src="../photo-buy/5/585х200.webp" alt="">
            <img class="buy_mg" src="../photo-buy/5/278х402.webp" alt="">
        </div>
         <div class="swiper-slide">
            <img class="buy_lg" src="../photo-buy/6/585х200.webp" alt="">
            <img class="buy_mg" src="../photo-buy/6/278х402.webp" alt="">
        </div>
         <div class="swiper-slide">
            <img class="buy_lg" src="../photo-buy/7/585х200.webp" alt="">
            <img class="buy_mg" src="../photo-buy/7/278х402.webp" alt="">
        </div>
         <div class="swiper-slide">
            <img class="buy_lg" src="../photo-buy/8/585х200.webp" alt="">
            <img class="buy_mg" src="../photo-buy/8/278х402.webp" alt="">
        </div>
         <div class="swiper-slide">
            <img class="buy_lg" src="../photo-buy/9/585х200.webp" alt="">
            <img class="buy_mg" src="../photo-buy/9/278х402.webp" alt="">
        </div>
         <div class="swiper-slide">
            <img class="buy_lg" src="../photo-buy/10/585х200.webp" alt="">
            <img class="buy_mg" src="../photo-buy/10/278х402.webp" alt="">
        </div>
         <div class="swiper-slide">
            <img class="buy_lg" src="../photo-buy/11/585х200.webp" alt="">
            <img class="buy_mg" src="../photo-buy/11/278х402.webp" alt="">
        </div>
         <div class="swiper-slide">
            <img class="buy_lg" src="../photo-buy/12/585х200.webp" alt="">
            <img class="buy_mg" src="../photo-buy/12/278х402.webp" alt="">
        </div>
         <div class="swiper-slide">
            <img class="buy_lg" src="../photo-buy/13/585х200.webp" alt="">
            <img class="buy_mg" src="../photo-buy/13/278х402.webp" alt="">
        </div>
         <div class="swiper-slide">
            <img class="buy_lg" src="../photo-buy/14/585х200.webp" alt="">
            <img class="buy_mg" src="../photo-buy/14/278х402.webp" alt="">
        </div>
         <div class="swiper-slide">
            <img class="buy_lg" src="../photo-buy/15/585х200.webp" alt="">
            <img class="buy_mg" src="../photo-buy/15/278х402.webp" alt="">
        </div>
         <div class="swiper-slide">
            <img class="buy_lg" src="../photo-buy/16/585х200.webp" alt="">
            <img class="buy_mg" src="../photo-buy/16/278х402.webp" alt="">
        </div>
         <div class="swiper-slide">
            <img class="buy_lg" src="../photo-buy/17/585х200.webp" alt="">
            <img class="buy_mg" src="../photo-buy/17/278х402.webp" alt="">
        </div>
         <div class="swiper-slide">
            <img class="buy_lg" src="../photo-buy/18/585х200.webp" alt="">
            <img class="buy_mg" src="../photo-buy/18/278х402.webp" alt="">
        </div>
         <div class="swiper-slide">
            <img class="buy_lg" src="../photo-buy/19/585х200.webp" alt="">
            <img class="buy_mg" src="../photo-buy/19/278х402.webp" alt="">
        </div>
         <div class="swiper-slide">
            <img class="buy_lg" src="../photo-buy/20/585х200.webp" alt="">
            <img class="buy_mg" src="../photo-buy/20/278х402.webp" alt="">
        </div>
    </div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
    <div class="swiper-pagination"></div>
</section>`