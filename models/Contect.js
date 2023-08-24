const mangoose =require('mongoose');
/*
const MoreDeatilsSchema = new mangoose.Schema({
 
    LastName:{
        type:String,
        required:true,
        allowNull: false,
    },
    NickName:{
        type:String,
        default:"NotAvailabe",
    },
    Email:{
        type:String,
        unique:true,
        allowNull: false,
        
    },

  });

  const moreDetails = mangoose.model('moredetails', MoreDeatilsSchema);*/

const contectSchema= new mangoose.Schema({

    id:{
        type:Number,
        primaryKey: true,
        autoIncrement: true,
    },
    FirstName:{
        type:String,
        required:true,
        allowNull: false,
    },
    LastName:{
        type:String,
        required:true,
        allowNull: false,
    },
    NickName:{
        type:String,
        default:"NotAvailabe",
    },
    PhoneNo:{
        type:String,
        unique:true,
        allowNull: false,
    },
    Email:{
        type:String,
        unique:true,
        allowNull: false,
        
    },
    photo:{
        type:String
    }
 
})

const Contect = mangoose.model('Contect' ,contectSchema);

module.exports={Contect ,/* moreDetails */};
