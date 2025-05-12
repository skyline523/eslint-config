import type { TypedFlatConfigItem } from '@antfu/eslint-config'

export const baseConfig: TypedFlatConfigItem | TypedFlatConfigItem[] = [
  {
    name: 'leet/base',
    rules: {
      'antfu/top-level-function': 'off',
    },
  },
]
