const catalog = document.querySelector("#catalog");
const products = document.querySelector("#products");

catalog.addEventListener("click", function(){
    products.scrollIntoView({behavior: "smooth"});
});