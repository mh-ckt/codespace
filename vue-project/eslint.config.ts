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
  // ✅ 新增：自定义规则，用于控制 Vue 模板中属性换行
  {
    files: ['**/*.vue'],                   // 仅对 .vue 文件生效
    // rules: {
    //   'vue/max-attributes-per-line': [
    //     'error',                            // 设为 error，违反时会报错
    //     {
    //       singleline: 1,                     // 单行模式下，最多允许 1 个属性，多了就换行
    //       multiline: 1,                      // 多行模式下，每行也只允许 1 个属性
    //       allowFirstLine: false,             // 不允许把所有属性放在标签起始的同一行
    //     },
    //   ],
    // },
    // rules: {
    //   'vue/max-attributes-per-line': [
    //     'error',
    //     { singleline: 1, multiline: 1 },
    //   ],
    //   'vue/html-closing-bracket-newline': [
    //     'error',
    //     { singleline: 'never', multiline: 'always' },
    //   ],
    //   'vue/html-closing-bracket-spacing': [
    //     'error',
    //     { startTag: 'never', endTag: 'never', selfClosingTag: 'always' },
    //   ],
    // },
  }
)
