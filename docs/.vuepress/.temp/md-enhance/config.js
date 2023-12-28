import { defineClientConfig } from "@vuepress/client";
import ChartJS from "/Users/ccviolett/Project/ccviolett/ccvioBlog/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.3_@vue+repl@3.0.0_chart.js@4.4.1_echarts@5.4.3_flowchart._keetqqcopoeuoesv3ckhouwedm/node_modules/vuepress-plugin-md-enhance/lib/client/components/ChartJS.js";
import CodeTabs from "/Users/ccviolett/Project/ccviolett/ccvioBlog/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.3_@vue+repl@3.0.0_chart.js@4.4.1_echarts@5.4.3_flowchart._keetqqcopoeuoesv3ckhouwedm/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeTabs.js";
import { hasGlobalComponent } from "/Users/ccviolett/Project/ccviolett/ccvioBlog/node_modules/.pnpm/vuepress-shared@2.0.0-rc.3_vuepress@2.0.0-rc.0/node_modules/vuepress-shared/lib/client/index.js";
import { CodeGroup, CodeGroupItem } from "/Users/ccviolett/Project/ccviolett/ccvioBlog/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.3_@vue+repl@3.0.0_chart.js@4.4.1_echarts@5.4.3_flowchart._keetqqcopoeuoesv3ckhouwedm/node_modules/vuepress-plugin-md-enhance/lib/client/compact/index.js";
import CodeDemo from "/Users/ccviolett/Project/ccviolett/ccvioBlog/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.3_@vue+repl@3.0.0_chart.js@4.4.1_echarts@5.4.3_flowchart._keetqqcopoeuoesv3ckhouwedm/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeDemo.js";
import MdDemo from "/Users/ccviolett/Project/ccviolett/ccvioBlog/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.3_@vue+repl@3.0.0_chart.js@4.4.1_echarts@5.4.3_flowchart._keetqqcopoeuoesv3ckhouwedm/node_modules/vuepress-plugin-md-enhance/lib/client/components/MdDemo.js";
import ECharts from "/Users/ccviolett/Project/ccviolett/ccvioBlog/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.3_@vue+repl@3.0.0_chart.js@4.4.1_echarts@5.4.3_flowchart._keetqqcopoeuoesv3ckhouwedm/node_modules/vuepress-plugin-md-enhance/lib/client/components/ECharts.js";
import { injectEchartsConfig } from "/Users/ccviolett/Project/ccviolett/ccvioBlog/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.3_@vue+repl@3.0.0_chart.js@4.4.1_echarts@5.4.3_flowchart._keetqqcopoeuoesv3ckhouwedm/node_modules/vuepress-plugin-md-enhance/lib/client//index.js";
import "/Users/ccviolett/Project/ccviolett/ccvioBlog/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.3_@vue+repl@3.0.0_chart.js@4.4.1_echarts@5.4.3_flowchart._keetqqcopoeuoesv3ckhouwedm/node_modules/vuepress-plugin-md-enhance/lib/client/styles/figure.scss";
import FlowChart from "/Users/ccviolett/Project/ccviolett/ccvioBlog/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.3_@vue+repl@3.0.0_chart.js@4.4.1_echarts@5.4.3_flowchart._keetqqcopoeuoesv3ckhouwedm/node_modules/vuepress-plugin-md-enhance/lib/client/components/FlowChart.js";
import "/Users/ccviolett/Project/ccviolett/ccvioBlog/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.3_@vue+repl@3.0.0_chart.js@4.4.1_echarts@5.4.3_flowchart._keetqqcopoeuoesv3ckhouwedm/node_modules/vuepress-plugin-md-enhance/lib/client/styles/footnote.scss";
import { useHint } from "/Users/ccviolett/Project/ccviolett/ccvioBlog/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.3_@vue+repl@3.0.0_chart.js@4.4.1_echarts@5.4.3_flowchart._keetqqcopoeuoesv3ckhouwedm/node_modules/vuepress-plugin-md-enhance/lib/client/composables/hint.js";
import "/Users/ccviolett/Project/ccviolett/ccvioBlog/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.3_@vue+repl@3.0.0_chart.js@4.4.1_echarts@5.4.3_flowchart._keetqqcopoeuoesv3ckhouwedm/node_modules/vuepress-plugin-md-enhance/lib/client/styles/hint/index.scss";
import "/Users/ccviolett/Project/ccviolett/ccvioBlog/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.3_@vue+repl@3.0.0_chart.js@4.4.1_echarts@5.4.3_flowchart._keetqqcopoeuoesv3ckhouwedm/node_modules/vuepress-plugin-md-enhance/lib/client/styles/image-mark.scss"
import "/Users/ccviolett/Project/ccviolett/ccvioBlog/node_modules/.pnpm/katex@0.16.9/node_modules/katex/dist/katex.min.css";
import "/Users/ccviolett/Project/ccviolett/ccvioBlog/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.3_@vue+repl@3.0.0_chart.js@4.4.1_echarts@5.4.3_flowchart._keetqqcopoeuoesv3ckhouwedm/node_modules/vuepress-plugin-md-enhance/lib/client/styles/katex.scss";
import Mermaid from "/Users/ccviolett/Project/ccviolett/ccvioBlog/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.3_@vue+repl@3.0.0_chart.js@4.4.1_echarts@5.4.3_flowchart._keetqqcopoeuoesv3ckhouwedm/node_modules/vuepress-plugin-md-enhance/lib/client/components/Mermaid.js";
import { injectMermaidConfig } from "/Users/ccviolett/Project/ccviolett/ccvioBlog/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.3_@vue+repl@3.0.0_chart.js@4.4.1_echarts@5.4.3_flowchart._keetqqcopoeuoesv3ckhouwedm/node_modules/vuepress-plugin-md-enhance/lib/client//index.js";
import Playground from "/Users/ccviolett/Project/ccviolett/ccvioBlog/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.3_@vue+repl@3.0.0_chart.js@4.4.1_echarts@5.4.3_flowchart._keetqqcopoeuoesv3ckhouwedm/node_modules/vuepress-plugin-md-enhance/lib/client/components/Playground.js";
import "/Users/ccviolett/Project/ccviolett/ccvioBlog/node_modules/.pnpm/reveal.js@5.0.2/node_modules/reveal.js/dist/reveal.css";
import RevealJs from "/Users/ccviolett/Project/ccviolett/ccvioBlog/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.3_@vue+repl@3.0.0_chart.js@4.4.1_echarts@5.4.3_flowchart._keetqqcopoeuoesv3ckhouwedm/node_modules/vuepress-plugin-md-enhance/lib/client/components/RevealJs.js";
import { injectRevealJsConfig } from "/Users/ccviolett/Project/ccviolett/ccvioBlog/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.3_@vue+repl@3.0.0_chart.js@4.4.1_echarts@5.4.3_flowchart._keetqqcopoeuoesv3ckhouwedm/node_modules/vuepress-plugin-md-enhance/lib/client/index.js";
import Tabs from "/Users/ccviolett/Project/ccviolett/ccvioBlog/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.3_@vue+repl@3.0.0_chart.js@4.4.1_echarts@5.4.3_flowchart._keetqqcopoeuoesv3ckhouwedm/node_modules/vuepress-plugin-md-enhance/lib/client/components/Tabs.js";
import "/Users/ccviolett/Project/ccviolett/ccvioBlog/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.3_@vue+repl@3.0.0_chart.js@4.4.1_echarts@5.4.3_flowchart._keetqqcopoeuoesv3ckhouwedm/node_modules/vuepress-plugin-md-enhance/lib/client/styles/tasklist.scss";
import VuePlayground from "/Users/ccviolett/Project/ccviolett/ccvioBlog/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.3_@vue+repl@3.0.0_chart.js@4.4.1_echarts@5.4.3_flowchart._keetqqcopoeuoesv3ckhouwedm/node_modules/vuepress-plugin-md-enhance/lib/client/components/VuePlayground.js";
import { injectVuePlaygroundConfig } from "/Users/ccviolett/Project/ccviolett/ccvioBlog/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.3_@vue+repl@3.0.0_chart.js@4.4.1_echarts@5.4.3_flowchart._keetqqcopoeuoesv3ckhouwedm/node_modules/vuepress-plugin-md-enhance/lib/client/index.js";

export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("ChartJS", ChartJS)
    app.component("CodeTabs", CodeTabs);
    if(!hasGlobalComponent("CodeGroup", app)) app.component("CodeGroup", CodeGroup);
    if(!hasGlobalComponent("CodeGroupItem", app)) app.component("CodeGroupItem", CodeGroupItem);
    app.component("CodeDemo", CodeDemo);
    app.component("MdDemo", MdDemo);
    app.component("ECharts", ECharts);
    injectEchartsConfig(app);
    app.component("FlowChart", FlowChart);
    injectMermaidConfig(app);
    app.component("Mermaid", Mermaid);
    app.component("Playground", Playground);
    injectRevealJsConfig(app);
    app.component("RevealJs", RevealJs);
    app.component("Tabs", Tabs);
    injectVuePlaygroundConfig(app);
    app.component("VuePlayground", VuePlayground);
  },
  setup: () => {
useHint();
  }
});
