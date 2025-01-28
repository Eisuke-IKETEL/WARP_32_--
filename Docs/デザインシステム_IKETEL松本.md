# デザインシステム

## カラーパレット

### プライマリカラー
- Primary: `#007BFF` - メインカラー（青）
- Primary Light: `#66B2FF` - アクセントとして使用
- Primary Dark: `#0056B3` - 強調やホバー時

### セカンダリカラー
- Secondary: `#28A745` - アクセントカラー（緑）
- Secondary Light: `#71D28B` - 補助的なアクセント
- Secondary Dark: `#1C7430` - 強調時

### システムカラー
- Background: `#F8F9FA` - 背景色
- Surface: `#FFFFFF` - カード・コンポーネント背景
- Border: `#DEE2E6` - 境界線
- Error: `#DC3545` - エラー表示
- Success: `#28A745` - 成功表示
- Warning: `#FFC107` - 警告表示
- Info: `#17A2B8` - 情報表示

### テキストカラー
- Text Primary: `#212529` - メインテキスト
- Text Secondary: `#6C757D` - サブテキスト
- Text Disabled: `#ADB5BD` - 無効時のテキスト
- Text On Primary: `#FFFFFF` - プライマリカラー上のテキスト
- Text On Secondary: `#FFFFFF` - セカンダリカラー上のテキスト

## タイポグラフィ

### フォントファミリー

```css
--font-family-base: "Noto Sans JP", sans-serif;
--font-family-heading: "Noto Sans JP", sans-serif;

## フォントサイズ

- **Heading 1 (H1)**: 32px - 太字
- **Heading 2 (H2)**: 24px - 太字
- **Heading 3 (H3)**: 20px - 太字
- **Body Text**: 16px - 通常
- **Small Text**: 14px - 補足情報やラベル

## コンポーネントスタイル

### ボタン
- **Primary Button**: 背景色 `#007BFF`、テキスト色 `#FFFFFF`
- **Secondary Button**: 背景色 `#F8F9FA`、テキスト色 `#007BFF`、境界線 `#007BFF`
- **Disabled Button**: 背景色 `#DEE2E6`、テキスト色 `#6C757D`

### カード
- 背景色: `#FFFFFF`
- 境界線: `#DEE2E6`
- 影: 小さめのシャドウ  
  （例: `box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);`）

### テーブル
- ヘッダー背景色: `#F8F9FA`
- ボーダー: `#DEE2E6`
- テキスト: プライマリカラー `#212529`
```