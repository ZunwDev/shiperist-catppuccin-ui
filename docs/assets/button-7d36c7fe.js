import { a as y, j as n } from "./jsx-runtime-50e9c51e.js";
import { r as b } from "./index-ebeaab24.js";
const t = ({
    icon: e,
    iconPosition: o = "left",
    isLoading: r = !1,
    disabled: i = !1,
    tooltip: h,
    variant: p = "success",
    size: u = "medium",
    children: s,
    className: c = "",
    ...m
  }) => {
    const [w, d] = b.useState(!1),
      f = "transition ease-in-out duration-150 flex items-center justify-center rounded-lg bg-transparent border-1",
      l = { success: "green", danger: "red", warning: "yellow", info: "blue" }[p],
      v =
        {
          small: "text-sm px-2 py-1",
          medium: "text-base px-4 py-2",
          large: "text-lg px-6 py-3",
          xlarge: "text-xl px-8 py-4",
        }[u] || "",
      g = { small: "p-1", medium: "p-2", large: "p-3", xlarge: "p-4" }[u] || "",
      x = `${f} ${
        i
          ? "opacity-50 cursor-not-allowed text-text border-gray"
          : `border-${l} text-${l} hover:bg-${l} hover:text-base active:translate-y-0.5`
      } ${!s && (e || r) ? g : v} ${c}`,
      a = r
        ? n("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            className: "h-4 w-4 animate-spin",
            children: n("path", { d: "M21 12a9 9 0 1 1-6.219-8.56" }),
          })
        : e && e;
    return y("button", {
      className: x,
      onMouseEnter: () => d(!0),
      onMouseLeave: () => d(!1),
      disabled: i,
      ...m,
      children: [
        a && o === "left" && a,
        n("span", { className: `${s ? "mx-2" : ""}`, children: s }),
        a && o === "right" && a,
      ],
    });
  },
  q = t;
t.displayName = "Button";
try {
  (t.displayName = "Button"),
    (t.__docgenInfo = {
      description: "",
      displayName: "Button",
      props: {
        icon: { defaultValue: null, description: "", name: "icon", required: !1, type: { name: "ReactNode" } },
        iconPosition: {
          defaultValue: { value: "left" },
          description: "",
          name: "iconPosition",
          required: !1,
          type: { name: "enum", value: [{ value: '"left"' }, { value: '"right"' }] },
        },
        isLoading: {
          defaultValue: { value: "false" },
          description: "",
          name: "isLoading",
          required: !1,
          type: { name: "boolean" },
        },
        tooltip: { defaultValue: null, description: "", name: "tooltip", required: !1, type: { name: "string" } },
        disabled: {
          defaultValue: { value: "false" },
          description: "",
          name: "disabled",
          required: !1,
          type: { name: "boolean" },
        },
        variant: {
          defaultValue: { value: "success" },
          description: "",
          name: "variant",
          required: !1,
          type: {
            name: "enum",
            value: [{ value: '"success"' }, { value: '"warning"' }, { value: '"danger"' }, { value: '"info"' }],
          },
        },
        size: {
          defaultValue: { value: "medium" },
          description: "",
          name: "size",
          required: !1,
          type: {
            name: "enum",
            value: [{ value: '"small"' }, { value: '"medium"' }, { value: '"large"' }, { value: '"xlarge"' }],
          },
        },
      },
    });
} catch {}
export { q as B };
//# sourceMappingURL=button-7d36c7fe.js.map
