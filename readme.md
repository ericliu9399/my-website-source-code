<p align="center">
  <a href="https://edinliu.github.io/">
    <h2 align="center">Edin Liu</h2>
  </a>
</p> 
<p align="center">Creative FrontEnd Web Developer</p>

## :rocket: 簡單介紹

**這是一個找工作用的個人網站，包含 3 個作品**

### 作品 1: 這個個人網站

**這是一個找工作用的個人網站**

#### 特色

1. 這個個人網站使用 Styled jsx 製作的單文件組件，因為只有用到 Bootstrap 與 Styled jsx，可以很方便地複製到下一個專案使用。使用上只需要添加 Bootstrap.css CDN 到 html 裡面，再依照 zeit/styled-jsx 官網教學安裝相關套件就可以使用了。

2. 一鍵中英文切換功能，使用 json 格式的資料，中文英文各一份，之後用 react hook 做切換

3. 靜態頁面
   由於我的網站的 message_board 頁面是用 react 做的一個組件。由於 github page 沒有伺服器渲染，重新整理頁面、或者是分享連結時會出錯，所以用手工的方式先準備了一個已經渲染好的 html 放在 github page 裡面。

#### 使用的工具

1. React.js
2. Styled Jsx
3. Bootstrap
4. Webpack

### 作品 2: 留言板

檔案位置: src/pages/MessageBoard.js

#### 特色

1. 前後端分離，前端部屬在 github page，串接 Restful API
2. 後端使用 Express.js 框架，部屬在 heroku。資料儲存方面使用 fs 去對 json 檔案做讀寫，但是過一陣子留言的資料會消失。heroku 官網說他們伺服器關閉資料不會儲存，而且每天會重新啟動。之後會考慮串接資料庫去儲存資料。

#### 使用的工具

1. React.js
2. Styled Jsx & Bootstrap
3. Webpack

### 作品 3: 登陸頁面

檔案位置: src/pages/landingPage

這個頁面是我姊姊設計的，我收到 .ai 檔案後使用 illustrator 將會動的部分分成群組並且命名，之後用 css 的屬性選擇器製作動畫。在製作過程中發現當放兩個以上的 svg 在同一個頁面中 svg 位置會錯亂，我猜想是因為圖檔圖層太多太複雜的緣故。之後把 svg 單獨放在一個頁面中，再用 iframe 把他們放在主頁，一切就正常了。

#### 使用的工具

1. Gulp
2. Sass
3. Pug
