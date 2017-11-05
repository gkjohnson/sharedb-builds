# sharedb-builds

[![npm version](https://badge.fury.io/js/%40gkjohnson%2Fsharedb-builds.svg)](https://www.npmjs.com/package/@gkjohnson/sharedb-builds)

Repo housing pre-compiled builds of [ShareDB](https://github.com/share/sharedb) and basic [OT Types](https://github.com/ottypes) for the browser using WebPack because by default ShareDB requires WebPack or Browserify to use.

## Use
```html
<!--
  Loads ShareDB onto "window.ShareDB"
  and registers the "text" OT type
-->
<script type="text/javascript" src=".../sharedb-builds/dist/sharedb-client.min.js"></script>
<script type="text/javascript" src=".../sharedb-builds/ot-text.min.js"></script>
<script>
  console.log(window.ShareDB)               // It's here!
  console.log(window.ShareDBypes.map.text)  // This too!
</script>
```

## Building
Run `npm run build` to minify and build every entry file in `/build`

Run `npm run update` to update all packages and create a new build 

## Folder Structure
### /build
Webpack entry files for the OT types and ShareDB client

### /dist
Minified, browser loadable files for each file in `/build`
