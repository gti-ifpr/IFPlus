import sequelizeDB from '/var/www/newIfplus/back-end/src/connection.js'
import { Sequelize, Model } from "sequelize";

class UserServidor extends Model {}

UserServidor.init(
    //atributos (id, nome, cpf, email, telefone, createdAt, updatedAt, deletedAt já foram configurados na classe modelo User)
    {
        userServidor_id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true,
            unique: true,
            allowNull: false,
        },
        userServidor_nome:{
            type: Sequelize.CHAR(100),
            allowNull: false,
        },
        userServidor_cpf:{
            type: Sequelize.CHAR(11),
            allowNull: false,
            unique: true,
        },
        userServidor_email:{
            type: Sequelize.CHAR(100),
            allowNull: false,
        },
        userServidor_telefone: {
            type: Sequelize.CHAR(15),
            allowNull: false,
        },
        userServidor_Siape:{
            type: Sequelize.CHAR(15),
            allowNull: false,
            unique: true,
            primaryKey: true,
        },
        userServidor_Senha:{
            type: Sequelize.STRING,
            allowNull: false
        },
        userServidor_Ativo:{
            type: Sequelize.BOOLEAN,
            allowNull: false
        },
        userServidor_cargo:{
            type: Sequelize.STRING,
            allowNull: false
        },
        userServidor_Funcao:{
            type: Sequelize.STRING,
            allowNull: false
        },
        userServidor_Campus:{
            type: Sequelize.CHAR(30),
            allowNull: false
        },
        createdAt: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'), // Define o valor padrão como a data e hora atual
        },
        updatedAt: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'), // Define o valor padrão como a data e hora atual
        },
        deletedAt:{
            type: Sequelize.DATE,
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'), // Define o valor padrão como a data e hora atual
        },
    },
    {
        sequelize: sequelizeDB,
        modelName: 'UserServidor',
        timestamps: true,
        paranoid: true,
        underscored: true,
    }

);

UserServidor.sync()
    .then(() => {
        console.log('Tabela UserServidor sincronizada com sucesso.');
    })
    .catch((error) => {
        console.error('Erro ao sincronizar tabela UserServidor:', error);
});

export default UserServidor;