const faker = require('faker');
const boom = require('@hapi/boom');

const sequelize = require('../libs/sequelize');

class ProductsService {
  constructor() {
    this.products = [];
    this.generate();
  }

  generate() {
    const limit = 100;
    for (let index = 0; index < limit; index++) {
      this.products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.imageUrl(),
        isBlock: faker.datatype.boolean(),
      });
    }
  }

  async create(data) {
    const query = `INSERT INTO TASK (TITLE, COMPLETED, NOMBRE)  VALUES ('${data.title}', ${data.completed}, '${data.nombre}')`;
    await sequelize.query(query);
    return data;
  }

  async find() {
    const query = 'SELECT * FROM task ORDER BY ID DESC';
    const [data] = await sequelize.query(query);
    return data;
  }

  async findOne(id) {
    const query = `SELECT * FROM task WHERE ID = ${id}`;
    const [data] = await sequelize.query(query);
    return data;
  }

  async update(id, changes) {
    const query = `UPDATE TASK 
                   SET TITLE = '${changes.title}', COMPLETED =  ${changes.completed} ,NOMBRE = '${changes.nombre}'
                   WHERE ID = ${id}`;
    await sequelize.query(query);
    const queryRes = `SELECT * FROM TASK WHERE ID = ${id}`;
    const [data] = await sequelize.query(queryRes);
    return data;
  }

  async delete(id) {
    const index = this.products.findIndex((item) => item.id === id);
    if (index === -1) {
      throw boom.notFound('product not found');
    }
    this.products.splice(index, 1);
    return { id };
  }
}

module.exports = ProductsService;
