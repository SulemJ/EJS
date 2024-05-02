import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

const d = new Date();
let day = d.getDay();

app.use(bodyParser.urlencoded({ extended: true }));


if ( day >= 5) {
app.get("/", (req, res) => {
    res.render(__dirname + "/views/index.ejs", 
        {weekname: "the weekend", job: "have fun!"} 
);
})
} 
if (day <= 4) {
    app.get("/", (req, res) => {
        res.render(__dirname + "/views/index.ejs", 
            {weekname: "a weekday", job: " work hard!" }
    );
    })
    } 



app.listen(port, () =>  {
    console.log(`server is running on ${port}`);
})