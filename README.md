# GameHub

GameHub 是一个游戏发现类 Web 应用，基于 RAWG API 提供平台、类型与排序筛选，帮助用户快速找到想玩的游戏。界面强调信息密度与筛选效率。

## 项目亮点

- 按平台与类型筛选游戏
- 支持相关度、人气、评分、发行时间等排序
- 响应式布局，卡片列表浏览体验清晰
- 通过可复用 hooks 完成数据请求与缓存

## 技术栈

- React + TypeScript
- Vite
- Chakra UI
- RAWG API

## 目录结构

- `src/components`：复用 UI 组件
- `src/hooks`：数据请求与状态管理 hooks
- `src/services`：API 客户端与工具函数
- `src/data`：静态数据

## 快速开始

1. 克隆仓库到本地。
2. 运行 `npm install` 安装依赖。
3. 在 https://rawg.io/apidocs 申请 API Key。
4. 将 Key 写入 `src/services/api-client.ts`。
5. 运行 `npm run dev` 启动开发服务器。

## 常用脚本

- `npm run dev` - 启动开发服务器
- `npm run build` - 构建生产包
- `npm run preview` - 本地预览生产包

## 说明

- 该项目采用客户端筛选与排序，交互更流畅。
- RAWG API 有请求频率限制，开发时请使用自己的 Key。
