
[EN](./README-EN.md)
# nostr-share-component
[![](https://data.jsdelivr.com/v1/package/npm/@konemono/nostr-share-component/badge)](https://www.jsdelivr.com/package/npm/@konemono/nostr-share-component)
## 使い方
[Demo](https://tsukemonogit.github.io/nostr-share-component/)
### 1. `<head>`に以下のコードを挿入
   バージョン部分 `{version}` を適切なバージョン（例: `0.0.10`）に置き換えてください。

   ```html
   <script src="
   https://cdn.jsdelivr.net/npm/@konemono/nostr-share-component@{version}/dist/nostr-share-component.min.js
   "></script>
   ```

### 2. 任意の位置に以下のコードを配置

```html
<nostr-share></nostr-share>
```

- data-url、data-title、data-text にそれぞれ共有したい文字列を指定することができます。
- url、title、text が指定されていない場合、設置したサイトのURLとタイトルが共有されます。


例:
```html
<nostr-share data-url="https://example.com" data-title="Example Title" data-text="Example Text"></nostr-share>
```


### 3. ボタンの種類を指定（任意）
data-type に以下の値を指定できます：
- mini
- icon ( icon-size で アイコンのサイズを指定できます。)
- 指定なしの場合は default になります。


### 4. カスタム共有ボタンを作成 
コンポーネント内に任意のコンテンツを挿入することで、共有ボタンをカスタマイズできます。

```html
<nostr-share style="" data-url="https://example.com" data-title="Example Title" data-text="Example Text">
    Share on Nostr
</nostr-share>
```


-----


# クライアント追加ガイド

このプロジェクトでは、リンク共有機能を提供するために複数のクライアントをサポートしています。以下のガイドに従って、新しいクライアントをリストに追加し、プルリクエストを送信してください。

## クライアントリストの形式



[list](src/lib/list.ts) 配列に新しいクライアントを以下の形式で追加します：
```javascript
{
  name: "クライアント名",
  url: "https://example.com/share?text={text}&url={url}&title={title}",
  icon: "https://example.com/favicon.ico",
}
```
## フィールドの説明
- name: クライアントの名前（短くわかりやすいものを推奨）。
- url: クライアントのリンク共有URL。
- {text}, {url}, {title} のパラメータを含めることで動的なリンク生成を可能にします。
- icon: クライアントのファビコンURL（任意ですが、できるだけ提供してください）。


## 注意事項
- 現在のリスト形式は試験的なものであり、今後変更される可能性があります。そのため、追加されたクライアントは将来的に形式変更への対応が必要になる場合があります。
- 新しいクライアントを追加する際は、他のクライアントに影響を与えないよう注意してください。

## サポート
ご不明点がある場合や提案がある場合は、Issue を作成してください。
