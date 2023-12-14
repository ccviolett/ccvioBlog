<template><div><p>系统的频率特性描述了系统对正弦输入的稳态响应，当输入为$\sin(\omega t)$，经过系统后输出为$A(\omega)\sin[\omega t + \phi(\omega)]$。</p>
<p>我们设设系统的传递函数为$G(s)$</p>
<p>系统输出信号的稳态响应相对其正弦输入信号的幅值之比$A(\omega) = |G(j\omega)|$为系统的幅频特性，描述系统在稳态下响应不同频率的正弦输入时在幅值上的增益特性。</p>
<p>系统输出信号的稳态响应相对其正弦输入信号的相移$\phi(\omega) = \angle G(j\omega)$为系统的相频特性，描述系统在稳态下响应不同频率的正弦输入时在相位上产生的滞后$\phi(s) &lt; 0$或超前$\phi(s) &gt; 0$。</p>
<h4 id="系统的频率特性的表现形式" tabindex="-1"><a class="header-anchor" href="#系统的频率特性的表现形式" aria-hidden="true">#</a> 系统的频率特性的表现形式</h4>
<p><img src="/assets/images/match/subjects/ControlEngineering/F434d569Df202312111134568.png" alt=""></p>
<p>系统的频率特性是一种复变函数，设$U(\omega)$为实部，称为实频特性，$V(\omega)$为虚部，称为虚频特性。</p>
<p>$$
\begin{aligned}
G(j\omega) &amp;= U(\omega) + jV(\omega) \
&amp;= A(\omega)[\cos \phi(\omega) + j \sin \phi(\omega)] \
&amp;= A(\omega)e^{j\phi(\omega)} \
&amp;= |G(j\omega)| \angle G(j\omega)
\end{aligned}
$$</p>
<p>$$A(\omega) = |G(j \omega)| = \sqrt {[U(\omega)]^2 + [V(\omega)]^2}$$
$$\phi(\omega) = \angle G(j\omega) = arctan \left [ \frac{V(\omega)}{U(\omega)} \right ]$$</p>
<p>求分式的幅频特性和相频特性我们可以分开求，相角 = 分子的相角 - 分母的相角，幅值为分子分母各自求幅值。</p>
<details class="custom-container details"><summary>例题1（求频率特性）</summary>
<p>求下图的频率特性。</p>
<p><img src="/assets/images/match/subjects/ControlEngineering/1a50190b97202312111134674.png" alt=""></p>
<p>解：如图所示系统传递函数，通过复阻抗法可求得为：</p>
<p>$G(s) = \frac{\frac{1}{Cs}}{R + \frac{1}{Cs}} = \frac{1}{RCs + 1}$</p>
<p>将$s = j\omega$代入，得到系统的频率特性：</p>
<p>$G(j\omega) = G(s)|_{s = j\omega} = \frac{1}{j\omega RC + 1}$</p>
</details>
<details class="custom-container details"><summary>例题2（分式的频率特性）</summary>
<p>求$G(j\omega) = \frac{K}{j\omega (T_1j\omega + 1)(T_2j\omega + 1)}$的幅频特性和相频特性。</p>
<p>解：</p>
<p>$$
\begin{align}
G(j\omega) &amp;= \frac{K}{j\omega(T_{1}j\omega+1)(T_{2}j\omega+1)} \
&amp; = K \cdot \frac{1}{j\omega}\cdot \frac{1}{T_{1}j\omega+1}\cdot \frac{1}{T_{2}j\omega+1} \
&amp; = K \cdot \frac{1}{\omega \cdot e^{j \pi/2}} \cdot \frac{1}{\sqrt{ (T_{1}\omega)^{2}+1 }\cdot e^{j\arctan(T_{1}\omega)}} \cdot \frac{1}{\sqrt{ (T_{2}\omega)^{2} + 1 }\cdot e^{j\arctan(T_{2}\omega)}} \
&amp; = \frac{K}{\omega \sqrt{ (T_{1}\omega)^{2} + 1 }\cdot \sqrt{ (T_{2}\omega)^{2} + 1 }}e^{j(-\pi/2-\arctan(T_{1}\omega) -\arctan(T_{2}\omega))}
\end{align}
$$</p>
<p>$A(\omega) = \frac{K}{\omega \sqrt{ (T_{1}\omega)^{2} + 1 }\cdot \sqrt{ (T_{2}\omega)^{2} + 1 }}$</p>
<p>$\phi(\omega) = -\frac{\pi}{2} - \arctan T_{1}\omega-\arctan T_{2}\omega$</p>
</details>
<details class="custom-container details"><summary>例题3（正弦函数的稳态响应）</summary>
<p>某系统传递函数为$\frac{7}{3s + 2}$，当输入为$\frac{1}{7}\sin\left( \frac{2}{3}t + 45^{\circ} \right)$，求系统稳态输出。</p>
<p>解：由系统的传递函数$G(s) = \frac{7}{3s + 2}$，可得系统的频率特性$G(j\omega) = \frac{7}{3j\omega + 2}$，故</p>
<p>$$
\begin{cases}
A(\omega) = \frac{7}{\sqrt{ (3\omega)^{2} + 4 }} \
\varphi = -\arctan \frac{3\omega}{2}
\end{cases}
$$</p>
<p>当输入为$x_{i}(t) = \frac{1}{7}\sin\left( \frac{2}{3}t + 45^{\circ} \right)$时，有</p>
<p>$$
\begin{cases}
\frac{1}{7}A\left( \frac{2}{3} \right) = \frac{\sqrt{ 2 }}{4} \
\phi\left( \frac{2}{3} \right) + 45^{\circ} = 0
\end{cases}
$$</p>
<p>故$x_{o}(t) = \frac{\sqrt{ 2 }}{4}\sin\left( \frac{2}{3}t \right)$</p>
</details>
</div></template>


