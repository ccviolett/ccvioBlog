<template><div><h2 id="坐标轴方向的确定" tabindex="-1"><a class="header-anchor" href="#坐标轴方向的确定" aria-hidden="true">#</a> 坐标轴方向的确定</h2>
<p>先定 Z+，在定 X+，再定 Y+</p>
<h2 id="机床坐标系、加工坐标系、相对坐标系三者之间的关系" tabindex="-1"><a class="header-anchor" href="#机床坐标系、加工坐标系、相对坐标系三者之间的关系" aria-hidden="true">#</a> 机床坐标系、加工坐标系、相对坐标系三者之间的关系</h2>
<ul>
<li>机床坐标系即数控机床的固定坐标系</li>
<li>机床坐标系一般不作为编程坐标系，仅作为工件坐标系的参考坐标系</li>
<li>工件坐标系是以工件原点为零点建立的一个坐标系，编程时，所有尺寸皆基于此坐标系计算</li>
<li>现代数控机床可以设置多个工件坐标系，加工时通过 G 指令进行变换</li>
<li>机床坐标系和工件坐标系来通过对刀来确定联系</li>
</ul>
<h2 id="立体轮廓表面加工方法" tabindex="-1"><a class="header-anchor" href="#立体轮廓表面加工方法" aria-hidden="true">#</a> 立体轮廓表面加工方法</h2>
<p><img src="/assets/images/match/subjects/NumericalControl/bEb62aC4dE202312111748950.png" alt=""></p>
<h2 id="编程汇总" tabindex="-1"><a class="header-anchor" href="#编程汇总" aria-hidden="true">#</a> 编程汇总</h2>
<h2 id="_1-g-指令汇总" tabindex="-1"><a class="header-anchor" href="#_1-g-指令汇总" aria-hidden="true">#</a> 1. G 指令汇总</h2>
<table>
<thead>
<tr>
<th>指令</th>
<th>作用</th>
<th>格式</th>
<th>备注</th>
</tr>
</thead>
<tbody>
<tr>
<td>G90</td>
<td>设置绝对坐标模式</td>
<td></td>
<td></td>
</tr>
<tr>
<td>G91</td>
<td>设置相对坐标模式</td>
<td></td>
<td></td>
</tr>
<tr>
<td>G54~G59</td>
<td>选择工件坐标系</td>
<td></td>
<td></td>
</tr>
<tr>
<td>G00</td>
<td>快速点定位</td>
<td></td>
<td>课本 P32</td>
</tr>
<tr>
<td>G01</td>
<td>直线插补</td>
<td><code v-pre>G01 X_ Y_ Z_ F_</code></td>
<td></td>
</tr>
<tr>
<td>G02</td>
<td>顺时针圆弧插补</td>
<td><code v-pre>G02 X_ Y_ [I_ J_]/[R_] F_</code></td>
<td>格式以在 XY 平面上为例，在车床中，凸逆凹顺，R 有正负</td>
</tr>
<tr>
<td>G03</td>
<td>逆时针圆弧插补</td>
<td><code v-pre>G03 X_ Y_ [I_ J_]/[R_] F_</code></td>
<td>格式以在 XY 平面上为例，在车床中，凸逆凹顺，R 有正负</td>
</tr>
<tr>
<td>G04</td>
<td>暂停</td>
<td><code v-pre>G04 P_</code></td>
<td>用于光整成圆，一般时间为 10s</td>
</tr>
<tr>
<td>G40</td>
<td>设置取消刀补</td>
<td></td>
<td></td>
</tr>
<tr>
<td>G41</td>
<td>设置左刀补</td>
<td><code v-pre>G41 G00/G01/G02/G03 X_ Y_</code></td>
<td>格式以在 XY 平面上为例，在运动过程中建立刀补</td>
</tr>
<tr>
<td>G42</td>
<td>设置右刀补</td>
<td><code v-pre>G42 G00/G01/G02/G03 X_ Y_</code></td>
<td>格式以在 XY 平面上为例，在运动过程中建立刀补</td>
</tr>
<tr>
<td>G43</td>
<td>设置刀具长度正补偿</td>
<td><code v-pre>G43 Z_ H_</code></td>
<td></td>
</tr>
<tr>
<td>G44</td>
<td>设置刀具长度逆补偿</td>
<td><code v-pre>G44 Z_ H_</code></td>
<td></td>
</tr>
</tbody>
</table>
<h2 id="_2-m-指令汇总" tabindex="-1"><a class="header-anchor" href="#_2-m-指令汇总" aria-hidden="true">#</a> 2. M 指令汇总</h2>
<table>
<thead>
<tr>
<th>指令</th>
<th>作用</th>
<th>备注</th>
</tr>
</thead>
<tbody>
<tr>
<td>M00</td>
<td>程序停止</td>
<td>模态信息被全部保留，启动后继续执行下一段</td>
</tr>
<tr>
<td>M01</td>
<td>程序计划暂停</td>
<td>在操作面板上按下“任意暂停键”生效，等价于 M00</td>
</tr>
<tr>
<td>M02</td>
<td>程序结束</td>
<td>使数控系统处于复位状态</td>
</tr>
<tr>
<td>M30</td>
<td>程序结束，返回起点</td>
<td>在 M02 的基础上令程序回到开始状态并保留模态信息</td>
</tr>
<tr>
<td>M03</td>
<td>主轴正转</td>
<td>控制主轴往正方向看去是顺时针</td>
</tr>
<tr>
<td>M04</td>
<td>主轴反转</td>
<td></td>
</tr>
<tr>
<td>M05</td>
<td>主轴停转</td>
<td></td>
</tr>
<tr>
<td>M06</td>
<td>自动换刀指令</td>
<td></td>
</tr>
<tr>
<td>M07/M08</td>
<td>冷却液开</td>
<td></td>
</tr>
<tr>
<td>M09</td>
<td>冷却液关</td>
<td></td>
</tr>
<tr>
<td>M10</td>
<td>工件夹紧</td>
<td></td>
</tr>
<tr>
<td>M11</td>
<td>工件松开</td>
<td></td>
</tr>
<tr>
<td>M98</td>
<td>子程序调用</td>
<td></td>
</tr>
<tr>
<td>M99</td>
<td>子程序返回</td>
<td></td>
</tr>
</tbody>
</table>
<h2 id="_3-其他功能字" tabindex="-1"><a class="header-anchor" href="#_3-其他功能字" aria-hidden="true">#</a> 3. 其他功能字</h2>
<table>
<thead>
<tr>
<th>指令</th>
<th>作用</th>
</tr>
</thead>
<tbody>
<tr>
<td>F</td>
<td>设置进给速度</td>
</tr>
<tr>
<td>S</td>
<td>主轴转速</td>
</tr>
<tr>
<td>T</td>
<td>刀具功能字</td>
</tr>
</tbody>
</table>
<h2 id="_4-外径粗精加工循环-g70-g71" tabindex="-1"><a class="header-anchor" href="#_4-外径粗精加工循环-g70-g71" aria-hidden="true">#</a> 4. 外径粗精加工循环 G70/G71</h2>
<p>格式：</p>
<ul>
<li><code v-pre>G71 U_ R_</code></li>
<li><code v-pre>G71 P_ Q_ U_ W_ F_ [S_] [T_]</code></li>
<li><code v-pre>G70 P_ Q_</code></li>
</ul>
<p>精加工的参数必须写于 P Q 段内，不可写在 G70.</p>
<h2 id="_5-直螺纹切削循环-g82" tabindex="-1"><a class="header-anchor" href="#_5-直螺纹切削循环-g82" aria-hidden="true">#</a> 5. 直螺纹切削循环 G82</h2>
<p>格式：<code v-pre>G82 X(U)_ Z(W)_ R_ E_ C_ P_ F_</code></p>
<ul>
<li>其中 <code v-pre>R_ E_</code> 为尾退量，可省略表示不用回退功能</li>
<li>其中 <code v-pre>C_</code> 为头数</li>
<li>其中 <code v-pre>F_</code> 为导程</li>
</ul>
<p>导程 = 螺距 * 头数</p>
<p>C 为 0 或 1 时切削单头螺纹</p>
<p>课本 P47、P49</p>
<p>若有退刀槽，则螺纹终点在槽内。</p>
<h2 id="车削加工" tabindex="-1"><a class="header-anchor" href="#车削加工" aria-hidden="true">#</a> 车削加工</h2>
<p>编程只有两道大题，包含了所有的知识点，没有其他类型的问题，会明确粗加工、精加工，会给定图纸、尺寸，使用混合坐标编程方式，而不是单纯的绝对坐标或相对坐标编程。铣削不用考虑顺铣、逆铣，注意编号、行号、程序名</p>
<p>重点了解车削螺纹加工，默认切槽刀宽度和槽宽度相等</p>
<p>::: tabs
@tab 例1</p>
<p>用直线插补指令编程</p>
<p><img src="/assets/images/match/subjects/NumericalControl/FacbA7c4a41700991650709-ab2023bd-d155-447e-9d97-87d197de337a.png" alt="截屏2023-11-26 17.40.47.png"></p>
<p><img src="/assets/images/match/subjects/NumericalControl/beED5Ff17A1700991692743-4877bd66-cfbf-4855-8b82-7558e459c11b.png" alt="截屏2023-11-26 17.41.30.png"></p>
<p>@tab 例2</p>
<p>使用 G90、G91 编程要求刀具由原点按顺序移动到 1、2、3 点，然后回到原点。</p>
<p><img src="/assets/images/match/subjects/NumericalControl/C14B074A8F1700991784705-17efbe53-ae69-480a-ac05-357726de0393.png" alt="截屏2023-11-26 17.43.02.png"></p>
<p><img src="/assets/images/match/subjects/NumericalControl/43DBbD75e51700991799418-9dd0af3e-c49d-4510-bd55-a428701862ac.png" alt="截屏2023-11-26 17.43.16.png"></p>
<p>@tab 例3</p>
<p>使用工件坐标系编程要求刀具从当前点移动到 A 点，再从 A 点移动到 B 点。</p>
<p><img src="/assets/images/match/subjects/NumericalControl/dCfcDd0BB61700991970807-1e278b29-c121-427e-a312-d9ccfcddd439.png" alt="截屏2023-11-26 17.46.07.png"></p>
<p><img src="/assets/images/match/subjects/NumericalControl/fb883a5AaA1700991984655-2a53c3db-cb6c-497f-86a6-b7def493d2d2.png" alt="截屏2023-11-26 17.46.21.png"></p>
<p>@tab 例4</p>
<p>按同样的轨迹分别用直径、半径编程车削加工如图所示的工件。</p>
<p><img src="/assets/images/match/subjects/NumericalControl/d35CC2a63B1700992048207-b50c8196-5137-4f7a-bf46-13909f482d06.png" alt="截屏2023-11-26 17.47.25.png"></p>
<p><img src="/assets/images/match/subjects/NumericalControl/BF69bC4Ed41700992058654-fd78b698-0b9b-4e5c-a665-ac3486f8d849.png" alt="截屏2023-11-26 17.47.36.png"></p>
<p>@tab 例5</p>
<p>用直线插补指令编程车削加工如图所示的零件轮廓</p>
<p><img src="/assets/images/match/subjects/NumericalControl/f8cBaaE7781700992099655-354b44f4-e263-471f-88f4-edf5aacb0103.png" alt="截屏2023-11-26 17.48.16.png"></p>
<p><img src="/assets/images/match/subjects/NumericalControl/0b0eD22cBE1700992115970-6885bd1e-4d43-4bb1-84d1-7221178f69ab.png" alt="截屏2023-11-26 17.48.33.png"></p>
<p><img src="/assets/images/match/subjects/NumericalControl/F46Da5ee4E1700992123317-ee409c4e-802d-4e1b-9227-0e45c7c866e6.png" alt="截屏2023-11-26 17.48.40.png"></p>
<p>@tab 例6</p>
<p>使用 G02 对劣弧和优弧编程铣削如图所示的圆弧</p>
<p><img src="/assets/images/match/subjects/NumericalControl/AEf3CBeE641700992216556-b4b02767-569f-48d9-b39c-b0fb7ad38a29.png" alt="截屏2023-11-26 17.50.12.png"></p>
<p><img src="/assets/images/match/subjects/NumericalControl/ED4A7dB0C61700992225881-a51e3fd2-5242-4168-82e4-ac1f22dfe2e2.png" alt="截屏2023-11-26 17.50.22.png"></p>
<p>@tab 例7</p>
<p>用圆弧插补指令编程车削如图所示的圆弧</p>
<p><img src="/assets/images/match/subjects/NumericalControl/5d2804Ab5E1700992270145-7c85ef38-9c52-4f09-a746-dc62fe4a9a68.png" alt="截屏2023-11-26 17.51.07.png"></p>
<p><img src="/assets/images/match/subjects/NumericalControl/BBCFe8fD101700992279639-6553ee0b-944a-4e63-a101-2d34c24cabfc.png" alt="截屏2023-11-26 17.51.16.png"></p>
<p><img src="/assets/images/match/subjects/NumericalControl/6F081AeA281700992287023-fed840eb-18d9-4720-9c6d-ccc18ce31f47.png" alt="截屏2023-11-26 17.51.24.png"></p>
<p>@tab 例8</p>
<p>考虑刀具半径补偿编制加工程序要求建立如图所示的工件坐标系，按箭头所指示的路径进行加工，设加工开始时刀具距离工件上表面 50mm，切削深度为 10mm。</p>
<p><img src="/assets/images/match/subjects/NumericalControl/9ccA9f21b21700992358624-f7ad8e80-0657-440a-a84c-fc41a6c69fb8.png" alt="截屏2023-11-26 17.52.35.png"></p>
<p><img src="/assets/images/match/subjects/NumericalControl/0ADfA57fBC1700992374909-d9d8d20b-0ca7-4d8d-ab81-f43734beff9b.png" alt="截屏2023-11-26 17.52.52.png"></p>
<p>@tab 例9</p>
<p>用 G80 编程加工图示零件</p>
<p><img src="/assets/images/match/subjects/NumericalControl/AF88Cc81aC1700992457802-d7234342-4e59-4c67-ae71-c5b4300a4ef7.png" alt="截屏2023-11-26 17.54.14.png"></p>
<p>分析此图，每次切削起点位，距工件端面 4mm，由相似三角形得$I = -34/30 \times 7.5 = -8.5$。可设计进刀量（直径值）为 4.5mm、4.5mm、4.5mm、4.5mm、2mm，第四次切削速度降低到 40mm/min 做半精加工。加工轨迹如图</p>
<p><img src="/assets/images/match/subjects/NumericalControl/cd3D630DD41700992474152-ad2bdc56-131d-4598-bede-a7d5a37df5ee.png" alt="截屏2023-11-26 17.54.31.png"></p>
<p>@tab 例10</p>
<p>用 G81 指令编程，点画线代表毛坯</p>
<p><img src="/assets/images/match/subjects/NumericalControl/eaBEfDcBC81700992625484-3a86b559-a8ab-476b-9be4-14923ad385d3.png" alt="截屏2023-11-26 17.57.01.png"></p>
<p>分析此图，每次切削起点位，距工件外圆面 3mm，由相似三角形得$K = -18/15 \times 5 = -6$，可设计进刀量为 3mm、3mm、3mm、1mm，第四次切削速度降低到 40mm/min 做半精加工。</p>
<p><img src="/assets/images/match/subjects/NumericalControl/3CDf9Ea5F51700992696173-058c719a-2b26-4a87-a5e8-5f50807de3b6.png" alt="截屏2023-11-26 17.58.13.png"></p>
<p>@tab 例11</p>
<p>对如图所示的圆柱螺纹编程，螺纹导程为 1.5mm</p>
<p><img src="/assets/images/match/subjects/NumericalControl/ba8faEE5A21700992741326-2d13283c-5583-444f-a4b6-1cfeec925e1f.png" alt="截屏2023-11-26 17.58.58.png"></p>
<p><img src="/assets/images/match/subjects/NumericalControl/1b85DAfBCf1700992749056-23be0540-4650-4314-99a4-063a37a47506.png" alt="截屏2023-11-26 17.59.05.png"></p>
<p><img src="/assets/images/match/subjects/NumericalControl/d3fFCfdBFf1700992759628-63b91111-3374-434b-ba94-86bf03b8d146.png" alt="截屏2023-11-26 17.59.16.png"></p>
<p>@tab 例12</p>
<p>用 G82 指令编程，毛坯外形已加工完成</p>
<p><img src="/assets/images/match/subjects/NumericalControl/7cdc6bc5E11700992832329-59b78f84-59db-43cf-8ab6-1118f7aee9b4.png" alt="截屏2023-11-26 18.00.29.png"></p>
<p><img src="/assets/images/match/subjects/NumericalControl/0ADfA57fBC1700992374909-d9d8d20b-0ca7-4d8d-ab81-f43734beff9b.png" alt="截屏2023-11-26 17.52.52.png"></p>
<p>@tab 例13</p>
<p>用外径粗加工循环编制如图所示的零件的加工程序要求循环起始点在 $A(46, 3)$，切削深度为 2mm（半径量），退刀量为 1mm，X 方向精加工余量为 0.4mm，Z 方向精加工余量为 0.1mm，其中点划线部分为工件毛胚。</p>
<p><img src="/assets/images/match/subjects/NumericalControl/eE417Feac71700992950925-32e0fae6-f175-4e90-8618-5abd3931d653.png" alt="截屏2023-11-26 18.02.27.png"></p>
<p><img src="/assets/images/match/subjects/NumericalControl/7E5DcaAa0D1700992960228-55fa9754-206f-4c7e-9cb5-164bc14820d7.png" alt="截屏2023-11-26 18.02.37.png"></p>
<p>@tab 例14</p>
<p>编制如图所示零件的加工程序要求循环起点在$A(100, 80)$，切削深度为 1.5mm，退刀量为 1mm，X 方向精加工余量为 0.2mm，Z 方向加工余量 0.5mm，其中点划线部分为工件毛坯。</p>
<p><img src="/assets/images/match/subjects/NumericalControl/FeF9B0A6B41701047465238-176fee22-ffa6-4c51-81bc-1e4f9a2b2e49.png" alt="截屏2023-11-27 09.10.58.png"></p>
<p><img src="/assets/images/match/subjects/NumericalControl/d7D1eCD2EC1701047475316-ed01db17-fdae-44f3-bdd0-4748ab65f52a.png" alt="截屏2023-11-27 09.11.07.png"></p>
<p><img src="/assets/images/match/subjects/NumericalControl/8bded083F81701047490068-0d458e13-94f1-4ef4-81c9-61c75d68b5ac.png" alt="截屏2023-11-27 09.11.23.png"></p>
<p>@tab 例15</p>
<p>编制如图所示零件的加工程序设切削起始点在$A(60, 5)$；X、Z 方向粗加工余量分别为 3mm、0.9mm；粗加工次数为 3；X、Z 方向精加工余量分别为 0.6mm、0.1mm；其中，点划线部分为工件毛坯。</p>
<p><img src="/assets/images/match/subjects/NumericalControl/CdcB78Db5b1701047666792-a997a034-27e4-427e-b4ab-1a7e3489d4bb.png" alt="截屏2023-11-27 09.14.19.png"></p>
<p><img src="/assets/images/match/subjects/NumericalControl/6daf4297AA1701047678695-318b44e8-01bf-494f-a7fc-f87e385e5bb3.png" alt="截屏2023-11-27 09.14.31.png"></p>
<p>@tab 例16</p>
<p>用螺纹切削复合循环 G76 指令编程加工螺纹为$ZM60\times 2$，工件尺寸如图所示，其中括弧内尺寸根据标准得到。</p>
<p><img src="/assets/images/match/subjects/NumericalControl/f7Fa6B0FF71701050574451-b0711802-3b75-4d00-9a05-96768d59acd8.png" alt="截屏2023-11-27 10.02.46.png"></p>
<p><img src="/assets/images/match/subjects/NumericalControl/D8d0b1254a1701050586462-2ad3367e-0bc0-439c-a717-54b918124673.png" alt="截屏2023-11-27 10.02.58.png"></p>
<p><img src="/assets/images/match/subjects/NumericalControl/D61A70bcFd1701050597550-7d2462de-f98f-4f60-83b4-63a79c6d3463.png" alt="截屏2023-11-27 10.03.09.png"></p>
<p>@tab 例 数控车床加工实例</p>
<p><img src="/assets/images/match/subjects/NumericalControl/8706b49d7C1701050632836-6912ab2e-b672-454c-b619-7188ed4ae20e.png" alt="截屏2023-11-27 10.03.44.png"></p>
<ol>
<li>确定加工路线</li>
</ol>
<p>按先主后次，先粗后精的加工原则确定加工路线，采用固定循环指令对外轮廓进行粗加工，再精加工，然后车退刀槽，最后加工螺纹。</p>
<ol start="2">
<li>装夹方法和对刀点的选择</li>
</ol>
<p>采用三爪定心卡盘定心夹紧，对刀点选在工件的右端面与回转轴线的交点。</p>
<ol start="3">
<li>选择刀具</li>
</ol>
<p>根据加工要求，选用三把刀，1 号为粗加工外圆车刀，2 号为切槽刀，3 号为车螺纹刀。采用试切法对刀，对刀的同时把端面加工出来。</p>
<ol start="4">
<li>确定切削用量</li>
</ol>
<p>车外圆时，主轴转速为 500r/min，进给速度为 80mm/min；切槽和车螺纹时，主轴转速为 300r/min，切槽进给速度为 10mm/min，车螺纹进给速度 2mm/r。</p>
<ol start="5">
<li>数值计算</li>
</ol>
<p>依次计算出从编程原点开始如下节点坐标：$(30, -10)R10$、$(34, -22)$、$(50, -30)R8$、$(50, -50)$、$(60, -60)$、$(60, -68)$、$(80, -80)$、$(80, -95)$</p>
<ol start="6">
<li>编写加工程序</li>
</ol>
<p><img src="/assets/images/match/subjects/NumericalControl/b3CcDDAFA41701050649907-1fb94d12-0210-42a8-9ca3-8250797448ab.png" alt="截屏2023-11-27 10.04.00.png"></p>
<p><img src="/assets/images/match/subjects/NumericalControl/Ec97d3Daec1701050660558-60264c84-3082-40f2-bb1d-336f6df9c89b.png" alt="截屏2023-11-27 10.04.12.png">
:::</p>
<h2 id="铣削加工" tabindex="-1"><a class="header-anchor" href="#铣削加工" aria-hidden="true">#</a> 铣削加工</h2>
<p>无钻孔、无特殊命令
例 数控铣床加工实例如图所示是一块$120mm \times 60mm \times 10mm$板材，5mm 深的外轮廓已粗加工过，周边留 2mm 余量，要求加工出如下图所示的外轮廓及 $\phi20$mm 的孔。工件材料为铝</p>
<p><img src="/assets/images/match/subjects/NumericalControl/1A4b801e1e1701053820261-ff0c4725-d0d3-40de-b1e5-f0407676c239.png" alt="截屏2023-11-27 10.56.55.png"></p>
<ol>
<li>确定加工工艺及加工路线
<ol>
<li>以底面为定位基准，两侧用压板压紧，固定与铣床工作台上</li>
<li>工步顺序：钻孔$\phi 20$mm，按$O'ABCDEFGO'$路线铣削轮廓。</li>
</ol>
</li>
<li>选择刀具</li>
</ol>
<p>现采用$\phi 20$mm 的钻孔，钻削$\phi20$mm 的孔。$\phi4$mm 的平面立铣刀用于轮廓的切削，并把该刀具的直径输入刀具参数表中。对于经济型数控铣床，由于没有自动换刀功能，钻孔完成后，直接手动换刀。</p>
<ol start="3">
<li>确定切削用量</li>
</ol>
<p>切削用量的具体数值应根据机床性能、相关的手册并结合实际经验确定，详见加工程序。</p>
<ol start="4">
<li>确定工件坐标系和对刀点</li>
</ol>
<p>在 XOY 平面内确定以 O 点为工件原点，Z 方向以工件表面为工件原点，建立工件坐标系，如图所示。采用手动对刀方法把 O 点作为对刀点。</p>
<ol start="5">
<li>数学处理</li>
</ol>
<p>该零件的特点是形状比较简单，数值计算比较方便。现按轮廓编程，根据如图计算各基点及圆心坐标如下：</p>
<p>$O'(5, 5)$、$A(5, 35)$、$B(15, 45)$、$C(26.8, 45)$、$D(57.3, 40)$、$E(74.6, 30)$、$F(85, 30)$、$G(85, 5)$</p>
<ol start="6">
<li>编写程序</li>
</ol>
<p>按该机床规定的指令代码和程序段格式，把加工零件的全部工艺过程编写成程序清单。该工件的加工程序如下：</p>
<ol>
<li>加工$\phi20$mm 孔程序（手工安装好$\phi20$mm 钻头）</li>
</ol>
<p><img src="/assets/images/match/subjects/NumericalControl/C000b1E3ef1701054664305-31586d60-7ffa-4404-8c46-a47329ebadb9.png" alt="截屏2023-11-27 11.10.56.png"></p>
<ol start="2">
<li>铣轮廓程序（手工安装好$\phi4$mm 立铣刀）</li>
</ol>
<p><img src="/assets/images/match/subjects/NumericalControl/822A5BA6FF1701054295560-1514be65-4f41-4e76-b3cf-eecec25617bd.png" alt="截屏2023-11-27 11.04.51.png"></p>
<p><img src="/assets/images/match/subjects/NumericalControl/0ffbD694f11701054311070-67ddea2c-a6b6-4b7e-a5ad-c1f0fafb1cf0.png" alt="截屏2023-11-27 11.05.07.png"></p>
</div></template>


