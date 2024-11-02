import { default as cutPolygonMode } from "./mode.js";
import { default as drawStyles } from "./customDrawStyles.js";

import { passing_draw_polygon } from "mapbox-gl-draw-passing-mode";
import { modeName, passingModeName } from "./constants";
import { default as CutBar } from "./CutBar.tsx";
export { cutPolygonMode as splitPolygonMode };
export { drawStyles };
export { CutBar };
export default function CutPolygonMode(modes) {
  return {
    ...modes,
    [passingModeName]: passing_draw_polygon,
    [modeName]: cutPolygonMode,
  };
}
