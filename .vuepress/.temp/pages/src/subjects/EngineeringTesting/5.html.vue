<template><div><h1 id="第五章-信号分析与处理" tabindex="-1"><a class="header-anchor" href="#第五章-信号分析与处理" aria-hidden="true">#</a> 第五章 信号分析与处理</h1>
<p>重点：自/互相关函数的性质、定义、应用，功率谱，相干函数的定义、取值范围</p>
<h2 id="相关分析" tabindex="-1"><a class="header-anchor" href="#相关分析" aria-hidden="true">#</a> 相关分析</h2>
<h3 id="相关系数" tabindex="-1"><a class="header-anchor" href="#相关系数" aria-hidden="true">#</a> 相关系数</h3>
<p>$$
\rho_{xy} = \frac{E[(x - \mu_{x})(y - \mu_{y})]}{\sigma_{x}\sigma_{y}}
$$</p>
<h3 id="自相关函数" tabindex="-1"><a class="header-anchor" href="#自相关函数" aria-hidden="true">#</a> 自相关函数</h3>
<p>$$
R_{x}(\tau) = \lim_{ T \to 0 } \frac{1}{T} \int _{0}^{T} x(t) x(t + \tau) , dt
$$</p>
<p>$$
\rho_{x}(\tau) = \frac{R_{x}(\tau) - \mu^{2}<em>{x}}{\sigma^{2}</em>{x}}
$$</p>
<h4 id="自相关函数的性质" tabindex="-1"><a class="header-anchor" href="#自相关函数的性质" aria-hidden="true">#</a> 自相关函数的性质</h4>
<ol>
<li>取值范围 $\mu_{x}^{2} - \sigma^{2}<em>{x} \leq R</em>{x}(\tau) \leq \mu_{x}^{2} + \sigma_{x}^{2}$</li>
<li>$R_{x}(0) = \lim_{ T \to \infty } \frac{1}{T}\int ^{T}<em>{0} x(t)x(t) , dt = \psi</em>{x}^{2}$</li>
<li>$\tau \to \infty, \rho_{x}(\tau) \to 0, R_{x}(\tau)\to \mu_{x}^{2}$</li>
<li>$R_{x}(-\tau) = R_{x}(\tau)$</li>
<li>$A$、$f$ 有，$\varphi$ 缺失了，由 $R_{x}(\tau)$ 识别信号类型</li>
</ol>
<h4 id="自相关函数的计算" tabindex="-1"><a class="header-anchor" href="#自相关函数的计算" aria-hidden="true">#</a> 自相关函数的计算</h4>
<h3 id="互相关函数" tabindex="-1"><a class="header-anchor" href="#互相关函数" aria-hidden="true">#</a> 互相关函数</h3>
<p>$$
R_{xy}(\tau) = \lim_{ T \to \infty }  \frac{1}{T} \int ^{T}_{0} x(t)y(t + \tau) , dt
$$</p>
<h4 id="互相关函数的性质" tabindex="-1"><a class="header-anchor" href="#互相关函数的性质" aria-hidden="true">#</a> 互相关函数的性质</h4>
<ul>
<li>非偶函数</li>
<li>$\tau = \tau_{0}$ 时呈现最大值，反映 $x(t)$ 和 $y(t)$ 之间的滞后时间</li>
</ul>
<h4 id="互相关函数的计算" tabindex="-1"><a class="header-anchor" href="#互相关函数的计算" aria-hidden="true">#</a> 互相关函数的计算</h4>
<h4 id="互相关函数的应用" tabindex="-1"><a class="header-anchor" href="#互相关函数的应用" aria-hidden="true">#</a> 互相关函数的应用</h4>
<ul>
<li>相关滤波</li>
<li>相关测速</li>
<li>位置检测：石油管道破损位置定位</li>
<li>诊断：振动定位</li>
</ul>
<h2 id="功率谱分析" tabindex="-1"><a class="header-anchor" href="#功率谱分析" aria-hidden="true">#</a> 功率谱分析</h2>
<h3 id="自功率谱密度函数" tabindex="-1"><a class="header-anchor" href="#自功率谱密度函数" aria-hidden="true">#</a> 自功率谱密度函数</h3>
<p>$$
\begin{cases}
S_{x}(f)  &amp; = \int <em>{-\infty}^{\infty} R</em>{x}(\tau)e^{-j 2\pi f\tau} , d\tau \
R_{x}(\tau)  &amp; = \int ^{\infty}<em>{-\infty} S</em>{x}(f) e^{j 2\pi f\tau} , df
\end{cases}
$$</p>
<p>$S_{x}(f)$ 就是 $x(t)$ 的自功率谱密度函数</p>
<p>物理意义：信号平均功率</p>
<h3 id="互功率谱密度函数" tabindex="-1"><a class="header-anchor" href="#互功率谱密度函数" aria-hidden="true">#</a> 互功率谱密度函数</h3>
<p>$$
\begin{cases}
S_{xy}(f) = \int_{-\infty}^{\infty} R_{x}(\tau)e^{-j 2\pi f \tau} , d\tau  \
R_{xy}(\tau) = \int <em>{-\infty}^{\infty} S</em>{xy}(f) e^{j 2\pi f\tau} , df
\end{cases}
$$</p>
<h3 id="相干函数、倒频谱分析及应用" tabindex="-1"><a class="header-anchor" href="#相干函数、倒频谱分析及应用" aria-hidden="true">#</a> 相干函数、倒频谱分析及应用</h3>
<p>相干函数定义：相干函数是用来评价测试系统的输入信号与输出信号之间的因果关系的函数，即通过相干函数判别系统中输出信号的功率谱有多少是所测输入信号所引起的响应。$0 \leq \gamma_{xy}^{2} \leq 1$</p>
<p>倒频谱定义：倒频谱分析也叫二次频谱分析，是检测复杂谱图中周期分量的有效工具。</p>
<ul>
<li>功率倒频谱：$C_{q} = |F{\log S_{x}(f)} |^{2}$</li>
<li>有效幅值倒频谱（倒频谱）：$C_{o}(q) = \sqrt{ C_{p}(q) }$</li>
</ul>
</div></template>


