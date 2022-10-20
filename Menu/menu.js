// menu
const menu = [
    {
        id:1,
        title:"Egg Bacon",
        category: "breakfast",
        price: "$9.99",
        img:"./images/b1.jpg",
        desc:  `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
        id:2,
        title:"Morning Roaster",
        category: "breakfast",
        price: "$12.50",
        img:"./images/b2.jpeg",
        desc:  `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
        id:3,
        title:"Basted ChessBurger",
        category: "lunch",
        price: "$16.50",
        img:"./images/b5.jpg",
        desc:  `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
        id:4,
        title:"Mango Lassi",
        category: "drinks",
        price: "$7.50",
        img:"./images/mangolassi.jpg",
        desc:  `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
        id:5,
        title:"Pancakes",
        category: "breakfast",
        price: "$8.99",
        img:"./images/b4.jpg",
        desc:  `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral. `,
    },
    {
        id:6,
        title:"Keema Noddles",
        category: "lunch",
        price: "$14",
        img:"./images/k.jpg",
        desc:  `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
        id:7,
        title:"Lemonade",
        category: "drinks",
        price: "$6.44",
        img:"./images/lemonade.jpg",
        desc:  `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut`,
    },
    {
        id:8,
        title:"Milkshake",
        category: "drinks",
        price: "$10.1",
        img:"./images/milkshake.jpg",
        desc:  `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
        id:9,
        title:"Newari Khaja Set",
        category: "dinner",
        price: "$30.4",
        img:"./images/newari.jpg",
        desc:  `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
        id:10,
        title:"Diet Mantainer",
        category: "breakfast",
        img:"./images/p.jpg",
        price: "$8.00",
        desc:  `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
        id:11,
        title:"Pizza",
        category: "lunch",
        price: "$12.33",
        img:"./images/pizza.jpg",
        desc:  `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
        id:12,
        title:"Chicken Biryani",
        category: "dinner",
        price:"$15",
        img:"./images/biriyani.jpg",
        desc:  `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
        id:13,
        title:"Burrito",
        category: "lunch",
        price: "$10.2",
        img:"./images/burrito.jpg",
        desc:  `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut`,
    },
    {
        id:14,
        title:"Dal Bhat",
        category: "dinner",
        price: "$22",
        img:"./images/dalbhat.jpg",
        desc:  `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
        id:15,
        title:"High Protein Dish",
        category: "dinner",
        price: "$16.5",
        img:"./images/highprotein.jpg",
        desc:  `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
        id:16,
        title:"Choclate Biscuits",
        category: "breakfast",
        price: "$4.99",
        img:"./images/b3.jpg",
        desc:  `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
];

const sectionCenter = document.querySelector('.section-center');

const filterBtns = document.querySelectorAll(".filter-btn");

//load items
window.addEventListener("DOMContentLoaded", function(){
 displayMenuItems(menu); // function call garera bhayeni hunxa natra direct menu.map garne
//  displayMenuButtons();

});

  //filter items
  filterBtns.forEach(function(btn) {
    btn.addEventListener("click", function(e){
    //dataset returns unique id for each button clicked and is initialized using data-
    // console.log(e.currentTarget.dataset); 
    const category = e.currentTarget.dataset.id;

    const menuCategory = menu.filter(function(menuItem){
        // console.log(menuItem.category);

        if(menuItem.category === category){
            return menuItem;
        }
        
    });
    // console.log(menuCategory);
    if(category === 'all') {
        displayMenuItems(menu);
    }
    else {
        displayMenuItems(menuCategory);
    }
    
});
    
});



function displayMenuItems(menuItems){
      // console.log("Shake And Bake");
    
      let displayMenu = menuItems.map(function (item) {
        // console.log(item);
        // return item;

        // `<h1>Hello World</h1>` This is template and we can write html code in templates.
        // return `<h1>${item.title}</h1>`; //return the title of the item object

        return ` <article class="menu-items">
        <img src=${item.img} class="photo" alt=${item.title}/>

        <div class="item-info">
            <header>
            <h4>${item.title}</h4>
            <h4 class="price">${item.price}</h4>
            </header>

            <p class="item-text">
                ${item.desc}
            </p>
        </div>
    </article>`;
    });
    displayMenu = displayMenu.join(""); // join all the items 
    // console.log(displayMenu);
    sectionCenter.innerHTML = displayMenu;
}

// function displayMenuButtons() {
//     const categories = menu.reduce(
//       function (values, item) {
//         if (!values.includes(item.category)) {
//           values.push(item.category);
//         }
//         return values;
//       },
//       ["all"]
//     );
//     const categoryBtns = categories
//       .map(function (category) {
//         return `<button type="button" class="filter-btn" data-id=${category}>
//             ${category}
//           </button>`;
//       })
//       .join("");
  
//     btnContainer.innerHTML = categoryBtns;
//     const filterBtns = btnContainer.querySelectorAll(".filter-btn");
//     console.log(filterBtns);
  
//     filterBtns.forEach(function (btn) {
//       btn.addEventListener("click", function (e) {
//         // console.log(e.currentTarget.dataset);
//         const category = e.currentTarget.dataset.id;
//         const menuCategory = menu.filter(function (menuItem) {
//           // console.log(menuItem.category);
//           if (menuItem.category === category) {
//             return menuItem;
//           }
//         });
//         if (category === "all") {
//           diplayMenuItems(menu);
//         } else {
//           diplayMenuItems(menuCategory);
//         }
//       });
//     });
//   }
  
