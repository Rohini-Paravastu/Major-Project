const products = [
  {
    name: "Product 1",
    desc: "GUN - 5mm",
    price: 75000,
        imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDbOmNu4_m-AZ_9W2Lb8o8wYv9zDWcpJXVGCsv3K8JlN5PQQTRVPeEAptPz_EzxedP9wHa5UXsZQRRuV1dPoi1Kr8NSJjYZ4K1C8UNVEIb&s=10",
    cart: "Add To Cart",
  },
  {
    name: "Product 2",
    desc: "iphone 17 pro max",
    price: 175000,
      imgUrl: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQXLgFg4Tmvjs_pvUCQUKWwRjlmfHLaXc9AnIy8sp6pWfqPgOsgXuCfqUMo1EYKotkOitsj976PpXznAP6Epk_TPzeJ5ZQ15F2sIaGO37jaH0S8TWLZA2Fnif0e5L4eooSzkEzYbnxP&usqp=CAc",
    cart: "Add To Cart",
  },
  {
    name: "Product 3",
    desc: "headsets",
    price: 20000,
      imgUrl: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSuP2cFyQtv8FGnajtQ9tx59m7hY1AL26zzKnuuYBDOHUUndxZNLTJlOeWvTlvZxxWskpTENLkSixH3bDKKMyttFzcLekwfGNx1jPYcEUzYefdqQfiwUSqZAkUD6JLSjGTYd05ER34&usqp=CAc",
    cart: "Add To Cart",
  },
];

function showProducts() {
  let str = `<div class="row">`;
  products.map(e=>{
    str = str + `
    <div class="box">
    <img src=${e.imgUrl}/>
    <h3>${e.name}</h3>
    <p>${e.desc}</p>
    <h5>${e.price}</h5>
    <button>${e.cart}</button>
    </div>
      `
  })
  str = str + `</div>`;
  root.innerHTML = str;
}