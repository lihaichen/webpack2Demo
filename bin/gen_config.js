require('babel-polyfill');
var path = require('path');
var fs = require('fs');
var gitHash = require('./git_hash');
console.log(`===>生成配置文件，目前环境为【${process.env.NODE_ENV}】gitHash【${gitHash.gitHash}】`);
var temp = fs.readFileSync(`./config/${process.env.NODE_ENV}.config.json`, {encoding: 'utf8'});
temp = JSON.parse(temp);
temp.debugConfig.gitHash = gitHash.gitHash;
fs.writeFileSync('./config.json', JSON.stringify(temp, null, 2));
