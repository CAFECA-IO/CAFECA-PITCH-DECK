# CAFECA-PITCH-DECK
The official presentation deck of CAFECA. It presents our mission to build trustworthy financial infrastructure through AI-powered accounting, continuous auditing, and transparent economic systems for the next generation of digital finance.

## 專案部署方法 (Mac 環境)

以下說明如何在 macOS 環境下進行本地端部署，包含前置環境安裝、取得程式碼以及啟動服務。

### 1. 前置作業：安裝依賴工具 (Homebrew & Node.js & Git)
若您的 Mac 尚未安裝相關開發工具，請依照以下步驟進行安裝：

#### 1.1 安裝 Homebrew
請打開「終端機 (Terminal)」並執行以下指令來安裝（若已安裝可跳過）：
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

#### 1.2 安裝 Git
使用 Homebrew 快速安裝 **Git**：
```bash
brew install git
```

#### 1.3 安裝 nvm (Node Version Manager) 與 Node.js
建議透過 nvm 管理 Node.js 版本。您可以透過腳本安裝 nvm：
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
```
> 安裝完成並依照提示設定 shell 後，請重新載入終端機。

接著使用 nvm 安裝並切換至最新穩定版 Node.js：
```bash
nvm install node
nvm use node
```
> 確認各項工具是否順利運作：`node -v`、`npm -v` 與 `git -v`。

### 2. 取得程式碼 (Git Clone)
使用 Git 將遠端專案程式碼複製到本地端：
```bash
git clone https://github.com/CAFECA-IO/CAFECA-PITCH-DECK.git
cd CAFECA-PITCH-DECK
```

### 3. 設定 Node 環境
若專案根目錄包含 `.nvmrc`，可執行以下指令確保使用正確的 Node.js 版本：
```bash
nvm use
```

### 4. 函式庫安裝
進入專案目錄後，使用 `npm` 安裝專案所需的所有相依套件：
```bash
npm install
```

### 5. 設定環境變數
請於專案根目錄下建立 `.env` 檔案，並依據實際環境變數需求（如 API keys）進行設定。

### 6. 啟動開發伺服器
安裝完成後，使用以下指令啟動本地開發伺服器：
```bash
npm run dev
```
此指令會自動執行語法檢查 (lint) 並啟動 Next.js 服務。啟動成功後，即可打開瀏覽器前往 [http://localhost:3000](http://localhost:3000) 查看專案畫面。

---

## 🤖 與 Antigravity AI 協作開發

專案支援透過 **Antigravity (Google DeepMind 開發)** 進行高度 Agentic (代理式) 的協作開發。您可以直接以自然語言指派任務，例如：
* **「幫我新增一個說明頁面」**：AI 會自行解析專案結構並為您創建或修改對應的路由與組件。
* **「幫我修正所有的 ESLint error 與 warning」**：AI 會自動掃描 codebase、查找並修復 lint 問題。
* **「這個頁面跑出版了，請幫我用 TailwindCSS 修正版面置中」**：AI 將根據專案的 design system 進行設計優化。

**📌 協作小提醒：**
1. **明確描述需求**：提供具體的頁面路徑、想要實現的功能，或您遇到的錯誤訊息以利 AI 判斷。
2. **信任但不盲從 (Trust, but Verify)**：Antigravity 會幫您省下大量查找與撰寫模板程式碼的時間，但提交 PR 前，仍建議您透過 `git diff` 審閱 AI 的修改內容，確保符合您的預期架構。
3. **善用自動化工具 (Tools)**：AI 有能力直接為您執行 `npm install`、`git branch` 等終端機指令，也能讀取您的本機專案檔案，是您開發上非常強力的 Pair-programming 夥伴。
