---
title: ポートフォリオサイト
slug: portfolio-website
projectType: side
status: 公開中
color: sage
desc: Next.js 16、Tailwind v4、マークダウンベースのコンテンツレイヤーで構築したポートフォリオ。3つのロケール（en、pt、ja）のISRとCaddyリバースプロキシをサポート。
outcome: セルフホスティングVPSで本番稼働中。
tags: ["Next.js", "TypeScript", "Tailwind CSS", "Docker", "Caddy"]
order: 1
---

## 概要

あなたが今読んでいるこのサイトです。CMSのオーバーヘッドなしに、高速でメンテナンスしやすく、コンテンツを書きやすいものを構築することが目標でした。

## スタックの決定

**Next.js 16** - App Router、サーバーコンポーネント、ISRのため。`output: standalone`モードでDockerイメージを軽量に保ちます。

**Tailwind v4** - テーマ設定にはCSS カスタムプロパティを使用。ダークモードは`<html>`の`data-theme`属性で実装されています。

**マークダウンコンテンツレイヤー** - 投稿とプロジェクトはYAML frontmatterを持つプレーンな`.md`ファイルです。`gray-matter`がビルド時に解析します。データベース、CMS、追加サービスなし。

**Caddy** - HTTPSの終端とリバースプロキシを担当。Let's Encryptによる自動証明書更新。
