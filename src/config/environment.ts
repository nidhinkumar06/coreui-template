const devEnv = {
  baseURL: '',
};
const prodEnv = {
  baseURL: '',
};

const environment = process.env.NODE_ENV === 'production' ? { ...prodEnv } : { ...devEnv };

export default environment;
