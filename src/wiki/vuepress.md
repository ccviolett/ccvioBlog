---
title: Vuepress
icon: laptop-code
category:
  - 使用指南
---

### VuePress Theme Hope

#### 安装配置

```sh
pnpm install -D chart.js echarts flowchart.ts katex @vue/repl reveal.js mermaid mathjax-full @waline/client
```

在 `src/.vuepress/theme.ts` 中找到类似于 `install XXX before enabling it` 的内容，将其下的注释内容给打开。