<template><div><h1 id="第一章-信号描述与分析基础" tabindex="-1"><a class="header-anchor" href="#第一章-信号描述与分析基础" aria-hidden="true">#</a> 第一章 信号描述与分析基础</h1>
<h2 id="信号定义与分类" tabindex="-1"><a class="header-anchor" href="#信号定义与分类" aria-hidden="true">#</a> 信号定义与分类</h2>
<ul>
<li>周期信号、准周期信号</li>
<li>确定性信号、非确定性信号</li>
</ul>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>具有离散频谱的信号不一定是周期信号，举例“能否用确切的数学表达式描述“，如 $x(t) = \sin t + \sin \sqrt{ 2 }t$</p>
</div>
<h2 id="信号的描述" tabindex="-1"><a class="header-anchor" href="#信号的描述" aria-hidden="true">#</a> 信号的描述</h2>
<p>周期、峰值、峰峰值、均值、均方值、方差</p>
<p>概率密度函数、概率分布函数、频率特性、相频特性、n 次</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>$\mu$、$\varphi^{2}$、$\sigma$ 之间的关系：$\varphi^{2} = \sigma^{2} + \mu_{x}^{2}$，即信号的强度均方值，等于波动量方差加静态量均值。</p>
</div>
<h2 id="傅立叶级数" tabindex="-1"><a class="header-anchor" href="#傅立叶级数" aria-hidden="true">#</a> 傅立叶级数</h2>
<h3 id="三角极数" tabindex="-1"><a class="header-anchor" href="#三角极数" aria-hidden="true">#</a> 三角极数</h3>
<p>$$
\begin{cases}
x(t)  &amp; = \frac{a_{0}}{2} + \sum_{n = 1}^{\infty} (a_{n}\cos n\omega_{0}t + b_{n}\sin n\omega_{0}t) \
a_{n}  &amp; = \frac{2}{T}\int ^{T/2}<em>{-T /2} x(t) \cos n\omega</em>{0}t , dt  \
b_{n}  &amp; = \frac{2}{T}\int ^{T/2}<em>{ -T /2} x(t) \sin n\omega</em>{0}t , dt
\end{cases}
$$</p>
<p>其中：</p>
<ul>
<li>$\frac{a_{0}}{2}$ 为直流分量</li>
<li>$\sum_{n = 1}^{\infty}$ 表示 $n$ 次谐波</li>
<li>$a_{n}\cos n\omega_{0}t$  表示余弦分量幅值</li>
<li>$b_{n} \sin n\omega_{0}t$ 表示正弦分量幅值</li>
</ul>
<p>$$
\begin{cases}
x(t) &amp; = \frac{a_{0}}{2} + \sum_{n = 1}^{\infty} A_{n} \cos(n\omega_{0}t + \varphi_{n}) \
A_{n} &amp; = \sqrt{ a_{n}^{2} + b_{n}^{2} } \
\varphi_{n} &amp;  = - \arctan\left( \frac{b_{n}}{a_{n}} \right)
\end{cases}
$$
其中：</p>
<ul>
<li>$n\omega_{0}t$ 为 $n$ 次谐波角频率</li>
<li>$A_{n}$ 为$n$ 次谐波幅值</li>
<li>$\varphi_{n}$ 为 $n$ 次谐波相位</li>
</ul>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>周期信号的频谱是离散的</p>
</div>
<h3 id="复指数形式的傅里叶级数" tabindex="-1"><a class="header-anchor" href="#复指数形式的傅里叶级数" aria-hidden="true">#</a> 复指数形式的傅里叶级数</h3>
<p>$$
x(t) = \sum_{n = -\infty}^{\infty}C_{n} e^{jn\omega_{0}t}, n = 0, \pm 1, \pm 2, \dots
$$</p>
<p>$$
C_{n} = \frac{1}{T} \int <em>{-\infty}^{\infty} x(t) e^{-jn\omega</em>{0}t} , dt
$$</p>
<p>欧拉公式：</p>
<p>$$
\begin{cases}
\cos \omega t &amp;  = \frac{1}{2} ( e^{j\omega t} + e^{-j\omega t}) \
\sin \omega t &amp;  = \frac{j}{2} (e^{-j \omega t} - e^{j\omega t})
\end{cases}
$$</p>
<h3 id="周期信号频谱特点" tabindex="-1"><a class="header-anchor" href="#周期信号频谱特点" aria-hidden="true">#</a> 周期信号频谱特点</h3>
<ul>
<li>周期信号的频谱是离散谱</li>
<li>周期信号的谱线仅出现在基波及各次谐波频率处</li>
<li>周期信号的幅值谱中各频率分量的幅值随着频率的升高而减小，频率越高，幅值越小</li>
</ul>
<h2 id="傅立叶变换" tabindex="-1"><a class="header-anchor" href="#傅立叶变换" aria-hidden="true">#</a> 傅立叶变换</h2>
<p>$$
\begin{cases}
X(\omega) &amp;  = \int_{-\infty}^{\infty} x(t) e^{-j\omega t} , dt  \
X(f)  &amp; = \int _{-\infty}^{\infty} x(t) e^{-j 2\pi ft} , dt  \
\end{cases}
$$</p>
<p>$$
\begin{cases}
x(t) &amp;  = \frac{1}{2\pi} \int ^{\infty}_{-\infty} X(\omega) e^{j\omega t} , d\omega  \
x(t) &amp;  = \int _{-\infty}^{\infty} X(f) e^{j 2\pi ft} , df  \
\end{cases}
$$</p>
<p>傅立叶变换的物理意义：时间域 &lt;-&gt; 频率域</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>阶跃信号仅取单边利用傅里叶变换性质计算</p>
</div>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>矩形脉冲（门函数、窗函数）频谱</p>
<p>$$
g_{T}(t) = \begin{cases}
1,  &amp; |t| &lt; \frac{T}{2} \
0,  &amp; |t| \geq \frac{T}{2}
\end{cases}
$$</p>
<p>$$
|G_{T}(\omega)| = T \left|\sin c\left( \frac{\omega T}{2} \right) \right|
$$</p>
<p>$$
\varphi(\omega) = \begin{cases}
0,  &amp; \sin c\left( \frac{\omega T}{2} \right) &gt; 0 \
\pi,  &amp; \sin c\left( \frac{\omega T}{2} \right) &lt; 0 \
\end{cases}
$$</p>
</div>
<h3 id="傅立叶变换的性质" tabindex="-1"><a class="header-anchor" href="#傅立叶变换的性质" aria-hidden="true">#</a> 傅立叶变换的性质</h3>
<h4 id="对称性-对偶性" tabindex="-1"><a class="header-anchor" href="#对称性-对偶性" aria-hidden="true">#</a> 对称性（对偶性）</h4>
<p>若有 $x(t) \leftrightarrow X(\omega)$，则有 $X(t) \leftrightarrow 2\pi x(-\omega)$</p>
<h4 id="线性" tabindex="-1"><a class="header-anchor" href="#线性" aria-hidden="true">#</a> 线性</h4>
<p>若有 $x_{1}(t) \leftrightarrow X_{1}(\omega)$、$x_{2}(t) \leftrightarrow X_{2}(\omega)$，则有 $ax_{1}(t) + bx_{2}(t) \leftrightarrow aX_{1}(\omega) + bX_{2}(\omega)$</p>
<h4 id="尺度变换性" tabindex="-1"><a class="header-anchor" href="#尺度变换性" aria-hidden="true">#</a> 尺度变换性</h4>
<p>如果有 $x(t) \leftrightarrow X(\omega)$，则对于实常数 $a$，有 $x(at) \leftrightarrow \frac{1}{|a|} X\left( \frac{\omega}{a} \right)$</p>
<p>即若信号 $x(t)$ 在时间轴上被压缩到原信号的 $\frac{1}{a}$，则其频谱函数在频率轴上将展宽 $a$ 倍，而其幅值相应地减少至原信号幅值的 $\frac{1}{|a|}$</p>
<p>信号的持续时间与信号占有的频带宽成反比</p>
<h4 id="奇偶性" tabindex="-1"><a class="header-anchor" href="#奇偶性" aria-hidden="true">#</a> 奇偶性</h4>
<p>若 $x(t)$ 为时间 $t$ 的实函数，$x(t)$ 和 $X(\omega)$ 的奇偶性相同</p>
<h4 id="时移性" tabindex="-1"><a class="header-anchor" href="#时移性" aria-hidden="true">#</a> 时移性</h4>
<p>如果有 $x(t) \leftrightarrow X(\omega)$，则 $x(t - t_{0}) \leftrightarrow X(\omega) e^{-j\omega t_{0}}$</p>
<h4 id="频率性-调制性" tabindex="-1"><a class="header-anchor" href="#频率性-调制性" aria-hidden="true">#</a> 频率性（调制性）</h4>
<p>如果 $x(t) \leftrightarrow X(\omega)$，则 $x(t) e^{j\omega_{0}}t \leftrightarrow X(\omega - \omega_{0})$，其中 $\omega_{0}$ 为常数。</p>
<h4 id="卷积" tabindex="-1"><a class="header-anchor" href="#卷积" aria-hidden="true">#</a> 卷积</h4>
<p>如果有 $x(t) \leftrightarrow X(\omega)$、$h(t) \leftrightarrow H(\omega)$</p>
<ul>
<li>时域卷积：$x(t) * h(t) \leftrightarrow X(\omega) \cdot H(\omega)$</li>
<li>频域卷积：$x(t) \cdot h(t) \leftrightarrow \frac{1}{2\pi} X(\omega) * H(\omega)$</li>
</ul>
<h4 id="时域微分和积分" tabindex="-1"><a class="header-anchor" href="#时域微分和积分" aria-hidden="true">#</a> 时域微分和积分</h4>
<p>如果有 $x(t) \leftrightarrow X(\omega)$，则</p>
<p>$$
\frac{dx(t)}{dt} \leftrightarrow  j\omega X(\omega)
$$
$$
\int _{-\infty}^{t}x(t) , dt \leftrightarrow  \frac{1}{j\omega} X(\omega)
$$</p>
<p>条件是 $X(0) = 0$</p>
<p>$n$ 阶微分的傅里叶变换公式：</p>
<p>$$
\frac{d^{n}x(t)}{dt^{n}} \leftrightarrow (j\omega)^{n}X(\omega)
$$</p>
<h2 id="典型信号的频谱" tabindex="-1"><a class="header-anchor" href="#典型信号的频谱" aria-hidden="true">#</a> 典型信号的频谱</h2>
<h3 id="单位脉冲函数-delta-t" tabindex="-1"><a class="header-anchor" href="#单位脉冲函数-delta-t" aria-hidden="true">#</a> 单位脉冲函数 $\delta(t)$</h3>
<h4 id="定义" tabindex="-1"><a class="header-anchor" href="#定义" aria-hidden="true">#</a> 定义</h4>
<p>在 $\Delta$ 时间内激发一面积为 1 的矩形脉冲 $p_{\Delta}(t)$ ，当 $\Delta \to 0$ 时，该矩形脉冲的极限称为单位脉冲函数或 $\delta$ 函数</p>
<h4 id="性质" tabindex="-1"><a class="header-anchor" href="#性质" aria-hidden="true">#</a> 性质</h4>
<p>$$
\delta(t) = \begin{cases}
\infty,  &amp; t = 0 \
0,  &amp; t \neq 0
\end{cases}
$$
$$
\int <em>{-\infty}^{\infty}\delta(t) , dt = 1
$$
$$
\int <em>{-\infty}^{\infty}x(t)\delta(t - t</em>{0}) , dt = x(t</em>{0})
$$</p>
<p>$$
X(\omega) = F[\delta(t)] = \int _{-\infty}^{\infty}\delta(t)e^{-j\omega t} , dt = 1
$$</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>时移单位脉冲函数 $\delta(t - t_{0}) \leftrightarrow e^{-j\omega t_{0}}$
$$
F[\delta(t - t_{0})] = \int <em>{-\infty}^{\infty} \delta(t - t</em>{0})e^{-j\omega t} , dt = e^{-j\omega t_{0}}
$$</p>
</div>
<p>$$
1 \leftrightarrow  2\pi\delta(\omega)
$$
$$
e^{j\omega_{0}t} \leftrightarrow 2\pi \delta(\omega - \omega_{0})
$$</p>
<h4 id="卷积-1" tabindex="-1"><a class="header-anchor" href="#卷积-1" aria-hidden="true">#</a> 卷积</h4>
<p>$$
x(t) * \delta(t) = \delta(t) * x(t) =  x(t)
$$
$$
x(t) * \delta(t - t_{0}) = \delta(t - t_{0}) * x(t) = x(t - t_{0})
$$</p>
<h3 id="余弦函数" tabindex="-1"><a class="header-anchor" href="#余弦函数" aria-hidden="true">#</a> 余弦函数</h3>
<h4 id="余弦函数的频谱" tabindex="-1"><a class="header-anchor" href="#余弦函数的频谱" aria-hidden="true">#</a> 余弦函数的频谱</h4>
<p>$$
\begin{align}
\cos\omega_{0}t  &amp; \leftrightarrow  \pi[\delta(\omega - \omega_{0}) + \delta(\omega + \omega_{0})] \
\sin\omega_{0}t  &amp; \leftrightarrow  j\pi[\delta(\omega + \omega_{0}) - \delta(\omega - \omega_{0})]
\end{align}
$$</p>
<p>只有实频谱图，无虚频谱图</p>
<p>$$
\cos t \leftrightarrow  \pi\delta(\omega - 1) + \pi \delta(\omega + 1)
$$</p>
<h3 id="周期函数" tabindex="-1"><a class="header-anchor" href="#周期函数" aria-hidden="true">#</a> 周期函数</h3>
<h4 id="周期函数的频谱" tabindex="-1"><a class="header-anchor" href="#周期函数的频谱" aria-hidden="true">#</a> 周期函数的频谱</h4>
<p>$$
\begin{cases}
x(t) = \sum_{n = -\infty}^{\infty} C_{n}e^{jn\omega_{0} t} \
C_{n} = \frac{1}{T} \int <em>{-T /2}^{T/2} x(t) e^{-jn\omega</em>{0}t} , dt
\end{cases}
$$</p>
<p>$$
X(\omega) = 2\pi \sum_{n = -\infty}^{\infty} C_{n} \delta(\omega - n\omega_{0})
$$</p>
<h4 id="周期单位脉冲序列频谱" tabindex="-1"><a class="header-anchor" href="#周期单位脉冲序列频谱" aria-hidden="true">#</a> 周期单位脉冲序列频谱</h4>
<p>$$
\sum_{n = -\infty}^{\infty} \delta(t - kT) \leftrightarrow \omega_{0} \sum_{n = -\infty}^{\infty} \delta(\omega - n\omega_{0})
$$</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>记住特殊信号的频谱，并利用傅里叶变换性质进行计算</p>
</div>
</div></template>


