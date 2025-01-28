あなたは要件定義と技術選定のエキスパートです。以下の形式に従って、システムの要件を定義し、最適な技術スタックを提案してください。

# システム定義セクション

システムの概要:
<system_overview>

1. システムの目的
- 解決する具体的な課題: 製造業の商品開発業務における属人的でアナログな業務プロセスの非効率を改善し、データ活用を通じた生産性向上を実現する。
- 目標とする成果: 商品開発プロセスの効率化と精度向上、外部連携の強化。
- 期待されるビジネスインパクト: ユーザーの開発期間短縮、コスト削減、DXの推進による競争力向上。

2. 主な機能
コア機能：データ統合管理（開発履歴や図面、関連ドキュメントの集中管理）。
- AIベースのデータ分析（類似案件の提案や設計最適化支援）。
- 外部連携機能（他社やサプライヤーとのデータ共有・協業）。

差別化機能：
- 簡単なUI/UXによる現場での使いやすさ。
- 過去データ活用の自動化機能。

付加価値機能：
- セキュリティ強化されたクラウド環境での運用。

3. 提供する価値

- ユーザー：業務の効率化/工数削減、新価値創出のアシスト
- ビジネス：生産性向上、開発リードタイム短縮、QCD向上
- 社会：産業の活性化

4. 実現方法の概要

- PWA によるマルチプラットフォーム対応
- 決済 API と在庫管理システムの連携
- マイクロサービスアーキテクチャによる段階的な機能拡張
- コンテナ化によるスケーラビリティ確保

技術要件：

- フロントエンド：React
- バックエンド：Node.js
- DB：SQL
- インフラ：AWS

</system_overview>

ターゲットユーザー:
<target_users>

- 大手メーカーの商品開発部門
- 特に機械･電子機器メーカー

</target_users>

ビジネス要件（非必須）:
<business_requirements>

- 市場投入時期:1ヶ月後にβ版リリース
- 予算制約: 月 〜5 万円運用
- スケーリング計画: 月2社の契約獲得
- 収益化戦略: 月額課金制のSaaSモデル

  </business_requirements>

# 機能要件セクション

<functional_requirements>
<requirement>
<id>F001</id>
<name>ユーザー認証</name>
<description>メールアドレス、SNS 連携によるログイン</description>
<importance>高</importance>
<mvp>必須</mvp>
<lifecycle>
<create>新規登録</create>
<read>自分のプロフィール確認</read>
<update>パスワード等の変更</update>
<delete>退会機能</delete>
</lifecycle>
<dependencies>なし</dependencies>
</requirement>

<requirement>
<id>F002</id>
<name>野菜カタログ・EC機能</name>
<description>季節野菜を一覧で表示。カートに追加し、オンライン決済</description>
<importance>高</importance>
<mvp>必須</mvp>
<lifecycle>
  <create>商品登録（農家）</create>
  <read>商品一覧・詳細、在庫確認</read>
  <update>在庫の増減</update>
  <delete>商品削除</delete>
</lifecycle>
<dependencies>F001</dependencies>
</requirement>

<requirement>
<id>F003</id>
<name>予約管理機能</name>
<description>農家の空き枠確認、日時を選択して収穫体験を予約</description>
<importance>高</importance>
<mvp>必須</mvp>
<lifecycle>
  <create>予約作成</create>
  <read>予約状況の確認</read>
  <update>日程変更やキャンセル</update>
  <delete>予約枠の削除</delete>
</lifecycle>
<dependencies>F001</dependencies>
</requirement>

<requirement>
<id>F004</id>
<name>レビュー機能</name>
<description>購入した野菜や体験した農家に対する星評価＋コメント</description>
<importance>中</importance>
<mvp>オプション</mvp>
<lifecycle>
  <create>レビュー投稿</create>
  <read>レビュー閲覧</read>
  <update>内容修正</update>
  <delete>レビュー削除</delete>
</lifecycle>
<dependencies>F001, F002, F003</dependencies>
</requirement>

</functional_requirements>

# 非機能要件セクション

<non_functional_requirements>
<performance>

- 同時アクセス 50 程度までは 1 秒以内の応答
- 月 1 万 PV 想定
  </performance>

<security>
- OAuth連携、JWTなど
- 決済情報のトークン化 (Stripe等)
</security>

<scalability>
- 農家・ユーザー数増に対応
- バックエンドSaaS連携を前提
</scalability>

<usability>
- モバイルファースト、直感的UI
- 日本語メイン
</usability>
</non_functional_requirements>

# インテグレーション要件セクション

<integration_requirements>

- 外部システム連携要件
- API 要件
- データ連携要件
  </integration_requirements>

# 技術選定の制約条件

<technical_constraints>

- 既存システムとの互換性要件
- インフラ環境の制約
- 開発チームのスキルセット
  </technical_constraints>

期待する出力:

1. 要件分析サマリー

   - 主要機能の MECE 分析
   - 機能間の依存関係図
   - クリティカルパスの特定

2. 推奨技術スタック

   - フロントエンド選定（Next.js/React 推奨）

     - 選定理由
     - 具体的なメリット
     - 想定される課題と対策

   - バックエンド選定（Next.js 推奨）

     - 選定理由
     - 具体的なメリット
     - 想定される課題と対策

   - データストア選定
     - 選定理由
     - 具体的なメリット
     - 想定される課題と対策

3. 開発ロードマップ

   - フェーズ分け
   - マイルストーン設定
   - リスク管理計画

4. 代替案分析
   - 代替となる技術スタックの比較
   - トレードオフの分析
   - 移行可能性の評価
