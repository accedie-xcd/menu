const menu = [
  {
    id : 1,
    title: "Soba Basic",
    category: "soba",
    price: 6,
    img: "images/soba1.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, iusto. Provident reiciendis pariatur unde quos.",
  },
  {
    id : 2,
    title: "Soba 2",
    category: "soba",
    price: 7,
    img: "images/soba2.jpg",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae praesentium exercitationem cupiditate temporibus, provident officiis.",
  },
  {
    id : 3,
    title: "sashimi 1",
    category: "sashimi",
    price: 15,
    img: "images/sashimi1.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla dolor magni porro dignissimos animi earum!",
  },
  {
    id : 4,
    title: "Sashimi 2",
    category: "sashimi",
    price: 18,
    img: "images/sashimi2.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus omnis minus ipsam quaerat placeat expedita!",
  },
  {
    id : 5,
    title: "hot drink",
    category: "beverages",
    price: 2,
    img: "images/drink1.jpg",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus cum nam aut non et tempora.",
  },
  {
    id : 6,
    title: "cold drink",
    category: "beverages",
    price: 2,
    img: "images/drink2.jpg",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur officia eaque harum laborum sed labore!",
  },
]

const menuItemList = document.querySelector('.menu-items-list');
const filterButtons = document.querySelectorAll('.filters button');

addEventListener("DOMContentLoaded", () => {
  displayMenuItem(menu);
  
})

filterButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    const targetCategory = e.currentTarget.dataset.id;
    console.log("id = " + targetCategory);
    const menuCategory = menu.filter((menuItem) => {
      
      if (menuItem.category === targetCategory){
        return menuItem;
      }
    })
    if (targetCategory === "all"){
      displayMenuItem(menu);
    } else{
      displayMenuItem(menuCategory);
    }
  })
})


function displayMenuItem(menuItems) {
  let displayMenu = menuItems.map( (item) => {
    return `<article class="menu-item w-9/12 mx-auto p-4 m-4 bg-slate-300 border border-red-400 ">
    <img class="w-full aspect-square object-contain " src=${item.img} alt=${item.title}>
    <header class="flex justify-between border-b-2 border-yellow-900">
      <h4 class=" font-bold text-lg text-center">${item.title}</h4>
      <p class="price text-orange-600 font-bold text-lg">$${item.price}</p>
    </header>
    <p class="item-text">${item.desc}
    </p>
  </article>`
  })
  displayMenu = displayMenu.join("");
  menuItemList.innerHTML = displayMenu;
} 