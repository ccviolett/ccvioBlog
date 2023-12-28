<template><div><h1 id="第三章-常用传感器工作原理和测量电路" tabindex="-1"><a class="header-anchor" href="#第三章-常用传感器工作原理和测量电路" aria-hidden="true">#</a> 第三章 常用传感器工作原理和测量电路</h1>
<h2 id="传感的分类" tabindex="-1"><a class="header-anchor" href="#传感的分类" aria-hidden="true">#</a> 传感的分类</h2>
<ul>
<li>按被测物理量进行分类：
<ul>
<li>力传感器</li>
<li>速度传感器</li>
<li>温度传感器</li>
</ul>
</li>
<li>按传感器的工作原理分类
<ul>
<li>结构型传感器</li>
<li>物性型传感器</li>
</ul>
</li>
<li>按传感器与被测对象之间的能量转换关系分类
<ul>
<li>能量转换性</li>
<li>能量控制性</li>
</ul>
</li>
</ul>
<h2 id="电阻式传感器" tabindex="-1"><a class="header-anchor" href="#电阻式传感器" aria-hidden="true">#</a> 电阻式传感器</h2>
<p>工作原理：<span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>R</mi><mo>=</mo><mi>ρ</mi><mfrac><mi>l</mi><mi>A</mi></mfrac></mrow><annotation encoding="application/x-tex">R = \rho \frac{l}{A}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.00773em;">R</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1.2251em;vertical-align:-0.345em;"></span><span class="mord mathnormal">ρ</span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8801em;"><span style="top:-2.655em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">A</span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.394em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.01968em;">l</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.345em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span></span></span></span></p>
<h2 id="电阻应变传感器" tabindex="-1"><a class="header-anchor" href="#电阻应变传感器" aria-hidden="true">#</a> 电阻应变传感器</h2>
<p v-pre class='katex-block'><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mfrac><mrow><mi>d</mi><mi>R</mi></mrow><mi>R</mi></mfrac><mo>=</mo><mo stretchy="false">(</mo><mn>1</mn><mo>+</mo><mn>2</mn><mi>ν</mi><mo>+</mo><msub><mi>π</mi><mn>1</mn></msub><mi>E</mi><mo stretchy="false">)</mo><mi>ε</mi></mrow><annotation encoding="application/x-tex">
\frac{dR}{R} = (1 + 2 \nu + \pi_{1}E) \varepsilon
</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:2.0574em;vertical-align:-0.686em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.3714em;"><span style="top:-2.314em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.00773em;">R</span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.677em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord mathnormal">d</span><span class="mord mathnormal" style="margin-right:0.00773em;">R</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.686em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">(</span><span class="mord">1</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.7278em;vertical-align:-0.0833em;"></span><span class="mord">2</span><span class="mord mathnormal" style="margin-right:0.06366em;">ν</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.03588em;">π</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.0359em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mord mathnormal" style="margin-right:0.05764em;">E</span><span class="mclose">)</span><span class="mord mathnormal">ε</span></span></span></span></span></p>
<p v-pre class='katex-block'><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><msub><mi>S</mi><mi>g</mi></msub><mo>=</mo><mfrac><mrow><mi>d</mi><mi>R</mi><mi mathvariant="normal">/</mi><mi>R</mi></mrow><mrow><mi>d</mi><mi>l</mi><mi mathvariant="normal">/</mi><mi>l</mi></mrow></mfrac><mo>=</mo><mn>1</mn><mo>+</mo><mn>2</mn><mi>ν</mi><mo>+</mo><msub><mi>π</mi><mn>1</mn></msub><mi>E</mi></mrow><annotation encoding="application/x-tex">
S_{g} = \frac{dR / R}{dl / l} = 1 + 2\nu + \pi_{1}E
</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.9694em;vertical-align:-0.2861em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.05764em;">S</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:-0.0576em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.03588em;">g</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2861em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:2.363em;vertical-align:-0.936em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.427em;"><span style="top:-2.314em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord mathnormal">d</span><span class="mord mathnormal" style="margin-right:0.01968em;">l</span><span class="mord">/</span><span class="mord mathnormal" style="margin-right:0.01968em;">l</span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.677em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord mathnormal">d</span><span class="mord mathnormal" style="margin-right:0.00773em;">R</span><span class="mord">/</span><span class="mord mathnormal" style="margin-right:0.00773em;">R</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.936em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.7278em;vertical-align:-0.0833em;"></span><span class="mord">1</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.7278em;vertical-align:-0.0833em;"></span><span class="mord">2</span><span class="mord mathnormal" style="margin-right:0.06366em;">ν</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.8333em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.03588em;">π</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.0359em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mord mathnormal" style="margin-right:0.05764em;">E</span></span></span></span></span></p>
<ul>
<li><span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>ν</mi></mrow><annotation encoding="application/x-tex">\nu</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal" style="margin-right:0.06366em;">ν</span></span></span></span> - 电阻丝材料的泊松比</li>
</ul>
<p><span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>S</mi><mi>g</mi></msub></mrow><annotation encoding="application/x-tex">S_{g}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.9694em;vertical-align:-0.2861em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.05764em;">S</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:-0.0576em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.03588em;">g</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2861em;"><span></span></span></span></span></span></span></span></span></span> 为应变片系数或灵敏度，金属电阻丝的灵敏度常在 <span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mn>1.7</mn><mo>∼</mo><mn>4.0</mn></mrow><annotation encoding="application/x-tex">1.7 \sim 4.0</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">1.7</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">∼</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">4.0</span></span></span></span> 之间。</p>
<ul>
<li>金属：<span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mn>1</mn><mo>+</mo><mn>2</mn><mi>ν</mi></mrow><annotation encoding="application/x-tex">1 + 2\nu</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.7278em;vertical-align:-0.0833em;"></span><span class="mord">1</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">2</span><span class="mord mathnormal" style="margin-right:0.06366em;">ν</span></span></span></span></li>
<li>半导体：<span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>π</mi><mn>1</mn></msub><mi>E</mi></mrow><annotation encoding="application/x-tex">\pi_{1}E</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8333em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.03588em;">π</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.0359em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mord mathnormal" style="margin-right:0.05764em;">E</span></span></span></span></li>
</ul>
<p>半导体应变片缺点：</p>
<ul>
<li>温度灵敏度高</li>
<li>非线性</li>
<li>安装困难</li>
</ul>
<h2 id="电感式传感器" tabindex="-1"><a class="header-anchor" href="#电感式传感器" aria-hidden="true">#</a> 电感式传感器</h2>
<h3 id="分类、工作原理与应用" tabindex="-1"><a class="header-anchor" href="#分类、工作原理与应用" aria-hidden="true">#</a> 分类、工作原理与应用</h3>
<ul>
<li>按转换方式分类
<ul>
<li>自感式
<ul>
<li>电磁感应原理、磁路欧姆定律</li>
</ul>
</li>
<li>互感式</li>
</ul>
</li>
<li>按结构方式分类
<ul>
<li>变气隙式</li>
<li>变截面式</li>
<li>螺管式</li>
</ul>
</li>
</ul>
<p>工作原理</p>
<p>应用</p>
<h2 id="电容式传感器" tabindex="-1"><a class="header-anchor" href="#电容式传感器" aria-hidden="true">#</a> 电容式传感器</h2>
<p>分类</p>
<p>工作原理</p>
<p>应用</p>
<p>（重点）面积变化型，灵敏度为常数</p>
<h2 id="其他传感器" tabindex="-1"><a class="header-anchor" href="#其他传感器" aria-hidden="true">#</a> 其他传感器</h2>
<p>工作原理：压阻效应、压电效应</p>
</div></template>


