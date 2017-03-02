# babel-preset-prometheusresearch

A babel preset for Prometheus Research projects.

## Install

```sh
% npm install --save-dev babel-preset-prometheusresearch
```

## Usage

### Via `package.json` (Recommended)

```json
{
  ...
  "babel": {
    "presets": ["prometheusresearch"]
  },
  ...
}
```

### Via `.babelrc`

```json
{
  "presets": ["prometheusresearch"]
}
```

### Via CLI

```sh
$ babel script.js --presets prometheusresearch
```

### Via Node API

```javascript
require("babel-core").transform("code", {
  presets: ["prometheusresearch"]
});
```
