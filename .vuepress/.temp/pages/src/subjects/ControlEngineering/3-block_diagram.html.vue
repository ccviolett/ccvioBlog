<template><div><p>函数方块具有乘法运算功能，求和点具有加法运算功能</p>
<p>串联环节相乘、并联环节相加、反馈环节相叠</p>
<h2 id="反馈环节的传递函数" tabindex="-1"><a class="header-anchor" href="#反馈环节的传递函数" aria-hidden="true">#</a> 反馈环节的传递函数</h2>
<p>假设前向通道传递函数为$G(s)=X_{o}(s)/E(s)$，反馈通道传递函数为$H(s)=B(s)/X_o(s)$，则反馈环节传递函数为$\frac{G(s)}{1 \pm G(s)H(s)}$，其中若为负反馈调节则为正号，正反馈调节则为负号。</p>
<h2 id="方框图的变换法则" tabindex="-1"><a class="header-anchor" href="#方框图的变换法则" aria-hidden="true">#</a> 方框图的变换法则</h2>
<ul>
<li>各前向通道传递函数的乘积不变</li>
<li>各回路传递函数的乘积保持不变</li>
</ul>
<p><img src="/assets/images/match/subjects/ControlEngineering/EED7171C5d202312102310191.png" alt=""></p>
<p>由内而外简化</p>
<p><img src="/assets/images/match/subjects/ControlEngineering/bd460D4BeE202312111007969.png" alt=""></p>
</div></template>


