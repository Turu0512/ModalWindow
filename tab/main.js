`use strict`;

{
  const menuItem = document.querySelectorAll(`.menu li a`);
  const content = document.querySelectorAll(`.content`);

  menuItem.forEach(clickedItem =>{
    clickedItem.addEventListener(`click`,e=>{
      e.preventDefault();

      menuItem.forEach(item =>{
        item.classList.remove(`active`)
      })
      clickedItem.classList.add(`active`);

      content.forEach(content=>{
        content.classList.remove(`active`)
      });

      document.getElementById(clickedItem.dataset.id).classList.add(`active`);
    })
  })
}