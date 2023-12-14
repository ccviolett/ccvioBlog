<template><div><p>极坐标图是反映频率特性的几何表示。</p>
<p>它是当角频率从 $\omega$ 从 $0$ 逐渐增加到 $+\infty$ 时，矢量 $|G(j\omega)|\cdot e^{j\varphi(\omega)}$ 的端点在 $[G(j\omega)]$ 复平面（频域）上相对应的轨迹。</p>
<p>逆时针为正</p>
<h2 id="典型环节的-nyquist-图" tabindex="-1"><a class="header-anchor" href="#典型环节的-nyquist-图" aria-hidden="true">#</a> 典型环节的 Nyquist 图</h2>
<p><img src="/assets/images/match/subjects/ControlEngineering/74C9F42261202312111138064.png" alt=""></p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>例：延时环节$e^{-3s}$的相频特性$\varphi(\omega) = 3-\omega$。</p>
</div>
<table>
<thead>
<tr>
<th>环节</th>
<th>备注</th>
</tr>
</thead>
<tbody>
<tr>
<td>比例环节</td>
<td>理想的放大环节能够无失真和无滞后地复现输入信号</td>
</tr>
<tr>
<td>积分环节</td>
<td>积分环节对正弦信号有$90^{\circ}$的滞后作用。</td>
</tr>
<tr>
<td>微分环节</td>
<td>微分环节对正弦输入有$90^{\circ}$的超前作用。</td>
</tr>
<tr>
<td>延迟环节</td>
<td>相角$0^{\circ} \sim -\infty^{\circ}$，与实轴和虚轴有无穷多交点</td>
</tr>
</tbody>
</table>
<h3 id="二阶振荡环节的-nyquist-图" tabindex="-1"><a class="header-anchor" href="#二阶振荡环节的-nyquist-图" aria-hidden="true">#</a> 二阶振荡环节的 Nyquist 图</h3>
<p>已知二阶振荡环节的传递函数为$G(s) = \frac{1}{T^{2}s^{2} + 2\zeta Ts + 1}$，则其频率特性为$G(j\omega) = \frac{1}{T^{2}(j\omega)^{2} + 2\zeta T(j\omega) + 1}$，可得：</p>
<p>$$
\begin{align}
|G(j\omega)|  &amp; = \frac{1}{\sqrt{ (1 - T^{2}\omega^{2})^{2} + (2\zeta T\omega)^{2} }} \
\angle G(j\omega)  &amp; = \begin{cases}
-\arctan \frac{2\zeta T\omega}{1 - T^{2}\omega^{2}}  &amp; \omega \leq \frac{1}{T} \
-\left( \pi - \arctan \frac{2\zeta T\omega}{T^{2}\omega^{2} - 1} \right) &amp; \omega &gt; \frac{1}{T}
\end{cases}
\end{align}
$$</p>
<p>其 Nyquist 图如下：</p>
<p><img src="/assets/images/match/subjects/ControlEngineering/A960F913b0202312102310220.png" alt=""></p>
<p>相角$0^{\circ} \sim -180^{\circ}$，与负虚轴有交点。令$\angle G(j\omega) = -90^{\circ}$，得$\omega = \frac{1}{T} = \omega_n$，$G(j \omega_n) = \frac{1}{2\zeta}\angle -90^{\circ}$为负虚轴交点。</p>
<h2 id="绘制乃氏图" tabindex="-1"><a class="header-anchor" href="#绘制乃氏图" aria-hidden="true">#</a> 绘制乃氏图</h2>
<ol>
<li>写出幅频特性和相频特性表达式</li>
<li>分别求出$\omega$趋近与$0$和$\infty$时的频率特性</li>
<li>求乃氏图与实轴的交点，令$Im[G(j\omega)] = 0$或令$\angle G(j\omega) = n \cdot 180^{\circ}$求出</li>
<li>求乃氏图与虚轴的交点，令$Re[G(j\omega)] = 0$或令$\angle G(j\omega) = n \cdot 90^{\circ}$求出</li>
<li>必要时画出乃氏图中间几点</li>
<li>勾画出大致曲线</li>
</ol>
<details class="custom-container details"><summary>例题1（乃氏图的绘制）</summary>
<p>试画出$G(s) = \frac{1}{(s + 1)(2s + 1)}$的乃氏图</p>
<p>解：频率特性$G(j\omega) = \frac{1}{(j\omega + 1)(2 j\omega + 1)}$故</p>
<p>$$
\begin{cases}
|G(j\omega)| &amp; = \frac{1}{\sqrt{ \omega^{2}+1 }\sqrt{ (2\omega)^{2} + 1 }} \
\angle G(j\omega) &amp; = -\arctan(\omega) - \arctan(2\omega)
\end{cases}
$$</p>
<p>当$\omega = 0$时，$G(j 0) = 1\angle 0^{\circ}$；当$\omega \to \infty$时，$G(j\infty) = 0 \angle -180^{\circ}$。</p>
<p>其相角范围从$-0^{\circ} \sim -180^{\circ}$，因此必有与负虚轴的交点</p>
<p>令$\angle G(j\omega) = -\arctan(\omega) - \arctan(2\omega) = -90^{\circ}$，即$\arctan(\omega) + \arctan(2\omega) = 90^{\circ}$</p>
<p>两角互余，正切互为倒数，故两边取正切，得$2\omega = \frac{1}{\omega}$，即$\omega = \sqrt{\frac{1}{2}} = \frac{\sqrt{2}}{2}$</p>
<p><img src="/assets/images/match/subjects/ControlEngineering/f4Ddb6C4b4202312111143703.png" alt=""></p>
</details>
<details class="custom-container details"><summary>例题2（绘制乃氏图）</summary>
<p>画出$G(s) = \frac{1}{s(s + 1)(2s + 1)}$的乃氏图。</p>
<p>解：$G(j\omega) = \frac{1}{j\omega(j\omega + 1)(2j\omega + 1)}$ ，故</p>
<p>$$
\begin{cases}
|G(j\omega)|  &amp; = \frac{1}{\omega \sqrt{ \omega^{2} + 1 }\cdot \sqrt{ (2\omega)^{2} + 1 }} \
\angle G(j\omega)  &amp; = -90^{\circ} - \arctan(\omega) - \arctan(2\omega)
\end{cases}
$$</p>
<p>当$\omega = 0$时，$G(j\omega) = \infty \angle -90^{\circ}$；当$\omega \to \infty$时，$G(j\omega) = 0 \angle -270^{\circ}$</p>
<p>其相角范围从$-90^{\circ}\sim-270^{\circ}$，因此必有与负实轴的交点</p>
<p>令$\angle G(j\omega) = -90^{\circ} - \arctan(\omega) - \arctan(2\omega) = -180^{\circ}$，即$\arctan(2\omega) = 90^{\circ} - \arctan(\omega)$</p>
<p>两角互余，正切互为倒数，两边取正切，得得$2\omega = \frac{1}{\omega}$，即$\omega = \sqrt{\frac{1}{2}} = \frac{\sqrt{2}}{2}$</p>
<p><img src="/assets/images/match/subjects/ControlEngineering/8F7CED5D76202312102310169.png" alt=""></p>
</details>
</div></template>


