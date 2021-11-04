const express = require('express')
const server = express();
const fs = require("fs");
const generatePDF = require("html-pdf");
server.use(express.urlencoded())
// Add GET route
server.post("/pdf", async ({ body: { name, about } }, res) => {
    let template = fs.readFileSync("./template.html", "utf8");
    console.log(name, about);
    template = template
        .replaceAll(new RegExp("{{name}}", 'g'), name)
        .replace("{{about}}", about);

    const binaryData = await new Promise((resolve, reject) => {
        generatePDF.create(template).toBuffer((error, generatedBinaryData) => {
            if (error) reject(error);
            resolve(generatedBinaryData);
        });
    }).catch(console.error);

    res.end(binaryData, "binary");
})

server.listen(8000, () => console.log('Started server!'))