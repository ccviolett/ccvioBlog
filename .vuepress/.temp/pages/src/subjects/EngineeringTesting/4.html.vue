<template><div><h1 id="第四章-信号的调理与显示记录" tabindex="-1"><a class="header-anchor" href="#第四章-信号的调理与显示记录" aria-hidden="true">#</a> 第四章 信号的调理与显示记录</h1>
<h2 id="电桥-直流电桥" tabindex="-1"><a class="header-anchor" href="#电桥-直流电桥" aria-hidden="true">#</a> 电桥（直流电桥）</h2>
<h3 id="直流电桥的输出特性" tabindex="-1"><a class="header-anchor" href="#直流电桥的输出特性" aria-hidden="true">#</a> 直流电桥的输出特性</h3>
<p>$$
u_{y} = \frac{1}{4} u_{x}\left( \frac{\Delta R_{1}}{R_{1}} - \frac{\Delta R_{2}}{R_{2}}+\frac{\Delta R_{3}}{R_{3}}-\frac{\Delta R_{4}}{R_{4}} \right)
$$
$$
u_{0} = \frac{\Delta R_{1} + \Delta R_{3} - \Delta R_{2} - \Delta R_{4}}{4R}
$$</p>
<h3 id="直流电桥输出特点" tabindex="-1"><a class="header-anchor" href="#直流电桥输出特点" aria-hidden="true">#</a> 直流电桥输出特点</h3>
<ol>
<li>输出电压和各桥臂电阻变化量的代数和成正比</li>
<li>和差特性（加减特性）</li>
<li>供桥电压增大，容易引起蠕变和零漂</li>
<li>增大电阻应变片的灵敏度可以提高电桥的输出电压</li>
</ol>
<h3 id="几种典型的直流电桥" tabindex="-1"><a class="header-anchor" href="#几种典型的直流电桥" aria-hidden="true">#</a> 几种典型的直流电桥</h3>
<p>灵敏度计算掌握：</p>
<ul>
<li>半桥单臂</li>
<li>半桥双臂</li>
<li>全桥差动</li>
</ul>
<h3 id="和差特性的应用" tabindex="-1"><a class="header-anchor" href="#和差特性的应用" aria-hidden="true">#</a> 和差特性的应用</h3>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>什么是电桥的和差特性？</p>
<ul>
<li>若相邻桥臂应变极性一致，则输出电压为两者之差；反之为两者之和。</li>
<li>若相对桥臂应变极性一致，则输出电压为两者之和；反之为两者之差。</li>
</ul>
</div>
<ul>
<li>提高灵敏度</li>
<li>进行温度补偿，消除测量误差</li>
<li>复杂应力状态下测取单独由某一因素产生的应变</li>
</ul>
<h3 id="电桥温度补偿原理" tabindex="-1"><a class="header-anchor" href="#电桥温度补偿原理" aria-hidden="true">#</a> 电桥温度补偿原理</h3>
<p>半桥测量时进行温度补偿使用桥路补偿法，$R_{1}$、$R_{2}$ 完全相同，处于相同温度场中，并且接入相邻臂。</p>
<p>$$
u_{y} = \frac{u_{0}}{4} \left[ \left( \frac{\Delta R_{1}}{R_{1}} \right)<em>{\varepsilon} + \left( \frac{\Delta R</em>{1}}{R_{1}} \right)<em>{t} - \left( \frac{\Delta R</em>{2}}{R_{2}} \right)_{t} \right]
$$</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>例 4-1</p>
</div>
<h2 id="调制与解调" tabindex="-1"><a class="header-anchor" href="#调制与解调" aria-hidden="true">#</a> 调制与解调</h2>
<h3 id="调制基本概念" tabindex="-1"><a class="header-anchor" href="#调制基本概念" aria-hidden="true">#</a> 调制基本概念</h3>
<ul>
<li>调制的目的：解决微弱缓变信号的放大以及信号的传输问题</li>
<li>调制的概念：利用某种低频信号来控制或改变某一高频信号的某个参数的过程
<ul>
<li>载波：高频振荡信号</li>
<li>调制信号：控制高频振荡的低频信号</li>
<li>已调制信号：调制后的高频振荡信号</li>
</ul>
</li>
<li>解调：从已调制信号中恢复出原有低频调制信号的过程</li>
<li>调制种类：调幅、调频、调相</li>
</ul>
<h3 id="调幅数学分析" tabindex="-1"><a class="header-anchor" href="#调幅数学分析" aria-hidden="true">#</a> 调幅数学分析</h3>
<p>调幅是将一个高频余弦信号与调制信号相乘，使载波信号幅值随调制信号的变化而变化</p>
<h4 id="卷积" tabindex="-1"><a class="header-anchor" href="#卷积" aria-hidden="true">#</a> 卷积</h4>
<p>定义</p>
<p>$$
x(t) * h(t) = \int _{-\infty}^{\infty} x(\tau) \cdot h(t - \tau) , d \tau
$$</p>
<p>卷积定理</p>
<p>$$
\begin{cases}
x(t) \leftrightarrow  X(\omega) \
h(t) \leftrightarrow H(\omega)
\end{cases} \to x(t) * h(t) \leftrightarrow X(f) * H(f)
$$</p>
<h4 id="delta-函数" tabindex="-1"><a class="header-anchor" href="#delta-函数" aria-hidden="true">#</a> $\delta$ 函数</h4>
<p>$\delta$ 函数是一个理想函数，是物理不可实现信号，幅值为无限，持续时间为 0 的脉冲。</p>
<p>$$
\delta(t) = \begin{cases}
\infty  &amp; t = 0 \
0 &amp; t \not = 0
\end{cases}
$$</p>
<p>$$
\int_{-\infty}^{\infty} \delta(t) , dt  = 1
$$</p>
<ol>
<li>乘积特性：$f(t)\delta(t) = f(0)\delta(t)$, $f(t)\delta(t - t_{0}) = f(t_{0})\delta(t - t_{0})$</li>
<li>积分特性（抽样特性）：$\int <em>{-\infty}^{\infty} f(t)\delta (t) , dt$, $\int <em>{-\infty}^{\infty} f(t) \delta(t - t</em>{0}) , dt = f(t</em>{0})$，即 $x(t) * \delta(t - t_{0}) = x(t - t_{0})$</li>
<li>拉氏变换：$\Delta(s) = \int _{0-}^{\infty} \delta(t)e^{-st} , dt = 1$</li>
<li>傅氏变换：$\Delta(f) = \int _{-\infty}^{\infty}\delta(t) e^{-j 2\pi ft} , dt = 1$</li>
</ol>
<p>一个函数与单位脉冲函数卷积的结果，就是将其图像由坐标原点平移至该脉冲函数处。</p>
<h3 id="调幅调制与解调过程" tabindex="-1"><a class="header-anchor" href="#调幅调制与解调过程" aria-hidden="true">#</a> 调幅调制与解调过程</h3>
<p>$$
\begin{align}
x(t) \cdot y(t)  &amp; \Leftrightarrow X(f) * Y(f) \
y(t) = \cos(2\pi f_{0}t)  &amp; \Leftrightarrow \frac{1}{2}\delta(f - f_{0}) + \frac{1}{2} \delta(f + f_{0}) \
x(t) \cdot \cos(2\pi f_{0} t)  &amp; \Leftrightarrow \frac{1}{2}X(f) * \delta(f - f_{0}) + \frac{1}{2} X(f) * \delta(f + f_{0}) \
&amp; = \frac{1}{2}X(f - f_{0}) + \frac{1}{2} X(f + f_{0})
\end{align}
$$</p>
<h3 id="载波频率与最高频率" tabindex="-1"><a class="header-anchor" href="#载波频率与最高频率" aria-hidden="true">#</a> 载波频率与最高频率</h3>
<p>载波频率 $f_{0}$ 必须高于信号中的最高频率 $f_{max}$，否则会出现混叠现象（“混音”）。</p>
<p>实际应用中，载波频率至少在调制信号上限频率的十倍以上。</p>
<p>!!! tip
调幅波是否可以看作是载波与调制信号的迭加？</p>
<p>答：不可以。因为调幅波是载波幅值随调制信号大小程正比变化，只有相乘再能实现。
:::</p>
<h3 id="解调的分析" tabindex="-1"><a class="header-anchor" href="#解调的分析" aria-hidden="true">#</a> 解调的分析</h3>
<p>同步解调：把调幅波再次与原载波信号相乘，随后用低通滤波器滤去大于 $f_{m}$ 的成分，则可以复现原信号的频谱，幅值为原来的一半。</p>
<p>$$
x(t) \cdot \cos 2(\pi f_{0}t) \cdot \cos ()2\pi f_{0}t)
$$</p>
<h2 id="信号滤波" tabindex="-1"><a class="header-anchor" href="#信号滤波" aria-hidden="true">#</a> 信号滤波</h2>
<h3 id="滤波的分类及其幅频特性" tabindex="-1"><a class="header-anchor" href="#滤波的分类及其幅频特性" aria-hidden="true">#</a> 滤波的分类及其幅频特性</h3>
<ul>
<li>低通滤波器</li>
<li>高通滤波器</li>
<li>带通滤波器</li>
<li>带阻滤波器</li>
</ul>
<p><img src="https://ccviolett-1307804825.cos.ap-shanghai.myqcloud.com/img/202312140100799.png" alt=""></p>
<h3 id="理想滤波器的特性" tabindex="-1"><a class="header-anchor" href="#理想滤波器的特性" aria-hidden="true">#</a> 理想滤波器的特性</h3>
<p>$$
H(f) = \begin{cases}
e^{-j\omega t_{0}} &amp; |\omega| &lt; \omega_{c} \
0 &amp; \text{其他}
\end{cases}
$$
脉冲响应函数 $H(j \Omega) \to h(t)$</p>
<h3 id="重点-实际滤波器的基本参数" tabindex="-1"><a class="header-anchor" href="#重点-实际滤波器的基本参数" aria-hidden="true">#</a> （重点）实际滤波器的基本参数</h3>
<p><img src="https://ccviolett-1307804825.cos.ap-shanghai.myqcloud.com/img/202312140102268.png" alt=""></p>
<h4 id="纹波幅度-delta" tabindex="-1"><a class="header-anchor" href="#纹波幅度-delta" aria-hidden="true">#</a> 纹波幅度 $\delta$</h4>
<p>通带中幅值特性值的起伏变化值</p>
<h4 id="截止频率" tabindex="-1"><a class="header-anchor" href="#截止频率" aria-hidden="true">#</a> 截止频率</h4>
<p>幅频特性值等于 $\frac{A_{0}}{\sqrt{ 2 }}(-3dB)$  所对应的频率点</p>
<h4 id="带宽-b" tabindex="-1"><a class="header-anchor" href="#带宽-b" aria-hidden="true">#</a> 带宽 $B$</h4>
<p>上下两截止频率之间的频率范围 $B = f_{c_{2}} - f_{c_{1}}$，又称 $-3dB$ 带宽</p>
<h4 id="品质因数-q" tabindex="-1"><a class="header-anchor" href="#品质因数-q" aria-hidden="true">#</a> 品质因数 $Q$</h4>
<p>对于一个带通滤波器，其品质因子 $Q$ 定义为中心频率 $f_{0}$ 与带宽 $B$ 之比，即 $Q = \frac{f_{0}}{B}$</p>
<h4 id="倍频程选择性" tabindex="-1"><a class="header-anchor" href="#倍频程选择性" aria-hidden="true">#</a> 倍频程选择性</h4>
<p>上截止频率 $f_{c_{2}}$ 与 $2f_{c_{2}}$ 之间或下截止频率 $f_{c_{1}}$ 与 $\frac{f_{c_{1}}}{2}$ 间幅频特性的衰减值</p>
<p>即频率变化一个倍频程的衰减量，以 $dB$ 表示。</p>
<p>倍频程选择性表征过渡带的幅频曲线倾斜的程度，即幅频特性衰减的快慢。</p>
<h4 id="滤波器因数-矩形系数-lambda" tabindex="-1"><a class="header-anchor" href="#滤波器因数-矩形系数-lambda" aria-hidden="true">#</a> 滤波器因数（矩形系数）$\lambda$</h4>
<p>滤波器幅频特性的 $-60dB$ 宽带与 $-3dB$ 宽带的比，即 $\lambda = \frac{B_{-60dB}}{B_{-3dB}}$</p>
<p>对理想滤波器有 $\lambda = 1$，对普通使用的滤波器，$\lambda = 1 \sim 5$</p>
<h3 id="rc-无源滤波电路" tabindex="-1"><a class="header-anchor" href="#rc-无源滤波电路" aria-hidden="true">#</a> RC 无源滤波电路</h3>
<p>频率响应函数</p>
<p>幅频特性、相频特性</p>
<ul>
<li>一阶 RC 低通滤波器</li>
</ul>
<p>$$
\begin{align}
A(f) = |H(f)| = \frac{1}{\sqrt{ 1 + (\tau 2\pi f)^{2} }} \
\varphi(f) = -\arctan(2\pi f\tau)
\end{align}
$$</p>
<ul>
<li>一阶 RC 高通滤波器</li>
</ul>
<p>$$
\begin{align}
A(f) = |H(f)| = \frac{2\pi f\tau}{\sqrt{ 1 + (\tau 2\pi f)^{2} }} \
\varphi(f) = \arctan\left( \frac{1}{2\pi f\tau} \right)
\end{align}
$$</p>
</div></template>


