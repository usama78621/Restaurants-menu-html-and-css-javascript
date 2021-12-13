const menu = [
    {
        id: 1,
        title: "Hamburger with cheese",
        category: "Lunch",
        Prices: 15.9,
        img: "images/item1.jpg",
        desc: `If you want to know how to stack a burger, then read on! We've got some hot tips for you,from selecting the perfect bun to what order to stack your ingredients in!`,

    },
    {
        id: 2,
        title: "Sample Sandwich",
        category: "Breakfast",
        Prices: 14.9,
        img: "images/item4.jpg",
        desc: `If you want to know how to stack a burger, then read on! We've got some hot tips for you,from selecting the perfect bun to what order to stack your ingredients in!`,

    },
    {
        id: 3,
        title: "Large Pizza",
        category: "Lunch",
        Prices: 15.9,
        img: "images/item3.jpg",
        desc: `Simple hot sandwiches consist of hot fillings, usually meats but sometimes fish, grilled vegetables, or other hot items, between two slices of bread. They may also contain items that are not hot, such as a slice of tomato or raw onion on a hamburger.!`,

    },
    {
        id: 4,
        title: "Hamburger Large",
        category: "Breakfast",
        Prices: 10.9,
        img: "images/item2.jpg",
        desc: `A dish made typically of flattened bread dough spread with a savory mixture usually including tomatoes and cheese and often other toppings and baked. —called also pizza pie!`,

    },
    {
        id: 5,
        title: "Chiken",
        category: "Breakfast",
        Prices: 10.9,
        img: "images/item5.png",
        desc: `If you want to know how to stack a burger,then read on! We've got some hot tips for you, 
    from selecting the perfect bun to what order to stack your ingredients in!`,

    },
    {
        id: 6,
        title: "Roll spiling",
        category: "for dinar",
        Prices: 10.9,
        img: "images/item6.png",
        desc: `If you want to know how to stack a burger,then read on! We've got some hot tips for you, 
from selecting the perfect bun to what order to stack your ingredients in!`,

    },

];
const menuCenter = document.querySelector(".menu-center");


const filterBtns = document.querySelectorAll(".filter-btn");

window.addEventListener("DOMContentLoaded", function () {
    displayMenuItems(menu)
});
filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        const category = e.currentTarget.dataset.id;
        const menuCategory = menu.filter(function (menuItem) {
            if (menuItem.category === category) {
                return menuItem;
            }
        });
        if (category === "All") {
            displayMenuItems(menu);
        } else {
            displayMenuItems(menuCategory);

        }

        // console.log(menuCategory);
    });
});
function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function (item) {
        return `<div class="info-items">
         <img src=${item.img} class="photo"alt=${item.title}>
             <header>
                 <span class="Name-item">${item.title}</span>
                 <span class="Prices">$${item.Prices}</span>
                 <p>${item.desc}</p>
                     <button class="btn">Order Now</button>
                 </header>
                 </div>`;
    });
    displayMenu = displayMenu.join("");
    menuCenter.innerHTML = displayMenu
    //  console.log(displayMenu);

};
