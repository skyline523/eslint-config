import type { TypedFlatConfigItem } from '@antfu/eslint-config'

const baseConfig: TypedFlatConfigItem | TypedFlatConfigItem[] = [
  {
    name: 'leet/base',
    rules: {
      'antfu/top-level-function': 'off',
    },
  },
]

export {
  baseConfig,
}
