import type { TypedFlatConfigItem } from '@antfu/eslint-config'
import { interopDefault } from '../utils'

export async function tailwindcss(): Promise<TypedFlatConfigItem[]> {
  const [
    pluginTailwind,
  ] = await Promise.all([
    interopDefault(import('eslint-plugin-tailwindcss')),
  ] as const)

  return [
    {
      name: 'leet/tailwindcss',
      plugins: {
        tailwindcss: pluginTailwind,
      },
      rules: {
        'tailwindcss/classnames-order': 'warn',
      },
    },
  ]
}
