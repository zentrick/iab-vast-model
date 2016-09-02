# iab-vast-model

[![npm](https://img.shields.io/npm/v/iab-vast-model.svg)](https://www.npmjs.com/package/iab-vast-model) [![Dependencies](https://img.shields.io/david/zentrick/iab-vast-model.svg)](https://david-dm.org/zentrick/iab-vast-model) [![Build Status](https://img.shields.io/travis/zentrick/iab-vast-model/master.svg)](https://travis-ci.org/zentrick/iab-vast-model) [![Coverage Status](https://img.shields.io/coveralls/zentrick/iab-vast-model/master.svg)](https://coveralls.io/r/zentrick/iab-vast-model) [![JavaScript Standard Style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](https://github.com/feross/standard)

Base classes for IAB VAST handling. Supports the full IAB VAST 3.0 specification.

To parse a tag into model objects, use
[iab-vast-parser](https://www.npmjs.com/package/iab-vast-parser).
To load and parse a chain of VAST files, use
[iab-vast-loader](https://www.npmjs.com/package/iab-vast-loader).

## Usage

```javascript
import { VAST } from 'iab-vast-model'

const vast = new VAST()
// ... Do your thing ...
```

## API

Automatically generated API documentation can be found on
[GitHub Pages](https://zentrick.github.io/iab-vast-model/). You can also
open `docs/index.html` in a Web browser. Running `gulp doc` will (re)build the
`docs` directory.

Additionally, feel free to look at the source code. We recommend starting with
`src/index.js`, which should export all the classes you need.

## TODO

The main thing that's missing is **validation**. There are a few steps to this:

- Use [validator](https://www.npmjs.com/package/validator) to check all values
  passed to setters.
- Verify that every required property is set.
- Write tests for the validation code.
- Enclose all validation code in marker comments (e.g., `// <strict>`). This
  will allow us to strip it out and produce a lightweight "loose" build without
  any validation, making tags load faster.

PRs welcome!

## Maintainer

[Tim De Pauw](https://github.com/timdp)

## License

MIT
