import transporter from './config';

const sendEmail = async (email: string, token: string) => {
  const URL = 'https://delivery-app-deploy.vercel.app/';
  const URL_TOTAL = `${URL}/confirmation/${token}`;

  await transporter.sendMail({
    subject: 'Confirm your email',
    to: email,
    html: `Please click this email
      to confirm your email: <a href="${URL_TOTAL}">${URL_TOTAL}</a>`,
  });
};

export default sendEmail;