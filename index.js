const express = require("express")
const QR = require("qrcode")
const dotenv = require("dotenv")

dotenv.config()

const app = express();

app.use(express.json())

app.set("view engine", "ejs")
app.use(express.static(__dirname + '/public'));


app.get("/", (req, res) => {
    res.render("index")
})

app.post("/generateQR", async (req, res) => {

    const QR_CODE = await QR.toDataURL(req.body.url)

    res.json(QR_CODE)
})



app.listen(process.env.PORT, () => {
    console.log(`Service up at ${process.env.PORT}`);
})
