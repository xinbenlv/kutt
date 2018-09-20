module.exports = {
  PORT: process.env.PORT,

  /* The domain that this website is on */
  DEFAULT_DOMAIN: process.env.DEFAULT_DOMAIN,

  /* Neo4j database credential details */
  DB_URI: process.env.GRAPHENEDB_BOLT_URL,
  DB_USERNAME: process.env.GRAPHENEDB_BOLT_USER,
  DB_PASSWORD: process.env.GRAPHENEDB_BOLT_PASSWORD,

  /* The daily limit for each user */
  USER_LIMIT_PER_DAY: process.env.USER_LIMIT_PER_DAY,

  /* A passphrase to encrypt JWT. Use a long and secure key. */
  JWT_SECRET: process.env.JWT_SECRET,

  /*
    Invisible reCaptcha secret key
    Create one in https://www.google.com/recaptcha/intro/
  */
  RECAPTCHA_SECRET_KEY: process.env.RECAPTCHA_SECRET_KEY,

  /* 
    Google Cloud API to prevent from users from submitting malware URLs.
    Get it from https://developers.google.com/safe-browsing/v4/get-started
  */
  GOOGLE_SAFE_BROWSING_KEY: process.env.GOOGLE_SAFE_BROWSING_KEY,

  /*
    Your email host details to use to send verification emails.
    More info on http://nodemailer.com/
  */
  MAIL_HOST: process.env.MAIL_HOST,
  MAIL_PORT: process.env.MAIL_PORT,
  MAIL_SECURE: true,
  MAIL_USER: process.env.MAIL_USER,
  MAIL_PASSWORD: process.env.MAIL_PASSWORD,
};
