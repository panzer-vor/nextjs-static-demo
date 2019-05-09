## <a name="getting-started">&sect; 快速开始</a>

### <a name="installation">⊙ 安装</a>

`git clone`后`npm install` or `yarn install` 安装依赖

***

### <a name="start">⊙ 启动</a>
`yarn dev`后访问`localhost:3000`

***

## <a name="features">&sect; 技术栈</a>
> 详情可参阅 `package.json`

* React 16.8.0
* Styled-components
* Nextjs
* Webpack
* i18n-webpack-plugun

***

## <a name="architecture">&sect; 项目架构</a>
### <a name="tree">⊙ 目录结构</a>
```
.
├─ out/             # 打包后静态文件目录
├─ lib/             # 一些工具函数
├─ interface/          # 常用接口
├─ static/         # 静态资源文件目录
├─ components/     # 组件（COMPONENT）
│   ├─ module/index.ts  # 模块化组件入口
│   ├─ style/index.ts  # 样式模块化组件入口
│   ├─ */        # 对应页面的独立组件
├─ i18n/        # i18n文件
├─ pages/         # 页面路由
├─ next.config.js  # webpack和nextjs配置文件

```
