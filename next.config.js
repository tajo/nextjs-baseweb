module.exports = {
  webpack: (config, {dev}) => {
    if (dev) {
      config.devtool = 'inline-source-map';
    }
    return config;
  },
};
