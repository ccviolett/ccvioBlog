<template><div><h2 id="传递函数" tabindex="-1"><a class="header-anchor" href="#传递函数" aria-hidden="true">#</a> 传递函数</h2>
<p>在零初始条件下，线性定常系统输出量的拉氏变换与引起该输出的输入量的拉氏变换之比。其参数仅取决于系统本身的结构及参数，与系统的输入形式无关，表征了系统内在的固有动态特性。</p>
<p>其一般形式为：</p>
<p>$$
G(s) = \frac{X_o(s)}{X_i(s)} = \frac{b_{0}s^m+b_{1}s ^{m-1}+\dots+b_{m-1}s+b_{m}}{a_{0}s^n+a_{1}s^{n-1}+\dots+a_{n-1}s+a_{n}} = \frac{b_{0}(s-z_{1})(s-z_{2})\dots(s-z_{m})}{a_{0}(s-p_{1})(s-p_{2})\dots(s-pn)}
= \frac{N(s)}{D(s)}
$$</p>
<p>其中，$D(s) = 0$成为系统的特征方程，其根称为系统的特征根。特征方程决定着系统的动态特性，其最高阶次等于系统的阶次。</p>
<p>当$s = 0$时，$G(0) = \frac{b_m}{a_n} = K$称为系统的静态放大系数或静态增益。</p>
<p>其中$N(s) = b_0(s-z_1)(s-z_2)\cdots(s-z_n)$的根$z_i$称为传递函数的零点，$D(s)=a_0(s-p_1)(s-p_2)\cdots(s-p_n)$称为传递函数的极点</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>例：设单位反馈控制系统的开环传递函数为$G_k(s) = \frac{0.4s+1}{s(s+0.5)}$，则系统的开环零点为 -2.5，开环极点为 0、-0.5</p>
</div>
<h3 id="经典环节及其传递函数" tabindex="-1"><a class="header-anchor" href="#经典环节及其传递函数" aria-hidden="true">#</a> 经典环节及其传递函数</h3>
<table>
<thead>
<tr>
<th>环节</th>
<th>传递函数</th>
</tr>
</thead>
<tbody>
<tr>
<td>比例环节</td>
<td>$K$</td>
</tr>
<tr>
<td>一阶微分环节</td>
<td>$\tau s+1$</td>
</tr>
<tr>
<td>二阶微分环节</td>
<td>$\tau^2s^2+2\zeta Ts + 1$</td>
</tr>
<tr>
<td>积分环节</td>
<td>$\frac{1}{s}$</td>
</tr>
<tr>
<td>惯性环节</td>
<td>$\frac{1}{Ts+1}$</td>
</tr>
<tr>
<td>振荡环节</td>
<td>$\frac{1}{T^{2}s^{2}+2\zeta Ts+1}$</td>
</tr>
<tr>
<td>延迟环节</td>
<td>$e^{-\tau s}$</td>
</tr>
</tbody>
</table>
<h2 id="数学模型" tabindex="-1"><a class="header-anchor" href="#数学模型" aria-hidden="true">#</a> 数学模型</h2>
<h3 id="建立数学模型的一般步骤" tabindex="-1"><a class="header-anchor" href="#建立数学模型的一般步骤" aria-hidden="true">#</a> 建立数学模型的一般步骤</h3>
<p>分析系统工作原理和信号传递变换的过程，确定系统和各元件的输入、输出量；</p>
<p>从输入端开始，按照信号传递变换过程，依据各变量遵循的物理学定律，依次列写出各元件、部件的动态微分方程；</p>
<p>消去中间变量，得到描述元件或系统输入、输出变量之间关系的微分方程；</p>
<p>对方程进行标准化，右端输入，左端输出，导数降幂排列。</p>
<h3 id="机械系统的数学模型" tabindex="-1"><a class="header-anchor" href="#机械系统的数学模型" aria-hidden="true">#</a> 机械系统的数学模型</h3>
<p><img src="/assets/images/match/subjects/ControlEngineering/F34fdfAAdD202312110023642.png" alt=""></p>
<details class="custom-container details"><summary>例题1（机械系统的数学模型）</summary>
<p>::: tabs</p>
<p>@tab 题 1</p>
<p><img src="/assets/images/match/subjects/ControlEngineering/f4FbD54096202312110048183.png" alt=""></p>
<p>解：有$D_{1}[\dot{x}<em>{i}(t)- \dot{x}</em>{o}(t)] - D_{2}\dot{x}_{o}(t) = m\ddot{x}(t)$</p>
<p>得$ms^{2}X_{o}(s)+(D_{1}+D_{2})sX_{o}(s)=D_{1}sX_{i}(s)$</p>
<p>故$\frac{X_{o}(s)}{X_{i}(s)} = \frac{D_{1}s}{ms^{2}+(D_{1}+D_{2}s)s}$</p>
<p>@tab 题 2</p>
<p><img src="/assets/images/match/subjects/ControlEngineering/D08F7a569C202312110048070.png" alt=""></p>
<p>解：有
$$
\begin{cases}
k_{1}[x_{i}(t) - x_{o}(t)] + D[\dot{x}<em>{i}(t) - \dot{x}</em>{o}(t)] = k_{2}x_{o}(t) \
(k_{1}+k_{2})x_{o}(t)+D\dot{x}(t)=k_{1}x_{i}(t)+D\dot{x}(t) \
\end{cases}
$$</p>
<p>得 $(k_{1}+k_{2})X_{o}(s)+DsX_{o}(s)=k_{1}X_{i}(s)+DsX_{i}(s)$
故 $\frac{X_{o}(s)}{X_{i}(s)}=\frac{Ds+k_{1}}{Ds+k_{1}+k_{2}}$</p>
<p>@tab 题 3</p>
<p><img src="/assets/images/match/subjects/ControlEngineering/7e6A8F50Fa202312110051861.png" alt=""></p>
<p>解：设$k_1$和$D$之间的位移为$x(t)$</p>
<p>有$k_{1}[x_{i}(t)-x(t)]=D \frac{d(x(t)-x_{o}(t))}{dt}=k_{2}x_{o}(t)$</p>
<p>得$k_{1}[X_{i}(s)-X(s)]=Ds[X(s)-X_{o}(s)]=k_{2}X_{o}(s)$</p>
<p>故$\frac{X_{o}(s)}{X_{i}(s)}=\frac{k_{1}Ds}{(k_{1}+k_{2})Ds+k_{1}k_{2}}$
:::</p>
</details>
<h3 id="电路系统的数学模型" tabindex="-1"><a class="header-anchor" href="#电路系统的数学模型" aria-hidden="true">#</a> 电路系统的数学模型</h3>
<p><img src="/assets/images/match/subjects/ControlEngineering/e0850E1caC202312110026746.png" alt=""></p>
<details class="custom-container details"><summary>例题2（电路系统的数学模型）</summary>
<p>:::: tabs</p>
<p>@tab 题 1</p>
<p>求R-L-C 无源电路网络的传递函数。</p>
<p><img src="/assets/images/match/subjects/ControlEngineering/27AFB5DFDB202312102310206.png" alt=""></p>
<p>解：</p>
<p><strong>拉氏变换法</strong></p>
<p>$$
\begin{align}
&amp; \begin{cases}
u_{i}(t) =Ri(t)+L \frac{d}{dt}i(t)+\frac{1}{C}\int i(t) , dt \
u_{o}(t)=\frac{1}{C}\int i(t) , dt \to i(t) = C \frac{du_{o}(t)}{dt}
\end{cases} \
\Rightarrow &amp; LC \frac{d^{2}}{dt^{2}}u_{o}(t) + RC \frac{d}{dt}u_{o}(t) + u_{o}(t) = u_{i}(t)
\end{align}
$$</p>
<p>对等式的两边进行拉氏变换得：$LCs^{2}U_{o}(s) + RCsU_{o}(s) + U_{o}(s) = U_{i}(s)$</p>
<p>整理得$G(s) = \frac{U_{o}(s)}{U_{i}(s)} = \frac{1}{LCs^{2}+RCs+1}$</p>
<p><strong>等效复阻抗法</strong></p>
<p>$G(s) = \frac{U_{o}(s)}{U_{i}(s)} = \frac{\frac{1}{Cs}}{Ls + R + \frac{1}{Cs}}$</p>
<p>@tab 题 2</p>
<p>求R-L-C 无源电路网络的传递函数。</p>
<p><img src="/assets/images/match/subjects/ControlEngineering/EcdFeeFd58202312110051810.png" alt=""></p>
<p>解：</p>
<p><strong>等效复阻抗法</strong></p>
<p>$$
\begin{align}
G(s) &amp;= \frac{U_{o}(s)}{U_{i}(s)} = \frac{R_{2} + \frac{1}{C_{2}s}}{R_{1} \parallel \frac{1}{C_{1}s}+R_{2}+\frac{1}{C_{2}s}}  \ \
&amp;= \frac{R_{2}+\frac{1}{C_{2}s}}{\frac{R_{1}}{R_{1}C_{1}s+1}+R_{2}+\frac{1}{C_{2}s}} \
&amp;= \frac{R_{1}R_{2}C_{1}C_{2}s^{2}+(R_{1}C_{1}+R_{2}C_{2})s+1}{R_{1}R_{2}C_{1}C_{2}s^{2}+(R_{1}C_{1}+R_{2}C_{2}+R_{1}C_{2})s+1}
\end{align}
$$</p>
<p>@tab 题 3</p>
<p>求R-L-C 有源电路网络的传递函数。</p>
<p><img src="/assets/images/match/subjects/ControlEngineering/8eBF7DD3aD202312102310230.png" alt=""></p>
<p><strong>拉氏变换法</strong></p>
<p>由$RC \frac{du_{o}(t)}{dt} = -u_{i}(t)$可得$RCsU_{o}(s) = -U_{i}(s)$</p>
<p>故$G(s) = \frac{U_{o}(s)}{U_{i}(s)} = -\frac{1}{RCs}$</p>
<p><strong>等效复阻抗法</strong></p>
<p>$G(s) = \frac{U_{o}(s)}{U_{i}(s)} = \frac{-\frac{1}{Cs}}{R} = -\frac{1}{RCs}$</p>
<p>@tab 题 4</p>
<p>求R-L-C 有源电路网络的传递函数。</p>
<p><img src="/assets/images/match/subjects/ControlEngineering/dCEE6Ab48a202312102310226.png" alt=""></p>
<p>解：</p>
<p><strong>等效复阻抗法</strong></p>
<p>$$
G(s) = \frac{U_{o}(s)}{U_{i}(s)} = \frac{-R_{2} \parallel \frac{1}{Cs}}{R_{1}} = -\frac{\frac{R_{2}}{R_{2}Cs + 1}}{R_{1}} = -\frac{R_{2}}{R_{1}R_{2}Cs+R_{1}}
$$</p>
<p>::::</p>
</details>
</div></template>


