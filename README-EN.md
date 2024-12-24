
[JA](./README.md)
# nostr-share-component
[![](https://data.jsdelivr.com/v1/package/npm/@konemono/nostr-share-component/badge)](https://www.jsdelivr.com/package/npm/@konemono/nostr-share-component)

### 1. Insert the following code in `<head>`
Replace the version part `{version}` with the appropriate version (e.g. `0.0.10`).

   ```html
   <script src="
   https://cdn.jsdelivr.net/npm/@konemono/nostr-share-component@{version}/dist/nostr-share-component.min.js
   "></script>
   ```

### 2. Place the following code anywhere

```
<nostr-share></nostr-share>
```

- You can specify the strings you want to share in data-url, data-title, and data-text.
- If url, title, and text are not specified, the URL and title of the site where you installed the site will be shared.


Example:
```
<nostr-share data-url="https://example.com" data-title="Example Title" data-text="Example Text"></nostr-share>
```


### 3. Specify the button type (optional)
The following values ​​can be specified for data-type:
- mini
- icon
- If not specified, default will be used.


### 4. Create a custom share button
You can customize the share button by inserting any content into the component.

```
<nostr-share style="" data-url="https://example.com" data-title="Example Title" data-text="Example Text">
    Share on Nostr
</nostr-share>
```
