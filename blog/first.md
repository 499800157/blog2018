## 冯森的博客

目标：说一说制作博客过程中的收获吧。

预览：[博客](https://499800157.github.io/blog2018/)

## 一、目录结构    
    .
    ├── README.md          --- 使用帮助
    ├── index.html         --- 主页博客
    ├── blog/              --- 写markdown文件
    └── htmlBlog/          --- 生成markdown的html页面
    └── build.js           --- 生成博客html的
    └── template.html      --- 生成博客的模板
    └── typo.css           --- 页面样式

## 二、收获


1、marked 介绍  （markdown转html）

⚡专为速度而打造
用于解析markdown的低级编译器，无需长时间缓存或阻塞<br/>
重量轻，同时实现支持的口味和规格的所有降价功能<br/>
在浏览器，服务器或命令行界面（CLI）中工作

2、marked 使用

var box =document.getElementById("content");
var markdown=box.innerHTML;
box.innerHTML=marked(markdown);

3、typo.css 介绍

typo.css 的目的是，在一致化浏览器排版效果的同时，构建最适合中文阅读的网页排版

4、node.js

(1) 模块的使用  例如：const fs = require("fs")<br />
(2) 读取目录下的文件 fs.readdir("./目录的url",function(err,files){files是一个数组，每个成员是一个文件}) <br />
(3) 引入path模块 const path = require("path") path有一个API，连接两个目录或文件 oath.join("./aaa","bbb") 返回 aaa/bbb <br />
(4) 读取文件中的内容 fs.readFileSync("文件路径").toString() ，注意：需要加toString() <br />
(5) 读取模板内容，然后将展示的markdown内容替换为从md文件中读取的内容 template.replace("%content%","markdown读取的内容") <br />
(6) 创建文件 fs.writeFileSync("文件路径"，"文件内容")。


5、自动化转markdown的文件为html文件

使用node跑build.js文件 node build.js

## 三、问题

1.如何在blog目录下书写一篇博客，自动转为html页面。（实现全自动化）
