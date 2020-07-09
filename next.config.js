const { parsed: localEnv } = require('dotenv').config();
const webpack = require('webpack');

module.exports = webpack(config /*, options*/){
      config.plugins.push(
        new webpack.EnvironmentPlugin(localEnv || process.env)
				// local 환경이면(localEnv가 있으면) 그 값을 사용, 아니면 secret값을 사용
      );
      return config;
    };