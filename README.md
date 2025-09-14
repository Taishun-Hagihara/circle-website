# circle-website
/ (プロジェクトルート)

├─ public/                ← そのまま dist に“同名”でコピーされる静的ファイル置き場

│  　　　 ├─ robots.txt

│  　　　 ├─ sitemap.xml

│  　　　 └─ 画像・アイコン・OGP・manifest など（URLは /ファイル名 で参照）

├─ src/                   ← アプリ本体（あなたが主に編集）

│  　　　 ├─ assets/            画像・フォント等（import して使う → ビルド時にハッシュ付きで出力）

│  　　　 ├─ components/        再利用 UI コンポーネント群

│  　　　 ├─ hooks/             カスタムフック

│  　　　 ├─ pages/             画面（ルーティング単位のコンポーネント）

│  　　　 ├─ styles/            共通CSSやモジュールCSS（必要に応じて）

│  　　　 ├─ App.jsx            ルートコンポーネント

│  　　　 ├─ App.css            App 用スタイル

│   　　　├─ index.css          グローバルCSS（リセット/トークンなど）

│   　　　└─ main.jsx           エントリ（App を DOM にマウント）

├─ index.html             ← Vite の HTML テンプレ（メタ/OGP等を編集するならここ）

├─ eslint.config.js       ← Lint 設定（必要に応じて調整）

├─ package.json           ← 依存と npm scripts（編集対象）

├─ package-lock.json      ← 依存のロック（自動生成・手で編集しない）

├─ .gitignore             ← dist / node_modules などを無視

├─ dist/                  ← `vite build` の成果物（自動生成・編集しない）

│  　　　 ├─ index.html         ビルド後のHTML

│ 　　　  ├─ index-xxxx.js      バンドル済み JS（ハッシュ付き）

│  　　　 ├─ <画像等>-xxxx.*    src 由来の import 資産（ハッシュ付き）

│  　　　 └─ robots.txt ほか    public 由来のファイル（ファイル名そのまま）

├─ node_modules/          ← 依存（自動生成・編集しない）

└─ AWSCLIV2.pkg           ← AWS CLI インストーラ（プロジェクト外へ移動/削除推奨）

