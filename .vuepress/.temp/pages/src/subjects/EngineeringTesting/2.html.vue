<template><div><h1 id="第二章-测试系统的基本特征" tabindex="-1"><a class="header-anchor" href="#第二章-测试系统的基本特征" aria-hidden="true">#</a> 第二章 测试系统的基本特征</h1>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>信号与系统之间的作用</p>
<p>系统对信号的作用</p>
</div>
<h2 id="线性系统基本特征" tabindex="-1"><a class="header-anchor" href="#线性系统基本特征" aria-hidden="true">#</a> 线性系统基本特征</h2>
<p>输入输出呈线性关系</p>
<h3 id="叠加性" tabindex="-1"><a class="header-anchor" href="#叠加性" aria-hidden="true">#</a> 叠加性</h3>
<p>系统对各输入之和的输出等于各单个输入的输出之和</p>
<h3 id="比例性" tabindex="-1"><a class="header-anchor" href="#比例性" aria-hidden="true">#</a> 比例性</h3>
<p>常数倍输入所得的输出等于原输入所得输出的常数倍</p>
<h3 id="微分性" tabindex="-1"><a class="header-anchor" href="#微分性" aria-hidden="true">#</a> 微分性</h3>
<p>系统对原输入信号的微分的响应等于原输出信号的微分</p>
<h3 id="积分性" tabindex="-1"><a class="header-anchor" href="#积分性" aria-hidden="true">#</a> 积分性</h3>
<p>当初始条件为零时，系统对原输入信号的积分的响应等于原输出信号的积分</p>
<h3 id="频率保持性-重点" tabindex="-1"><a class="header-anchor" href="#频率保持性-重点" aria-hidden="true">#</a> 频率保持性（重点）</h3>
<p>若系统的输入为某一频率的谐波信号，则系统的稳态输出将为同一频率的谐波信号。</p>
<h2 id="测试系统静态特性" tabindex="-1"><a class="header-anchor" href="#测试系统静态特性" aria-hidden="true">#</a> 测试系统静态特性</h2>
<h3 id="重复性-精度" tabindex="-1"><a class="header-anchor" href="#重复性-精度" aria-hidden="true">#</a> 重复性（精度）</h3>
<p>表示由同一观察者采用相同的测量条件、方法以及仪器对统一被测量所做的一组测量之间的接近程度。</p>
<p>表征测试仪器随机误差接近于零的程度。</p>
<h3 id="漂移" tabindex="-1"><a class="header-anchor" href="#漂移" aria-hidden="true">#</a> 漂移</h3>
<p>仪器输入未产生变化时其输出所发生的变化。</p>
<p>由仪器的内部温度变化和元件的不稳定性引起。</p>
<h3 id="精确度" tabindex="-1"><a class="header-anchor" href="#精确度" aria-hidden="true">#</a> 精确度</h3>
<p>测试系统的指示值和被测量真值得符合程度。</p>
<p>精确度是诸如非线性、迟滞、温度变化、漂移等一系列因素所导致的不确定度之和。</p>
<h3 id="灵敏度" tabindex="-1"><a class="header-anchor" href="#灵敏度" aria-hidden="true">#</a> 灵敏度</h3>
<p>测试系统在稳态下输出量的增量和输入量的增量之比</p>
<h3 id="分辨率" tabindex="-1"><a class="header-anchor" href="#分辨率" aria-hidden="true">#</a> 分辨率</h3>
<p>当一个被测量从一个任意值开始连续增加时，使指示值产生一定变化量所需的输入量的变化量</p>
<h3 id="线性度" tabindex="-1"><a class="header-anchor" href="#线性度" aria-hidden="true">#</a> 线性度</h3>
<p>测试系统输入输出曲线与理想直线的偏离程度，即非线性误差</p>
<p>理想直线是一般不存在或者很难获得的准确结果，利用测试数据我们可以通过计算获得拟合直线代替：</p>
<h4 id="端点连线法" tabindex="-1"><a class="header-anchor" href="#端点连线法" aria-hidden="true">#</a> 端点连线法</h4>
<p>简单、方便、偏差大</p>
<h4 id="最小二乘法" tabindex="-1"><a class="header-anchor" href="#最小二乘法" aria-hidden="true">#</a> 最小二乘法</h4>
<p>残差  $\Delta_{i} = y_{i} - (a + bx_{i})$，其中
$$
b = \frac{n\sum x_{i}y_{i} - \sum x_{i}\sum y_{i}}{n \sum x_{i}^{2} - (\sum x_{i})^{2}}
$$</p>
<p>$$
a = \frac{\sum x_{i}^{2} \sum y_{i} - \sum x_{i} \sum x_{i}y_{i}}{n \sum x_{i}^{2} - \left( \sum x_{i} \right)^{2}}
$$</p>
<p>精度高</p>
<h3 id="回程误差" tabindex="-1"><a class="header-anchor" href="#回程误差" aria-hidden="true">#</a> 回程误差</h3>
<p>测试系统在正行程和反行程的输入输出曲线不重合的程度，即空程误差、滞后</p>
<h3 id="零点稳定性" tabindex="-1"><a class="header-anchor" href="#零点稳定性" aria-hidden="true">#</a> 零点稳定性</h3>
<p>在被测量回到零值且其他变化因素被排除之后，仪器回到零指示值的能力。</p>
<h2 id="测试系统动态特性" tabindex="-1"><a class="header-anchor" href="#测试系统动态特性" aria-hidden="true">#</a> 测试系统动态特性</h2>
<h3 id="测试系统数学模型" tabindex="-1"><a class="header-anchor" href="#测试系统数学模型" aria-hidden="true">#</a> 测试系统数学模型</h3>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>描述测试系统的各种模型</p>
</div>
<h4 id="频域描述" tabindex="-1"><a class="header-anchor" href="#频域描述" aria-hidden="true">#</a> 频域描述</h4>
<p>$H(j\omega)$ 在频域中描述系统，称为测试系统的频率响应函数，是传递函数的特例。</p>
<p>$$
H(j\omega) = \frac{Y(j\omega)}{X(j\omega)} = A(\omega)e^{j\varphi(\omega)}
$$</p>
<p>其中：</p>
<ul>
<li>幅频特性 $A(\omega) = \frac{|Y(\omega)|}{|X(\omega)|} = |H(j\omega)|$</li>
<li>相频特性 $\varphi(\omega) = \arctan H(j\omega) = \varphi_{y}(\omega) - \varphi_{x}(\omega)$</li>
</ul>
<h4 id="复域描述" tabindex="-1"><a class="header-anchor" href="#复域描述" aria-hidden="true">#</a> 复域描述</h4>
<ul>
<li>$H(s)$ 在复域中描述系统</li>
</ul>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>输入 $x(t)$、输出 $y(t)$，。。。。。。 $h(t)$，则 $y(t) = x(t) * H(t)$</p>
</div>
<h4 id="各种模型之间的关系" tabindex="-1"><a class="header-anchor" href="#各种模型之间的关系" aria-hidden="true">#</a> 各种模型之间的关系</h4>
<h3 id="频率响应函数" tabindex="-1"><a class="header-anchor" href="#频率响应函数" aria-hidden="true">#</a> 频率响应函数</h3>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>物理意义：体现了系统对不同频率信号的作用</p>
</div>
<h3 id="一阶、二阶系统的动态特性" tabindex="-1"><a class="header-anchor" href="#一阶、二阶系统的动态特性" aria-hidden="true">#</a> 一阶、二阶系统的动态特性</h3>
<h4 id="一阶惯性系统" tabindex="-1"><a class="header-anchor" href="#一阶惯性系统" aria-hidden="true">#</a> 一阶惯性系统</h4>
<p>若系统满足</p>
<p>$$
a_{1} \frac{dy(t)}{dt} + a_{0}y(t) = b_{0}x(t)
$$
则称该系统为一阶测试系统或一阶惯性系统。</p>
<p>传递函数 $H(s) = \frac{K}{(\tau s + 1)}$，其中</p>
<ul>
<li>$K = \frac{b_{0}}{a_{0}}$ 为系统静态增益</li>
<li>$\tau = \frac{a_{1}}{a_{0}}$ 为系统时间常数</li>
</ul>
<p>频率响应函数</p>
<ul>
<li>$A(\omega) = |H(j\omega)| = \frac{1}{\sqrt{ 1 + (\tau\omega)^{2} }}$</li>
<li>$\varphi(\omega) = \angle H(j\omega) = -\arctan \omega \tau$</li>
</ul>
<h4 id="二阶惯性系统" tabindex="-1"><a class="header-anchor" href="#二阶惯性系统" aria-hidden="true">#</a> 二阶惯性系统</h4>
<p>$$
a_{2} \frac{d ^{2} y(t)}{dt^{2}} + a_{1} \frac{dy(t)}{dt} + a_{0}y(t) = b_{0}x(t)
$$</p>
<p>传递函数</p>
<p>$$
H(s) = \frac{K}{\frac{s^{2}}{\omega_{n^{2}}} + \frac{2\zeta s}{\omega_{n} } + 1}
$$</p>
<ul>
<li>$K = \frac{b_{0}}{a_{0}}$ 为系统静态灵敏度</li>
<li>$\omega_{n} = \sqrt{ \frac{a_{0}}{a_{2}} }$ 为系统无阻尼固有频率</li>
<li>$\zeta = \frac{a_{1}}{2 \sqrt{ a_{0}a_{2} }}$ 为系统阻尼比</li>
</ul>
<p>频率特性</p>
<ul>
<li>$A(\omega) = |H(j\omega)| = K \frac{1}{\sqrt{ \left[ 1 - \left( \frac{\omega}{\omega_{n}} \right)^{2} \right]^{2} + 4\zeta^{2}\left( \frac{\omega}{\omega_{n}} \right)^{2} }}$</li>
<li>$\varphi(\omega) = -\arctan \frac{2\zeta \frac{\omega}{\omega_{n}}}{1 - \left( \frac{\omega}{\omega_{n}} \right)^{2}}$</li>
</ul>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>为何只研究一、二阶系统？</p>
<p>任何一个系统均可视为是多个一阶、二阶系统的并联。也可将其转换为若干个一阶、二阶系统的串联。</p>
</div>
<h3 id="一阶、二阶系统对典型输入的响应" tabindex="-1"><a class="header-anchor" href="#一阶、二阶系统对典型输入的响应" aria-hidden="true">#</a> 一阶、二阶系统对典型输入的响应</h3>
<p><img src="http://localhost:8080/assets/images/match/subjects/ControlEngineering/3dC6BE49Bb202312111017837.png" alt=""></p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>0.707</p>
</div>
<h2 id="测试系统实现精确测试条件" tabindex="-1"><a class="header-anchor" href="#测试系统实现精确测试条件" aria-hidden="true">#</a> 测试系统实现精确测试条件</h2>
<p>从数学角度说明</p>
<p>$$
\begin{align}
y(t)  &amp;  = Kx(t - t_{0}) \
Y(j\omega)  &amp;  = Kx(j\omega)e^{-j\omega t_{0}} \
H(j\omega)  &amp;  = \frac{Y(j\omega)}{X(j\omega)} = K e^{-j\omega t_{0}} \
A(j\omega)  &amp;  = K \
\varphi(\omega)  &amp;  = -\omega t_{0}
\end{align}
$$</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>所有频率成分相位滞后相同？</p>
</div>
</div></template>


