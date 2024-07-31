// import {Environment } from './environment'
//   const EMAIL = Environment.EMAIL;
//   const PASCODE=Environment.PASCODE
// // Create a Nodemailer transporter
// const transporter = nodemailer.createTransport({
//     service: 'gmail', // e.g., 'Gmail', 'Yahoo', 'Outlook', etc.
//     auth: {
//       user: EMAIL, // Your email address
//       pass: PASCODE, // Your email password
//     },
//   });

  
//   // Function to send a welcome email
//   export function sendWelcomeEmail(email : string ,username: string) {
//     const mailOptions = {
//       from: EMAIL, // Sender email address
//       to: email,// Recipient email address
//       subject: 'Welcome to Restaurant Nodejs Project - Registration Successful!',
//       text: `Dear ${username},
//         Welcome to our application.
//     `,
//     };
  
//     transporter.sendMail(mailOptions, (error:string, info:any) => {
//       if (error) {
//         console.error('Error sending welcome email:', error);
//       } else {
//         console.log('Welcome email sent:', info.response);
//       }
//     });
//   }

