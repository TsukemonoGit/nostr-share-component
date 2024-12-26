
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

```html
<nostr-share></nostr-share>
```

- You can specify the strings you want to share in data-url, data-title, and data-text.
- If url, title, and text are not specified, the URL and title of the site where you installed the site will be shared.


Example:
```html
<nostr-share data-url="https://example.com" data-title="Example Title" data-text="Example Text"></nostr-share>
```


### 3. Specify the button type (optional)
The following values ​​can be specified for data-type:
- mini
- icon
- If not specified, default will be used.


### 4. Create a custom share button
You can customize the share button by inserting any content into the component.

```html
<nostr-share style="" data-url="https://example.com" data-title="Example Title" data-text="Example Text">
    Share on Nostr
</nostr-share>
```


# Client Adding Guide

This project supports multiple clients to provide link sharing functionality. Please follow the guide below to add new clients to your list and submit a pull request.

## Client List Format

Add new clients to the [list](src/lib/list.ts) array in the following format:
```javascript
{
name: "Client name",
url: "https://example.com/share?text={text}&url={url}&title={title}",
icon: "https://example.com/favicon.ico",
}
```
## Field Description
- name: Name of the client (short and descriptive is recommended).
- url: Link sharing URL of the client.
- Enable dynamic link generation by including {text}, {url}, {title} parameters.
- icon: Favicon URL of the client (optional, but please provide it if possible).

## Notes
- The current list format is experimental and may change in the future. Therefore, added clients may need to support format changes in the future.
- Be careful when adding new clients so you don't affect other clients.

## Support
If you have any questions or suggestions, please create an issue.