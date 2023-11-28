import sequelizeDB from '/var/www/newIfplus/back-end/src/connection.js'
import { Sequelize } from 'sequelize';
import User from '/var/www/newIfplus/back-end/models/user.js';

class UserAluno extends User {}

UserAluno.init(
    //atributos (id, nome, cpf, email, telefone, createdAt, updatedAt, deletedAt já foram configurados na classe modelo User)
    {
        userAluno_rg:{
            type: Sequelize.CHAR(9),
            allowNull: false,
            unique: true,
        },
        userAluno_Matricula:{
            type: Sequelize.CHAR(11),
            allowNull: false,
            unique: true,
        },
        userAluno_Sexo:{
            type: Sequelize.CHAR(17),
            allowNull: false
        },
        userAluno_Ativo:{
            type: Sequelize.BOOLEAN,
            allowNull: false
        },
        userAluno_Senha:{
            type: Sequelize.STRING,
            allowNull: false
        },
        userAluno_Nascimento:{
            type: Sequelize.DATEONLY,
            allowNull: false
        },
        //é importante considerar que, internamente, o Sequelize armazenará a data no formato YYYY-MM-DD no banco de dados
        userAluno_Curso:{
            type: Sequelize.STRING,
            allowNull: false
        },
        userAluno_Periodo:{
            type: Sequelize.STRING,
            allowNull: false
        },
        userAluno_Disponibilidade:{
            type: Sequelize.STRING,
            allowNull: false
        }
    },
    {
        sequelize: sequelizeDB,
        modelName: 'UserAluno',
        timestamps: true,
        paranoid: true,
        underscored: true,
    }
);

UserAluno.sync()
    .then(() => {
        console.log('Tabela UserAluno sincronizada com sucesso.');
    })
    .catch((error) => {
        console.error('Erro ao sincronizar tabela UserAluno:', error);
});

export default UserAluno;