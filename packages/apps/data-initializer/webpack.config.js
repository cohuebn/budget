const baseWebPackConfig = require("../../../base.webpack.config");

module.exports = () => {
  return {
    ...baseWebPackConfig(),
    // Exclude optional Mongo dependencies from build
    externals: [
      "mongodb-client-encryption",
      "@aws-sdk/credential-providers",
      "aws4",
      "saslprep",
      "kerberos",
      "snappy",
      "bson-ext",
      "@mongodb-js/zstd",
    ],
  };
};
