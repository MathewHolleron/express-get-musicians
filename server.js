const express = require("express");
const app = express();
const {Musician} = require("./Musician")
const {sequelize} = require("./db")

const port = 3000;

//TODO
app.get("/musicians", async (req, res) =>{
    try {
        const musicians = await Musician.findAll(); 
        res.json(musicians); 
      } catch (error) {
        console.error(error);
      }
});

app.listen(port, () => {
    sequelize.sync();
    console.log(`Listening on port ${port}`)
})