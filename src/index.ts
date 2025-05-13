import type { Awaitable, OptionsConfig, TypedFlatConfigItem } from '@antfu/eslint-config'
import type { Linter } from 'eslint'

import type { RuleOptions } from './typegen'
import type { ExtarOptionsConfig } from './types'

import antfu from '@antfu/eslint-config'
import { isPackageExists } from 'local-pkg'
import { baseConfig, reactOverrides, tailwindcss } from './configs'

const ReactPackages = [
  'react',
  'next',
]

export default function leet(
  userOptions: OptionsConfig & ExtarOptionsConfig = {},
  ...userConfigs: Awaitable<TypedFlatConfigItem | TypedFlatConfigItem[]>[]
) {
  const {
    tailwindcss: enableTailwindcss = false,
    react: enableReact = ReactPackages.some(i => isPackageExists(i)),
  } = userOptions

  const options: OptionsConfig & ExtarOptionsConfig = {
    stylistic: true,
    formatters: {
      css: true,
      html: true,
    },
  }

  const configs: Awaitable<TypedFlatConfigItem | TypedFlatConfigItem[]>[] = [
    baseConfig,
  ]

  if (enableTailwindcss) {
    configs.push(tailwindcss())
  }

  if (enableReact) {
    options.react = {
      overrides: getMergedOverrides(reactOverrides, getOverrides(userOptions, 'react')),
    }
  }

  return antfu(
    {
      ...options,
      ...userOptions,
    },
    ...configs,
    ...userConfigs,
  )
}

export type ResolvedOptions<T> = T extends boolean
  ? never
  : NonNullable<T>

export function resolveSubOptions<K extends keyof OptionsConfig>(
  options: OptionsConfig,
  key: K,
): ResolvedOptions<OptionsConfig[K]> {
  return typeof options[key] === 'boolean'
    ? {} as any
    : options[key] || {} as any
}

export function getOverrides<K extends keyof OptionsConfig>(
  options: OptionsConfig,
  key: K,
): Partial<Linter.RulesRecord & RuleOptions> {
  const sub = resolveSubOptions(options, key)
  return {
    ...(options.overrides as any)?.[key],
    ...'overrides' in sub
      ? sub.overrides
      : {},
  }
}

export function getMergedOverrides(
  base: Partial<Linter.RulesRecord & RuleOptions> = {},
  overrides: Partial<Linter.RulesRecord & RuleOptions> = {},
): Partial<Linter.RulesRecord & RuleOptions> {
  return {
    ...base,
    ...overrides,
  }
}
