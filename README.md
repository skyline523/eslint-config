# @leet11/eslint-config

本配置基于 [@antfu/eslint-config](https://github.com/antfu/eslint-config) 二次开发。

添加了一下功能：

- 对 `tailwindcss` 的支持
- 自动识别 `React` 项目，无需手动开启

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

ESlint config for Leet.

## 使用

```bash
pnpm i -D eslint @leet11/eslint-config
```

在项目根目录创建`eslint.config.mjs`：

```js
// eslint.config.mjs
import leet from '@leet11/eslint-config'

export default leet()
```

如果你仍然使用旧的 eslintrc 配置，则可以使用 `@eslint/eslintrc` 将其转换为扁平配置。

```js
// eslint.config.mjs
import antfu from '@antfu/eslint-config'
import { FlatCompat } from '@eslint/eslintrc'

const compat = new FlatCompat()

export default antfu(
  {
    ignores: [],
  },

  // Legacy config
  ...compat.config({
    extends: [
      'eslint:recommended',
      // Other extends...
    ],
  })

  // Other flat configs...
)
```

### 在package.json添加script:

```json
{
  "scripts": {
    "lint": "eslint",
    "lint:fix": "eslint --fix"
  }
}
```

## IDE Support

<details>
<summary>
VS Code:
</summary>

```json
{
  // Disable the default formatter, use eslint instead
  "prettier.enable": false,
  "editor.formatOnSave": false,

  // Auto fix
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit",
    "source.organizeImports": "never"
  },

  // Silent the stylistic rules in you IDE, but still auto fix them
  "eslint.rules.customizations": [
    { "rule": "style/*", "severity": "off", "fixable": true },
    { "rule": "format/*", "severity": "off", "fixable": true },
    { "rule": "*-indent", "severity": "off", "fixable": true },
    { "rule": "*-spacing", "severity": "off", "fixable": true },
    { "rule": "*-spaces", "severity": "off", "fixable": true },
    { "rule": "*-order", "severity": "off", "fixable": true },
    { "rule": "*-dangle", "severity": "off", "fixable": true },
    { "rule": "*-newline", "severity": "off", "fixable": true },
    { "rule": "*quotes", "severity": "off", "fixable": true },
    { "rule": "*semi", "severity": "off", "fixable": true }
  ],

  // Enable eslint for all supported languages
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
    "vue",
    "html",
    "markdown",
    "json",
    "jsonc",
    "yaml",
    "toml",
    "xml",
    "gql",
    "graphql",
    "astro",
    "svelte",
    "css",
    "less",
    "scss",
    "pcss",
    "postcss"
  ]
}
```

</details>

## 自定义化

自定义可以完全参考 [@antfu/eslint-config](https://github.com/antfu/eslint-config/blob/main/README.md)

### tailwindcss

支持 `tailwindcss` 需要打开配置:

```js
// eslint.config.js
import leet from '@leet11/eslint-config'

export default leet({
  tailwindcss: true,
})
```

运行npx eslint应提示您安装所需的依赖项，否则，您可以手动安装它们：

```bash
pnpm i -D eslint-plugin-tailwindcss
```

## 其他

已有项目更换eslint时，保存代码可能会出现一直在保存代码的情况。

可以按照以下步骤更换配置：

1. 在eslint.config.js中使用，重启
2. 再安装@leet11/eslint-config，重启
3. 应该保存就正常了

我碰到这个情况是这样解决的。。。

## License

[MIT](./LICENSE) License © [Leet](https://github.com/skyline523)

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/@leet11/eslint-config?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmjs.com/package/@leet11/eslint-config
[npm-downloads-src]: https://img.shields.io/npm/dm/@leet11/eslint-config?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmjs.com/package/@leet11/eslint-config
[bundle-src]: https://img.shields.io/bundlephobia/minzip/@leet11/eslint-config?style=flat&colorA=080f12&colorB=1fa669&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=@leet11/eslint-config
[license-src]: https://img.shields.io/github/license/antfu/@leet11/eslint-config.svg?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/antfu/@leet11/eslint-config/blob/main/LICENSE
[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-080f12?style=flat&colorA=080f12&colorB=1fa669
[jsdocs-href]: https://www.jsdocs.io/package/@leet11/eslint-config
