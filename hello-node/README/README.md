# 目录

- [简介](##简介)

## 第三节（npm 和 package.json 介绍）{##3}

### npm {###3-1}

介绍：npm（全称 Node Package Manager）是 JavaScript 的一个包管理器，主要用于 Node.js 的包管理，用于管理项目中的依赖包的安装、升级、移除等。

**npm 常见包命令**

1. `npm init`：初始化一个新的 npm 项目，创建 package.json 文件。
2. `npm install`：安装一个包或一组包，并且会在当前目录存放一个 node_modules。
3. `npm install <package-name>`：安装指定的包。
4. `npm install <package-name> --save`：安装指定的包，并将其添加到 package.json 文件中的依赖列表中。
5. `npm install <package-name> --save-dev`：安装指定的包，并将其添加到 package.json 文件中的开发依赖列表中。
6. `npm install -g <package-name>`：全局安装指定的包。
7. `npm update <package-name>`：更新指定的包。
8. `npm uninstall <package-name>`：卸载指定的包。
9. `npm run <script-name>`：执行 package.json 文件中定义的脚本命令。
10. `npm search <keyword>`：搜索 npm 库中包含指定关键字的包。
11. `npm info <package-name>`：查看指定包的详细信息。
12. `npm list`：列出当前项目中安装的所有包。

### package.json {###3-2}

介绍：package.json 文件是项目中重要的配置文件，包含了项目的元数据信息，如项目名称、版本、作者、许可证信息以及项目所依赖的所有软件包及其版本信息。开发人员可以通过 npm init 命令生成 package.json 文件。

**package.json 文件字段说明**

1. name: 项目的名称。这个名称必须是唯一的，不能与 npm 上的其他包名重复。
2. version: 项目的版本号，遵循语义化版本控制（Semantic Versioning）的规范。
3. description: 项目的简短描述。
4. main: 项目的主入口文件，即 Node.js 应用启动时应该执行的 JavaScript 文件。
5. scripts: 定义了一系列脚本命令，这些命令可以在项目的生命周期中运行。例如，start 脚本通常用于启动应用，test 脚本用于运行测试。
6. keywords: 与项目相关的关键字数组，有助于在 npm 上搜索到项目。
7. author: 项目的作者信息。
8. license: 项目的许可证类型。
9. dependencies: 项目运行所依赖的包列表。npm 会根据这个列表安装这些包。
10. devDependencies: 项目开发时依赖的包列表，这些包在生产环境中可能不需要。

### package-lock.json {###3-3}

此处有争议---- package-lock.json 和 package.json 的区别？ 版本号中的～号和^的区别？
