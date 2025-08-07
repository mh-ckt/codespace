import { globalIgnores } from 'eslint/config'
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript'
import pluginVue from 'eslint-plugin-vue'
import pluginVitest from '@vitest/eslint-plugin'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'

// To allow more languages other than `ts` in `.vue` files, uncomment the following lines:
// import { configureVueProject } from '@vue/eslint-config-typescript'
// configureVueProject({ scriptLangs: ['ts', 'tsx'] })
// More info at https://github.com/vuejs/eslint-config-typescript/#advanced-setup

export default defineConfigWithVueTs(
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue}'],
  },

  globalIgnores(['**/dist/**', '**/dist-ssr/**', '**/coverage/**']),

  pluginVue.configs['flat/essential'], // Vue 基础必要规则
  vueTsConfigs.recommended,  // Vue + TypeScript 推荐规则
  {
    ...pluginVitest.configs.recommended,
    files: ['src/**/__tests__/*'],
  },  // Vitest 测试相关规则
  skipFormatting, // 跳过 Prettier 格式化冲突部分
  // 自定义规则，覆盖之前的规则
  {
    rules: {
      'vue/multi-word-component-names': 'off', // 允许单文件组件使用单个单词的名称
      '@typescript-eslint/no-unused-vars': 'warn',
      'vue/block-lang': 'off',
    },
  }
)
