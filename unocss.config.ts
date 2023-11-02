import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss";

export default defineConfig({
  shortcuts: [
    [
      "input",
      "mx-2 px-2 py-2 w-20 h-2 default shadow hover:shadow-hover focus:shdaow-focus transition ease-in-out",
    ],

    [
      "button",
      "px-4 py-1 mx-2 cursor-pointer default shadow-hover hover:shdaow-focus transition ease-in-out hover:text-#60aeff",
    ],
    [
      "icon-btn",
      "inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600",
    ],
    [
      "link",
      "mx-2 text-#409eff hover:underline hover:text-#a0cfff active:text-#337ecc",
    ],

    ["Lv", "border-1 border-solid border-gray-300 rounded-md p-2 my-2"],

    ["Lv1", "Lv bg-gray-100"],

    ["Lv2", "Lv bg-gray-200"],
  ],

  rules: [
    [
      "default",
      { border: "none", display: "inline-block", "border-radius": "5px" },
    ],
    ["shadow", { "box-shadow": "0 0 0 1px #c4c7cc inset" }],
    ["shadow-hover", { "box-shadow": "0 0 0 1px #9da1a8 inset" }],
    [
      "shdaow-focus",
      { "box-shadow": "0 0 0 1px #409eff inset", outline: "none" },
    ],
  ],

  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
    }),
    presetTypography(),
    presetWebFonts({
      fonts: {
        sans: "DM Sans",
        serif: "DM Serif Display",
        mono: "DM Mono",
      },
    }),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
});
