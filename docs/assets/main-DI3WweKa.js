(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))r(c);new MutationObserver(c=>{for(const s of c)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(c){const s={};return c.integrity&&(s.integrity=c.integrity),c.referrerPolicy&&(s.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?s.credentials="include":c.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(c){if(c.ep)return;c.ep=!0;const s=t(c);fetch(c.href,s)}})();const $e={events:{},on(e,o){this.events[e]||(this.events[e]=[]),this.events[e].push(o)},emit(e,o){this.events[e]&&this.events[e].forEach(t=>t(o))},off(e,o){this.events[e]&&(this.events[e]=this.events[e].filter(t=>t!==o))}};let Pe={brandsIds:[],modelsIds:[],gearboxTypes:[],engineTypes:[],driveTypes:[],wheelTypes:[],bodyTypes:[],bodyColors:[]};function w(e){return parseInt(e).toLocaleString("ru-RU")}function Me(e){let o=[];return e&&e.forEach(t=>{let r=w(t.milleage)+" км, ";t.engineCapacity&&(r+=t.engineCapacity),t.gearboxType&&(r+=" "+t.gearboxType),t.enginePower&&(r+=" ("+t.enginePower+"&nbsp;л.с)"),t.bodyType&&(r+=", "+t.bodyType),r+=", "+t.driveType,t.engineType&&(r+=", "+t.engineType);let c=w(parseInt(parseInt(t.price.replace(/ /g,""))/90.12));o.push({address:t.fullAddress,id:t.id,name:t.brand+" "+t.model,href:"/cars/car.html?id="+t.id,price:w(t.price),fromPerMonth:c,info:r,photos:t.images,yearReleased:t.yearReleased})}),o}function pe(e,o){const t=[2,0,1,1,1,2];return o[e%100>4&&e%100<20?2:t[e%10<5?e%10:5]]}function Ie(e){return new URLSearchParams(window.location.search).get(e)}function ke(e){let o=document.querySelector(".coin");e===!1&&(o.querySelector("span").title="По возрастанию",o.querySelector("img").style.transform="rotate(180deg)"),e===null&&(o.querySelector("span").title="Не упорядоченно",o.querySelector("img").style.transform="rotate(270deg)"),e===!0&&(o.querySelector("span").title="По убыванию",o.querySelector("img").style.transform="rotate(0deg)")}const fe=function(e){let o=e.value;if(!o)return"";let t=o.replace(/\D/g,""),r="";if(o.length<2)return t;["7","8","9"].indexOf(t[0])>-1?(t[0]==="9"&&(t="7"+t),r=(t[0]==="8"?"8":"+7")+" ",t.length>1&&(r+="("+t.substring(1,4)),t.length>=5&&(r+=") "+t.substring(4,7)),t.length>=8&&(r+="-"+t.substring(7,9)),t.length>=10&&(r+="-"+t.substring(9,11))):r=t.substring(0,11),e.value=r};window.formattingPhone=fe;const ye=function(e){return e?(e.slice(0,2)==="+7"&&(e=e.replaceAll("+7","8")),e.replaceAll(" ","").replaceAll("+","").replaceAll("(","").replaceAll(")","").replaceAll("-","")):""},me=function(e){if(!/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu.test(e)&&e)return sendMessage("Ошибочный Email ","error")};function te(e){let o=!1,t=!1;return e.forEach(r=>{if(r&&r.required){let c=function(){r.style.background="",r.removeEventListener("change",c)};r.style.border=r.value?"":"1px solid red",r.value||(o=!0),r.addEventListener("change",c)}if(r&&r.classList.contains("capctha-div")&&!r.classList.contains("checked")&&(r.style.border="1px solid red",o=!0),r&&r.type==="checkbox"){let c=r.checked;r.parentNode.style.border=c?"":"1px solid red",c||(o=!0),t=o}r&&r.classList.contains("attent")&&(r.style.display=t?"block":"none"),r&&r.name==="email"&&r.value&&me(r.value)&&(o=!0),r&&r.name==="phone"&&r.value&&ye(r.value).length!==11&&(sendMessage("Телефон неправильный","warning"),r.style.border="1px solid red",o=!0)}),o&&sendMessage("Заполните обязательные поля","warning"),o}function De(){document.querySelectorAll(".with_sub_field").forEach(o=>{let t=o.querySelector(".with_sub_field .select");t.querySelectorAll(".field").forEach(c=>{c.addEventListener("click",s=>r(s.target.innerHTML))});function r(c){t.querySelectorAll(".field").forEach(s=>{s&&s.classList.contains("active")&&s.classList.remove("active")}),t.querySelectorAll(".field").forEach(s=>{s&&s.innerHTML===c&&s.classList.add("active")}),o.querySelector("input").value=c}o.addEventListener("click",()=>{let c=t.style.display!=="block";t.style.display=c?"block":"none"})})}function he(e,o,t,r,c){r=r||"Отправить заявку",c=c||"_ _ _ _ _ _ ";let s=parseInt(Math.random()*1e3),a=`<div class="wrap ${e}"><h3>${c}</h3><div><div class="formBlock">`,d={name:"Имя","name*":"Ваше имя *",year:"Год выпуска","year*":"Год выпуска *",city:"Город","city*":"Город *",price:"Цена",brand:"Марка","brand*":"Марка *",model:"Модель","model*":"Модель *",phone:"Телефон","phone*":"Ваш телефон *",message:"Сообщение","message*":"Сообщение *",email:"E-mail","email*":"E-mail *",osago:"ОСАГО",select:"Выберите услугу"};return o.forEach(l=>{let f=l.includes("*"),i=f?l.slice(0,-1):l;l==="osago"?a+=`<div class="form__modal--group" style="position: relative">
                            <div class="form__group with_sub_field">
                                <input name="osago"  value="ОСАГО">
                                <div class="select">
                                    <div class="field">КАСКО</div>
                                    <div class="field active">ОСАГО</div>
                                </div>
                            </div>
                        </div>`:l==="select"?a+=`<div class="form__modal--group">                
                <div class="form__group with_sub_field">
                    <input name="selection"  placeholder="Выберите услугу">
                    <div class="select">
                        <div class="field">Диагностика</div>
                        <div class="field ">Техническое обслуживание</div>
                        <div class="field">Ремонт двинателя</div>
                        <div class="field">Ремонт трансмиссии</div>
                        <div class="field">Ремонт подвески</div>
                        <div class="field">Ремонт рулевого управления</div>
                        <div class="field">Ремонт тормозной системы</div>
                    </div>
                </div>
            </div>`:a+=`<div class="form__modal--group">
                <div class="form__group">
                  <input name="${i}" ${f?"required":""} autocomplete="off" placeholder="${d[l]}" 
${i==="phone"?'oninput="formattingPhone(this)"':""}>
                </div>
            </div>`}),a+=`
<div class="form__modal--group">
              <div class="capctha-div"></div>
            </div>
            <button class="page__btn page__btn--current" onclick="${t}('${e}')">
                <span> ${r} </span>
            </button>
            <div class="modal__personal">
                <input type="checkbox" id="dd${s}">
                <label for="dd${s}" style="cursor: pointer">
                    Нажав кнопку «Отправить заявку» я даю согласие
                    на обработку
                    персональных <a href="/privacy-policy/" target="_blank">данных</a>
                </label>
            </div></div></div></div>`,a}function Oe(e){let o=document.querySelector("#set_filter span.number");o&&(o.innerHTML=e+" "+pe(e,["предложение","предложения","предложений"]))}function Re(e){let o=e.length,t=e.filter(c=>c.images.length),r=t.length;return o!==r&&console.log("%c без фоток БЫЛО / СТАЛО ","background: orange; color: black",o+"/"+r),t}const be=[{city:"Альметьевски",url:"/photo/contacts/chelna_myra.webp",coords:"54.912580,52.320238",address:"ул. Герцена, 1б",tel:"8–800–500–11–56",days:"ПН-ВС с 9:00 до 21:00",map:"https://yandex.ru/map-widget/v1/?um=constructor%3Aef6e8fca746164e348adf860145722f5a890983a47408dc685ab04b8076a0f7b&amp;source=constructor"},{city:"Альметьевски",url:"/photo/contacts/chelna_myra.webp",coords:"54.912580,52.320238",address:"ул. Советская, 182/1",tel:"8–800–500–11–56",days:"ПН-ВС с 9:00 до 21:00",map:"https://yandex.ru/map-widget/v1/?um=constructor%3Aa48691a6bc05dd67e7bcfb1ad8e429acaff3cf13a292a8f4a69e512dbacb7fda&amp;source=constructor"},{city:"Астрахань",url:"/photo/contacts/chelna_myra.webp",coords:"46.288304, 47.971339",address:"ул. Адмирала Нахимова, 76",tel:"8–800–500–11–56",days:"ПН-ВС с 9:00 до 21:00",map:"https://yandex.ru/map-widget/v1/?um=constructor%3A4e8033de51901c5bd7b5a457e33850072459acff83441bcc859c3b297b337a01&amp;source=constructor"},{city:"Буинск",url:"/photo/contacts/chelna_myra.webp",coords:"54.952455, 48.286585",address:"ул. Ефремова, 2а",tel:"8–800–500–11–56",days:"ПН-ВС с 9:00 до 21:00",map:"https://yandex.ru/map-widget/v1/?um=constructor%3Ac38e150dd8e42257ca0c6d684e1265b29fe99ae6c77dc11c29773e5e85c015d4&amp;source=constructor"},{city:"Екатеринбург",url:"/photo/contacts/chelna_myra.webp",coords:"56.789579, 60.607625",address:"ул. 8 марта, 205А",tel:"8–800–500–11–56",days:"ПН-ВС с 9:00 до 21:00",map:"https://yandex.ru/map-widget/v1/?um=constructor%3A7d97dc8bafe4d372c2b3d4cf1cb634f3835520141a7310296d2f363580c2075f&amp;source=constructor"},{city:"Казань",url:"/photo/contacts/chelna_myra.webp",coords:"55.823581, 49.159553",address:"пр. Ямашева, 115а",tel:"8–800–500–11–56",days:"ПН-ВС с 9:00 до 21:00",map:"https://yandex.ru/map-widget/v1/?um=constructor%3A0740fee9f6396ff8f4aa3048c10c417b7f2be4ce61e41f46d69a4627f97951c7&amp;source=constructor"},{city:"Казань",url:"/photo/contacts/chelna_myra.webp",coords:"55.826655, 49.022026",address:"Горьковское шоссе, 55",tel:"8–800–500–11–56",days:"ПН-ВС с 9:00 до 21:00",map:"https://yandex.ru/map-widget/v1/?um=constructor%3Af4c7baecf06e4154b6bbd13632c95edc600e2482b332190b262776928450e25f&amp;source=constructor"},{city:"Казань",url:"/photo/contacts/chelna_myra.webp",coords:"55.803967, 49.208709",address:"пр. Победы, 212к2",tel:"8–800–500–11–56",days:"ПН-ВС с 9:00 до 21:00",map:"https://yandex.ru/map-widget/v1/?um=constructor%3A169e10ae037f14065a213eecd07e24f9a9d53659f4170e2d3c90d579d7b544bd&amp;source=constructor"},{city:"Магнитогорск",url:"/photo/contacts/chelna_myra.webp",coords:"53.367384, 59.063538",address:"Шоссе Космонавтов 59А",tel:"8–800–500–11–56",days:"ПН-ВС с 9:00 до 21:00",map:"https://yandex.ru/map-widget/v1/?um=constructor%3A5034cda35a547f1137730dd647fb151bce1c2d0ab1202a8241bcf7eebda0ceda&amp;source=constructor"},{city:"Набережные Челны",url:"/photo/contacts/chelna_myra.webp",coords:"55.734962, 52.421602",address:"пр. Хасана Туфана, 3",tel:"8–800–500–11–56",days:"ПН-ВС с 9:00 до 21:00",map:"https://yandex.ru/map-widget/v1/?um=constructor%3Af388f618621b0c96a1f876db4250b86a7d605a4dd2620aa26e0c9e68a27cc8fa&amp;source=constructor"},{city:"Набережные Челны",url:"/photo/contacts/chelna_myra.webp",coords:"55.674714, 52.281223",address:"пр. Мусы Джалиля, 15",tel:"8–800–500–11–56",days:"ПН-ВС с 9:00 до 21:00",map:"https://yandex.ru/map-widget/v1/?um=constructor%3A1f2ed0dd2ffe0c767cc59e635f514c05fb40bf75730bef48fd3c5ca1bedc9ff5&amp;source=constructor"},{city:"Нижнекамск",url:"/photo/contacts/chelna_myra.webp",coords:"55.613672, 51.779136",address:"ул. Южная, 5г",tel:"8–800–500–11–56",days:"ПН-ВС с 9:00 до 21:00",map:"https://yandex.ru/map-widget/v1/?um=constructor%3A07be9d83adb6c7f5a6f64ec6589361c02dffcaf76a77c2d1f3bc90495bdad97c&amp;source=constructor"},{city:"Нижнекамск",url:"/photo/contacts/chelna_myra.webp",coords:"55.614353, 51.969439",address:"ул. Промзона,10/22",tel:"8–800–500–11–56",days:"ПН-ВС с 9:00 до 21:00",map:"https://yandex.ru/map-widget/v1/?um=constructor%3A35da28743b493552af8ed2fb472dcfc555d07bff1d302851e5caf07330deab72&amp;source=constructor"},{city:"Нижнекамск",url:"/photo/contacts/chelna_myra.webp",coords:"55.631989,51.828178",address:"ул. Спортивная, 4а",tel:"8–800–500–11–56",days:"ПН-ВС с 9:00 до 21:00",map:"https://yandex.ru/map-widget/v1/?um=constructor%3A5ca83ddacf20c9ebed72ec201052cfb4ed286b32f8c00f7d7c4da38b89af08dd&amp;source=constructor"},{city:"Нижний Тагил",url:"/photo/contacts/chelna_myra.webp",coords:"57.946923, 59.916489",address:"ул. Краснознаменная, 134",tel:"8–800–500–11–56",days:"ПН-ВС с 9:00 до 21:00",map:"https://yandex.ru/map-widget/v1/?um=constructor%3A6f60d8f689946cf10bc949fb4319b3edb1ee1218a7ec8c9f3d3b00d0c7dcafb7&amp;source=constructor"},{city:"Нижний Тагил",url:"/photo/contacts/chelna_myra.webp",coords:"57.879827, 59.932685",address:"Черноисточинское ш, 68с2",tel:"8–800–500–11–56",days:"ПН-ВС с 9:00 до 21:00",map:"https://yandex.ru/map-widget/v1/?um=constructor%3Abfdeb70911627e4f5364dc9f99d07b51c2126f962b56eccbc5f36dc0dfdef20a&amp;source=constructor"},{city:"Самара",url:"/photo/contacts/chelna_myra.webp",coords:"53.141011, 50.181024",address:"Южное шоссе, 10а",tel:"8–800–500–11–56",days:"ПН-ВС с 9:00 до 21:00",map:"https://yandex.ru/map-widget/v1/?um=constructor%3Ac49f6a300c736bd719acb3376728ee628dc7d9d371781ac444e51fb63a37fa82&amp;source=constructor"},{city:"Серов",url:"/photo/contacts/chelna_myra.webp",coords:"59.586669, 60.570884",address:"ул. Каквинская, 29",tel:"8–800–500–11–56",days:"ПН-ВС с 9:00 до 21:00",map:"https://yandex.ru/map-widget/v1/?um=constructor%3A9a5736f0d49c86e9d3d38d16cd609e413a2b2838b483e64f9d9d336f044c89c8&amp;source=constructor"},{city:"Стерлитамак",url:"/photo/contacts/chelna_myra.webp",coords:"53.639303,55.911492",address:"ул. Шаймуратова, 12",tel:"8–800–500–11–56",days:"ПН-ВС с 9:00 до 21:00",map:"https://yandex.ru/map-widget/v1/?um=constructor%3A6d26f637308738722b92d9f7211e78b4410c02bcb4ed096449da348add2097b4&amp;source=constructor"},{city:"Тверь",url:"/photo/contacts/chelna_myra.webp",coords:"56.823085, 35.874940",address:"ул. Оснабрюксая, 39,<br> пом. 111Б",tel:"8–800–500–11–56",days:"ПН-ВС с 9:00 до 21:00",map:"https://yandex.ru/map-widget/v1/?um=constructor%3A2d25b65df6c8d0b7cf749b5e83c7168ee79f3f3ff2a62d7defed0609f1b4aee0&amp;source=constructor"},{city:"Тольятти",url:"/photo/contacts/chelna_myra.webp",coords:"53.570484, 49.469034",address:"Обводное ш., 71",tel:"8–800–500–11–56",days:"ПН-ВС с 9:00 до 21:00",map:"https://yandex.ru/map-widget/v1/?um=constructor%3A5ab93efaa670c0a4ecc603f0a719e58bd389221aa688a384893cba9d5657b4f4&amp;source=constructor"},{city:"Уфа",url:"/photo/contacts/chelna_myra.webp",coords:"54.741061, 55.987866",address:"пр. Октября, 4/1, ТЦ Мир, <br> 3 уровень",tel:"8–800–500–11–56",days:"ПН-ВС с 9:00 до 21:00",map:"https://yandex.ru/map-widget/v1/?um=constructor%3Ae6fc36ea5faa5164e18586cc2c35b1d09f1401830b27c11438377d20143a9303&amp;source=constructor"},{city:"Уфа",url:"/photo/contacts/chelna_myra.webp",coords:"54.773538, 56.065914",address:"ул. Маршала Жукова, 16",tel:"8–800–500–11–56",days:"ПН-ВС с 9:00 до 21:00",map:"https://yandex.ru/map-widget/v1/?um=constructor%3Ae77ab1daaa8f743e51e23372676cf7785ea83ffeaf29df86d7cec91039b41deb&amp;source=constructor"}],Be=[{city:"Ижевск",url:"/photo/contacts/chelna_myra.webp",coords:"56.886263, 53.309622",address:"ул. Автозаводская, 5а/3<br> (Рулевой)",tel:"8–800–500–11–56",days:"ПН-ВС с 9:00 до 21:00",map:"https://yandex.ru/map-widget/v1/?um=constructor%3A7a0aa8d3c0916b54b822ec3ef1b00b9a27b44491cd4c8d77c59098b1bcffa211&amp;source=constructor"},{city:"Йошкар-Ола",url:"/photo/contacts/chelna_myra.webp",coords:"56.643243, 47.927752",address:'Сернурский тракт, 23<br> (здание "Гарант Авто")',tel:"8–800–500–11–56",days:"ПН-ВС с 9:00 до 21:00",map:"https://yandex.ru/map-widget/v1/?um=constructor%3A53fc65c2944e3744e91206e42120ad5319866b9bffb8f276fda6762447aab99c&amp;source=constructor"},{city:"Киров",url:"/photo/contacts/chelna_myra.webp",coords:"58.61728733640516, 49.629800881945016",address:"ул. Лепсе, 25/4",tel:"8–800–500–11–56",days:"ПН-ВС с 9:00 до 21:00",map:"https://yandex.ru/map-widget/v1/?um=constructor%3A7889c8a92ec01c9122a48ddcaec1a8ac753bd68146338a1c4deed34d90f9aeab&amp;source=constructor"},{city:"Магнитогорск",url:"/photo/contacts/chelna_myra.webp",coords:"53.430389, 58.973231",address:"ул. Герцена 6, <br>БЦ АльфаЦентр , офис 103",tel:"8–800–500–11–56",days:"ПН-ВС с 9:00 до 21:00",map:"https://yandex.ru/map-widget/v1/?um=constructor%3A5a56a953780b0e40fbf31ddf65b7633b6e20bbdb0bed23e6fb4c1f3993229fdf&amp;source=constructor"},{city:"Нижний Новгород",url:"/photo/contacts/chelna_myra.webp",coords:"56.311626, 44.070441",address:'ул.Родионова, 167 <br>("Тайм Сервис")',tel:"8–800–500–11–56",days:"ПН-ВС с 9:00 до 21:00",map:"https://yandex.ru/map-widget/v1/?um=constructor%3A4ce9ad24bc1a339b419f7b5069aeb4503efc432c074ce7a41b2683995b08826d&amp;source=constructor"},{city:"Пенза",url:"/photo/contacts/chelna_myra.webp",coords:"53.18924053714283, 45.0405558150391",address:"ул. Измайлова, 26",tel:"8–800–500–11–56",days:"ПН-ВС с 9:00 до 21:00",map:"https://yandex.ru/map-widget/v1/?um=constructor%3A32cbf070a2316cbc09c1d3d0d8399b6f3e035b51070bad0e7c3041e6d8845213&amp;source=constructor"},{city:"Пермь",url:"/photo/contacts/chelna_myra.webp",coords:"57.989155, 56.207758",address:"ул.Стахановская, 54а",tel:"8–800–500–11–56",days:"ПН-ВС с 9:00 до 21:00",map:"https://yandex.ru/map-widget/v1/?um=constructor%3A8267dbdd95bb5fc764758e7ff0b66cf403880143d4dade949af88e5bcc1fa334&amp;source=constructor"},{city:"Самара",url:"/photo/contacts/chelna_myra.webp",coords:"53.21473485688437, 50.18689756337296",address:"ул. Авроры, 156в",tel:"8–800–500–11–56",days:"ПН-ВС с 9:00 до 21:00",map:"https://yandex.ru/map-widget/v1/?um=constructor%3A8c201bb0fff1372a85f28f25de2c77cc80ea1d7272516bce6abd368c91324f6e&amp;source=constructor"},{city:"Чебоксары",url:"/photo/contacts/chelna_myra.webp",coords:"56.115825, 47.270554",address:"пр. Мира, 54б (Автомания)",tel:"8–800–500–11–56",days:"ПН-ВС с 9:00 до 21:00",map:"https://yandex.ru/map-widget/v1/?um=constructor%3A68e72e069da58fd0337460e493c87575afafd93789bd40d35e1b5a606e335d3b&amp;source=constructor"},{city:"Челябинск",url:"/photo/contacts/chelna_myra.webp",coords:"55.154239, 61.303793",address:"БЦ Спиридонов, <br>ул. Ленина 21в , офис 1052",tel:"8–800–500–11–56",days:"ПН-ВС с 9:00 до 21:00",map:"https://yandex.ru/map-widget/v1/?um=constructor%3A711b921703be62b7b6bb60f4a3a08775c26e9862880855f1d0f16835be8a4003&amp;source=constructor"}],Ne=[{city:"Казань",url:"/photo/contacts/chelna_myra.webp",coords:"55.823581, 49.159553",address:"пр. Ямашева, 115а",tel:"8–800–500–11–56",days:"ПН-ВС с 9:00 до 21:00",map:"https://yandex.ru/map-widget/v1/?um=constructor%3A6986b3ac4ba556c34180924eebb64192ba4696b58dab9b1e9fd7f5e34560aaa5&amp;source=constructor"},{city:"Казань",url:"/photo/contacts/chelna_myra.webp",coords:"55.803967, 49.208709",address:"пр. Победы, 212к2",tel:"8–800–500–11–56",days:"ПН-ВС с 9:00 до 21:00",map:"https://yandex.ru/map-widget/v1/?um=constructor%3Abcb084f68946abe81affde230c329b47e53ab28d9d6c28a5ff039f8454f9d8b8&amp;source=constructor"}],Xe=[{city:"Альметьевск",url:"/photo/contacts/chelna_myra.webp",coords:"54.903324, 52.324269",address:"ул. Герцена, 1б",tel:"8–800–500–11–56",days:"ПН-ВС с 9:00 до 21:00",map:"https://yandex.ru/map-widget/v1/?um=constructor%3Ad3a953bdeec5c742d7c5ad9a6e976789cccf67c719c5fb7841e40199048de33a&amp;source=constructor"},{city:"Казань",url:"/photo/contacts/chelna_myra.webp",coords:"54.903324, 52.324269",address:"пр. Победы, 212к2",tel:"8–800–500–11–56",days:"ПН-ВС с 9:00 до 21:00",map:"https://yandex.ru/map-widget/v1/?um=constructor%3Ac830f4cc623c4400e1c1b19b83f5edb3e4fa15d40a10d6885a4eb121c287eaa6&amp;source=constructor"},{city:"Набережные Челны",url:"/photo/contacts/chelna_myra.webp",coords:"55.734962, 52.421602",address:"пр. Хасана Туфана, 3",tel:"8–800–500–11–56",days:"ПН-ВС с 9:00 до 21:00",map:"https://yandex.ru/map-widget/v1/?um=constructor%3Ab30605670e79544549f3861c9d7fde3f5f302058711dd433dcdbc73d83863a48&amp;source=constructor"},{city:"Набережные Челны",url:"/photo/contacts/chelna_myra.webp",coords:"55.674714, 52.281223",address:"пр. Мусы Джалиля, 15",tel:"8–800–500–11–56",days:"ПН-ВС с 9:00 до 21:00",map:"https://yandex.ru/map-widget/v1/?um=constructor%3A459a0443c44b3d9771b776391ae96d4b6aa8c35aad7db04db13030bd2f4537e0&amp;source=constructor"},{city:"Нижнекамск",url:"/photo/contacts/chelna_myra.webp",coords:"55.614353, 51.969439",address:"ул. Промзона,10/22",tel:"8–800–500–11–56",days:"ПН-ВС с 9:00 до 21:00",map:"https://yandex.ru/map-widget/v1/?um=constructor%3Af7472f97221ff01d1cf41cc2c93557af5d73b5297d3b7a9fd50e40d50cf3f857&amp;source=constructor"},{city:"Нижнекамск",url:"/photo/contacts/chelna_myra.webp",coords:"55.631989,51.828178",address:"ул. Спортивная, 4а",tel:"8–800–500–11–56",days:"ПН-ВС с 9:00 до 21:00",map:"https://yandex.ru/map-widget/v1/?um=constructor%3A9778e202e4bfa133570d5b0a62f34e827e97f7e934cee1738b3ca0326469efb8&amp;source=constructor"},{city:"Нижнекамск",url:"/photo/contacts/chelna_myra.webp",coords:"55.613672, 51.779136",address:"ул. Южная, 5г",tel:"8–800–500–11–56",days:"ПН-ВС с 9:00 до 21:00",map:"https://yandex.ru/map-widget/v1/?um=constructor%3A8e2039178922dc29b2ef2a87fa30d1e15d2a8ef5c67388cb3741dc608c9e3e4d&amp;source=constructor"},{city:"Уфа",url:"/photo/contacts/chelna_myra.webp",coords:"54.773538, 56.065914",address:"ул. Маршала Жукова, 16",tel:"8–800–500–11–56",days:"ПН-ВС с 9:00 до 21:00",map:"https://yandex.ru/map-widget/v1/?um=constructor%3A7281c97a9571a78d8adcf25c3ec6bab5c14cfcd042ccab43cc1078dd2cf40504&amp;source=constructor"}],oe=["Альметьевск","Астрахань","Бугульма","Буинск","Екатеринбург","Казань","Магнитогорск","Набережные Челны","Нижнекамск","Нижний Тагил","Оренбург","Самара","Саранск","Стерлитамак","Тольятти","Тула","Ульяновск","Уфа"],He=[{vacancyName:"Кредитный специалист",id:1,salary:"70000",city:"Казань",content:` <strong>Обязанности:</strong>
                <ul>
                    <li><p>Консультирование клиентов по кредитным продуктам и условиям кредитования;</p></li>
                    <li><p>Расчет и оформление кредитных заявок в банках-партнерах;</p></li>
                    <li><p>Ведение документации по кредитным сделкам;</p></li>
                    <li><p>Проведение презентаций кредитных продуктов.</p></li>
                </ul>
                <strong>Требования:</strong>
                <ul>
                    <li><p>Опыт работы в продажах или кредитовании будет вашим преимуществом;</p></li>
                    <li><p>Развитые коммуникативные навыки и умение работать с людьми;</p></li>
                    <li><p>Ответственность и внимательность к деталям.</p></li>
                </ul>
                <strong>Условия:</strong>
                <ul>
                    <li>Работу в федеральной, динамично развивающейся компании с перспективами карьерного и профессионального роста;                    </li>
                    <li>Оплачиваемую стажировку и своевременную заработную плату;</li>
                    <li>Профессиональную поддержку. Научим всему, что знаем;</li>
                    <li>График работы 2/2 с 8:00-20:00.</li>
                </ul>`},{vacancyName:"Сварщик",id:2,city:"Самара",salary:"50000",content:` <strong>Обязанности:</strong>
              
                <strong>Требования:</strong>
                <ul>
                    <li><p>Опыт работы в продажах или кредитовании будет вашим преимуществом;</p></li>
                    <li><p>Развитые коммуникативные навыки и умение работать с людьми;</p></li>
                    <li><p>Ответственность и внимательность к деталям.</p></li>
                </ul>
             `},{vacancyName:"Тракторист",id:3,salary:"30000",city:"Казань",content:` <strong>Обязанности:</strong>
                <ul>
                    <li><p>Консультирование клиентов по кредитным продуктам и условиям кредитования;</p></li>
                    <li><p>Расчет и оформление кредитных заявок в банках-партнерах;</p></li>
                    <li><p>Ведение документации по кредитным сделкам;</p></li>
                    <li><p>Проведение презентаций кредитных продуктов.</p></li>
                </ul>
                <strong>Требования:</strong>
                <ul>
                    <li><p>Опыт работы в продажах или кредитовании будет вашим преимуществом;</p></li>
                    <li><p>Развитые коммуникативные навыки и умение работать с людьми;</p></li>
                    <li><p>Ответственность и внимательность к деталям.</p></li>
                </ul>
                <strong>Условия:</strong>
                <ul>
                    <li>Работу в федеральной, динамично развивающейся компании с перспективами карьерного и
                        профессионального роста;
                    </li>
                    <li>Оплачиваемую стажировку и своевременную заработную плату;</li>
                    <li>Профессиональную поддержку. Научим всему, что знаем;</li>
                    <li>График работы 2/2 с 8:00-20:00.</li>
                </ul>`},{vacancyName:"Почтальон",id:4,city:"Казань",salary:"12000",content:` <strong>Обязанности:</strong>
              
                <strong>Требования:</strong>
                <ul>
                    <li><p>Опыт работы в продажах или кредитовании будет вашим преимуществом;</p></li>
                    <li><p>Развитые коммуникативные навыки и умение работать с людьми;</p></li>
                    <li><p>Ответственность и внимательность к деталям.</p></li>
                </ul>
             `},{vacancyName:"Парикмахер",id:5,salary:"200000",city:"Казань",content:` <strong>Обязанности:</strong>
                <ul>
                    <li><p>Консультирование клиентов по кредитным продуктам и условиям кредитования;</p></li>
                    <li><p>Расчет и оформление кредитных заявок в банках-партнерах;</p></li>
                    <li><p>Ведение документации по кредитным сделкам;</p></li>
                    <li><p>Проведение презентаций кредитных продуктов.</p></li>
                </ul>
                <strong>Требования:</strong>
                <ul>
                    <li><p>Опыт работы в продажах или кредитовании будет вашим преимуществом;</p></li>
                    <li><p>Развитые коммуникативные навыки и умение работать с людьми;</p></li>
                    <li><p>Ответственность и внимательность к деталям.</p></li>
                </ul>
                <strong>Условия:</strong>
                <ul>
                    <li>Работу в федеральной, динамично развивающейся компании с перспективами карьерного и
                        профессионального роста;
                    </li>
                    <li>Оплачиваемую стажировку и своевременную заработную плату;</li>
                    <li>Профессиональную поддержку. Научим всему, что знаем;</li>
                    <li>График работы 2/2 с 8:00-20:00.</li>
                </ul>`},{vacancyName:"Летчик",id:6,city:"Уфа",salary:"800000",content:` <strong>Обязанности:</strong>
              
                <strong>Требования:</strong>
                <ul>
                    <li><p>Опыт работы в продажах или кредитовании будет вашим преимуществом;</p></li>
                    <li><p>Развитые коммуникативные навыки и умение работать с людьми;</p></li>
                    <li><p>Ответственность и внимательность к деталям.</p></li>
                </ul>
             `}],Fe=[{address:"Альметьевск , Герцена 1Б",id:210,type:"tyres",winter:!0,name:"Viatti Brina Nordico 225/45 R17 Зима шип ",href:"/cars/2106/651138/",price:"15 000",info:"",photos:["/photo-tyres/1/NK0_03b04be8_00002.jpg","/photo-tyres/1/NK0_351bedd2_00002.jpg","/photo-tyres/1/NK0_351bedd2_00003.jpg","/photo-tyres/1/NK0_ff8cd2b6_00003.jpg","/photo-tyres/1/NK0_ff8cd2b6_00004.jpg","/photo-tyres/1/NK0_ff8cd2b6_00004.jpg"]},{address:"Альметьевск , Герцена 1Б",id:211,type:"tyres",name:"Viatti Brina Nordico 225/45 R17 Зима шип ",href:"/cars/2106/651138/",price:"21 091",info:"",photos:["/photo-tyres/1/NK0_351bedd2_00002.jpg","/photo-tyres/1/NK0_03b04be8_00002.jpg","/photo-tyres/1/NK0_351bedd2_00003.jpg","/photo-tyres/1/NK0_ff8cd2b6_00003.jpg","/photo-tyres/1/NK0_ff8cd2b6_00004.jpg","/photo-tyres/1/NK0_ff8cd2b6_00004.jpg"]},{address:"Альметьевск , Герцена 1Б",id:212,type:"tyres",winter:!0,name:"Viatti Brina Nordico 225/45 R17 Зима шип ",href:"/cars/2106/651138/",price:"15 000",info:"",photos:["/photo-tyres/1/NK0_351bedd2_00003.jpg","/photo-tyres/1/NK0_03b04be8_00002.jpg","/photo-tyres/1/NK0_351bedd2_00002.jpg","/photo-tyres/1/NK0_ff8cd2b6_00003.jpg","/photo-tyres/1/NK0_ff8cd2b6_00004.jpg"]},{address:"Альметьевск , Герцена 1Б",id:213,type:"tyres",winter:!0,name:"Viatti Brina Nordico 225/45 R17 Зима шип ",href:"/cars/2106/651138/",price:"21 091",info:"",photos:["/photo-tyres/1/NK0_ff8cd2b6_00003.jpg","/photo-tyres/1/NK0_03b04be8_00002.jpg","/photo-tyres/1/NK0_351bedd2_00002.jpg","/photo-tyres/1/NK0_351bedd2_00003.jpg","/photo-tyres/1/NK0_ff8cd2b6_00004.jpg"]},{address:"Альметьевск , Герцена 1Б",id:214,type:"tyres",name:"Viatti Brina Nordico 225/45 R17 Зима шип ",href:"/cars/2106/651138/",price:"15 000",info:"",photos:["/photo-tyres/1/NK0_ff8cd2b6_00004.jpg","/photo-tyres/1/NK0_03b04be8_00002.jpg","/photo-tyres/1/NK0_351bedd2_00002.jpg","/photo-tyres/1/NK0_351bedd2_00003.jpg","/photo-tyres/1/NK0_ff8cd2b6_00003.jpg"]}];let _=document.querySelector(".comb__items"),H=document.querySelector(".comb_field"),re=document.querySelector(".comb__selected"),ge=document.querySelector(".footer-city-button"),F=document.querySelector("#city-contacts"),j=document.querySelector(".comb_field img"),K=document.querySelector(".mySwiper"),ve=localStorage.getItem("selectedCity");_.innerHTML="";oe.forEach(e=>_.innerHTML+=`<div class="comb__item">${e}</div>`);H&&(re.innerHTML=ve||"Россия",document.addEventListener("click",()=>ce(!1)),H.addEventListener("click",e=>we(e)),_.addEventListener("click",e=>_e(e)));function _e(e){let o=e.target.innerText;if(o.length>30)return!1;re.innerHTML=ge.innerHTML=o,F&&(F.innerHTML=o),localStorage.setItem("selectedCity",o),window.setCity&&window.setCity(o)}function we(e){ce(_.style.display!=="block"),e.stopPropagation()}function ce(e){_&&(_.style.display=e?"block":"none"),j&&(j.style.rotate=e?"180deg":"0deg"),K&&(K.style.zIndex=e?-1:0)}let Se=document.querySelector("#innerCity"),C=document.querySelector(".form__modal-place--group input"),Le=["А","Б","Е","К","М","Н","О","С","Т","У"];function se(e){let o="";Le.forEach(t=>{let r=oe.filter(s=>s.slice(0,1)===t),c="";r.forEach(s=>{let a=e&&s.toUpperCase().includes(e)?" class='yel'":"";c+=`<li><a href="javascript:void(0)" onclick="setCity('${s}')"><span ${a}>${s}</span></a></li>`}),o+=`<div class="modal-place__box">
<div><div class="letter">${t}</div><ul>${c}</ul></div></div>`}),Se.innerHTML=o}C&&C.addEventListener("input",e=>{se(C.value.toUpperCase())});let G=document.querySelector(".button__burger"),T=document.querySelector(".main-nav.menu"),A=document.querySelector(".button__burger"),g=document.querySelector(".main-nav.cities"),V=document.querySelector(".footer-city-button"),z=document.querySelector("#city-contacts"),Y=document.querySelector(".modal-place__close"),J=document.querySelector(".mySwiper"),m,E=document.querySelector(".main-nav.rightpanel"),U=document.querySelector("#closer-fon"),W=document.querySelector(".modal-closer.form");J&&(J.style.zIndex=0);G&&G.addEventListener("click",()=>{if(m)return m=!1,g.style.transform="translateX(150vw)",!1;m=T.style.transform!=="none",T.style.transform=m?"none":"translateX(150vw)",m?(A.classList.add("close"),m=!1):A.classList.remove("close")});V&&V.addEventListener("click",()=>ne());z&&z.addEventListener("click",()=>ne());function ne(){m=g.style.transform!=="none",m&&(g.style.transform="none",g.style.backgroundColor="white"),se()}Y&&Y.addEventListener("click",()=>{g.style.transform="translateX(150vw)"});let Z=document.querySelector("#cookie-accept"),x=document.querySelector("#cookie-banner"),Te=localStorage.getItem("isCoockieBannerShow");!Te&&x&&x.classList.add("show");Z&&Z.addEventListener("click",()=>{localStorage.setItem("isCoockieBannerShow",new Date().toISOString()),x.classList.remove("show")});function q(e){E&&(E.style.transform="translateX(150vw)"),g&&(g.style.transform="translateX(150vw)"),T&&(T.style.transform="translateX(150vw)"),A&&A.classList.remove("close")}window.close_all=q;document.addEventListener("keydown",e=>e.key==="Escape"&&q());window.openRightPanel=function(){m=E.style.transform!=="none",m&&(E.style.transform="none")};U&&U.addEventListener("click",()=>q());W&&W.addEventListener("click",()=>q());const y=document.getElementById("mainPhoto");y&&y.addEventListener("click",function(){if(window.innerWidth<900)return!1;y.requestFullscreen?y.requestFullscreen():y.mozRequestFullScreen?y.mozRequestFullScreen():y.webkitRequestFullscreen?y.webkitRequestFullscreen():y.msRequestFullscreen&&y.msRequestFullscreen()});document.addEventListener("DOMContentLoaded",()=>{window.reloadAbdul()});window.reloadAbdul=function(){let e=document.querySelector("abdul");e&&(e.innerHTML=Ae)};const Ae=`
<div class="abdul abdulLightHor">
        <div class="abdul__block">
            <div class="bulba"></div>
            <div class="abdul__box">
                <div class="abdul__box--name">
                    Руслан Абдулнасыров
                </div>
                <div class="abdul__box--post">
                    Собственник компании АВТОСЕТЬ.РФ
                </div>
                <div class="abdul__box--info">
                <b style="opacity: 0; margin: -4px">А</b>«Я гарантирую качество» 
                
                Пожелания по работе принимаются в 
                <div style="display: inline-flex;direction: initial;float: right">
                    <a href="http://vk.me/avtoset_rf" target="_blank">
                            <span class="icon">
                              <img src="/svg/vk_2.svg" alt="" style="width: 16px">
                            </span>
                        <span class="text"> ВКонтакте</span>
                    </a>
                </div>
                </div>
            </div>
        </div>
</div>
`;document.addEventListener("DOMContentLoaded",()=>{$()});function $(){document.querySelectorAll(".capctha-div").forEach((o,t)=>{let r="_"+t,c=o;c&&(c.innerHTML=`<p class="instructions ${r}">
          Подтвердите, что вы не робот<br>
          Сдвиньте квадрат в белую область</p>
        <p class="result">✅<span>Спасибо !</span></p>
        <div class="target-area ${r}"></div>
        <div class="puzzle-piece ${r}">⇦ ⇨</div>`,new Ee(r,c))})}class Ee{constructor(o,t){this.parent=t,this.puzzlePiece=document.querySelector(`.puzzle-piece.${o}`),this.targetArea=document.querySelector(`.target-area.${o}`),this.instructions=document.querySelector(`.instructions.${o}`),this.isDragging=!1,this.initialX=0,this.currentX=0,this.offsetX=0,this.targetX=parseInt(Math.random()*73)+5,this.parent&&this.init()}init(){this.setupEventListeners(),this.updatePosition()}setupEventListeners(){this.puzzlePiece.addEventListener("mousedown",this.startDragging.bind(this)),document.addEventListener("mousemove",this.drag.bind(this)),document.addEventListener("mouseup",this.stopDragging.bind(this)),this.puzzlePiece.addEventListener("touchstart",this.startDraggingTouch.bind(this)),document.addEventListener("touchmove",this.dragTouch.bind(this)),document.addEventListener("touchend",this.stopDragging.bind(this))}startDragging(o){this.instructions.style.left="-10000px",this.targetArea.style.left=this.targetX+"%",this.isDragging=!0,this.initialX=o.clientX-this.offsetX,this.puzzlePiece.style.cursor="grabbing",o.preventDefault()}startDraggingTouch(o){this.instructions.style.left="-10000px",this.targetArea.style.left=this.targetX+"%",this.isDragging=!0;const t=o.touches[0];this.initialX=t.clientX-this.offsetX,o.preventDefault()}drag(o){this.isDragging&&(o.preventDefault(),this.currentX=o.clientX-this.initialX,this.currentX<0&&(this.currentX=0),this.currentX<0&&(this.currentX=0),this.updatePosition())}dragTouch(o){if(!this.isDragging)return;const t=o.touches[0];this.currentX=t.clientX-this.initialX,this.currentX<0&&(this.currentX=0),this.updatePosition()}stopDragging(){this.isDragging=!1,this.puzzlePiece.style.cursor="move",this.verify()}updatePosition(){this.puzzlePiece.style.transform=`translateX(${this.currentX}px)`,this.offsetX=this.currentX}verify(){const o=this.parent.getBoundingClientRect(),r=(this.puzzlePiece.getBoundingClientRect().left-o.left)/o.width*100;Math.abs(this.targetX-r)<1&&(this.parent.style.border="",this.parent.classList.add("checked"))}}const qe="https://ext.cartat.ru/exchange",Q=localStorage.getItem("CACHE_SERV");let p=Q?JSON.parse(Q):{};p instanceof Array&&(p={});Object.keys(p).map(e=>{p[e].hour&&p[e].hour<Date.now()&&delete p[e]});function u(e,o,t){if(p[e]){if(t&&location.href.includes("localhost"))return o(p[e].data);o(p[e].data)}return fetch(qe+e).then(r=>{if(!r.ok)throw new Error(`HTTP error! status: ${r.status}`);return showPreloader(!1),r.json()}).then(r=>(p[e]={data:r},t&&(p[e].hour=Date.now()+t*60*1e3),r&&Object.keys(r).length&&localStorage.setItem("CACHE_SERV",JSON.stringify(p)),o(p[e].data))).catch(r=>console.error("Произошла ошибка:",r))}const ae="https://ext.cartat.ru/exchange";function ie(e){let o="/api/Email/PostEmail",t="";return(e.fio||e.name)&&(t+="Имя: "+(e.fio||e.name)+`
`),e.phone&&(t+="Телефон: "+e.phone+`
`),e.city&&(t+="Город: "+e.city+`
`),e.email&&(t+="Email: "+e.email+`
`),e.aboutYourself&&(t+="О себе: "+e.aboutYourself+`
`),e.credit&&(t+="Сумма кредита: "+e.credit.replaceAll("&nbsp;"," ")+`
`),e.payment&&(t+="Первый платеж: "+e.payment.replaceAll("&nbsp;"," ")+`
`),e.yearCred&&(t+="Год кредита: "+e.yearCred+`
`),e.forMonth&&(t+="Платеж в месяц: "+e.forMonth.replaceAll("&nbsp;"," ")+`
`),e.price&&(t+="Стоимость автомобиля: "+e.price.replaceAll("&nbsp;"," ")+`
`),e.text&&(t+="Текст: "+e.text+`
`),e.selection&&(t+="Выбор сервиса: "+e.selection+`
`),e.brand&&(t+="Марка: "+e.brand+`
`),e.model&&(t+="Модель: "+e.model+`
`),e.year&&(t+="Год: "+e.year+`
`),e.osago&&(t+="Автострахование: "+e.osago+`
`),fetch(ae+o,{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify({type:e.type||10,text:t})}).then(r=>r.json()).then(r=>r).catch(()=>sendMessage("Сервер не принял письмо!","error"))}function je(e){let o="/api/Email/PostEmailWithAttachement";const t=new FormData;t.append("type",11);let r="";return(e.fio||e.name)&&(r+="Имя: "+(e.fio||e.name)+`
`),e.phone&&(r+="Телефон: "+e.phone+`
`),e.city&&(r+="Город: "+e.city+`
`),e.email&&(r+="Email: "+e.email+`
`),e.aboutYourself&&(r+="О себе: "+e.aboutYourself+`
`),t.append("text",r),t.append("file",e.resume),fetch(ae+o,{method:"POST",body:t}).then(c=>c.json()).then(c=>c).catch(()=>sendMessage("Сервер отказал!","error"))}function Ke(e,o){let t="/api/Auto/GetList?Limit="+e.limit;return e.brandId&&(t+="&brandId="+e.brandId),e.modelId&&(t+="&modelId="+e.modelId),e.offset&&(t+="&offset="+e.offset),e.priceOrder!==null&&e.priceOrder!==void 0&&(t+="&priceOrder="+e.priceOrder),e.city&&e.city!=="Все"&&(t+="&city="+e.city),e.gearboxType&&(t+="&gearboxType="+e.gearboxType),e.engineType&&(t+="&engineType="+e.engineType),e.driveType&&(t+="&driveType="+e.driveType),e.wheelType&&(t+="&wheelType="+e.wheelType),e.bodyType&&(t+="&bodyType="+e.bodyType),e.colorId&&(t+="&colorId="+e.colorId),e.yearReleasedFrom&&(t+="&yearReleasedFrom="+e.yearReleasedFrom),e.yearReleasedTo&&(t+="&yearReleasedTo="+e.yearReleasedTo),e.priceTo&&(t+="&priceTo="+e.priceTo),e.priceFrom&&(t+="&priceFrom="+e.priceFrom),e.milleageFrom&&(t+="&milleageFrom="+e.milleageFrom),e.milleageTo&&(t+="&milleageTo="+e.milleageTo),e.engineCapacity&&(t+="&engineCapacity="+e.engineCapacity),u(t,o,null)}function Ge(e,o){let t="/api/Auto/GetSpecials?city="+e;return u(t,o,60)}function Ve(e,o){let t="/api/Auto/GetFullAutoInfo?guid="+e;return u(t,o,10)}function ze(e){return u("/api/Auto/GetCarCount",e,5)}function Ye(e){return u("/api/auto/getBrandList",e,60)}function Je(e,o){let t="/api/auto/getModelList?brandId="+e;return u(t,o,60)}function Ue(e){return u("/api/Auto/GetCities",e,60)}function We(e){return u("/api/Auto/GetGearboxTypes",e,60)}function Ze(e){return u("/api/Auto/GetEngineTypes",e,60)}function Qe(e){return u("/api/Auto/getDriveTypes",e,60)}function et(e){return u("/api/Auto/getWheelTypes",e,60)}function tt(e){return u("/api/Auto/getBodyTypes",e,60)}function ot(e){return u("/api/Auto/GetYearGap",e,60)}function rt(e){return u("/api/Auto/GetColorList",e,60)}let Ce=document.querySelector(".global-call"),xe=document.querySelector("#right_panel_content");Ce.addEventListener("click",()=>{openRightPanel(),xe.innerHTML=he("globC",["name*","phone*"],"sendBid","Отправить заявку","Заказать звонок"),$()});window.sendBid=function(e){const o=document.querySelector(`.${e} .capctha-div`),t=document.querySelector(`.${e} [name="name"]`),r=document.querySelector(`.${e} [name="phone"]`),c=document.querySelector(`.${e} [name="email"]`),s=document.querySelector(`.${e} [name="city"]`),a=document.querySelector(`.${e} [name="brand"]`),d=document.querySelector(`.${e} [name="model"]`),l=document.querySelector(`.${e} [name="year"]`),f=document.querySelector(`.${e} [type="checkbox"]`),i=document.querySelector(`.${e} button`);if(te([o,t,r,f]))return!1;const b={type:1,name:t.value,phone:r.value,email:c&&c.value,city:s&&s.value,brand:a&&a.value,model:d&&d.value,year:l&&l.value};showPreloader(!0,i),ie(b).then(h=>{h&&(setTimeout(()=>sendMessage("Ваша заявка успешно отправлена"),500),document.querySelector(`.${e} .formBlock`).innerHTML="<br>Спасибо! Ваша заявка успешно отправлена, в ближайшее время мы выйдем с Вами на связь.<br><br><br>"),showPreloader(!1,i)})};$();window.sendBidPromo=function(){const e=document.querySelector(".capctha-div"),o=document.querySelector('[name="name"]'),t=document.querySelector('[name="year"]'),r=document.querySelector('[type="checkbox"]'),c=document.querySelector("button");if(te([e,o,r]))return!1;const s={type:16,name:o.value,year:t.value};showPreloader(!0,c),ie(s).then(a=>{a&&(setTimeout(()=>sendMessage("Ваша заявка успешно отправлена"),500),document.querySelector(".formBlock").innerHTML="<br>Спасибо! Ваша заявка успешно отправлена, в ближайшее время мы выйдем с Вами на связь.<br><br><br>"),showPreloader(!1,c)})};window.addEventListener("DOMContentLoaded",()=>{let e=document.querySelector(".footer-city-button"),o=document.querySelector(".comb__selected"),t=document.querySelector(".main-nav.cities"),r=document.querySelector("#city-contacts"),c=document.querySelector("#addr_foot"),s=document.querySelector(".map-modal"),a=document.querySelector(".map-modal .map"),d=document.querySelector(".photo-modal"),l=document.querySelector(".photo-modal .pic");e.innerHTML=localStorage.getItem("selectedCity")||"Россия",r&&(r.innerHTML=e.innerHTML||"Россия"),f(e.innerHTML);function f(i){let b=be.filter(h=>h.city===i);c.innerHTML="",b&&b.forEach(h=>{c.innerHTML+=`
            <div class="address">
                <a href="javascript:openMap('${h.map}')">
                ${h.address}
                </a>
            </div>`}),window.getVitrina&&getVitrina()}window.setCity=function(i){f(i),localStorage.setItem("selectedCity",i),t.style.transform="translateX(150vw)",o.innerHTML=e.innerHTML=i,r&&(r.innerHTML=i)},s&&(window.openMap=function(i){s.style.display=i?"grid":"none",a.innerHTML=`<iframe src="${i}" width="100%" height="720" frameborder="0"></iframe>`},window.openPhoto=function(i){d&&(d.style.display=i?"grid":"none"),l&&(l.innerHTML=`<img alt="" src ="${i}">`)},document.addEventListener("keydown",i=>{i.key==="Escape"&&s&&(window.openMap(!1),window.openPhoto(!1))}))});window.addCompare=function(e){let o=window.compareCars.find(d=>d.id===e),t=P(),r=o;o.images&&(r.images=o.images[0]);let c=document.querySelector("#compareId_"+e),s=c.classList.contains("chosen"),a=t.find(d=>d.id===e);s?(c.classList.remove("chosen"),t=t.filter(d=>d.id!==r.id)):(c.classList.add("chosen"),a||t.push(r)),localStorage.setItem("ComparedCars",JSON.stringify(t)),M(t)};function P(){let e=localStorage.getItem("ComparedCars");return e?e=JSON.parse(e):e=[],e}function M(e){let o=document.querySelector("#compareCount");o&&e.length?(o.innerHTML='<img src="/icons/car-icon_b.svg">'+e.length,o.style.display="flex"):o&&(o.style.display="none")}window.deleteAllCar=function(){window.deleteCar()};window.deleteCar=function(e){let o=P();if(e?o=o.filter(t=>t.id!==e):o=[],localStorage.setItem("ComparedCars",JSON.stringify(o)),M(o),de(o),!o.length){let t=document.querySelector(".compare-clear");t&&(t.style.display="none")}};function de(e){let o=e||P();if(M(o),o.forEach(t=>{let r=document.querySelector("#compareId_"+t.id);r&&r.classList.add("chosen")}),location.pathname==="/personal/list-compared/"){let t=document.querySelector("#compare-field"),r="",c="",s="",a="",d="",l="",f="",i="",b="",h="",D="",O="",R="",B="",N="",X="";o.forEach(n=>{if(n.photos&&(n.images=n.photos[0]),n.address&&(n.fullAddress=n.address),n.name&&(n.brand=n.name.split(" ")[0],n.model=n.name.split(" ")[1]),n.info){let v=n.info.split(",");console.log(v),n.milleage=parseInt(v[0].replace(/\s/g,"")),n.engineCapacity=v[1],n.bodyType=v[2],n.driveType=v[3],n.engineType=v[4]}r+=`<td><a href="javascript:deleteCar('${n.id}')">Удалить</a></td>`,c+=`<td><a href="/cars/car.html?id=${n.id}"><img src="${n.images}" alt=""></a></td>`,s+=`<td><a href="/cars/car.html?id=${n.id}">"${n.brand} ${n.model}</a></td>`,a+=`<td>${w(n.price)} руб.</td>`,n.milleage&&(d+=`<td>${w(n.milleage)||""} км</td>`),l+=`<td>${n.yearReleased||""}</td>`,f+=`<td>${n.color||""}</td>`,i+=`<td>${n.engineCapacity||""}</td>`,b+=`<td>${n.engineType||""}</td>`,h+=`<td>${n.enginePower||""}</td>`,D+=`<td>${n.gearboxType||""}</td>`,O+=`<td>${n.driveType||""}</td>`,R+=`<td>${n.bodyType||""}</td>`,B+=`<td>${n.fullAddress||""}</td>`,N+=`<td>${n.brand||""}</td>`,X+=`<td>${n.model||""}</td>`}),t.innerHTML=`
              <tr class="DELETE">
                <td style="min-width: 140px"></td>
                ${r}
            </tr>
            <tr class="PREVIEW_PICTURE">
                <td> фото </td>
                ${c}            
            </tr>
            <tr class="NAME">
                <td>Название</td>
                ${s}
            </tr>
            <tr class="PRICE">
                <td>Цена</td>                
               ${a}
            </tr>
            <tr class="PROBEG">
                <td>Пробег</td>
                ${d}
            </tr>
            <tr class="GOD_VYPUSKA">
                <td>Год выпуска</td>
               ${l}
            </tr>
            <tr class="TSVET">
                <td>Цвет</td>
                ${f}
            </tr>
            <tr class="OBEM_DVIGATELYA">
                <td>Объем двигателя</td>
               ${i}
            </tr>
            <tr class="TIP_DVIGATELYA">
                <td>Тип двигателя</td>
                 ${b}
            </tr>
            <tr class="MOSHCHNOST_DVIGATELYA">
                <td>Мощность двигателя</td>
                 ${h}
            </tr>
            <tr class="TIP_KPP">
                <td>Тип КПП</td>
               ${D}
            </tr>
            <tr class="TIP_PRIVODA">
                <td>Тип привода</td>
                ${O}
            </tr>
            <tr class="TIP_KUZOVA">
                <td>Тип кузова</td>
                 ${R}
            </tr>
            <tr class="GOROD">
                <td>Город</td>
                ${B}
            </tr>
            <tr class="MARKA">
                <td>Марка</td>
                ${N}
            </tr>
            <tr class="MODEL">
                <td>Модель</td>
                ${X}
            </tr>`,o.length||(t.innerHTML='<div class="nodata">НЕТ ВЫБРАННЫХ АВТОМОБИЛЕЙ ДЛЯ СРАВНЕНИЯ</div>')}}function le(){let e=!1,o,t=document.querySelector(".bx_compare");t&&(t.addEventListener("mousedown",r=>{e=!0,o=r.clientX,r.preventDefault()}),t.addEventListener("mousemove",r=>{e&&(t.scrollBy(o-r.clientX,0),o=r.clientX)}),t.addEventListener("mouseup",()=>e=!1)),de(),showPreloader(!1)}window.initChosen=le;setTimeout(le);window.dblCompare=function(){location.href="/personal/list-compared/"};window.addFavorite=function(e){let o=window.favorCars&&window.favorCars.find(a=>a.id===e),t=k(),r=document.querySelector("#favoriteId_"+e),c=r.classList.contains("chosen"),s=t.find(a=>a&&a.id===e);c?location.pathname==="/personal/favorite-cars/"?(r.classList.remove("chosen"),t=t.filter(a=>a.id!==e),localStorage.setItem("FavoriteCars",JSON.stringify(t)),window.getVitrina()):location.href="/personal/favorite-cars/":(r.classList.add("chosen"),s||t.push(o)),t&&(t=t.filter(a=>a),localStorage.setItem("FavoriteCars",JSON.stringify(t)),I(t)),ue(t)};document.addEventListener("DOMContentLoaded",()=>{let e=document.querySelector("#noFavotite"),o=document.querySelector("#noFavotiteDelete");if(!e)return!1;k().length?e.style.display="none":(e.style.display="block",o.style.display="none")});function I(e){(e||k()).forEach(t=>{let r=t&&document.querySelector("#favoriteId_"+t.id);r&&r.classList.add("chosen")}),showPreloader(!1)}function k(){let e=localStorage.getItem("FavoriteCars");return e?e=JSON.parse(e):e=[],ue(e),e}window.deleteAllFavoriteCar=function(){localStorage.setItem("FavoriteCars",JSON.stringify([])),window.getVitrina()};function ue(e){let o=document.querySelector("#favoriteCount");o&&e.length?(o.innerHTML='<img src="/icons/penta.svg">'+e.length,o.style.display="flex"):o&&(o.style.display="none")}window.initFavotite=I;setTimeout(I);let S=0,L=[];window.sendMessage=function(e,o){let t="green";o==="warning"&&(t="orangered"),o==="error"&&(t="red");let r=document.createElement("div");r.innerText=e,r.classList.add("message-span"),r.style.backgroundColor=t,r.style.top=10+40*S+"px",r.id=S,document.body.appendChild(r),L.push(r),r.addEventListener("click",()=>{r.classList.remove("show"),ee(r.id)}),r.addEventListener("mouseover",()=>{r.stopped=!0}),setTimeout(()=>r.classList.add("show"),100),S++,setTimeout(()=>{r.stopped||(r.style.opacity="0",r.classList.remove("show"),ee(r.id))},3e3)};function ee(e){L=L.filter(o=>o.id!==e),S--,L.forEach((o,t)=>{o.style.top=10+40*t+"px",o.id=t})}document.addEventListener("DOMContentLoaded",()=>{document.querySelector(".footer__bottom").innerHTML+=`
  <div id="preloader"
           style="position: fixed;
           transform: translateY(-50%);
           left: 50%;
           top: 50px;
           pointer-events: none;
           display: none;
           z-index: 10000">
    <img src="/icons/load.gif" alt="" style="width: 73px">
</div>`});window.showPreloader=function(e,o){let t=document.querySelector("#preloader");if(!t)return!1;t.style.display=e?"block":"none",o&&(o.style.opacity=e?.5:1,o.disabled=e)};export{Re as A,Oe as B,ke as C,Ge as D,pe as E,Fe as F,je as G,oe as H,He as I,De as J,me as K,ot as a,ze as b,he as c,te as d,ie as e,Ve as f,Ie as g,w as h,$ as i,be as j,Be as k,Ye as l,Ue as m,We as n,Ze as o,Me as p,Qe as q,et as r,Xe as s,Ne as t,tt as u,rt as v,$e as w,Pe as x,Je as y,Ke as z};
