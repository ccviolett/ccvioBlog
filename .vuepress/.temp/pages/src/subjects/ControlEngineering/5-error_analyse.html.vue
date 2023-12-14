<template><div><h2 id="稳态误差" tabindex="-1"><a class="header-anchor" href="#稳态误差" aria-hidden="true">#</a> 稳态误差</h2>
<p>稳态误差是控制系统在输入信号作用下稳态输出的期望值与实际输出值之差。</p>
<p>设$x_{or}(t)$是控制系统期望的输出值，$x_o(t)$是实际的输出值，则误差函数$e(t) = x_{or}(t) - x_{o}(t)$</p>
<p>稳态误差$e_{ss} = \lim_{ t \to \infty } e(t) = \lim_{ t \to \infty } [x_{or}(t) - x_{o}(t)]$，直接表示了控制系统的参数稳定时的准确程度</p>
<h2 id="稳态偏差" tabindex="-1"><a class="header-anchor" href="#稳态偏差" aria-hidden="true">#</a> 稳态偏差</h2>
<p>控制系统的偏差信号$\varepsilon(s)$是系统的输入信号$X(s)$与系统的反馈信号$Y(s)$之差</p>
<p>$$
\varepsilon(s) = X_{i}(s) - Y(s) = X_{i}(s) - H(s)X_{o}(s)
$$</p>
<p><img src="/assets/images/match/subjects/ControlEngineering/fD0A432650202312111127645.png" alt=""></p>
<p>稳态偏差$\varepsilon_{ss} = \lim_{ t \to \infty } \varepsilon(t) = \lim_{ s \to 0 } s\varepsilon(s)$，间接表示控制系统的稳态控制准确程度</p>
<h2 id="误差信号和偏差信号的关系" tabindex="-1"><a class="header-anchor" href="#误差信号和偏差信号的关系" aria-hidden="true">#</a> 误差信号和偏差信号的关系</h2>
<p>误差函数$e(t) = x_{or} - x_o(t)$，则$E(s) = X_{or} - X$</p>
<p>单位反馈控制系统的偏差函数$\varepsilon(s)$和误差函数$E(s)$是相等的。对于非单位反馈控制系统，$E(s) = \frac{1}{H(s)} \varepsilon(s)$。</p>
<ul>
<li>误差是从系统输出端来定义的，是输出期望值与实际输出值之差</li>
<li>偏差是从系统输入端来定义的，是系统输入信号与主反馈信号之差</li>
</ul>
<h2 id="误差传递函数与稳态误差" tabindex="-1"><a class="header-anchor" href="#误差传递函数与稳态误差" aria-hidden="true">#</a> 误差传递函数与稳态误差</h2>
<p>$$\frac{\varepsilon(s)}{X_{i}(s)} = \frac{1}{1 + G(s)H(s)}$$</p>
<p>$$\varepsilon_{ss} = \lim_{ t \to \infty } = \lim_{ s \to 0 } s\cdot\varepsilon(s) = \lim_{ s \to 0 } s\cdot \frac{1}{1 + G(s)H(s)}X_{i}(s)$$</p>
<p>$$e_{ss} = \lim_{ t \to \infty } e(t) = \lim_{ s \to 0 } sE(s) = \lim_{ s \to 0 } s \frac{1}{H(s)}\varepsilon(s) = \lim_{ s \to 0 } s\cdot \frac{1}{H(s)}\cdot \frac{1}{1+G(s)H(s)}X_{i}(s)$$</p>
<details class="custom-container details"><summary>例题1（误差传递函数与稳态误差）</summary>
<p>已知控制系统如图，求当$x_i(t) = 1(t)$时的稳态误差。</p>
<p><img src="/assets/images/match/subjects/ControlEngineering/a9C0f0AC3E202312111127820.png" alt=""></p>
<p>解：当$x_i(t) = 1(t)$时，$X_I(s) = \frac{1}{s}$</p>
<p>故$e_{ss} = \lim_{ s \to 0 } s \cdot \frac{1}{H(s)}\cdot \frac{1}{1+G(s)H(s)}X_{i}(s) = \lim_{ s \to 0 } s \cdot \frac{s}{s + 10}\cdot \frac{1}{s} = 0$</p>
</details>
<h2 id="静态误差系数" tabindex="-1"><a class="header-anchor" href="#静态误差系数" aria-hidden="true">#</a> 静态误差系数</h2>
<h3 id="影响稳态误差的因素" tabindex="-1"><a class="header-anchor" href="#影响稳态误差的因素" aria-hidden="true">#</a> 影响稳态误差的因素</h3>
<p>我们化简静态误差的式子：</p>
<p>$$
G(s)H(s) = \frac{K(\gamma_{1}s + 1)(\gamma_{2}s + 1)\dots}{s ^{\nu}(T_{1}s + 1)(T_{2}s + 1)\dots}
$$</p>
<p>$$
e_{ss} = \lim_{ t \to \infty } e(t) = \lim_{ s \to 0 } sE(s) = \lim_{ s \to 0 } s \frac{1}{1 + G(s)H(s)}X_{i}(s) = \lim_{ s \to 0 } \frac{sX_{i}(s)}{1 + \frac{K}{s^{\nu}}}
$$</p>
<p>可以得到影响静态误差的因素：</p>
<ul>
<li>输入信号$X_i(s)$</li>
<li>开环增益$K$</li>
<li>系统类型$\nu$
<ul>
<li>$\nu = 0$称为 0 型系统</li>
<li>$\nu = 1$称为 I 型系统</li>
<li>$\nu = 2$称为 II 型系统</li>
</ul>
</li>
</ul>
<h3 id="系统对不同输入的稳态误差" tabindex="-1"><a class="header-anchor" href="#系统对不同输入的稳态误差" aria-hidden="true">#</a> 系统对不同输入的稳态误差</h3>
<p><img src="/assets/images/match/subjects/ControlEngineering/89f2bCE5fa202312111129140.png" alt=""></p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>例：在单位斜坡输入信号作用下，0 型系统的稳态误差 $e_{ss} = \infty$</p>
</div>
<ul>
<li>位置误差、速度误差、加速度误差分别指输入为阶跃、斜坡、加速度信号时输出位置上的误差</li>
<li>对于单位反馈系统，$e_{ss} = \varepsilon_{ss}$；对于非单位反馈系统，先求出$\varepsilon_{ss}$，然后求$e_{ss} = \frac{\varepsilon_{ss}}{H(0)}$</li>
<li>稳态误差可看成各典型信号作用下误差的总和</li>
</ul>
<details class="custom-container details"><summary>例题2（静态误差系数）</summary>
<p>求系统在单位阶跃、斜坡、加速度输入的稳态误差。</p>
<p><img src="/assets/images/match/subjects/ControlEngineering/2f9bEaEEa4202312111130170.png" alt=""></p>
<p>解：</p>
<p>$$
G(s)H(s) = \frac{\omega_{n}^{2}}{s(s + 2\zeta\omega_{n})} = \frac{\frac{\omega_{n}}{2\zeta}}{s\left( \frac{1}{2\zeta\omega_{n}} s + 1  \right)}
$$</p>
<p>故该系统为 I 型系统，且$K = \frac{\omega_{n}}{2\zeta}$，故</p>
<p>单位阶跃$e_{ss} = 0$</p>
<p>单位斜坡$e_{ss} = \frac{1}{K} = \frac{2\zeta}{\omega_n}$</p>
<p>单位加速度$e_{ss} = \infty$</p>
</details>
<details class="custom-container details"><summary>例题3（误差的总和）</summary>
<p>已知单位负反馈系统的开环传递函数$G_k(s) = \frac{100}{s(s + 2)}$，试确定系统的型次$\nu$和开环增益$K$；当输入为$r(t) = 1 + 3t + 2t^{2}$时，系统的稳态误差。</p>
<p>解：$G_{k}(s) = \frac{100}{s(s + 2)} = \frac{50}{s(0.5s + 1)}$，故$\nu = 1$，$K = 50$</p>
<p>当输入为$r(t) = 1 + 3t + 2t^{2}$时，稳态误差为$e_{ss} = 0 + \frac{3}{k} + \infty = \infty$</p>
</details>
<h2 id="干扰引起的稳态误差" tabindex="-1"><a class="header-anchor" href="#干扰引起的稳态误差" aria-hidden="true">#</a> 干扰引起的稳态误差</h2>
<p><img src="/assets/images/match/subjects/ControlEngineering/7f3Bc9d06E202312111131348.png" alt=""></p>
<p>令$x_i(t) = 0$，则系统只存在扰动，我们可以知道$\frac{\varepsilon_{N}(s)}{N(s)} = \frac{-G_{2}(s)H(s)}{1 + G_{1}(s)G_{2}(s)H(s)}$，即$\varepsilon_{N}(s) = \frac{-G_{2}(s)H(s)}{1 + G_{1}(s)G_{2}(s)H(s)}N(s)$</p>
<p>稳态偏差等于输入引起的稳态偏差和干扰引起的稳态偏差之和，即：</p>
<p>$$
\begin{align}
\varepsilon_{ss} &amp; = \varepsilon_{ssX} + \varepsilon_{ssN} \
&amp; = \lim_{ s \to 0 } s \cdot\varepsilon_{X}(s)  + \lim_{ s \to 0 } s \cdot \varepsilon_{N}(s) \
&amp; = \lim_{ s \to 0 } s\cdot \frac{X_{i}(s) - G_{2}(s)H(s)N(s)}{1 + G_{1}(s)G_{2}(s)H(s)}
\end{align}
$$</p>
<p>随后得到稳态误差 $e_{ss} = \frac{\varepsilon_{ss}}{H(0)}$</p>
<details class="custom-container details"><summary>例题4（扰动引起的误差）</summary>
<p>某系统如下图所示，当$x_{i}(t) = t\cdot 1(t)$、$n(t) = 0.5 \cdot 1(t)$作用时，$e_{ss}$值为多少？</p>
<p><img src="/assets/images/match/subjects/ControlEngineering/39BBeb9CC3202312111131064.png" alt=""></p>
<p>解：根据劳斯判据该系统稳定。</p>
<p>该系统为单位反馈系统，其稳态偏差即为稳态误差。</p>
<p>$$
\varepsilon_{ssX} = \lim_{ s \to 0 } s\cdot \varepsilon_{X}(s) = \lim_{ s \to 0 } s \frac{1}{1 + \frac{10}{0.1s + 1}\cdot \frac{1}{s(s + 4)}} \cdot \frac{1}{s^{2}} = \frac{1}{2.5}
$$</p>
<p>$$
\varepsilon_{ssN} = \lim_{ s \to 0 } s \cdot \varepsilon_{N}(s) = \lim_{ s \to 0 } s \frac{-\frac{1}{s(s + 4)}}{1 + \frac{10}{0.1s + 1}\cdot \frac{1}{s(s + 4)}}\cdot \frac{0.5}{s} = -\frac{1}{20}
$$</p>
<p>$$
e_{ss} = \varepsilon_{ss} = \varepsilon_{ssX} + \varepsilon_{ssN} = \frac{1}{2.5} - \frac{1}{20} = 0.35
$$</p>
</details>
<h2 id="减小系统误差的途径" tabindex="-1"><a class="header-anchor" href="#减小系统误差的途径" aria-hidden="true">#</a> 减小系统误差的途径：</h2>
<ol>
<li>反馈通道的精度对于减小系统误差至关重要。反馈通道元部件精度要高，避免在反馈通道引入干扰。</li>
<li>在系统稳定的前提下
<ol>
<li>对于输入引起的误差，增大系统开环放大倍数，提高系统型次；</li>
<li>对于干扰引起的误差，在前向通道干扰点前加积分器，增大放大倍数。</li>
</ol>
</li>
<li>既要求稳态误差小，又要求良好动态性能，只靠加大开环放大倍数或串入积分环节不能同时满足要求时，可采用复合控制方法对误差进行补偿。补偿的方式可分为按干扰补偿和按输入补偿。</li>
</ol>
</div></template>


