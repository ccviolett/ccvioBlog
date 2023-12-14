<template><div><h2 id="系统稳定性" tabindex="-1"><a class="header-anchor" href="#系统稳定性" aria-hidden="true">#</a> 系统稳定性</h2>
<p>一个系统收到扰动，偏离了原来的平衡状态，而当扰动取消后，这个系统又能够逐渐恢复到原来的起始平衡状态，则称系统是稳定的。否则，称这个系统是不稳定的。</p>
<p>稳定性是系统本身的固有属性，与输入无关。</p>
<p>系统稳定的充要条件是系统闭环特征方程式的根全部具有负实部，即闭环传递函数的极点全部具有负实部（位于$[s]$平面的左半面）。只与位置有关，与实际大小无关。</p>
<h2 id="劳斯判据" tabindex="-1"><a class="header-anchor" href="#劳斯判据" aria-hidden="true">#</a> 劳斯判据</h2>
<p>已知闭环特征方程式为$D(s) = a_{0}s^{n} + a_{1}s ^{n - 1} + a_{2}s ^{n - 2} + \dots + a_{n - 1}s + a_{n} = 0$，我们有劳斯阵列：</p>
<p>$$
\begin{matrix}
s^{n}  &amp; a_{0} &amp; a_{2} &amp; a_{4} &amp; a_{6} &amp; \dots\
s^{n - 1} &amp; a_{1} &amp; a_{3} &amp; a_{5} &amp; a_{7} &amp; \dots\
s^{n - 2} &amp; b_{1} &amp; b_{2} &amp; b_{3} &amp; \dots \
s^{n - 3} &amp; c_{1} &amp; c_{2} &amp; c_{3} &amp; \dots \
\vdots \
s^{2}  &amp; u_{1} &amp; u_{2}\
s^{1}  &amp; v_{1} \
s^{0}  &amp; w_{1} \
\end{matrix}
$$</p>
<p>其中第一行为$a_i$的偶数项，第二行为$a_i$的奇数项；从第三行开始，第$x$行第$i$项</p>
<p>$$
v_{x, i} =
\frac{
\begin{vmatrix}
v_{x - 2, 1} &amp; v_{x - 2, i} \
v_{x - 1, 1} &amp; v_{x - 1, i} \
\end{vmatrix}
}{v_{x - 1, 1}}
$$</p>
<p>劳斯判据为劳斯阵列中的第一列$a_{0}, a_{1}, b_{1}, c_{1},\dots, u_{1},v_{1}, w_{1}$全为正，则系统稳定。</p>
<p>其原理是，劳斯阵列中第一列的系数符号改变的次数，等于实部为正的特征根数，等于闭环特征方程在右半$[s]$平面上的根数。</p>
<h3 id="劳斯判据的特殊情况" tabindex="-1"><a class="header-anchor" href="#劳斯判据的特殊情况" aria-hidden="true">#</a> 劳斯判据的特殊情况</h3>
<ol>
<li>若劳斯判据列表中任意一行的第一个元素为$0$，而其后各元素不全为$0$时，可以用一个很小的正数$\varepsilon$来代替第一列等于$0$的元素，然后再计算其他各元素。如：劳斯阵列
$$
\begin{matrix}
s^4 &amp; 1 &amp; 1 &amp; 1 \
s^3 &amp; 2 &amp; 2 \
s^{2} &amp; 0(\varepsilon) &amp; 1 \
s &amp; 2 - \frac{2}{\varepsilon} \
s^0 &amp; 1
\end{matrix}
$$
可得系统不稳定。</li>
<li>若劳斯阵列出现全$0$行，则系统在$[s]$平面有对称分布的根，可能临界稳定。可以由该行的上一行元素来解决：
<ol>
<li>构成辅助多项式，求导，用其系数代替全为$0$的行</li>
<li>利用辅助方程，求出这些大小相等且关于原点对称的特征</li>
</ol>
</li>
</ol>
<details class="custom-container details"><summary>例题1（稳定系统的劳斯判据）</summary>
<p>设控制系统的特征方程式为$s ^{4} + 8 s^{3} + 17s^{2} + 16s + 5 = 0$，运用劳斯稳定判据判断系统的稳定性。</p>
<p>解：劳斯阵列：</p>
<p>$$
\begin{matrix}
s^4 &amp; 1 &amp; 17 &amp; 5 \
s^3 &amp; 8 &amp; 16 \
s^{2} &amp; 15 &amp; 5 \
s^{1}  &amp; \frac{40}{3} \
s^0 &amp; 5
\end{matrix}
$$</p>
<p>第一列中系数符号全为正，所以控制系统稳定</p>
</details>
<details class="custom-container details"><summary>例题2（不稳定系统的劳斯判据）</summary>
<p>系统特征方程为：$D(s) = s^4 + 2s^3 + 3s^2 + 4s + 3 = 0$，判断系统稳定性</p>
<p>解：劳斯阵列：</p>
<p>$$
\begin{matrix}
s^4 &amp; 1 &amp; 3 &amp; 3 \
s^3 &amp; 2 &amp; 4 &amp; 0 &amp;  \
s^2 &amp; 1 &amp; 3  \
s^1 &amp; -2 \
s^0 &amp; 3
\end{matrix}
$$</p>
<p>劳斯阵列第一列符号改变 2 次，$D(s)$有 2 个右根，系统不稳定</p>
</details>
<details class="custom-container details"><summary>例题3（含参数的劳斯判据）</summary>
<p>设某反馈控制系统如下图所示，试计算使系统稳定的$K$值范围</p>
<p><img src="/assets/images/match/subjects/ControlEngineering/74089A21BD1699970838418-26f5eb98-782b-4096-9c70-01a3add3d3ba.png" alt="截屏2023-11-14 22.07.13.png"></p>
<p>解：系统闭环传递函数为$\frac{X_{o}(s)}{X_{i}(s)} = \frac{K}{s(s + 1)(s + 2) + K}$，其特征方程为：</p>
<p>$s(s + 1)(s + 2) + K = s^3 + 3s^{2} + 2s + K = 0$，有劳斯阵列：$\begin{matrix}
s^3 &amp; 1 &amp; 2 \
s^{2} &amp; 3 &amp; K  \
s^1 &amp; \frac{6 - K}{3} \
s^0 &amp; K
\end{matrix}$</p>
<p>满足第一列为正，故$\begin{cases}
6 - K &gt; 0  \
K &gt; 0
\end{cases}$，即$0 &lt; K &lt; 6$</p>
</details>
<details class="custom-container details"><summary>例题4（含 0 的劳斯阵列）</summary>
<p>系统特征方程为$D(s) = s^4 + 3s^3 + s^2 + 3s + 1 = 0$，判断系统是否稳定。</p>
<p>解：由劳斯阵列：$\begin{matrix}
s^4 &amp; 1 &amp; 1 &amp; 1 \
s^3 &amp; 3 &amp; 3 \
s^2 &amp; \varepsilon(0)  &amp; 1 \
s^1  &amp; \frac{3\varepsilon - 3}{\varepsilon} \
s^0 &amp; 1
\end{matrix}$得系统不稳定</p>
</details>
<details class="custom-container details"><summary>例题5（含全零行的劳斯阵列）</summary>
<p>系统特征方程为$D(s) = s^6 + 2s^5 + 8s^4 + 12s^3 + 20s^2 + 16s + 16 = 0$，判断系统是否稳定。</p>
<p>解：劳斯阵列$\begin{matrix}
s^6 &amp; 1 &amp; 8 &amp; 20 &amp; 16 \
s^5 &amp; 2 &amp; 12 &amp; 16 \
s^4 &amp; 2 &amp; 12 &amp; 16 &amp;  \
s^3 &amp; 0 &amp; 0  \
\end{matrix}$包含全零行，故需特殊处理：</p>
<p>::: tabs</p>
<p>@tab 辅助多项式法
通过$s^4$行构成辅助多项式$2s^4 + 12s^2 + 16$</p>
<p>求导得$8s^3 + 24s$，替换参数后继续计算</p>
<p>$$
\begin{matrix}
s^6 &amp; 1 &amp; 8 &amp; 20 &amp; 16 \
s^5 &amp; 2 &amp; 12 &amp; 16 \
s^4 &amp; 2 &amp; 12 &amp; 16 &amp;  \
s^3 &amp; 0 \to 8 &amp; 0 \to 24  \
s^2 &amp; 6 &amp; 16 \
s^1 &amp; \frac{8}{3} \
s^0 &amp; 16
\end{matrix}
$$</p>
<p>@tab 辅助方程法
通过$s^4$行构成辅助方程$2s^4 + 12s^2 + 16 = 0$</p>
<p>解得</p>
<p>$$
\begin{cases}
s_{1, 2} = \pm j\sqrt{ 2 } \
s_{3, 4} = \pm j 2
\end{cases}
$$</p>
<p>:::</p>
<p>故系统临界稳定</p>
</details>
</div></template>


