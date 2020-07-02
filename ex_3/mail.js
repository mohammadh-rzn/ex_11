const nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user:'rzmohammadh23@gmail.com',
        pass:'Qwerty-123456'
    }
});
var mailOptions = {
    from: 'rzmohammadh23@gmail.com',
    to: 'mohammadh.rzn@gmail.com',
    subject:'nodejs',
    text:'hello mohammad'
}
transporter.sendMail(mailOptions, function(err, data){
    if(err){
        console.log(err);
    }
    else{
        console.log('email sent' + data.response);
    }
});