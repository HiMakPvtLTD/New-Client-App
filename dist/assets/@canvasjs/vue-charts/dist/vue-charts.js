import * as a from "../../charts";
import { openBlock as h, createElementBlock as i, normalizeStyle as o } from "vue";
const c = (t, e) => {
  const s = t.__vccOpts || t;
  for (const [n, r] of e)
    s[n] = r;
  return s;
};
var l = "Chart" in a ? a : window.CanvasJS;
const p = {
  props: {
    styles: {
      type: Object,
      default: () => ({})
    },
    options: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["chart-ref"],
  data() {
    return {
      chart: null,
      updateChart: !0,
      containerStyle: {
        width: this.styles && this.styles.width ? this.styles.width : "100%",
        height: this.styles && this.styles.height ? this.styles.height : "360px",
        ...this.styles
      }
    };
  },
  watch: {
    options: {
      handler(t, e) {
        this.updateChart = t !== e;
      }
    }
  },
  updated() {
    this.chart && this.updateChart && (this.chart.options = this.options, this.chart.render());
  },
  mounted() {
    this.chart = new l.Chart(this.$refs.chartContainer, this.options), this.chart.render(), this.$emit("chart-ref", this.chart);
  },
  unmounted() {
    this.chart && this.chart.destroy();
  }
};
function d(t, e, s, n, r, f) {
  return h(), i("div", {
    ref: "chartContainer",
    style: o(r.containerStyle)
  }, null, 4);
}
const u = /* @__PURE__ */ c(p, [["render", d]]), C = {
  install: (t, e) => {
    t.component("CanvasJSChart", u);
  }
};
export {
  C as default
};
