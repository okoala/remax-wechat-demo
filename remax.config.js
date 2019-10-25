const path = require('path');

module.exports = {
  // boolean | RegExp 开启或关闭 css modules，支持传入正则表达式配置开启的文件命名格式
  cssModules: /\.module\.(less|scss|css)$/,
  // 配置项目路径，默认当前路径
  cwd: process.cwd(),
  // 是否显示 build 进度，默认显示
  progress: true,
  // 指定代码的根目录，默认 src
  rootDir: 'src',
  // build 目录，默认 dist
  output: 'dist',
  // 配置路径别名
  alias: {
    '@': './src',
  },
  postcss: {
    options: {
      use: [
        [
          'less',
          {
            paths: [
              // 可方便解析 node_modules 中样式文件
              path.resolve(__dirname, 'node_modules'),
              // 可作为全局样式目录
              path.resolve(__dirname, 'src/styles'),
            ],
          },
        ],
      ],
    },
    // 其他postcss 插件, 会和默认的插件进行拼接
    plugins: [],
  },
};
