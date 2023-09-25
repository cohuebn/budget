const path = require("path");

const ZipPlugin = require("zip-webpack-plugin");

module.exports = () => {
  return {
    entry: path.resolve(process.cwd(), "index.ts"),
    target: "node",
    mode: "production",
    devtool: "source-map",
    module: {
      rules: [
        {
          test: /\.ts?$/,
          loader: "esbuild-loader",
          options: {
            loader: "ts",
          },
        },
      ],
    },
    resolve: {
      extensions: [".ts", ".js"],
    },
    output: {
      filename: "index.js",
      libraryTarget: "commonjs2",
    },
    plugins: [
      new ZipPlugin({
        filename: "lambda.zip",
      }),
    ],
    optimization: {
      minimize: false,
    },
  };
};
