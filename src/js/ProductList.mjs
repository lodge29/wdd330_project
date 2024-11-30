import { renderListWithTemplate } from "./utils.mjs";

function productCardTemplate(product) {
  return `<li class="product-card">
  <a href="product_pages/index.html?product=${product.Id}">
  <img
    src="${product.Images.PrimaryMedium}"
    alt="Image of ${product.Name}"
  />
  <h3 class="card__brand">${product.Brand.Name}</h3>
  <h2 class="card__name">${product.Name}</h2>
  <p class="product-card__price">$${product.FinalPrice}</p></a>
</li>`;
}

export default class ProductList {
  constructor(category, dataSource, listElement) {
    // We passed in this information to make our class as reusable as possible.
    // Being able to define these things when we use the class will make it very flexible
    this.category = category;
    this.dataSource = dataSource;
    this.listElement = listElement;
    // :::WEEK3:::
    this.sortOption = 'name';
  }
  async init() {
    // our dataSource will return a Promise...so we can use await to resolve it.
    //const list = await this.dataSource.getData();
    const list = await this.dataSource.getData(this.category);
    
    // render the list
    this.renderList(list);
    //set the title to the current category
    document.querySelector(".title").innerHTML = this.category;
    // :::WEEK3:::
    // sort by NAME or PRICE
    document.querySelector("#sort-by-name").addEventListener("click", () => this.sortBy('name')); 
    document.querySelector("#sort-by-price").addEventListener("click", () => this.sortBy('price'))
  }
  
  renderList(list) { 
    // Sort list by selecting NAME or PRICE
    if (this.sortOption === 'name') { 
      list.sort((a, b) => a.Name.localeCompare(b.Name)); 
    } else if (this.sortOption === 'price') { 
      list.sort((a, b) => a.FinalPrice - b.FinalPrice); 
    } 
    renderListWithTemplate(productCardTemplate, this.listElement, list); 
  } 

  sortBy(option) { 
    this.sortOption = option; 
    this.init(); 
    }
  // render before doing the stretch
  // renderList(list) {
  //   const htmlStrings = list.map(productCardTemplate);
  //   this.listElement.insertAdjacentHTML("afterbegin", htmlStrings.join(""));
  // }
}