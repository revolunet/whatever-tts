# whatever-tts

[![npm package][npm-badge]][npm]

return MP3 audio as a stream from given text

currently use google translate backend

## Usage

This example write the audio file to `out.mp3`

```js
var tts = require('whatever-tts');
var outFile = require('fs').createWriteStream('./out.mp3');

tts("hello world", { lang: "en" }).then(stream => stream.pipe(outFile)).catch(console.log)

```

[npm-badge]: https://img.shields.io/npm/v/whatever-tts.png?style=flat-square
[npm]: https://www.npmjs.org/package/whatever-tts