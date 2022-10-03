const pdfConverter=require('pdf-poppler')
const path = require('path')
const fs = require('fs');
const pdf = require('pdf-page-counter');
const pdfPath='C:/Users/Aryan Pandey/Desktop/Codefiesta/PRoject/pdf-to-image impl/pdfs/kannada.pdf'
let dataBuffer = fs.readFileSync('./pdfs/kannada.pdf');


pdf(dataBuffer).then((data)=>{
    
    console.log(data.numpages)
    const pages = data.numpages;

    function convertImage(pdfPath) {
    for (let i = 1; i <= pages; i++) {
    
        pdfConverter.convert(pdfPath, {
            format : 'jpeg',
            out_dir : 'C:/Users/Aryan Pandey/Desktop/Codefiesta/PRoject/pdf-to-image impl/images',
            out_prefix : path.basename(pdfPath, path.extname(pdfPath)),
            page : i
        })
        .then(() => {
            console.log('file converted')
        })
        .catch(err => {
            console.log('an error has occurred in the pdf converter ' + err)
        })
    }

}

convertImage(pdfPath)
 
})

















