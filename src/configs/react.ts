import type { Linter } from 'eslint'
import type { RuleOptions } from 'src/typegen'

export const reactOverrides: Partial<Linter.RulesRecord & RuleOptions> = {
  'react/no-array-index-key': 'off',
}
