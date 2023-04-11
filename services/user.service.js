const sequelize = require('../libs/sequelize.js')

class UserService {
  constructor() {}

  async create(data) {
    const queryGetPermissions = `SELECT * FROM `
    const query = `
    INSERT INTO 
    USERS (NOMBRE, ID_PERMISOS, FECHA_CREACION, PATH_IMG, PASSWORD)
    VALUES (${data.nombre}, ${data.nombre})
    `;
    await sequelize.query(query);
    return data;
  }

  async find() {
    const query = `SELECT * FROM USERS ORDER BY ID_USUARIO DESC`;
    const { data } = sequelize.query(query);
    return rta.rows;
  }

  async findOne(id) {
    return { id };
  }

  async update(id, changes) {
    return {
      id,
      changes,
    };
  }

  async delete(id) {
    return { id };
  }
}

module.exports = UserService;
