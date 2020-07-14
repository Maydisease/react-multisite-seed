export const env = {
  nodeEnv: String(process.env.NODE_ENV),
  appEnv : String(process.env.APP_ENV),
  appName: String(process.env.APP_NAME),
  isDev  : Boolean(process.env.NODE_ENV === 'development')
};
