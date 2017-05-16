/*
 *代理使用webpack本身代理，只用于开发模式，生产环境使用Nginx进行代理
 * API 请求的接口前面会自动加上/api/
 * */

module.exports = {
  "/api": {
    target: "http://localhost:3000",
    pathRewrite: {"^/api": ""}
  }
};