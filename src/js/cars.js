const urlParams = new URLSearchParams(window.location.search);
const brandName = urlParams.get('brand');
// const hasCategory = urlParams.has('brand');
// for (const [key, value] of urlParams.entries()) {
//     console.log(`${key}: ${value}`);
// }

document.querySelector('#path').innerHTML = brandName.toUpperCase()
document.querySelector('#vitrina_name').innerHTML = brandName.toUpperCase()+' с пробегом — выбрать и купить в Автосеть.рф'