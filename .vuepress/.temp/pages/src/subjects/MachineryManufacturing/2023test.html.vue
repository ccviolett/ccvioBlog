<template><div><h2 id="零、速记知识" tabindex="-1"><a class="header-anchor" href="#零、速记知识" aria-hidden="true">#</a> 零、速记知识</h2>
<ul>
<li>位置误差分析中，$\Delta_D = \Delta_B \cos \beta \pm \Delta_Y \cos \gamma$
<ul>
<li>$\Delta_Y$
<ul>
<li>以平面定位：$\Delta_Y = 0$</li>
<li>以外圆表面（V 形块）定位：$\Delta_Y = \frac{T_d}{2\sin\frac{\alpha}{2}}$</li>
<li>以内孔表面定位（心轴）：
<ul>
<li>任意边接触（垂直）：$\Delta_Y = T_D + T_d + X_{min}$</li>
<li>固定边接触（水平）：$\Delta_Y = \frac{1}{2}(T_D + T_d)$</li>
</ul>
</li>
</ul>
</li>
<li>加减号
<ul>
<li>阶梯轴定位取加号</li>
<li>接触点和定位基准在工序基准同侧取减号、异侧取加号</li>
</ul>
</li>
</ul>
</li>
<li>工艺路线
<ul>
<li>外圆表面的加工路线
<ul>
<li>粗车-半精车-精车</li>
<li>粗车-半精车-粗磨-精磨</li>
<li>粗车-半精车-粗磨-精磨-光整加工</li>
<li>粗车-半精车-精车-金刚石车</li>
</ul>
</li>
<li>孔的加工路线
<ul>
<li>钻-扩-铰</li>
<li>钻（粗镗）-半精镗-精镗-浮动镗（金刚镗）</li>
<li>钻（粗镗）-半精镗-粗磨-精磨-研磨（或衍磨）</li>
<li>钻（粗镗）-粗拉-精拉</li>
</ul>
</li>
<li>平面加工路线
<ul>
<li>粗铣-半精铣-精铣-高速精铣</li>
</ul>
</li>
</ul>
</li>
<li>加工阶段：粗加工阶段、半精加工阶段、精加工阶段、精密和超精密加工阶段</li>
<li>工序安排原则：先基准面后其他、先粗后精、先主后次、先面后孔</li>
<li>加工余量：
<ul>
<li>余量公差：$T_Z = Z_{max} - Z_{min} = T_a + T_b$</li>
</ul>
</li>
<li>工艺过程：确定工艺路线、确定加工余量、计算各工序的基本尺寸、确定各工序加工经济精度、按入体原则标注</li>
</ul>
<h2 id="加工误差的统计分析" tabindex="-1"><a class="header-anchor" href="#加工误差的统计分析" aria-hidden="true">#</a> 加工误差的统计分析</h2>
<p>题目类型：计算题</p>
<p>机械加工质量通常包括机械加工后表面几何方向的质量和材料性能方面的质量。</p>
<p>机械加工精度通常包括尺寸精度、形状精度和位置精度三个方面。形状误差限制在位置公差内，位置误差限制在尺寸公差内。</p>
<p>耐磨性并非表面粗糙度值越小越好。</p>
<h3 id="工艺系统刚度" tabindex="-1"><a class="header-anchor" href="#工艺系统刚度" aria-hidden="true">#</a> 工艺系统刚度</h3>
<p>工艺系统在加工误差敏感方向的变形影响最大，工艺系统刚度$K_S$定义为加工误差敏感方向上工艺系统所受外力$F_p$与变形量（或位移量）$\Delta x$之比。</p>
<h3 id="切削力作用点位置变化引起的工件形状误差" tabindex="-1"><a class="header-anchor" href="#切削力作用点位置变化引起的工件形状误差" aria-hidden="true">#</a> 切削力作用点位置变化引起的工件形状误差</h3>
<p>普通车床上加工光轴，计算公式：</p>
<p>$$
K_{S} = \frac{F_{P}}{x_{S}} = \frac{1}{\frac{1}{K_{H}}\left( 1 - \frac{z}{L} \right)^{2} + \frac{1}{K_{T}}\left( \frac{z}{L} \right)^{2} + \frac{1}{K_{B}} + \frac{L^{3}}{3Ej}\left( \frac{z}{L} \right)^{2}\left( 1 - \frac{z}{L} \right)^{2}}
$$</p>
<ul>
<li>$K_H$为机床床头的实测平均刚度</li>
<li>$K_T$为机床尾座的实测平均刚度</li>
<li>$K_B$为机床刀架部件的实测平均刚度</li>
<li>$E$为工件材料弹性模量</li>
<li>$J$为工件界面惯性矩</li>
</ul>
<p><img src="/assets/images/match/subjects/MachineryManufacturing/54c869Afc21701510454743-6d45c8fc-eb68-4106-b449-6d40c8b11a3c.png" alt="截屏2023-12-02 17.47.30.png"></p>
<p>当机床刚度远远大于工件刚度时：</p>
<p>$K_{S} = \frac{1}{\frac{L^{3}}{3Ej}\left( \frac{z}{L} \right)^{2}\left( 1 - \frac{z}{L} \right)^{2}}$</p>
<p>当工艺系统中工件的刚度很高时：</p>
<p>$K_{S} = \frac{1}{\frac{1}{K_{H}}\left( 1-\frac{z}{L} \right)^{2} + \frac{1}{K_{T}}\left( \frac{z}{L} \right)^{2} + \frac{1}{K_{B}}}$</p>
<h3 id="切削力变化产生的加工误差" tabindex="-1"><a class="header-anchor" href="#切削力变化产生的加工误差" aria-hidden="true">#</a> 切削力变化产生的加工误差</h3>
<p>误差复映：由于工艺系统的受力变形，工件加工前的误差$\Delta_B$以类似的形状反映到加工后的工件上去，造成加工后误差$\Delta_w$的现象，用误差复映系数$\varepsilon$表示：</p>
<p>$\varepsilon = \frac{\Delta_{W}}{\Delta_{B}} = \frac{C_{F_{P}}f^{y_{F_{P}}}}{K_{S}}$</p>
<ul>
<li>$C_{F_P}$为径向切削力系数</li>
<li>$f$为进给量</li>
<li>$y_{F_P}$为进给量对切削力的影响指数</li>
<li>$K_S$为工艺系数刚度</li>
</ul>
<p>减少误差复映的主要措施是提高工艺系统的刚度。一般地来说，误差复映系数小于 1，则该工序有一定的误差修复能力。</p>
<p>在加工精度要求较高的情况下，可以通过多道工序或多次走刀加工将工件毛坯的误差逐步减小到零件公差所允许的范围之内。</p>
<ul>
<li>统计分析：详见正态分布</li>
<li>常值系统误差：常值系统误差是公差带中心与工序尺寸中心的差值。</li>
<li>随机误差：随机误差为$6\sigma$</li>
</ul>
<h2 id="定位误差计算" tabindex="-1"><a class="header-anchor" href="#定位误差计算" aria-hidden="true">#</a> 定位误差计算</h2>
<p>题目类型：计算题</p>
<p>定位误差是由于工件在夹具上（或机床上）定位不准确而引起的加工误差，来源主要有两方面：</p>
<ol>
<li>基准位置误差：由于工件的定位表面或夹具上的定位元件制作不准确引起的定位误差</li>
<li>基准不重合误差：工件的工序基准与定位基准不重合而引起的定位误差</li>
</ol>
<p>在采用调整法加工时，工件的定位误差实际上就是工序基准在加工尺寸方向上的最大变动量。</p>
<p>首先要找出加工尺寸的工序基准，然后求加工尺寸方向上的最大变动量。</p>
<p><a href="https://www.bilibili.com/video/BV1Vg4y1q73q/?spm_id_from=333.337.search-card.all.click&amp;vd_source=c12a70ba8ec66c2777dce7b9d388d793" target="_blank" rel="noopener noreferrer">机械制造技术基础_定位误差的分析计算合集_哔哩哔哩_bilibili<ExternalLinkIcon/></a></p>
<h2 id="尺寸链计算" tabindex="-1"><a class="header-anchor" href="#尺寸链计算" aria-hidden="true">#</a> 尺寸链计算</h2>
<p>题目类型：计算题</p>
<p><a href="https://www.bilibili.com/video/BV1mA411e7P7/?spm_id_from=333.999.0.0&amp;vd_source=c12a70ba8ec66c2777dce7b9d388d793" target="_blank" rel="noopener noreferrer">机械制造技术基础-工艺尺寸链计算_哔哩哔哩_bilibili<ExternalLinkIcon/></a></p>
<p><a href="https://www.bilibili.com/video/BV1Ma411j7pU/?spm_id_from=333.788.recommend_more_video.-1&amp;vd_source=c12a70ba8ec66c2777dce7b9d388d793" target="_blank" rel="noopener noreferrer">机械制造技术基础-工艺尺寸链大题_哔哩哔哩_bilibili<ExternalLinkIcon/></a></p>
<h2 id="车刀画图" tabindex="-1"><a class="header-anchor" href="#车刀画图" aria-hidden="true">#</a> 车刀画图</h2>
<p>题目类型：简答题</p>
<h3 id="刀具标注角度" tabindex="-1"><a class="header-anchor" href="#刀具标注角度" aria-hidden="true">#</a> 刀具标注角度</h3>
<p><img src="/assets/images/match/subjects/MachineryManufacturing/61FadCF6A21701431036043-4bb1a80c-f481-4a43-a220-653c1809710d.png" alt="截屏2023-12-01 19.43.50.png"><img src="/assets/images/match/subjects/MachineryManufacturing/a1aa8635a41701432909719-08645523-6151-4f07-b552-c1409a27d42b.png" alt="截屏2023-12-01 20.15.05.png"></p>
<table>
<thead>
<tr>
<th>测量平面</th>
<th>角度</th>
<th>定义</th>
</tr>
</thead>
<tbody>
<tr>
<td>正交平面$P_o$</td>
<td>前角$\gamma_o$</td>
<td>刀具前面与基面之间的夹角</td>
</tr>
<tr>
<td></td>
<td>后角$\alpha_o$</td>
<td>刀具后面与切削平面之间的夹角</td>
</tr>
<tr>
<td></td>
<td>楔角$\beta_o$</td>
<td>刀具前面与主后面之间的夹角</td>
</tr>
<tr>
<td>基面$P_r$</td>
<td>主偏角$\kappa_r$</td>
<td>主切削刃在基面上的投影与假定进给方向之间的夹角</td>
</tr>
<tr>
<td></td>
<td>副偏角$\kappa'_r$</td>
<td>副切削刃在基面上的投影与假定进给反方向之间的夹角</td>
</tr>
<tr>
<td></td>
<td>刀尖角$\varepsilon_r$</td>
<td>主切削刃与副切削刃在基面上投影之间的夹角</td>
</tr>
<tr>
<td>切削平面$P_s$</td>
<td>刃倾角$\lambda_s$</td>
<td>主切削刃与基面之间的夹角，有正负</td>
</tr>
<tr>
<td>副正交平面</td>
<td>副后角$\alpha_o'$</td>
<td>刀具副后面与切削平面之间的夹角</td>
</tr>
<tr>
<td></td>
<td>副前角$\gamma'_o$</td>
<td>刀具前面与基面之间的夹角</td>
</tr>
</tbody>
</table>
<p><a href="https://www.bilibili.com/video/BV1wZ4y1b7uS/?spm_id_from=333.999.0.0&amp;vd_source=c12a70ba8ec66c2777dce7b9d388d793" target="_blank" rel="noopener noreferrer">机械制造技术基础-刀具角度绘制_哔哩哔哩_bilibili<ExternalLinkIcon/></a></p>
<h3 id="相关概念" tabindex="-1"><a class="header-anchor" href="#相关概念" aria-hidden="true">#</a> 相关概念</h3>
<h4 id="切削刀面" tabindex="-1"><a class="header-anchor" href="#切削刀面" aria-hidden="true">#</a> 切削刀面</h4>
<ul>
<li>前刀面：刀具上切屑流过的表面</li>
<li>主后刀面：与工件上过渡表面相对的表面</li>
<li>副后刀面：与工件上已加工表面相对的表面</li>
</ul>
<h4 id="切削刃" tabindex="-1"><a class="header-anchor" href="#切削刃" aria-hidden="true">#</a> 切削刃</h4>
<ul>
<li>主切削刃：前刀面和主后刀面的交线，它承担主要的切削工作。</li>
<li>副切削刃：前刀面和副后刀面的交线，它协同主切削刃完成切削工作，并最终形成已加工表面。</li>
<li>刀尖：主、幅切削刃连接处的那部分切削刃，它可以是小的直线段或圆弧。</li>
</ul>
<h4 id="正交平面" tabindex="-1"><a class="header-anchor" href="#正交平面" aria-hidden="true">#</a> 正交平面</h4>
<ul>
<li>基面 $P_{r}$：通过切削刃上某一选定点，垂直于切削速度的平面。</li>
<li>切削平面 $P_{s}$：通过主切削刃选定点，与切削刃相切并垂直于基面。</li>
<li>正交平面 $P_{0}$：通过切削刃上选定点同时垂直于切削平面和基面的平面。</li>
</ul>
<p><img src="/assets/images/match/subjects/MachineryManufacturing/db9DBed3451701432970273-de111b87-4573-4b10-8c08-25ec41675dca.png" alt="截屏2023-12-01 20.16.06.png"><img src="/assets/images/match/subjects/MachineryManufacturing/059112B5981701432936561-feab1764-1ff6-40ad-a072-7e3cd93e6637.png" alt="截屏2023-12-01 20.15.29.png"></p>
<p><a href="https://www.bilibili.com/video/BV1wZ4y1b7uS/?spm_id_from=333.999.0.0&amp;vd_source=c12a70ba8ec66c2777dce7b9d388d793" target="_blank" rel="noopener noreferrer">机械制造技术基础-刀具角度绘制_哔哩哔哩_bilibili<ExternalLinkIcon/></a></p>
<h2 id="切削变形" tabindex="-1"><a class="header-anchor" href="#切削变形" aria-hidden="true">#</a> 切削变形</h2>
<p>题目类型：简答题</p>
<p>问题：如何表征切削变形，变形的影响因素</p>
<h3 id="三个变形区的分析" tabindex="-1"><a class="header-anchor" href="#三个变形区的分析" aria-hidden="true">#</a> 三个变形区的分析</h3>
<p><img src="/assets/images/match/subjects/MachineryManufacturing/79fBdc1F2c1701432244970-7375b39f-aeae-4dc0-8682-46afca421ae3.png" alt="截屏2023-12-01 20.04.02.png"><img src="/assets/images/match/subjects/MachineryManufacturing/27820161ec1701432423916-be979e15-706a-4b2b-be33-b218d736356f.png" alt="截屏2023-12-01 20.06.07.png"></p>
<p>一般将剪切变形区称为<code v-pre>第 I 变形区</code>，靠刀具前面处的变形区域称为<code v-pre>第II变形区</code>，已加工表面受到切削刃和刀具后面的挤压和摩擦造成的变形层称为<code v-pre>第 III 变形区</code>。</p>
<h3 id="切削变形程度的表示方法" tabindex="-1"><a class="header-anchor" href="#切削变形程度的表示方法" aria-hidden="true">#</a> 切削变形程度的表示方法</h3>
<h4 id="剪应变-varepsilon" tabindex="-1"><a class="header-anchor" href="#剪应变-varepsilon" aria-hidden="true">#</a> 剪应变$\varepsilon$</h4>
<p><img src="/assets/images/match/subjects/MachineryManufacturing/8E57a8E5B21701432810896-a1463937-c9de-43ca-bb4c-bdc0020f4ad0.png" alt="截屏2023-12-01 20.13.26.png"></p>
<p>图示：四边形 OHNM 剪切滑移变为 OGPM</p>
<p>$$
\varepsilon = \frac{\Delta s}{\Delta y} = \cot \phi+\tan(\phi-\gamma_{o}) = \frac{\cos\gamma_{o}}{\sin \phi \cos(\phi-\gamma_{o})}
$$</p>
<h4 id="变形系数-lambda-h" tabindex="-1"><a class="header-anchor" href="#变形系数-lambda-h" aria-hidden="true">#</a> 变形系数$\Lambda_h$</h4>
<p><img src="/assets/images/match/subjects/MachineryManufacturing/c9FB2C6df51701433371749-6be9bb00-1043-4792-85b3-74be027006d5.png" alt="截屏2023-12-01 20.22.48.png"></p>
<p>$\Lambda_{h} = \frac{l_{c}}{l_{ch}} = \frac{h_{ch}}{h_{D}}$</p>
<p>当$\gamma_{o} = 0^{\circ} \sim 30^{\circ}, \Lambda_{h} \geq 1.5$时，变形系数和剪应变相近。当$\gamma_o &lt; 0^{\circ}$或$\Lambda_h &lt; 1.5$时，不宜用$\Lambda_h$表示切削层的变形。实际上，$\varepsilon$主要反映<code v-pre>第 I 变形区</code>的变形，$\Lambda_h$还包含了<code v-pre>第 II 变形区的影响</code>。</p>
<h3 id="切屑类型" tabindex="-1"><a class="header-anchor" href="#切屑类型" aria-hidden="true">#</a> 切屑类型</h3>
<p><img src="/assets/images/match/subjects/MachineryManufacturing/01C1f7FF351701434506424-f6457b03-c4f0-4040-afc8-6b8f31f23d05.png" alt="截屏2023-12-01 20.41.41.png"></p>
<ul>
<li>当加工塑形材料、进给量较小、切削速度较高、刀具前角较大时，往往会得到带状切削。</li>
<li>当加工塑形材料、切削速度较低、进给量（切削厚度）较大时，容易产生节状切屑。</li>
<li>当切削塑性材料、前角较小（或为负前角）、切削速度较低、进给量较大时，易产生粒状切削。</li>
</ul>
<h3 id="影响切屑变形的因素" tabindex="-1"><a class="header-anchor" href="#影响切屑变形的因素" aria-hidden="true">#</a> 影响切屑变形的因素</h3>
<ul>
<li>工件材料：工件材料强度和硬度越大，变形系数$\Lambda_h$越小</li>
</ul>
<p><img src="/assets/images/match/subjects/MachineryManufacturing/C3fC0DcCEB1701433871525-094055ef-0fe6-40e6-aec5-c54e775db576.png" alt="截屏2023-12-01 20.31.06.png"></p>
<ul>
<li>刀具几何参数：前角影响最大，刀具前角$\gamma_o$越大，剪切角$\phi$越大，变形系数$\Lambda_h$就越小</li>
</ul>
<p><img src="/assets/images/match/subjects/MachineryManufacturing/e9EcAaa97d1701433879354-0f121533-1e72-4372-9430-a42a53780411.png" alt="截屏2023-12-01 20.31.15.png"></p>
<ul>
<li>切削用量：
<ul>
<li>切削速度$v_c$：
<ul>
<li>无积屑瘤阶段：切削速度$v_c$越高，变形系数$\Lambda_h$越小。</li>
<li>积屑瘤阶段：通过积屑瘤前角$\gamma_b$（即实际工作前角$\gamma_{oe}$）影响变形系数</li>
</ul>
</li>
<li>进给量$f$：通过摩擦系数影响切屑变形，进给量$f$越大，变形系数$\Lambda_h$越小</li>
<li>背吃刀量$a_p$：对变形系数$\Lambda_h$基本无影响</li>
</ul>
</li>
</ul>
<p><img src="/assets/images/match/subjects/MachineryManufacturing/d54b3248e11701434192157-18dddc5c-f598-434f-920f-9adc9a44e066.png" alt="截屏2023-12-01 20.36.27.png"><img src="/assets/images/match/subjects/MachineryManufacturing/ebDabaFDFF1701434201174-04a667b6-8774-47a3-a8a4-b41f55e872a7.png" alt="截屏2023-12-01 20.36.38.png"></p>
<h2 id="切削力与切削热" tabindex="-1"><a class="header-anchor" href="#切削力与切削热" aria-hidden="true">#</a> 切削力与切削热</h2>
<p>题目类型：简答题</p>
<p>问题：切削力的影响因素，力的来源，力的测量，力的分解、切削热的分解，热的影响因素</p>
<h3 id="切削力" tabindex="-1"><a class="header-anchor" href="#切削力" aria-hidden="true">#</a> 切削力</h3>
<p>金属切削时，刀具切入工件，使被加工材料发生变形成为切屑所需要的力称为切削力。</p>
<ul>
<li>切削力的来源主要有两方面：
<ul>
<li>切屑形成过程中弹性变形及塑性变形产生的抗力</li>
<li>刀具和切屑及工件表面之间的摩擦阻力。</li>
</ul>
</li>
<li>切削力的分解</li>
</ul>
<p><img src="/assets/images/match/subjects/MachineryManufacturing/C9CcFE0DDD1701572412908-a28f39c4-60b2-4859-9ea2-43899eec0349.png" alt="截屏2023-12-03 11.00.03.png"></p>
<ul>
<li>$F_c$主要用于计算刀具强度，设计机床零件，确定机床功率等。</li>
<li>$F_p$是使工件在切削过程中产生振动的主要作用力。</li>
<li>$F_f$主要用于计算进给功率和设计机床进给结构等。</li>
<li>切削力的测量：电阻式测量仪、压电式测力仪</li>
<li>切削力的计算：</li>
</ul>
<p>指数形式的切削力经验公式</p>
<p>$$
\begin{align}
F_{c} &amp; = C_{F_{c}}a_{p}^{X_{F_{c}}}f^{Y_{F_{c}}}v_{c}^{Z_{V_{c}}}K_{F_{c}} \
F_{f} &amp; = C_{F_{f}}a_{p}^{X_{F_{f}}}f^{Y_{F_{f}}}v_{f}^{Z_{V_{f}}}K_{F_{f}} \
F_{p} &amp; = C_{F_{p}}a_{p}^{X_{F_{p}}}f^{Y_{F_{p}}}v_{p}^{Z_{V_{p}}}K_{F_{p}}
\end{align}
$$</p>
<p>$C_{F_{X}}$ 是取决于工件材料和切削条件的系数。</p>
<p>$[X/Y/Z]_{F_X}$是三个分力公式中切削用量的指数</p>
<p>$K_{F_X}$是当实际加工条件与求得经验公式的试验条件不符时，各种因素对各切削分力的修正系数。 |</p>
<p>用切削层单位面积切削力计算切削力</p>
<p>$$
\kappa_{c} = \frac{F_{c}}{A_{D}} = \frac{F_{c}}{a_{p}f} = \frac{F_{c}}{h_{D}b_{D}}
$$</p>
<p>$F_{c} = \kappa_{c}A_{D}K_{F_{e}}$ | $\kappa_c$是切削层单位面积切削力。</p>
<p>$A_D$是切削层面积。</p>
<p>$K_{F_c}$是切削条件修正系数。</p>
<ul>
<li>切削功率：同一瞬间切削刃基点上的主切削力与切削速度的乘积称为切削功率。
<ul>
<li>$P_c = F_cv_c \times 10^{-3}$</li>
<li>$P_e = \frac{P_c}{\eta_c}$</li>
</ul>
</li>
<li>切削力的影响因素</li>
</ul>
<table>
<thead>
<tr>
<th>工件材料</th>
<th>强度</th>
<th>工件材料强度、硬度越高，则剪切屈服强度越大，切削力增大</th>
</tr>
</thead>
<tbody>
<tr>
<td></td>
<td>硬度</td>
<td></td>
</tr>
<tr>
<td>刀具几何参数</td>
<td>前角$\gamma_o$</td>
<td>加工塑性材料时，对切削力的影响最大，前角越大，变形系数越小，切削力降低。加工脆性材料时，影响不显著。</td>
</tr>
<tr>
<td></td>
<td>主偏角$\kappa_r$</td>
<td>对切削力$F_c$的影响较小，对背向力$F_p$和进给力$F_f$的影响较大。主偏角增大，背向力减小，进给力增大。</td>
</tr>
<tr>
<td></td>
<td>刀尖圆弧半径$r_{\varepsilon}$</td>
<td>$r_{\varepsilon}$增大相当于$\kappa_r$减小</td>
</tr>
<tr>
<td></td>
<td>刃倾角$\lambda_s$</td>
<td>刃倾角增大，背向力$F_p$减小，进给力$F_f$增大。</td>
</tr>
<tr>
<td></td>
<td>负倒棱宽度$b$</td>
<td>与进给量$f$之比增大，切削力增大。</td>
</tr>
<tr>
<td>切削用量</td>
<td>背吃刀量</td>
<td>背吃刀量和进给量增大，都会使切削面积增大从而使变形力增大，摩擦力增大，切削力也随之增大</td>
</tr>
<tr>
<td></td>
<td>进给量</td>
<td></td>
</tr>
<tr>
<td></td>
<td>切削速度</td>
<td>在无积屑瘤的切削范围内，随着切削速度的增大，切削力减小。切削脆性材料时，由于形成崩碎切屑，塑形变形小，刀-屑接触面间摩擦小，因此，切削速度对切削力影响不大</td>
</tr>
<tr>
<td>刀具材料</td>
<td></td>
<td></td>
</tr>
<tr>
<td>切削液</td>
<td></td>
<td></td>
</tr>
</tbody>
</table>
<h3 id="切削热" tabindex="-1"><a class="header-anchor" href="#切削热" aria-hidden="true">#</a> 切削热</h3>
<p>切削过程中所消耗的能量几乎百分之百转换为热能，可以近似认为单位时间内产生的切削热$q$等于切削功率$P_c$</p>
<table>
<thead>
<tr>
<th>切削热的产生</th>
<th>切屑与刀具前刀面之间摩擦所消耗的摩擦功</th>
</tr>
</thead>
<tbody>
<tr>
<td></td>
<td>工件与刀具后刀面之间摩擦所消耗的摩擦功</td>
</tr>
<tr>
<td></td>
<td>切削层金属在道具作用下发生弹性变形和塑形变形所消耗的变形功</td>
</tr>
<tr>
<td>切削热的传出</td>
<td>切削热传散出去的途径主要是切屑、工件、刀具和周围介质（如空气、切削液等）</td>
</tr>
</tbody>
</table>
<p><img src="/assets/images/match/subjects/MachineryManufacturing/2d811686791701573056088-d8c4378d-8321-472e-8c49-4b8e77074f06.png" alt="截屏2023-12-03 11.10.52.png"><img src="/assets/images/match/subjects/MachineryManufacturing/Cdea07d1001701573064265-b9ca3042-f307-4c4c-8a1e-f4d8705e902b.png" alt="截屏2023-12-03 11.10.59.png"><img src="/assets/images/match/subjects/MachineryManufacturing/00463C8c8D1701573070942-3a12a096-a1a3-4070-a497-b0faf8b11fcb.png" alt="截屏2023-12-03 11.11.08.png"></p>
<ul>
<li>热的测量：自然热电偶法、人工热电偶法</li>
<li>影响切削温度的因素</li>
</ul>
<table>
<thead>
<tr>
<th>因素类型</th>
<th>影响因素</th>
<th>影响情况</th>
</tr>
</thead>
<tbody>
<tr>
<td>切削用量</td>
<td>切削速度$v_c$</td>
<td>影响最大</td>
</tr>
<tr>
<td></td>
<td>进给量$f$</td>
<td>影响第二大，且随着进给量的增大，切削速度的影响程度减小。</td>
</tr>
<tr>
<td></td>
<td>背吃刀量$a_p$</td>
<td>很小</td>
</tr>
<tr>
<td>刀具几何参数</td>
<td>前角$\gamma_o$</td>
<td>前角增大，切屑变形程度减小，产生的切削热减小，故切削温度下降。</td>
</tr>
<tr>
<td></td>
<td>主偏角$\kappa_r$</td>
<td>主偏角减小，切削宽度增大，散热面积增加，切削温度下降</td>
</tr>
<tr>
<td></td>
<td>刀尖圆弧半径$r_{\varepsilon}$</td>
<td>影响较小</td>
</tr>
<tr>
<td></td>
<td>负倒棱宽度$b$</td>
<td></td>
</tr>
<tr>
<td>工件材料</td>
<td>强度</td>
<td>性能提高，切削热增多，切削温度升高</td>
</tr>
<tr>
<td></td>
<td>硬度</td>
<td></td>
</tr>
<tr>
<td></td>
<td>热导率</td>
<td>热导率越大，传出热量越多，切削温度下降越快。</td>
</tr>
</tbody>
</table>
<p>切削用量经验计算公式：$\theta = c_{\theta}a_{p}^{x_{\theta}}f^{y_{\theta}}v_{c}^{z_{\theta}}k_{\theta}$</p>
<h2 id="摩擦磨损的形式" tabindex="-1"><a class="header-anchor" href="#摩擦磨损的形式" aria-hidden="true">#</a> 摩擦磨损的形式</h2>
<p>题目类型：简答题</p>
<p>磨损是连续性的、逐渐的发展过程；而破损一般是随机的突发破坏。</p>
<h3 id="刀具的磨损形式" tabindex="-1"><a class="header-anchor" href="#刀具的磨损形式" aria-hidden="true">#</a> 刀具的磨损形式</h3>
<p><img src="/assets/images/match/subjects/MachineryManufacturing/Ccf96b4F7e1701493585260-dd3b2f94-a815-4d19-b6ac-dfe34d517014.png" alt="截屏2023-12-02 13.06.18.png"></p>
<h4 id="刀具前面磨损" tabindex="-1"><a class="header-anchor" href="#刀具前面磨损" aria-hidden="true">#</a> 刀具前面磨损</h4>
<p>切削塑形材料时，如果刀具材料耐热、耐磨性较差，切削速度和切削厚度较大，则在刀具前面上形成月牙洼磨损。</p>
<p>它以切削温度最高的位置为中心开始发生，然后逐渐向前后扩展，深度不断增加，当月牙洼发展到其前缘与切削刃之间的棱边变得很窄时，切削刃强度降低，容易导致切削刃破损。</p>
<p>刀具前面月牙洼磨损值以其最大深度 KT 表示。</p>
<p><img src="/assets/images/match/subjects/MachineryManufacturing/9F5BBc09dF1701493995426-88fcc5ce-9d98-437a-a0f8-60cf198a347a.png" alt="截屏2023-12-02 13.12.38.png"></p>
<h4 id="刀具后面磨损" tabindex="-1"><a class="header-anchor" href="#刀具后面磨损" aria-hidden="true">#</a> 刀具后面磨损</h4>
<p>刀具后面与工件表面的接触压力很大，存在着弹性和塑性变形。</p>
<p>刀具后面与工件实际上是小面积接触，磨损就发生在这个接触面上。</p>
<p>在切铸铁和以较小的切削厚度切削塑性材料时，主要发生这种磨损。</p>
<p>刀具后面磨损带往往不均匀：</p>
<ul>
<li>刀尖部分（C区）强度较低，散热条件差，磨损比较严重，其最大值为 VC；</li>
<li>主切削刃靠近工件待加工表面处的刀具后面（N区）上，磨成较深的沟，以 VN 表示；</li>
<li>在刀具后面磨损带的中间部位（B 区），磨损比较均匀，其平均宽度以 VB 表示。</li>
</ul>
<p><img src="/assets/images/match/subjects/MachineryManufacturing/b5BaeE9d781701494256277-9e85d2e3-e131-408f-bf5e-8c8ddd5a309f.png" alt="截屏2023-12-02 13.17.30.png"></p>
<h4 id="边界磨损" tabindex="-1"><a class="header-anchor" href="#边界磨损" aria-hidden="true">#</a> 边界磨损</h4>
<p>N 区磨损常称为边界磨损。边界磨损主要是由于工件在边界处的加工硬化层、硬质点和刀具在边界处的较大应力梯度和温度梯度所造成的。</p>
<h3 id="相关概念-1" tabindex="-1"><a class="header-anchor" href="#相关概念-1" aria-hidden="true">#</a> 相关概念</h3>
<ul>
<li>刀具磨损的原因：磨料磨损、黏结磨损、扩散磨损、化学磨损、热电磨损</li>
<li>刀具的磨损过程：初期磨损阶段、正常磨损阶段、急剧磨损阶段</li>
<li>刀具的磨钝标准：ISO 标准统一规定以 1/2 背吃刀量处的刀具后面上测定的磨损带宽度 VB 作为刀具的磨钝标准。</li>
<li>刀具使用寿命：切削速度$v_c$对刀具使用寿命影响最大，进给量$f$次之，背吃刀量$a_p$最小。这与三者对切削温度的影响顺序完全一致，反映出切削温度对刀具使用寿命有着重要的影响。</li>
</ul>
<h2 id="运动对应的切削三要素" tabindex="-1"><a class="header-anchor" href="#运动对应的切削三要素" aria-hidden="true">#</a> 运动对应的切削三要素</h2>
<p>题目类型：简答题</p>
<h3 id="切削用量三要素" tabindex="-1"><a class="header-anchor" href="#切削用量三要素" aria-hidden="true">#</a> 切削用量三要素</h3>
<h4 id="切削速度-v-c" tabindex="-1"><a class="header-anchor" href="#切削速度-v-c" aria-hidden="true">#</a> 切削速度$v_c$</h4>
<p>主运动速度即为切削速度。</p>
<p>当主运动为旋转运动时，刀具或工件以最大直径处的切削速度来计算：</p>
<p>$v_{c} = \frac{\pi dn}{1000}$</p>
<p>其中$n$为主轴转速（r/s）、$d$为刀具或工具的最大直径（mm）。</p>
<p>若主运动为往复运动时，其平均速度为：</p>
<p>$v_{c} = \frac{2Ln_{r}}{1000}$</p>
<p>其中$L$为往复运动行程长度（mm）、$n_r$为主运动美妙往复次数（str/s）。</p>
<h4 id="进给量-f" tabindex="-1"><a class="header-anchor" href="#进给量-f" aria-hidden="true">#</a> 进给量$f$</h4>
<p>进给量$f$是指工件或刀具每转一周时（或主运动一循环时），两者沿进给方向上相对移动的距离，其单位为 mm/r。</p>
<h4 id="背吃刀量-a-p" tabindex="-1"><a class="header-anchor" href="#背吃刀量-a-p" aria-hidden="true">#</a> 背吃刀量$a_p$</h4>
<p>背吃刀量$a_p$是指主刀刃与工件切削表面接触长度，在主运动方向及进给运动方向所组成的平面的法线方向上测量的值。</p>
<p><img src="/assets/images/match/subjects/MachineryManufacturing/0BC7AD45EA1701437665007-b41a39d6-2e6f-4d24-b7b1-502119c13545.png" alt="截屏2023-12-01 21.34.21.png"></p>
<p>$a_p = \frac{1}{2}(d_w - d_b)$</p>
<p>其中$d_w$为待加工表面直径（mm）、$d_b$为已加工表面直径（mm）。</p>
<h3 id="工件上的加工表面" tabindex="-1"><a class="header-anchor" href="#工件上的加工表面" aria-hidden="true">#</a> 工件上的加工表面</h3>
<ul>
<li>待加工表面：加工时即将被切除的工件表面。</li>
<li>已加工表面：已被切去多余金属而形成的表面。</li>
<li>加工表面（过渡表面）：工件上正在被切削刃切削的表面，它是代加工表面和已加工表面之间的过渡表面。</li>
</ul>
<h3 id="零件表面切削加工的成型运动" tabindex="-1"><a class="header-anchor" href="#零件表面切削加工的成型运动" aria-hidden="true">#</a> 零件表面切削加工的成型运动</h3>
<h4 id="主运动" tabindex="-1"><a class="header-anchor" href="#主运动" aria-hidden="true">#</a> 主运动</h4>
<p>主运动是直接切除工件上的切削层，以形成工件新表面的基本运动。</p>
<p>主运动通常是切削运动中速度最高、消耗功率最多的运动，且主运动只有一个。</p>
<p>主运动的速度以$v_c$表示，称作切削速度。</p>
<h4 id="进给运动" tabindex="-1"><a class="header-anchor" href="#进给运动" aria-hidden="true">#</a> 进给运动</h4>
<p>进给运动是指不断地把切削层投入切削的运动。</p>
<p>它的速度较低。进给运动可能是连续性的运动，也可能是间歇性的。进给运动有时仅有一个，但也可能有几个。</p>
<p>进给运动的速度用进给量$f$或进给速度$v_f$表示。</p>
<h4 id="定位与调整运动" tabindex="-1"><a class="header-anchor" href="#定位与调整运动" aria-hidden="true">#</a> 定位与调整运动</h4>
<p>定位与调整运动是使工件或刀具进入正确加工位置的运动。如调整切削深度、工件分度等。</p>
<h4 id="不同运动之间的关联" tabindex="-1"><a class="header-anchor" href="#不同运动之间的关联" aria-hidden="true">#</a> 不同运动之间的关联</h4>
<p>切削加工的主运动与进给运动往往是同时进行的，因此刀具切削刃上某一点与工件的相对运动应是上述两运动的合成。其合成速度$\vec{v_{e}} = \vec{v_{c}} + \vec{v_{f}}$。</p>
<p>主运动和进给运动是实现切削加工的基本运动，可以由刀具来完成，也可以由工件来完成，还可以由刀具和工件共同来完成。另外，主运动和进给运动可以是直线运动（平动），也可以是回转运动（转动），还可以是平动和转动的复合运动。</p>
<h3 id="切削层截面参数" tabindex="-1"><a class="header-anchor" href="#切削层截面参数" aria-hidden="true">#</a> 切削层截面参数</h3>
<p>在主运动和进给运动作用下，工件上将有一层多余的材料被切除，这层多余的材料称为切削层。切削层在垂直于主运动方向上的断面称为切削层截面。</p>
<p><img src="/assets/images/match/subjects/MachineryManufacturing/dE2AdfF10B1701437682036-1f04ac9a-e8ad-4bb6-b61e-78841dd5de93.png" alt="截屏2023-12-01 21.34.38.png"></p>
<p>进给量$f$ 和背吃刀量$a_p$是切削层界面上的两个工艺参数，进一步分析切削过程还有另外两个物理参数：</p>
<p>切削厚度$h_D = f \sin \kappa_r$</p>
<p>切削宽度$b_D = \frac{a_p}{\sin \kappa_r}$。</p>
<h2 id="工艺过程" tabindex="-1"><a class="header-anchor" href="#工艺过程" aria-hidden="true">#</a> 工艺过程</h2>
<p>题目类型：简答题</p>
<p>问题：什么是工艺过程，工艺过程由若干什么组成，可细分为什么</p>
<h4 id="_1、机械产品生产过程" tabindex="-1"><a class="header-anchor" href="#_1、机械产品生产过程" aria-hidden="true">#</a> 1、机械产品生产过程</h4>
<p>指从原材料开始到成品出厂的全部劳动过程，包括直接生产过程和辅助生产过程。</p>
<ul>
<li>直接生产过程：用于直接改变加工对象形状、尺寸、性能等，包括毛坯的制造、零件的机械加工和热处理、机器的装配、检验、测试和油漆等主要劳动过程，也称为工艺过程。</li>
<li>辅助生产过程：专用工具、夹具、量具和辅具的制造、机器的包装、工件和成品的储存和运输、加工设备的维修，以及动力（电、压缩空气、液压等）供应等。</li>
</ul>
<p>生产过程可以由一个车间或一个工厂完成，也可以由多个工厂协作完成。</p>
<h4 id="_2、机械加工工艺过程的组成" tabindex="-1"><a class="header-anchor" href="#_2、机械加工工艺过程的组成" aria-hidden="true">#</a> 2、机械加工工艺过程的组成</h4>
<ol>
<li>工序——由一个或一组工人在同一台机床或同一个工作地，对一个或同时对几个工件所连续完成得那一部分机械加工工艺过程。判断工序的标准“三不变一连续”</li>
<li>安装——在一道工序中，工件每经一次装夹后所完成的那部分工序。</li>
<li>工位——工件在机床上占据每一个位置所完成的那部分工序。</li>
<li>工步——指在加工表面不变、切削刀具、切削速度和进给量都不变的情况下所连续完成的那部分工序。（在一个工步内，若有几把刀同时加工几个不同表面，称此工步位复合工步）</li>
<li>走刀——同一加工表面加工余量较大，可以分作几次工作进给，每次工作进给所完成的工步称为一次走刀。</li>
</ol>
<h2 id="工序图" tabindex="-1"><a class="header-anchor" href="#工序图" aria-hidden="true">#</a> 工序图</h2>
<p>题目类型：简答题</p>
<p>问题：工序图要表达什么东西</p>
<p>工序图以简洁、直观的方式表明机械加工工序内容，包括各加工表面、定位基准、夹紧力方向、工序尺寸和表面粗糙度等，可直接用于指导加工工作。</p>
<p>工序图绘制要点如下：</p>
<ol>
<li>用细实线绘出反映零件总体特征的外形轮廓、少数特征表面和本工序定位夹紧表面，用粗实线绘出本工序加工表面。主视图取加工位置。</li>
<li>用规定的符号标出定位基准和定位点数（定位点数即定位表面限制的自由度数），夹紧力方向及夹紧力作用点大体位置。</li>
<li>标出全部工序尺寸及偏差、加工表面粗糙度、几何公差及其他技术要求。</li>
</ol>
<h2 id="粗精基准的选择原则" tabindex="-1"><a class="header-anchor" href="#粗精基准的选择原则" aria-hidden="true">#</a> 粗精基准的选择原则</h2>
<h3 id="基本概念" tabindex="-1"><a class="header-anchor" href="#基本概念" aria-hidden="true">#</a> 基本概念</h3>
<ul>
<li>工艺基准：工艺基准是指在工艺过程中所采用的基准，又可分为工序基准、定位基准、测量基准与装配基准。</li>
<li>定位基准：定位基准是加工中用作定位的基准，又可进一步分为粗基准、精基准和附加基准。
<ul>
<li>粗基准：使用未经机械加工表面作为定位基准。显然，机械加工工艺过程中的第一道机械加工工序所使用的定位基准都是粗基准。</li>
<li>精基准：使用经过机械加工表面作为定位基准。除工序 1 中的安装 I 外，其余各工序和安装所使用的定位基准均为精基准。</li>
<li>附加基准：零件上根据机械加工工艺需要而专门设计的定位基准。如用作轴类零件定位的顶尖孔，用作壳体零件定位的工艺孔或工艺凸台等都属于附加基准。</li>
</ul>
</li>
<li>测量基准：在加工中或加工后进行测量时所使用的基准。</li>
<li>装配基准：在装配时，用来确定零件和部件在产品中相对位置所采用的基准。</li>
</ul>
<h3 id="精基准的选择" tabindex="-1"><a class="header-anchor" href="#精基准的选择" aria-hidden="true">#</a> 精基准的选择</h3>
<p>拟定加工路线的第一步是选择定位基准，通常按照先选择精基准，再选择粗基准的次序考虑。</p>
<table>
<thead>
<tr>
<th>原则</th>
<th>解释</th>
</tr>
</thead>
<tbody>
<tr>
<td>“基准重合”</td>
<td>尽量选择加工表面的设计基准作为定位精基准，特别是当位置公差要求很严时，一般不应违反这一原则。</td>
</tr>
<tr>
<td>“基准统一”</td>
<td>若工件以某一组表面作为精基准定位，可以比较方便地在各工序中加工出大多数其他表面，则应尽早地把这一组基准表面加工出来，并达到一定精度，在后续工序中均以其作为精基准加工其他表面。采用统一基准原则常常会带来基准不重合问题。</td>
</tr>
<tr>
<td>“互为基准”</td>
<td>对某些位置精度要求高的表面，可以采用互为基准、反复加工的方式来保证其位置精度。</td>
</tr>
<tr>
<td>“自为基准”</td>
<td>对一些精度要求很高的表面，在精密加工时，为了保证加工精度，要求加工余量小而且均匀，这时可以已经精加工过的表面自身作为定位基准。</td>
</tr>
<tr>
<td>便于装夹</td>
<td>所选的精基准，尤其是主要定位面，应有足够大的面积和精度，以保证定位准确可靠，同时还应使夹紧机构简单，操作方便。</td>
</tr>
</tbody>
</table>
<p>在实际生产中常用的统一基准形式有：</p>
<table>
<thead>
<tr>
<th>零件类型</th>
<th>统一精基准</th>
</tr>
</thead>
<tbody>
<tr>
<td>轴类</td>
<td>两顶尖孔</td>
</tr>
<tr>
<td>箱体类</td>
<td>一面两孔（一个较大的平面和两个距离较远的销孔）</td>
</tr>
<tr>
<td>盘套类</td>
<td>止口面（一端面和一短圆孔）</td>
</tr>
<tr>
<td>套类</td>
<td>一长孔和一止推面</td>
</tr>
</tbody>
</table>
<h3 id="粗基准的选择" tabindex="-1"><a class="header-anchor" href="#粗基准的选择" aria-hidden="true">#</a> 粗基准的选择</h3>
<table>
<thead>
<tr>
<th>原则</th>
<th>解释</th>
</tr>
</thead>
<tbody>
<tr>
<td>保证相互位置要求</td>
<td>如果必须保证工件上加工面与不加工面的相互位置要求，则应以不加工面作为粗基准。</td>
</tr>
<tr>
<td>余量均匀分配</td>
<td>如果首先要求保证工件某重要表面加工余量均匀时，应选择该表面的毛坯面作为粗基准。如车床床身加工中，导轨面是重要表面，以导轨面为粗基准加工底面，再以底面为基准加工导轨面，即可保证其余量均匀。</td>
</tr>
<tr>
<td>便于工件装夹</td>
<td>选择粗基准应使定位准确，夹紧可靠，夹具结构简单，操作方便。为此要求选用的粗基准面尽可能平整、光洁，且有足够大的尺寸。</td>
</tr>
<tr>
<td>粗基准在一个定位方向上只允许使用一次</td>
<td>因为粗基准本身是毛坯表面，精度和表面粗糙度均较差，若工件两次安装中，重复使用统一粗基准，则在两次安装中加工出的各表面之间将会有较大的位置误差。</td>
</tr>
</tbody>
</table>
<h2 id="定位原理" tabindex="-1"><a class="header-anchor" href="#定位原理" aria-hidden="true">#</a> 定位原理</h2>
<h3 id="六点定位原理" tabindex="-1"><a class="header-anchor" href="#六点定位原理" aria-hidden="true">#</a> 六点定位原理</h3>
<p>采用六个定位支承点合理布局，使工件有关定位基面与其接触，每一个定位支承点限制了工件的一个自由度，便可将工件六个自由度完全限制，使工件在空间的位置被唯一地确定，称为六点定位原理。</p>
<p>机械加工中的自由度实际上是指工件在空间位置的不确定性，也称不确定度，特别注意将定位与夹紧的概念区分开来。</p>
<p>六点定位中的“点”的含义是限制自由度，而不是接触点，如将板状工件安放在工作台上限制了三个自由度，是三点定位，实际上接触点可能有很多个。</p>
<p>通常称定位点数最多的表面为主要定位面或支承面。分析多个表面定位情况下个表面限制的自由度时，分清主次定位面再考虑。</p>
<h3 id="完全定位与不完全定位" tabindex="-1"><a class="header-anchor" href="#完全定位与不完全定位" aria-hidden="true">#</a> 完全定位与不完全定位</h3>
<p>工件定位时六个自由度完全被限制，称为完全定位。</p>
<p>工件定位时六个自由度中有一个或一个以上自由度为被（也不需要）限制，称为不完全定位。</p>
<p>工件定位时，需要限制哪些自由度，首先与工序的加工内容及要求有关，其次还与所用的工件定位基面的形状有关。</p>
<h3 id="欠定位与过定位" tabindex="-1"><a class="header-anchor" href="#欠定位与过定位" aria-hidden="true">#</a> 欠定位与过定位</h3>
<p>按照工艺要求应该限制的自由度未被限制的定位，称为欠定位。不被允许。</p>
<p>工件的某一个自由度被定位元件重复限制，称为过定位。过定位是否允许，要是具体情况而定。</p>
<p>形状、尺寸、位置精度均较高，则过定位是允许的。有时过定位不但允许，而且是必要的，因为合理的过定位能增强工艺系统刚度和增强定位稳定性。</p>
<p><a href="https://www.bilibili.com/video/BV1zZ4y1H7C5/?spm_id_from=333.999.0.0&amp;vd_source=c12a70ba8ec66c2777dce7b9d388d793" target="_blank" rel="noopener noreferrer">机械制造技术基础中的自由度判断问题_哔哩哔哩_bilibili<ExternalLinkIcon/></a></p>
</div></template>


