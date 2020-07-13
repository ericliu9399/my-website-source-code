<div class="top-pannel">
<p align="center">
  <a href="https://edinliu.github.io/">
    <h2 align="center">前往個人網站</h2>
  </a>
</p> 
<p align="center">Creative FrontEnd Web Developer</p>

<h2 align="center">作品介紹</h2>
</div>

### 作品 1: Todo List [demo](https://edinliu.github.io/ts-todolist-demo/) [原始碼](https://github.com/edinliu/ts-todolist-source-code)

<img src="https://i.imgur.com/II2Jx3H.png" alt="site1" width="50%"/>

#### 簡介

組件用 typescript 製作的 todolist

#### 製作過程

##### 製作 component 的 ui 部分:

- InputAndSubmit: 輸入框與按鈕，用來輸入 todo
- TodoFilterPannel: 三個按鈕，用來切換顯示模式，有 show all、show todo、show done 三種。
- TodoItem: 一個可以被點擊的 list item，按下之後會有刪除線。其接收一個閉包函式去記錄當下的 todoListState.length，於被點擊時回傳給父祖件。
- TodoList: 包含數個 TodoItem
- TodoApp: 包含上述組件

##### 製作 component 的 state 部分:

- InputAndSubmit: 1 個 state，用 onChange 來讓它的 input value 與 state 雙向綁定
- TodoApp:3 個 state

1. todoListState:
   預設值是空陣列，儲存整個 todo list 的資料
2. whichTodoItemClick:
   預設值是 null，當 TodoItem 被按下時，會用該 TodoItem 的 id 修改這個 state，useEffect 偵測到這個 state 的改變後，會修改 todoListState 內該 id 的 isDone。
3. filter
   filter 的值有'all'、'done'、'todo'三種。傳遞給 TodoItem 讓它去顯示或隱藏自己的 list item。

##### 在過程中遇到的困難

- 一開始想要直接在 TodoItem 接收到的閉包函式中直接 讀取 todoListState ，並用 setState 更改值。然而只能讀取到 onClick 創建當下的 todoListState。
  解決方法是使用 useEffect。useEffect 會在每次執行時更新函式，可以保證取得最新的值。

### 未來目標

想要使用 google firebase 的身分驗證 api 與 firestore，替 todo list 增加登入功能。

<hr style='page-break-before:always'>

### 作品 2: 個人網站 [demo](https://edinliu.github.io/index.html) [原始碼](https://github.com/edinliu/my-website-source-code)

<img src="https://edinliu.github.io/images/preview_this_personal_website.png" alt="site1" width="50%"/>

#### 簡介

使用 webpack 打包工具，並運用 React、React Router、zeit/styled-jsx、CSS、Bootstrap 4...等工具製作成 RWD 的 React SPA 網頁，部署在 github。

1. **<a href="https://github.com/edinliu/my-website-source-code/tree/master/src/components">單文件組件</a>**
   這個個人網站使用 zeit/styled-jsx ，這個工具將 css 與 jsx 整合在一起成為單文件組件。可以很方便地複製到下一個專案使用。使用上只需要添加 Bootstrap.css CDN 到 html 裡面，再依照 zeit/styled-jsx 官網教學安裝相關套件就可以使用了。

2. **<a href="https://github.com/edinliu/my-website-source-code/blob/master/webpack/styles/styleProdRules.js">使用 PurgeCSS 減少 bundle 大小</a>**
   用 PurgeCSS 刪除多餘的 bootstrap css，bundle 大小減少了 133kb。

3. **<a href="https://github.com/edinliu/my-website-source-code/blob/master/src/components/MarkdownViewer.jsx">編譯 markdown</a>**
   用 marked.js 將這個 readme.md 的內容顯示到個人網站中。
4. **<a href="https://github.com/edinliu/my-website-source-code/tree/master/src/serviceWorker.js">PWA</a>**
   使用從 create-react-app 複製來的 serviceWorker.js 製作 PWA

##### 使用的工具

1. React.js
2. PurgeCSS
3. Styled Jsx
4. Bootstrap
5. Webpack

<hr style='page-break-before:always'>

### 作品 3: 留言板 [demo](https://edinliu.github.io/message_board.html) [原始碼](https://github.com/edinliu/my-website-source-code/tree/master/src/pages/MessageBoard)

<img src="https://edinliu.github.io/images/preview_message_board.png" alt="site1" width="50%"/>

#### 簡介

前端使用 React，部署在 github，串接 RESTful api
後端使用 NodeJS 與 Express.js 開發的 RESTful API，部署在 heroku

1. **<a href="https://github.com/edinliu/my-website-source-code/tree/master/src/pages/MessageBoard">前端</a>**
   前端部屬在 github page，串接 Restful API
2. **<a href="https://github.com/edinliu/my-website-source-code/blob/master/webpack/assets/html.js">靜態頁面</a>**
   message_board 頁面是用 react 做的一個組件，使用 react-router-dom 做頁面的切換。由於 github page 沒有伺服器渲染，重新整理頁面、或者是分享連結時會出錯，所以用 html webpack plugin 複製一份 index.html 在 public 資料夾並且更名為 message_board，問題就解決了。
3. **<a href="https://github.com/edinliu/express-message-board-api">後端</a>**
   使用 Express.js 框架，部屬在 heroku。資料儲存方面使用 fs 去對 json 檔案做讀寫，但是過一陣子留言的資料會消失。heroku 官網說他們伺服器關閉資料不會儲存，而且每天會重新啟動。之後會考慮串接資料庫去儲存資料。

#### 使用的工具

1. Preact.js
2. Styled Jsx & Bootstrap
3. Express.js
<hr style='page-break-before:always'>

### 作品 4: Redux Counter [demo](https://edinliu.github.io/redux-counter/index.html) [原始碼](https://github.com/edinliu/redux-counter-source-code)

<img src="https://edinliu.github.io/redux-counter/images/snapshot.png" alt="site1" width="50%"/>

這是用 redux 與 react 製作的簡易 counter

#### 使用的工具

1. Redux
2. React

### 作品 5: 登陸頁面 [demo](https://edinliu.github.io/landing_page/index.html) [原始碼](https://github.com/edinliu/landing_page)

<img src="https://edinliu.github.io/images/preview_landing_page.jpg" alt="site1" width="50%"/>

這個頁面是我姊姊設計的。我使用 illustrator 將 .ai 檔案圖片分群組並且命名，之後用 inline svg + css 的屬性選擇器製作動畫。

#### 使用的工具

Gulp, Sass, Pug, illustrator
