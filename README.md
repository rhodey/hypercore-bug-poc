# hypercore-bug-poc
POC to reproduce `hypercore.get()` bug where calling `get(index)` with empty index fails without callback error.

```
$ npm install
$ node index.js --msg howdy --idx 0
> howdy
$ node index.js --msg howdy --idx 1
$ echo "no callback :["
```
