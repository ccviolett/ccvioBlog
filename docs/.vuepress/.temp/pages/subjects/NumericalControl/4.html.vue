<template><div><h2 id="基本信息" tabindex="-1"><a class="header-anchor" href="#基本信息" aria-hidden="true">#</a> 基本信息</h2>
<ul>
<li>分值：5 分</li>
</ul>
<h2 id="重点" tabindex="-1"><a class="header-anchor" href="#重点" aria-hidden="true">#</a> 重点</h2>
<h3 id="软件结构模式" tabindex="-1"><a class="header-anchor" href="#软件结构模式" aria-hidden="true">#</a> 软件结构模式</h3>
<ul>
<li>前后台型结构模式
<ul>
<li>前台程序是一个实时中断服务程序
<ul>
<li>完成与机床动作直接相关的实时功能</li>
<li>包括位置控制、插补、辅助功能、面板扫描及输出</li>
</ul>
</li>
<li>后台程序是一个循环执行程序
<ul>
<li>完成准备和管理工作</li>
<li>包括输入译码、插补准备及管理等</li>
</ul>
</li>
</ul>
</li>
<li>中断型结构模式
<ul>
<li>整个软件是一个大的中断系统</li>
<li>从低到高分为 10 级，4、6、7、10 级为硬件终端，其余为软件中断</li>
</ul>
</li>
</ul>
<p>CNC 装置软件结构的一个特点是实时中断处理</p>
</div></template>


