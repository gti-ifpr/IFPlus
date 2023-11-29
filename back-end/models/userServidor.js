import sequelizeDB from '/var/www/newIfplus/back-end/src/connection.js'
import { Sequelize } from 'sequelize';
import User from '/var/www/newIfplus/back-end/models/user.js';

class UserServidor extends User {}

UserServidor.init(
    //atributos (id, nome, cpf, email, telefone, createdAt, updatedAt, deletedAt já foram configurados na classe modelo User)
    {
        userServidor_id:{
            type: Sequelize.UUID,
            references:{
                model: User,
                key: 'user_id',
            }
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
        }
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