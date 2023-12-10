import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,f as t}from"./app-s6aRWxEd.js";const o={},e=t(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">pnpm</span> <span class="token function">install</span> <span class="token parameter variable">-D</span> chart.js echarts flowchart.ts katex @vue/repl reveal.js mermaid mathjax-full @waline/client
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> hopeTheme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress-theme-hope&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> navbar <span class="token keyword">from</span> <span class="token string">&quot;./navbar.js&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> sidebar <span class="token keyword">from</span> <span class="token string">&quot;./sidebar.js&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token constant">MR_HOPE_AVATAR</span> <span class="token operator">=</span>
  <span class="token string">&#39;&lt;svg viewBox=&quot;0 0 1000 1000&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;&gt;&lt;defs&gt;&lt;linearGradient gradientTransform=&quot;matrix(.2478 .78133 -2.54797 .63622 910.35 281.58)&quot; gradientUnits=&quot;userSpaceOnUse&quot; id=&quot;a&quot; x1=&quot;37.827&quot; x2=&quot;159.988&quot; y1=&quot;272.916&quot; y2=&quot;274.63&quot;&gt;&lt;stop offset=&quot;.75&quot; stop-color=&quot;#e33939&quot;/&gt;&lt;stop offset=&quot;.998&quot; stop-color=&quot;#fff&quot;/&gt;&lt;/linearGradient&gt;&lt;linearGradient gradientTransform=&quot;matrix(.13814 .80797 2.55599 -.6032 34.087 494.369)&quot; gradientUnits=&quot;userSpaceOnUse&quot; id=&quot;b&quot; x1=&quot;37.827&quot; x2=&quot;159.988&quot; y1=&quot;272.916&quot; y2=&quot;274.63&quot;&gt;&lt;stop offset=&quot;.815&quot; stop-color=&quot;#e33939&quot;/&gt;&lt;stop offset=&quot;1&quot; stop-color=&quot;#fff&quot;/&gt;&lt;/linearGradient&gt;&lt;/defs&gt;&lt;path d=&quot;M135.637 588.067c-48.891-201.334 74.605-404.162 275.837-453.028 201.233-48.866 403.998 74.734 452.889 276.068 48.892 201.335-74.606 404.162-275.838 453.029-201.233 48.866-403.997-74.734-452.888-276.069Z&quot; fill=&quot;#fde68a&quot; fill-rule=&quot;evenodd&quot; stroke=&quot;#d08819&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;10&quot;/&gt;&lt;path d=&quot;M596.076 197.044c-3.342-56.09 56.897-77.831 89.017-51.361m-410.65 128.819c-22.753-51.377-86.256-43.07-102.659-4.816&quot; fill=&quot;none&quot; stroke=&quot;#6d5e56&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;11&quot;/&gt;&lt;path d=&quot;M833.568 288.02c.05 18.046-12.584 30.699-21.346 32.211-8.762 1.512-17.031-1.099-18.584-1.341 0 0-61.363-6.103-105.627 6.921-44.265 13.026-87.04 47.387-94.637 51.892-6.627 3.928-29.112 7.697-44.462-12.938-15.351-20.636.024-41.526.024-41.526s12.685-18.279 40.771-35.123c28.088-16.844 24.624-13.226 52.326-25.696 15.247-6.865 43.319-14.186 67.429-17.069 25.193-3.011 46.348-1.384 57.673.769 22.165 4.212 28.632 5.93 39.169 9.229 12.451 3.898 27.214 14.516 27.264 32.671Z&quot; fill=&quot;#fff&quot; fill-rule=&quot;evenodd&quot; stroke=&quot;#d08819&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;8&quot;/&gt;&lt;path d=&quot;M558.351 345.632c-3.458-14.237 5.214-28.566 19.367-32.003 14.154-3.437 28.43 5.32 31.887 19.557 3.458 14.238-5.212 28.567-19.367 32.004-14.152 3.437-28.43-5.319-31.887-19.558Z&quot; fill=&quot;#6d5e56&quot; fill-rule=&quot;evenodd&quot; stroke=&quot;#6d5e56&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;6.268&quot;/&gt;&lt;path d=&quot;M220.249 483.416c46.81-11.689 91.323-.467 99.42 25.064 8.098 25.532-23.286 55.706-70.097 67.393-46.811 11.689-91.323.467-99.42-25.064-8.097-25.532 23.286-55.706 70.097-67.393Z&quot; fill=&quot;url(#a)&quot; fill-rule=&quot;evenodd&quot; opacity=&quot;.261&quot;/&gt;&lt;path d=&quot;M739.9 357.226c-46.959 11.082-81.367 41.469-76.853 67.871 4.514 26.402 46.241 38.821 93.198 27.738 46.958-11.081 81.366-41.467 76.853-67.869-4.514-26.403-46.241-38.821-93.198-27.74Z&quot; fill=&quot;url(#b)&quot; fill-rule=&quot;evenodd&quot; opacity=&quot;.261&quot;/&gt;&lt;path d=&quot;M400.934 398.917c-.599 18.034-13.681 30.218-22.494 31.409-8.812 1.192-16.982-1.716-18.526-2.014 0 0-61.109-8.334-105.819 3.07-44.709 11.404-88.696 44.181-96.452 48.406-6.763 3.683-29.372 6.632-43.972-14.546-14.6-21.18 1.519-41.494 1.519-41.494s13.335-17.803 42.013-33.612c28.677-15.809 25.085-12.319 53.222-23.772 15.484-6.304 43.803-12.598 68.005-14.6 25.288-2.093 46.373.305 57.616 2.867 22 5.016 28.401 6.968 38.813 10.649 12.304 4.348 26.677 15.496 26.075 33.637Z&quot; fill=&quot;#fff&quot; fill-rule=&quot;evenodd&quot; stroke=&quot;#d08819&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;8&quot;/&gt;&lt;path d=&quot;M129.05 445.546c-3.458-14.239 5.213-28.566 19.367-32.003 14.153-3.437 28.429 5.318 31.887 19.557 3.458 14.238-5.213 28.566-19.367 32.003-14.153 3.437-28.43-5.318-31.887-19.557Z&quot; fill=&quot;#6d5e56&quot; fill-rule=&quot;evenodd&quot; stroke=&quot;#6d5e56&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;6.268&quot;/&gt;&lt;path d=&quot;M424.381 696.386s64.427 13.646 101.996 5.757C640.653 678.146 690.8 521.894 690.8 521.894&quot; fill=&quot;none&quot; stroke=&quot;#d08819&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;11&quot;/&gt;&lt;path d=&quot;M796.04 666.774s-10.734-44.165-41.405-11.348c-9.681 10.359-10.438 40.604-28.217 81.89-15.942 37.02-39.564 60.728-42.938 76.063-3.374 15.335.451 35.992 26.352 41.537 25.902 5.545 41.967-23.381 41.967-23.381l44.241-164.761Z&quot; fill=&quot;#fde68a&quot; fill-rule=&quot;evenodd&quot; stroke=&quot;#d08819&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;10&quot;/&gt;&lt;path d=&quot;M793.337 664.734c-37.075 160.045-51.73 163.145-40.343 184.845 11.387 21.701 51.417 33.716 71.876-7.313 6.734-13.505-1.31-43.317-1.511-78.077-.307-53.06 16.865-86.111 10.403-98.1-15.332-28.452-39.377-5.875-40.425-1.355Z&quot; fill=&quot;#fde68a&quot; fill-rule=&quot;evenodd&quot; stroke=&quot;#d08819&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;10&quot;/&gt;&lt;/svg&gt;&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">hopeTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  hostname<span class="token operator">:</span> <span class="token string">&quot;https://mister-hope.github.io&quot;</span><span class="token punctuation">,</span>

  author<span class="token operator">:</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">&quot;Mr.Hope&quot;</span><span class="token punctuation">,</span>
    url<span class="token operator">:</span> <span class="token string">&quot;https://mister-hope.com&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  iconAssets<span class="token operator">:</span> <span class="token string">&quot;fontawesome-with-brands&quot;</span><span class="token punctuation">,</span>

  logo<span class="token operator">:</span> <span class="token string">&quot;https://theme-hope-assets.vuejs.press/logo.svg&quot;</span><span class="token punctuation">,</span>

  repo<span class="token operator">:</span> <span class="token string">&quot;vuepress-theme-hope/vuepress-theme-hope&quot;</span><span class="token punctuation">,</span>

  docsDir<span class="token operator">:</span> <span class="token string">&quot;src&quot;</span><span class="token punctuation">,</span>

  <span class="token comment">// navbar</span>
  navbar<span class="token punctuation">,</span>

  <span class="token comment">// sidebar</span>
  sidebar<span class="token punctuation">,</span>

  footer<span class="token operator">:</span> <span class="token string">&quot;默认页脚&quot;</span><span class="token punctuation">,</span>

  displayFooter<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

  blog<span class="token operator">:</span> <span class="token punctuation">{</span>
    description<span class="token operator">:</span> <span class="token string">&quot;一个前端开发者&quot;</span><span class="token punctuation">,</span>
    intro<span class="token operator">:</span> <span class="token string">&quot;/intro.html&quot;</span><span class="token punctuation">,</span>
    medias<span class="token operator">:</span> <span class="token punctuation">{</span>
      Baidu<span class="token operator">:</span> <span class="token string">&quot;https://example.com&quot;</span><span class="token punctuation">,</span>
      BiliBili<span class="token operator">:</span> <span class="token string">&quot;https://example.com&quot;</span><span class="token punctuation">,</span>
      Bitbucket<span class="token operator">:</span> <span class="token string">&quot;https://example.com&quot;</span><span class="token punctuation">,</span>
      Dingding<span class="token operator">:</span> <span class="token string">&quot;https://example.com&quot;</span><span class="token punctuation">,</span>
      Discord<span class="token operator">:</span> <span class="token string">&quot;https://example.com&quot;</span><span class="token punctuation">,</span>
      Dribbble<span class="token operator">:</span> <span class="token string">&quot;https://example.com&quot;</span><span class="token punctuation">,</span>
      Email<span class="token operator">:</span> <span class="token string">&quot;mailto:info@example.com&quot;</span><span class="token punctuation">,</span>
      Evernote<span class="token operator">:</span> <span class="token string">&quot;https://example.com&quot;</span><span class="token punctuation">,</span>
      Facebook<span class="token operator">:</span> <span class="token string">&quot;https://example.com&quot;</span><span class="token punctuation">,</span>
      Flipboard<span class="token operator">:</span> <span class="token string">&quot;https://example.com&quot;</span><span class="token punctuation">,</span>
      Gitee<span class="token operator">:</span> <span class="token string">&quot;https://example.com&quot;</span><span class="token punctuation">,</span>
      GitHub<span class="token operator">:</span> <span class="token string">&quot;https://example.com&quot;</span><span class="token punctuation">,</span>
      Gitlab<span class="token operator">:</span> <span class="token string">&quot;https://example.com&quot;</span><span class="token punctuation">,</span>
      Gmail<span class="token operator">:</span> <span class="token string">&quot;mailto:info@example.com&quot;</span><span class="token punctuation">,</span>
      Instagram<span class="token operator">:</span> <span class="token string">&quot;https://example.com&quot;</span><span class="token punctuation">,</span>
      Lark<span class="token operator">:</span> <span class="token string">&quot;https://example.com&quot;</span><span class="token punctuation">,</span>
      Lines<span class="token operator">:</span> <span class="token string">&quot;https://example.com&quot;</span><span class="token punctuation">,</span>
      Linkedin<span class="token operator">:</span> <span class="token string">&quot;https://example.com&quot;</span><span class="token punctuation">,</span>
      Pinterest<span class="token operator">:</span> <span class="token string">&quot;https://example.com&quot;</span><span class="token punctuation">,</span>
      Pocket<span class="token operator">:</span> <span class="token string">&quot;https://example.com&quot;</span><span class="token punctuation">,</span>
      <span class="token constant">QQ</span><span class="token operator">:</span> <span class="token string">&quot;https://example.com&quot;</span><span class="token punctuation">,</span>
      Qzone<span class="token operator">:</span> <span class="token string">&quot;https://example.com&quot;</span><span class="token punctuation">,</span>
      Reddit<span class="token operator">:</span> <span class="token string">&quot;https://example.com&quot;</span><span class="token punctuation">,</span>
      Rss<span class="token operator">:</span> <span class="token string">&quot;https://example.com&quot;</span><span class="token punctuation">,</span>
      Steam<span class="token operator">:</span> <span class="token string">&quot;https://example.com&quot;</span><span class="token punctuation">,</span>
      Twitter<span class="token operator">:</span> <span class="token string">&quot;https://example.com&quot;</span><span class="token punctuation">,</span>
      Wechat<span class="token operator">:</span> <span class="token string">&quot;https://example.com&quot;</span><span class="token punctuation">,</span>
      Weibo<span class="token operator">:</span> <span class="token string">&quot;https://example.com&quot;</span><span class="token punctuation">,</span>
      Whatsapp<span class="token operator">:</span> <span class="token string">&quot;https://example.com&quot;</span><span class="token punctuation">,</span>
      Youtube<span class="token operator">:</span> <span class="token string">&quot;https://example.com&quot;</span><span class="token punctuation">,</span>
      Zhihu<span class="token operator">:</span> <span class="token string">&quot;https://example.com&quot;</span><span class="token punctuation">,</span>
      MrHope<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;https://mister-hope.com&quot;</span><span class="token punctuation">,</span> <span class="token constant">MR_HOPE_AVATAR</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  encrypt<span class="token operator">:</span> <span class="token punctuation">{</span>
    config<span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&quot;/demo/encrypt.html&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;1234&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// page meta</span>
  metaLocales<span class="token operator">:</span> <span class="token punctuation">{</span>
    editLink<span class="token operator">:</span> <span class="token string">&quot;在 GitHub 上编辑此页&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  plugins<span class="token operator">:</span> <span class="token punctuation">{</span>
    blog<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

    <span class="token comment">// install @waline/client before enabling it</span>
    <span class="token comment">// WARNING: This is a test server for demo only.</span>
    <span class="token comment">// You should create and use your own comment service in production.</span>
    comment<span class="token operator">:</span> <span class="token punctuation">{</span>
      provider<span class="token operator">:</span> <span class="token string">&quot;Waline&quot;</span><span class="token punctuation">,</span>
      serverURL<span class="token operator">:</span> <span class="token string">&quot;https://waline-comment.vuejs.press&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token comment">// all features are enabled for demo, only preserve features you need here</span>
    mdEnhance<span class="token operator">:</span> <span class="token punctuation">{</span>
      align<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      attrs<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

      <span class="token comment">// install chart.js before enabling it</span>
      chart<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

      codetabs<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

      <span class="token comment">// insert component easily</span>
      component<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

      demo<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

      <span class="token comment">// install echarts before enabling it</span>
      echarts<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

      figure<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

      <span class="token comment">// install flowchart.ts before enabling it</span>
      flowchart<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

      <span class="token comment">// gfm requires mathjax-full to provide tex support</span>
      gfm<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

      imgLazyload<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      imgSize<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      include<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

      <span class="token comment">// install katex before enabling it</span>
      katex<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

      <span class="token comment">// install mathjax-full before enabling it</span>
      mathjax<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

      mark<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

      <span class="token comment">// install mermaid before enabling it</span>
      mermaid<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

      playground<span class="token operator">:</span> <span class="token punctuation">{</span>
        presets<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;ts&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>

      <span class="token comment">// install reveal.js before enabling it</span>
      revealJs<span class="token operator">:</span> <span class="token punctuation">{</span>
        plugins<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;highlight&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;math&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;search&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;notes&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;zoom&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>

      stylize<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          matcher<span class="token operator">:</span> <span class="token string">&quot;Recommended&quot;</span><span class="token punctuation">,</span>
          <span class="token function-variable function">replacer</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> tag <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>tag <span class="token operator">===</span> <span class="token string">&quot;em&quot;</span><span class="token punctuation">)</span>
              <span class="token keyword">return</span> <span class="token punctuation">{</span>
                tag<span class="token operator">:</span> <span class="token string">&quot;Badge&quot;</span><span class="token punctuation">,</span>
                attrs<span class="token operator">:</span> <span class="token punctuation">{</span> type<span class="token operator">:</span> <span class="token string">&quot;tip&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
                content<span class="token operator">:</span> <span class="token string">&quot;Recommended&quot;</span><span class="token punctuation">,</span>
              <span class="token punctuation">}</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      sub<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      sup<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      tabs<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      vPre<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

      <span class="token comment">// install @vue/repl before enabling it</span>
      vuePlayground<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token comment">// uncomment these if you want a PWA</span>
    pwa<span class="token operator">:</span> <span class="token punctuation">{</span>
      favicon<span class="token operator">:</span> <span class="token string">&quot;/favicon.ico&quot;</span><span class="token punctuation">,</span>
      cacheHTML<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      cachePic<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      appendBase<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      apple<span class="token operator">:</span> <span class="token punctuation">{</span>
        icon<span class="token operator">:</span> <span class="token string">&quot;/assets/icon/apple-icon-152.png&quot;</span><span class="token punctuation">,</span>
        statusBarColor<span class="token operator">:</span> <span class="token string">&quot;black&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      msTile<span class="token operator">:</span> <span class="token punctuation">{</span>
        image<span class="token operator">:</span> <span class="token string">&quot;/assets/icon/ms-icon-144.png&quot;</span><span class="token punctuation">,</span>
        color<span class="token operator">:</span> <span class="token string">&quot;#ffffff&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      manifest<span class="token operator">:</span> <span class="token punctuation">{</span>
        icons<span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            src<span class="token operator">:</span> <span class="token string">&quot;/assets/icon/chrome-mask-512.png&quot;</span><span class="token punctuation">,</span>
            sizes<span class="token operator">:</span> <span class="token string">&quot;512x512&quot;</span><span class="token punctuation">,</span>
            purpose<span class="token operator">:</span> <span class="token string">&quot;maskable&quot;</span><span class="token punctuation">,</span>
            type<span class="token operator">:</span> <span class="token string">&quot;image/png&quot;</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            src<span class="token operator">:</span> <span class="token string">&quot;/assets/icon/chrome-mask-192.png&quot;</span><span class="token punctuation">,</span>
            sizes<span class="token operator">:</span> <span class="token string">&quot;192x192&quot;</span><span class="token punctuation">,</span>
            purpose<span class="token operator">:</span> <span class="token string">&quot;maskable&quot;</span><span class="token punctuation">,</span>
            type<span class="token operator">:</span> <span class="token string">&quot;image/png&quot;</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            src<span class="token operator">:</span> <span class="token string">&quot;/assets/icon/chrome-512.png&quot;</span><span class="token punctuation">,</span>
            sizes<span class="token operator">:</span> <span class="token string">&quot;512x512&quot;</span><span class="token punctuation">,</span>
            type<span class="token operator">:</span> <span class="token string">&quot;image/png&quot;</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            src<span class="token operator">:</span> <span class="token string">&quot;/assets/icon/chrome-192.png&quot;</span><span class="token punctuation">,</span>
            sizes<span class="token operator">:</span> <span class="token string">&quot;192x192&quot;</span><span class="token punctuation">,</span>
            type<span class="token operator">:</span> <span class="token string">&quot;image/png&quot;</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        shortcuts<span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            name<span class="token operator">:</span> <span class="token string">&quot;Demo&quot;</span><span class="token punctuation">,</span>
            short_name<span class="token operator">:</span> <span class="token string">&quot;Demo&quot;</span><span class="token punctuation">,</span>
            url<span class="token operator">:</span> <span class="token string">&quot;/demo/&quot;</span><span class="token punctuation">,</span>
            icons<span class="token operator">:</span> <span class="token punctuation">[</span>
              <span class="token punctuation">{</span>
                src<span class="token operator">:</span> <span class="token string">&quot;/assets/icon/guide-maskable.png&quot;</span><span class="token punctuation">,</span>
                sizes<span class="token operator">:</span> <span class="token string">&quot;192x192&quot;</span><span class="token punctuation">,</span>
                purpose<span class="token operator">:</span> <span class="token string">&quot;maskable&quot;</span><span class="token punctuation">,</span>
                type<span class="token operator">:</span> <span class="token string">&quot;image/png&quot;</span><span class="token punctuation">,</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),p=[e];function i(l,u){return s(),a("div",null,p)}const d=n(o,[["render",i],["__file","vuepress.html.vue"]]);export{d as default};
