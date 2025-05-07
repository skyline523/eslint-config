import type { Awaitable, OptionsConfig, TypedFlatConfigItem } from '@antfu/eslint-config'
import antfu from '@antfu/eslint-config'
import { antfuOptions } from './antfu'
import { baseConfig } from './base'
import { tailwindConfig } from './tailwind'

function leet(options?: OptionsConfig & TypedFlatConfigItem, ...configs: Awaitable<TypedFlatConfigItem | TypedFlatConfigItem[]>[]) {
  return antfu(
    {
      ...antfuOptions,
      ...options,
    },
    baseConfig,
    ...configs,
  )
}

const tailwind = tailwindConfig

export {
  leet,
  tailwind,
}
