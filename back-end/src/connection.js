import Sequelize from 'sequelize';
import dotenv from 'dotenv'

dotenv.config({ path: '../.env' })

const name = process.env.databaseName;
const user = process.env.databaseUser;
const pswd = process.env.databasePswd;
const host = process.env.databaseHost;

const sequelizeDB = new Sequelize(
    name, //nome do banco de dados
    user, //nome do usuário
    pswd, //senha do usuário para o banco de dados
    {
        host: host,
        dialect: 'mysql',
    }
)

sequelizeDB.authenticate().then(function(){
    console.log("Connection established")
}).catch(function(erro){
    console.log("Erro in connection with DB: ", erro)
})

sequelizeDB.sync();

export default sequelizeDB;