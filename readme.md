<div class="top-pannel">
<p align="center">
  <a href="https://edinliu.github.io/">
    <h2 align="center">前往個人網站</h2>
  </a>
</p> 
<p align="center">Creative FrontEnd Web Developer</p>

<h2 align="center">作品介紹</h2>
</div>

### 作品 1: 個人網站 [Link](https://edinliu.github.io/index.html)

<img src="https://edinliu.github.io/images/preview_this_personal_website.png" alt="site1" width="50%"/>

#### 簡介

使用 webpack 打包工具，並運用 React、React Router、zeit/styled-jsx、CSS、Bootstrap 4...等工具製作成 RWD 的 React SPA 網頁，部署在 github。

1. **<a href="https://github.com/edinliu/my-website-source-code/tree/master/src/components">單文件組件</a>**
   這個個人網站使用 zeit/styled-jsx ，這個工具將 css 與 jsx 整合在一起成為單文件組件。可以很方便地複製到下一個專案使用。使用上只需要添加 Bootstrap.css CDN 到 html 裡面，再依照 zeit/styled-jsx 官網教學安裝相關套件就可以使用了。

2. **<a href="https://github.com/edinliu/my-website-source-code/blob/master/src/components/MarkdownViewer.js">使用 Preact.js 減少 bundle 大小</a>**
   在生產環境用 Preact.js 替換 React.js，chrome 的 Lighthouse 效能測試，效能從 92 上升到 98。

3. **<a href="https://github.com/edinliu/my-website-source-code/blob/master/src/components/MarkdownViewer.js">編譯 markdown</a>**
   用 marked.js 將這個 readme.md 的內容顯示到個人網站中。

##### 使用的工具

1. React.js
2. Styled Jsx
3. Bootstrap
4. Webpack
5. dynamic-cdn-webpack-plugin

<hr>

### 作品 2: 留言板 [Link](https://edinliu.github.io/message_board)

<img src="https://edinliu.github.io/images/preview_message_board.png" alt="site1" width="50%"/>

#### 簡介

前端使用 React，部署在 github，串接 RESTful api
後端使用 NodeJS 與 Express.js 開發的 RESTful API，部署在 heroku

1. **<a href="https://github.com/edinliu/my-website-source-code/blob/master/src/pages/MessageBoard.js">前端</a>**
   前端部屬在 github page，串接 Restful API
2. **<a href="https://github.com/edinliu/my-website-source-code/blob/master/webpack/plugins/HtmlWebpackPlugin.js">靜態頁面</a>**
   message_board 頁面是用 react 做的一個組件，使用 react-router-dom 做頁面的切換。由於 github page 沒有伺服器渲染，重新整理頁面、或者是分享連結時會出錯，所以用 html webpack plugin 複製一份 index.html 在 public 資料夾並且更名為 message_board，問題就解決了。
3. **<a href="https://github.com/edinliu/express-message-board-api">後端</a>**
   使用 Express.js 框架，部屬在 heroku。資料儲存方面使用 fs 去對 json 檔案做讀寫，但是過一陣子留言的資料會消失。heroku 官網說他們伺服器關閉資料不會儲存，而且每天會重新啟動。之後會考慮串接資料庫去儲存資料。

#### 使用的工具

1. React.js
2. Styled Jsx & Bootstrap
3. Express.js
<hr>

### 作品 3: 登陸頁面 [Link](https://edinliu.github.io/landing_page/)

<img src="https://edinliu.github.io/images/preview_landing_page.jpg" alt="site1" width="50%"/>

**<a href="https://github.com/edinliu/landing_page">原始碼</a>**

這個頁面是我姊姊設計的。我使用 illustrator 將 .ai 檔案圖片分群組並且命名，之後用 css 的屬性選擇器製作動畫。
在製作過程中發現當放兩個以上的 svg 在同一個頁面中 svg 位置會錯亂，我猜想是因為圖檔圖層太多太複雜的緣故。之後把 svg 單獨放在一個頁面中，再用 iframe 把他們放在主頁，一切就正常了。

#### 使用的工具

1. Gulp
2. Sass
3. Pug
