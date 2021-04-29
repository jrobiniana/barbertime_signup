const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { APP_SECRET } = require('../utils');
const API_KEY = '5c3a9cb136742366d307cbb3a591490b-a09d6718-f54c9b08';
const DOMAIN = 'sandboxb4ea81e860794c37b4e95a69b6e072fa.mailgun.org';
const mailgun = require('mailgun-js')({apiKey: API_KEY, domain: DOMAIN});

async function signup(parent, args, context, info) {
  const password = await bcrypt.hash(args.password, 10);
  const user = await context.prisma.user.create({
    data: { ...args, password }
  });

  const token = jwt.sign({ userId: user.id }, APP_SECRET);

  const data = {
	from: 'BarberTime <activation@barbertime.com>',
	to: user.email,
	subject: 'Activate Your Account',
	text: 'Activation email for sign up.'
  };

  mailgun.messages().send(data, (error, body) => {
    console.log(body);
  });

  return {
    token,
    user
  };
}

module.exports = {
  signup
};
