import nodemailer from 'nodemailer'
import User from '@/models/user'
import { connectToDatabase } from '@/lib/mongodb';
import bcrypt from "bcryptjs";

export const sendEmail = async({email, emailType, userId})=>{
    try{
        await connectToDatabase()
        const hashedToken = await bcrypt.hash(userId.toString(), 10)
        if(emailType === "VERIFY"){
           await User.findByIdAndUpdate(userId, {verifyToken: hashedToken, verifyTokenExpiry: Date.now()+3600000})
        }
        else if(emailType === "RESET"){
           await User.findByIdAndUpdate(userId, {forgetPasswordToken: hashedToken, forgetPasswordTokenExpiry: Date.now()+3600000})
        }
      
        let transport = nodemailer.createTransport({
            host: "sandbox.smtp.mailtrap.io",
            port: 2525,
            auth: {
              user: process.env.EMAIL_USER,
              pass: process.env.EMAIL_PASSWORD
            }
          });

          const mailOption = {
            from: 'sapne.vercel.app',
            to: email,
            subject: emailType === "VERIFY"? 'Verify your email': 'Reset Your Password',
            html: `<p>
                        click <a href= "${process.env.DOMAIN}/verifyemail?token=${hashedToken}>here</a>
                        to ${emailType==="VERIFY" ?'Verify your email': 'Reset Your Password'}
                    </p>`
          }

          const mailresponse = await transport.sendMail(mailOption) 
          return mailresponse
    }catch(e){
        console.log(e)
    }
       
    
}
