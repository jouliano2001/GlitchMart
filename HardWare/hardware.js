// By Hussien Mohamed
const navScroll = document.querySelector('.navbar');
window.addEventListener('scroll',() => {
    if (window.scrollY >= 56){
        navScroll.classList.add('navBarScroll')
    }else if (window.scrollY <= 56){
        navScroll.classList.remove('navBarScroll')
    }
})
let progress = document.getElementById('progressBar')
let totalHeight = document.body.scrollHeight - window.innerHeight
window.onscroll = function (){
    let progressHeight = (window.scrollY/totalHeight) * 100;
    progress.style.height = progressHeight + "%";
}

let hardWareData= [
    {
      "id": 1,
      "name": "Gaming Laptop",
      "price": 1500.99,
      "category": "Laptops",
      "image": "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6"
    },
    {
      "id": 2,
      "name": "Wireless Mouse",
      "price": 49.99,
      "category": "Accessories",
      "image": "https://m.media-amazon.com/images/I/61Mk3YqYHpL.__AC_SX300_SY300_QL70_ML2_.jpg"
    },
    {
      "id": 3,
      "name": "Mechanical Keyboard",
      "price": 120.50,
      "category": "Accessories",
      "image": "https://m.media-amazon.com/images/I/71LBvbVa95L._AC_SX679_.jpg"
    },
    {
      "id": 4,
      "name": "4K Monitor",
      "price": 450.00,
      "category": "Monitors",
      "image": "https://m.media-amazon.com/images/I/A1Iqr2v1SIL._AC_SL1500_.jpg"
    },
    {
      "id": 5,
      "name": "Gaming GPU",
      "price": 799.99,
      "category": "Graphics Cards",
      "image": "https://images.unsplash.com/photo-1626218174358-7769486c4b79"
    },
    {
      "id": 6,
      "name": "External SSD",
      "price": 199.99,
      "category": "Storage",
      "image": " https://i5.walmartimages.com/asr/333bdee8-7a5e-488f-8502-0e0b345e48af.51aa324aa07dcff2a872648f5fcf13f7.jpeg"
    },
    {
      "id": 7,
      "name": "Smartwatch",
      "price": 249.99,
      "category": "Wearables",
      "image": "https://images.unsplash.com/photo-1558126319-c9feecbf57ee"
    },
    {
        "id": 8,
        "name": "Noise-Cancelling Headphones",
      "price": 299.99,
      "category": "Audio",
      "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
    },
    {
      "id": 9,
      "name": "Wireless Router",
      "price": 129.99,
      "category": "Networking",
      "image": "https://images-cdn.ubuy.co.in/633a9d9e80cb794e1d178cdb-tp-link-ac1750-smart-wifi-router-archer.jpg"
    },
    {
      "id": 10,
      "name": "3D Printer",
      "price": 499.99,
      "category": "Printers",
      "image": "https://m.media-amazon.com/images/I/61AYFIRSF5L._SL1000_.jpg"
    },
    {
      "id": 11,
      "name": "Smart Home Hub",
      "price": 99.99,
      "category": "Smart Home",
      "image": "https://blog.athom.com/wp-content/uploads/2023/08/Homey-Pro-Early-2023-%E2%80%94-Interior-5-edited-1-2000x1125.jpg"
    },
    {
        "id": 12,
        "name": "Fitness Tracker",
        "price": 79.99,
        "category": "Wearables",
        "image": "https://images.unsplash.com/photo-1546435770-a3e426bf472b"
    },
    {
      "id": 13,
      "name": "VR Headset",
      "price": 399.99,
      "category": "Virtual Reality",
      "image": "https://images.unsplash.com/photo-1593118247619-e2d6f056869e"
    },
    {
        "id": 14,
      "name": "Gaming Chair",
      "price": 299.99,
      "category": "Accessories",
      "image": "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91"
    },
    {
        "id": 15,
        "name": "External Hard Drive",
      "price": 89.99,
      "category": "Storage",
      "image": "https://images.unsplash.com/photo-1558126319-c9feecbf57ee"
    },
    {
      "id": 16,
      "name": "Bluetooth Speaker",
      "price": 59.99,
      "category": "Audio",
      "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
    },
    {
      "id": 17,
      "name": "USB-C Hub",
      "price": 39.99,
      "category": "Accessories",
      "image": "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6"
    },
    {
      "id": 18,
      "name": "Gaming Monitor",
      "price": 599.99,
      "category": "Monitors",
      "image": "https://images.unsplash.com/photo-1587814213271-7a6625b76c33"
    },
    {
        "id": 19,
      "name": "Laptop Stand",
      "price": 29.99,
      "category": "Accessories",
      "image": "https://images.unsplash.com/photo-1587151711091-1cf1e126d9a3"
    },
    {
        "id": 20,
      "name": "Webcam",
      "price": 69.99,
      "category": "Accessories",
      "image": "https://images.unsplash.com/photo-1546435770-a3e426bf472b"
    },
    {
      "id": 21,
      "name": "NAS Storage Device",
      "price": 299.99,
      "category": "Storage",
      "image": "https://images.unsplash.com/photo-1622295027654-a6b0e5e2e1c0"
    },
    {
        "id": 22,
        "name": "Gaming Console",
      "price": 499.99,
      "category": "Gaming",
      "image": "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3"
    },
    {
      "id": 23,
      "name": "Smart Thermostat",
      "price": 199.99,
      "category": "Smart Home",
      "image": "https://images.unsplash.com/photo-1558126319-c9feecbf57ee"
    },
    {
      "id": 24,
      "name": "Drone",
      "price": 599.99,
      "category": "Accessories",
      "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
    },
    {
        "id": 25,
        "name": "E-Reader",
      "price": 129.99,
      "category": "Accessories",
      "image": "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6"
    },
    {
      "id": 26,
      "name": "Graphics Tablet",
      "price": 199.99,
      "category": "Accessories",
      "image": "https://images.unsplash.com/photo-1593118247619-e2d6f056869e"
    },
    {
      "id": 27,
      "name": "Smart Light Bulbs",
      "price": 49.99,
      "category": "Smart Home",
      "image": "https://images.unsplash.com/photo-1587151711091-1cf1e126d9a3"
    },
    {
        "id": 28,
      "name": "Portable Projector",
      "price": 299.99,
      "category": "Accessories",
      "image": "https://images.unsplash.com/photo-1546435770-a3e426bf472b"
    },
    {
      "id": 29,
      "name": "Gaming Headset",
      "price": 149.99,
      "category": "Audio",
      "image": "https://images.unsplash.com/photo-1622295027654-a6b0e5e2e1c0"
    },
    {
        "id": 30,
      "name": "Smart Doorbell",
      "price": 199.99,
      "category": "Smart Home",
      "image": "https://images.unsplash.com/photo-1622295027654-a6b0e5e2e1c0"
    },
    {
      "id": 31,
      "name": "Wireless Charger",
      "price": 39.99,
      "category": "Accessories",
      "image": "https://images.unsplash.com/photo-1558126319-c9feecbf57ee"
    },
    {
        "id": 32,
      "name": "Home Security Camera",
      "price": 129.99,
      "category": "Smart Home",
      "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
    },
    {
      "id": 33,
      "name": "Laptop Cooling Pad",
      "price": 29.99,
      "category": "Accessories",
      "image": "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6"
    },
    {
      "id": 34,
      "name": "Smart Plug",
      "price": 19.99,
      "category": "Smart Home",
      "image": "https://m.media-amazon.com/images/I/31pTfoH44XL._SY445_SX342_QL70_ML2_.jpg"
    },
    {
        "id": 35,
        "name": "High-End Desktop PC",
        "price": 1999.99,
        "category": "Desktops",
        "image": "https://www.jouleperformance.com/media/catalog/product/f/0/f0b885d1-551d-4167-804e-ac9c05890ee0.png?optimize=medium&fit=bounds&height=450&width=600&canvas=600:450"
    }
]; 
let categoryJSON = [
    {
        "category": "Laptops" , 
        "image": "https://media.product.which.co.uk/prod/images/ar_2to1_1200x600/22a475e555d7-best-laptop-deals.webp"
    } ,
    {
        "category": "Desktops" , 
        "image": "https://media.istockphoto.com/id/1314343964/photo/top-end-system-unit-for-gaming-computer-close-up.jpg?s=612x612&w=0&k=20&c=d_xKRis8Ccy90gbqCjScpuAEVOvpQN0kdnBxA_H9zRs="
    },
    {
        "category": "Accessories" , 
        "image": "https://www.silicon.co.ke/cdn/shop/articles/be4e5ed0381ed56be50c77bdaeb9c8cd.png?v=1692630895&width=1100"
    },
    {
        "category": "Gaming" , 
        "image": "https://www.nxp.com/assets/images/en/blogs/BL-DEVELOPING-ACCESSORIES-1.jpg"
    },
    {
        "category": "Virtual Reality" , 
        "image": "https://deusens.com/uploads/blog/2021/01/gafas.webp"
    },
    {
        "category": "Smart Home" , 
        "image": "https://i.pcmag.com/imagery/roundup-groups/051b3JvCaz7TUe9VW12gb2m-6.fit_lim.size_960x.jpg"
    },
    {
        "category": "Printers" , 
        "image": "https://i8.amplience.net/i/epsonemear/a17761-productpicture-hires-en-int-workforce_wf-2950dwf_01_main_rp_flex_2000x2000px_png?$product-xlarge$&fmt=auto&img404=missing_product&v=1"
    },
    {
        "category": "Networking" , 
        "image": "https://media.geeksforgeeks.org/wp-content/uploads/20241014175346235579/Common-Types-of-Network-Devices-1.png"
    },
    {
        "category": "Audio" , 
        "image": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTPRlM0IGI6-uYScQGQ7JtUYI54EwOw7hVSfT32rPHyeUGyPD0K8dppq_8isLrQ"
    },
    {
        "category": "Wearables" , 
        "image": "https://mobisoftinfotech.com/resources/wp-content/uploads/2018/05/wearable_technology_healthcare_blog_mobisoft_infotech.png"
    },
    {
        "category": "Graphics Cards" , 
        "image": "https://m.media-amazon.com/images/I/71h48w-NEsL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
    },
    {
        "category": "Storage" , 
        "image": "https://miro.medium.com/v2/resize:fit:640/format:webp/1*ZI04v-3s3IX8aA_lAWTa-g.png"
    },
    {
        "category": "Monitors" , 
        "image": "https://www.lg.com/us/images/business/md08005651/gallery/D01.jpg"
    }        
] ; 

let categoryElement = document.querySelector('.categoryHard') ; 

categoryJSON.forEach(item=> {
    
    const NewDiv = document.createElement('div') ;
    NewDiv.className = "cardCategories" ; 
    
    NewDiv.innerHTML = `
                        <div class="categories">
                            <img src=${item.image}>
                        </div>
                        <div>
                            <a href=#${item.category} class="addButton categoryWords ">${item.category}</a>
                        </div>
    `   ; 
    categoryElement.appendChild(NewDiv) ;
}) ; 

let hardWareProduct = document.querySelector('.cardContainer') ;

let cardCounter = 0 ;
hardWareData.forEach( item=>{
    
    const NewDiv = document.createElement('div') ; 
    NewDiv.className = "col"  ; 
    NewDiv.id = `${item.category}` ; 
        NewDiv.innerHTML = `
    <div class="containerOfCards">
      <div class="cardBx">
        <div class="cardImage">
            <img src=${item.image}>
        </div>
        <div class="cardContent">
              <h4>${item.name}</h4>
              <h6>${item.price}$</h6>
              <a class="addButton btn">Add to Cart</a>
            <lord-icon
              src="https://cdn.lordicon.com/xyboiuok.json"
              trigger="morph"
              state="morph-heart"
              colors="primary:#ffffff"
              style="width:25px;height:25px">
            </lord-icon>
        </div>
      </div>
    </div>
        
        ` ;
        hardWareProduct.appendChild(NewDiv) ;
}) ; 

// Cart 
let Cart = [] ; 
function getObjByValue(obj , value){
  // console.log(`id from function: ${value}`) ;
  return obj.find(item=> item.id === value) ;
}

let count = 0;

let addToCartBtns = document.querySelectorAll('.addButton');
let cartCounter = document.querySelector('.badge');
let cartProducts = document.querySelector('.cartproducts') ; 


//// Added items and send it to be rendered in cart page
for(let i = 0 ; i < addToCartBtns.length ; i ++ ){
  addToCartBtns[i].addEventListener('click' , function(){
      let id = +(addToCartBtns[i].id) ; 
      // console.log(`id from click: ${id}`) ;
      let reqProduct = getObjByValue(hardWareData , id) ; 
      // console.log(reqProduct) ; 
      // let targetProductItem = getObjByValue(hardWareData , item) ; 

      // console.log(targetProductItem) ;

      // let text = "";
      // for (let x in targetProductItem) {
      //   text += targetProductItem[x] + " ";
      // };
      const cartProdDiv= document.createElement('div') ; 
      // cartProducts.innerHTML = text ; 
      cartProdDiv.className = 'addedProd' ; 
  
      cartProdDiv.innerHTML = `
  
          <div class="row">
        <div class="col-sm-6 mb-3 mb-sm-0">
          <div class="card">
          <img src=${reqProduct.image} class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${reqProduct.name}</h5>
            </div>
          <div class="card-footer">
            <small class="text-body-secondary">${reqProduct.category}</small>
          </div>
        </div>
        </div>
        <div class="col-sm-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>
      ` ; 
      cartProducts.appendChild(cartProdDiv) ;


      // addToCart(reqProduct.id) ;  
      // console.log(Cart) ;
      // renderCart() ; 
    })
}

for (let i = 0; i < addToCartBtns.length; i++) {
        addToCartBtns[i].addEventListener("click", function () {
        count++;
        cartCounter.innerHTML = count;
    });

}

// function addToCart(productid){
// // console.log(`Name: ${product.name}, Price: ${product.price}`) ;
//     // chartContentFunc(productid) ; 
//     // console.log(productid) ; 
//     Cart.push(productid) ;
    
// }
/*
function renderCart() {
  if(Cart.length <= 0 ){
    
    const NewDiv2= document.createElement('div') ; 
    NewDiv2.className = 'addedProd' ; 
    

    cartProducts.innerHTML = text ; 
    NewDiv2.innerHTML = `

        <div class="row">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">No items</h5>
            </div>
          </div>
          
        </div>

    ` ; 
    cartProducts.appendChild(NewDiv2) ;
  

  }else{

    Cart.forEach(item => {
        console.log(`Item :${item}`) ;
        let targetProductItem = getObjByValue(hardWareData , item) ; 
        console.log(targetProductItem) ;

        let text = "";
        for (let x in targetProductItem) {
          text += targetProductItem[x] + " ";
        };
        const NewDiv2= document.createElement('div') ; 
        cartProducts.innerHTML = text ; 
        NewDiv2.className = 'addedProd' ; 
    
        // NewDiv2.innerHTML = `
    
        //     <div class="row">
        //   <div class="col-sm-6 mb-3 mb-sm-0">
        //     <div class="card">
        //     <img src=${targetProductItem.image} class="card-img-top" alt="...">
        //     <div class="card-body">
        //       <h5 class="card-title">${targetProductItem.name}</h5>
        //       </div>
        //     <div class="card-footer">
        //       <small class="text-body-secondary">${targetProductItem.category}</small>
        //     </div>
        //   </div>
        //   </div>
        //   <div class="col-sm-6">
        //     <div class="card">
        //       <div class="card-body">
        //         <h5 class="card-title">Special title treatment</h5>
        //         <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        //         <a href="#" class="btn btn-primary">Go somewhere</a>
        //       </div>
        //     </div>
        //   </div>
        // </div>
        // ` ; 
        cartProducts.appendChild(NewDiv2) ;
      })
  }

  
  } ; 
*/





