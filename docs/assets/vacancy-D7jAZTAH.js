import"./main-9YYWY_M_.js";window.addEventListener("DOMContentLoaded",()=>{let l=document.querySelector("comb"),c={Город:["Все","Альметьевск","Казань","Набережные Челны","Нижнекамск","Стерлитамак"]};c.Город.value=localStorage.getItem("selectedCity"),a(c.Город.value);let n=l.dataset.placeholder,s=c[n];if(s){let e=s.map(o=>'<div data-parent="'+n+'">'+o+"</div>");l.innerHTML=`<div class='big-combo' tabindex='1'>
        <span class='big-comb__selected'>
          <span class='big-comb__placeholder'>${s.value||n}</span>
          <input class='big-comb__input' type="text">
        </span>
        <img src='/svg/arrow-down.svg' alt='arrow' loading='lazy' width='10' height='18'>            
        <div class='big_comb__items'>
            ${e.join("")}
        </div>
    </div>`}document.querySelector(".big_comb__items").addEventListener("click",function(o){let t="Город",i=o.srcElement.innerText;c[t].value=i,a(c[t].value),document.querySelector(".big-comb__placeholder").innerText=i,document.querySelector(".big-comb__placeholder").classList.add("bold"),document.querySelector(".big-comb__input").value=i,document.querySelector(".big-comb__input").blur()});function a(e){console.log("!!!selectedCity val = ",e)}document.querySelectorAll(".vacancy_item").forEach(e=>{const o=e.querySelector(".fst_desc"),t=e.querySelector(".content"),i=e.querySelector(".detail"),r=o.offsetHeight,u=t?t.offsetHeight:0;console.log("detailHeight = ",u),e.style.maxHeight=r+"px",e.addEventListener("click",function(){d();const m=document.querySelector(".request_vac");document.body.offsetWidth>992?i.before(m):i.after(m);const g=t?t.offsetHeight:0;console.log("document.body.offsetWidth = ",document.body.offsetWidth),this.classList.toggle("expanded"),this.style.maxHeight=r+g+"px"})});function d(){document.querySelectorAll(".vacancy_item").forEach(e=>{e.classList.remove("expanded");const t=e.querySelector(".fst_desc").offsetHeight;e.style.maxHeight=t+"px"})}window.addEventListener("resize",d)});
