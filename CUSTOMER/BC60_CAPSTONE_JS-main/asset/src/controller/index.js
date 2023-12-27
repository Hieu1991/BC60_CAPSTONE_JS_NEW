const api = new Api();
let products = [];

function getEle(id) {
  return document.getElementById(id);
}

function getListProduct() {
  getEle("loader").style.display = "block";
  const promise = api.fetchData();
  console.log(promise);

  promise
    .then(function (result) {
      console.log("result", result.data);
      products = result.data;
      renderUI(result.data);
      getEle("loader").style.display = "none";
    })
    .catch(function (error) {
      console.log("error", error);
      getEle("loader").style.display = "none";
    });
}
getListProduct();

function renderUI(data) {
  let content = "";
  for (let i = 0; i < data.length; i++) {
    const product = data[i];
    content += `
      <div class="col-12 col-md-6 col-lg-4">
        <div class="sizeCol">
          <img src="./asset/img/product/${product.img}" class="sizeImage">
          <div class="card-body">
            <div class="d-flex justify-content-between">
              <div>
                <h3 class="cardPhone__title">${product.name}</h3>
                <p class="cardPhone__text">${product.desc}</p>
              </div>
              <div>
                <h3 class="cardPhone__title">${product.price}</h3>

                <button type="button" onclick="modal(${i})" class="btn btn-primary cardphone__eye" data-toggle="modal" data-target="#myModal">
                  <i class="fa-solid fa-eye"></i>
                </button>
              </div>
            </div>
            <div class="d-flex justify-content-between">
              <div class="cardPhone__rating">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
              </div>
              <div>
                <button class="btnPhone-shadow">
                  <i class="fa fa-shopping-cart"></i> ADD TO CARD
                </button>
                </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  document.getElementById("listProduct").innerHTML = content;
}

function modal(i) {
  getEle("name1").innerHTML = products[i].name;
  getEle("name2").innerHTML = products[i].name;
  getEle("price").innerHTML = products[i].price;
  getEle("backCamera").innerHTML = "Cam Sau: " + products[i].backCamera;
  getEle("frontCamera").innerHTML = "Cam Trước: " + products[i].frontCamera;
  let img = getEle("img");
  img.src = `./asset/img/product/${products[i].img}`;
  getEle("decs").innerHTML = products[i].desc;
  getEle("screen").innerHTML = products[i].screen;
}

function handleChange(e) {
  console.log(e.value);
  if (e.value == "All") {
    renderUI(products);
    return;
  }
  const newData = [];
  for (let i = 0; i < products.length; i++) {
    if (products[i].type == e.value) {
      newData.push(products[i]);
    }
  }
  renderUI(newData);
}
