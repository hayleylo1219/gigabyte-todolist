# Vue 3 + TypeScript + Pinia + tailwindCSS + Vite

## 開發環境

1. 作業系統需安裝 **node** 14.18+ 、 16+ (LTS：長期支援版)
2. IDE: 建議使用 Visual Studio Code

## 安裝vscode所需延伸模組

1. vscode > 檢視 > 延伸模組 (快捷鍵：`Ctrl + Shift + X` )
2. 點選上方 『篩選』按鈕 > 『推薦』
3. 安裝所有『 工作區推薦 』模組

#### 延伸模組詳細

<table border>
  <thead>
    <tr>
      <th>名稱</th>
      <th>延伸模組識別碼</th>
      <th>說明、備註</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Vue Language Features(Volar)</td>
      <td><a href="https://marketplace.visualstudio.com/items?itemName=Vue.volar" target="_blank">Vue.volar</a></td>
      <td>vue3 使用 Volar，vue2 使用 Vetur，需將 Vetur延伸模組 改為 disable</td>
    </tr>
    <tr>
      <td>TypeScript Vue Plugin (Volar)</td>
      <td><a href="https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin" target="_blank">Vue.vscode-typescript-vue-plugin</a></td>
      <td>針對Vue中的 TypeScript 支援</td>
    </tr>
    <tr>
      <td>Prettier - Code formatter</td>
      <td><a href="https://marketplace.visualstudio.com/items?itemName=SimonSiefke.prettier-vscode" target="_blank">SimonSiefke.prettier-vscode</a></td>
      <td>VSCode Prettier 擴展</td>
    </tr>
    <tr>
      <td>ESLint</td>
      <td><a href="https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint" target="_blank">dbaeumer.vscode-eslint</a></td>
      <td>VSCode ESLint 擴展</td>
    </tr>
    <tr>
      <td>indent-rainbow</td>
      <td><a href="https://marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow" target="_blank">oderwat.indent-rainbow</a></td>
      <td>為每個段落顯示不同顏色的縮進</td>
    </tr>
    <tr>
      <td>Auto Close Tag</td>
      <td><a href="https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag" target="_blank">formulahendry.auto-close-tag</a></td>
      <td>自動增加尾標籤</td>
    </tr>
    <tr>
      <td>Auto Rename Tag</td>
      <td><a href="https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag" target="_blank">formulahendry.auto-rename-tag</a></td>
      <td>自動重命名標籤</td>
    </tr>
    <tr>
      <td>GitLens — Git supercharged</td>
      <td><a href="https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens" target="_blank">eamodio.gitlens</a></td>
      <td>探索Git存儲庫，快速了解更改行與代碼塊人員及修改時間</td>
    </tr>
    <tr>
      <td>NPM-Scripts</td>
      <td><a href="https://marketplace.visualstudio.com/items?itemName=traBpUkciP.vscode-npm-scripts" target="_blank">traBpUkciP.vscode-npm-scripts</a></td>
      <td>提供 NPM 腳本介面</td>
    </tr>
    <tr>
      <td>Svg Preview</td>
      <td><a href="https://marketplace.visualstudio.com/items?itemName=SimonSiefke.svg-preview" target="_blank">SimonSiefke.svg-preview</a></td>
      <td>可即時編輯 與 預覽 SVG</td>
    </tr>
    <tr>
      <td>TODO Highlight</td>
      <td><a href="https://marketplace.visualstudio.com/items?itemName=wayou.vscode-todo-highlight" target="_blank">wayou.vscode-todo-highlight</a></td>
      <td>TODO標籤 Highlight設定</td>
    </tr>
    <tr>
      <td>Todo Tree</td>
      <td><a href="https://marketplace.visualstudio.com/items?itemName=Gruntfuggly.todo-tree" target="_blank">Gruntfuggly.todo-tree</a></td>
      <td>快速查找所有TODO等評論標籤</td>
    </tr>
    <tr>
      <td>YAML</td>
      <td><a href="https://marketplace.visualstudio.com/items?itemName=Gruntfuggly.todo-tree" target="_blank">redhat.vscode-yaml</a></td>
      <td>針對YAML語法支持</td>
    </tr>
    <tr>
      <td>Import Cost</td>
      <td><a href="https://marketplace.visualstudio.com/items?itemName=wix.vscode-import-cost" target="_blank">wix.vscode-import-cost</a></td>
      <td>可顯示 import 套件容量大小</td>
    </tr>
    <tr>
      <td>Vue VSCode Snippets</td>
      <td><a href="https://marketplace.visualstudio.com/items?itemName=sdras.vue-vscode-snippets" target="_blank">sdras.vue-vscode-snippets</a></td>
      <td>VSCode Vue 快速生成</td>
    </tr>
  </tbody>
</table>

> 安裝完畢須重啟IDE，使 TypeScript 及 Eslint 設定能正常運行

## 安裝所需套件

```bash
# 在專案目錄下執行
$ npm install
```

## Local Run

```bash
# 在專案目錄下執行
$ npm run dev
```

> 接著瀏覽至 `http://localhost:8200/` (注意 Port 號可能不同，以 console 輸出顯示的為準) 即可看到網站。當原始碼有異動時，網站會自動 Hot Reload。

## 其他

1. 本專案初始架構是透過 [Vite](https://vitejs.dev/) 3.1.8 生成。
2. 可透過 `vue --help` 來獲得更多幫助。
