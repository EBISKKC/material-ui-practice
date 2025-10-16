# Material UI Practice - Development Rules

このプロジェクトは、Material UIのコンポーネントを学習するための練習サイトです。

## 必須チェック項目

### コード品質チェック

すべてのコード変更後、以下のコマンドを**必ず**実行してください：

```bash
# 1. Lintチェック（必須）
pnpm run lint

# 2. ビルドチェック（必須）
pnpm run build
```

#### ⚠️ 重要：両方のコマンドがエラーなく完了する必要があります

- `pnpm run lint` でエラーが出た場合は、必ず修正してから次に進む
- `pnpm run build` でエラーが出た場合は、必ず修正してから次に進む
- 警告（Warning）は許容されますが、エラーは絶対に残さない

## コーディング規約

### 1. React/JSXのエスケープ

JSX内でアポストロフィ（'）やクォート（"）を使用する場合は、必ずエスケープする：

```tsx
// ❌ Bad
<Typography>This is 'example'</Typography>

// ✅ Good
<Typography>This is &apos;example&apos;</Typography>
```

### 2. TypeScriptの型安全性

- `any` 型の使用は避ける
- Props の型定義を明確にする
- 型推論を活用する

### 3. Material UI のベストプラクティス

- `sx` プロップを使用してスタイリング
- テーマの色を使用（例: `primary.main`, `secondary.light`）
- レスポンシブデザインを考慮（`{ xs: 12, sm: 6, md: 4 }`）

### 4. コンポーネント構造

```tsx
'use client'; // クライアントコンポーネントの場合

import React from 'react';
import { Box, Typography } from '@mui/material';

interface Props {
  // Props の型定義
}

export default function ComponentName({ prop }: Props) {
  // コンポーネントのロジック

  return (
    // JSX
  );
}
```

## プロジェクト構造

```
src/
├── app/
│   ├── layout.tsx          # ルートレイアウト（メタデータ）
│   ├── page.tsx            # メインページ（ルーティング）
│   ├── globals.css         # グローバルスタイル
│   ├── icon.svg            # ファビコン
│   ├── apple-icon.svg      # Apple Touch Icon
│   └── opengraph-image.tsx # OGP画像
├── components/
│   ├── Sidebar.tsx         # デスクトップ用サイドバー
│   ├── BottomNav.tsx       # モバイル用ボトムナビ
│   └── examples/           # 各コンポーネントの例
│       ├── ButtonExample.tsx
│       ├── TableExample.tsx
│       ├── CardExample.tsx
│       ├── TextFieldExample.tsx
│       ├── FormControlsExample.tsx
│       ├── GridExample.tsx
│       ├── ModalExample.tsx
│       ├── DialogExample.tsx
│       ├── SnackbarExample.tsx
│       ├── CSSBasicsExample.tsx
│       └── TailwindBasicsExample.tsx
└── ...
```

## 新しいコンポーネント例ページを追加する手順

1. **ファイル作成**: `src/components/examples/YourComponentExample.tsx` を作成

2. **Sidebarに追加**: `src/components/Sidebar.tsx` の `menuItems` に追加

3. **BottomNavに追加**: `src/components/BottomNav.tsx` の `allMenuItems` に追加

4. **ルーティング追加**: `src/app/page.tsx` の `renderComponent()` に追加

5. **チェック**: 必ず `pnpm run lint` と `pnpm run build` を実行

## レスポンシブデザイン

- **デスクトップ/タブレット（600px以上）**: サイドバー表示
- **モバイル（600px未満）**: ボトムナビゲーション表示

```tsx
// Material UIのブレークポイント
sx={{
  display: { xs: 'none', sm: 'block' }, // smより小さい画面では非表示
  width: { xs: '100%', md: '50%' },     // レスポンシブな幅
}}
```

## Git Workflow

```bash
# 開発の流れ
1. コードを変更
2. pnpm run lint      # Lintチェック
3. pnpm run build     # ビルドチェック
4. git add .
5. git commit -m "メッセージ"
6. git push
```

## トラブルシューティング

### Lint エラーが出た場合

```bash
# エラー内容を確認
pnpm run lint

# よくあるエラー：
# - react/no-unescaped-entities: ' や " をエスケープ
# - @typescript-eslint/no-explicit-any: any型を使わない
# - react-hooks/exhaustive-deps: useEffect依存配列を確認
```

### Build エラーが出た場合

```bash
# エラー内容を確認
pnpm run build

# よくあるエラー：
# - 型エラー: TypeScriptの型定義を確認
# - import エラー: パスやモジュール名を確認
# - 構文エラー: コードの構文を確認
```

## メタデータ

プロジェクトのメタデータは `src/app/layout.tsx` で管理されています：

- タイトル: "Material UI コンポーネント練習"
- ファビコン: Material UIのDashboardアイコン
- OGP画像: 自動生成されるグラデーション画像
- 言語: 日本語（ja）

## パッケージ管理

このプロジェクトでは **pnpm** を使用しています：

```bash
# パッケージのインストール
pnpm install

# パッケージの追加
pnpm add <package-name>

# 開発用パッケージの追加
pnpm add -D <package-name>
```

## まとめ

✅ コードを変更したら必ず `pnpm run lint` と `pnpm run build` を実行
✅ エラーは必ず修正してから次に進む
✅ JSX内のクォートはエスケープする（&apos;, &quot;）
✅ Material UIのベストプラクティスに従う
✅ レスポンシブデザインを考慮する
