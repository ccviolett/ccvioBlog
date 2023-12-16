---
order: 50
date: 2023-12-15
---

# 第五章 信号分析与处理

重点：自/互相关函数的性质、定义、应用，功率谱，相干函数的定义、取值范围

## 相关分析

### 相关系数

$$
\rho_{xy} = \frac{E[(x - \mu_{x})(y - \mu_{y})]}{\sigma_{x}\sigma_{y}}
$$

### 自相关函数

$$
R_{x}(\tau) = \lim_{ T \to 0 } \frac{1}{T} \int _{0}^{T} x(t) x(t + \tau) \, dt 
$$

$$
\rho_{x}(\tau) = \frac{R_{x}(\tau) - \mu^{2}_{x}}{\sigma^{2}_{x}}
$$

#### 自相关函数的性质

1. 取值范围 $\mu_{x}^{2} - \sigma^{2}_{x} \leq R_{x}(\tau) \leq \mu_{x}^{2} + \sigma_{x}^{2}$
2. $R_{x}(0) = \lim_{ T \to \infty } \frac{1}{T}\int ^{T}_{0} x(t)x(t) \, dt = \psi_{x}^{2}$
3. $\tau \to \infty, \rho_{x}(\tau) \to 0, R_{x}(\tau)\to \mu_{x}^{2}$
4. $R_{x}(-\tau) = R_{x}(\tau)$
5. $A$、$f$ 有，$\varphi$ 缺失了，由 $R_{x}(\tau)$ 识别信号类型

#### 自相关函数的计算

### 互相关函数

$$
R_{xy}(\tau) = \lim_{ T \to \infty }  \frac{1}{T} \int ^{T}_{0} x(t)y(t + \tau) \, dt 
$$

#### 互相关函数的性质

- 非偶函数
- $\tau = \tau_{0}$ 时呈现最大值，反映 $x(t)$ 和 $y(t)$ 之间的滞后时间
#### 互相关函数的计算

#### 互相关函数的应用

- 相关滤波
- 相关测速
- 位置检测：石油管道破损位置定位
- 诊断：振动定位

## 功率谱分析

### 自功率谱密度函数

$$
\begin{cases}
S_{x}(f)  & = \int _{-\infty}^{\infty} R_{x}(\tau)e^{-j 2\pi f\tau} \, d\tau \\
R_{x}(\tau)  & = \int ^{\infty}_{-\infty} S_{x}(f) e^{j 2\pi f\tau} \, df
\end{cases}
$$

$S_{x}(f)$ 就是 $x(t)$ 的自功率谱密度函数

物理意义：信号平均功率

### 互功率谱密度函数

$$
\begin{cases}
S_{xy}(f) = \int_{-\infty}^{\infty} R_{x}(\tau)e^{-j 2\pi f \tau} \, d\tau  \\
R_{xy}(\tau) = \int _{-\infty}^{\infty} S_{xy}(f) e^{j 2\pi f\tau} \, df 
\end{cases}
$$

### 相干函数、倒频谱分析及应用

相干函数定义：相干函数是用来评价测试系统的输入信号与输出信号之间的因果关系的函数，即通过相干函数判别系统中输出信号的功率谱有多少是所测输入信号所引起的响应。$0 \leq \gamma_{xy}^{2} \leq 1$

倒频谱定义：倒频谱分析也叫二次频谱分析，是检测复杂谱图中周期分量的有效工具。
- 功率倒频谱：$C_{q} = |F\{\log S_{x}(f)\} |^{2}$
- 有效幅值倒频谱（倒频谱）：$C_{o}(q) = \sqrt{ C_{p}(q) }$

