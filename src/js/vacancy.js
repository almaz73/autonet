window.addEventListener('load', () => {
    let comb = document.querySelector('comb');

    // нужно все города поучать откуда-то централизованно
    let items ={'Город': ['Все', 'Альметьевск', 'Казань', 'Набережные Челны', 'Нижнекамск', 'Стерлитамак']}

    items['Город'].value = localStorage.getItem('selectedCity')
    selectedCity(items['Город'].value)


    //заполняем исходя из настроек


    let comb_name = comb.dataset.placeholder
    let the_Items = items[comb_name];


    if (the_Items) {
        let items_list = the_Items.map(item => '<div data-parent="' + comb_name + '">' + item + '</div>')
        comb.innerHTML = `<div class='big-combo' tabindex='1'>
        <span class='big-comb__selected'>
          <span class='big-comb__placeholder'>${the_Items.value || comb_name}</span>
          <input class='big-comb__input' type="text">
        </span>
        <img src='/svg/arrow-down.svg' alt='arrow' loading='lazy' width='10' height='18'>            
        <div class='big_comb__items'>
            ${items_list.join('')}
        </div>
    </div>`
    }



    document.querySelector('.big_comb__items').addEventListener('click', function vacancyCitySelected(val){
        let combName = 'Город'
        let value = val.srcElement.innerText
        
        items[combName].value = value
        selectedCity(items[combName].value)

        document.querySelector('.big-comb__placeholder').innerText = value
        document.querySelector('.big-comb__placeholder').classList.add('bold')
        document.querySelector('.big-comb__input').value = value
        document.querySelector('.big-comb__input').blur()

        // высветить нужную вакансию
    })

    function selectedCity(val) {
        console.log('!!!selectedCity val = ',val)
    }


    
})



