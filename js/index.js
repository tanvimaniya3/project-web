let ui = [
    {
        image: 'img/p-1.jpg',
        name : "Chair",
        distri : "wooden chair",
        price : "$30.00",
        cart  : "ADD TO CART"
    },
    {
        image: 'img/p-2.jpg',
        name : "ficus",
        distri : "Seed Plant",
        price : "$15.00",
        cart  : "ADD TO CART"
    },
    {
        image: 'img/p-3.jpg',
        name : "WALL ART",
        distri : "Art - style",
        price : "$46.00",
        cart  : "ADD TO CART"
    },
    {
        image: 'img/p-4.jpg',
        name : "TEA KETTLE",
        distri : "Home",
        price : "$26.00",
        cart  : "ADD TO CART"
    },
    {
        image: 'img/p-5.jpg',
        name : "ARMCHAIR",
        distri : "Handmade",
        price : "$40.00",
        cart  : "ADD TO CART"
    },
    {
        image: 'img/p-6.jpg',
        name : "BASKET",
        distri : " Home",
        price : "$25.00",
        cart  : "ADD TO CART"
    },
    
]

ui.map((ele)=>{
    let div1 = document.createElement("div");
    div1.setAttribute("class", "productmainbox , col-xl-4 , col-lg-4 , col-sm-6");
   
    let div2 = document.createElement("div");
    let imagebox = document.createElement("div");
    imagebox.setAttribute("class", "productimagebox");
    div2.setAttribute("class", "productdetails");
    let flexmain = document.createElement("div");
    flexmain.setAttribute("class", "flexmain");
    let image =document.createElement("img");
    image.src = ele.image ;
    let flexbox1 =document.createElement("div");
    flexbox1.setAttribute("class", "flexbox1");
    let flexbox2 =document.createElement("div");
    flexbox2.setAttribute("class", "flexbox2");
    let name = document.createElement("h4");
    name.innerHTML = ele.name;
    let distri = document.createElement("h5");
    distri.innerHTML = ele.distri;
    let price = document.createElement("h5");
    price.innerHTML = ele.price;
    let cart = document.createElement("a");
    cart.innerHTML = ele.cart;
    imagebox.append(image);
    flexbox2.append(price , cart);
    flexbox1.append(name ,distri);
    flexmain.append(flexbox1 , flexbox2);
    div2.append(flexmain)
    div1.append(imagebox , div2);   
    document.getElementById("product1").append(div1); 
})

// ui.map((ele)=>{
//     let div1 = document.createElement("div");
//     div1.setAttribute("class", "productmainbox , col-xl-3 , col-lg-4 , col-sm-6");
   
//     let div2 = document.createElement("div");
//     let imagebox = document.createElement("div");
//     imagebox.setAttribute("class", "productimagebox");
//     div2.setAttribute("class", "productdetails");
//     let flexmain = document.createElement("div");
//     flexmain.setAttribute("class", "flexmain");
//     let image =document.createElement("img");
//     image.src = ele.image ;
//     let flexbox1 =document.createElement("div");
//     flexbox1.setAttribute("class", "flexbox1");
//     let flexbox2 =document.createElement("div");
//     flexbox2.setAttribute("class", "flexbox2");
//     let name = document.createElement("h4");
//     name.innerHTML = ele.name;
//     let distri = document.createElement("h5");
//     distri.innerHTML = ele.distri;
//     let price = document.createElement("h5");
//     price.innerHTML = ele.price;
//     let cart = document.createElement("a");
//     cart.innerHTML = ele.cart;
//     imagebox.append(image);
//     flexbox2.append(price , cart);
//     flexbox1.append(name ,distri);
//     flexmain.append(flexbox1 , flexbox2);
//     div2.append(flexmain)
//     div1.append(imagebox , div2);   
//     document.getElementById("product2").append(div1); 
// })