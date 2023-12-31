---
title: "第 2 章 数控加工程序的编制"
order: 20
---

## 坐标轴方向的确定

先定 Z+，在定 X+，再定 Y+

## 机床坐标系、加工坐标系、相对坐标系三者之间的关系

- 机床坐标系即数控机床的固定坐标系
- 机床坐标系一般不作为编程坐标系，仅作为工件坐标系的参考坐标系
- 工件坐标系是以工件原点为零点建立的一个坐标系，编程时，所有尺寸皆基于此坐标系计算
- 现代数控机床可以设置多个工件坐标系，加工时通过 G 指令进行变换
- 机床坐标系和工件坐标系来通过对刀来确定联系

## 立体轮廓表面加工方法

![](_images/bEb62aC4dE202312111748950.png)

## 编程汇总

## 1. G 指令汇总

| 指令 | 作用 | 格式 | 备注 |
| --- | --- | --- | --- |
| G90 | 设置绝对坐标模式 |  |  |
| G91 | 设置相对坐标模式 |  |  |
| G54~G59 | 选择工件坐标系 |  |  |
| G00 | 快速点定位 |  | 课本 P32 |
| G01 | 直线插补 | `G01 X_ Y_ Z_ F_` |  |
| G02 | 顺时针圆弧插补 | `G02 X_ Y_ [I_ J_]/[R_] F_` | 格式以在 XY 平面上为例，在车床中，凸逆凹顺，R 有正负 |
| G03 | 逆时针圆弧插补 | `G03 X_ Y_ [I_ J_]/[R_] F_` | 格式以在 XY 平面上为例，在车床中，凸逆凹顺，R 有正负 |
| G04 | 暂停 | `G04 P_` | 用于光整成圆，一般时间为 10s |
| G40 | 设置取消刀补 |  |  |
| G41 | 设置左刀补 | `G41 G00/G01/G02/G03 X_ Y_` | 格式以在 XY 平面上为例，在运动过程中建立刀补 |
| G42 | 设置右刀补 | `G42 G00/G01/G02/G03 X_ Y_` | 格式以在 XY 平面上为例，在运动过程中建立刀补 |
| G43 | 设置刀具长度正补偿 | `G43 Z_ H_` |  |
| G44 | 设置刀具长度逆补偿 | `G44 Z_ H_` |  |

## 2. M 指令汇总

| 指令 | 作用 | 备注 |
| --- | --- | --- |
| M00 | 程序停止 | 模态信息被全部保留，启动后继续执行下一段 |
| M01 | 程序计划暂停 | 在操作面板上按下“任意暂停键”生效，等价于 M00 |
| M02 | 程序结束 | 使数控系统处于复位状态 |
| M30 | 程序结束，返回起点 | 在 M02 的基础上令程序回到开始状态并保留模态信息 |
| M03 | 主轴正转 | 控制主轴往正方向看去是顺时针 |
| M04 | 主轴反转 |  |
| M05 | 主轴停转 |  |
| M06 | 自动换刀指令 |  |
| M07/M08 | 冷却液开 |  |
| M09 | 冷却液关 |  |
| M10 | 工件夹紧 |  |
| M11 | 工件松开 |  |
| M98 | 子程序调用 |  |
| M99 | 子程序返回 |  |

## 3. 其他功能字

| 指令 | 作用 |
| --- | --- |
| F | 设置进给速度 |
| S | 主轴转速 |
| T | 刀具功能字 |

## 4. 外径粗精加工循环 G70/G71

格式：

- `G71 U_ R_`
- `G71 P_ Q_ U_ W_ F_ [S_] [T_]`
- `G70 P_ Q_`

精加工的参数必须写于 P Q 段内，不可写在 G70.

## 5. 直螺纹切削循环 G82

格式：`G82 X(U)_ Z(W)_ R_ E_ C_ P_ F_`

- 其中 `R_ E_` 为尾退量，可省略表示不用回退功能
- 其中 `C_` 为头数
- 其中 `F_` 为导程

导程 = 螺距 * 头数

C 为 0 或 1 时切削单头螺纹

课本 P47、P49

若有退刀槽，则螺纹终点在槽内。

## 车削加工

编程只有两道大题，包含了所有的知识点，没有其他类型的问题，会明确粗加工、精加工，会给定图纸、尺寸，使用混合坐标编程方式，而不是单纯的绝对坐标或相对坐标编程。铣削不用考虑顺铣、逆铣，注意编号、行号、程序名

重点了解车削螺纹加工，默认切槽刀宽度和槽宽度相等

::: tabs
@tab 例1 

用直线插补指令编程

![截屏2023-11-26 17.40.47.png](_images/FacbA7c4a41700991650709-ab2023bd-d155-447e-9d97-87d197de337a.png)

![截屏2023-11-26 17.41.30.png](_images/beED5Ff17A1700991692743-4877bd66-cfbf-4855-8b82-7558e459c11b.png)

@tab 例2 

使用 G90、G91 编程要求刀具由原点按顺序移动到 1、2、3 点，然后回到原点。

![截屏2023-11-26 17.43.02.png](_images/C14B074A8F1700991784705-17efbe53-ae69-480a-ac05-357726de0393.png)

![截屏2023-11-26 17.43.16.png](_images/43DBbD75e51700991799418-9dd0af3e-c49d-4510-bd55-a428701862ac.png)

@tab 例3 

使用工件坐标系编程要求刀具从当前点移动到 A 点，再从 A 点移动到 B 点。

![截屏2023-11-26 17.46.07.png](_images/dCfcDd0BB61700991970807-1e278b29-c121-427e-a312-d9ccfcddd439.png)

![截屏2023-11-26 17.46.21.png](_images/fb883a5AaA1700991984655-2a53c3db-cb6c-497f-86a6-b7def493d2d2.png)

@tab 例4 

按同样的轨迹分别用直径、半径编程车削加工如图所示的工件。

![截屏2023-11-26 17.47.25.png](_images/d35CC2a63B1700992048207-b50c8196-5137-4f7a-bf46-13909f482d06.png)

![截屏2023-11-26 17.47.36.png](_images/BF69bC4Ed41700992058654-fd78b698-0b9b-4e5c-a665-ac3486f8d849.png)

@tab 例5 

用直线插补指令编程车削加工如图所示的零件轮廓

![截屏2023-11-26 17.48.16.png](_images/f8cBaaE7781700992099655-354b44f4-e263-471f-88f4-edf5aacb0103.png)

![截屏2023-11-26 17.48.33.png](_images/0b0eD22cBE1700992115970-6885bd1e-4d43-4bb1-84d1-7221178f69ab.png)

![截屏2023-11-26 17.48.40.png](_images/F46Da5ee4E1700992123317-ee409c4e-802d-4e1b-9227-0e45c7c866e6.png)

@tab 例6 

使用 G02 对劣弧和优弧编程铣削如图所示的圆弧

![截屏2023-11-26 17.50.12.png](_images/AEf3CBeE641700992216556-b4b02767-569f-48d9-b39c-b0fb7ad38a29.png)

![截屏2023-11-26 17.50.22.png](_images/ED4A7dB0C61700992225881-a51e3fd2-5242-4168-82e4-ac1f22dfe2e2.png)

@tab 例7 

用圆弧插补指令编程车削如图所示的圆弧

![截屏2023-11-26 17.51.07.png](_images/5d2804Ab5E1700992270145-7c85ef38-9c52-4f09-a746-dc62fe4a9a68.png)

![截屏2023-11-26 17.51.16.png](_images/BBCFe8fD101700992279639-6553ee0b-944a-4e63-a101-2d34c24cabfc.png)

![截屏2023-11-26 17.51.24.png](_images/6F081AeA281700992287023-fed840eb-18d9-4720-9c6d-ccc18ce31f47.png)

@tab 例8 

考虑刀具半径补偿编制加工程序要求建立如图所示的工件坐标系，按箭头所指示的路径进行加工，设加工开始时刀具距离工件上表面 50mm，切削深度为 10mm。

![截屏2023-11-26 17.52.35.png](_images/9ccA9f21b21700992358624-f7ad8e80-0657-440a-a84c-fc41a6c69fb8.png)

![截屏2023-11-26 17.52.52.png](_images/0ADfA57fBC1700992374909-d9d8d20b-0ca7-4d8d-ab81-f43734beff9b.png)

@tab 例9 

用 G80 编程加工图示零件

![截屏2023-11-26 17.54.14.png](_images/AF88Cc81aC1700992457802-d7234342-4e59-4c67-ae71-c5b4300a4ef7.png)

分析此图，每次切削起点位，距工件端面 4mm，由相似三角形得$I = -34/30 \times 7.5 = -8.5$。可设计进刀量（直径值）为 4.5mm、4.5mm、4.5mm、4.5mm、2mm，第四次切削速度降低到 40mm/min 做半精加工。加工轨迹如图

![截屏2023-11-26 17.54.31.png](_images/cd3D630DD41700992474152-ad2bdc56-131d-4598-bede-a7d5a37df5ee.png)

@tab 例10 

用 G81 指令编程，点画线代表毛坯

![截屏2023-11-26 17.57.01.png](_images/eaBEfDcBC81700992625484-3a86b559-a8ab-476b-9be4-14923ad385d3.png)

分析此图，每次切削起点位，距工件外圆面 3mm，由相似三角形得$K = -18/15 \times 5 = -6$，可设计进刀量为 3mm、3mm、3mm、1mm，第四次切削速度降低到 40mm/min 做半精加工。

![截屏2023-11-26 17.58.13.png](_images/3CDf9Ea5F51700992696173-058c719a-2b26-4a87-a5e8-5f50807de3b6.png)

@tab 例11 

对如图所示的圆柱螺纹编程，螺纹导程为 1.5mm

![截屏2023-11-26 17.58.58.png](_images/ba8faEE5A21700992741326-2d13283c-5583-444f-a4b6-1cfeec925e1f.png)

![截屏2023-11-26 17.59.05.png](_images/1b85DAfBCf1700992749056-23be0540-4650-4314-99a4-063a37a47506.png)

![截屏2023-11-26 17.59.16.png](_images/d3fFCfdBFf1700992759628-63b91111-3374-434b-ba94-86bf03b8d146.png)

@tab 例12 

用 G82 指令编程，毛坯外形已加工完成

![截屏2023-11-26 18.00.29.png](_images/7cdc6bc5E11700992832329-59b78f84-59db-43cf-8ab6-1118f7aee9b4.png)

![截屏2023-11-26 17.52.52.png](_images/0ADfA57fBC1700992374909-d9d8d20b-0ca7-4d8d-ab81-f43734beff9b.png)

@tab 例13 

用外径粗加工循环编制如图所示的零件的加工程序要求循环起始点在 $A(46, 3)$，切削深度为 2mm（半径量），退刀量为 1mm，X 方向精加工余量为 0.4mm，Z 方向精加工余量为 0.1mm，其中点划线部分为工件毛胚。

![截屏2023-11-26 18.02.27.png](_images/eE417Feac71700992950925-32e0fae6-f175-4e90-8618-5abd3931d653.png)

![截屏2023-11-26 18.02.37.png](_images/7E5DcaAa0D1700992960228-55fa9754-206f-4c7e-9cb5-164bc14820d7.png)

@tab 例14 

编制如图所示零件的加工程序要求循环起点在$A(100, 80)$，切削深度为 1.5mm，退刀量为 1mm，X 方向精加工余量为 0.2mm，Z 方向加工余量 0.5mm，其中点划线部分为工件毛坯。

![截屏2023-11-27 09.10.58.png](_images/FeF9B0A6B41701047465238-176fee22-ffa6-4c51-81bc-1e4f9a2b2e49.png)

![截屏2023-11-27 09.11.07.png](_images/d7D1eCD2EC1701047475316-ed01db17-fdae-44f3-bdd0-4748ab65f52a.png)

![截屏2023-11-27 09.11.23.png](_images/8bded083F81701047490068-0d458e13-94f1-4ef4-81c9-61c75d68b5ac.png)

@tab 例15 

编制如图所示零件的加工程序设切削起始点在$A(60, 5)$；X、Z 方向粗加工余量分别为 3mm、0.9mm；粗加工次数为 3；X、Z 方向精加工余量分别为 0.6mm、0.1mm；其中，点划线部分为工件毛坯。

![截屏2023-11-27 09.14.19.png](_images/CdcB78Db5b1701047666792-a997a034-27e4-427e-b4ab-1a7e3489d4bb.png)

![截屏2023-11-27 09.14.31.png](_images/6daf4297AA1701047678695-318b44e8-01bf-494f-a7fc-f87e385e5bb3.png)

@tab 例16 

用螺纹切削复合循环 G76 指令编程加工螺纹为$ZM60\times 2$，工件尺寸如图所示，其中括弧内尺寸根据标准得到。

![截屏2023-11-27 10.02.46.png](_images/f7Fa6B0FF71701050574451-b0711802-3b75-4d00-9a05-96768d59acd8.png)

![截屏2023-11-27 10.02.58.png](_images/D8d0b1254a1701050586462-2ad3367e-0bc0-439c-a717-54b918124673.png)

![截屏2023-11-27 10.03.09.png](_images/D61A70bcFd1701050597550-7d2462de-f98f-4f60-83b4-63a79c6d3463.png)

@tab 例 数控车床加工实例

![截屏2023-11-27 10.03.44.png](_images/8706b49d7C1701050632836-6912ab2e-b672-454c-b619-7188ed4ae20e.png)

1. 确定加工路线

按先主后次，先粗后精的加工原则确定加工路线，采用固定循环指令对外轮廓进行粗加工，再精加工，然后车退刀槽，最后加工螺纹。

2. 装夹方法和对刀点的选择

采用三爪定心卡盘定心夹紧，对刀点选在工件的右端面与回转轴线的交点。

3. 选择刀具

根据加工要求，选用三把刀，1 号为粗加工外圆车刀，2 号为切槽刀，3 号为车螺纹刀。采用试切法对刀，对刀的同时把端面加工出来。

4. 确定切削用量

车外圆时，主轴转速为 500r/min，进给速度为 80mm/min；切槽和车螺纹时，主轴转速为 300r/min，切槽进给速度为 10mm/min，车螺纹进给速度 2mm/r。

5. 数值计算

依次计算出从编程原点开始如下节点坐标：$(30, -10)R10$、$(34, -22)$、$(50, -30)R8$、$(50, -50)$、$(60, -60)$、$(60, -68)$、$(80, -80)$、$(80, -95)$

6. 编写加工程序

![截屏2023-11-27 10.04.00.png](_images/b3CcDDAFA41701050649907-1fb94d12-0210-42a8-9ca3-8250797448ab.png)

![截屏2023-11-27 10.04.12.png](_images/Ec97d3Daec1701050660558-60264c84-3082-40f2-bb1d-336f6df9c89b.png)
:::

## 铣削加工

无钻孔、无特殊命令
例 数控铣床加工实例如图所示是一块$120mm \times 60mm \times 10mm$板材，5mm 深的外轮廓已粗加工过，周边留 2mm 余量，要求加工出如下图所示的外轮廓及 $\phi20$mm 的孔。工件材料为铝

![截屏2023-11-27 10.56.55.png](_images/1A4b801e1e1701053820261-ff0c4725-d0d3-40de-b1e5-f0407676c239.png)

1. 确定加工工艺及加工路线
   1. 以底面为定位基准，两侧用压板压紧，固定与铣床工作台上
   2. 工步顺序：钻孔$\phi 20$mm，按$O'ABCDEFGO'$路线铣削轮廓。
2. 选择刀具

现采用$\phi 20$mm 的钻孔，钻削$\phi20$mm 的孔。$\phi4$mm 的平面立铣刀用于轮廓的切削，并把该刀具的直径输入刀具参数表中。对于经济型数控铣床，由于没有自动换刀功能，钻孔完成后，直接手动换刀。

3. 确定切削用量

切削用量的具体数值应根据机床性能、相关的手册并结合实际经验确定，详见加工程序。

4. 确定工件坐标系和对刀点

在 XOY 平面内确定以 O 点为工件原点，Z 方向以工件表面为工件原点，建立工件坐标系，如图所示。采用手动对刀方法把 O 点作为对刀点。

5. 数学处理

该零件的特点是形状比较简单，数值计算比较方便。现按轮廓编程，根据如图计算各基点及圆心坐标如下：

$O'(5, 5)$、$A(5, 35)$、$B(15, 45)$、$C(26.8, 45)$、$D(57.3, 40)$、$E(74.6, 30)$、$F(85, 30)$、$G(85, 5)$

6. 编写程序

按该机床规定的指令代码和程序段格式，把加工零件的全部工艺过程编写成程序清单。该工件的加工程序如下：

   1. 加工$\phi20$mm 孔程序（手工安装好$\phi20$mm 钻头）

![截屏2023-11-27 11.10.56.png](_images/C000b1E3ef1701054664305-31586d60-7ffa-4404-8c46-a47329ebadb9.png)

   2. 铣轮廓程序（手工安装好$\phi4$mm 立铣刀）

![截屏2023-11-27 11.04.51.png](_images/822A5BA6FF1701054295560-1514be65-4f41-4e76-b3cf-eecec25617bd.png)

![截屏2023-11-27 11.05.07.png](_images/0ffbD694f11701054311070-67ddea2c-a6b6-4b7e-a5ad-c1f0fafb1cf0.png)