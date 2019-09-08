antd 使用 less，而项目编写使用 sass，但@import 导入只能在 scss 的头部声明，否则会出问题。

less 报错:

```
Failed to compile
./node_modules/antd/lib/button/style/index.less
Module build failed:

// https://github.com/ant-design/ant-motion/issues/44
.bezierEasingMixin();
^
Inline JavaScript is not enabled. Is it set in your options?
      in C:\Users\HP\Desktop\react-antD\react-antd\node_modules\antd\lib\style\color\bezierEasing.less (line 110, column 0)
This error occurred during the build time and cannot be dismissed.
```

将 less 版本降到 3.0 以下 比如安装 2.7.3 版本。

```
npm i -S less@^2.7.3
```
