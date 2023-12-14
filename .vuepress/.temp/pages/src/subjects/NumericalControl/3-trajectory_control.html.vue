<template><div><h2 id="非第一象限的顺、逆圆弧插补计算" tabindex="-1"><a class="header-anchor" href="#非第一象限的顺、逆圆弧插补计算" aria-hidden="true">#</a> 非第一象限的顺、逆圆弧插补计算</h2>
<p>逐点比较法的四个节拍：偏差判断、进给、偏差计算、终点判别</p>
<p><img src="/assets/images/match/subjects/NumericalControl/bd4edA05Aa1701056688285-f6633b80-4e5f-4a44-a680-bcd7ac457410.png" alt="截屏2023-11-27 11.44.43.png"><img src="/assets/images/match/subjects/NumericalControl/ec4BA8F9a11701056770777-231a1379-ee74-468f-9d06-b200f56461a8.png" alt="截屏2023-11-27 11.46.06.png"></p>
<ul>
<li>在第一象限中
<ul>
<li>直线插补$\begin{cases}
F_{i + 1} = F_{i} - y_{e}   &amp; (F_{i} \geq 0) \
F_{i + 1} = F_{i} + x_{e}   &amp; (F_{i} &lt; 0)
\end{cases}$</li>
<li>逆圆弧插补$\begin{cases}
F_{i + 1} = F_{i} - 2x_{i} + 1   &amp; (F_{i} \geq 0) \
F_{i + 1} = F_{i} + 2y_{i} + 1   &amp; (F_{i} &lt; 0)
\end{cases}$</li>
<li>顺圆弧插补$\begin{cases}
F_{i + 1} = F_{i} - 2y_{i} + 1   &amp; (F_{i} \geq 0) \
F_{i + 1} = F_{i} + 2x_{i} + 1   &amp; (F_{i} &lt; 0)
\end{cases}$</li>
</ul>
</li>
<li>其余象限中以原点作镜像变换</li>
<li>要考虑跨象限的情况</li>
</ul>
<details class="custom-container details"><summary>例</summary>
<p>圆弧插补设有第一象限逆圆弧$AB$，起点为$A(5, 0)$，终点为$B(0, 5)$，用逐点比较法进行插补计算，并绘制出插补轨迹。</p>
<p>解：插补所需的总步数$n = |5 - 0| + |0 - 5| = 10$</p>
<p>开始加工时刀具在起点，即在圆弧上，$F_0 = 0$，插补计算过程如表，插补轨迹如图：</p>
<p><img src="/assets/images/match/subjects/NumericalControl/A1eAB81adc1701055893505-3f76b0fe-771d-4fb8-ba95-3cebc812c9f0.png" alt="截屏2023-11-27 11.31.27.png"></p>
<p><img src="/assets/images/match/subjects/NumericalControl/DCBf23f35a1701055878750-873ca840-d0f7-40e0-ae6c-feb7a2714bf9.png" alt="截屏2023-11-27 11.31.13.png"></p>
</details>
<h2 id="数字积分法的直线插补" tabindex="-1"><a class="header-anchor" href="#数字积分法的直线插补" aria-hidden="true">#</a> 数字积分法的直线插补</h2>
<p><img src="/assets/images/match/subjects/NumericalControl/5EFC7aE5621701056796530-6098479e-00f7-4fc4-a029-82c25b19d37a.png" alt="截屏2023-11-27 11.46.29.png"><img src="/assets/images/match/subjects/NumericalControl/Bff0297fe61701056994216-70e30b37-8775-44cc-8e86-48d4804ee048.png" alt="截屏2023-11-27 11.49.50.png"></p>
<details class="custom-container details"><summary>例</summary>
<p>直线插补设有一直线 OA，起点为坐标原点，终点 A 的坐标为$(4, 6)$。试用 DDA 法直线插补此直线。</p>
<p>解：$JV_x = 4$、$JV_y = 6$，选寄存器位数$N= 3$，则累加次数$m = 2^3 = 8$，插补计算过程如表，插补轨迹如图。</p>
<p><img src="/assets/images/match/subjects/NumericalControl/aA4Ad4dbbB1701056805680-043fdc66-63ae-459d-ac62-8cd6d59b009d.png" alt="截屏2023-11-27 11.46.41.png"></p>
<p><img src="/assets/images/match/subjects/NumericalControl/df342F38Ff1701056815776-34fd755d-7302-427f-b30d-31891d453c51.png" alt="截屏2023-11-27 11.46.52.png"></p>
</details>
<h2 id="刀补的三个作用" tabindex="-1"><a class="header-anchor" href="#刀补的三个作用" aria-hidden="true">#</a> 刀补的三个作用</h2>
<ol>
<li>在编程时可以不考虑刀具的半径，直接按图样所给尺寸编程，在实际加工时只要输入刀具的半径即可。</li>
<li>简化粗加工程序的编制。通过改变刀具半径补偿量，则可用同一刀具、同一程序完成不同切削余量下的加工。</li>
<li>刀具重磨或刀具磨损后半径变小的补偿。</li>
</ol>
<h2 id="刀补的三个步骤" tabindex="-1"><a class="header-anchor" href="#刀补的三个步骤" aria-hidden="true">#</a> 刀补的三个步骤</h2>
<ol>
<li>建立刀补</li>
<li>刀补执行</li>
<li>刀补撤销</li>
</ol>
<h2 id="c-刀补补偿类型、判断方法、转接方法与轨迹计算" tabindex="-1"><a class="header-anchor" href="#c-刀补补偿类型、判断方法、转接方法与轨迹计算" aria-hidden="true">#</a> C 刀补补偿类型、判断方法、转接方法与轨迹计算</h2>
<p><img src="/assets/images/match/subjects/NumericalControl/dA0aefdAB91701057382673-e0e9a7ee-0a79-40fa-979b-3d82ffc350f3.png" alt="截屏2023-11-27 11.56.15.png"></p>
<p><img src="/assets/images/match/subjects/NumericalControl/eFE645E8351701057396309-b14d2454-eaa6-4f8b-a5c8-9fd309495d5a.png" alt="截屏2023-11-27 11.56.29.png"></p>
<p><img src="/assets/images/match/subjects/NumericalControl/A0cA8bbEFF1701057453561-b06786df-40d4-40d3-86e4-d4d5d95cb748.png" alt="截屏2023-11-27 11.57.28.png"><img src="/assets/images/match/subjects/NumericalControl/dcCDd5cd6F1701057354455-019cc958-28bd-4e31-9424-a88abd15d697.png" alt="截屏2023-11-27 11.55.49.png"></p>
<h2 id="进给速度和加速度控制的特点与区别" tabindex="-1"><a class="header-anchor" href="#进给速度和加速度控制的特点与区别" aria-hidden="true">#</a> 进给速度和加速度控制的特点与区别</h2>
<p>要求：</p>
<ul>
<li>足够的速度范围和灵活的指定方式</li>
<li>启动快而不失步，停止位置准备而不超程</li>
<li>必须按一定规律完成升速和降速的过程</li>
<li>防止产生冲击、失步、超程或振荡</li>
</ul>
<p>在使用脉冲增量插补算法的开环系统中：</p>
<ul>
<li>速度控制：控制向步进电机发出脉冲的频率</li>
<li>加速度控制：改变输入脉冲的时间间隔，加速时是脉冲串逐渐加密，减速时使脉冲串逐渐稀疏</li>
</ul>
<p>在闭环或半闭环系统中：</p>
<ul>
<li>速度控制：确定一个插补周期的轮廓步长</li>
<li>加速度控制：软件实现</li>
</ul>
</div></template>


