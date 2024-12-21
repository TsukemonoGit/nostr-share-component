
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

icon={true}にすると◯サイズのボタン(なくても良い。defaultはfalse)


```
<nostr-share url={url} shareTitle={title} text={text} icon={true} ></nostr-share>
```

中に任意のコンテントをいれると共有ボタンがカスタムできる

```
<nostr-share style="" url={url} shareTitle={title} text={text} icon={true}>Share on Nostr</nostr-share>
```
