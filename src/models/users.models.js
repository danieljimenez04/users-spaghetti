
const {DataTypes}=require('sequelize')

const db=require('../utils/database')


const Users=db.define('users',{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    first_name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    last_name:{
        type:DataTypes.STRING,
        defaultValue:""
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        }
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false
    },
    birthday:{
        type:DataTypes.DATEONLY,
        allowNull:false
    }
},{
    timestamps:false
})

module.exports=Users