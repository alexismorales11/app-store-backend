const sequelize = require('../libs/sequelize.js');

class ProductsService {
  constructor() {
  }

  async create(data) {
    const query = `INSERT INTO TASK (TITLE, COMPLETED)  VALUES ('${data.title}', ${data.completed})`;
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
    const query =   `DELETE FROM TASK WHERE ID = ${id}`;
    await sequelize.query(query);
    return { id };
  }
}

module.exports = ProductsService;
