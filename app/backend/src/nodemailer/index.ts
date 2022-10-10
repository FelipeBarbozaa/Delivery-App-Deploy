import transporter from './config';

const sendEmail = async (email: string, token: string) => {
  const url = `http://localhost:3000/confirmation/${token}`;

  await transporter.sendMail({
    subject: 'Confirm your email',
    to: email,
    html: `Please click this email
      to confirm your email: <a href="${url}">${url}</a>`,
  });
};

export default sendEmail;