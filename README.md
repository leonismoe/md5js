md5
======
This package uses [node Conditional Exports](https://nodejs.org/api/packages.html#packages_conditional_exports), if it's imported under Node.js, it will use `crypto` module to create md5 hash, otherwise use Joseph Myers' pure JavaScript md5 implementation.

For bundlers, webpack supports basic conditional exports since v5-beta18, and Rollup's node resolve plugin supports it since 13.0.0.

## Usage
ES Module
``` js
import md5 from '@leonismoe/md5';
console.log(md5('Hello')); // => "8b1a9953c4611296a827abf8c47804d7"
```

CommonJS
``` js
const md5 = require('@leonismoe/md5');
console.log(md5('Hello')); // => "8b1a9953c4611296a827abf8c47804d7"
```

If directly imports in browser (use `<script>` tag without `type="module"`), it will define a global function named `md5`.

## Contributors
* Joseph Myers (https://www.myersdaily.org/joseph/)
