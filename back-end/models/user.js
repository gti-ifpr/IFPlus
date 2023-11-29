import sequelizeDB from '/var/www/newIfplus/back-end/src/connection.js'
//importa a instância do sequelize que foi configurada para se conectar ao banco
import { Model, Sequelize } from 'sequelize';
//Essa importação está desestruturando as classes DataTypes e Model do objeto sequelize. Essas classes são partes fundamentais do Sequelize para definir modelos e tipos de dados para os atributos do modelo.

//O Sequelize fornece uma classe chamada Model para criar os próprios modelos.
class User extends Model {}

//configura os detalhes do modelo
User.init(
    //atributos
    {
        user_id:{
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4
        },
        user_nome:{
            type: Sequelize.CHAR(100),
            allowNull: false,
        },
        user_cpf:{
            type: Sequelize.CHAR(14),
            unique: true,
            primaryKey: true,
            allowNull: false,
        },
        user_email:{
            type: Sequelize.STRING,
            allowNull: false,
        },
        user_telefone:{
            type: Sequelize.STRING(15),
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
    //configurações que afetam o comportamento do Sequelize em relação à tabela associada.
    //nessa caso, configura a instancia de conexão com o banco
    {
        sequelize: sequelizeDB,
        modelName: 'User',
        timestamps: true, // createdAt e updatedAt serão gerenciados automaticamente pelo Sequelize
        paranoid: true, // adiciona deletedAt para suporte a soft delete
        underscored: true, // define o estilo de nomenclatura usando snake_case
    }
);


//verifica se a tabela existe no banco de dados, se ela não existe, o sequelize irá criar
User.sync()
    .then(() => {
        console.log('Tabela User sincronizada com sucesso.');
    })
    .catch((error) => {
        console.error('Erro ao sincronizar tabela User:', error);
});

export default User;