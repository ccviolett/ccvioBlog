---
title: "课时零、前置基础"
order: 1
---
## 课程目的

我们所做的事情就是将一个系统简化成连续系统，分别对其中数学模型的建立方法、时域性能指标、频率特性以及系统的稳定性等问题进行了分析。

工程控制论实质上是研究工程技术中广义系统的动力学问题。研究系统的外因（输入）、内因（系统本身）与结果（输出）三者之间的动态关系。

## 控制系统

实际的控制系统根据有无反馈作用可以分为两类：开环控制系统和闭环控制系统。

开环控制系统：
- 优点：简单、稳定、可靠
- 缺点：精度通常较低、无自动纠偏能力

闭环控制系统：
- 优点：精度高，对外部扰动和系统参数变化不敏感
- 缺点：存在稳定、震荡、超调等问题，系统性能分析和设计麻烦

反馈系统中，反馈信号是与给定信号相减，使偏差越来越小，成为负反馈。

负反馈控制是实现自动控制最基本的方法。

## 系统的数学模型

数学模型是描述系统输入、输出量以及内部各变量之间数学关系的数学表达式，它揭示了系统结构及其参数与其性能之间的内在关系。

数学模型的形式分时间域（微分方程、差分方程、状态方程）、复数域（传递函数：$G(s) = \frac{X_{o}(s)}{X_{i}(s)}$、结构图）、频率域（频率特性 $G(j \omega ) = G(s)|_{s = j \omega}$）
