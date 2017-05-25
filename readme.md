## 运行
- npm install 或者 yarn install 
- npm run dev 或者 yarn dev 执行开发模式
- npm run build 或者 yarn build 打包工程
- npm run prod 或者 yarn prod 打包线上工程

## 初衷
有时候需要快速验证一个东西时，发现要配置一堆东西，就懒得做了，就想自己写了一个简单的脚手架，方便快速验证一下网页问题，css问题，js问题。我只能说大家喜欢造轮子，我也造一个。
## 设计思路
其实前端页面用react没有什么好说的，就是怎么拆分页面封装组件之类，route也没有什么好讲，应该是官方唯一的一个route。唯有做文章的只有data，或者说model层，或者说前端小数据库。目前数据层常用的还是redux偏多，我还就只熟悉这个就选用这个了，redex本身是比较简单的东西，唯一store，提供数据更新的接口和数据变更订阅接口。redux更新接口只能接受一个纯对象，无法满足前端小伙伴的各种羞羞玩法（主要是异步），还好redux提供了中间件，显然这个地方被玩坏，目前有很多流行的redux中间价，例如redux-saga、redux-promise、redux-thunk等等（其实我觉得dva封装的redux-saga的想法很不错）。其实异步主要在fetch后台数据使用偏多。此次借鉴https://github.com/erikras/react-redux-universal-hot-example 这个脚手架的思路，将一个页面请求（异步的）分为3个同步的redux的action（请求中，请求成功，请求失败），具体代码查看src/redux/middleware/clientMiddleware.js。强烈建议读懂这个中间价。
一个页面的数据可以简单的分为2类，页面状态（比如显示不显示一个模态）、后台数据。reducer划分也是采用类似的形式，将所用的页面数据放一个独立的reducer中，将后台数据进行分类放到响应的reducer中。

## 配置
配置文件在/config/下面，将根据环境情况生成config.json的配置文件，可以在node或者浏览器环境下使用。
