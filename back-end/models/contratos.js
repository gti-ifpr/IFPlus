import { Sequelize, Model } from "sequelize";
import sequelizeDB from '/var/www/newIfplus/back-end/src/connection.js'
import UserAluno from "./userAluno";
import UserServidor from "./userServidor";

class Contratos extends Model {}

Contratos.init(
    //atributos
    {
        con_id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true,
        },
        conAlu_id: {
            type: Sequelize.UUID,
            allowNull: false,
            references: {
                model: UserAluno,
                key: 'userAluno_id',
            }
        },
        conSer_id: {
            type: Sequelize.UUID,
            allowNull: false,
            references: {
                model: UserServidor,
                key: 'userServidor_id',
            }
        },
        con_organizacaoConcedente: {
            type: Sequelize.CHAR(100),
            allowNull: false,
        },
        con_centroIntegrador: {
            type: Sequelize.CHAR(30),
            allowNull: false,
        },
        con_numeroEstagio: {
            type: Sequelize.CHAR(30),
            unique: true,
            allowNull: false,
        },
        con_numeroApolice: {
            type: Sequelize.CHAR(30),
            allowNull: false,
        },
        con_orientadorCampus: {
            type: Sequelize.CHAR(100),
            allowNull: false,
        },
        con_dataInicio: {
            type: Sequelize.ONLYDATE(),
            allowNull: false,
        },
        con_dataTermino: {
            type: Sequelize.ONLYDATE(),
            allowNull: true,
        },
        con_atividadesDesenvolvidas: {
            type: Sequelize.TEXT(),
            allowNull: false,
        },
        con_supervisorEstagio: {
            type: Sequelize.CHAR(100),
            allowNull: false,
        },
        con_horarioInicio: {
            type: Sequelize.CHAR(10),
            allowNull: false,
        },
        con_horarioTermino: {
            type: Sequelize.CHAR(10),
            allowNull: false,
        },
        con_valorHora: {
            type: Sequelize.FLOAT,
            allowNull: false,
        },
        con_EstagioAtivo: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
        },
        createdAt: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'), // Define o valor padrão como a data e hora atual
        },
        updatedAt: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'), // Define o valor padrão como a data e hora atual
        }
    },
    {
        sequelize: sequelizeDB,
        modelName: 'Contrato',
        timestamps: true,
        paranoid: true,
        underscored: true,
    }
);

//verifica se a tabela existe no banco de dados, se ela não existe, o sequelize irá criar
Contratos.sync()
    .then(() => {
        console.log('Tabela Contratos sincronizada com sucesso.');
    })
    .catch((error) => {
        console.error('Erro ao sincronizar tabela Contratos:', error);
});

export default Contratos;