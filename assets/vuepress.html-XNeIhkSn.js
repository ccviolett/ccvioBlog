import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as i,o as t,c as r,d as l,w as a,f as d,a as e}from"./app-QWOR8edQ.js";const c={},o=d(`<h3 id="坑" tabindex="-1"><a class="header-anchor" href="#坑" aria-hidden="true">#</a> 坑</h3><h4 id="build" tabindex="-1"><a class="header-anchor" href="#build" aria-hidden="true">#</a> Build</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable">NODE_OPTIONS</span><span class="token operator">=</span>--max_old_space_size<span class="token operator">=</span><span class="token number">4096</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="vuepress-theme-hope" tabindex="-1"><a class="header-anchor" href="#vuepress-theme-hope" aria-hidden="true">#</a> VuePress Theme Hope</h3><h4 id="安装配置" tabindex="-1"><a class="header-anchor" href="#安装配置" aria-hidden="true">#</a> 安装配置</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">pnpm</span> <span class="token function">install</span> <span class="token parameter variable">-D</span> chart.js echarts flowchart.ts katex @vue/repl reveal.js mermaid mathjax-full @waline/client
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在 <code>src/.vuepress/theme.ts</code> 中找到类似于 <code>install XXX before enabling it</code> 的内容，将其下的注释内容给打开。</p><div class="hint-container important"><p class="hint-container-title">重要</p><p>重要容器。</p></div><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>信息容器。</p></div><div class="hint-container note"><p class="hint-container-title">注</p><p>注释容器。</p></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>提示容器</p></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p>警告容器</p></div><div class="hint-container caution"><p class="hint-container-title">警告</p><p>危险容器</p></div><details class="hint-container details"><summary>详情</summary><p>详情容器</p></details>`,14),p=e("p",null,"a",-1),h=e("div",{class:"language-markdown line-numbers-mode","data-ext":"md"},[e("pre",{class:"language-markdown"},[e("code",null,`a
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1);function u(m,v){const s=i("MdDemo");return t(),r("div",null,[o,l(s,{title:"自定义标题的容器",id:"md-demo-52"},{default:a(()=>[p]),code:a(()=>[h]),_:1})])}const f=n(c,[["render",u],["__file","vuepress.html.vue"]]);export{f as default};
