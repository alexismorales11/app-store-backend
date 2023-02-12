const faker = require("faker");

//POO
class productServices {
  constructor() {
    this.products = [];
    this.generate();
  }

  async generate() {
    for (let index = 0; index < 100; index++) {
      this.products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.imageUrl(),
        description: faker.commerce.productDescription(),
        color: faker.commerce.color(),
      });
    }
  }

  async create(body) {
    const newProduct = {
      id: faker.datatype.uuid(),
      ...body,
    };
    this.products.push(newProduct);
    return newProduct;
  }

   find() {
/*    return new Promise((resolve, reject)=>{
      setTimeout(()=>{   
        resolve(this.products)
   },1000)
      
    })*/
    return this.products;
  }

  async findOne(id) {
    
    const name =  this.totales()
    return this.products.find((item) => item.id === id);

  }

  async update(id, changes) {

    const index = this.products.findIndex(item => item.id === id)
    if(index === -1){
     throw new Error('product not found') 
    }else{
      const product = this.products[index]; 
      this.products[index] = {
        ...product,
        ...changes
      };
      return this.products[index]
    }
  }

  async delete(id) {
    const index = this.products.findIndex(item => item.id === id)
    if(index === -1){
     throw new Error('product not found') 
    }else{
      this.products.splice(index,1)
      return {id};
    }
  }
}

module.exports = productServices;
