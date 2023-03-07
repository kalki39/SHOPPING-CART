// const produtc = {
//   id: 1,
//   title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//   price: 109.95,
//   description:
//     "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//   category: "men's clothing",
//   image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//   rating: { rate: 3.9, count: 120 },
// };


let menContainer=document.getElementById('men')
let womenContainer=document.getElementById('women')
let jewContainer=document.getElementById('jewel')
let elecContainer=document.getElementById('electr')

// fetch('https://fakestoreapi.com/products/1',{
//             method:"PUT",
//             body:JSON.stringify(
//                 {
//                     title: 'test product',
//                     price: 13.5,
//                     description: 'lorem ipsum set',
//                     image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWU6luSJyW7iBjSkWrvSgn6j5o9vG7bcOeHw&usqp=CAU',
//                     category: 'electronic'
//                 }
//             )
//         })
//             .then(res=>res.json())
//             .then(data=>
//               {console.log(data)
//                 womenContainer.innerHTML+=`
//                 <div class="item">
//                 <img src=${data.image} alt="Item" />
//                 <div class="info">
//                   <div class="row">
//                     <div class="price">${data.price}</div>
//                     <div class="sized">S,M,L</div>
//                   </div>
//                   <div class="colors">
//                     Colors:
//                     <div class="row">
//                       <div class="circle" style="background-color: #000"></div>
//                       <div class="circle" style="background-color: #4938af"></div>
//                       <div class="circle" style="background-color: #203d3e"></div>
//                     </div>
//                   </div>
//                   <div class="row">Rating:</div>
//                 </div>
//                 <button id="addBtn">Add to Cart</button>
//               </div>`
//               })

fetch(`https://fakestoreapi.com/products/`).then(res => res.json()).then(data => {
    console.log(data);

    data.map((item)=>{
      console.log(item.category);
      if (item.category=="women's clothing") {
        womenContainer.innerHTML+=`
        <div class="item">
        <img src=${item.image} alt="Item" />
        <div class="info">
          <div class="row">
            <div class="price">${item.price}</div>
            <div class="sized">S,M,L</div>
          </div>
          <div class="colors">
            Colors:
            <div class="row">
              <div class="circle" style="background-color: #000"></div>
              <div class="circle" style="background-color: #4938af"></div>
              <div class="circle" style="background-color: #203d3e"></div>
            </div>
          </div>
          <div class="row">Rating:</div>
        </div>
        <button id="addBtn">Add to Cart</button>
      </div>`  
      }
      if (item.category=="men's clothing") {
        menContainer.innerHTML+=`
        <div class="item">
        <img src=${item.image} alt="Item" />
        <div class="info">
          <div class="row">
            <div class="price">${item.price}</div>
            <div class="sized">S,M,L</div>
          </div>
          <div class="colors">
            Colors:
            <div class="row">
              <div class="circle" style="background-color: #000"></div>
              <div class="circle" style="background-color: #4938af"></div>
              <div class="circle" style="background-color: #203d3e"></div>
            </div>
          </div>
          <div class="row">Rating:</div>
        </div>
        <button id="addBtn">Add to Cart</button>
      </div>`  
      }
      if (item.category== "jewelery") {
        jewContainer.innerHTML+=`
        <div class="item">
        <img src=${item.image} alt="Item" />
        <div class="info">
          <div class="row">
            <div class="price">${item.price}</div>
            <div class="sized">S,M,L</div>
          </div>
          <div class="colors">
            Colors:
            <div class="row">
              <div class="circle" style="background-color: #000"></div>
              <div class="circle" style="background-color: #4938af"></div>
              <div class="circle" style="background-color: #203d3e"></div>
            </div>
          </div>
          <div class="row">Rating:</div>
        </div>
        <button id="addBtn">Add to Cart</button>
      </div>`  
      }
      if (item.category=="electronics") {
        elecContainer.innerHTML+=`
        <div class="item">
        <img src=${item.image} alt="Item" />
        <div class="info">
          <div class="row">
            <div class="price">${item.price}</div>
            <div class="sized">S,M,L</div>
          </div>
          <div class="colors">
            Colors:
            <div class="row">
              <div class="circle" style="background-color: #000"></div>
              <div class="circle" style="background-color: #4938af"></div>
              <div class="circle" style="background-color: #203d3e"></div>
            </div>
          </div>
          <div class="row">Rating:</div>
        </div>
        <button id="addBtn">Add to Cart</button>
      </div>`  
      }
    })

}).catch((err)=> console.log("Error in API is",err))
