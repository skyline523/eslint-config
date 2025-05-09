import type { Awaitable, OptionsConfig, TypedFlatConfigItem } from '@antfu/eslint-config'
import type { ExtarOptionsConfig } from './types'

import antfu from '@antfu/eslint-config'

import { antfuOptions } from './configs/antfu'
import { baseConfig } from './configs/base'
import { tailwindcss } from './configs/tailwindcss'

function leet(
  options: OptionsConfig & ExtarOptionsConfig = {},
  ...userConfigs: Awaitable<TypedFlatConfigItem | TypedFlatConfigItem[]>[]
) {
  const {
    tailwindcss: enabledTailwindcss = false,
  } = options

  const configs: Awaitable<TypedFlatConfigItem | TypedFlatConfigItem[]>[] = [
    baseConfig,
  ]

  if (enabledTailwindcss) {
    configs.push(tailwindcss())
  }

  return antfu(
    {
      ...antfuOptions,
      ...options,
    },
    ...configs,
    ...userConfigs,
  )
}

export default leet
