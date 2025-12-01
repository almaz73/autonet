import"./main-BIViGdYq.js";window.addEventListener("load",()=>{let a=document.querySelector("comb"),e={Город:["Все","Альметьевск","Казань","Набережные Челны","Нижнекамск","Стерлитамак"]};e.Город.value=localStorage.getItem("selectedCity"),n(e.Город.value);let l=a.dataset.placeholder,c=e[l];if(c){let t=c.map(i=>'<div data-parent="'+l+'">'+i+"</div>");a.innerHTML=`<div class='big-combo' tabindex='1'>
        <span class='big-comb__selected'>
          <span class='big-comb__placeholder'>${c.value||l}</span>
          <input class='big-comb__input' type="text">
        </span>
        <img src='/svg/arrow-down.svg' alt='arrow' loading='lazy' width='10' height='18'>            
        <div class='big_comb__items'>
            ${t.join("")}
        </div>
    </div>`}document.querySelector(".big_comb__items").addEventListener("click",function(i){let d="Город",o=i.srcElement.innerText;e[d].value=o,n(e[d].value),document.querySelector(".big-comb__placeholder").innerText=o,document.querySelector(".big-comb__placeholder").classList.add("bold"),document.querySelector(".big-comb__input").value=o,document.querySelector(".big-comb__input").blur()});function n(t){console.log("!!!selectedCity val = ",t)}});
