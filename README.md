
# nostr-share-component
[![](https://data.jsdelivr.com/v1/package/npm/@konemono/nostr-share-component/badge)](https://www.jsdelivr.com/package/npm/@konemono/nostr-share-component)

``<head>``に以下のコードを各。{version}の部分は適切なバージョンに変更してください（e.g. 0.0.10）

```
<script src="
https://cdn.jsdelivr.net/npm/@konemono/nostr-share-component@{version}/dist/nostr-share-component.min.js
"></script>
```

任意の位置に以下のコードを配置

{url}{title}{text}はそれぞれ共有したい文字列に変換
（なくても良い）

urlもtitleもtextもない場合は設置したサイトのURLとtitleが共有されます。


```
<nostr-share data-url={url} data-title={title} data-text={text} data-type={buttonType} ></nostr-share>
```

buttonType は mini か icon （指定なしだと default）

中に任意のコンテントをいれると共有ボタンがカスタムできる

```
<nostr-share style="" data-url={url} data-title={title} data-text={text} >Share on Nostr</nostr-share>
```
