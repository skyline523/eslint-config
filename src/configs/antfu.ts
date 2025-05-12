import type { OptionsConfig } from '@antfu/eslint-config'
import { isPackageExists } from 'local-pkg'

const ReactPackages = [
  'react',
  'next',
]

const antfuOptions: OptionsConfig = {
  stylistic: true,
  formatters: {
    css: true,
    html: true,
  },
  react: ReactPackages.some(i => isPackageExists(i)),
}

export {
  antfuOptions,
}
