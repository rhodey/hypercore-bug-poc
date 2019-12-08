# hypercore-bug-poc
POC to reproduce `hypercore.get()` bug where calling `get(index)` with empty index fails without callback error. Note that example hypercore is backed by `random-access-memory` so storage does not persist between runs:

```
$ npm install
$ node index.js --msg howdy --idx 0
> howdy
$ node index.js --msg howdy --idx 1
$ echo "no callback :["
```
