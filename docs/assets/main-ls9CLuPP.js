(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))o(c);new MutationObserver(c=>{for(const a of c)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function t(c){const a={};return c.integrity&&(a.integrity=c.integrity),c.referrerPolicy&&(a.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?a.credentials="include":c.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(c){if(c.ep)return;c.ep=!0;const a=t(c);fetch(c.href,a)}})();let T=0,S=[];function g(e,r){let t="green";r==="warning"&&(t="orangered"),r==="error"&&(t="red");let o=document.createElement("div");o.innerText=e,o.classList.add("message-span"),o.style.backgroundColor=t,o.style.top=10+40*T+"px",o.id=T,document.body.appendChild(o),S.push(o),o.addEventListener("click",()=>{o.classList.remove("show"),F(o.id)}),o.addEventListener("mouseover",()=>{o.stopped=!0}),setTimeout(()=>o.classList.add("show"),100),T++,setTimeout(()=>{o.stopped||(o.style.opacity="0",o.classList.remove("show"),F(o.id))},3e3)}function F(e){S=S.filter(r=>r.id!==e),T--,S.forEach((r,t)=>{r.style.top=10+40*t+"px",r.id=t})}const xe={events:{},on(e,r){this.events[e]||(this.events[e]=[]),this.events[e].push(r)},emit(e,r){this.events[e]&&this.events[e].forEach(t=>t(r))},off(e,r){this.events[e]&&(this.events[e]=this.events[e].filter(t=>t!==r))}};let Pe={brandsIds:[],modelsIds:[],gearboxTypes:[],engineTypes:[],driveTypes:[],wheelTypes:[],bodyTypes:[],bodyColors:[]};function _(e){return parseInt(e).toLocaleString("ru-RU")}function $e(e){let r=[];return e&&e.forEach(t=>{let o=_(t.milleage)+" км, ";t.engineCapacity&&(o+=t.engineCapacity),t.gearboxType&&(o+=" "+t.gearboxType),t.enginePower&&(o+=" ("+t.enginePower+"&nbsp;л.с)"),t.bodyType&&(o+=", "+t.bodyType),o+=", "+t.driveType,t.engineType&&(o+=", "+t.engineType);let c=_(parseInt(parseInt(t.price.replace(/ /g,""))/90.12));r.push({address:t.fullAddress,id:t.id,name:t.brand+" "+t.model,href:"/cars/car.html?id="+t.id,price:_(t.price),fromPerMonth:c,info:o,photos:t.images,yearReleased:t.yearReleased})}),r}function de(e,r){const t=[2,0,1,1,1,2];return r[e%100>4&&e%100<20?2:t[e%10<5?e%10:5]]}function Ie(e){return new URLSearchParams(window.location.search).get(e)}function Me(e){let r=document.querySelector(".coin");e===!1&&(r.querySelector("span").title="По возрастанию",r.querySelector("img").style.transform="rotate(180deg)"),e===null&&(r.querySelector("span").title="Не упорядоченно",r.querySelector("img").style.transform="rotate(270deg)"),e===!0&&(r.querySelector("span").title="По убыванию",r.querySelector("img").style.transform="rotate(0deg)")}const le=function(e){let r=e.value;if(!r)return"";let t=r.replace(/\D/g,""),o="";if(r.length<2)return t;["7","8","9"].indexOf(t[0])>-1?(t[0]==="9"&&(t="7"+t),o=(t[0]==="8"?"8":"+7")+" ",t.length>1&&(o+="("+t.substring(1,4)),t.length>=5&&(o+=") "+t.substring(4,7)),t.length>=8&&(o+="-"+t.substring(7,9)),t.length>=10&&(o+="-"+t.substring(9,11))):o=t.substring(0,11),e.value=o};window.formattingPhone=le;const ue=function(e){return e?(e.slice(0,2)==="+7"&&(e=e.replaceAll("+7","8")),e.replaceAll(" ","").replaceAll("+","").replaceAll("(","").replaceAll(")","").replaceAll("-","")):""},pe=function(e){if(!/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu.test(e)&&e)return g("Ошибочный Email ","error")};function re(e){let r=!1,t=!1;return e.forEach(o=>{if(o&&o.required){let c=function(){o.style.background="",o.removeEventListener("change",c)};o.style.background=o.value?"":"pink",o.value||(r=!0),o.addEventListener("change",c)}if(o&&o.classList.contains("capctha-div")&&!o.classList.contains("checked")&&(o.style.border="1px solid red",r=!0),o&&o.type==="checkbox"){let c=o.checked;o.parentNode.style.border=c?"":"1px solid red",c||(r=!0),t=r}if(o&&o.classList.contains("attent")&&(o.style.display=t?"block":"none"),o&&o.name==="email"&&o.value)return pe(o.value);o&&o.name==="phone"&&o.value&&ue(o.value).length!==11&&g("Телефон не содержит 11 цифр","warning")}),r&&g("Есть незаполненные поля","warning"),r}function ke(){document.querySelectorAll(".with_sub_field").forEach(r=>{let t=r.querySelector(".with_sub_field .select");t.querySelectorAll(".field").forEach(c=>{c.addEventListener("click",a=>o(a.target.innerHTML))});function o(c){t.querySelectorAll(".field").forEach(a=>{a&&a.classList.contains("active")&&a.classList.remove("active")}),t.querySelectorAll(".field").forEach(a=>{a&&a.innerHTML===c&&a.classList.add("active")}),r.querySelector("input").value=c}r.addEventListener("click",()=>{let c=t.style.display!=="block";t.style.display=c?"block":"none"})})}function fe(e,r,t,o,c){o=o||"Отправить заявку",c=c||"_ _ _ _ _ _ ";let a=parseInt(Math.random()*1e3),s=`<div class="wrap ${e}"><h3>${c}</h3><div><div class="formBlock">`,d={name:"Имя","name*":"Ваше имя *",year:"Год выпуска","year*":"Год выпуска *",city:"Город","city*":"Город *",price:"Цена",brand:"Марка","brand*":"Марка *",model:"Модель","model*":"Модель *",phone:"Телефон","phone*":"Ваш телефон *",message:"Сообщение","message*":"Сообщение *",email:"E-mail","email*":"E-mail *",osago:"ОСАГО",select:"Выберите услугу"};return r.forEach(p=>{let y=p.includes("*"),n=y?p.slice(0,-1):p;p==="osago"?s+=`<div class="form__modal--group" style="position: relative">
                            <div class="form__group with_sub_field">
                                <input name="osago"  value="ОСАГО">
                                <div class="select">
                                    <div class="field">КАСКО</div>
                                    <div class="field active">ОСАГО</div>
                                </div>
                            </div>
                        </div>`:p==="select"?s+=`<div class="form__modal--group">                
                <div class="form__group with_sub_field">
                    <input name="select"  placeholder="Выберите услугу">
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
            </div>`:s+=`<div class="form__modal--group">
                <div class="form__group">
                  <input name="${n}" ${y?"required":""} autocomplete="off" placeholder="${d[p]}" 
${n==="phone"?'oninput="formattingPhone(this)"':""}>
                </div>
            </div>`}),s+=`
<div class="form__modal--group">
              <div class="capctha-div"></div>
            </div>
            <button class="page__btn page__btn--current" onclick="${t}('${e}')">
                <span> ${o} </span>
            </button>
            <div class="modal__personal">
                <input type="checkbox" id="dd${a}">
                <label for="dd${a}" style="cursor: pointer">
                    Нажав кнопку «Отправить заявку» я даю согласие
                    на обработку
                    персональных <a href="/privacy-policy/" target="_blank">данных</a>
                </label>
            </div></div></div></div>`,s}function De(e,r){if(!e)return!1;e.style.opacity=r?.5:1,e.disabled=r}function Oe(e){let r=document.querySelector("#set_filter span.number");r&&(r.innerHTML=e+" "+de(e,["предложение","предложения","предложений"]))}const me=[{city:"Альметьевски",url:"/photo/contacts/chelna_myra.webp",coords:"54.912580,52.320238",address:"ул. Герцена, 1б",tel:"8–800–500–11–56",days:"ПН-ВС с 9:00 до 21:00",map:"https://yandex.ru/map-widget/v1/?um=constructor%3Aef6e8fca746164e348adf860145722f5a890983a47408dc685ab04b8076a0f7b&amp;source=constructor"},{city:"Альметьевски",url:"/photo/contacts/chelna_myra.webp",coords:"54.912580,52.320238",address:"ул. Советская, 182/1",tel:"8–800–500–11–56",days:"ПН-ВС с 9:00 до 21:00",map:"https://yandex.ru/map-widget/v1/?um=constructor%3Aa48691a6bc05dd67e7bcfb1ad8e429acaff3cf13a292a8f4a69e512dbacb7fda&amp;source=constructor"},{city:"Астрахань",url:"/photo/contacts/chelna_myra.webp",coords:"46.288304, 47.971339",address:"ул. Адмирала Нахимова, 76",tel:"8–800–500–11–56",days:"ПН-ВС с 9:00 до 21:00",map:"https://yandex.ru/map-widget/v1/?um=constructor%3A4e8033de51901c5bd7b5a457e33850072459acff83441bcc859c3b297b337a01&amp;source=constructor"},{city:"Буинск",url:"/photo/contacts/chelna_myra.webp",coords:"54.952455, 48.286585",address:"ул. Ефремова, 2а",tel:"8–800–500–11–56",days:"ПН-ВС с 9:00 до 21:00",map:"https://yandex.ru/map-widget/v1/?um=constructor%3Ac38e150dd8e42257ca0c6d684e1265b29fe99ae6c77dc11c29773e5e85c015d4&amp;source=constructor"},{city:"Екатеринбург",url:"/photo/contacts/chelna_myra.webp",coords:"56.789579, 60.607625",address:"ул. 8 марта, 205А",tel:"8–800–500–11–56",days:"ПН-ВС с 9:00 до 21:00",map:"https://yandex.ru/map-widget/v1/?um=constructor%3A7d97dc8bafe4d372c2b3d4cf1cb634f3835520141a7310296d2f363580c2075f&amp;source=constructor"},{city:"Казань",url:"/photo/contacts/chelna_myra.webp",coords:"55.823581, 49.159553",address:"пр. Ямашева, 115а",tel:"8–800–500–11–56",days:"ПН-ВС с 9:00 до 21:00",map:"https://yandex.ru/map-widget/v1/?um=constructor%3A0740fee9f6396ff8f4aa3048c10c417b7f2be4ce61e41f46d69a4627f97951c7&amp;source=constructor"},{city:"Казань",url:"/photo/contacts/chelna_myra.webp",coords:"55.826655, 49.022026",address:"Горьковское шоссе, 55",tel:"8–800–500–11–56",days:"ПН-ВС с 9:00 до 21:00",map:"https://yandex.ru/map-widget/v1/?um=constructor%3Af4c7baecf06e4154b6bbd13632c95edc600e2482b332190b262776928450e25f&amp;source=constructor"},{city:"Казань",url:"/photo/contacts/chelna_myra.webp",coords:"55.803967, 49.208709",address:"пр. Победы, 212к2",tel:"8–800–500–11–56",days:"ПН-ВС с 9:00 до 21:00",map:"https://yandex.ru/map-widget/v1/?um=constructor%3A169e10ae037f14065a213eecd07e24f9a9d53659f4170e2d3c90d579d7b544bd&amp;source=constructor"},{city:"Магнитогорск",url:"/photo/contacts/chelna_myra.webp",coords:"53.367384, 59.063538",address:"Шоссе Космонавтов 59А",tel:"8–800–500–11–56",days:"ПН-ВС с 9:00 до 21:00",map:"https://yandex.ru/map-widget/v1/?um=constructor%3A5034cda35a547f1137730dd647fb151bce1c2d0ab1202a8241bcf7eebda0ceda&amp;source=constructor"},{city:"Набережные Челны",url:"/photo/contacts/chelna_myra.webp",coords:"55.734962, 52.421602",address:"пр. Хасана Туфана, 3",tel:"8–800–500–11–56",days:"ПН-ВС с 9:00 до 21:00",map:"https://yandex.ru/map-widget/v1/?um=constructor%3Af388f618621b0c96a1f876db4250b86a7d605a4dd2620aa26e0c9e68a27cc8fa&amp;source=constructor"},{city:"Набережные Челны",url:"/photo/contacts/chelna_myra.webp",coords:"55.674714, 52.281223",address:"пр. Мусы Джалиля, 15",tel:"8–800–500–11–56",days:"ПН-ВС с 9:00 до 21:00",map:"https://yandex.ru/map-widget/v1/?um=constructor%3A1f2ed0dd2ffe0c767cc59e635f514c05fb40bf75730bef48fd3c5ca1bedc9ff5&amp;source=constructor"},{city:"Нижнекамск",url:"/photo/contacts/chelna_myra.webp",coords:"55.613672, 51.779136",address:"ул. Южная, 5г",tel:"8–800–500–11–56",days:"ПН-ВС с 9:00 до 21:00",map:"https://yandex.ru/map-widget/v1/?um=constructor%3A07be9d83adb6c7f5a6f64ec6589361c02dffcaf76a77c2d1f3bc90495bdad97c&amp;source=constructor"},{city:"Нижнекамск",url:"/photo/contacts/chelna_myra.webp",coords:"55.614353, 51.969439",address:"ул. Промзона,10/22",tel:"8–800–500–11–56",days:"ПН-ВС с 9:00 до 21:00",map:"https://yandex.ru/map-widget/v1/?um=constructor%3A35da28743b493552af8ed2fb472dcfc555d07bff1d302851e5caf07330deab72&amp;source=constructor"},{city:"Нижнекамск",url:"/photo/contacts/chelna_myra.webp",coords:"55.631989,51.828178",address:"ул. Спортивная, 4а",tel:"8–800–500–11–56",days:"ПН-ВС с 9:00 до 21:00",map:"https://yandex.ru/map-widget/v1/?um=constructor%3A5ca83ddacf20c9ebed72ec201052cfb4ed286b32f8c00f7d7c4da38b89af08dd&amp;source=constructor"},{city:"Нижний Тагил",url:"/photo/contacts/chelna_myra.webp",coords:"57.946923, 59.916489",address:"ул. Краснознаменная, 134",tel:"8–800–500–11–56",days:"ПН-ВС с 9:00 до 21:00",map:"https://yandex.ru/map-widget/v1/?um=constructor%3A6f60d8f689946cf10bc949fb4319b3edb1ee1218a7ec8c9f3d3b00d0c7dcafb7&amp;source=constructor"},{city:"Нижний Тагил",url:"/photo/contacts/chelna_myra.webp",coords:"57.879827, 59.932685",address:"Черноисточинское ш, 68с2",tel:"8–800–500–11–56",days:"ПН-ВС с 9:00 до 21:00",map:"https://yandex.ru/map-widget/v1/?um=constructor%3Abfdeb70911627e4f5364dc9f99d07b51c2126f962b56eccbc5f36dc0dfdef20a&amp;source=constructor"},{city:"Самара",url:"/photo/contacts/chelna_myra.webp",coords:"53.141011, 50.181024",address:"Южное шоссе, 10а",tel:"8–800–500–11–56",days:"ПН-ВС с 9:00 до 21:00",map:"https://yandex.ru/map-widget/v1/?um=constructor%3Ac49f6a300c736bd719acb3376728ee628dc7d9d371781ac444e51fb63a37fa82&amp;source=constructor"},{city:"Серов",url:"/photo/contacts/chelna_myra.webp",coords:"59.586669, 60.570884",address:"ул. Каквинская, 29",tel:"8–800–500–11–56",days:"ПН-ВС с 9:00 до 21:00",map:"https://yandex.ru/map-widget/v1/?um=constructor%3A9a5736f0d49c86e9d3d38d16cd609e413a2b2838b483e64f9d9d336f044c89c8&amp;source=constructor"},{city:"Стерлитамак",url:"/photo/contacts/chelna_myra.webp",coords:"53.639303,55.911492",address:"ул. Шаймуратова, 12",tel:"8–800–500–11–56",days:"ПН-ВС с 9:00 до 21:00",map:"https://yandex.ru/map-widget/v1/?um=constructor%3A6d26f637308738722b92d9f7211e78b4410c02bcb4ed096449da348add2097b4&amp;source=constructor"},{city:"Тверь",url:"/photo/contacts/chelna_myra.webp",coords:"56.823085, 35.874940",address:"ул. Оснабрюксая, 39,<br> пом. 111Б",tel:"8–800–500–11–56",days:"ПН-ВС с 9:00 до 21:00",map:"https://yandex.ru/map-widget/v1/?um=constructor%3A2d25b65df6c8d0b7cf749b5e83c7168ee79f3f3ff2a62d7defed0609f1b4aee0&amp;source=constructor"},{city:"Тольятти",url:"/photo/contacts/chelna_myra.webp",coords:"53.570484, 49.469034",address:"Обводное ш., 71",tel:"8–800–500–11–56",days:"ПН-ВС с 9:00 до 21:00",map:"https://yandex.ru/map-widget/v1/?um=constructor%3A5ab93efaa670c0a4ecc603f0a719e58bd389221aa688a384893cba9d5657b4f4&amp;source=constructor"},{city:"Уфа",url:"/photo/contacts/chelna_myra.webp",coords:"54.741061, 55.987866",address:"пр. Октября, 4/1, ТЦ Мир, <br> 3 уровень",tel:"8–800–500–11–56",days:"ПН-ВС с 9:00 до 21:00",map:"https://yandex.ru/map-widget/v1/?um=constructor%3Ae6fc36ea5faa5164e18586cc2c35b1d09f1401830b27c11438377d20143a9303&amp;source=constructor"},{city:"Уфа",url:"/photo/contacts/chelna_myra.webp",coords:"54.773538, 56.065914",address:"ул. Маршала Жукова, 16",tel:"8–800–500–11–56",days:"ПН-ВС с 9:00 до 21:00",map:"https://yandex.ru/map-widget/v1/?um=constructor%3Ae77ab1daaa8f743e51e23372676cf7785ea83ffeaf29df86d7cec91039b41deb&amp;source=constructor"}],Re=[{city:"Ижевск",url:"/photo/contacts/chelna_myra.webp",coords:"56.886263, 53.309622",address:"ул. Автозаводская, 5а/3<br> (Рулевой)",tel:"8–800–500–11–56",days:"ПН-ВС с 9:00 до 21:00",map:"https://yandex.ru/map-widget/v1/?um=constructor%3A7a0aa8d3c0916b54b822ec3ef1b00b9a27b44491cd4c8d77c59098b1bcffa211&amp;source=constructor"},{city:"Йошкар-Ола",url:"/photo/contacts/chelna_myra.webp",coords:"56.643243, 47.927752",address:'Сернурский тракт, 23<br> (здание "Гарант Авто")',tel:"8–800–500–11–56",days:"ПН-ВС с 9:00 до 21:00",map:"https://yandex.ru/map-widget/v1/?um=constructor%3A53fc65c2944e3744e91206e42120ad5319866b9bffb8f276fda6762447aab99c&amp;source=constructor"},{city:"Киров",url:"/photo/contacts/chelna_myra.webp",coords:"58.61728733640516, 49.629800881945016",address:"ул. Лепсе, 25/4",tel:"8–800–500–11–56",days:"ПН-ВС с 9:00 до 21:00",map:"https://yandex.ru/map-widget/v1/?um=constructor%3A7889c8a92ec01c9122a48ddcaec1a8ac753bd68146338a1c4deed34d90f9aeab&amp;source=constructor"},{city:"Магнитогорск",url:"/photo/contacts/chelna_myra.webp",coords:"53.430389, 58.973231",address:"ул. Герцена 6, <br>БЦ АльфаЦентр , офис 103",tel:"8–800–500–11–56",days:"ПН-ВС с 9:00 до 21:00",map:"https://yandex.ru/map-widget/v1/?um=constructor%3A5a56a953780b0e40fbf31ddf65b7633b6e20bbdb0bed23e6fb4c1f3993229fdf&amp;source=constructor"},{city:"Нижний Новгород",url:"/photo/contacts/chelna_myra.webp",coords:"56.311626, 44.070441",address:'ул.Родионова, 167 <br>("Тайм Сервис")',tel:"8–800–500–11–56",days:"ПН-ВС с 9:00 до 21:00",map:"https://yandex.ru/map-widget/v1/?um=constructor%3A4ce9ad24bc1a339b419f7b5069aeb4503efc432c074ce7a41b2683995b08826d&amp;source=constructor"},{city:"Пенза",url:"/photo/contacts/chelna_myra.webp",coords:"53.18924053714283, 45.0405558150391",address:"ул. Измайлова, 26",tel:"8–800–500–11–56",days:"ПН-ВС с 9:00 до 21:00",map:"https://yandex.ru/map-widget/v1/?um=constructor%3A32cbf070a2316cbc09c1d3d0d8399b6f3e035b51070bad0e7c3041e6d8845213&amp;source=constructor"},{city:"Пермь",url:"/photo/contacts/chelna_myra.webp",coords:"57.989155, 56.207758",address:"ул.Стахановская, 54а",tel:"8–800–500–11–56",days:"ПН-ВС с 9:00 до 21:00",map:"https://yandex.ru/map-widget/v1/?um=constructor%3A8267dbdd95bb5fc764758e7ff0b66cf403880143d4dade949af88e5bcc1fa334&amp;source=constructor"},{city:"Самара",url:"/photo/contacts/chelna_myra.webp",coords:"53.21473485688437, 50.18689756337296",address:"ул. Авроры, 156в",tel:"8–800–500–11–56",days:"ПН-ВС с 9:00 до 21:00",map:"https://yandex.ru/map-widget/v1/?um=constructor%3A8c201bb0fff1372a85f28f25de2c77cc80ea1d7272516bce6abd368c91324f6e&amp;source=constructor"},{city:"Чебоксары",url:"/photo/contacts/chelna_myra.webp",coords:"56.115825, 47.270554",address:"пр. Мира, 54б (Автомания)",tel:"8–800–500–11–56",days:"ПН-ВС с 9:00 до 21:00",map:"https://yandex.ru/map-widget/v1/?um=constructor%3A68e72e069da58fd0337460e493c87575afafd93789bd40d35e1b5a606e335d3b&amp;source=constructor"},{city:"Челябинск",url:"/photo/contacts/chelna_myra.webp",coords:"55.154239, 61.303793",address:"БЦ Спиридонов, <br>ул. Ленина 21в , офис 1052",tel:"8–800–500–11–56",days:"ПН-ВС с 9:00 до 21:00",map:"https://yandex.ru/map-widget/v1/?um=constructor%3A711b921703be62b7b6bb60f4a3a08775c26e9862880855f1d0f16835be8a4003&amp;source=constructor"}],Xe=[{city:"Казань",url:"/photo/contacts/chelna_myra.webp",coords:"55.823581, 49.159553",address:"пр. Ямашева, 115а",tel:"8–800–500–11–56",days:"ПН-ВС с 9:00 до 21:00",map:"https://yandex.ru/map-widget/v1/?um=constructor%3A6986b3ac4ba556c34180924eebb64192ba4696b58dab9b1e9fd7f5e34560aaa5&amp;source=constructor"},{city:"Казань",url:"/photo/contacts/chelna_myra.webp",coords:"55.803967, 49.208709",address:"пр. Победы, 212к2",tel:"8–800–500–11–56",days:"ПН-ВС с 9:00 до 21:00",map:"https://yandex.ru/map-widget/v1/?um=constructor%3Abcb084f68946abe81affde230c329b47e53ab28d9d6c28a5ff039f8454f9d8b8&amp;source=constructor"}],Be=[{city:"Альметьевск",url:"/photo/contacts/chelna_myra.webp",coords:"54.903324, 52.324269",address:"ул. Герцена, 1б",tel:"8–800–500–11–56",days:"ПН-ВС с 9:00 до 21:00",map:"https://yandex.ru/map-widget/v1/?um=constructor%3Ad3a953bdeec5c742d7c5ad9a6e976789cccf67c719c5fb7841e40199048de33a&amp;source=constructor"},{city:"Казань",url:"/photo/contacts/chelna_myra.webp",coords:"54.903324, 52.324269",address:"пр. Победы, 212к2",tel:"8–800–500–11–56",days:"ПН-ВС с 9:00 до 21:00",map:"https://yandex.ru/map-widget/v1/?um=constructor%3Ac830f4cc623c4400e1c1b19b83f5edb3e4fa15d40a10d6885a4eb121c287eaa6&amp;source=constructor"},{city:"Набережные Челны",url:"/photo/contacts/chelna_myra.webp",coords:"55.734962, 52.421602",address:"пр. Хасана Туфана, 3",tel:"8–800–500–11–56",days:"ПН-ВС с 9:00 до 21:00",map:"https://yandex.ru/map-widget/v1/?um=constructor%3Ab30605670e79544549f3861c9d7fde3f5f302058711dd433dcdbc73d83863a48&amp;source=constructor"},{city:"Набережные Челны",url:"/photo/contacts/chelna_myra.webp",coords:"55.674714, 52.281223",address:"пр. Мусы Джалиля, 15",tel:"8–800–500–11–56",days:"ПН-ВС с 9:00 до 21:00",map:"https://yandex.ru/map-widget/v1/?um=constructor%3A459a0443c44b3d9771b776391ae96d4b6aa8c35aad7db04db13030bd2f4537e0&amp;source=constructor"},{city:"Нижнекамск",url:"/photo/contacts/chelna_myra.webp",coords:"55.614353, 51.969439",address:"ул. Промзона,10/22",tel:"8–800–500–11–56",days:"ПН-ВС с 9:00 до 21:00",map:"https://yandex.ru/map-widget/v1/?um=constructor%3Af7472f97221ff01d1cf41cc2c93557af5d73b5297d3b7a9fd50e40d50cf3f857&amp;source=constructor"},{city:"Нижнекамск",url:"/photo/contacts/chelna_myra.webp",coords:"55.631989,51.828178",address:"ул. Спортивная, 4а",tel:"8–800–500–11–56",days:"ПН-ВС с 9:00 до 21:00",map:"https://yandex.ru/map-widget/v1/?um=constructor%3A9778e202e4bfa133570d5b0a62f34e827e97f7e934cee1738b3ca0326469efb8&amp;source=constructor"},{city:"Нижнекамск",url:"/photo/contacts/chelna_myra.webp",coords:"55.613672, 51.779136",address:"ул. Южная, 5г",tel:"8–800–500–11–56",days:"ПН-ВС с 9:00 до 21:00",map:"https://yandex.ru/map-widget/v1/?um=constructor%3A8e2039178922dc29b2ef2a87fa30d1e15d2a8ef5c67388cb3741dc608c9e3e4d&amp;source=constructor"},{city:"Уфа",url:"/photo/contacts/chelna_myra.webp",coords:"54.773538, 56.065914",address:"ул. Маршала Жукова, 16",tel:"8–800–500–11–56",days:"ПН-ВС с 9:00 до 21:00",map:"https://yandex.ru/map-widget/v1/?um=constructor%3A7281c97a9571a78d8adcf25c3ec6bab5c14cfcd042ccab43cc1078dd2cf40504&amp;source=constructor"}],oe=["Альметьевск","Астрахань","Бугульма","Буинск","Екатеринбург","Казань","Магнитогорск","Набережные Челны","Нижнекамск","Нижний Тагил","Оренбург","Самара","Саранск","Стерлитамак","Тольятти","Тула","Ульяновск","Уфа"],He=[{vacancyName:"Кредитный специалист",id:1,salary:"70000",city:"Казань",content:` <strong>Обязанности:</strong>
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
             `}];let v=document.querySelector(".comb__items"),z=document.querySelector(".comb_field"),ce=document.querySelector(".comb__selected"),ye=document.querySelector(".footer-city-button"),N=document.querySelector("#city-contacts"),V=document.querySelector(".comb_field img"),j=document.querySelector(".mySwiper"),he=localStorage.getItem("selectedCity");v.innerHTML="";oe.forEach(e=>v.innerHTML+=`<div class="comb__item">${e}</div>`);z&&(ce.innerHTML=he||"Россия",document.addEventListener("click",()=>ae(!1)),z.addEventListener("click",e=>ge(e)),v.addEventListener("click",e=>be(e)));function be(e){let r=e.target.innerText;if(r.length>30)return!1;ce.innerHTML=ye.innerHTML=r,N&&(N.innerHTML=r),localStorage.setItem("selectedCity",r),window.setCity&&window.setCity(r)}function ge(e){ae(v.style.display!=="block"),e.stopPropagation()}function ae(e){v&&(v.style.display=e?"block":"none"),V&&(V.style.rotate=e?"180deg":"0deg"),j&&(j.style.zIndex=e?-1:0)}let ve=document.querySelector("#innerCity"),x=document.querySelector(".form__modal-place--group input"),we=["А","Б","Е","К","М","Н","О","С","Т","У"];function se(e){let r="";we.forEach(t=>{let o=oe.filter(a=>a.slice(0,1)===t),c="";o.forEach(a=>{let s=e&&a.toUpperCase().includes(e)?" class='yel'":"";c+=`<li><a href="javascript:void(0)" onclick="setCity('${a}')"><span ${s}>${a}</span></a></li>`}),r+=`<div class="modal-place__box">
<div><div class="letter">${t}</div><ul>${c}</ul></div></div>`}),ve.innerHTML=r}x&&x.addEventListener("input",e=>{se(x.value.toUpperCase())});let Y=document.querySelector(".button__burger"),L=document.querySelector(".main-nav.menu"),A=document.querySelector(".button__burger"),b=document.querySelector(".main-nav.cities"),U=document.querySelector(".footer-city-button"),K=document.querySelector("#city-contacts"),J=document.querySelector(".modal-place__close"),W=document.querySelector(".mySwiper"),m,E=document.querySelector(".main-nav.rightpanel"),Z=document.querySelector("#closer-fon"),Q=document.querySelector(".modal-closer.form");W&&(W.style.zIndex=0);Y&&Y.addEventListener("click",()=>{if(m)return m=!1,b.style.transform="translateX(150vw)",!1;m=L.style.transform!=="none",L.style.transform=m?"none":"translateX(150vw)",m?(A.classList.add("close"),m=!1):A.classList.remove("close")});U&&U.addEventListener("click",()=>ne());K&&K.addEventListener("click",()=>ne());function ne(){m=b.style.transform!=="none",m&&(b.style.transform="none",b.style.backgroundColor="white"),se()}J&&J.addEventListener("click",()=>{b.style.transform="translateX(150vw)"});let ee=document.querySelector("#cookie-accept"),P=document.querySelector("#cookie-banner"),_e=localStorage.getItem("isCoockieBannerShow");!_e&&P&&P.classList.add("show");ee&&ee.addEventListener("click",()=>{localStorage.setItem("isCoockieBannerShow",new Date().toISOString()),P.classList.remove("show")});function q(e){E&&(E.style.transform="translateX(150vw)"),b&&(b.style.transform="translateX(150vw)"),L&&(L.style.transform="translateX(150vw)"),A&&A.classList.remove("close"),closeChat()}window.close_all=q;document.addEventListener("keydown",e=>e.key==="Escape"&&q());window.openRightPanel=function(){m=E.style.transform!=="none",m&&(E.style.transform="none")};Z&&Z.addEventListener("click",()=>q());Q&&Q.addEventListener("click",()=>q());const f=document.getElementById("mainPhoto");f&&f.addEventListener("click",function(){if(window.innerWidth<900)return!1;f.requestFullscreen?f.requestFullscreen():f.mozRequestFullScreen?f.mozRequestFullScreen():f.webkitRequestFullscreen?f.webkitRequestFullscreen():f.msRequestFullscreen&&f.msRequestFullscreen()});document.addEventListener("DOMContentLoaded",()=>{window.reloadAbdul()});window.reloadAbdul=function(){let e=document.querySelector("abdul");e&&(e.innerHTML=Te)};const Te=`
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
`;document.addEventListener("DOMContentLoaded",()=>{$()});function $(){document.querySelectorAll(".capctha-div").forEach((r,t)=>{let o="_"+t,c=r;c&&(c.innerHTML=`<p class="instructions ${o}">
          Подтвердите, что вы не робот<br>
          Сдвиньте квадрат в белую область</p>
        <p class="result">✅<span>Спасибо !</span></p>
        <div class="target-area ${o}"></div>
        <div class="puzzle-piece ${o}">⇦ ⇨</div>`,new Se(o,c))})}class Se{constructor(r,t){this.parent=t,this.puzzlePiece=document.querySelector(`.puzzle-piece.${r}`),this.targetArea=document.querySelector(`.target-area.${r}`),this.instructions=document.querySelector(`.instructions.${r}`),this.isDragging=!1,this.initialX=0,this.currentX=0,this.offsetX=0,this.targetX=parseInt(Math.random()*73)+5,this.parent&&this.init()}init(){this.setupEventListeners(),this.updatePosition()}setupEventListeners(){this.puzzlePiece.addEventListener("mousedown",this.startDragging.bind(this)),document.addEventListener("mousemove",this.drag.bind(this)),document.addEventListener("mouseup",this.stopDragging.bind(this)),this.puzzlePiece.addEventListener("touchstart",this.startDraggingTouch.bind(this)),document.addEventListener("touchmove",this.dragTouch.bind(this)),document.addEventListener("touchend",this.stopDragging.bind(this))}startDragging(r){this.instructions.style.left="-10000px",this.targetArea.style.left=this.targetX+"%",this.isDragging=!0,this.initialX=r.clientX-this.offsetX,this.puzzlePiece.style.cursor="grabbing",r.preventDefault()}startDraggingTouch(r){this.instructions.style.left="-10000px",this.targetArea.style.left=this.targetX+"%",this.isDragging=!0;const t=r.touches[0];this.initialX=t.clientX-this.offsetX,r.preventDefault()}drag(r){this.isDragging&&(r.preventDefault(),this.currentX=r.clientX-this.initialX,this.currentX<0&&(this.currentX=0),this.currentX<0&&(this.currentX=0),this.updatePosition())}dragTouch(r){if(!this.isDragging)return;const t=r.touches[0];this.currentX=t.clientX-this.initialX,this.currentX<0&&(this.currentX=0),this.updatePosition()}stopDragging(){this.isDragging=!1,this.puzzlePiece.style.cursor="move",this.verify()}updatePosition(){this.puzzlePiece.style.transform=`translateX(${this.currentX}px)`,this.offsetX=this.currentX}verify(){const r=this.parent.getBoundingClientRect(),o=(this.puzzlePiece.getBoundingClientRect().left-r.left)/r.width*100;Math.abs(this.targetX-o)<1&&(this.parent.style.border="",this.parent.classList.add("checked"))}}const Le="https://ext.cartat.ru/exchange",te=localStorage.getItem("CACHE_SERV");let l=te?JSON.parse(te):{};l instanceof Array&&(l={});Object.keys(l).map(e=>{l[e].hour&&l[e].hour<Date.now()&&delete l[e]});function u(e,r,t){if(l[e]){if(t&&l[e].hour>Date.now())return r(l[e].data);r(l[e].data)}return fetch(Le+e).then(o=>{if(!o.ok)throw new Error(`HTTP error! status: ${o.status}`);let c=document.querySelector("#preload_getList");return c&&(c.style.display="none"),o.json()}).then(o=>(l[e]={data:o},t&&(l[e].hour=Date.now()+t*60*1e3),o&&Object.keys(o).length&&localStorage.setItem("CACHE_SERV",JSON.stringify(l)),r(l[e].data))).catch(o=>console.error("Произошла ошибка:",o))}const C="https://ext.cartat.ru/exchange";function Ge(e){if(e.type==="grade"){let r={fullName:e.name,phone:e.phone,city:e.city,brand:e.brand,model:e.model,yearReleased:e.year};I(r)}if(e.type==="podbor"){let r={fullName:e.name,phone:e.phone,email:e.email};Ae(r)}if(e.type==="franshiza"||e.type==="boss"){let r={fullName:e.name,phone:e.phone,city:e.city};Ee(r)}}function I(e){return fetch(C+"/api/Feedback/PostCallToSell",{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify({body:e})}).then(t=>t.json()).then(t=>t).catch(t=>g("Сервер отказал!","error"))}function Ae(e){return fetch(C+"/api/Email/PostCallToBuy",{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify({body:e})}).then(t=>t.json()).then(t=>t).catch(t=>g("Сервер отказал!","error"))}function Ee(e){return fetch(C+"/api/Email/PostCallToFranchise",{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify({body:e})}).then(t=>t.json()).then(t=>t).catch(t=>g("Сервер отказал!","error"))}function Fe(e){let r="/api/Email/PostCallToWork";const t=new FormData;return t.append("resume",e.resume),t.append("fullName",e.fullName),t.append("phone",e.phone),t.append("city",e.city),t.append("email",e.email),t.append("aboutYourself",e.aboutYourself),fetch(C+r,{method:"POST",body:t}).then(o=>o.json()).then(o=>o).catch(o=>g("Сервер отказал!","error"))}function ze(e,r){let t="/api/Auto/GetList?Limit="+e.limit;return e.brandId&&(t+="&brandId="+e.brandId),e.modelId&&(t+="&modelId="+e.modelId),e.offset&&(t+="&offset="+e.offset),e.priceOrder!==null&&e.priceOrder!==void 0&&(t+="&priceOrder="+e.priceOrder),e.city&&(t+="&city="+e.city),e.gearboxType&&(t+="&gearboxType="+e.gearboxType),e.engineType&&(t+="&engineType="+e.engineType),e.driveType&&(t+="&driveType="+e.driveType),e.wheelType&&(t+="&wheelType="+e.wheelType),e.bodyType&&(t+="&bodyType="+e.bodyType),e.colorId&&(t+="&colorId="+e.colorId),e.yearReleasedFrom&&(t+="&yearReleasedFrom="+e.yearReleasedFrom),e.yearReleasedTo&&(t+="&yearReleasedTo="+e.yearReleasedTo),e.priceTo&&(t+="&priceTo="+e.priceTo),e.milleageFrom&&(t+="&milleageFrom="+e.milleageFrom),e.milleageTo&&(t+="&milleageTo="+e.milleageTo),e.engineCapacity&&(t+="&engineCapacity="+e.engineCapacity),u(t,r,null)}function Ne(e,r){let t="/api/Auto/GetFullAutoInfo?guid="+e;return u(t,r,10)}function Ve(e){return u("/api/Auto/GetCarCount",e,5)}function je(e){return u("/api/auto/getBrandList",e,60)}function Ye(e,r){let t="/api/auto/getModelList?brandId="+e;return u(t,r,60)}function Ue(e){return u("/api/Auto/GetCities",e,60)}function Ke(e){return u("/api/Auto/GetGearboxTypes",e,60)}function Je(e){return u("/api/Auto/GetEngineTypes",e,60)}function We(e){return u("/api/Auto/getDriveTypes",e,60)}function Ze(e){return u("/api/Auto/getWheelTypes",e,60)}function Qe(e){return u("/api/Auto/getBodyTypes",e,60)}function et(e){return u("/api/Auto/GetYearGap",e,60)}function tt(e){return u("/api/Auto/GetColorList",e,60)}let qe=document.querySelector(".global-call"),Ce=document.querySelector("#right_panel_content");qe.addEventListener("click",()=>{openRightPanel(),Ce.innerHTML=fe("globC",["name*","phone*"],"sendBid","Отправить заявку","Заказать звонок"),$()});window.sendBid=function(e){let r=document.querySelector(`.${e} .capctha-div`),t=document.querySelector(`.${e} [name="name"]`),o=document.querySelector(`.${e} [name="phone"]`),c=document.querySelector(`.${e} [name="email"]`),a=document.querySelector(`.${e} [type="checkbox" ]`);if(re([r,t,o,a]))return!1;let s={name:t.value,phone:o.value};c&&c.value&&(s.email=c.value),console.log("params",s),I(s).then(d=>{d&&d.ok?sendMessage("Заявка оптарвлена"):sendMessage("Сервер не принял","error")})};$();window.sendBidPromo=function(){let e=document.querySelector(".capctha-div"),r=document.querySelector('[name="name"]'),t=document.querySelector('[name="year"]'),o=document.querySelector('[type="checkbox" ]');if(re([e,r,o]))return!1;let c={name:r.value,yearReleased:t.value};I(c).then(a=>{a&&a.ok?sendMessage("Заявка оптарвлена"):sendMessage("Сервер не принял","error")})};window.addEventListener("DOMContentLoaded",()=>{let e=document.querySelector(".footer-city-button"),r=document.querySelector(".comb__selected"),t=document.querySelector(".main-nav.cities"),o=document.querySelector("#city-contacts"),c=document.querySelector("#addr_foot"),a=document.querySelector(".map-modal"),s=document.querySelector(".map-modal .map"),d=document.querySelector(".photo-modal"),p=document.querySelector(".photo-modal .pic");e.innerHTML=localStorage.getItem("selectedCity")||"Россия",o&&(o.innerHTML=e.innerHTML||"Россия"),y(e.innerHTML);function y(n){let w=me.filter(h=>h.city===n);c.innerHTML="",w&&w.forEach(h=>{c.innerHTML+=`
            <div class="address">
                <a href="javascript:openMap('${h.map}')">
                ${h.address}
                </a>
            </div>`})}window.setCity=function(n){y(n),localStorage.setItem("selectedCity",n),t.style.transform="translateX(150vw)",r.innerHTML=e.innerHTML=n,o&&(o.innerHTML=n)},a&&(window.openMap=function(n){a.style.display=n?"grid":"none",s.innerHTML=`<iframe src="${n}" width="100%" height="720" frameborder="0"></iframe>`},window.openPhoto=function(n){d&&(d.style.display=n?"grid":"none"),p&&(p.innerHTML=`<img src ="${n}">`)},document.addEventListener("keydown",n=>{n.key==="Escape"&&a&&(window.openMap(!1),window.openPhoto(!1))}))});window.addCompare=function(e){let r=window.compareCars.find(d=>d.id===e),t=M(),o=r;r.images&&(o.images=r.images[0]);let c=document.querySelector("#compareId_"+e),a=c.classList.contains("chosen"),s=t.find(d=>d.id===e);a?(c.classList.remove("chosen"),t=t.filter(d=>d.id!==o.id)):(c.classList.add("chosen"),s||t.push(o)),localStorage.setItem("ComparedCars",JSON.stringify(t)),k(t)};function M(){let e=localStorage.getItem("ComparedCars");return e?e=JSON.parse(e):e=[],e}function k(e){let r=document.querySelector("#compareCount");r&&e.length?(r.innerHTML='<img src="/icons/car-icon_b.svg">'+e.length,r.style.display="flex"):r&&(r.style.display="none")}window.deleteAllCar=function(){window.deleteCar()};window.deleteCar=function(e){let r=M();if(e?r=r.filter(t=>t.id!==e):r=[],localStorage.setItem("ComparedCars",JSON.stringify(r)),k(r),ie(r),!r.length){let t=document.querySelector(".compare-clear");t&&(t.style.display="none")}};function ie(e){let r=e||M();if(k(r),r.forEach(t=>{let o=document.querySelector("#compareId_"+t.id);o&&o.classList.add("chosen")}),location.pathname==="/personal/list-compared/"){let t=document.querySelector("#compare-field"),o="",c="",a="",s="",d="",p="",y="",n="",w="",h="",O="",R="",X="",B="",H="",G="";r.forEach(i=>{o+=`<td><a href="javascript:deleteCar('${i.id}')">Удалить</a></td>`,c+=`<td><a href="/cars/car.html?id=${i.id}"><img src="${i.images}" alt=""></a></td>`,a+=`<td><a href="/cars/car.html?id=${i.id}">"${i.brand} ${i.model}</a></td>`,s+=`<td>${_(i.price)} руб.</td>`,i.milleage&&(d+=`<td>${_(i.milleage)||""} км</td>`),p+=`<td>${i.yearReleased||""}</td>`,y+=`<td>${i.color||""}</td>`,n+=`<td>${i.engineCapacity||""}</td>`,w+=`<td>${i.engineType||""}</td>`,h+=`<td>${i.enginePower||""}</td>`,O+=`<td>${i.gearboxType||""}</td>`,R+=`<td>${i.driveType||""}</td>`,X+=`<td>${i.bodyType||""}</td>`,B+=`<td>${i.fullAddress||""}</td>`,H+=`<td>${i.brand||""}</td>`,G+=`<td>${i.model||""}</td>`}),t.innerHTML=`
              <tr class="DELETE">
                <td style="min-width: 140px"></td>
                ${o}
            </tr>
            <tr class="PREVIEW_PICTURE">
                <td>Картинка для анонса</td>
                ${c}            
            </tr>
            <tr class="NAME">
                <td>Название</td>
                ${a}
            </tr>
            <tr class="PRICE">
                <td>Цена</td>                
               ${s}
            </tr>
            <tr class="PROBEG">
                <td>Пробег</td>
                ${d}
            </tr>
            <tr class="GOD_VYPUSKA">
                <td>Год выпуска</td>
               ${p}
            </tr>
            <tr class="TSVET">
                <td>Цвет</td>
                ${y}
            </tr>
            <tr class="OBEM_DVIGATELYA">
                <td>Объем двигателя</td>
               ${n}
            </tr>
            <tr class="TIP_DVIGATELYA">
                <td>Тип двигателя</td>
                 ${w}
            </tr>
            <tr class="MOSHCHNOST_DVIGATELYA">
                <td>Мощность двигателя</td>
                 ${h}
            </tr>
            <tr class="TIP_KPP">
                <td>Тип КПП</td>
               ${O}
            </tr>
            <tr class="TIP_PRIVODA">
                <td>Тип привода</td>
                ${R}
            </tr>
            <tr class="TIP_KUZOVA">
                <td>Тип кузова</td>
                 ${X}
            </tr>
            <tr class="GOROD">
                <td>Город</td>
                ${B}
            </tr>
            <tr class="MARKA">
                <td>Марка</td>
                ${H}
            </tr>
            <tr class="MODEL">
                <td>Модель</td>
                ${G}
            </tr>`,r.length||(t.innerHTML='<div class="nodata">НЕТ ВЫБРАННЫХ АВТОМОБИЛЕЙ ДЛЯ СРАВНЕНИЯ</div>')}}function D(){let e=!1,r,t=document.querySelector(".bx_compare");t&&(t.addEventListener("mousedown",c=>{e=!0,r=c.clientX,c.preventDefault()}),t.addEventListener("mousemove",c=>{e&&(t.scrollBy(r-c.clientX,0),r=c.clientX)}),t.addEventListener("mouseup",()=>e=!1)),ie();let o=document.querySelector("#preload_getList");o&&(o.style.display="none")}window.initChosen=D;setTimeout(D);window.dblCompare=function(){location.href="/personal/list-compared/"};location.href.includes("list-compared")&&D();export{ze as A,Oe as B,Me as C,de as D,I as E,g as F,Fe as G,oe as H,He as I,ke as J,pe as K,ue as L,et as a,Ve as b,fe as c,re as d,Ge as e,Ne as f,Ie as g,_ as h,$ as i,me as j,Re as k,je as l,Ue as m,Ke as n,Je as o,$e as p,We as q,Ze as r,Be as s,Xe as t,Qe as u,tt as v,xe as w,Pe as x,Ye as y,De as z};
