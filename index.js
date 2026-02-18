const express = require("express");

const app = express();


const PORT = 5000; 

app.listen(PORT, () => {

    console.log(`Serever is running on PORT ${PORT}`);
} );

app.get("/", (req, res) => {
    res.send("Sam , Backend is running");
})

