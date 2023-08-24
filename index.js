const express= require('express');//  this framework is used to create web application in node js
const bodyparser= require('body-parser'); 
const cors =require('cors');  // to give permission to frontend application access api
const multer = require('multer');  // this module is used for read file 
const fs = require('fs');
const PORT=8000;
require('dotenv').config();// to read data from .env file
const app = express();
require('./db')

app.use(bodyparser.json());
app.use(cors());
const {Contect , moreDetails }= require('./models/Contect')

//const storage = multer.memoryStorage();
//const upload = multer({ storage });
const upload =multer({dest :'uploads/'})

const contactR = require('./Routes/ContactRoutes');

app.use('/contacts' , contactR);


//  get all Contect
app.get('/getContacts', async(req , res)=>{
    const allContects= await Contect.find();
    res.json(allContects);
})


// create contect
app.post('/addContect' ,upload.single('photo') , async(req , res)=>{


    const{FirstName, LastName ,NickName ,Email ,PhoneNo , photo} = req.body;
   
   /*  const moredet = new moreDetails({
        LastName,
        NickName,
        Email
    }); */
  /*  const saveMoreDetails =  await moredet.save(); */
    const contct = new Contect({ //fn pn photo
        FirstName, 
        LastName,
        NickName,
        PhoneNo,
        photo ,
        Email,   
    })


    const saveContect =  await contct.save();
    res.json(saveContect);

})


//  get Single contect
app.get('/contacts/:contectId', async (req, res) => {
    try {
      const contectId = req.params.contectId;
      console.log(contectId);
      const contect = await Contect.findById(contectId);
      if (!contect) {
        return res.status(404).send('Contect not found');
      }
      res.json(contect);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error fetching Contect');
    }
  });

    // delete contect
    
    app.delete('/contacts/:id', async (req, res) => {
      try {
        const contact = await Contect.findByIdAndRemove(req.params.id);
        if (!contact) {
          return res.status(404).json({ error: 'Contact not found' });
        }
        res.json({ message: 'Contact deleted' });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    });


  // update contect
  app.put('/contacts/:id', async (req, res) => {
    try {
      const contact = await Contect.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      if (!contact) {
        return res.status(404).json({ error: 'Contact not found' });
      }
      res.json(contact);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });


  // application running on port num 8000
app.listen(PORT , ()=>{
    console.log(`Server is running on port ${PORT}`);
});



