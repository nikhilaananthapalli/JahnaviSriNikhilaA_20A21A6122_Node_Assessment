var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'aimlscet22@gmail.com',
        pass:'upznlvkoxtyndowz'
    }
});
var mailOptions = {
    from:'aimlscet22@gmail.com',
    to:'pravinconsensus@gmail.com',
    subject:'TASK3-NODEJS',
    text:'Hello Sir, I am Nikhila Register number 20A21A6122'
};
transporter.sendMail(mailOptions,function(err,info){
    if(err) 
    {
        console.log(err);
    }
    else{
        console.log('Email sent:'+info.response);
    }
});