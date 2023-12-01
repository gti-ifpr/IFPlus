import sequelizeDB from '/var/www/newIfplus/back-end/src/connection.js'
import { Sequelize, Model } from "sequelize";

class UserAluno extends Model {}

UserAluno.init(
    {
        userAluno_id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true,
            unique: true,
            allowNull: false,
        },
        userAluno_nome:{
            type: Sequelize.CHAR(100),
            allowNull: false,
        },
        userAluno_cpf:{
            type: Sequelize.CHAR(11),
            allowNull: false,
            unique: true,
        },
        userAluno_email:{
            type: Sequelize.CHAR(100),
            allowNull: false,
        },
        userAluno_telefone: {
            type: Sequelize.CHAR(15),
            allowNull: false,
        },
        userAluno_rg:{
            type: Sequelize.CHAR(10),
            allowNull: false,
            unique: true,
            primaryKey: true,
        },
        userAluno_Matricula:{
            type: Sequelize.CHAR(15),
            allowNull: false,
            unique: true,
        },
        userAluno_Sexo:{
            type: Sequelize.CHAR(17),
            allowNull: false,
        },
        userAluno_Ativo:{
            type: Sequelize.BOOLEAN,
            allowNull: false,
        },
        userAluno_Senha:{
            type: Sequelize.STRING,
            allowNull: false,
        },
        userAluno_Nascimento:{
            type: Sequelize.DATEONLY,
            allowNull: false
        },
        //é importante considerar que, internamente, o Sequelize armazenará a data no formato YYYY-MM-DD no banco de dados
        userAluno_Curso:{
            type: Sequelize.STRING,
            allowNull: false,
        },
        userAluno_Periodo:{
            type: Sequelize.STRING,
            allowNull: false,
        },
        userAluno_Disponibilidade:{
            type: Sequelize.STRING,
            allowNull: false,
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