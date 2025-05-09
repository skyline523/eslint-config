import type { OptionsConfig } from '@antfu/eslint-config'

const antfuOptions: OptionsConfig = {
  stylistic: true,
  formatters: {
    css: true,
    html: true,
  },
}

export {
  antfuOptions,
}
