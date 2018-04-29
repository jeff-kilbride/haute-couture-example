# Haute-Couture Example

An example [hapi](https://hapijs.com) app wired with [haute-couture](https://github.com/hapipal/haute-couture) using plugins.

```
$ git clone https://github.com/jeff-kilbride/haute-couture-example.git
Cloning into 'haute-couture-example'...

$ cd haute-couture-example
$ yarn   # (or npm)
$ node index.js
Server running at: http://localhost:3000
Server route table: [
  {
    "method": "get",
    "path": "/hello"
  },
  {
    "method": "get",
    "path": "/v1"
  },
  {
    "method": "get",
    "path": "/"
  },
  {
    "method": "get",
    "path": "/hello/{name}"
  }
]
```
