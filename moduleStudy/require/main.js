//requireJS模块化加载工具的，入口文件。
require.config({
  baseUrl: "./../../node_modules",
  paths: {
    "jquery": "jquery/dist/jquery",
    "underscore": "underscore/underscore"
  }
});

require(['jquery', 'underscore'], function($, _) {
  console.log($);
  console.log(_);
});
