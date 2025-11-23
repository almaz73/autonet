/* Код для отображения и скрытия панели 'Где смотреть параметры' для фильотра шин*/

let filter__controlsInfoButton = document.querySelector('.filter__controls-info-button')

let tires_sizes = document.querySelector('.tires_sizes')
let tires_x = document.querySelector('.tires_sizes .x')
let tires_dark_fon = document.querySelector('.tires_sizes .dark-fon')

if(filter__controlsInfoButton) {
  filter__controlsInfoButton.addEventListener('click', () => {
    tires_sizes.classList.add('watch')
  })

  tires_dark_fon.addEventListener('click', () => {
    tires_sizes.classList.remove('watch')
  })
  tires_x.addEventListener('click', () => {
    tires_sizes.classList.remove('watch')
  })

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') tires_sizes.classList.remove('watch')
  });
}
