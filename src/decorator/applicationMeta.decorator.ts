interface IConfig {
  appTemplate: 'pc' | 'm'
}

const ApplicationMeta = (config: IConfig) => {
  return function (target: any) {
  }
};

export {ApplicationMeta}
