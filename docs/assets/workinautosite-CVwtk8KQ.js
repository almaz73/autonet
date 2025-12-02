import"./main-C8m2QQPS.js";window.addEventListener("DOMContentLoaded",()=>{let n=document.querySelector("comb"),l={Город:["Все","Альметьевск","Казань","Набережные Челны","Нижнекамск","Стерлитамак"]};l.Город.value=localStorage.getItem("selectedCity"),a(l.Город.value);let o=n.dataset.placeholder,s=l[o];if(s){let e=s.map(t=>'<div data-parent="'+o+'">'+t+"</div>");n.innerHTML=`<div class='big-combo' tabindex='1'>
        <span class='big-comb__selected'>
          <span class='big-comb__placeholder'>${s.value||o}</span>
          <input class='big-comb__input' type="text">
        </span>
        <img src='/svg/arrow-down.svg' alt='arrow' loading='lazy' width='10' height='18'>            
        <div class='big_comb__items'>
            ${e.join("")}
        </div>
    </div>`}document.querySelector(".big_comb__items").addEventListener("click",function(t){let i="Город",c=t.srcElement.innerText;l[i].value=c,a(l[i].value),document.querySelector(".big-comb__placeholder").innerText=c,document.querySelector(".big-comb__placeholder").classList.add("bold"),document.querySelector(".big-comb__input").value=c,document.querySelector(".big-comb__input").blur()});function a(e){console.log("!!!selectedCity val = ",e)}document.querySelectorAll(".vacancy_item").forEach(e=>{const t=e.querySelector(".fst_desc"),i=e.querySelector(".detail"),c=t.offsetHeight,r=i.offsetHeight;e.style.maxHeight=c+"px",e.addEventListener("click",function(){d(),this.classList.toggle("expanded"),this.style.maxHeight=c+r+"px"})});function d(){document.querySelectorAll(".vacancy_item").forEach(e=>{e.classList.remove("expanded");const i=e.querySelector(".fst_desc").offsetHeight;e.style.maxHeight=i+"px"})}});
