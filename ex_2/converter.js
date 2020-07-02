// var docxConverter = require('docx-pdf');

// docxConverter('./helloWorld.docx','./helloWorld.pdf',function(err,result){
//   if(err){
//     console.log(err);
//   }
//   console.log('result'+result);
// });
var fs = require('fs');
const path = require('path');
const pdf = require('pdf-poppler');
 
let file = 'helloWorld.pdf';
 
let opts = {
    format: 'jpeg',
    out_dir: path.dirname(file),
    out_prefix: "name",
    page: null
}
 
pdf.convert(file, opts)
    .then(res => {
        console.log('Successfully converted');
    })
    .catch(error => {
        console.error(error);
    })