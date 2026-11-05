const __modules={},__exports={};
const __lowEnd=(()=>{try{const t=navigator.hardwareConcurrency||8;const o=navigator.deviceMemory||8;const n=window.matchMedia&&matchMedia("(pointer:coarse)").matches;return t<=4||o<=4||!!n}catch{return!0}})();

const __esc = (v) => String(v ?? "").replace(/[&<>"']/g, ch => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch]));
const __safeUrl = (v) => { try { const u = new URL(String(v || ""), location.href); return (u.protocol === "http:" || u.protocol === "https:") ? __esc(u.href) : "#"; } catch { return "#"; } };
const __capDpr=(t,o)=>{const n=window.devicePixelRatio||1;const A=Math.sqrt((__lowEnd?4.2e5:2.5e6)/Math.max(1,t*o));return Math.max(.8,Math.min(n,A,__lowEnd?1.25:2))};

const __si = (body) => `<svg class="studio-ico" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">${body}</svg>`;
const STUDIO_ICONS = {
  // Bottom Nav Tabs & Crossover Categories
  tab_add: __si('<rect x="3" y="3" width="18" height="18" rx="4" fill="currentColor" fill-opacity="0.16"/><path d="M12 8v8M8 12h8"/>'),
  tab_edit: __si('<polygon points="12 2 21 7 21 17 12 22 3 17 3 7" fill="currentColor" fill-opacity="0.15"/><polyline points="3 7 12 12 21 7"/><line x1="12" y1="12" x2="12" y2="22"/><circle cx="12" cy="12" r="2" fill="currentColor"/>'),
  tab_sculpt: __si('<path d="M18.5 3.5a2.12 2.12 0 0 1 3 3L11 17l-4 1 1-4 10.5-10.5z" fill="currentColor" fill-opacity="0.18"/><path d="M4 20c2-1 4.5-1 6.5 0s4.5 1 6.5 0"/>'),
  tab_rig: __si('<circle cx="6.5" cy="6.5" r="2.5" fill="currentColor" fill-opacity="0.25"/><circle cx="17.5" cy="17.5" r="2.5" fill="currentColor" fill-opacity="0.25"/><polygon points="8.5 5.5 18.5 15.5 15.5 18.5 5.5 8.5" fill="currentColor" fill-opacity="0.16"/>'),
  tab_animate: __si('<polygon points="12 2 22 12 12 22 2 12" fill="currentColor" fill-opacity="0.15"/><polygon points="10 8.5 16 12 10 15.5" fill="currentColor"/>'),
  tab_look: __si('<circle cx="12" cy="12" r="9" fill="currentColor" fill-opacity="0.14"/><path d="M12 3a9 9 0 0 1 0 18Z" fill="currentColor" fill-opacity="0.26"/><circle cx="9" cy="9" r="1.5" fill="currentColor"/>'),
  tab_agent: __si('<path d="M12 3l2.4 5.6L20 11l-5.6 2.4L12 19l-2.4-5.6L4 11l5.6-2.4z" fill="currentColor" fill-opacity="0.18"/>'),

  // Crossover Pill Distinct Icons
  cross_prim: __si('<polygon points="12 3 20 7.5 20 16.5 12 21 4 16.5 4 7.5" fill="currentColor" fill-opacity="0.16"/><path d="M12 12l8-4.5M12 12v9M12 12L4 7.5"/>'),
  cross_edit: __si('<rect x="4" y="4" width="16" height="16" rx="2" fill="currentColor" fill-opacity="0.14"/><circle cx="4" cy="4" r="2" fill="currentColor"/><circle cx="20" cy="4" r="2" fill="currentColor"/><circle cx="4" cy="20" r="2" fill="currentColor"/><circle cx="20" cy="20" r="2" fill="currentColor"/>'),
  cross_rig: __si('<circle cx="12" cy="5" r="2" fill="currentColor"/><line x1="12" y1="7" x2="12" y2="14"/><line x1="7" y1="10" x2="17" y2="10"/><line x1="12" y1="14" x2="8" y2="20"/><line x1="12" y1="14" x2="16" y2="20"/>'),
  cross_sculpt: __si('<path d="M12 3c5 0 9 4 9 9 0 3.5-2 6.5-5 8H8c-3-1.5-5-4.5-5-8 0-5 4-9 9-9z" fill="currentColor" fill-opacity="0.16"/><path d="M8 13c2-2 6-2 8 0"/>'),
  cross_look: __si('<circle cx="12" cy="12" r="9" fill="currentColor" fill-opacity="0.15"/><ellipse cx="12" cy="12" rx="9" ry="3.8"/><path d="M12 3v18"/>'),
  cross_all: __si('<rect x="3" y="3" width="7.5" height="7.5" rx="1.5" fill="currentColor" fill-opacity="0.2"/><rect x="13.5" y="3" width="7.5" height="7.5" rx="1.5" fill="currentColor" fill-opacity="0.2"/><rect x="3" y="13.5" width="7.5" height="7.5" rx="1.5" fill="currentColor" fill-opacity="0.2"/><rect x="13.5" y="13.5" width="7.5" height="7.5" rx="1.5" fill="currentColor" fill-opacity="0.2"/>'),

  // Timeline Clip Actions & Transport
  split: __si('<circle cx="6" cy="6" r="2.5" fill="currentColor" fill-opacity="0.2"/><circle cx="6" cy="18" r="2.5" fill="currentColor" fill-opacity="0.2"/><line x1="20" y1="4" x2="8.12" y2="15.88"/><line x1="14.47" y1="14.48" x2="20" y2="20"/><line x1="12" y1="2" x2="12" y2="22" stroke-dasharray="2 2"/>'),
  speed: __si('<path d="M4 18a8 8 0 1 1 16 0" fill="currentColor" fill-opacity="0.15"/><path d="M12 14l4.5-4.5"/><circle cx="12" cy="14" r="2" fill="currentColor"/>'),
  reverse: __si('<polyline points="4 8 1 5 4 2"/><path d="M1 5h15a5 5 0 0 1 5 5v1"/><polyline points="20 16 23 19 20 22"/><path d="M23 19H8a5 5 0 0 1-5-5v-1"/>'),
  freeze: __si('<rect x="5" y="4" width="14" height="16" rx="2" fill="currentColor" fill-opacity="0.16"/><line x1="9.5" y1="8.5" x2="9.5" y2="15.5"/><line x1="14.5" y1="8.5" x2="14.5" y2="15.5"/>'),
  duplicate: __si('<rect x="8" y="8" width="13" height="13" rx="2.5" fill="currentColor" fill-opacity="0.18"/><path d="M4 16V5a2 2 0 0 1 2-2h11"/>'),
  copy: __si('<rect x="9" y="9" width="12" height="12" rx="2" fill="currentColor" fill-opacity="0.16"/><rect x="3" y="3" width="12" height="12" rx="2"/>'),
  paste: __si('<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" fill="currentColor" fill-opacity="0.14"/><rect x="8" y="2" width="8" height="4" rx="1" fill="currentColor" fill-opacity="0.3"/>'),
  opacity: __si('<circle cx="12" cy="12" r="9"/><path d="M12 3a9 9 0 0 0 0 18z" fill="currentColor" fill-opacity="0.35"/>'),
  replace: __si('<polyline points="22 4 22 10 16 10"/><polyline points="2 20 2 14 8 14"/><path d="M4.5 9A8.5 8.5 0 0 1 19 5.5L22 10M2 14l3 4.5A8.5 8.5 0 0 0 19.5 15"/>'),
  trash: __si('<path d="M4 6h16"/><path d="M18 6v13a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V6" fill="currentColor" fill-opacity="0.15"/><path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/>'),
  save: __si('<path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" fill="currentColor" fill-opacity="0.15"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/>'),
  cam_track: __si('<rect x="2" y="6" width="14" height="12" rx="2.5" fill="currentColor" fill-opacity="0.18"/><polygon points="22 7 16 12 22 17 22 7" fill="currentColor" fill-opacity="0.28"/>'),
  cam_view: __si('<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" fill="currentColor" fill-opacity="0.15"/><circle cx="12" cy="12" r="3" fill="currentColor" fill-opacity="0.3"/>'),

  // Add Tab Primitives & Subcategories (Every primitive has a UNIQUE 3D geometry icon!)
  prim_sphere: __si('<circle cx="12" cy="12" r="9" fill="currentColor" fill-opacity="0.16"/><ellipse cx="12" cy="12" rx="9" ry="3.8"/><ellipse cx="12" cy="12" rx="3.8" ry="9"/>'),
  prim_icosphere: __si('<polygon points="12 2 21 7 21 17 12 22 3 17 3 7" fill="currentColor" fill-opacity="0.16"/><polygon points="12 6 18 15 6 15"/><line x1="12" y1="2" x2="12" y2="6"/><line x1="21" y1="7" x2="18" y2="15"/><line x1="3" y1="7" x2="6" y2="15"/><line x1="12" y1="22" x2="6" y2="15"/><line x1="12" y1="22" x2="18" y2="15"/>'),
  prim_curve_bezier: __si('<path d="M4 19C4 9 20 15 20 5"/><line x1="4" y1="19" x2="10" y2="9" stroke-dasharray="2 2"/><circle cx="4" cy="19" r="2" fill="currentColor"/><circle cx="20" cy="5" r="2" fill="currentColor"/><circle cx="10" cy="9" r="1.6"/>'),
  prim_curve_circle: __si('<circle cx="12" cy="12" r="8" stroke-dasharray="4 2"/><circle cx="12" cy="4" r="1.8" fill="currentColor"/><circle cx="20" cy="12" r="1.8" fill="currentColor"/><circle cx="12" cy="20" r="1.8" fill="currentColor"/><circle cx="4" cy="12" r="1.8" fill="currentColor"/>'),
  prim_curve_path: __si('<path d="M3 17l5-8 6 6 7-10"/><polyline points="17 5 21 5 21 9"/><circle cx="3" cy="17" r="2" fill="currentColor"/><circle cx="8" cy="9" r="1.8" fill="currentColor"/><circle cx="14" cy="15" r="1.8" fill="currentColor"/>'),
  prim_curve_nurbs: __si('<path d="M3 18c4-12 14-12 18 0" fill="currentColor" fill-opacity="0.14"/><polygon points="3 18 7 6 17 6 21 18" stroke-dasharray="2 2"/>'),
  prim_light: __si('<circle cx="12" cy="12" r="4.5" fill="currentColor" fill-opacity="0.28"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M19.1 4.9L17 7M7 17l-2.1 2.1"/>'),
  prim_light_sun: __si('<circle cx="8" cy="8" r="4" fill="currentColor" fill-opacity="0.28"/><path d="M13 13l7 7M16 20h4v-4M8 17l5 5M17 8l5 5"/>'),
  prim_light_spot: __si('<circle cx="6" cy="6" r="2.5" fill="currentColor"/><polygon points="7.5 7.5 21 14 14 21" fill="currentColor" fill-opacity="0.2"/><ellipse cx="17.5" cy="17.5" rx="4.5" ry="2" transform="rotate(-45 17.5 17.5)"/>'),
  prim_light_area: __si('<rect x="4" y="4" width="16" height="9" rx="1.5" fill="currentColor" fill-opacity="0.22"/><path d="M7 13l-2 7M12 13v7M17 13l2 7"/>'),
  prim_camera: __si('<rect x="2" y="6" width="13" height="12" rx="2" fill="currentColor" fill-opacity="0.18"/><polygon points="15 10 22 6 22 18 15 14" fill="currentColor" fill-opacity="0.26"/>'),
  prim_camera_ortho: __si('<rect x="3" y="5" width="13" height="14" rx="1.5" fill="currentColor" fill-opacity="0.16"/><line x1="16" y1="8" x2="22" y2="8"/><line x1="16" y1="12" x2="22" y2="12"/><line x1="16" y1="16" x2="22" y2="16"/>'),
  prim_empty_axes: __si('<line x1="12" y1="3" x2="12" y2="21"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="6" y1="18" x2="18" y2="6"/>'),
  prim_empty_arrows: __si('<line x1="12" y1="19" x2="12" y2="4"/><polyline points="9 7 12 4 15 7"/><line x1="5" y1="12" x2="20" y2="12"/><polyline points="17 9 20 12 17 15"/>'),
  prim_empty_cube: __si('<rect x="4" y="4" width="16" height="16" rx="2" stroke-dasharray="3 2"/><circle cx="12" cy="12" r="2" fill="currentColor"/>'),
  prim_empty_sphere: __si('<circle cx="12" cy="12" r="8" stroke-dasharray="3 2"/><circle cx="12" cy="12" r="2" fill="currentColor"/>'),
  prim_empty_circle: __si('<ellipse cx="12" cy="12" rx="9" ry="4.5" stroke-dasharray="3 2"/><circle cx="12" cy="12" r="2" fill="currentColor"/>'),
  prim_import_photo: __si('<rect x="3" y="4" width="18" height="16" rx="2" fill="currentColor" fill-opacity="0.14"/><circle cx="8.5" cy="9" r="1.8" fill="currentColor"/><path d="M21 16l-5-5-8 9"/>'),
  prim_asset_car: __si('<path d="M5 11l2-5h10l2 5v6H5v-6z" fill="currentColor" fill-opacity="0.18"/><circle cx="8" cy="17" r="2" fill="currentColor"/><circle cx="16" cy="17" r="2" fill="currentColor"/>'),
  prim_asset_chair: __si('<path d="M7 4v9h10V4M7 13v7M17 13v7M5 13h14" stroke-width="2"/>'),
  prim_coin: __si('<circle cx="12" cy="12" r="8.5" fill="currentColor" fill-opacity="0.22"/><circle cx="12" cy="12" r="5.5" stroke-dasharray="2 2"/>'),
  prim_cube: __si('<polygon points="12 2.5 20.5 7.5 20.5 16.5 12 21.5 3.5 16.5 3.5 7.5" fill="currentColor" fill-opacity="0.16"/><polyline points="3.5 7.5 12 12.5 20.5 7.5"/><line x1="12" y1="12.5" x2="12" y2="21.5"/>'),
  prim_uv_sphere: __si('<circle cx="12" cy="12" r="9" fill="currentColor" fill-opacity="0.16"/><ellipse cx="12" cy="12" rx="9" ry="3.8"/><ellipse cx="12" cy="12" rx="3.8" ry="9"/>'),
  prim_ico_sphere: __si('<polygon points="12 2 21 7 21 17 12 22 3 17 3 7" fill="currentColor" fill-opacity="0.16"/><polygon points="12 6 18 15 6 15"/><line x1="12" y1="2" x2="12" y2="6"/><line x1="21" y1="7" x2="18" y2="15"/><line x1="3" y1="7" x2="6" y2="15"/><line x1="12" y1="22" x2="6" y2="15"/><line x1="12" y1="22" x2="18" y2="15"/>'),
  prim_cylinder: __si('<ellipse cx="12" cy="5.5" rx="7.5" ry="3" fill="currentColor" fill-opacity="0.24"/><path d="M4.5 5.5v13c0 1.66 3.36 3 7.5 3s7.5-1.34 7.5-3v-13" fill="currentColor" fill-opacity="0.14"/>'),
  prim_cone: __si('<polygon points="12 3 4.5 18.5 19.5 18.5" fill="currentColor" fill-opacity="0.16"/><ellipse cx="12" cy="18.5" rx="7.5" ry="2.8" fill="currentColor" fill-opacity="0.24"/>'),
  prim_torus: __si('<ellipse cx="12" cy="12" rx="9.5" ry="6" fill="currentColor" fill-opacity="0.16"/><ellipse cx="12" cy="12" rx="4" ry="2.2" fill="#0d0f14"/>'),
  prim_plane: __si('<polygon points="12 6 22 12 12 18 2 12" fill="currentColor" fill-opacity="0.2"/>'),
  prim_circle: __si('<ellipse cx="12" cy="12" rx="9" ry="5" fill="currentColor" fill-opacity="0.12"/><circle cx="12" cy="7" r="1.4" fill="currentColor"/><circle cx="21" cy="12" r="1.4" fill="currentColor"/><circle cx="12" cy="17" r="1.4" fill="currentColor"/><circle cx="3" cy="12" r="1.4" fill="currentColor"/>'),
  prim_grid: __si('<polygon points="12 4 22 12 12 20 2 12" fill="currentColor" fill-opacity="0.15"/><line x1="7" y1="8" x2="17" y2="16"/><line x1="17" y1="8" x2="7" y2="16"/>'),
  prim_pyramid: __si('<polygon points="12 3 21 17 12 21 3 17" fill="currentColor" fill-opacity="0.16"/><line x1="12" y1="3" x2="12" y2="21"/>'),
  prim_tube: __si('<ellipse cx="12" cy="5.5" rx="7.5" ry="3" fill="currentColor" fill-opacity="0.16"/><ellipse cx="12" cy="5.5" rx="3.5" ry="1.3"/><path d="M4.5 5.5v13c0 1.66 3.36 3 7.5 3s7.5-1.34 7.5-3v-13" fill="currentColor" fill-opacity="0.12"/>'),
  prim_capsule: __si('<rect x="6.5" y="3" width="11" height="18" rx="5.5" fill="currentColor" fill-opacity="0.16"/><ellipse cx="12" cy="12" rx="5.5" ry="2.2"/>'),
  prim_monkey: __si('<circle cx="12" cy="12.5" r="6.5" fill="currentColor" fill-opacity="0.18"/><circle cx="4.5" cy="11" r="2.2"/><circle cx="19.5" cy="11" r="2.2"/><circle cx="9.8" cy="11" r="1" fill="currentColor"/><circle cx="14.2" cy="11" r="1" fill="currentColor"/><path d="M9.5 15.5c1.5 1.2 3.5 1.2 5 0"/>'),

  // Curves, Empties, Lights, Cameras, Imports
  curve_bezier: __si('<path d="M4 19C4 9 20 15 20 5"/><line x1="4" y1="19" x2="10" y2="9" stroke-dasharray="2 2"/><circle cx="4" cy="19" r="2" fill="currentColor"/><circle cx="20" cy="5" r="2" fill="currentColor"/><circle cx="10" cy="9" r="1.6"/>'),
  curve_circle: __si('<circle cx="12" cy="12" r="8" stroke-dasharray="4 2"/><circle cx="12" cy="4" r="1.8" fill="currentColor"/><circle cx="20" cy="12" r="1.8" fill="currentColor"/><circle cx="12" cy="20" r="1.8" fill="currentColor"/><circle cx="4" cy="12" r="1.8" fill="currentColor"/>'),
  curve_path: __si('<path d="M3 17l5-8 6 6 7-10"/><polyline points="17 5 21 5 21 9"/><circle cx="3" cy="17" r="2" fill="currentColor"/><circle cx="8" cy="9" r="1.8" fill="currentColor"/><circle cx="14" cy="15" r="1.8" fill="currentColor"/>'),
  curve_nurbs: __si('<path d="M3 18c4-12 14-12 18 0" fill="currentColor" fill-opacity="0.14"/><polygon points="3 18 7 6 17 6 21 18" stroke-dasharray="2 2"/>'),
  empty_axes: __si('<line x1="12" y1="3" x2="12" y2="21"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="6" y1="18" x2="18" y2="6"/>'),
  empty_arrows: __si('<line x1="12" y1="19" x2="12" y2="4"/><polyline points="9 7 12 4 15 7"/><line x1="5" y1="12" x2="20" y2="12"/><polyline points="17 9 20 12 17 15"/>'),
  empty_single_arrow: __si('<line x1="12" y1="20" x2="12" y2="4"/><polygon points="12 3 8 9 16 9" fill="currentColor"/><circle cx="12" cy="20" r="2"/>'),
  light_point: __si('<circle cx="12" cy="12" r="4.5" fill="currentColor" fill-opacity="0.28"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M19.1 4.9L17 7M7 17l-2.1 2.1"/>'),
  light_sun: __si('<circle cx="8" cy="8" r="4" fill="currentColor" fill-opacity="0.28"/><path d="M13 13l7 7M16 20h4v-4M8 17l5 5M17 8l5 5"/>'),
  light_spot: __si('<circle cx="6" cy="6" r="2.5" fill="currentColor"/><polygon points="7.5 7.5 21 14 14 21" fill="currentColor" fill-opacity="0.2"/><ellipse cx="17.5" cy="17.5" rx="4.5" ry="2" transform="rotate(-45 17.5 17.5)"/>'),
  light_area: __si('<rect x="4" y="4" width="16" height="9" rx="1.5" fill="currentColor" fill-opacity="0.22"/><path d="M7 13l-2 7M12 13v7M17 13l2 7"/>'),
  cam_persp: __si('<rect x="2" y="6" width="13" height="12" rx="2" fill="currentColor" fill-opacity="0.18"/><polygon points="15 10 22 6 22 18 15 14" fill="currentColor" fill-opacity="0.26"/>'),
  cam_ortho: __si('<rect x="3" y="5" width="13" height="14" rx="1.5" fill="currentColor" fill-opacity="0.16"/><line x1="16" y1="8" x2="22" y2="8"/><line x1="16" y1="12" x2="22" y2="12"/><line x1="16" y1="16" x2="22" y2="16"/>'),

  // Edit Tab Icons
  edit_move: __si('<path d="M12 2v20M2 12h20"/><polyline points="9 5 12 2 15 5"/><polyline points="9 19 12 22 15 19"/><polyline points="5 9 2 12 5 15"/><polyline points="19 9 22 12 19 15"/>'),
  edit_rot: __si('<path d="M21 12a9 9 0 1 1-2.64-6.36"/><polyline points="21 3 21 9 15 9"/><circle cx="12" cy="12" r="2.5" fill="currentColor" fill-opacity="0.28"/>'),
  edit_scale: __si('<rect x="3" y="11" width="10" height="10" rx="1.5" fill="currentColor" fill-opacity="0.2"/><path d="M14 10l7-7M16 3h5v5"/><rect x="3" y="3" width="18" height="18" rx="2" stroke-dasharray="3 2"/>'),
  edit_extrude: __si('<polygon points="4 15 12 19 20 15 12 11" fill="currentColor" fill-opacity="0.16"/><polygon points="6 9 12 12 18 9 12 6" fill="currentColor" fill-opacity="0.3"/><line x1="6" y1="9" x2="6" y2="16"/><line x1="18" y1="9" x2="18" y2="16"/><line x1="12" y1="3" x2="12" y2="9"/><polyline points="9.5 5.5 12 3 14.5 5.5"/>'),
  edit_inset: __si('<rect x="3" y="3" width="18" height="18" rx="2" fill="currentColor" fill-opacity="0.1"/><rect x="7.5" y="7.5" width="9" height="9" rx="1" fill="currentColor" fill-opacity="0.28"/><line x1="3" y1="3" x2="7.5" y2="7.5"/><line x1="21" y1="3" x2="16.5" y2="7.5"/><line x1="3" y1="21" x2="7.5" y2="16.5"/><line x1="21" y1="21" x2="16.5" y2="16.5"/>'),
  edit_bevel: __si('<polygon points="8 3 16 3 21 8 21 21 3 21 3 8" fill="currentColor" fill-opacity="0.16"/><polygon points="8 3 16 3 21 8 3 8" fill="currentColor" fill-opacity="0.32"/>'),
  edit_loopcut: __si('<rect x="3" y="4" width="18" height="16" rx="2" fill="currentColor" fill-opacity="0.14"/><line x1="12" y1="2" x2="12" y2="22" stroke-width="2.2"/><circle cx="12" cy="12" r="2.2" fill="currentColor"/>'),
  edit_knife: __si('<path d="M19 3l2 2-11 11-4 1 1-4L19 3z" fill="currentColor" fill-opacity="0.25"/><line x1="4" y1="20" x2="20" y2="20" stroke-dasharray="2 2"/>'),
  edit_merge_center: __si('<circle cx="12" cy="12" r="3" fill="currentColor"/><path d="M4 4l5 5M20 4l-5 5M4 20l5-5M20 20l-5-5"/>'),
  edit_merge_first: __si('<circle cx="6" cy="6" r="3" fill="currentColor"/><circle cx="18" cy="18" r="2"/><path d="M16 16L9 9"/><polyline points="9 13 9 9 13 9"/>'),
  edit_merge_last: __si('<circle cx="18" cy="18" r="3" fill="currentColor"/><circle cx="6" cy="6" r="2"/><path d="M8 8l7 7"/><polyline points="15 11 15 15 11 15"/>'),
  edit_collapse: __si('<polygon points="4 6 20 6 12 19" fill="currentColor" fill-opacity="0.16"/><circle cx="12" cy="12.5" r="2.5" fill="currentColor"/>'),
  mod_subsurf: __si('<circle cx="12" cy="12" r="8" fill="currentColor" fill-opacity="0.18"/><rect x="3" y="3" width="18" height="18" rx="2" stroke-dasharray="3 2"/>'),
  mod_mirror_x: __si('<line x1="12" y1="2" x2="12" y2="22" stroke-dasharray="2 2"/><polygon points="3 7 9 12 3 17" fill="currentColor" fill-opacity="0.28"/><polygon points="21 7 15 12 21 17" fill="currentColor" fill-opacity="0.14"/>'),
  mod_mirror_y: __si('<line x1="2" y1="12" x2="22" y2="12" stroke-dasharray="2 2"/><polygon points="7 3 12 9 17 3" fill="currentColor" fill-opacity="0.28"/><polygon points="7 21 12 15 17 21" fill="currentColor" fill-opacity="0.14"/>'),
  mod_mirror_z: __si('<line x1="4" y1="20" x2="20" y2="4" stroke-dasharray="2 2"/><circle cx="7" cy="7" r="3" fill="currentColor" fill-opacity="0.28"/><circle cx="17" cy="17" r="3" fill="currentColor" fill-opacity="0.14"/>'),
  mod_solidify: __si('<polygon points="12 4 21 9 12 14 3 9" fill="currentColor" fill-opacity="0.25"/><polygon points="12 10 21 15 12 20 3 15" fill="currentColor" fill-opacity="0.12"/><line x1="3" y1="9" x2="3" y2="15"/><line x1="21" y1="9" x2="21" y2="15"/><line x1="12" y1="14" x2="12" y2="20"/>'),
  mod_array: __si('<rect x="2" y="11" width="6" height="6" rx="1" fill="currentColor" fill-opacity="0.3"/><rect x="9" y="8" width="6" height="6" rx="1" fill="currentColor" fill-opacity="0.2"/><rect x="16" y="5" width="6" height="6" rx="1" fill="currentColor" fill-opacity="0.12"/>'),
  mod_bool_diff: __si('<rect x="3" y="3" width="12" height="12" rx="2" fill="currentColor" fill-opacity="0.24"/><rect x="9" y="9" width="12" height="12" rx="2" stroke-dasharray="2 2"/>'),
  mod_bool_union: __si('<rect x="3" y="3" width="12" height="12" rx="2" fill="currentColor" fill-opacity="0.24"/><rect x="9" y="9" width="12" height="12" rx="2" fill="currentColor" fill-opacity="0.24"/>'),
  obj_origin_geo: __si('<polygon points="12 3 20 8 20 16 12 21 4 16 4 8" fill="currentColor" fill-opacity="0.14"/><circle cx="12" cy="12" r="3" fill="currentColor"/>'),
  obj_origin_cursor: __si('<circle cx="12" cy="12" r="7" stroke-dasharray="2 2"/><line x1="12" y1="2" x2="12" y2="22"/><line x1="2" y1="12" x2="22" y2="12"/><circle cx="12" cy="12" r="2.5" fill="currentColor"/>'),
  obj_origin_center: __si('<rect x="4" y="4" width="16" height="16" rx="2"/><circle cx="12" cy="12" r="3" fill="currentColor"/><line x1="4" y1="4" x2="20" y2="20" stroke-opacity="0.4"/><line x1="20" y1="4" x2="4" y2="20" stroke-opacity="0.4"/>'),
  obj_apply_loc: __si('<path d="M12 3v12M7 10l5-5 5 5"/><polyline points="5 17 9 21 19 11"/>'),
  obj_apply_rot: __si('<path d="M4 12a8 8 0 0 1 14-5"/><polyline points="18 3 18 7 14 7"/><polyline points="6 16 10 20 19 11"/>'),
  obj_apply_scale: __si('<rect x="3" y="3" width="10" height="10" rx="1.5" fill="currentColor" fill-opacity="0.18"/><polyline points="7 17 11 21 21 11"/>'),

  // Sculpt Tab Icons
  sculpt_invert: __si('<circle cx="12" cy="12" r="9"/><path d="M12 3a9 9 0 0 1 0 18z" fill="currentColor"/><path d="M7 12h3M14 12h3"/>'),
  sculpt_smooth: __si('<path d="M3 15c3-6 6-6 9 0s6 6 9 0"/><line x1="3" y1="19" x2="21" y2="19" stroke-opacity="0.4"/>'),
  sculpt_smooth_hold: __si('<path d="M3 14c3-5 6-5 9 0s6 5 9 0"/><circle cx="12" cy="7" r="2.5" fill="currentColor"/>'),
  sculpt_voxel: __si('<rect x="4" y="4" width="7" height="7" rx="1" fill="currentColor" fill-opacity="0.22"/><rect x="13" y="4" width="7" height="7" rx="1" fill="currentColor" fill-opacity="0.14"/><rect x="4" y="13" width="7" height="7" rx="1" fill="currentColor" fill-opacity="0.14"/><rect x="13" y="13" width="7" height="7" rx="1" fill="currentColor" fill-opacity="0.22"/>'),
  sculpt_relax: __si('<circle cx="12" cy="12" r="9" fill="currentColor" fill-opacity="0.14"/><path d="M7 12h10M12 7v10"/>'),

  // Rig Tab Icons (Zero duplicates, zero missing, zero undefined!)
  rig_mode_edit: __si('<circle cx="6" cy="18" r="2.5" fill="currentColor"/><circle cx="18" cy="6" r="2.5" fill="currentColor"/><polygon points="7.5 15 15 7.5 16.5 9 9 16.5" fill="currentColor" fill-opacity="0.22"/><path d="M14 19h6M17 16v6"/>'),
  rig_mode_pose: __si('<circle cx="12" cy="4.5" r="2.5" fill="currentColor" fill-opacity="0.3"/><path d="M6 9l6 1.5 6-2.5M12 7v7l-4 7M12 14l4.5 6.5"/>'),
  rig_mode_wp: __si('<circle cx="12" cy="12" r="9" fill="currentColor" fill-opacity="0.16"/><circle cx="12" cy="12" r="5" fill="currentColor" fill-opacity="0.25"/><circle cx="12" cy="12" r="2" fill="currentColor"/>'),
  rig_xray: __si('<rect x="4" y="4" width="11" height="11" rx="2" fill="currentColor" fill-opacity="0.16"/><rect x="9" y="9" width="11" height="11" rx="2" stroke-dasharray="2.5 2"/><circle cx="12" cy="12" r="2" fill="currentColor"/>'),
  rig_names: __si('<rect x="3" y="5" width="18" height="14" rx="2.5" fill="currentColor" fill-opacity="0.14"/><path d="M8 10h8M12 10v6"/>'),
  rig_multisel: __si('<rect x="3" y="5" width="11" height="11" rx="2" fill="currentColor" fill-opacity="0.16"/><path d="M17 11v8M13 15h8"/><polyline points="6 10.5 8 12.5 11.5 8.5"/>'),
  rig_layer: __si('<polygon points="12 3 21 8 12 13 3 8" fill="currentColor" fill-opacity="0.2"/><polyline points="3 13 12 18 21 13"/>'),
  rig_add_bone: __si('<circle cx="6" cy="18" r="2.3" fill="currentColor"/><circle cx="14" cy="10" r="2.3" fill="currentColor"/><line x1="7.6" y1="16.4" x2="12.4" y2="11.6" stroke-width="2.2"/><path d="M18 14v6M15 17h6"/>'),
  rig_biped: __si('<circle cx="12" cy="4" r="2.2" fill="currentColor"/><line x1="12" y1="6.5" x2="12" y2="14"/><line x1="6" y1="9" x2="18" y2="9"/><line x1="6" y1="9" x2="5" y2="14"/><line x1="18" y1="9" x2="19" y2="14"/><line x1="12" y1="14" x2="8.5" y2="21"/><line x1="12" y1="14" x2="15.5" y2="21"/>'),
  rig_chain: __si('<circle cx="4.5" cy="19.5" r="2" fill="currentColor"/><circle cx="11" cy="13" r="2" fill="currentColor"/><circle cx="16" cy="8" r="2" fill="currentColor"/><circle cx="20" cy="4" r="1.8" fill="currentColor"/><line x1="6" y1="18" x2="18.5" y2="5.5" stroke-width="2"/>'),
  rig_demo_char: __si('<rect x="6" y="3" width="12" height="18" rx="4" fill="currentColor" fill-opacity="0.16"/><circle cx="12" cy="7" r="1.8" fill="currentColor"/><line x1="12" y1="9" x2="12" y2="15"/><line x1="8.5" y1="11.5" x2="15.5" y2="11.5"/><line x1="12" y1="15" x2="9.5" y2="19"/><line x1="12" y1="15" x2="14.5" y2="19"/>'),
  rig_extrude: __si('<circle cx="6" cy="18" r="2.2" fill="currentColor"/><circle cx="13" cy="11" r="2.2" fill="currentColor"/><line x1="7.5" y1="16.5" x2="11.5" y2="12.5" stroke-width="2"/><line x1="13" y1="11" x2="19.5" y2="4.5" stroke-dasharray="2.5 2"/><polyline points="15 4.5 19.5 4.5 19.5 9"/>'),
  rig_subdivide: __si('<circle cx="4.5" cy="19.5" r="2"/><circle cx="19.5" cy="4.5" r="2"/><line x1="6" y1="18" x2="18" y2="6"/><circle cx="12" cy="12" r="2.8" fill="currentColor"/>'),
  rig_conn: __si('<circle cx="7" cy="17" r="2.2" fill="currentColor"/><circle cx="17" cy="7" r="2.2" fill="currentColor"/><path d="M9 15l6-6" stroke-width="2.2"/><circle cx="12" cy="12" r="3.5" fill="currentColor" fill-opacity="0.22"/>'),
  rig_parent_off: __si('<circle cx="6" cy="6" r="2.5" fill="currentColor"/><circle cx="18" cy="18" r="2.5" fill="currentColor"/><path d="M8.5 8.5l7 7" stroke-dasharray="2.5 2"/><polyline points="12 18 18 18 18 12"/>'),
  rig_parent_conn: __si('<circle cx="6" cy="6" r="2.5" fill="currentColor"/><circle cx="18" cy="18" r="2.5" fill="currentColor"/><path d="M8 8l8 8" stroke-width="2.2"/><circle cx="12" cy="12" r="2" fill="currentColor"/>'),
  rig_unparent: __si('<circle cx="6" cy="6" r="2.3"/><circle cx="18" cy="18" r="2.3"/><line x1="9" y1="9" x2="15" y2="15" stroke-dasharray="2 2"/><line x1="15" y1="9" x2="9" y2="15" stroke-width="2"/>'),
  rig_flip: __si('<polyline points="7 3 3 7 7 11"/><path d="M3 7h13a4 4 0 0 1 4 4v1"/><polyline points="17 21 21 17 17 13"/><path d="M21 17H8a4 4 0 0 1-4-4v-1"/>'),
  rig_roll: __si('<circle cx="12" cy="12" r="6" fill="currentColor" fill-opacity="0.16"/><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83"/><polyline points="15 4 18 7 15 10"/>'),
  rig_sym: __si('<line x1="12" y1="2" x2="12" y2="22" stroke-dasharray="2.5 2"/><polygon points="4 8 9 12 4 16" fill="currentColor" fill-opacity="0.25"/><polygon points="20 8 15 12 20 16" fill="currentColor" fill-opacity="0.25"/>'),
  rig_autoname: __si('<rect x="2" y="6" width="9" height="12" rx="2" fill="currentColor" fill-opacity="0.18"/><rect x="13" y="6" width="9" height="12" rx="2" fill="currentColor" fill-opacity="0.18"/><path d="M5 10v4h3M16 14v-4h2.5a1.5 1.5 0 0 1 0 3H16m2 0l1.5 1"/>'),
  rig_ik: __si('<circle cx="5" cy="19" r="2.2" fill="currentColor"/><circle cx="11" cy="9" r="2.2" fill="currentColor"/><circle cx="19" cy="14" r="2.6" fill="currentColor" fill-opacity="0.3"/><line x1="6.2" y1="17" x2="10" y2="11" stroke-width="2"/><line x1="12.8" y1="10.2" x2="17" y2="12.8" stroke-width="2"/><path d="M19 10v8M15 14h8"/>'),
  rig_orient: __si('<circle cx="12" cy="12" r="8" fill="currentColor" fill-opacity="0.14"/><ellipse cx="12" cy="12" rx="8" ry="3"/><line x1="12" y1="2" x2="12" y2="22"/>'),
  rig_reset_pose: __si('<path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><polyline points="3 3 3 8 8 8"/><circle cx="12" cy="12" r="2.5" fill="currentColor"/>'),
  rig_clear_rot: __si('<path d="M4 12a8 8 0 0 1 13.6-5.6"/><polyline points="18 3 18 7 14 7"/><line x1="5" y1="19" x2="19" y2="5"/>'),
  rig_clear_loc: __si('<path d="M12 3v18M3 12h18"/><line x1="4" y1="20" x2="20" y2="4" stroke-width="2"/>'),
  rig_clear_scale: __si('<rect x="5" y="5" width="14" height="14" rx="2" stroke-dasharray="3 2"/><line x1="4" y1="20" x2="20" y2="4" stroke-width="2"/>'),
  rig_con_add: __si('<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>'),
  rig_pose_save: __si('<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" fill="currentColor" fill-opacity="0.2"/><path d="M12 7v6M9 10h6"/>'),
  rig_pose_apply: __si('<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" fill="currentColor" fill-opacity="0.16"/><polyline points="9 11 11.5 13.5 15.5 9.5"/>'),
  wp_add: __si('<circle cx="12" cy="12" r="8.5" fill="currentColor" fill-opacity="0.18"/><path d="M12 8v8M8 12h8"/>'),
  wp_sub: __si('<circle cx="12" cy="12" r="8.5" fill="currentColor" fill-opacity="0.14"/><line x1="8" y1="12" x2="16" y2="12"/>'),
  wp_blur: __si('<path d="M12 3.5c0 0-6.5 7-6.5 11.5a6.5 6.5 0 0 0 13 0C18.5 10.5 12 3.5 12 3.5z" fill="currentColor" fill-opacity="0.2"/>'),
  wp_light: __si('<circle cx="12" cy="12" r="5" fill="currentColor" fill-opacity="0.28"/><path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22"/>'),
  wp_dark: __si('<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" fill="currentColor" fill-opacity="0.24"/>'),
  wp_auto: __si('<path d="M12 2l2.4 5.6L20 10l-5.6 2.4L12 18l-2.4-5.6L4 10l5.6-2.4L12 2z" fill="currentColor" fill-opacity="0.24"/><circle cx="19" cy="19" r="2" fill="currentColor"/>'),
  wp_norm: __si('<path d="M4 19h16"/><rect x="6" y="10" width="3" height="9" fill="currentColor" fill-opacity="0.25"/><rect x="10.5" y="6" width="3" height="13" fill="currentColor" fill-opacity="0.25"/><rect x="15" y="12" width="3" height="7" fill="currentColor" fill-opacity="0.25"/>'),

  // Look Tab Icons (Material, Texture, Lighting, Camera, Render)
  look_mat: __si('<circle cx="12" cy="12" r="8.5" fill="currentColor" fill-opacity="0.2"/><path d="M12 3.5a8.5 8.5 0 0 1 0 17" fill="currentColor" fill-opacity="0.22"/><circle cx="9" cy="9" r="1.8" fill="currentColor"/>'),
  look_tex: __si('<rect x="3" y="3" width="18" height="18" rx="2.5" fill="currentColor" fill-opacity="0.14"/><rect x="3" y="3" width="9" height="9" fill="currentColor" fill-opacity="0.24"/><rect x="12" y="12" width="9" height="9" fill="currentColor" fill-opacity="0.24"/>'),
  look_light: __si('<circle cx="12" cy="12" r="4.5" fill="currentColor" fill-opacity="0.28"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2.2 2.2M16.8 16.8L19 19M19 5l-2.2 2.2M7.2 16.8L5 19"/>'),
  look_cam: __si('<rect x="2" y="6" width="14" height="12" rx="2.5" fill="currentColor" fill-opacity="0.18"/><polygon points="22 7 16 12 22 17 22 7" fill="currentColor" fill-opacity="0.28"/><circle cx="9" cy="12" r="2.5"/>'),
  look_ren: __si('<rect x="2" y="4" width="20" height="15" rx="2.5" fill="currentColor" fill-opacity="0.15"/><circle cx="12" cy="11.5" r="3.5" fill="currentColor" fill-opacity="0.28"/><path d="M8 22h8"/>'),
  mat_new: __si('<circle cx="10.5" cy="12.5" r="7.5" fill="currentColor" fill-opacity="0.18"/><path d="M18 3v6M15 6h6"/>'),
  mat_assign: __si('<circle cx="9" cy="12" r="6.5" fill="currentColor" fill-opacity="0.2"/><polyline points="14 12 17 15 22 9"/>'),
  tex_upload: __si('<rect x="3" y="4" width="18" height="16" rx="2.5" fill="currentColor" fill-opacity="0.14"/><path d="M12 16V8"/><polyline points="8.5 11.5 12 8 15.5 11.5"/>'),
  tex_checker: __si('<rect x="3" y="3" width="18" height="18" rx="2"/><rect x="3" y="3" width="9" height="9" fill="currentColor" fill-opacity="0.3"/><rect x="12" y="12" width="9" height="9" fill="currentColor" fill-opacity="0.3"/>'),
  tex_noise: __si('<rect x="3" y="3" width="18" height="18" rx="2" fill="currentColor" fill-opacity="0.12"/><circle cx="8" cy="8" r="1.2" fill="currentColor"/><circle cx="15" cy="7" r="1.5" fill="currentColor"/><circle cx="11" cy="12" r="1.3" fill="currentColor"/><circle cx="7" cy="16" r="1.4" fill="currentColor"/><circle cx="16" cy="15" r="1.2" fill="currentColor"/>'),
  tex_gradient: __si('<rect x="3" y="3" width="18" height="18" rx="2"/><rect x="3" y="3" width="6" height="18" fill="currentColor" fill-opacity="0.4"/><rect x="9" y="3" width="6" height="18" fill="currentColor" fill-opacity="0.2"/>'),
  tex_brick: __si('<rect x="3" y="3" width="18" height="18" rx="2" fill="currentColor" fill-opacity="0.14"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/><line x1="12" y1="3" x2="12" y2="9"/><line x1="8" y1="9" x2="8" y2="15"/><line x1="16" y1="9" x2="16" y2="15"/><line x1="12" y1="15" x2="12" y2="21"/>'),
  tex_wood: __si('<rect x="3" y="3" width="18" height="18" rx="2" fill="currentColor" fill-opacity="0.14"/><path d="M7 3c2 6 2 12 0 18M17 3c-2 6-2 12 0 18"/><ellipse cx="12" cy="12" rx="2" ry="5"/>'),
  tex_marble: __si('<rect x="3" y="3" width="18" height="18" rx="2" fill="currentColor" fill-opacity="0.14"/><path d="M4 18c4-5 6-3 10-8s3-5 6-6M8 21c3-4 6-2 10-7"/>'),
  tex_carbon: __si('<rect x="3" y="3" width="18" height="18" rx="2" fill="currentColor" fill-opacity="0.14"/><path d="M3 9l6-6M3 15l12-12M3 21L21 3M9 21l12-12M15 21l6-6"/>'),
  tex_hdri: __si('<path d="M3 17a9 9 0 0 1 18 0Z" fill="currentColor" fill-opacity="0.2"/><circle cx="15" cy="10" r="2" fill="currentColor"/><line x1="2" y1="20" x2="22" y2="20"/>'),
  tex_clear: __si('<rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="3" x2="21" y2="21" stroke-width="2"/>'),
  light_shadow: __si('<polygon points="9 4 15 14 3 14" fill="currentColor" fill-opacity="0.24"/><polygon points="15 14 22 19 8 19" fill="currentColor" fill-opacity="0.4"/><line x1="2" y1="19" x2="22" y2="19"/>'),
  cam_add: __si('<rect x="2" y="6" width="13" height="12" rx="2" fill="currentColor" fill-opacity="0.18"/><polygon points="15 10 21 6 21 18 15 14"/><path d="M8.5 9.5v5M6 12h5"/>'),
  cam_align: __si('<rect x="3" y="5" width="18" height="14" rx="2" stroke-dasharray="3 2"/><circle cx="12" cy="12" r="3" fill="currentColor" fill-opacity="0.28"/><path d="M12 7v2M12 15v2M7 12h2M15 12h2"/>'),
  cam_lock: __si('<rect x="5" y="11" width="14" height="10" rx="2" fill="currentColor" fill-opacity="0.22"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>'),
  cam_dof: __si('<circle cx="12" cy="12" r="9" fill="currentColor" fill-opacity="0.14"/><polygon points="12 6 17 10 15 16 9 16 7 10" fill="currentColor" fill-opacity="0.22"/>'),
  ren_solid: __si('<circle cx="12" cy="12" r="8.5" fill="currentColor" fill-opacity="0.32"/>'),
  ren_matprev: __si('<circle cx="12" cy="12" r="8.5"/><path d="M12 3.5a8.5 8.5 0 0 1 8.5 8.5H12z" fill="currentColor" fill-opacity="0.35"/><path d="M12 20.5a8.5 8.5 0 0 1-8.5-8.5H12z" fill="currentColor" fill-opacity="0.35"/>'),
  ren_rendered: __si('<circle cx="12" cy="12" r="8" fill="currentColor" fill-opacity="0.26"/><path d="M18 3l1 2.5L21.5 6.5 19 7.5 18 10l-1-2.5L14.5 6.5 17 5.5z" fill="currentColor"/>'),
  ren_wire: __si('<circle cx="12" cy="12" r="8.5"/><ellipse cx="12" cy="12" rx="8.5" ry="3.5"/><ellipse cx="12" cy="12" rx="3.5" ry="8.5"/>'),
  ren_grid: __si('<polygon points="12 5 22 12 12 19 2 12" fill="currentColor" fill-opacity="0.16"/><line x1="7" y1="8.5" x2="17" y2="15.5"/><line x1="17" y1="8.5" x2="7" y2="15.5"/>'),
  ren_axes: __si('<line x1="12" y1="12" x2="12" y2="3" stroke-width="2"/><line x1="12" y1="12" x2="20" y2="16" stroke-width="2"/><line x1="12" y1="12" x2="4" y2="16" stroke-width="2"/><circle cx="12" cy="12" r="2" fill="currentColor"/>'),
  ren_png: __si('<rect x="3" y="4" width="18" height="16" rx="2.5" fill="currentColor" fill-opacity="0.16"/><circle cx="12" cy="12" r="4" fill="currentColor" fill-opacity="0.28"/><circle cx="17.5" cy="7.5" r="1" fill="currentColor"/>'),
  ren_obj: __si('<polygon points="12 3 20 7.5 20 15.5 12 20 4 15.5 4 7.5" fill="currentColor" fill-opacity="0.16"/><path d="M12 13V3M8.5 6.5L12 3l3.5 3.5"/>'),

  // Animate Tab Icons
  anim_rec: __si('<circle cx="12" cy="12" r="8.5" fill="currentColor" fill-opacity="0.18"/><circle cx="12" cy="12" r="4" fill="currentColor"/>'),
  anim_loop: __si('<polyline points="17 2 21 6 17 10"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 22 3 18 7 14"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/>'),
  anim_prev_key: __si('<line x1="5" y1="5" x2="5" y2="19" stroke-width="2"/><polygon points="15 6 21 12 15 18 9 12" fill="currentColor" fill-opacity="0.26"/>'),
  anim_next_key: __si('<line x1="19" y1="5" x2="19" y2="19" stroke-width="2"/><polygon points="9 6 15 12 9 18 3 12" fill="currentColor" fill-opacity="0.26"/>'),
  anim_snap: __si('<path d="M6 3v7a6 6 0 0 0 12 0V3"/><line x1="6" y1="7" x2="10" y2="7"/><line x1="14" y1="7" x2="18" y2="7"/>'),
  anim_graph: __si('<path d="M3 19V5h18"/><path d="M5 16c3.5-9 6.5-9 10-2s4-7 6-7" stroke-width="2"/><circle cx="10" cy="10" r="2" fill="currentColor"/><circle cx="17" cy="11" r="2" fill="currentColor"/>'),
  anim_onion: __si('<circle cx="9" cy="12" r="5.5" stroke-dasharray="2.5 2"/><circle cx="15" cy="12" r="5.5" fill="currentColor" fill-opacity="0.24"/>'),
  anim_key_arm: __si('<polygon points="12 2 21 12 12 22 3 12" fill="currentColor" fill-opacity="0.18"/><circle cx="9" cy="9" r="1.8" fill="currentColor"/><circle cx="15" cy="15" r="1.8" fill="currentColor"/><line x1="10.2" y1="10.2" x2="13.8" y2="13.8" stroke-width="2"/>'),
  anim_walk: __si('<circle cx="13" cy="4" r="2" fill="currentColor"/><path d="M7 21l3-6 2.5-3.5L11 7l-4 2.5L5.5 13M11 7l4.5 2.5 2 3M13.5 14.5l3 3v3.5"/>'),
  anim_bake: __si('<path d="M12 2v4M8 4v3M16 4v3"/><rect x="4" y="9" width="16" height="11" rx="2.5" fill="currentColor" fill-opacity="0.18"/><polygon points="12 11.5 15 14.5 12 17.5 9 14.5" fill="currentColor"/>'),
  anim_spin: __si('<path d="M21 12a9 9 0 1 1-3-6.7"/><polyline points="21 3 21 8.5 15.5 8.5"/><polygon points="12 8 16 12 12 16 8 12" fill="currentColor" fill-opacity="0.26"/>'),
  anim_bounce: __si('<path d="M3 19c2.5-10 5.5-10 8 0 2-6 4.5-6 6.5 0 1.2-3 2.5-3 3.5 0"/><circle cx="7" cy="7" r="2.2" fill="currentColor"/>')
};
window.__STUDIO_ICONS = STUDIO_ICONS;

function __define(e,t){__modules[e]=t}function __require(e){if(__exports[e])return __exports[e];const t={};return __exports[e]=t,__modules[e](__require,t),t}__define("svelte/store",(function(e,t){function o(e){const t=new Set;function o(o){e=o;for(const o of t)o(e)}return{set:o,update:function(t){o(t(e))},subscribe:function(o){return t.add(o),o(e),()=>t.delete(o)}}}function n(e){let t;return e.subscribe((e=>{t=e}))(),t}t.writable=o,t.derived=function(e,t){const A=Array.isArray(e),s=A?e:[e],i=o(void 0);function r(){const e=s.map((e=>n(e)));i.set(t(A?e:e[0]))}r();for(const e of s)e.subscribe(r);return{subscribe:i.subscribe}},t.get=n})),__define("lib/constants",(function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.WORKSPACE_CHIPS=t.WORKSPACES=t.NM=t.ICONS=t.HINTS=t.CHIP_ICONS=void 0;const o=(e,t="")=>`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" ${t}>${e}</svg>`,n={select:o('<path d="M5 3l14 7-6 2-2 6z"/>'),move:o('<path d="M12 3v18M3 12h18M12 3l-2 2M12 3l2 2M12 21l-2-2M12 21l2-2M3 12l2-2M3 12l2 2M21 12l-2-2M21 12l-2 2"/>'),rotate:o('<path d="M20 12a8 8 0 1 1-3-6.2M20 4v5h-5"/>'),scale:o('<path d="M5 19L19 5M10 5h9v9"/>'),pan:o('<path d="M8 12V6a1.5 1.5 0 0 1 3 0v5V4.5a1.5 1.5 0 0 1 3 0V11V6a1.5 1.5 0 0 1 3 0v8a6 6 0 0 1-6 6c-3 0-4-2-6-5l-1-2a1.5 1.5 0 0 1 3 0z"/>'),orbit:o('<circle cx="12" cy="12" r="3.2"/><ellipse cx="12" cy="12" rx="9" ry="4.4" transform="rotate(-28 12 12)"/>'),zoom:o('<circle cx="10.5" cy="10.5" r="6.5"/><path d="m20 20-4.7-4.7"/>'),snap:o('<path d="M4 9V5h4M20 9V5h-4M4 15v4h4M20 15v4h-4"/><circle cx="12" cy="12" r="2.5"/>'),pencil:o('<path d="M4 20l1-5L16 4l4 4L9 19z"/>'),sculpt:o('<path d="M4 17c3-9 7-9 8-4s5 3 8-4"/><path d="M3 21h18"/>'),rig:o('<circle cx="6" cy="6" r="2"/><circle cx="18" cy="18" r="2"/><path d="M7.5 7.5l9 9"/>'),undo:o('<path d="M9 7L4 12l5 5M4 12h10a6 6 0 0 1 6 6"/>'),redo:o('<path d="M15 7l5 5-5 5M20 12H10a6 6 0 0 0-6 6"/>'),list:o('<path d="M8 6h12M8 12h12M8 18h12"/><path d="M3.8 6h.01M3.8 12h.01M3.8 18h.01"/>'),save:o('<path d="M12 3v11"/><path d="m8 10 4 4 4-4"/><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"/>'),close:o('<path d="m6 6 12 12M18 6 6 18"/>'),settings:o('<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.6 1.6 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.6 1.6 0 0 0-1.8-.3 1.6 1.6 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.6 1.6 0 0 0-1-1.5 1.6 1.6 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.6 1.6 0 0 0 .3-1.8 1.6 1.6 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.6 1.6 0 0 0 1.5-1 1.6 1.6 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.6 1.6 0 0 0 1.8.3H9a1.6 1.6 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.6 1.6 0 0 0 1 1.5 1.6 1.6 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.6 1.6 0 0 0-.3 1.8V9a1.6 1.6 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.6 1.6 0 0 0-1.5 1z"/>'),layers:o('<path d="M12 3l9 5-9 5-9-5zM3 13l9 5 9-5"/>'),panel:o('<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M9 4v16"/>'),rewind:o('<path d="M11 5 4 12l7 7zM20 5l-7 7 7 7z"/>'),loop:o('<path d="M17 3l4 4-4 4"/><path d="M3 11V9a2 2 0 0 1 2-2h16"/><path d="M7 21l-4-4 4-4"/><path d="M21 13v2a2 2 0 0 1-2 2H3"/>'),play:o('<path d="M7 4.5 19 12 7 19.5z"/>'),pause:o('<path d="M9 4.5v15M15 4.5v15"/>'),stop:o('<rect x="6" y="6" width="12" height="12" rx="1.5"/>'),arc:o('<path d="M3 18c6.5 0 7-12 18-12"/><path d="M3 18h.01M21 6h.01"/>'),repeat:o('<path d="m17 2 4 4-4 4"/><path d="M3 11V9a3 3 0 0 1 3-3h15"/><path d="m7 22-4-4 4-4"/><path d="M21 13v2a3 3 0 0 1-3 3H3"/>'),refresh:o('<path d="M20.5 12a8.5 8.5 0 1 1-2.5-6"/><path d="M20.5 4v5h-5"/>'),timeline:o('<path d="M3 6h18M3 12h18M3 18h18"/><path d="M7 4v4M15 10v4M10 16v4"/>'),eye:o('<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>'),eye_off:o('<path d="M10.6 6.2A9.9 9.9 0 0 1 12 6c6.2 0 10 6 10 6a17 17 0 0 1-3.2 3.9M6.6 7.5A16.6 16.6 0 0 0 2 12s3.8 6 10 6a9.7 9.7 0 0 0 4-.8"/><path d="m3 3 18 18"/><path d="M9.9 10a2.8 2.8 0 0 0 4 4"/>'),cube:o('<path d="M12 3l8 4.5v9L12 21l-8-4.5v-9zM12 12l8-4.5M12 12v9M12 12L4 7.5"/>'),sphere:o('<circle cx="12" cy="12" r="9"/><ellipse cx="12" cy="12" rx="4" ry="9"/><path d="M3 12h18"/>'),cone:o('<path d="M12 3L5 18c0 1.7 3 3 7 3s7-1.3 7-3z"/>'),cylinder:o('<ellipse cx="12" cy="6" rx="7" ry="3"/><path d="M5 6v12c0 1.7 3 3 7 3s7-1.3 7-3V6"/>'),torus:o('<ellipse cx="12" cy="12" rx="9" ry="5.5"/><ellipse cx="12" cy="12" rx="3.4" ry="1.6"/>'),plane:o('<path d="m12 3 9 5-9 5-9-5 9-5Z"/><path d="M3 12v5l9 5 9-5v-5"/>'),lamp:o('<path d="M9 18h6M10 21h4"/><path d="M12 3a6 6 0 0 0-4 10.5V16h8v-2.5A6 6 0 0 0 12 3Z"/>'),bone:o('<path d="M6.5 18 18 6.5"/><path d="M5 15a2.5 2.5 0 1 0 4 4M15 5a2.5 2.5 0 1 1 4 4"/>'),coin:o('<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5v9M9.5 9.5h4a2 2 0 0 1 0 4h-3a2 2 0 0 0 0 4h4"/>'),key:o('<path d="m12 3.5 8.5 8.5-8.5 8.5L3.5 12 12 3.5Z"/>'),frame:o('<path d="M4 9V5h4M20 9V5h-4M4 15v4h4M20 15v4h-4"/><circle cx="12" cy="12" r="2.5"/>'),text:o('<path d="M5 6h14M12 6v13M8 19h8"/>'),video:o('<rect x="2.5" y="6" width="13" height="12" rx="2"/><path d="m15.5 11 6-3v8l-6-3z"/>'),wire:o('<path d="M4 4h16v16H4z"/><path d="m4 4 16 16M20 4 4 20"/>'),toon:o('<circle cx="12" cy="12" r="9"/><path d="M8.5 14.5a4.5 4.5 0 0 0 7 0"/><path d="M9 9.5h.01M15 9.5h.01"/>'),ink:o('<rect x="3.5" y="3.5" width="17" height="17" rx="2"/><rect x="8" y="8" width="8" height="8" rx="1"/>'),matte:o('<circle cx="12" cy="12" r="8.5"/><path d="M12 3.5a8.5 8.5 0 0 0 0 17z" fill="currentColor" stroke="none"/>'),upload:o('<path d="M12 15.5V4"/><path d="m8 8 4-4 4 4"/><path d="M4 15v3a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-3"/>'),download:o('<path d="M12 4v11.5"/><path d="m8 12 4 4 4-4"/><path d="M4 15v3a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-3"/>'),camera:o('<rect x="2.5" y="7" width="12" height="10" rx="2"/><path d="m14.5 10.5 6-3.5v10l-6-3.5z"/>'),photo:o('<rect x="3" y="6" width="13" height="12" rx="2"/><path d="m16 11 5-3v8l-5-3"/>'),folder:o('<path d="M3 7a2 2 0 0 1 2-2h4l2 2.5h8a2 2 0 0 1 2 2V18a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"/>'),send:o('<path d="m4 12 16-8-6 16-2.5-6.2L4 12Z"/>'),plus:o('<path d="M12 5v14M5 12h14"/>'),minus:o('<path d="M5 12h14"/>'),spark:o('<path d="m12 3 2.2 6.4L21 12l-6.8 2.6L12 21l-2.2-6.4L3 12l6.8-2.6L12 3Z"/>'),dots:o('<circle cx="6" cy="12" r="1.2"/><circle cx="12" cy="12" r="1.2"/><circle cx="18" cy="12" r="1.2"/>'),down:o('<path d="m6 9 6 6 6-6"/>'),expand:o('<path d="m7 15 5 5 5-5"/><path d="m7 9 5-5 5 5"/>'),up:o('<path d="m18 15-6-6-6 6"/>'),left:o('<path d="m15 18-6-6 6-6"/>'),right:o('<path d="m9 6 6 6-6 6"/>'),cube_chip:o('<path d="m12 2.8 8 4.4v9.6l-8 4.4-8-4.4V7.2l8-4.4Z"/><path d="M12 12.4 20 8M12 12.4v8.8M12 12.4 4 8"/>'),key_chip:o('<path d="m12 3.5 8.5 8.5-8.5 8.5L3.5 12 12 3.5Z"/>'),gravity_chip:o('<path d="M12 4v12"/><path d="m7 12 5 5 5-5"/><path d="M4 21h16"/>'),pad_chip:o('<rect x="3" y="7" width="18" height="11" rx="3"/><path d="M7.5 11v2.5M16.5 11v2.5"/><circle cx="12" cy="12.5" r="1.4"/>'),photo_chip:o('<rect x="3" y="6" width="13" height="12" rx="2"/><path d="m16 11 5-3v8l-5-3"/>'),spark_chip:o('<path d="m12 3 2.2 6.4L21 12l-6.8 2.6L12 21l-2.2-6.4L3 12l6.8-2.6L12 3Z"/>'),sliders:o('<path d="M4 7h16M4 12h16M4 17h16"/><circle cx="9" cy="7" r="1.8"/><circle cx="15" cy="12" r="1.8"/><circle cx="8" cy="17" r="1.8"/>'),lock:o('<rect x="4.5" y="10.5" width="15" height="10" rx="2"/><path d="M8 10.5V8a4 4 0 0 1 8 0v2.5"/>'),copy:o('<rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1"/>'),trash:o('<path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13"/><path d="M10 11v6M14 11v6"/>'),scissors:o('<circle cx="6" cy="6" r="2.6"/><circle cx="6" cy="18" r="2.6"/><path d="M8.2 7.6 20 18M8.2 16.4 20 6"/>'),cut:o('<path d="M3 12h18"/><path d="M7 8v8M17 8v8"/>'),target:o('<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3"/>'),brush:o('<path d="M14.5 3.5 20.5 9.5 11 19H5v-6l9.5-9.5Z"/><path d="m13 5 6 6"/>'),image:o('<rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="8.5" cy="10" r="1.8"/><path d="m4 17 5-4.5 3.5 3 3-2.5L20 17"/>'),marker:o('<path d="M12 20h8"/><path d="m4 16 9.5-9.5 4 4L8 20H4v-4Z"/><path d="m14 5 1.5-1.5a2.1 2.1 0 0 1 3 3L17 8"/>'),group:o('<circle cx="7" cy="7" r="3"/><circle cx="17" cy="7" r="3"/><circle cx="7" cy="17" r="3"/><circle cx="17" cy="17" r="3"/>')};t.ICONS=n;t.WORKSPACES={mod:{label:"Model",icon:"cube_chip",color:"#3dd9a8"},edt:{label:"Edit",icon:"cube_chip",color:"#6ee7b7"},scl:{label:"Sculpt",icon:"cube_chip",color:"#34d399"},uvp:{label:"UV/Paint",icon:"cube_chip",color:"#10b981"},shd:{label:"Shade",icon:"cube_chip",color:"#059669"},rig:{label:"Rig",icon:"cube_chip",color:"#047857"},ani:{label:"Animate",icon:"key_chip",color:"#ffc247"},phy:{label:"Physics",icon:"gravity_chip",color:"#ff7a6b"},gam:{label:"Game",icon:"pad_chip",color:"#5cb8ff"},ren:{label:"Render",icon:"photo_chip",color:"#a78bfa"},age:{label:"Agent",icon:"spark_chip",color:"#f472b6"}};t.WORKSPACE_CHIPS={mod:[["Add","Add primitives and import"],["Edit","Duplicate, delete, mirror, space"],["Look","Color, material, wire, toon, image"],["Sculpt","Brush, detail, push/pull, size, power"],["Rig","Bone, parent, unparent"],["Animate","Keys, playback, timing, easing"]],edt:[["Primitives","Parametric primitives"],["Edit","Extrude, bevel, loop cut, knife, bridge"],["Modifiers","Subdivision, mirror, array, boolean"],["Symmetry","X/Y/Z mirror, radial"]],scl:[["Brushes","Draw, clay, smooth, grab, crease, inflate"],["Dyntopo","Dynamic topology, voxel remesh"],["Multires","Subdivision levels, sculpt layers"],["Masks","Face sets, symmetry"]],uvp:[["Unwrap","Angle-based, conformal, smart project"],["Pack","Island packing, no overlap"],["Paint","Texture paint, vertex paint, weight paint"],["Bake","AO, normal, curvature, lightmap"]],shd:[["Nodes","Material node graph"],["Library","Presets, procedural textures"],["Preview","Look-dev, HDRI, matcap"]],rig:[["Armature","Create, edit, connect, roll"],["Weights","Auto-weights, heat map, paint"],["IK","Two-bone, FABRIK, CCD, pole target"],["Constraints","Copy, track, limit, child-of"]],ani:[["Keys","Add/remove key, ease, loop, length"],["Curves","Graph editor, bezier, cycles"],["NLA","Action strips, blending"],["Drivers","Expressions, custom properties"]],phy:[["Run","Play, stop, reset, bake"],["Body","Dynamic/static, mass"],["World","Gravity, bounce, grip"],["Soft","Cloth, soft body, particles"]],gam:[["Play","Start/stop, follow, sound, speed"],["Items","Coin, platform, block"],["Logic","Visual scripting, WASM"]],ren:[["Light","Sun, ambient, angle, shadows, sky"],["Video","Resolution, format, quality, fps, record"],["Files","Photo, 3D, save, open, new"]],age:[["Ask","Natural language prompt"],["Recipes","Spin, bounce, orbit, rain, lights"],["Saved","Workflows, macros"]]};t.CHIP_ICONS={Add:"plus",Edit:"pencil",Look:"eye",Sculpt:"sculpt",Rig:"rig",Animate:"play",Primitives:"cube",Modifiers:"layers",Symmetry:"target",Brushes:"brush",Dyntopo:"spark",Multires:"layers",Masks:"target",Unwrap:"frame",Pack:"layers",Paint:"brush",Bake:"spark",Nodes:"spark",Library:"layers",Preview:"eye",Armature:"rig",Weights:"target",IK:"key",Constraints:"target",Keys:"key",Curves:"arc",NLA:"timeline",Drivers:"spark",Run:"play",Body:"cube",World:"target",Soft:"spark",Play:"play",Items:"coin",Logic:"spark",Light:"lamp",Video:"photo",Files:"folder",Ask:"spark",Recipes:"spark",Saved:"save"};t.HINTS={mod:"Tap a shape, then drag the gizmo. Left rail: Move, Rotate, Scale.",edt:"Select vertices, edges, or faces. Use gizmo or shortcuts G/R/S.",scl:"Tap Detail first, then sculpt with brushes. Symmetry: X/Y/Z.",uvp:"Mark seams, then unwrap. Pack islands without overlap.",shd:"Connect nodes: Texture → Principled BSDF → Output.",rig:"Add bones, parent to mesh, auto-weights, add IK.",ani:"1. Slide timeline  2. Move object  3. Press Add Key.",phy:"Run drops objects with physics. Bake turns it to keys.",gam:"Select player object, press Play. Arrow keys to move.",ren:"Choose size, format, quality. Press Record.",age:"Ask in plain words. The agent builds and animates."};t.NM={bone:"Bone",model:"Model",lamp:"Light",fx:"Effect",cam:"Camera",cube:"Cube",sphere:"Sphere",cone:"Cone",cyl:"Cylinder",torus:"Donut",plane:"Floor",coin:"Coin"}})),__define("lib/math3d",(function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DEFAULT_CAMERA=void 0,t.add=o,t.basisFromDirection=function(e,t,o=50){const n=i(t),A=i(s(n,[0,1,0])),r=i(s(A,n));return{eye:e,forward:n,right:A,up:r,fov:o,near:.05,far:500}},t.cameraBasis=function(e){const t=Math.cos(e.pitch),o=[e.target[0]+Math.sin(e.yaw)*t*e.distance,e.target[1]+Math.sin(e.pitch)*e.distance,e.target[2]+Math.cos(e.yaw)*t*e.distance],A=i(n(e.target,o)),r=i(s(A,[0,1,0])),a=i(s(r,A));return{eye:o,forward:A,right:r,up:a,fov:e.fov,near:e.near,far:e.far}},t.clamp=function(e,t,o){return Math.min(o,Math.max(t,e))},t.cross=s,t.dot=A,t.focalLengthToFOV=function(e,t=36){const o=Math.max(1,e);return 2*Math.atan(t/(2*o))*180/Math.PI},t.fovToFocalLength=function(e,t=36){const o=Math.max(1,Math.min(170,e))*Math.PI/360;return t/(2*Math.tan(o))},t.hexToRgb=c,t.length=function(e){const t=e[0],o=e[1],n=e[2];return Math.sqrt(t*t+o*o+n*n)},t.lerp=r,t.lookAtEuler=function(e,t){const o=i(n(t,e)),A=Math.atan2(-o[0],-o[2]),s=Math.hypot(o[0],o[2]);return[Math.atan2(o[1],s),A,0]},t.mixColor=function(e,t,o){const n=c(e),A=c(t),s=Math.round(r(n[0],A[0],o)),i=Math.round(r(n[1],A[1],o)),a=Math.round(r(n[2],A[2],o));return`rgb(${s}, ${i}, ${a})`},t.normalize=i,t.pickRadius=function(e,t,o,n){return e/Math.max(t,.001)*(n/2/Math.tan(o*Math.PI/360))},t.project=function(e,t,o,s){const i=n(e,t.eye),r=A(i,t.right),a=A(i,t.up),c=A(i,t.forward),l=s/2/Math.tan(t.fov*Math.PI/360),g=c>t.near&&c<t.far;return{x:o/2+r/c*l,y:s/2-a/c*l,z:c,visible:g}},t.rotateEuler=a,t.scale=function(e,t){return[e[0]*t,e[1]*t,e[2]*t]},t.sub=n,t.transformPoint=function(e,t,n,A){return o(a([e[0]*A[0],e[1]*A[1],e[2]*A[2]],n),t)},t.vec3=void 0,t.withAlpha=function(e,t){const[o,n,A]=c(e);return`rgba(${o}, ${n}, ${A}, ${t})`},t.worldPerPixel=function(e,t,o){return 2*e*Math.tan(t*Math.PI/360)/o};function o(e,t){return[e[0]+t[0],e[1]+t[1],e[2]+t[2]]}function n(e,t){return[e[0]-t[0],e[1]-t[1],e[2]-t[2]]}function A(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]}function s(e,t){return[e[1]*t[2]-e[2]*t[1],e[2]*t[0]-e[0]*t[2],e[0]*t[1]-e[1]*t[0]]}function i(e){const t=e[0],o=e[1],n=e[2],A=Math.sqrt(t*t+o*o+n*n)||1;return[t/A,o/A,n/A]}function r(e,t,o){return e+(t-e)*o}function a(e,t){const[o,n,A]=t,[s,i,r]=e,a=Math.cos(o),c=Math.sin(o),l=Math.cos(n),g=Math.sin(n),d=Math.cos(A),u=Math.sin(A),m=i*a-r*c,p=i*c+r*a,h=s*l+p*g;return[h*d-m*u,h*u+m*d,-s*g+p*l]}t.vec3=(e=0,t=0,o=0)=>[e,t,o];function c(e){const t=e.replace("#",""),o=3===t.length?t.split("").map((e=>e+e)).join(""):t,n=Number.parseInt(o,16);return Number.isFinite(n)?[n>>16&255,n>>8&255,255&n]:[120,200,180]}t.DEFAULT_CAMERA={yaw:.62,pitch:.36,distance:8,target:[0,.4,0],fov:50,near:.05,far:500}})),__define("lib/glmath",(function(e,t){"use strict";var __nmScratch=new Float32Array(9);function o(){const e=new Float32Array(16);return e[0]=1,e[5]=1,e[10]=1,e[15]=1,e}function n(e){const[t,o,n]=e,A=Math.cos(t),s=Math.sin(t),i=Math.cos(o),r=Math.sin(o),a=Math.cos(n),c=Math.sin(n),l=new Float32Array(16);return l[0]=i*a+r*s*c,l[1]=A*c,l[2]=-r*a+i*s*c,l[3]=0,l[4]=-i*c+r*s*a,l[5]=A*a,l[6]=r*c+i*s*a,l[7]=0,l[8]=r*A,l[9]=-s,l[10]=i*A,l[11]=0,l[12]=0,l[13]=0,l[14]=0,l[15]=1,l}Object.defineProperty(t,"__esModule",{value:!0}),t.eulerMatrix=n,t.hexColor=function(e){const t=e.replace("#",""),o=3===t.length?t.split("").map((e=>e+e)).join(""):t,n=Number.parseInt(o,16);return Number.isFinite(n)?[(n>>16&255)/255,(n>>8&255)/255,(255&n)/255]:[.43,.9,.72]},t.mat3FromMat4=function(e){const t=new Float32Array(9);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[4],t[4]=e[5],t[5]=e[6],t[6]=e[8],t[7]=e[9],t[8]=e[10],t},t.mat4FromTRS=function(e,t,o){const A=n(t),s=new Float32Array(16);return s[0]=A[0]*o[0],s[1]=A[1]*o[0],s[2]=A[2]*o[0],s[3]=0,s[4]=A[4]*o[1],s[5]=A[5]*o[1],s[6]=A[6]*o[1],s[7]=0,s[8]=A[8]*o[2],s[9]=A[9]*o[2],s[10]=A[10]*o[2],s[11]=0,s[12]=e[0],s[13]=e[1],s[14]=e[2],s[15]=1,s},t.mat4Identity=o,t.mat4Invert=function(e){const t=new Float32Array(16),n=e[0],A=e[1],s=e[2],i=e[3],r=e[4],a=e[5],c=e[6],l=e[7],g=e[8],d=e[9],u=e[10],m=e[11],p=e[12],h=e[13],I=e[14],f=e[15],C=n*a-A*r,y=n*c-s*r,E=n*l-i*r,B=A*c-s*a,b=A*l-i*a,v=s*l-i*c,Q=g*h-d*p,M=g*I-u*p,k=g*f-m*p,w=d*I-u*h,x=d*f-m*h,S=u*f-m*I;let D=C*S-y*x+E*w+B*k-b*M+v*Q;return D?(D=1/D,t[0]=(a*S-c*x+l*w)*D,t[1]=(s*x-A*S-i*w)*D,t[2]=(h*v-I*b+f*B)*D,t[3]=(u*b-d*v-m*B)*D,t[4]=(c*k-r*S-l*M)*D,t[5]=(n*S-s*k+i*M)*D,t[6]=(I*E-p*v-f*y)*D,t[7]=(g*v-u*E+m*y)*D,t[8]=(r*x-a*k+l*Q)*D,t[9]=(A*k-n*x-i*Q)*D,t[10]=(p*b-h*E+f*C)*D,t[11]=(d*E-g*b-m*C)*D,t[12]=(a*M-r*w-c*Q)*D,t[13]=(n*w-A*M+s*Q)*D,t[14]=(h*y-p*B-I*C)*D,t[15]=(g*B-d*y+u*C)*D,t):o()},t.mat4LookAt=function(e,t,o){let n=e[0]-t[0],A=e[1]-t[1],s=e[2]-t[2],i=Math.hypot(n,A,s)||1;n/=i,A/=i,s/=i;let r=o[1]*s-o[2]*A,a=o[2]*n-o[0]*s,c=o[0]*A-o[1]*n;i=Math.hypot(r,a,c)||1,r/=i,a/=i,c/=i;const l=A*c-s*a,g=s*r-n*c,d=n*a-A*r,u=new Float32Array(16);return u[0]=r,u[1]=l,u[2]=n,u[3]=0,u[4]=a,u[5]=g,u[6]=A,u[7]=0,u[8]=c,u[9]=d,u[10]=s,u[11]=0,u[12]=-(r*e[0]+a*e[1]+c*e[2]),u[13]=-(l*e[0]+g*e[1]+d*e[2]),u[14]=-(n*e[0]+A*e[1]+s*e[2]),u[15]=1,u},t.mat4Multiply=function(e,t,o=new Float32Array(16)){for(let n=0;n<4;n++){const A=t[4*n],s=t[4*n+1],i=t[4*n+2],r=t[4*n+3];o[4*n]=e[0]*A+e[4]*s+e[8]*i+e[12]*r,o[4*n+1]=e[1]*A+e[5]*s+e[9]*i+e[13]*r,o[4*n+2]=e[2]*A+e[6]*s+e[10]*i+e[14]*r,o[4*n+3]=e[3]*A+e[7]*s+e[11]*i+e[15]*r}return o},t.mat4Perspective=function(e,t,o,n){const A=1/Math.tan(e*Math.PI/360),s=1/(o-n),i=new Float32Array(16);return i[0]=A/t,i[5]=A,i[10]=(n+o)*s,i[11]=-1,i[14]=2*n*o*s,i},t.mat4Transpose=function(e){const t=new Float32Array(16);for(let o=0;o<4;o++)for(let n=0;n<4;n++)t[4*o+n]=e[4*n+o];return t},t.normalMatrix=function(e){const t=e[0],o=e[1],n=e[2],A=e[4],s=e[5],i=e[6],r=e[8],a=e[9],c=e[10],l=t*(s*c-i*a)-o*(A*c-i*r)+n*(A*a-s*r),g=__nmScratch;if(Math.abs(l)<1e-12)return g[0]=1,g[1]=0,g[2]=0,g[3]=0,g[4]=1,g[5]=0,g[6]=0,g[7]=0,g[8]=1,g;const d=1/l,u=(s*c-i*a)*d,m=(n*a-o*c)*d,p=(o*i-n*s)*d,h=(i*r-A*c)*d,I=(t*c-n*r)*d,f=(n*A-t*i)*d,C=(A*a-s*r)*d,y=(o*r-t*a)*d,E=(t*s-o*A)*d;return g[0]=u,g[1]=h,g[2]=C,g[3]=m,g[4]=I,g[5]=y,g[6]=p,g[7]=f,g[8]=E,g},t.transformDir3=function(e,t){return[e[0]*t[0]+e[4]*t[1]+e[8]*t[2],e[1]*t[0]+e[5]*t[1]+e[9]*t[2],e[2]*t[0]+e[6]*t[1]+e[10]*t[2]]},t.transformVec3=function(e,t){return[e[0]*t[0]+e[4]*t[1]+e[8]*t[2]+e[12],e[1]*t[0]+e[5]*t[1]+e[9]*t[2]+e[13],e[2]*t[0]+e[6]*t[1]+e[10]*t[2]+e[14]]}})),__define("lib/time",(function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.formatClock=function(e,t=0){const o=Number.isFinite(e)?Math.max(0,e):0,n=Math.max(0,Math.min(3,Math.floor(t))),A=10**n,s=Math.round(o*A)/A,i=Math.floor(s/3600),r=Math.floor(s%3600/60),a=s-3600*i-60*r,c=n>0?a.toFixed(n).padStart(n+3,"0"):Math.floor(a).toString().padStart(2,"0");return`${i.toString().padStart(2,"0")}:${r.toString().padStart(2,"0")}:${c}`}})),__define("lib/layers",(function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DEFAULT_CLIP_SECONDS=void 0,t.clipHidesLayer=function(e){return s(e)},t.isClippable=i,t.isMediaLayer=s,t.layerRange=r,t.layerTint=function(e){switch(e){case"text":return{bar:"#d96b57",edge:"#f0907c"};case"image":return{bar:"#2f9c92",edge:"#54c4b9"};case"video":return{bar:"#5b74c9",edge:"#8196e6"};case"light":return{bar:"#b08033",edge:"#d8a95c"};case"camera":return{bar:"#7b5fb0",edge:"#a389d8"};default:return{bar:"#4c648f",edge:"#7692c4"}}},t.mediaVisible=function(e,t,o,n){const A=a(e,t,o);return!A||n>=A.start-1e-4&&n<A.end-1e-4},t.mediaWindow=a;const o=.2,n=3;function A(e,t,n){const A=Math.max(o,n);let s=Math.min(A,Math.max(0,Number.isFinite(e)?e:0)),i=Math.min(A,Math.max(s,Number.isFinite(t)?t:A));return i-s<o&&(s=Math.max(0,Math.min(s,A-o)),i=Math.min(A,s+o)),{start:s,end:i}}function s(e){return"text"===e||"image"===e}function i(e){return"light"!==e&&"camera"!==e}function r(e,t,o,s=null,i=!1){if(s)return A(s.start,s.end,o);if(t.length){return A(Math.min(...t.map((e=>e.start))),Math.max(...t.map((e=>e.end))),o)}if(e.length>=2){const t=[...e].sort(((e,t)=>e-t));return A(t[0],t[t.length-1],o)}return A(0,i?Math.min(n,o):o,o)}function a(e,t,o){return i(e)?r([],[],o,t,!0):null}t.DEFAULT_CLIP_SECONDS=n})),__define("lib/fcurve",(function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.VISIBILITY_CHANNEL=t.TRANSFORM_CHANNELS=t.MAX_TIMELINE_SECONDS=t.MATERIAL_CHANNELS=t.FCurve=t.CHANNEL_PATHS=void 0,t.blendQuat=function(e,t,o){return g(e,t,o)},t.eulerToQuat=d,t.eulerToQuatClosest=function(e,t){const o=d(e),n=[-o[0],-o[1],-o[2],-o[3]];return c(o,t)>=c(n,t)?o:n},t.evaluateBezierSegment=function(e,t){const{k0:o,k1:n,handleRight:A,handleLeft:s}=e;if(o.autoRight&&n.autoLeft){const t=e.factor,A=t*t*(3-2*t);return o.value+(n.value-o.value)*A}const r=a(o.time,o.time+A[0],n.time+s[0],n.time,t);return i(o.value,o.value+A[1],n.value+s[1],n.value,r)},t.evaluateChannel=function(e,t,o=!0){return e?e.evaluate(t,o):null},t.evaluateQuaternion=function(e,t,o=!0){const n=e.get("rotation_quaternion.w"),A=n?.keys;if(!n||!A||!A.length)return null;const s=e.get("rotation_quaternion.x"),i=e.get("rotation_quaternion.y"),r=e.get("rotation_quaternion.z");if(!s||!i||!r)return null;const a=A.length,c=s.keys,d=i.keys,u=r.keys,m=c.length===a&&d.length===a&&u.length===a;if(1===a||t<=A[0].time)return l(m?[A[0].value,c[0].value,d[0].value,u[0].value]:[n.evaluate(t,o)??1,s.evaluate(t,o)??0,i.evaluate(t,o)??0,r.evaluate(t,o)??0]);if(t>=A[a-1].time){const e=a-1;return l(m?[A[e].value,c[e].value,d[e].value,u[e].value]:[n.evaluate(t,o)??1,s.evaluate(t,o)??0,i.evaluate(t,o)??0,r.evaluate(t,o)??0])}const p=n.segment(t);if(!p)return l([n.evaluate(t,o)??1,s.evaluate(t,o)??0,i.evaluate(t,o)??0,r.evaluate(t,o)??0]);const h=p.index??0;let I,f;if(m&&c[h].time===p.k0.time&&c[h+1].time===p.k1.time)I=l([A[h].value,c[h].value,d[h].value,u[h].value]),f=l([A[h+1].value,c[h+1].value,d[h+1].value,u[h+1].value]);else{const e=p.k0.time,t=p.k1.time;I=l([n.evaluate(e,o)??1,s.evaluate(e,o)??0,i.evaluate(e,o)??0,r.evaluate(e,o)??0]),f=l([n.evaluate(t,o)??1,s.evaluate(t,o)??0,i.evaluate(t,o)??0,r.evaluate(t,o)??0])}if("constant"===p.k0.interpolation)return I;const C="linear"!==p.k0.interpolation&&o?n.bezierFactor(p,t):p.factor;return g(I,f,C)},t.evaluateVector=function(e,t,o,n=!0,A=0){const s=e.get(`${t}.x`),i=e.get(`${t}.y`),r=e.get(`${t}.z`),a=s?s.evaluate(o,n):null,c=i?i.evaluate(o,n):null,l=r?r.evaluate(o,n):null;return null===a&&null===c&&null===l?null:[a??A,c??A,l??A]},t.evaluateVisibility=function(e,t,n=!0){const A=e.get(o);if(!A||!A.keys.length)return null;const s=A.evaluate(t,n);return null==s?null:s>=.5},t.frameToTime=function(e,t){const o=Math.max(1,t);return Math.round(Math.max(0,e)/o*1e4)/1e4},t.lowerBound=A,t.makeBezTriple=n,t.quatConjugate=function(e){return[-e[0],-e[1],-e[2],e[3]]},t.quatFromAxisAngle=function(e,t){const o=Math.hypot(e[0],e[1],e[2])||1,n=Math.sin(t/2);return[e[0]/o*n,e[1]/o*n,e[2]/o*n,Math.cos(t/2)]},t.quatMul=function(e,t){return[e[3]*t[0]+e[0]*t[3]+e[1]*t[2]-e[2]*t[1],e[3]*t[1]-e[0]*t[2]+e[1]*t[3]+e[2]*t[0],e[3]*t[2]+e[0]*t[1]-e[1]*t[0]+e[2]*t[3],e[3]*t[3]-e[0]*t[0]-e[1]*t[1]-e[2]*t[2]]},t.quatToEuler=function(e){const[t,o,n,A]=l(e),s=2*(t*o+n*A),i=1-2*(o*o+n*n),r=Math.atan2(s,i);let a=2*(t*n-A*o);a=Math.min(1,Math.max(-1,a));const c=Math.asin(a),g=2*(t*A+o*n),d=1-2*(n*n+A*A),u=Math.atan2(g,d);return[r,c,u]},t.slerpShortest=g,t.solveBezierTime=a,t.timeToFrame=function(e,t){const o=Math.max(1,t);return Math.round(Math.max(0,e)*o)},t.upperBound=s;t.MAX_TIMELINE_SECONDS=3600;const o="visible";t.VISIBILITY_CHANNEL=o;t.CHANNEL_PATHS=["location.x","location.y","location.z","rotation_quaternion.w","rotation_quaternion.x","rotation_quaternion.y","rotation_quaternion.z","scale.x","scale.y","scale.z","visible","material.opacity","material.color.r","material.color.g","material.color.b"];t.TRANSFORM_CHANNELS=["location.x","location.y","location.z","rotation_quaternion.w","rotation_quaternion.x","rotation_quaternion.y","rotation_quaternion.z","scale.x","scale.y","scale.z"];function n(e,t,o="bezier"){return{time:e,value:t,interpolation:o,handleLeft:[-1/3,0],handleRight:[1/3,0],autoLeft:!0,autoRight:!0}}function A(e,t){let o=0,n=e.length;for(;o<n;){const A=o+n>>>1;e[A].time<t?o=A+1:n=A}return o}function s(e,t){let o=0,n=e.length;for(;o<n;){const A=o+n>>>1;e[A].time<=t?o=A+1:n=A}return o-1}function i(e,t,o,n,A){const s=1-A,i=s*s,r=A*A;return i*s*e+3*i*A*t+3*s*r*o+r*A*n}function r(e,t,o,n,A){const s=1-A;return 3*s*s*(t-e)+6*s*A*(o-t)+3*A*A*(n-o)}function a(e,t,o,n,A){const s=n-e;if(Math.abs(s)<1e-12)return 0;if(A<=e)return 0;if(A>=n)return 1;const a=s/3;if(Math.abs(t-e-a)<1e-7&&Math.abs(n-o-a)<1e-7)return(A-e)/s;let c=(A-e)/s;for(let s=0;s<8;s++){const s=i(e,t,o,n,c),a=r(e,t,o,n,c);if(Math.abs(a)<1e-9)break;const l=c-(s-A)/a;if(!Number.isFinite(l))break;if(c=l,c<0&&(c=0),c>1&&(c=1),Math.abs(s-A)<1e-9)return c}let l=0,g=1;c=Math.min(.999999,Math.max(1e-6,c));for(let s=0;s<48;s++){const s=i(e,t,o,n,c);if(Math.abs(s-A)<1e-9)break;s<A?l=c:g=c,c=(l+g)/2}return c}t.MATERIAL_CHANNELS=["material.opacity","material.color.r","material.color.g","material.color.b"];function c(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]+e[3]*t[3]}function l(e){const t=Math.hypot(e[0],e[1],e[2],e[3])||1;return[e[0]/t,e[1]/t,e[2]/t,e[3]/t]}function g(e,t,o){let n=t[0],A=t[1],s=t[2],i=t[3],r=e[0]*n+e[1]*A+e[2]*s+e[3]*i;if(r<0&&(n=-n,A=-A,s=-s,i=-i,r=-r),r>.9995)return l([e[0]+(n-e[0])*o,e[1]+(A-e[1])*o,e[2]+(s-e[2])*o,e[3]+(i-e[3])*o]);const a=Math.acos(Math.min(1,Math.max(-1,r))),c=Math.sin(a),g=Math.sin((1-o)*a)/c,d=Math.sin(o*a)/c;return[e[0]*g+n*d,e[1]*g+A*d,e[2]*g+s*d,e[3]*g+i*d]}function d(e){const[t,o,n]=e,A=Math.cos(t/2),s=Math.sin(t/2),i=Math.cos(o/2),r=Math.sin(o/2),a=Math.cos(n/2),c=Math.sin(n/2);return[A*i*a+s*r*c,s*i*a-A*r*c,A*r*a+s*i*c,A*i*c-s*r*a]}t.FCurve=class{constructor(e){this.path=e,this.keys=[]}get length(){return this.keys.length}insert(e,t,o){const s=Math.min(3600,Math.max(0,e)),i=A(this.keys,s),r=this.keys[i];if(r&&Math.abs(r.time-s)<1e-9)return r.value=t,o&&(r.interpolation=o),r;const a=this.keys[i-1],c=n(s,t,o??a?.interpolation??"bezier");return this.keys.splice(i,0,c),c}remove(e){const t=A(this.keys,e),o=this.keys[t];if(o&&Math.abs(o.time-e)<=.001)return this.keys.splice(t,1),!0;const n=this.keys[t-1];return!!(n&&Math.abs(n.time-e)<=.001)&&(this.keys.splice(t-1,1),!0)}get(e){const t=A(this.keys,e),o=this.keys[t];if(o&&Math.abs(o.time-e)<1e-9)return o;const n=this.keys[t-1];return n&&Math.abs(n.time-e)<1e-9?n:null}rightHandle(e){if(!e.autoRight)return e.handleRight;const t=this.keys[this.keys.indexOf(e)+1];return[(t?t.time-e.time:1)/3,0]}leftHandle(e){if(!e.autoLeft)return e.handleLeft;const t=this.keys.indexOf(e),o=this.keys[t-1];return[-(o?e.time-o.time:1)/3,0]}segment(e){const t=this.keys,o=t.length;if(o<2)return null;if(e<=t[0].time||e>=t[o-1].time)return null;const n=s(t,e),A=t[n],i=t[n+1];if(!A||!i)return null;const r=i.time-A.time;return{k0:A,k1:i,index:n,factor:r>1e-12?(e-A.time)/r:0,handleRight:A.autoRight?[r/3,0]:A.handleRight,handleLeft:i.autoLeft?[-r/3,0]:i.handleLeft}}evaluate(e,t=!0){const o=this.keys,n=o.length;if(!n)return null;if(1===n||e<=o[0].time)return o[0].value;const A=o[n-1];if(e>=A.time)return A.value;const r=s(o,e),c=o[r],l=o[r+1];if(!c||!l)return A.value;const g=l.time-c.time;if(g<=1e-12)return l.value;const d=c.interpolation;if("constant"===d)return c.value;const u=(e-c.time)/g;if("linear"===d||!t)return c.value+(l.value-c.value)*u;if(c.autoRight&&l.autoLeft){const e=u*u*(3-2*u);return c.value+(l.value-c.value)*e}const m=c.autoRight?[g/3,0]:c.handleRight,p=l.autoLeft?[-g/3,0]:l.handleLeft,h=a(c.time,c.time+m[0],l.time+p[0],l.time,e);return i(c.value,c.value+m[1],l.value+p[1],l.value,h)}bezierFactor(e,t){if(e.k0.autoRight&&e.k1.autoLeft){const t=e.factor;return t*t*(3-2*t)}return a(e.k0.time,e.k0.time+e.handleRight[0],e.k1.time+e.handleLeft[0],e.k1.time,t)}}})),__define("lib/mesh",(function(e,t){"use strict";function o(e="Material"){return{name:e,color:"#ffffff",emissive:"#000000",emissiveStrength:1,metalness:.04,roughness:.36,opacity:1,uvRepeat:1}}function n(e){return{...e}}function A(e){return{vertices:e.vertices.map((e=>[e[0],e[1],e[2]])),faces:e.faces.map((e=>[...e])),edges:e.edges.map((e=>[e[0],e[1]])),radius:e.radius,normals:e.normals?.map((e=>[e[0],e[1],e[2]])),colors:e.colors?[...e.colors]:void 0,mask:e.mask?[...e.mask]:void 0,uvs:e.uvs?.map((e=>[e[0],e[1]])),smooth:e.smooth,slots:(e.slots??[]).map(n),faceSlot:[...e.faceSlot??[]],groups:(e.groups??[]).map((e=>({...e})))}}function s(e){const t=[];let o=0,n=null;return e.faces.forEach(((A,s)=>{const i=e.faceSlot?.[s]??0,r=Math.max(0,A.length-2);n&&n.materialIndex===i?n.count+=3*r:(n&&t.push(n),n={start:3*o,count:3*r,materialIndex:i}),o+=r})),n&&t.push(n),t}function i(e,t,A){if(t<0||t>=e.faces.length)return e;const i=(e.slots??[]).map(n);for(;i.length<=A;)i.push(o(`Slot ${i.length}`));const r=[...e.faceSlot??e.faces.map((()=>0))];for(;r.length<e.faces.length;)r.push(0);r[t]=A;const a={...e,slots:i,faceSlot:r};return a.groups=s(a),a}function r(e,t){return e<t?`${e}:${t}`:`${t}:${e}`}function a(e){const t=new Set,o=[];for(const n of e)for(let e=0;e<n.length;e++){const A=n[e],s=n[(e+1)%n.length],i=r(A,s);t.has(i)||(t.add(i),o.push([A,s]))}return o}function c(e){let t=.25;for(let o=0;o<e.length;o++){const n=e[o],A=n[0]*n[0]+n[1]*n[1]+n[2]*n[2];A>t&&(t=A)}return Math.sqrt(t)}function l(e){const t=e.vertices.map((()=>[0,0,0]));for(const o of e.faces){const n=o.length;if(n<3)continue;const A=g(e,o);for(let e=0;e<n;e++){const n=t[o[e]];n[0]+=A[0],n[1]+=A[1],n[2]+=A[2]}}for(const e of t){const t=Math.hypot(e[0],e[1],e[2])||1;e[0]/=t,e[1]/=t,e[2]/=t}return t}function g(e,t){if(t.length<3)return[0,1,0];let o=0,n=0,A=0;for(let s=0;s<t.length;s++){const i=e.vertices[t[s]],r=e.vertices[t[(s+1)%t.length]];o+=(i[1]-r[1])*(i[2]+r[2]),n+=(i[2]-r[2])*(i[0]+r[0]),A+=(i[0]-r[0])*(i[1]+r[1])}const s=Math.hypot(o,n,A)||1;return[o/s,n/s,A/s]}function d(e,t){let o=0,n=0,A=0;for(const s of t)o+=e.vertices[s][0],n+=e.vertices[s][1],A+=e.vertices[s][2];const s=1/t.length;return[o*s,n*s,A*s]}function u(e,t=!1){const o={vertices:e.vertices.map((e=>[e[0],e[1],e[2]])),faces:e.faces.map((e=>[...e])),edges:e.edges&&e.edges.length?e.edges.map((e=>[e[0],e[1]])):a(e.faces),radius:c(e.vertices),smooth:t,slots:(e.slots??[]).map(n),faceSlot:[...e.faceSlot??[]],groups:[]};for(e.colors&&e.colors.length>=3*o.vertices.length&&(o.colors=e.colors.slice(0,3*o.vertices.length)),e.uvs&&e.uvs.length===o.vertices.length&&(o.uvs=e.uvs.map((e=>[e[0],e[1]]))),e.normals&&e.normals.length===o.vertices.length?o.normals=e.normals.map((e=>[e[0],e[1],e[2]])):t&&(o.normals=l(o));o.faceSlot.length<o.faces.length;)o.faceSlot.push(0);return o.faceSlot.length=o.faces.length,o.groups=s(o),o}function m(e,t,o=!1,n){return u({vertices:e,faces:t,edges:a(t),radius:c(e),normals:n},o)}function p(e=1,t=1,o=1){const n=e/2,A=t/2,s=o/2;return m([[-n,-A,-s],[n,-A,-s],[n,A,-s],[-n,A,-s],[-n,-A,s],[n,-A,s],[n,A,s],[-n,A,s]],[[0,3,2,1],[4,5,6,7],[0,4,7,3],[1,2,6,5],[3,7,6,2],[0,1,5,4]],!1)}function h(e=48,t=24,u=.5){const o=Math.max(8,Math.floor(e)),n=Math.max(4,Math.floor(t)),A=[],s=[];A.push([0,u,0]),s.push([0,1,0]);for(let e=1;e<n;e++){const t=e/n*Math.PI,i=Math.cos(t),r=Math.sin(t);for(let e=0;e<o;e++){const t=e/o*Math.PI*2,n=Math.cos(t)*r,a=Math.sin(t)*r;A.push([u*n,u*i,u*a]),s.push([n,i,a])}}const i=A.length;A.push([0,-u,0]),s.push([0,-1,0]);const r=[];for(let e=0;e<o;e++){const t=(e+1)%o;r.push([0,1+t,1+e])}for(let e=1;e<n-1;e++){const t=1+(e-1)*o,n=1+e*o;for(let e=0;e<o;e++){const A=(e+1)%o;r.push([t+e,t+A,n+A,n+e])}}const a=1+(n-2)*o;for(let e=0;e<o;e++){const t=(e+1)%o;r.push([a+e,a+t,i])}return m(A,r,!0,s)}function I(e=48,t=0,o=1,r=.5){const n=Math.max(8,Math.floor(e)),A=[],s=o/2;for(let e=0;e<n;e++){const t=e/n*Math.PI*2;A.push([r*Math.cos(t),-s,r*Math.sin(t)])}for(let e=0;e<n;e++){const t=e/n*Math.PI*2;A.push([r*Math.cos(t),s,r*Math.sin(t)])}if(t>0){for(let e=0;e<n;e++){const o=e/n*Math.PI*2;A.push([Math.cos(o)*t,-s,Math.sin(o)*t])}for(let e=0;e<n;e++){const o=e/n*Math.PI*2;A.push([Math.cos(o)*t,s,Math.sin(o)*t])}}const i=[];for(let e=0;e<n;e++){const o=(e+1)%n;if(t>0){const t=2*n,A=3*n;i.push([e,n+e,n+o,o]),i.push([t+e,t+o,A+o,A+e]),i.push([e,o,t+o,t+e]),i.push([n+e,A+e,A+o,n+o])}else i.push([e,n+e,n+o,o])}if(t<=0){const e=Array.from({length:n},((e,t)=>t)),t=Array.from({length:n},((e,t)=>n+(n-1-t)));i.push(e,t)}return m(A,i,!0)}function f(e=48,r=.5,a=1){const t=Math.max(8,Math.floor(e)),o=[],s=a/2;for(let e=0;e<t;e++){const n=e/t*Math.PI*2;o.push([r*Math.cos(n),-s,r*Math.sin(n)])}o.push([0,s,0]);const n=o.length-1,A=[];for(let e=0;e<t;e++){const o=(e+1)%t;A.push([e,n,o])}return A.push(Array.from({length:t},((e,t)=>t))),m(o,A,!0)}function C(e=48,t=24,o=.35,n=.15){const A=Math.max(8,Math.floor(e)),s=Math.max(6,Math.floor(t)),i=[],r=[];for(let e=0;e<A;e++){const t=e/A*Math.PI*2,a=Math.cos(t),c=Math.sin(t);for(let e=0;e<s;e++){const t=e/s*Math.PI*2,A=Math.cos(t),l=Math.sin(t),g=o+n*A;i.push([a*g,n*l,c*g]),r.push([a*A,l,c*A])}}const a=[];for(let e=0;e<A;e++){const t=(e+1)%A;for(let o=0;o<s;o++){const n=(o+1)%s;a.push([e*s+o,e*s+n,t*s+n,t*s+o])}}return m(i,a,!0,r)}function y(){return m([[-.5,0,-.5],[.5,0,-.5],[.5,0,.5],[-.5,0,.5]],[[0,3,2,1]],!1)}function E(){const e=y();return e.uvs=[[0,1],[1,1],[1,0],[0,0]],e}function B(e=48){return I(e,0,.12)}function b(){return m([[0,0,0],[.075,.09,.075],[-.075,.09,.075],[-.075,.09,-.075],[.075,.09,-.075],[0,.45,0],[.045,0,.045],[-.045,0,.045],[-.045,0,-.045],[.045,0,-.045]],[[0,1,2],[0,2,3],[0,3,4],[0,4,1],[5,2,1],[5,3,2],[5,4,3],[5,1,4],[0,6,7],[0,7,8],[0,8,9],[0,9,6]],!1)}function v(e=1,t=.5){const o=(1+Math.sqrt(5))/2,n=[[-1,o,0],[1,o,0],[-1,-o,0],[1,-o,0],[0,-1,o],[0,1,o],[0,-1,-o],[0,1,-o],[o,0,-1],[o,0,1],[-o,0,-1],[-o,0,1]],A=t/Math.sqrt(1+o*o);let s=n.map((e=>[e[0]*A,e[1]*A,e[2]*A])),i=[[0,11,5],[0,5,1],[0,1,7],[0,7,10],[0,10,11],[1,5,9],[5,11,4],[11,10,2],[10,7,6],[7,1,8],[3,9,4],[3,4,2],[3,2,6],[3,6,8],[3,8,9],[4,9,5],[2,4,11],[6,2,10],[8,6,7],[9,8,1]];const r=Math.min(3,Math.max(0,Math.floor(e)));for(let e=0;e<r;e++){const e=new Map,o=(o,n)=>{const A=o<n?o+"_"+n:n+"_"+o;if(e.has(A))return e.get(A);const i=s[o],r=s[n],a=(i[0]+r[0])/2,c=(i[1]+r[1])/2,l=(i[2]+r[2])/2,g=Math.hypot(a,c,l)||1,d=s.length;return s.push([a/g*t,c/g*t,l/g*t]),e.set(A,d),d},n=[];for(const e of i){const t=e[0],A=e[1],s=e[2],i=o(t,A),r=o(A,s),a=o(s,t);n.push([t,i,a],[A,r,i],[s,a,r],[i,r,a])}i=n}const a=s.map((e=>{const t=Math.hypot(e[0],e[1],e[2])||1;return[e[0]/t,e[1]/t,e[2]/t]}));return m(s,i,!0,a)}function Q(e=32,t=.5){const o=Math.max(6,Math.floor(e)),n=[[0,0,0]];for(let e=0;e<o;e++){const A=e/o*Math.PI*2;n.push([Math.cos(A)*t,0,Math.sin(A)*t])}const A=[];for(let e=0;e<o;e++){const t=(e+1)%o+1;A.push([0,t,e+1])}return m(n,A,!1)}function M(e=4,t=4,o=2,n=2){const A=Math.max(1,Math.floor(e)),s=Math.max(1,Math.floor(t)),i=[];for(let e=0;e<=s;e++)for(let t=0;t<=A;t++){const r=(t/A-.5)*o,a=(e/s-.5)*n;i.push([r,0,a])}const r=[];for(let e=0;e<s;e++)for(let t=0;t<A;t++){const o=e*(A+1)+t,n=o+1,s=(e+1)*(A+1)+t+1,i=(e+1)*(A+1)+t;r.push([o,i,s,n])}return m(i,r,!1)}function k(e=4,t=.5,o=1){const n=Math.max(3,Math.floor(e)),A=o/2,s=[[0,A,0]];for(let e=0;e<n;e++){const o=e/n*Math.PI*2;s.push([Math.cos(o)*t,-A,Math.sin(o)*t])}const i=s.length;s.push([0,-A,0]);const r=[];for(let e=0;e<n;e++){const t=e+1,o=(e+1)%n+1;r.push([0,t,o])}for(let e=0;e<n;e++){const t=e+1,o=(e+1)%n+1;r.push([i,o,t])}return m(s,r,!1)}function w(e=24,t=.3,o=.5,n=1){const A=Math.max(8,Math.floor(e)),s=Math.max(.05,Math.min(t,o-.05)),i=Math.max(s+.05,o),r=n/2,a=[];for(let e=0;e<A;e++){const t=e/A*Math.PI*2;a.push([Math.cos(t)*i,r,Math.sin(t)*i])}for(let e=0;e<A;e++){const t=e/A*Math.PI*2;a.push([Math.cos(t)*i,-r,Math.sin(t)*i])}for(let e=0;e<A;e++){const t=e/A*Math.PI*2;a.push([Math.cos(t)*s,r,Math.sin(t)*s])}for(let e=0;e<A;e++){const t=e/A*Math.PI*2;a.push([Math.cos(t)*s,-r,Math.sin(t)*s])}const c=[],l=A;for(let e=0;e<l;e++){const t=(e+1)%l;c.push([e,e+l,t+l,t]),c.push([e,t,2*l+t,2*l+e]),c.push([e+l,3*l+e,3*l+t,t+l]),c.push([2*l+e,2*l+t,3*l+t,3*l+e])}return m(a,c,!0)}function x(e=20,t=6,o=.25,n=.6){const A=Math.max(8,Math.floor(e)),s=Math.max(3,Math.floor(t)),i=n/2,r=[],a=[];r.push([0,i+o,0]),a.push([0,1,0]);for(let e=1;e<=s;e++){const t=e/s*(Math.PI/2),n=i+Math.cos(t)*o,c=Math.sin(t)*o;for(let e=0;e<A;e++){const o=e/A*Math.PI*2;r.push([Math.cos(o)*c,n,Math.sin(o)*c]),a.push([Math.cos(o)*Math.sin(t),Math.cos(t),Math.sin(o)*Math.sin(t)])}}for(let e=0;e<s;e++){const t=Math.PI/2+e/s*(Math.PI/2),n=-i+Math.cos(t)*o,c=Math.sin(t)*o;for(let e=0;e<A;e++){const o=e/A*Math.PI*2;r.push([Math.cos(o)*c,n,Math.sin(o)*c]),a.push([Math.cos(o)*Math.sin(t),Math.cos(t),Math.sin(o)*Math.sin(t)])}}const c=r.length;r.push([0,-i-o,0]),a.push([0,-1,0]);const l=[];for(let e=0;e<A;e++){const t=(e+1)%A;l.push([0,1+e,1+t])}const g=2*s;for(let e=0;e<g-1;e++){const t=1+e*A,o=1+(e+1)*A;for(let e=0;e<A;e++){const n=(e+1)%A;l.push([t+e,o+e,o+n,t+n])}}const d=1+(g-1)*A;for(let e=0;e<A;e++){const t=(e+1)%A;l.push([c,d+t,d+e])}return m(r,l,!0,a)}function S(){const e=[],t=[],o=[-.8,-.4,0],n=[-.3,.6,.4],A=[.3,-.6,-.4],s=[.8,.4,0];for(let t=0;t<=24;t++){const i=t/24,r=1-i,a=r*r*r*o[0]+3*r*r*i*n[0]+3*r*i*i*A[0]+i*i*i*s[0],c=r*r*r*o[1]+3*r*r*i*n[1]+3*r*i*i*A[1]+i*i*i*s[1],l=r*r*r*o[2]+3*r*r*i*n[2]+3*r*i*i*A[2]+i*i*i*s[2],g=3*r*r*(n[0]-o[0])+6*r*i*(A[0]-n[0])+3*i*i*(s[0]-A[0]),d=3*r*r*(n[1]-o[1])+6*r*i*(A[1]-n[1])+3*i*i*(s[1]-A[1]),u=3*r*r*(n[2]-o[2])+6*r*i*(A[2]-n[2])+3*i*i*(s[2]-A[2]),m=Math.hypot(g,d,u)||1,p=[0,1,0];let h=p[1]*(u/m)-p[2]*(d/m),I=p[2]*(g/m)-p[0]*(u/m),f=p[0]*(d/m)-p[1]*(g/m);const C=Math.hypot(h,I,f)||1;h/=C,I/=C,f/=C;const y=d/m*f-u/m*I,E=u/m*h-g/m*f,B=g/m*I-d/m*h;for(let t=0;t<8;t++){const o=t/8*Math.PI*2,n=.05*Math.cos(o),A=.05*Math.sin(o);e.push([a+h*n+y*A,c+I*n+E*A,l+f*n+B*A])}}for(let e=0;e<24;e++){const o=8*e,n=8*(e+1);for(let e=0;e<8;e++){const A=(e+1)%8;t.push([o+e,n+e,n+A,o+A])}}return m(e,t,!0)}function D(){return C(32,12,.5,.04)}function L(){return I(16,.05,1.2)}function F(){return S()}function N(){return m([[0,.25,0],[.2,0,0],[0,0,.2],[-.2,0,0],[0,0,-.2],[0,-.25,0]],[[0,1,2],[0,2,3],[0,3,4],[0,4,1],[5,2,1],[5,3,2],[5,4,3],[5,1,4]],!1)}function R(){return I(16,0,.08)}function G(){return f(24)}function P(){return y()}function T(){return m([[-.2,-.15,.1],[.2,-.15,.1],[.2,.15,.1],[-.2,.15,.1],[-.2,-.15,.35],[.2,-.15,.35],[.2,.15,.35],[-.2,.15,.35],[-.28,-.2,-.3],[.28,-.2,-.3],[.28,.2,-.3],[-.28,.2,-.3]],[[0,3,2,1],[4,5,6,7],[0,4,7,3],[1,2,6,5],[3,7,6,2],[0,1,5,4],[0,1,9,8],[1,2,10,9],[2,3,11,10],[3,0,8,11],[8,9,10,11]],!1)}function j(){return T()}function Y(){return m([[0,0,0],[.8,0,0],[.8,.03,0],[0,.03,0],[0,0,0],[0,.8,0],[.03,.8,0],[.03,0,0],[0,0,0],[0,0,.8],[0,.03,.8],[0,.03,0]],[[0,1,2,3],[4,5,6,7],[8,9,10,11]],!1)}function U(){return Y()}function K(){return p()}function _(){return C(24,6,.5,.02)}function J(){return Q(32,.5)}function V(){return E()}function q(e="TEXT",t=.2,o=.02){return p(Math.max(.4,.28*String(e||"TEXT").length),.5,t)}function O(e="ball"){return h(32,16)}function H(){return p()}function z(){return C(32,8,.6,.03)}function X(){return m([[-.3,-.4,-.25],[.3,-.4,-.25],[.3,.4,-.25],[-.3,.4,-.25],[-.3,-.4,.25],[.3,-.4,.25],[.3,.4,.25],[-.3,.4,.25]],[[0,3,2,1],[4,5,6,7],[0,4,7,3],[1,2,6,5],[3,7,6,2],[0,1,5,4]],!1)}function W(){return m([[-.4,.5,-.2],[.4,.5,-.2],[.4,.5,.2],[-.4,.5,.2],[-.5,.2,-.3],[.5,.2,-.3],[.5,.2,.3],[-.5,.2,.3],[-.35,.15,.45],[.35,.15,.45],[-.2,.05,.4],[.2,.05,.4],[-.2,-.15,.55],[.2,-.15,.55],[-.15,-.35,.5],[.15,-.35,.5],[-.25,-.4,.1],[.25,-.4,.1],[-.3,-.2,-.4],[.3,-.2,-.4],[-.7,.2,0],[-.7,-.1,0],[.7,.2,0],[.7,-.1,0]],[[0,1,2,3],[0,4,5,1],[1,5,6,2],[3,2,6,7],[0,3,7,4],[7,6,9,8],[8,9,11,10],[10,11,13,12],[12,13,15,14],[14,15,17,16],[4,7,18],[5,19,6],[18,19,5,4],[16,17,19,18],[4,20,21,7],[6,23,22,5]],!0)}function $(){const e=[],t=[];for(let t=0;t<6;t++){const o=t/6*Math.PI*2;e.push([.12*Math.cos(o),-.5,.12*Math.sin(o)])}for(let t=0;t<6;t++){const o=t/6*Math.PI*2;e.push([.1*Math.cos(o),0,.1*Math.sin(o)])}for(let e=0;e<6;e++){const o=(e+1)%6;t.push([e,o,o+6,e+6])}const o=e.length;for(let t=0;t<6;t++){const o=t/6*Math.PI*2;e.push([.55*Math.cos(o),0,.55*Math.sin(o)])}const n=e.length;e.push([0,.45,0]);for(let e=0;e<6;e++){const A=(e+1)%6;t.push([n,o+e,o+A])}const A=e.length;for(let t=0;t<6;t++){const o=t/6*Math.PI*2;e.push([.38*Math.cos(o),.3,.38*Math.sin(o)])}const s=e.length;e.push([0,.75,0]);for(let e=0;e<6;e++){const o=(e+1)%6;t.push([s,A+e,A+o])}return m(e,t,!1)}function Z(){return m([[-.45,-.15,-.9],[.45,-.15,-.9],[.45,.1,-.9],[-.45,.1,-.9],[-.45,-.15,.9],[.45,-.15,.9],[.45,.1,.9],[-.45,.1,.9],[-.38,.1,-.4],[.38,.1,-.4],[.32,.4,-.2],[-.32,.4,-.2],[-.38,.1,.35],[.38,.1,.35],[.32,.4,.25],[-.32,.4,.25]],[[0,3,2,1],[4,5,6,7],[0,1,5,4],[3,7,6,2],[0,4,7,3],[1,2,6,5],[8,9,10,11],[12,15,14,13],[11,10,14,15],[8,11,15,12],[9,13,14,10]],!1)}function ee(){return m([[-.15,.5,-.15],[.15,.5,-.15],[.15,.75,-.15],[-.15,.75,-.15],[-.15,.5,.15],[.15,.5,.15],[.15,.75,.15],[-.15,.75,.15],[-.22,.05,-.12],[.22,.05,-.12],[.26,.45,-.12],[-.26,.45,-.12],[-.22,.05,.12],[.22,.05,.12],[.26,.45,.12],[-.26,.45,.12],[-.2,-.5,-.09],[-.04,-.5,-.09],[-.04,-.5,.09],[-.2,-.5,.09],[.04,-.5,-.09],[.2,-.5,-.09],[.2,-.5,.09],[.04,-.5,.09]],[[0,3,2,1],[4,5,6,7],[0,4,7,3],[1,2,6,5],[3,7,6,2],[0,1,5,4],[8,11,10,9],[12,13,14,15],[8,12,15,11],[9,10,14,13],[11,15,14,10],[8,9,13,12],[16,17,18,19],[8,16,19,12],[20,21,22,23],[9,13,22,21]],!1)}function te(){return m([[-.3,0,-.3],[.3,0,-.3],[.3,.08,-.3],[-.3,.08,-.3],[-.3,0,.3],[.3,0,.3],[.3,.08,.3],[-.3,.08,.3],[-.3,.55,-.3],[.3,.55,-.3],[.3,.55,-.24],[-.3,.55,-.24]],[[0,3,2,1],[4,5,6,7],[0,4,7,3],[1,2,6,5],[3,7,6,2],[0,1,5,4],[2,3,8,9],[9,8,11,10],[2,9,10,6],[3,7,11,8]],!1)}Object.defineProperty(t,"__esModule",{value:!0}),t.addGroup=i,t.areaLightMesh=P,t.arrayMesh=function(e,t=3,o=[1.25,0,0]){const n=Math.min(12,Math.max(2,Math.floor(t))),A=[],s=[],i=[],r=e.vertices.length;for(let t=0;t<n;t++){const n=t*r,a=o[0]*t,c=o[1]*t,l=o[2]*t;for(let t=0;t<r;t++){const o=e.vertices[t];A.push([o[0]+a,o[1]+c,o[2]+l])}e.faces.forEach(((t,o)=>{s.push(t.map((e=>e+n))),i.push(e.faceSlot?.[o]??0)}))}return u({vertices:A,faces:s,slots:e.slots,faceSlot:i},e.smooth)},t.assignFacesToSlot=function(e,t,o){let n=e;for(const e of t)n=i(n,e,o);return n},t.bakeMeshVertexColors=function(e,t="ao"){const o=A(e),n=l(o),s=o.vertices.length,i=new Array(3*s),r=new Map;for(const[e,t]of o.edges)r.has(e)||r.set(e,[]),r.has(t)||r.set(t,[]),r.get(e).push(t),r.get(t).push(e);let a=1/0,c=-1/0;for(const e of o.vertices)e[1]<a&&(a=e[1]),e[1]>c&&(c=e[1]);const g=Math.max(.001,c-a);for(let e=0;e<s;e++){const A=o.vertices[e],s=n[e]??[0,1,0];let c=1,l=1,d=1;if("ao"===t){const t=r.get(e)??[];let n=0;for(const e of t){const t=o.vertices[e],i=t[0]-A[0],r=t[1]-A[1],a=t[2]-A[2],c=Math.hypot(i,r,a)||1;n+=(i*s[0]+r*s[1]+a*s[2])/c}const i=t.length?n/t.length:0,u=Math.min(1,Math.max(.18,.72-.65*i+(A[1]-a)/g*.22));c=u,l=u,d=1.03*u}else if("light"===t){const e=Math.max(0,-.45*s[0]+.82*s[1]+.45*s[2]),t=.25+.75*e;c=Math.min(1,1.06*t),l=Math.min(1,.98*t),d=Math.min(1,.32+.62*e)}else if("gradient"===t){const e=(A[1]-a)/g;c=.2+.75*e,l=.35+.6*e,d=.55+.4*(1-e)}else{const t=r.get(e)??[];let n=0,s=0,i=0;for(const e of t)n+=o.vertices[e][0]-A[0],s+=o.vertices[e][1]-A[1],i+=o.vertices[e][2]-A[2];const a=t.length?Math.min(1,Math.hypot(n,s,i)/t.length*3.5):.5;c=.25+.75*a,l=.3+.68*a,d=.45+.45*(1-a)}i[3*e]=Math.min(1,Math.max(0,c)),i[3*e+1]=Math.min(1,Math.max(0,l)),i[3*e+2]=Math.min(1,Math.max(0,d))}return o.colors=i,o},t.bezierCircleMesh=D,t.bezierCurveMesh=S,t.boneMesh=b,t.booleanMesh=function(e,t,o="difference"){const n=[],A=[],s=e.vertices.map((e=>[e[0],e[1],e[2]])),i=s.length;return t.vertices.forEach((e=>s.push([e[0],e[1],e[2]]))),e.faces.forEach(((s,i)=>{const r=re(d(e,s),t);("union"!==o||r)&&("difference"!==o||r)?"intersect"===o&&r&&(n.push([...s]),A.push(e.faceSlot?.[i]??0)):(n.push([...s]),A.push(e.faceSlot?.[i]??0))})),t.faces.forEach(((s,r)=>{const a=re(d(t,s),e),c=s.map((e=>e+i));"union"!==o||a?"difference"===o&&a?(n.push([...c].reverse()),A.push(t.faceSlot?.[r]??0)):"intersect"===o&&a&&(n.push(c),A.push(t.faceSlot?.[r]??0)):(n.push(c),A.push(t.faceSlot?.[r]??0))})),u({vertices:s,faces:n,edges:[],radius:0,slots:[...e.slots??[],...t.slots??[]],faceSlot:A},e.smooth)},t.bridgeEdgeLoops=function(e,t,o){if(!t.length||!o.length)return e;const n=e.faces.map((e=>[...e])),A=[...e.faceSlot??[]],s=Math.min(t.length,o.length);for(let e=0;e<s;e++){const i=(e+1)%s,r=t[e],a=t[i],c=o[i],l=o[e];n.push([r,a,c,l]),A.push(0)}return u({vertices:e.vertices.map((e=>[e[0],e[1],e[2]])),faces:n,edges:[],radius:0,slots:e.slots??[],faceSlot:A},e.smooth)},t.buildEdges=a,t.buildGroups=s,t.capsuleMesh=x,t.carMesh=Z,t.chairMesh=te,t.characterMesh=ee,t.circleMesh=Q,t.cloneMaterialSlot=n,t.cloneMesh=A,t.coinMesh=B,t.computeRadius=c,t.computeVertexNormals=l,t.coneMesh=f,t.cubeMesh=p,t.cylinderMesh=I,t.decimateLocal=function(e,t,o){const n=o*o,A=[];for(const[o,s]of e.edges){const i=e.vertices[o],r=e.vertices[s];if(!i||!r)continue;if(e.mask&&((e.mask[o]??0)>=.95||(e.mask[s]??0)>=.95))continue;const a=(i[0]-t[0])**2+(i[1]-t[1])**2+(i[2]-t[2])**2,c=(r[0]-t[0])**2+(r[1]-t[1])**2+(r[2]-t[2])**2;a<=n&&c<=n&&A.push([o,s])}if(!A.length)return e;A.sort(((t,o)=>{const n=e.vertices[t[0]],A=e.vertices[t[1]],s=e.vertices[o[0]],i=e.vertices[o[1]];return Math.hypot(n[0]-A[0],n[1]-A[1],n[2]-A[2])-Math.hypot(s[0]-i[0],s[1]-i[1],s[2]-i[2])}));let s=e;for(let e=0;e<Math.min(3,A.length);e++){const t=A[e];if(t[0]>=s.vertices.length||t[1]>=s.vertices.length)continue;const o=Ae(s,[t[0],t[1]],"center");o.vertices.length<s.vertices.length&&(s=o)}return s},t.decimateMesh=function(e,t=.5){const o=Math.max(4,Math.floor(e.faces.length*Math.max(.05,Math.min(1,t))));if(e.faces.length<=o)return e;let n=e,A=0;for(;(n.faces.length>o||n.vertices.length>o+2)&&A<100;){A++;let e=1/0,t=null;for(const o of n.edges){const A=n.vertices[o[0]],s=n.vertices[o[1]];if(!A||!s)continue;const i=Math.hypot(A[0]-s[0],A[1]-s[1],A[2]-s[2]);i<e&&(e=i,t=o)}if(!t)break;const o=Ae(n,[t[0],t[1]],"center");if(o.vertices.length>=n.vertices.length)break;n=o}return n},t.defaultMaterialSlot=o,t.deleteFaces=function(e,t){const o=new Set(t),n=[],A=[];return e.faces.forEach(((t,s)=>{o.has(s)||(n.push([...t]),A.push(e.faceSlot?.[s]??0))})),ne(e.vertices,n,e.smooth,A,e.slots??[])},t.deleteGeometry=se,t.dissolveGeometry=function e(t,o,n){if(!n.length)return t;if("face"===o){const e=new Set(n);if(e.size<=1)return t;const o=new Map;for(const e of n){const n=t.faces[e];if(n)for(let e=0;e<n.length;e++){const t=n[e],A=n[(e+1)%n.length],s=t<A?`${t}_${A}`:`${A}_${t}`,i=o.get(s)||{a:t,b:A,count:0};i.count++,o.set(s,i)}}const A=[];for(const e of o.values())1===e.count&&A.push([e.a,e.b]);if(A.length<3)return t;const s=new Map;for(const[e,t]of A)s.has(e)||s.set(e,[]),s.has(t)||s.set(t,[]),s.get(e).push(t),s.get(t).push(e);const i=[];let r=A[0][0],a=r,c=-1;const l=new Set;for(let e=0;e<A.length;e++){i.push(a),l.add(a);const e=(s.get(a)||[]).find((e=>e!==c&&(!l.has(e)||e===r)));if(void 0===e||e===r)break;c=a,a=e}if(i.length<3)return t;const g=[],d=[];return t.faces.forEach(((o,n)=>{e.has(n)||(g.push([...o]),d.push(t.faceSlot?.[n]??0))})),g.push(i),d.push(t.faceSlot?.[n[0]]??0),u({vertices:t.vertices.map((e=>[e[0],e[1],e[2]])),faces:g,edges:[],radius:0,slots:t.slots??[],faceSlot:d},t.smooth)}if("edge"===o){const o=t.edges[n[0]];if(!o)return t;const[A,s]=o,i=[];return t.faces.forEach(((e,t)=>{for(let o=0;o<e.length;o++){const n=e[o],r=e[(o+1)%e.length];if(n===A&&r===s||n===s&&r===A){i.push(t);break}}})),2===i.length?e(t,"face",i):se(t,"face",i)}if("vertex"===o){const o=n[0],A=[];return t.faces.forEach(((e,t)=>{e.includes(o)&&A.push(t)})),A.length>=2?e(t,"face",A):se(t,"face",A)}return t},t.duplicateMeshGeometry=function(e,t,o){if(!o.length)return{mesh:e,newVertexIndices:[],newFaceIndices:[]};let n=[];if("face"===t)n=[...o];else if("vertex"===t){const t=new Set(o);e.faces.forEach(((e,o)=>{e.some((e=>t.has(e)))&&n.push(o)}))}else if("edge"===t){const t=new Set(o.map((t=>e.edges[t])).filter(Boolean).map((e=>`${e[0]}_${e[1]}`)));e.faces.forEach(((e,o)=>{for(let A=0;A<e.length;A++){const s=e[A],i=e[(A+1)%e.length];if(t.has(`${s}_${i}`)||t.has(`${i}_${s}`)){n.push(o);break}}}))}if(!n.length)return{mesh:e,newVertexIndices:[],newFaceIndices:[]};const A=e.vertices.map((e=>[e[0],e[1],e[2]])),s=e.faces.map((e=>[...e])),i=[...e.faceSlot??[]],r=new Map,a=[];for(const t of n){const o=e.faces[t];for(const t of o)if(!r.has(t)){const o=A.length;A.push([...e.vertices[t]]),r.set(t,o),a.push(o)}}const c=[];for(const t of n){const o=e.faces[t].map((e=>r.get(e)));c.push(s.length),s.push(o),i.push(e.faceSlot?.[t]??0)}return{mesh:u({vertices:A,faces:s,edges:[],radius:0,slots:e.slots??[],faceSlot:i},e.smooth),newVertexIndices:a,newFaceIndices:c}},t.edgeKey=r,t.emptyArrowsMesh=U,t.emptyAxesMesh=Y,t.emptyCircleMesh=J,t.emptyCubeMesh=K,t.emptyImageMesh=V,t.emptySphereMesh=_,t.extrudeFaces=function(e,t,o=.35){if(!t.length)return A(e);const n=new Set(t),s=A(e);let i=0,a=0,c=0;for(const o of t){const t=g(e,e.faces[o]);i+=t[0],a+=t[1],c+=t[2]}const l=Math.hypot(i,a,c)||1;i/=l,a/=l,c/=l;const d=new Map,m=e=>{if(d.has(e))return d.get(e);const t=s.vertices[e],n=s.vertices.length;return s.vertices.push([t[0]+i*o,t[1]+a*o,t[2]+c*o]),d.set(e,n),n},p=new Map;for(const o of t){const n=e.faces[o];for(let o=0;o<n.length;o++){const A=n[o],s=n[(o+1)%n.length],i=r(A,s);let a=0;for(const o of t){const t=e.faces[o];for(let e=0;e<t.length;e++)r(t[e],t[(e+1)%t.length])===i&&a++}a<2&&p.set(i,[A,s])}}const h=[],I=[];e.faces.forEach(((t,o)=>{if(!n.has(o))return h.push([...t]),void I.push(e.faceSlot?.[o]??0);h.push(t.map((e=>m(e)))),I.push(e.faceSlot?.[o]??0)}));const f=e.faceSlot?.[t[0]]??0;for(const[,[e,t]]of p)h.push([e,t,m(t),m(e)]),I.push(f);return u({vertices:s.vertices,faces:h,edges:[],radius:0,slots:e.slots??[],faceSlot:I},e.smooth)},t.faceCenter=d,t.faceNormal=g,t.finalizeMesh=u,t.flipNormals=function(e){const t=e.faces.map((e=>[...e].reverse()));return u({vertices:e.vertices.map((e=>[e[0],e[1],e[2]])),faces:t,edges:[],radius:0,slots:e.slots??[],faceSlot:[...e.faceSlot??[]]},e.smooth)},t.forceFieldMesh=z,t.gridMesh=M,t.icoSphereMesh=v,t.insetFaces=function(e,t,o=.18){if(!t.length)return A(e);const n=e.vertices.map((e=>[e[0],e[1],e[2]])),s=[];for(const t of e.faces)s.push([...t]);const i=new Map,r=e=>{const t=`${e[0].toFixed(5)}:${e[1].toFixed(5)}:${e[2].toFixed(5)}`,o=i.get(t);if(void 0!==o)return o;const A=n.length;return n.push([e[0],e[1],e[2]]),i.set(t,A),A},a=[];for(const n of t){const t=e.faces[n],A=d(e,t),i=t.map((t=>{const n=e.vertices[t];return r([n[0]+(A[0]-n[0])*o,n[1]+(A[1]-n[1])*o,n[2]+(A[2]-n[2])*o])}));s[n]=i;for(let e=0;e<t.length;e++){const o=t[e],n=t[(e+1)%t.length];a.push([o,n,i[(e+1)%i.length],i[e]])}}const c=[];e.faces.forEach(((t,o)=>{c.push(e.faceSlot?.[o]??0)}));const l=e.faceSlot?.[t[0]]??0;for(let e=0;e<a.length;e++)c.push(l);return u({vertices:n,faces:[...s,...a],edges:[],radius:0,slots:e.slots??[],faceSlot:c},e.smooth)},t.isPointInsideMesh=re,t.joinMeshes=function(e){if(!e.length)return p();const t=[],o=[],n=[],A=[];for(const s of e){const e=s.mesh,i=t.length,r=s.position??[0,0,0],a=s.scale??[1,1,1];for(const o of e.vertices)t.push([o[0]*a[0]+r[0],o[1]*a[1]+r[1],o[2]*a[2]+r[2]]);for(let t=0;t<e.faces.length;t++)o.push(e.faces[t].map((e=>e+i))),n.push(e.faceSlot?.[t]??0);if(e.slots)for(const t of e.slots)A.push(t)}return u({vertices:t,faces:o,edges:[],radius:0,slots:A,faceSlot:n})},t.latticeMesh=H,t.mediaPlaneMesh=E,t.mergeByDistance=function(e,t=1e-4){const o=[],n=[],A=new Map,s=Math.max(1e-6,t);for(let t=0;t<e.vertices.length;t++){const i=e.vertices[t],r=`${Math.round(i[0]/s)}:${Math.round(i[1]/s)}:${Math.round(i[2]/s)}`,a=A.get(r);if(void 0!==a)n[t]=a;else{const e=o.length;o.push([i[0],i[1],i[2]]),A.set(r,e),n[t]=e}}const i=[],r=[];return e.faces.forEach(((t,o)=>{const A=[];for(const e of t){const t=n[e];A[A.length-1]!==t&&A[0]!==t&&A.push(t)}A.length<3||(i.push(A),r.push(e.faceSlot?.[o]??0))})),ne(o,i,e.smooth,r,e.slots??[])},t.mergeVertices=Ae,t.meshFor=function(e,t){if(!t&&oe.has(e))return oe.get(e)??null;let o=null;switch(e){case"cube":o=p(t?.sizeX??1,t?.sizeY??1,t?.sizeZ??1);break;case"sphere":o=h(t?.segments,t?.rings,t?.radius??.5);break;case"icosphere":o=v(t?.subdivisions,t?.radius);break;case"cylinder":o=I(t?.segments,t?.innerRadius,t?.height,t?.radius??.5);break;case"cone":o=f(t?.segments,t?.radius??.5,t?.height??1);break;case"torus":o=C(t?.segments,t?.sides,t?.radius,t?.tube);break;case"plane":o=M(t?.subdivisions??t?.subdivX??1,t?.subdivisions??t?.subdivY??1,t?.sizeX??1,t?.sizeY??t?.sizeX??1);break;case"circle":o=Q(t?.segments,t?.radius);break;case"grid":o=M(t?.subdivisions??t?.subdivX??4,t?.subdivisions??t?.subdivY??4,t?.sizeX??2,t?.sizeY??t?.sizeX??2);break;case"pyramid":o=k(t?.sides,t?.radius,t?.height);break;case"tube":o=w(t?.segments,t?.innerRadius,t?.outerRadius,t?.height);break;case"capsule":o=x(t?.segments,t?.rings,t?.radius,t?.height);break;case"curve_bezier":o=S();break;case"curve_circle":o=D();break;case"curve_path":o=L();break;case"curve_nurbs":o=F();break;case"light":case"light_point":o=N();break;case"light_sun":o=R();break;case"light_spot":o=G();break;case"light_area":o=P();break;case"camera":case"camera_perspective":o=T();break;case"camera_ortho":o=j();break;case"empty_axes":o=Y();break;case"empty_arrows":o=U();break;case"empty_cube":o=K();break;case"empty_sphere":o=_();break;case"empty_circle":o=J();break;case"empty_image":o=V();break;case"text":case"image":o=E();break;case"text_3d":o=q(t?.text,t?.depth,t?.bevel);break;case"coin":o=B();break;case"bone":case"armature":o=b();break;case"metaball":o=O(t?.shape);break;case"lattice":o=H();break;case"forcefield":o=z();break;case"speaker":o=X();break;case"asset_suzanne":o=W();break;case"asset_tree":o=$();break;case"asset_car":o=Z();break;case"asset_character":o=ee();break;case"asset_chair":o=te()}!t&&o&&oe.set(e,o);return o},t.metaballMesh=O,t.mirrorMesh=function(e,t,o=.001){const n="x"===t?0:"y"===t?1:2,A=e.vertices.map((e=>[e[0],e[1],e[2]])),s=e.faces.map((e=>[...e])),i=[...e.faceSlot??[]],r=new Map;return e.vertices.forEach(((e,t)=>{if(Math.abs(e[n])<=o)r.set(t,t);else{const o=A.length,s=[e[0],e[1],e[2]];s[n]=-s[n],A.push(s),r.set(t,o)}})),e.faces.forEach(((t,o)=>{const n=t.map((e=>r.get(e))).reverse();s.push(n),i.push(e.faceSlot?.[o]??0)})),u({vertices:A,faces:s,edges:[],radius:0,slots:e.slots??[],faceSlot:i},e.smooth)},t.nurbsCurveMesh=F,t.orthoCameraMesh=j,t.pathCurveMesh=L,t.perspectiveCameraMesh=T,t.planeMesh=y,t.pointLightMesh=N,t.pyramidMesh=k,t.screwSpinMesh=function(e,t="z",o=360,n=16,A=0){if(!e.vertices.length)return e;const s=o*Math.PI/180,i=Math.max(3,n),r=e.vertices.map((e=>[e[0],e[1],e[2]])),a=r.length,c=[],l=[],g=[];for(let e=0;e<=i;e++){const o=e/i,n=o*s,l=o*A,g=Math.cos(n),d=Math.sin(n);for(let e=0;e<a;e++){const o=r[e];let n=o[0],A=o[1],s=o[2];if("z"===t){const e=n*g-A*d,t=n*d+A*g;c.push([e,t,s+l])}else if("y"===t){const e=n*g+s*d,t=-n*d+s*g;c.push([e,A+l,t])}else{const e=A*g-s*d,t=A*d+s*g;c.push([n+l,e,t])}}}for(let t=0;t<i;t++){const o=t*a,n=(t+1)*a;for(const t of e.edges){const e=o+t[0],A=o+t[1],s=n+t[1],i=n+t[0];l.push([e,A,s,i]),g.push(0)}}return u({vertices:c,faces:l,edges:[],radius:0,slots:e.slots??[],faceSlot:g},e.smooth)},t.separateGeometry=function(e,t){const o=new Set(t),n=[],A=[],s=[],i=[];e.faces.forEach(((t,r)=>{o.has(r)?(n.push([...t]),A.push(e.faceSlot?.[r]??0)):(s.push([...t]),i.push(e.faceSlot?.[r]??0))}));const r=new Map,a=[],c=t=>{if(r.has(t))return r.get(t);const o=a.length;return a.push(e.vertices[t]),r.set(t,o),o},l=n.map((e=>e.map(c))),g=u({vertices:a,faces:l,edges:[],radius:0,slots:e.slots??[],faceSlot:A},e.smooth),d=new Map,m=[],p=t=>{if(d.has(t))return d.get(t);const o=m.length;return m.push(e.vertices[t]),d.set(t,o),o},h=s.map((e=>e.map(p)));return{remainingMesh:u({vertices:m,faces:h,edges:[],radius:0,slots:e.slots??[],faceSlot:i},e.smooth),separatedMesh:g}},t.smoothMeshVertices=function(e,t=2,o=.5){const n=e.vertices.map((e=>[e[0],e[1],e[2]])),A=new Map;for(const[t,o]of e.edges)A.has(t)||A.set(t,[]),A.has(o)||A.set(o,[]),A.get(t).push(o),A.get(o).push(t);for(let e=0;e<t;e++){const e=n.map((e=>[e[0],e[1],e[2]]));for(let t=0;t<n.length;t++){const s=A.get(t);if(!s||!s.length)continue;let i=0,r=0,a=0;for(const e of s)i+=n[e][0],r+=n[e][1],a+=n[e][2];i/=s.length,r/=s.length,a/=s.length,e[t][0]=n[t][0]+(i-n[t][0])*o,e[t][1]=n[t][1]+(r-n[t][1])*o,e[t][2]=n[t][2]+(a-n[t][2])*o}for(let t=0;t<n.length;t++)n[t]=e[t]}return u({...e,vertices:n},e.smooth)},t.solidifyMesh=function(e,t=.12){const o=l(e),n=e.vertices.length,A=e.vertices.map((e=>[e[0],e[1],e[2]]));for(let s=0;s<n;s++){const n=e.vertices[s],i=o[s];A.push([n[0]-i[0]*t,n[1]-i[1]*t,n[2]-i[2]*t])}const s=[],i=[];e.faces.forEach(((t,o)=>{const A=e.faceSlot?.[o]??0;s.push([...t]),i.push(A),s.push([...t].reverse().map((e=>e+n))),i.push(A)}));const a=new Map;e.faces.forEach(((t,o)=>{const n=e.faceSlot?.[o]??0;for(let e=0;e<t.length;e++){const o=t[e],A=t[(e+1)%t.length],s=r(o,A),i=a.get(s);i?i.count++:a.set(s,{a:o,b:A,count:1,slot:n})}}));for(const e of a.values())1===e.count&&(s.push([e.a,e.b,e.b+n,e.a+n]),i.push(e.slot));return u({vertices:A,faces:s,slots:e.slots,faceSlot:i},e.smooth)},t.speakerMesh=X,t.sphereMesh=h,t.spotLightMesh=G,t.subdivide=function(e,t=!0){const o=e.vertices.map((e=>[e[0],e[1],e[2]])),n=e.faces.map((t=>d(e,t))),A=new Map,s=new Map,i=[];e.faces.forEach(((e,t)=>{const o=[];for(let n=0;n<e.length;n++){const A=e[n],i=e[(n+1)%e.length],a=r(A,i);o.push([A,i]),s.has(a)||s.set(a,[]),s.get(a)?.push(t)}i.push(o)}));for(const[i,r]of s){const[s,a]=i.split(":").map(Number);let c;if(t&&2===r.length){const t=n[r[0]],o=n[r[1]];c=[(e.vertices[s][0]+e.vertices[a][0]+t[0]+o[0])/4,(e.vertices[s][1]+e.vertices[a][1]+t[1]+o[1])/4,(e.vertices[s][2]+e.vertices[a][2]+t[2]+o[2])/4]}else c=[(e.vertices[s][0]+e.vertices[a][0])/2,(e.vertices[s][1]+e.vertices[a][1])/2,(e.vertices[s][2]+e.vertices[a][2])/2];A.set(i,o.length),o.push(c)}if(t){const t=new Map,s=new Map;e.faces.forEach(((e,o)=>{for(const n of e)t.has(n)||t.set(n,[]),t.get(n)?.push(o)}));for(const[e,t]of A){const[o,n]=e.split(":").map(Number);for(const e of[o,n])s.has(e)||s.set(e,[]),s.get(e)?.push(t)}e.vertices.forEach(((e,A)=>{const i=t.get(A)||[],r=s.get(A)||[];if(!i.length||!r.length)return;const a=i.length;let c=0,l=0,g=0;for(const e of i)c+=n[e][0],l+=n[e][1],g+=n[e][2];c/=a,l/=a,g/=a;let d=0,u=0,m=0;for(const t of r)d+=(o[t][0]+e[0])/2,u+=(o[t][1]+e[1])/2,m+=(o[t][2]+e[2])/2;d/=r.length,u/=r.length,m/=r.length,o[A]=[(c+2*d+(a-3)*e[0])/a,(l+2*u+(a-3)*e[1])/a,(g+2*m+(a-3)*e[2])/a]}))}const a=o.length;for(const e of n)o.push(e);const c=[],l=[];return e.faces.forEach(((t,o)=>{const n=a+o,s=i[o];for(let i=0;i<t.length;i++){const a=s[(i-1+s.length)%s.length],g=s[i];c.push([t[i],A.get(r(g[0],g[1])),n,A.get(r(a[0],a[1]))]),l.push(e.faceSlot?.[o]??0)}})),u({vertices:o,faces:c,edges:[],radius:0,slots:e.slots??[],faceSlot:l},e.smooth??!0)},t.sunLightMesh=R,t.suzanneMesh=W,t.text3dMesh=q,t.toNonIndexed=function(e){const t=[],o=[],A=[],i=e.normals,r=[],l=e.colors,g=[];e.faces.forEach(((n,s)=>{const a=t.length;for(let c=1;c<n.length-1;c++){for(const o of[n[0],n[c],n[c+1]]){const n=e.vertices[o];if(t.push([n[0],n[1],n[2]]),i){const e=i[o]??[0,1,0];r.push([e[0],e[1],e[2]])}l&&g.push(l[3*o]??1,l[3*o+1]??1,l[3*o+2]??1)}o.push([a,a+1,a+2]),A.push(e.faceSlot?.[s]??0)}}));const d={vertices:t,faces:o,edges:a(o),radius:c(t),smooth:e.smooth,slots:(e.slots??[]).map(n),faceSlot:A,groups:[]};r.length===t.length&&(d.normals=r);g.length===3*t.length&&(d.colors=g);return d.groups=s(d),d},t.torusMesh=C,t.transformVertices=function(e,t,o){const n=A(e);for(const e of t)e<0||e>=n.vertices.length||(n.vertices[e]=o(n.vertices[e]));return u(n,e.smooth)},t.treeMesh=$,t.triangulate=function(e){const t=[],o=[];for(const n of e.faces){const A=t.length/3;for(const o of n){const n=e.vertices[o];t.push(n[0],n[1],n[2])}for(let e=1;e<n.length-1;e++)o.push(A,A+e,A+e+1)}return{positions:t,indices:o}},t.tubeMesh=w,t.unwrapMeshUV=function(e,t="box",o=1){const n=[],s=l(e);for(let A=0;A<e.vertices.length;A++){const i=e.vertices[A],r=s[A]??[0,1,0];let a=.5,c=.5;if("planar"===t)a=(i[0]+.5)*o,c=(i[2]+.5)*o;else if("cylindrical"===t)a=(Math.atan2(i[2],i[0])/(2*Math.PI)+.5)*o,c=(i[1]+.5)*o;else if("spherical"===t){const e=Math.hypot(i[0],i[1],i[2])||1;a=(Math.atan2(i[2],i[0])/(2*Math.PI)+.5)*o,c=(.5-Math.asin(Math.max(-1,Math.min(1,i[1]/e)))/Math.PI)*o}else{const e=Math.abs(r[0]),t=Math.abs(r[1]),n=Math.abs(r[2]);e>=t&&e>=n?(a=(i[2]+.5)*o,c=(i[1]+.5)*o):t>=n?(a=(i[0]+.5)*o,c=(i[2]+.5)*o):(a=(i[0]+.5)*o,c=(i[1]+.5)*o)}n.push([a,c])}const i=A(e);return i.uvs=n,i};const oe=new Map;function ne(e,t,o,n=[],A=[]){const s=new Map,i=[],r=t=>{if(s.has(t))return s.get(t);const o=i.length;return i.push(e[t]),s.set(t,o),o},a=t.map((e=>e.map(r)));return u({vertices:i,faces:a,edges:[],radius:0,slots:A,faceSlot:n},o)}function Ae(e,t,o="center",n=.001){if(!t.length)return e;if("distance"===o){const o=[],A=new Map;e.vertices.forEach(((e,s)=>{if(!t.includes(s))return A.set(s,o.length),void o.push([...e]);let i=-1;for(let t=0;t<o.length;t++){const A=o[t];if(Math.hypot(e[0]-A[0],e[1]-A[1],e[2]-A[2])<=n){i=t;break}}i>=0?A.set(s,i):(A.set(s,o.length),o.push([...e]))}));const s=[],i=[];return e.faces.forEach(((t,o)=>{const n=t.map((e=>A.get(e)??e)).filter(((e,t,o)=>o.indexOf(e)===t));n.length>=3&&(s.push(n),i.push(e.faceSlot?.[o]??0))})),u({vertices:o,faces:s,edges:[],radius:0,slots:e.slots??[],faceSlot:i},e.smooth)}const A=e.vertices.map((e=>[e[0],e[1],e[2]]));let s,i;if("first"===o)i=t[0],s=[...A[i]];else if("last"===o)i=t[t.length-1],s=[...A[i]];else{let e=0,o=0,n=0;for(const s of t)e+=A[s][0],o+=A[s][1],n+=A[s][2];s=[e/t.length,o/t.length,n/t.length],i=t[0]}A[i]=s;const r=new Map;for(const e of t)r.set(e,i);const a=[],c=[];e.faces.forEach(((t,o)=>{const n=t.map((e=>r.get(e)??e)),A=[];for(let e=0;e<n.length;e++){const t=A[A.length-1];n[e]!==t&&A.push(n[e])}A.length>2&&A[0]===A[A.length-1]&&A.pop();new Set(A).size>=3&&(a.push(A),c.push(e.faceSlot?.[o]??0))}));const l=new Map,g=[],d=e=>{if(l.has(e))return l.get(e);const t=g.length;return g.push(A[e]),l.set(e,t),t},m=a.map((e=>e.map(d)));return u({vertices:g,faces:m,edges:[],radius:0,slots:e.slots??[],faceSlot:c},e.smooth)}function se(e,t,o){if(!o.length)return e;const n=new Set(o);let A=[],s=[];if("face"===t)e.faces.forEach(((t,o)=>{n.has(o)||(A.push([...t]),s.push(e.faceSlot?.[o]??0))}));else if("vertex"===t)e.faces.forEach(((t,o)=>{t.some((e=>n.has(e)))||(A.push([...t]),s.push(e.faceSlot?.[o]??0))}));else if("edge"===t){const t=o.map((t=>e.edges[t])).filter(Boolean),n=new Set(t.map((e=>e[0]<e[1]?`${e[0]}_${e[1]}`:`${e[1]}_${e[0]}`)));e.faces.forEach(((t,o)=>{let i=!1;for(let e=0;e<t.length;e++){const o=t[e],A=t[(e+1)%t.length],s=o<A?`${o}_${A}`:`${A}_${o}`;if(n.has(s)){i=!0;break}}i||(A.push([...t]),s.push(e.faceSlot?.[o]??0))}))}if(!A.length)return u({vertices:[],faces:[],edges:[],radius:0,slots:e.slots??[]},e.smooth);const i=new Map,r=[],a=t=>{if(i.has(t))return i.get(t);const o=r.length;return r.push(e.vertices[t]),i.set(t,o),o},c=A.map((e=>e.map(a)));return u({vertices:r,faces:c,edges:[],radius:0,slots:e.slots??[],faceSlot:s},e.smooth)}function ie(e,t,o,n,A){const s=[n[0]-o[0],n[1]-o[1],n[2]-o[2]],i=[A[0]-o[0],A[1]-o[1],A[2]-o[2]],r=[t[1]*i[2]-t[2]*i[1],t[2]*i[0]-t[0]*i[2],t[0]*i[1]-t[1]*i[0]],a=s[0]*r[0]+s[1]*r[1]+s[2]*r[2];if(Math.abs(a)<1e-6)return!1;const c=1/a,l=[e[0]-o[0],e[1]-o[1],e[2]-o[2]],g=c*(l[0]*r[0]+l[1]*r[1]+l[2]*r[2]);if(g<0||g>1)return!1;const d=[l[1]*s[2]-l[2]*s[1],l[2]*s[0]-l[0]*s[2],l[0]*s[1]-l[1]*s[0]],u=c*(t[0]*d[0]+t[1]*d[1]+t[2]*d[2]);if(u<0||g+u>1)return!1;return c*(i[0]*d[0]+i[1]*d[1]+i[2]*d[2])>1e-5}function re(e,t){const o=[.904,.208,.373];let n=0;for(const A of t.faces)for(let s=1;s<A.length-1;s++)ie(e,o,t.vertices[A[0]],t.vertices[A[s]],t.vertices[A[s+1]])&&n++;return n%2==1}})),__define("lib/topology",(function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.bevelVertices=function(e,t,n,A=1){if(!t.length)return{ok:!1,error:{code:"empty",message:"Select at least one vertex to bevel."}};if(!Number.isFinite(n)||n<=0)return{ok:!1,error:{code:"degenerate",message:"The bevel width must be a positive number."}};if(A<1||!Number.isFinite(A))return{ok:!1,error:{code:"degenerate",message:"The segment count must be at least one."}};const s=new Set(t.filter((t=>e.vertices[t])));if(!s.size)return{ok:!1,error:{code:"empty",message:"None of the selected vertices exist."}};const i=e.vertices.map((e=>[e[0],e[1],e[2]])),r=new Map;e.faces.forEach(((e,t)=>{for(const o of e){if(!s.has(o))continue;const e=r.get(o);e?e.push(t):r.set(o,[t])}}));const a=new Map,c=new Map,l=new Map;for(const t of s){const o=r.get(t)??[];if(o.length<3)continue;const A=[],s=[0,0,0];for(const s of o){const o=e.faces[s],r=o.indexOf(t);if(r<0)continue;const c=o[(r-1+o.length)%o.length],l=o[(r+1)%o.length];for(const o of[c,l]){const s=`${t}:${o}`;if(a.has(s))continue;const r=e.vertices[t],c=e.vertices[o],l=Math.hypot(c[0]-r[0],c[1]-r[1],c[2]-r[2]);if(l<1e-9)continue;const g=Math.min(n,.45*l)/l,d=i.length;i.push([r[0]+(c[0]-r[0])*g,r[1]+(c[1]-r[1])*g,r[2]+(c[2]-r[2])*g]),a.set(s,d),A.push(d)}}if(!(A.length<3)){c.set(t,[...new Set(A)]);for(const n of o){const o=e.faces[n],A=o.indexOf(t);if(A<0)continue;const i=e.vertices[o[(A-1+o.length)%o.length]],r=e.vertices[t],a=e.vertices[o[(A+1)%o.length]],c=[r[0]-i[0],r[1]-i[1],r[2]-i[2]],l=[a[0]-i[0],a[1]-i[1],a[2]-i[2]],g=[c[1]*l[2]-c[2]*l[1],c[2]*l[0]-c[0]*l[2],c[0]*l[1]-c[1]*l[0]];s[0]+=g[0],s[1]+=g[1],s[2]+=g[2]}l.set(t,s)}}if(!c.size)return{ok:!1,error:{code:"degenerate",message:"Those corners have too few surrounding faces."}};const g=(e,t)=>a.get(`${e}:${t}`),d=[],u=[];e.faces.forEach(((t,o)=>{const n=e.faceSlot?.[o]??0;let A=!1;const s=[];for(let e=0;e<t.length;e++){const o=t[e];if(!c.has(o)){s.push(o);continue}const n=t[(e-1+t.length)%t.length],i=t[(e+1)%t.length],r=g(o,n),a=g(o,i);void 0!==r&&void 0!==a?(A=!0,s.push(r,a)):s.push(o)}if(!A)return d.push([...t]),void u.push(n);new Set(s).size>=3&&(d.push(s),u.push(n))}));for(const[t,o]of c){const n=l.get(t)??[0,1,0],A=Math.hypot(n[0],n[1],n[2])||1,s=[n[0]/A,n[1]/A,n[2]/A],a=Math.abs(s[1])>.9?[1,0,0]:[0,1,0],c=[s[1]*a[2]-s[2]*a[1],s[2]*a[0]-s[0]*a[2],s[0]*a[1]-s[1]*a[0]],g=Math.hypot(c[0],c[1],c[2])||1,m=[c[0]/g,c[1]/g,c[2]/g],p=[s[1]*m[2]-s[2]*m[1],s[2]*m[0]-s[0]*m[2],s[0]*m[1]-s[1]*m[0]],h=e.vertices[t],I=[...new Set(o)].sort(((e,t)=>{const o=i[e],n=i[t];return Math.atan2((o[0]-h[0])*p[0]+(o[1]-h[1])*p[1]+(o[2]-h[2])*p[2],(o[0]-h[0])*m[0]+(o[1]-h[1])*m[1]+(o[2]-h[2])*m[2])-Math.atan2((n[0]-h[0])*p[0]+(n[1]-h[1])*p[1]+(n[2]-h[2])*p[2],(n[0]-h[0])*m[0]+(n[1]-h[1])*m[1]+(n[2]-h[2])*m[2])}));I.length>=3&&(d.push(I),u.push(e.faceSlot?.[r.get(t)?.[0]??0]??0))}const m=new Map,p=[],h=e=>{const t=m.get(e);if(void 0!==t)return t;const o=p.length;return m.set(e,o),p.push(i[e]),o},I=d.map((e=>e.map(h))),f=(0,o.finalizeMesh)({vertices:p,faces:I,faceSlot:u,slots:e.slots,smooth:e.smooth??!1},e.smooth??!1);return f.radius=(0,o.computeRadius)(f.vertices),{ok:!0,mesh:f,vertices:c.size,faces:f.faces.length}},t.loopCut=function(e,t,i=1){if(!e.faces.length)return{ok:!1,error:{code:"empty",message:"The mesh has no faces."}};if(!Number.isFinite(i)||i<1)return{ok:!1,error:{code:"degenerate",message:"A loop cut needs at least one cut."}};const r=Math.floor(i);if(r>12)return{ok:!1,error:{code:"limit",message:"At most 12 cuts per loop are supported."}};const a=e.edges[t];if(!a)return{ok:!1,error:{code:"no-edge",message:"Select an edge to cut across."}};const c=function(e){const t=new Map;return e.forEach(((e,o)=>{for(let n=0;n<e.length;n++){const s=A(e,n),i=t.get(s);i?i.push(o):t.set(s,[o])}})),t}(e.faces),l=n(a[0],a[1]),g=c.get(l);if(!g?.length)return{ok:!1,error:{code:"no-edge",message:"That edge belongs to no face."}};const d=[],u=new Set,m=(t,o)=>{const i=[];let r=t,a=o;for(;!u.has(r);){const t=e.faces[r];if(4!==t.length)break;const o=s(t,a);if(!o)break;u.add(r);const l=e.faces[r].find(((t,o)=>A(e.faces[r],o)===a))??o[0],g=e.faces[r][(e.faces[r].indexOf(l)+1)%4];i.push({face:r,a:o[0],b:o[1],entryA:l,entryB:g});const d=n(o[0],o[1]),m=(c.get(d)??[]).find((e=>e!==r));if(void 0===m)break;r=m,a=d}return i},p=m(g[0],l),h=g.length>1?m(g[1],l):[];if(d.push(...p.reverse(),...h),!d.length)return{ok:!1,error:{code:"not-quad",message:"Loop cut needs a ring of quads."}};const I=e.vertices.map((e=>[e[0],e[1],e[2]])),f=new Map,C=(t,o)=>{const A=n(t,o),s=f.get(A);if(s)return s;const i=e.vertices[t],a=e.vertices[o],c=[];for(let e=1;e<=r;e++){const t=e/(r+1);c.push(I.length),I.push([i[0]+(a[0]-i[0])*t,i[1]+(a[1]-i[1])*t,i[2]+(a[2]-i[2])*t])}return f.set(A,c),c};for(const e of d)C(e.a,e.b),C(e.entryA,e.entryB);const y=(e,t)=>{const o=f.get(n(e,t))??[];return e<t?o:[...o].reverse()},E=[],B=[],b=new Set(d.map((e=>e.face)));e.faces.forEach(((t,o)=>{b.has(o)||(E.push([...t]),B.push(e.faceSlot?.[o]??0))}));for(const t of d){const o=e.faces[t.face],s=e.faceSlot?.[t.face]??0,i=o.findIndex(((e,s)=>A(o,s)===n(t.a,t.b))),a=i<0?0:i,c=(a+2)%4,l=o[a],g=o[(a+1)%4],d=o[c],u=o[(c+1)%4],m=y(l,g),p=y(d,u);if(m.length!==r||p.length!==r)continue;const h=[l,...m,g],I=[d,...p,u];for(let e=1;e<=r+1;e++){const t=[h[e-1],h[e],I[r+1-e],I[r+2-e]];new Set(t).size<4||(E.push(t),B.push(s))}}const v=(0,o.finalizeMesh)({vertices:I,faces:E,faceSlot:B,slots:e.slots,smooth:e.smooth??!1},e.smooth??!1);v.radius=(0,o.computeRadius)(v.vertices);const Q=new Set([...f.values()].flat()),M=v.edges.filter((([e,t])=>Q.has(e)&&Q.has(t)));return{ok:!0,mesh:v,edges:M,faces:d.length}};var o=e("lib/mesh");function n(e,t){return e<t?`${e}:${t}`:`${t}:${e}`}function A(e,t){return n(e[t],e[(t+1)%e.length])}function s(e,t){if(4!==e.length)return null;for(let o=0;o<4;o++)if(A(e,o)===t){return[e[(o+2)%4],e[(o+3)%4]]}return null}})),__define("lib/bisect",(function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.bisectMesh=function(e,t){const n=Math.hypot(t.normal[0],t.normal[1],t.normal[2])||1,A=(0,o.normalize)(t.normal),s=t.dist/n,r=e.vertices.map((e=>[e[0],e[1],e[2]])),c=r.map((e=>(0,o.dot)(A,e)-s)),l=new Map,m=e=>{const t=a(e),o=l.get(t);if(void 0!==o)return o;const n=r.length;return r.push(e),c.push(0),l.set(t,n),n},p=[],h=[],I=[],f=[],C=[];let y=0;e.faces.forEach(((t,o)=>{const n=e.faceSlot?.[o]??0;for(let o=1;o<t.length-1;o++){const A=[t[0],t[o],t[o+1]],s=A.map((t=>({position:e.vertices[t],distance:c[t],index:t}))),r=s.map((e=>i(e.distance))),a=r.some((e=>e>0)),l=r.some((e=>e<0));if(!a){h.push([...A]),f.push(n);continue}if(!l){p.push([...A]),I.push(n);continue}y++;const d=g(s,!0),u=g(s,!1),E=[],B=(e,t,o)=>{const A=[];for(const t of e)A.push(t.index??m(t.position));if(!(A.length<3))for(let e=1;e<A.length-1;e++)t.push([A[0],A[e],A[e+1]]),o.push(n)};B(d,p,I),B(u,h,f);for(let e=0;e<3;e++){const t=s[e],o=s[(e+1)%3],n=i(t.distance),A=i(o.distance);if(0===n||0===A||n===A)continue;const r=t.distance-o.distance;if(Math.abs(r)<1e-12)continue;const a=t.distance/r;E.push([t.position[0]+(o.position[0]-t.position[0])*a,t.position[1]+(o.position[1]-t.position[1])*a,t.position[2]+(o.position[2]-t.position[2])*a])}E.length>=2&&C.push([E[0],E[1]])}}));const E=function(e){if(!e.length)return[];const t=new Map,o=e=>a(e),n=e=>{const n=o(e);let A=t.get(n);return A||(A={point:e,links:[]},t.set(n,A)),n},A=[];for(const[o,s]of e){const e=n(o),i=n(s);e!==i&&(t.get(e)?.links.push(i),t.get(i)?.links.push(e),A.push([e,i]))}const s=new Set,i=[];for(const[e,o]of A){const n=`${e}|${o}`,A=`${o}|${e}`;if(s.has(n)||s.has(A))continue;const r=[t.get(e).point];let a=e,c=o,l=0;for(;l++<4096&&(s.add(`${a}|${c}`),r.push(t.get(c).point),c!==e);){const e=(t.get(c)?.links??[]).find((e=>e!==a&&(!s.has(`${c}|${e}`)&&!s.has(`${e}|${c}`))));if(!e)break;a=c,c=e}r.length>=3&&(r.pop(),i.push(r))}return i}(C),B=E.map((e=>d(e,A,!0))),b=E.map((e=>d(e,A,!1))),v=e.slots??[],Q=u(r,p,I,B,e.smooth??!1,v,m),M=u(r,h,f,b,e.smooth??!1,v,m);return{positive:Q,negative:M,splitTriangles:y,cutVertices:l.size,loops:E}},t.classifyFacesByPlane=function(e,t){const n=Math.hypot(t.normal[0],t.normal[1],t.normal[2])||1,s=(0,o.normalize)(t.normal),i=t.dist/n,r=[],a=[];return e.faces.forEach(((t,n)=>{let c=0,l=0;for(const n of t){const t=(0,o.dot)(s,e.vertices[n])-i;t>A&&c++,t<-A&&l++}if(c&&!l)r.push(n);else if(l&&!c)a.push(n);else if(c&&l){const A=m(e,t);(0,o.dot)(s,A)-i>=0?r.push(n):a.push(n)}})),{positive:r,negative:a}},t.cutPlaneFromScreenSegment=function(e,t,n,A,s,i){const r=n.x-t.x,a=n.y-t.y,l=Math.hypot(r,a)||1,g=a/l,d=-r/l,u=(0,o.normalize)([e.right[0]*g+e.up[0]*-d,e.right[1]*g+e.up[1]*-d,e.right[2]*g+e.up[2]*-d]),m=c(e,t,A,s),p=i/Math.max((0,o.dot)(m.dir,e.forward),1e-6),h=[m.origin[0]+m.dir[0]*p,m.origin[1]+m.dir[1]*p,m.origin[2]+m.dir[2]*p];return{normal:u,dist:(0,o.dot)(u,h)}},t.deepestPoint=function(e,t,o){return m(e,t)},t.extrudeRegion=function(e,t,o){if(!t.length)return e;const A=new Set(t),s=t.filter((t=>t>=0&&t<e.faces.length));if(!s.length)return e;let i=0,r=0,a=0;for(const t of s){const o=e.faces[t],n=e.vertices[o[0]],A=e.vertices[o[1]],s=e.vertices[o[2]],c=A[0]-n[0],l=A[1]-n[1],g=A[2]-n[2],d=s[0]-n[0],u=s[1]-n[1],m=s[2]-n[2];i+=l*m-g*u,r+=g*d-c*m,a+=c*u-l*d}const c=Math.hypot(i,r,a)||1,l=[i/c,r/c,a/c],g=e.vertices.map((e=>[e[0],e[1],e[2]])),d=new Map,u=e=>{const t=d.get(e);if(void 0!==t)return t;const n=g[e],A=g.length;return g.push([n[0]+l[0]*o,n[1]+l[1]*o,n[2]+l[2]*o]),d.set(e,A),A},m=[];for(const t of s){const o=e.faces[t];for(let t=0;t<o.length;t++){const n=o[t],A=o[(t+1)%o.length];let i=0;for(const t of s){const o=e.faces[t];for(let e=0;e<o.length;e++){const t=o[e],s=o[(e+1)%o.length];(t===n&&s===A||t===A&&s===n)&&i++}}i<2&&m.push([n,A])}}const p=[];e.faces.forEach(((e,t)=>{A.has(t)?p.push(e.map(u)):p.push([...e])}));for(const[e,t]of m)p.push([e,t,u(t),u(e)]);const h={vertices:g,faces:p,edges:(0,n.buildEdges)(p),radius:(0,n.computeRadius)(g),smooth:e.smooth??!1,slots:(e.slots??[]).map((e=>({...e}))),faceSlot:[...e.faceSlot??[]],groups:[]};for(;h.faceSlot.length<p.length;)h.faceSlot.push(0);return h.groups=(0,n.buildGroups)(h),h},t.offsetMesh=function(e,t){return{...e,vertices:e.vertices.map((e=>[e[0]+t[0],e[1]+t[1],e[2]+t[2]]))}},t.planeFacingCamera=function(e,t){const n=(0,o.normalize)(t.forward);return{normal:n,dist:(0,o.dot)(n,e)}},t.planeFromEdges=function(e,t,n){const A=(0,o.normalize)((0,o.cross)((0,o.sub)(t,e),(0,o.sub)(n,e)));return{normal:A,dist:(0,o.dot)(A,e)}},t.polygonNormal=l,t.screenRay=c,t.signedArea=function(e){return function(e){let t=0;for(let o=0;o<e.length;o++){const n=e[o],A=e[(o+1)%e.length];t+=n[0]*A[1]-A[0]*n[1]}return t/2}(e)},t.signedDistance=function(e,t){const n=Math.hypot(e.normal[0],e.normal[1],e.normal[2])||1,A=[e.normal[0]/n,e.normal[1]/n,e.normal[2]/n];return(0,o.dot)(A,t)-e.dist/n};var o=e("lib/math3d"),n=e("lib/mesh");const A=1e-7,s=1e5;function i(e){return e>A?1:e<-A?-1:0}function r(e){return Math.round(e*s)/s}function a(e){return`${r(e[0])}:${r(e[1])}:${r(e[2])}`}function c(e,t,o,n){const A=t.x/Math.max(o,1)*2-1,s=1-t.y/Math.max(n,1)*2,i=Math.tan(e.fov*Math.PI/360),r=o/Math.max(n,1),a=[e.forward[0]+e.right[0]*A*r*i+e.up[0]*s*i,e.forward[1]+e.right[1]*A*r*i+e.up[1]*s*i,e.forward[2]+e.right[2]*A*r*i+e.up[2]*s*i],c=Math.hypot(a[0],a[1],a[2])||1;return{origin:e.eye,dir:[a[0]/c,a[1]/c,a[2]/c]}}function l(e){let t=0,o=0,n=0;for(let A=0;A<e.length;A++){const s=e[A],i=e[(A+1)%e.length];t+=(s[1]-i[1])*(s[2]+i[2]),o+=(s[2]-i[2])*(s[0]+i[0]),n+=(s[0]-i[0])*(s[1]+i[1])}const A=Math.hypot(t,o,n);return A<1e-12?[0,1,0]:[t/A,o/A,n/A]}function g(e,t){const o=[],n=e.length;for(let s=0;s<n;s++){const i=e[s],r=e[(s+1)%n],a=t?i.distance>=-A:i.distance<=A,c=t?r.distance>=-A:r.distance<=A;if(a&&o.push(i),a!==c){const e=i.distance-r.distance;if(Math.abs(e)>1e-12){const t=i.distance/e;o.push({position:[i.position[0]+(r.position[0]-i.position[0])*t,i.position[1]+(r.position[1]-i.position[1])*t,i.position[2]+(r.position[2]-i.position[2])*t],distance:0})}}}return o}function d(e,t,n){const A=l(e);return(0,o.dot)(A,t)>=0===n?e:[...e].reverse()}function u(e,t,o,A,s,i,r){const a=new Map,c=[],l=t=>{const o=a.get(t);if(void 0!==o)return o;const n=c.length;return c.push(e[t]),a.set(t,n),n},g=t.map((e=>e.map(l))),d=t.map(((e,t)=>o[t]??0));for(const e of A)g.push(e.map((e=>l(r(e))))),d.push(0);const u={vertices:c,faces:g,edges:(0,n.buildEdges)(g),radius:(0,n.computeRadius)(c),smooth:s,slots:i.map((e=>({...e}))),faceSlot:d,groups:[]};return u.groups=(0,n.buildGroups)(u),u}function m(e,t){let o=0,n=0,A=0;for(const s of t){const t=e.vertices[s];o+=t[0],n+=t[1],A+=t[2]}const s=t.length||1;return[o/s,n/s,A/s]}})),__define("lib/regions",(function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.REGION_NORMAL_THRESHOLD=void 0,t.detectCoplanarRegion=function(e,t,r=n){if(t<0||t>=e.faces.length)return[];const a=A(e),c=i(e),l=a[t],g=new Set,d=[],u=[t];let m=0;g.add(t);for(;m<u.length;){const t=u[m++];d.push(t);const n=e.faces[t];for(let e=0;e<n.length;e++){const t=n[e],A=n[(e+1)%n.length],i=c.get(s(t,A))??[];for(const e of i)g.has(e)||(0,o.dot)(l,a[e])<r||(g.add(e),u.push(e))}}return d.sort(((e,t)=>e-t))},t.edgeAdjacency=i,t.faceNormals=A,t.regionOverlayMesh=function(e,t){const o=new Map,n=[],A=[];for(const s of t){const t=e.faces[s];if(!t)continue;const i=t.map((t=>{const A=o.get(t);if(void 0!==A)return A;const s=n.length,i=e.vertices[t];return n.push([i[0],i[1],i[2]]),o.set(t,s),s}));A.push(i)}return{vertices:n,faces:A,edges:[],radius:.5,smooth:e.smooth??!1,slots:(e.slots??[]).map((e=>({...e}))),faceSlot:A.map(((o,n)=>e.faceSlot?.[t[n]]??0)),groups:[]}};var o=e("lib/math3d");const n=.85;function A(e){return e.faces.map((t=>{const o=e.vertices[t[0]],n=e.vertices[t[1]],A=e.vertices[t[2]],s=n[0]-o[0],i=n[1]-o[1],r=n[2]-o[2],a=A[0]-o[0],c=A[1]-o[1],l=A[2]-o[2],g=i*l-r*c,d=r*a-s*l,u=s*c-i*a,m=Math.hypot(g,d,u)||1;return[g/m,d/m,u/m]}))}function s(e,t){return e<t?`${e}:${t}`:`${t}:${e}`}function i(e){const t=new Map;return e.faces.forEach(((e,o)=>{for(let n=0;n<e.length;n++){const A=s(e[n],e[(n+1)%e.length]),i=t.get(A);i?i.push(o):t.set(A,[o])}})),t}t.REGION_NORMAL_THRESHOLD=n})),__define("lib/materials",(function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.MATERIAL_PRESETS=t.MATERIAL_GROUPS=void 0,t.averageColor=function(e){return`#${a(e.color).map((e=>Math.round(e).toString(16).padStart(2,"0"))).join("")}`},t.imageForSlot=E,t.presetById=r,t.presetToSlot=function(e,t=e.name){return{...(0,o.defaultMaterialSlot)(t),color:e.color,emissive:e.emissive,emissiveStrength:e.emissiveStrength,metalness:e.metalness,roughness:e.roughness,opacity:e.opacity,uvRepeat:1,presetId:e.id}},t.presetsForGroup=function(e){return i.filter((t=>t.group===e))},t.renderSlotFor=B,t.renderSlotsFor=function(e){return e.map(B)},t.slotFromImage=function(e,t){return{...(0,o.defaultMaterialSlot)(e),color:"#ffffff",metalness:.1,roughness:.5,imageUrl:t}},t.textureSetFor=C,t.thumbnailFor=function(e){const t=f.get(e.id);if(t)return t;const o=function(e,t){const o=p(t),n=o.getContext("2d");if(!n)return o;const A=n.createImageData(t,t);for(let o=0;o<t;o++)for(let n=0;n<t;n++){const s=h(e,n/t,o/t),i=4*(o*t+n);A.data[i]=Math.round(Math.min(255,Math.max(0,s.color.r))),A.data[i+1]=Math.round(Math.min(255,Math.max(0,s.color.g))),A.data[i+2]=Math.round(Math.min(255,Math.max(0,s.color.b))),A.data[i+3]=255}return n.putImageData(A,0,0),o}(e,s).toDataURL("image/png");return f.set(e.id,o),o};var o=e("lib/mesh");const n=64,A=64,s=32,i=[{id:"gold-24k",name:"24K Gold",group:"Metals",color:"#f5c542",emissive:"#000000",emissiveStrength:1,metalness:1,roughness:.16,opacity:1,recipe:"polished",accent:"#fff0a8",density:6},{id:"silver-brushed",name:"Brushed Silver",group:"Metals",color:"#c8ccd4",emissive:"#000000",emissiveStrength:1,metalness:1,roughness:.32,opacity:1,recipe:"brushed",accent:"#8d939e",density:3},{id:"chrome-mirror",name:"Mirror Chrome",group:"Metals",color:"#eef1f6",emissive:"#000000",emissiveStrength:1,metalness:1,roughness:.03,opacity:1,recipe:"polished",accent:"#b9c4d6",density:2},{id:"copper",name:"Copper",group:"Metals",color:"#b87333",emissive:"#000000",emissiveStrength:1,metalness:1,roughness:.28,opacity:1,recipe:"brushed",accent:"#e0a06a",density:4},{id:"rusted-iron",name:"Rusted Iron",group:"Metals",color:"#8a4a25",emissive:"#000000",emissiveStrength:1,metalness:.65,roughness:.78,opacity:1,recipe:"rust",accent:"#d9762f",density:5},{id:"dark-steel",name:"Dark Steel",group:"Metals",color:"#4a5058",emissive:"#000000",emissiveStrength:1,metalness:.95,roughness:.42,opacity:1,recipe:"brushed",accent:"#22262c",density:3},{id:"titanium",name:"Brushed Titanium",group:"Metals",color:"#9aa0a8",emissive:"#000000",emissiveStrength:1,metalness:1,roughness:.38,opacity:1,recipe:"brushed",accent:"#6d737b",density:5},{id:"rose-gold",name:"Rose Gold",group:"Metals",color:"#e2a08c",emissive:"#000000",emissiveStrength:1,metalness:1,roughness:.22,opacity:1,recipe:"polished",accent:"#f6cdbd",density:4},{id:"black-plastic",name:"Matte Black Plastic",group:"Metals",color:"#23262b",emissive:"#000000",emissiveStrength:1,metalness:.1,roughness:.62,opacity:1,recipe:"speckle",accent:"#3a3f47",density:8},{id:"oak-planks",name:"Oak Wood Planks",group:"Wood, Stone & Nature",color:"#b07b45",emissive:"#000000",emissiveStrength:1,metalness:0,roughness:.68,opacity:1,recipe:"planks",accent:"#6d4523",density:4},{id:"red-brick",name:"Red Brick Wall",group:"Wood, Stone & Nature",color:"#a04a3c",emissive:"#000000",emissiveStrength:1,metalness:0,roughness:.82,opacity:1,recipe:"bricks",accent:"#c9b7a4",density:5},{id:"white-marble",name:"White Marble",group:"Wood, Stone & Nature",color:"#eef0f2",emissive:"#000000",emissiveStrength:1,metalness:.05,roughness:.24,opacity:1,recipe:"veins",accent:"#8d97a5",density:3},{id:"rough-concrete",name:"Rough Concrete",group:"Wood, Stone & Nature",color:"#9a9a98",emissive:"#000000",emissiveStrength:1,metalness:0,roughness:.92,opacity:1,recipe:"speckle",accent:"#6c6c6a",density:7},{id:"green-grass",name:"Green Grass",group:"Wood, Stone & Nature",color:"#4f9b3a",emissive:"#000000",emissiveStrength:1,metalness:0,roughness:.88,opacity:1,recipe:"blades",accent:"#2c6620",density:9},{id:"cobblestone",name:"Cobblestone",group:"Wood, Stone & Nature",color:"#7d7f83",emissive:"#000000",emissiveStrength:1,metalness:0,roughness:.8,opacity:1,recipe:"cells",accent:"#4f5154",density:6},{id:"volcanic-basalt",name:"Volcanic Basalt",group:"Wood, Stone & Nature",color:"#3a3d42",emissive:"#000000",emissiveStrength:1,metalness:.1,roughness:.85,opacity:1,recipe:"speckle",accent:"#1d1f22",density:10},{id:"sandstone",name:"Sandstone",group:"Wood, Stone & Nature",color:"#c9a97c",emissive:"#000000",emissiveStrength:1,metalness:0,roughness:.78,opacity:1,recipe:"bands",accent:"#9b7c53",density:6},{id:"satin-fabric",name:"Satin Fabric",group:"Wood, Stone & Nature",color:"#7b5ea7",emissive:"#000000",emissiveStrength:1,metalness:0,roughness:.55,opacity:1,recipe:"weave",accent:"#4e3a6d",density:12},{id:"clear-glass",name:"Clear Glass",group:"Glass, Neon & Stylized",color:"#dff1ff",emissive:"#000000",emissiveStrength:1,metalness:0,roughness:.04,opacity:.24,recipe:"flat",accent:"#ffffff",density:1},{id:"frosted-ice",name:"Frosted Ice",group:"Glass, Neon & Stylized",color:"#cfeaff",emissive:"#0b1a26",emissiveStrength:.6,metalness:0,roughness:.46,opacity:.72,recipe:"crystal",accent:"#8fc9f0",density:8},{id:"ocean-water",name:"Ocean Water",group:"Glass, Neon & Stylized",color:"#1f6f9c",emissive:"#06222f",emissiveStrength:.5,metalness:.1,roughness:.14,opacity:.82,recipe:"waves",accent:"#8fd8f0",density:4},{id:"neon-cyan",name:"Neon Cyan",group:"Glass, Neon & Stylized",color:"#5cf2ff",emissive:"#5cf2ff",emissiveStrength:2.4,metalness:0,roughness:.2,opacity:1,recipe:"flat",accent:"#aef9ff",density:1},{id:"neon-magma",name:"Neon Magma",group:"Glass, Neon & Stylized",color:"#ff6a2b",emissive:"#ff5a12",emissiveStrength:2.6,metalness:0,roughness:.24,opacity:1,recipe:"flat",accent:"#ffc46b",density:1},{id:"carbon-fiber",name:"Carbon Fiber",group:"Glass, Neon & Stylized",color:"#1c1e22",emissive:"#000000",emissiveStrength:1,metalness:.6,roughness:.3,opacity:1,recipe:"weave",accent:"#3c4149",density:16},{id:"car-paint",name:"Glossy Car Paint",group:"Glass, Neon & Stylized",color:"#c81f3a",emissive:"#000000",emissiveStrength:1,metalness:.85,roughness:.09,opacity:1,recipe:"flakes",accent:"#f3f6fa",density:22},{id:"toon-anime",name:"Toon Anime Shader",group:"Glass, Neon & Stylized",color:"#ffd166",emissive:"#3a2400",emissiveStrength:.35,metalness:0,roughness:.7,opacity:1,recipe:"bands",accent:"#a86f1c",density:3},{id:"emerald-gem",name:"Emerald Gemstone",group:"Glass, Neon & Stylized",color:"#0f9d58",emissive:"#00301a",emissiveStrength:.8,metalness:.1,roughness:.06,opacity:.86,recipe:"crystal",accent:"#8affc4",density:6},{id:"graphite",name:"Graphite Composite",group:"Glass, Neon & Stylized",color:"#4c5158",emissive:"#000000",emissiveStrength:1,metalness:.45,roughness:.5,opacity:1,recipe:"speckle",accent:"#23262b",density:11}];t.MATERIAL_PRESETS=i;function r(e){return i.find((t=>t.id===e))??null}function a(e){const t=e.replace("#",""),o=3===t.length?t.split("").map((e=>e+e)).join(""):t,n=Number.parseInt(o,16);return Number.isFinite(n)?[n>>16&255,n>>8&255,255&n]:[128,128,128]}function c(e,t,o){let n=374761393*e+668265263*t+2246822519*o;return n=1274126177*(n^n>>>13),((n^n>>>16)>>>0)/4294967295}function l(e){return e*e*(3-2*e)}function g(e,t,o){const n=Math.floor(e),A=Math.floor(t),s=l(e-n),i=l(t-A),r=c(n,A,o),a=c(n+1,A,o),g=c(n,A+1,o),d=r+(a-r)*s;return d+(g+(c(n+1,A+1,o)-g)*s-d)*i}function d(e,t,o,n){let A=0,s=.5,i=1;for(let r=0;r<o;r++)A+=g(e*i,t*i,n+131*r)*s,s*=.5,i*=2;return A/(1-Math.pow(.5,o))}function u(e){return Array.isArray(e)?{r:e[0],g:e[1],b:e[2]}:e}function m(e,t,o){const n=u(e),A=u(t),s=Math.min(1,Math.max(0,o));return{r:n.r+(A.r-n.r)*s,g:n.g+(A.g-n.g)*s,b:n.b+(A.b-n.b)*s}}function p(e){const t=document.createElement("canvas");return t.width=e,t.height=e,t}function h(e,t,o){const n=a(e.color),A=a(e.accent),s=Math.max(1,e.density);switch(e.recipe){case"flat":default:return{color:{r:n[0],g:n[1],b:n[2]},roughness:e.roughness,bump:.5};case"brushed":{const i=.65*g(t*s*90,o*s*2.5,11)+.35*g(t*s*220,o*s*6,23);return{color:m(A,n,.35+.65*i),roughness:Math.min(1,e.roughness+.22*(i-.5)),bump:i}}case"polished":{const i=d(t*s*4,o*s*4,3,31);return{color:m(A,n,.75+.25*i),roughness:Math.min(1,e.roughness+.06*(i-.5)),bump:.5+.12*(i-.5)}}case"rust":{const e=d(t*s*3.2,o*s*3.2,5,43),i=g(t*s*60,o*s*60,57),r=Math.min(1,Math.max(0,2.4*(e-.35)));return{color:m(n,A,.9*r+.1*i),roughness:Math.min(1,.45+.5*r),bump:.35+.5*r+.15*i}}case"planks":{const i=Math.floor(o*s),r=6*(o*s-i),a=r<.06||r>5.94?1:0,l=d(t*s*5+9*(.7*c(i,3,67)),o*s*26,4,71+i);let g=m(A,n,.45+.4*c(i,7,89)+.25*l);return a&&(g=m(g,A,.75)),{color:g,roughness:Math.min(1,e.roughness+(a?.1:0)+.12*(l-.5)),bump:a?.12:.45+.4*l}}case"bricks":{const i=s,r=Math.floor(o*i),a=r%2==0?0:.5,l=(t*s*.5+a)%1,g=o*i%1,u=l<.06||l>.94||g<.1||g>.9?1:0,p=d(40*t,40*o,3,97+r);let h=m(A,n,.55+.45*c(r,Math.floor(t*s*.5+a),103));return h=m(h,{r:.85*h.r,g:.85*h.g,b:.85*h.b},.5*p),u&&(h=m(h,A,.85)),{color:h,roughness:Math.min(1,e.roughness+(u?.08:0)),bump:u?.08:.55+.3*p}}case"veins":{const i=2.4*d(t*s*2,o*s*2,4,113),r=Math.abs(Math.sin((t*s+i)*Math.PI*2)),a=Math.pow(1-r,12);return{color:m(n,A,.85*a+.06*d(60*t,60*o,3,127)),roughness:Math.min(1,e.roughness+(a>.5?.1:0)),bump:.5+.08*(1-a)}}case"speckle":{const i=.7*d(t*s*3,o*s*3,4,139)+.3*g(t*s*70,o*s*70,149);return{color:m(A,n,.3+.7*i),roughness:Math.min(1,e.roughness+.18*(i-.5)),bump:i}}case"blades":{const i=g(t*s*18,o*s*4,151),r=.65*i+.35*d(t*s*2.5,o*s*2.5,3,157);return{color:m(A,n,.25+.75*r),roughness:Math.min(1,e.roughness+.1*(r-.5)),bump:i}}case"cells":{const i=t*s,r=o*s,a=Math.floor(i),l=Math.floor(r),d=i-a,u=r-l,p=.3*c(a,l,163),h=.3*c(a,l,167),I=Math.hypot(d-.5-p,u-.5-h)<.42?1:0,f=g(30*i,30*r,173);return{color:I?m(A,n,.55+.45*f):m(n,A,.7),roughness:Math.min(1,e.roughness+(I?0:.08)),bump:I?.75:.2}}case"waves":{const i=.5*Math.sin((t*s+o*s*.6)*Math.PI*2)+.5,r=Math.pow(i,6),a=d(24*t,24*o,3,179);return{color:m(n,A,.8*r+.12*a),roughness:Math.min(1,e.roughness+.12*r),bump:.6*i+.2*a}}case"crystal":{const i=.6*Math.abs(Math.sin((t*s+o*s*.35)*Math.PI))+.4*d(30*t,30*o,4,191);return{color:m(n,A,.7*i),roughness:Math.min(1,e.roughness+.25*(i-.5)),bump:i}}case"weave":{const i=t*s,r=o*s,a=(Math.floor(i)+Math.floor(r))%2==0?Math.sin(r%1*Math.PI):Math.sin(i%1*Math.PI),c=g(12*i,12*r,197);return{color:m(A,n,.25+.55*a+.2*c),roughness:Math.min(1,e.roughness+.2*(a-.5)),bump:.8*a+.2*c}}case"bands":{const i=c(Math.floor(o*s*3),5,199),r=g(45*t,45*o,211);return{color:m(A,n,.35+.5*i+.15*r),roughness:Math.min(1,e.roughness+.08*(i-.5)),bump:.5+.1*r}}case"flakes":{const i=g(t*s*4,o*s*4,223),r=d(6*t,6*o,3,227);return{color:m(n,A,.7*Math.pow(i,6)+.12*r),roughness:Math.min(1,e.roughness+.08*(i-.5)),bump:.5+.1*(i-.5)}}}}t.MATERIAL_GROUPS=["Metals","Wood, Stone & Nature","Glass, Neon & Stylized"];const I=new Map,f=new Map;function C(e){const t=I.get(e.id);if(t)return t;const o=function(e,t){const o=p(t),n=p(A),s=p(A),i=o.getContext("2d"),r=n.getContext("2d"),a=s.getContext("2d");if(!i||!r||!a)return{albedo:o,roughness:n,bump:s};const c=i.createImageData(t,t),l=r.createImageData(A,A),g=a.createImageData(A,A);for(let o=0;o<t;o++)for(let n=0;n<t;n++){const A=h(e,n/t,o/t),s=4*(o*t+n);c.data[s]=Math.round(Math.min(255,Math.max(0,A.color.r))),c.data[s+1]=Math.round(Math.min(255,Math.max(0,A.color.g))),c.data[s+2]=Math.round(Math.min(255,Math.max(0,A.color.b))),c.data[s+3]=255}for(let t=0;t<A;t++)for(let o=0;o<A;o++){const n=h(e,o/A,t/A),s=4*(t*A+o),i=Math.round(Math.min(255,Math.max(0,255*(n.roughness-e.roughness+.5))));l.data[s]=i,l.data[s+1]=i,l.data[s+2]=i,l.data[s+3]=255;const r=Math.round(Math.min(255,Math.max(0,255*n.bump)));g.data[s]=r,g.data[s+1]=r,g.data[s+2]=r,g.data[s+3]=255}return i.putImageData(c,0,0),r.putImageData(l,0,0),a.putImageData(g,0,0),{albedo:o,roughness:n,bump:s}}(e,n);return I.set(e.id,o),o}const y=new Map;function E(e){const u="string"==typeof e?e:e?.imageUrl;if(!u)return null;let t=y.get(u);return t||(t=new Image,t.onload=()=>{window.__lookEngine&&window.__lookEngine.onTexLoaded&&window.__lookEngine.onTexLoaded()},t.src=u,y.set(u,t)),t.complete&&t.naturalWidth>0?t:null}function B(e){const t=e.presetId?r(e.presetId):null,o=t?C(t):null,n=E(e.imageUrl),rMap=E(e.roughnessUrl),bMap=E(e.normalUrl),A=a(e.color).map((e=>e/255)),s=a(e.emissive).map((e=>e/255)),i=t&&!n?a(t.color):[255,255,255],c=t&&!n?[1/Math.max(i[0]/255,.05),1/Math.max(i[1]/255,.05),1/Math.max(i[2]/255,.05)]:[1,1,1];return{color:A,emissive:s,emissiveStrength:e.emissiveStrength??1,metalness:e.metalness??.04,roughness:e.roughness??.36,specular:e.specular??.5,normalStrength:e.normalStrength??1,opacity:e.opacity??1,blendMode:e.blendMode||"blend",uvRepeat:e.uvRepeat??1,uvScaleY:e.uvScaleY??e.uvRepeat??1,uvOffsetX:e.uvOffsetX??0,uvOffsetY:e.uvOffsetY??0,uvRotation:e.uvRotation??0,texMapping:e.texMapping??0,texStrength:e.texStrength??1,texTint:c,albedo:n||(o?o.albedo:null),roughnessMap:rMap||(o?o.roughness:null),bumpMap:bMap||(o?o.bump:null)}}})),__define("lib/media",(function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TEXT_TEXTURE_WIDTH=t.TEXT_TEXTURE_HEIGHT=void 0,t.aspectPlaneScale=function(e,t,o=2.4){const n=Number.isFinite(e)&&e>0?e:16,A=Number.isFinite(t)&&t>0?t:9,s=Math.min(8,Math.max(.12,n/A)),i=Math.min(6,Math.max(.3,o/s));return[o,i,1]},t.primeLayerTexture=function(e,t){if("undefined"==typeof Image)return;const o=new Image;o.onload=()=>t(),o.onerror=()=>t(),o.src=e},t.readLayerImage=async function(e){if("undefined"==typeof document)return null;if(!e.type.startsWith("image/")&&!/\.(png|jpe?g|webp|gif|avif|bmp)$/i.test(e.name))return null;const t=await function(e){return new Promise(((t,o)=>{const n=new FileReader;n.onload=()=>t(String(n.result||"")),n.onerror=()=>o(n.error??new Error("The file could not be read.")),n.readAsDataURL(e)}))}(e),o=await function(e){return new Promise(((t,o)=>{const n=new Image;n.onload=()=>t(n),n.onerror=()=>o(new Error("The image could not be decoded.")),n.src=e}))}(t),n=Math.min(1,A/Math.max(o.naturalWidth,o.naturalHeight)),s=Math.max(1,Math.round(o.naturalWidth*n)),i=Math.max(1,Math.round(o.naturalHeight*n)),r=document.createElement("canvas");r.width=s,r.height=i;const a=r.getContext("2d");if(!a)return null;a.drawImage(o,0,0,s,i);const c="image/png"===e.type||"image/webp"===e.type||/\.(png|webp)$/i.test(e.name);return{dataUrl:c?r.toDataURL("image/png"):r.toDataURL("image/jpeg",.86),width:s,height:i}},t.textTextureDataUrl=function(e){if("undefined"==typeof document)return null;const t=e.replace(/\s+/g," ").trim()||"Text",A=document.createElement("canvas");A.width=o,A.height=n;const i=A.getContext("2d");if(!i)return null;const r=i.createLinearGradient(0,0,A.width,A.height);r.addColorStop(0,"#111722"),r.addColorStop(.58,"#0c1018"),r.addColorStop(1,"#161d29"),i.fillStyle=r,i.fillRect(0,0,A.width,A.height),i.fillStyle="rgba(110, 231, 183, 0.16)",i.fillRect(0,0,A.width,6),i.fillStyle="#6ee7b7",i.fillRect(64,132,8,248),i.textBaseline="middle",i.textAlign="left";const a=[92,78,64,52,42];let c=[t],l=a[0];for(const e of a){i.font=`800 ${e}px Inter, system-ui, -apple-system, sans-serif`;const o=s(i,t,820,4);if(o.length*e*1.14<=340||e===a[a.length-1]){c=o,l=e;break}}i.font=`800 ${l}px Inter, system-ui, -apple-system, sans-serif`;const g=1.14*l,d=c.length*g,u=A.height/2-d/2+g/2;return c.forEach(((e,t)=>{i.fillStyle="#f4f7fb",i.fillText(e,104,u+t*g)})),i.fillStyle="rgba(255, 255, 255, 0.08)",i.fillRect(0,A.height-4,A.width,4),A.toDataURL("image/png")},t.wrapCaption=s;const o=1024;t.TEXT_TEXTURE_WIDTH=o;const n=512;t.TEXT_TEXTURE_HEIGHT=n;const A=1400;function s(e,t,o,n){const A=t.replace(/\s+/g," ").trim().split(" ").filter(Boolean);if(!A.length)return[""];const s=[];let i="";for(const t of A){const A=i?`${i} ${t}`:t;if(!i||e.measureText(A).width<=o)i=A;else if(s.push(i),i=t,s.length===n)break}if(s.length<n&&i&&s.push(i),s.length===n){if(s.join(" ").length<t.replace(/\s+/g," ").trim().length){let t=s[n-1];for(;t.length>1&&e.measureText(`${t}…`).width>o;)t=t.slice(0,-1);s[n-1]=`${t.trimEnd()}…`}}return s}})),__define("lib/gizmo",(function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.HOVER_COLOR=t.AXIS_COLORS=void 0,t.buildGizmo=function(e){const{mode:t,target:s,size:i,rotation:p,local:h,view:I,hover:f}=e,C=c(p,h),y=[];if("translate"===t){const e=.62*i,t=i,c=.075*i;for(let n=0;n<3;n+=1){const A=C[n],a=r(n,f,{kind:"axis",axis:n}),g=(0,o.add)(s,(0,o.scale)(A,e)),d=(0,o.add)(s,(0,o.scale)(A,t)),u=l(g,A,t-e,c);y.push({lines:[{a:s,b:g,color:a}],triangles:u.map((e=>({points:e.points,color:a}))),pick:{kind:"segment",a:(0,o.add)(s,(0,o.scale)(A,.2*i)),b:d,radius:15},hit:{kind:"axis",axis:n}})}const d=.32*i,u=.085*i,p=[{axis:0,first:1,second:2},{axis:1,first:2,second:0},{axis:2,first:0,second:1}];for(const e of p){const t=(0,o.add)(s,(0,o.add)((0,o.scale)(C[e.first],d),(0,o.scale)(C[e.second],d))),i=f&&a(f,{kind:"plane",axis:e.axis})?A:[(n[e.first][0]+n[e.second][0])/2,(n[e.first][1]+n[e.second][1])/2,(n[e.first][2]+n[e.second][2])/2];y.push({lines:[],triangles:g(t,C[e.first],C[e.second],u).map((e=>({points:e,color:i}))),pick:{kind:"point",at:t,radius:14},hit:{kind:"plane",axis:e.axis}})}const h=.095*i,E=f&&a(f,{kind:"center"})?A:[.85,.88,.95];return y.push({lines:[],triangles:m(s,I,h).map((e=>({points:e,color:E}))),pick:{kind:"point",at:s,radius:13},hit:{kind:"center"}}),y}if("rotate"===t){const e=.85*i;for(let t=0;t<3;t+=1){const o=u(s,C[t],e),n=r(t,f,{kind:"ring",axis:t}),A=[];for(let e=0;e<o.length;e++)A.push({a:o[e],b:o[(e+1)%o.length],color:n});y.push({lines:A,triangles:[],pick:{kind:"ring",points:o,radius:16},hit:{kind:"ring",axis:t}})}const t=f&&a(f,{kind:"center"})?A:[.85,.88,.95];return y.push({lines:[],triangles:m(s,I,.08*i).map((e=>({points:e,color:t}))),pick:{kind:"point",at:s,radius:10},hit:{kind:"center"}}),y}if("universal"===t){const e=.65*i,t=.9*i,n=.065*i;for(let A=0;A<3;A+=1){const a=C[A],c=r(A,f,{kind:"axis",axis:A}),g=(0,o.add)(s,(0,o.scale)(a,e)),d=(0,o.add)(s,(0,o.scale)(a,t)),u=l(g,a,t-e,n);y.push({lines:[{a:s,b:g,color:c}],triangles:u.map((e=>({points:e.points,color:c}))),pick:{kind:"segment",a:(0,o.add)(s,(0,o.scale)(a,.2*i)),b:d,radius:14},hit:{kind:"axis",axis:A}})}const c=1.05*i;for(let e=0;e<3;e+=1){const t=u(s,C[e],c),o=r(e,f,{kind:"ring",axis:e}),n=[];for(let e=0;e<t.length;e++)n.push({a:t[e],b:t[(e+1)%t.length],color:o});y.push({lines:n,triangles:[],pick:{kind:"ring",points:t,radius:14},hit:{kind:"ring",axis:e}})}const g=.42*i,p=.055*i;for(let e=0;e<3;e+=1){const t=C[e],n=r(e,f,{kind:"scale",axis:e}),A=(0,o.add)(s,(0,o.scale)(t,g));y.push({lines:[],triangles:d(A,p).map((e=>({points:e,color:n}))),pick:{kind:"point",at:A,radius:14},hit:{kind:"scale",axis:e}})}const h=.085*i,E=f&&a(f,{kind:"center"})?A:[.85,.88,.95];return y.push({lines:[],triangles:m(s,I,h).map((e=>({points:e,color:E}))),pick:{kind:"point",at:s,radius:12},hit:{kind:"center"}}),y}const E=.9*i,B=.085*i;for(let e=0;e<3;e+=1){const t=C[e],n=r(e,f,{kind:"axis",axis:e}),A=(0,o.add)(s,(0,o.scale)(t,E)),i=(0,o.add)(s,(0,o.scale)(t,E+B));y.push({lines:[{a:s,b:A,color:n}],triangles:d(i,B).map((e=>({points:e,color:n}))),pick:{kind:"point",at:i,radius:18},hit:{kind:"axis",axis:e}})}const b=f&&a(f,{kind:"center"})?A:[.85,.88,.95];return y.push({lines:[],triangles:d(s,1.1*B).map((e=>({points:e,color:b}))),pick:{kind:"point",at:s,radius:14},hit:{kind:"center"}}),y},t.distanceToPolyline=function(e,t,o){let n=1/0;for(let A=0;A<o.length;A++){const s=o[A],i=o[(A+1)%o.length];n=Math.min(n,p(e,t,s.x,s.y,i.x,i.y))}return n},t.distanceToSegment=p,t.facing=function(e,t){return(0,o.dot)(e,t)},t.gizmoAxisDirection=function(e,t,o){return c(e,t)[o]},t.gizmoPlaneAxes=function(e,t,o){const n=c(e,t);return 0===o?[n[1],n[2]]:1===o?[n[2],n[0]]:[n[0],n[1]]},t.screenAngle=function(e,t,o,n){return Math.atan2(n-t,o-e)};var o=e("lib/math3d");const n=[[.957,.263,.263],[.549,.855,.353],[.298,.549,.957]];t.AXIS_COLORS=n;const A=[1,.82,.25];t.HOVER_COLOR=A;const s=48,i=12;function r(e,t,o){return t&&t.kind===o.kind&&t.axis===o.axis?A:n[e]}function a(e,t){return e.kind===t.kind&&(!("axis"in e)||!("axis"in t)||e.axis===t.axis)}function c(e,t){return t?[(0,o.rotateEuler)([1,0,0],e),(0,o.rotateEuler)([0,1,0],e),(0,o.rotateEuler)([0,0,1],e)]:[[1,0,0],[0,1,0],[0,0,1]]}function l(e,t,n,A){const s=(0,o.normalize)(t),r=Math.abs(s[1])>.9?[1,0,0]:[0,1,0],a=(0,o.normalize)((0,o.cross)(s,r)),c=(0,o.normalize)((0,o.cross)(a,s)),l=(0,o.add)(e,(0,o.scale)(s,n)),g=[];for(let t=0;t<i;t++){const n=t/i*Math.PI*2,s=(t+1)/i*Math.PI*2,r=(0,o.add)(e,(0,o.add)((0,o.scale)(a,Math.cos(n)*A),(0,o.scale)(c,Math.sin(n)*A))),d=(0,o.add)(e,(0,o.add)((0,o.scale)(a,Math.cos(s)*A),(0,o.scale)(c,Math.sin(s)*A)));g.push({points:[r,d,l],color:[0,0,0]})}return g}function g(e,t,n,A){const s=(0,o.add)(e,(0,o.add)((0,o.scale)(t,A),(0,o.scale)(n,A))),i=(0,o.add)(e,(0,o.add)((0,o.scale)(t,-A),(0,o.scale)(n,A))),r=(0,o.add)(e,(0,o.add)((0,o.scale)(t,-A),(0,o.scale)(n,-A)));return[[s,i,r],[s,r,(0,o.add)(e,(0,o.add)((0,o.scale)(t,A),(0,o.scale)(n,-A)))]]}function d(e,t){const n=[[-t,-t,-t],[t,-t,-t],[t,t,-t],[-t,t,-t],[-t,-t,t],[t,-t,t],[t,t,t],[-t,t,t]],A=[[0,3,2,1],[4,5,6,7],[0,4,7,3],[1,2,6,5],[3,7,6,2],[0,1,5,4]],s=[];for(const t of A){const A=(0,o.add)(e,n[t[0]]),i=(0,o.add)(e,n[t[1]]),r=(0,o.add)(e,n[t[2]]),a=(0,o.add)(e,n[t[3]]);s.push([A,i,r]),s.push([A,r,a])}return s}function u(e,t,n){const A=Math.abs(t[1])>.9?[1,0,0]:[0,1,0],i=(0,o.normalize)((0,o.cross)(t,A)),r=(0,o.normalize)((0,o.cross)(t,i)),a=[];for(let t=0;t<s;t++){const A=t/s*Math.PI*2;a.push((0,o.add)(e,(0,o.add)((0,o.scale)(i,Math.cos(A)*n),(0,o.scale)(r,Math.sin(A)*n))))}return a}function m(e,t,n){const A=[];for(let s=0;s<24;s++){const i=s/24*Math.PI*2,r=(s+1)/24*Math.PI*2,a=(0,o.add)(e,(0,o.add)((0,o.scale)(t.right,Math.cos(i)*n),(0,o.scale)(t.up,Math.sin(i)*n))),c=(0,o.add)(e,(0,o.add)((0,o.scale)(t.right,Math.cos(r)*n),(0,o.scale)(t.up,Math.sin(r)*n)));A.push([e,a,c])}return A}function p(e,t,o,n,A,s){const i=A-o,r=s-n;let a=((e-o)*i+(t-n)*r)/(i*i+r*r||1);return a=Math.min(1,Math.max(0,a)),Math.hypot(e-(o+i*a),t-(n+r*a))}})),__define("lib/wasm",(function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.WasmEngine=t.ENGINE_ABI_VERSION=void 0,t.triangleSoup=function(e){let t=0;for(const o of e.faces)t+=Math.max(0,o.length-2);const o=new Float32Array(3*e.vertices.length);for(let t=0;t<e.vertices.length;t++)o[3*t]=e.vertices[t][0],o[3*t+1]=e.vertices[t][1],o[3*t+2]=e.vertices[t][2];const n=new Uint32Array(3*t);let A=0;for(const t of e.faces)for(let e=1;e<t.length-1;e++)n[A++]=t[0],n[A++]=t[e],n[A++]=t[e+1];return{vertices:o,triangles:n}};t.ENGINE_ABI_VERSION=1;class o{disposed=!1;constructor(e){this.exports=e,this.abi=e.toon_abi_version()}static fromBytes(e){try{const t=new WebAssembly.Module(e),n=new WebAssembly.Instance(t,{}),A=new o(n.exports);return 1!==A.abi?(A.dispose(),null):A}catch{return null}}static async load(e="/engine.wasm"){try{const t=await fetch(e);return t.ok?o.fromBytes(await t.arrayBuffer()):null}catch{return null}}upload(e){const t=this.exports.toon_alloc(e.byteLength);if(!t)throw new Error("wasm out of memory");return e instanceof Float32Array?new Float32Array(this.exports.memory.buffer,t,e.length).set(e):new Uint32Array(this.exports.memory.buffer,t,e.length).set(e),t}createMesh(e,t){if(this.disposed)return 0;const o=this.upload(e),n=this.upload(t);try{return this.exports.toon_mesh_new(o,e.length/3,n,t.length/3)}finally{this.exports.toon_free(o,e.byteLength),this.exports.toon_free(n,t.byteLength)}}refit(e,t){if(this.disposed||!e)return!1;const o=this.upload(t);try{return this.exports.toon_mesh_refit(e,o)>0}finally{this.exports.toon_free(o,t.byteLength)}}raycast(e,t,o,n=1/0){if(this.disposed||!e)return null;const A=this.exports.toon_mesh_raycast(e,t[0],t[1],t[2],o[0],o[1],o[2],Number.isFinite(n)?n:-1);return A>=0?{t:A,face:this.exports.toon_mesh_last_face(e)}:null}verticesInSphere(e,t,o){if(this.disposed||!e)return[];const n=4096,A=this.exports.toon_alloc(16384);if(!A)return[];try{const s=this.exports.toon_mesh_vertices_in_sphere(e,t[0],t[1],t[2],o,A,n),i=Math.min(s,n);return Array.from(new Uint32Array(this.exports.memory.buffer,A,i))}finally{this.exports.toon_free(A,16384)}}free(e){!this.disposed&&e&&this.exports.toon_mesh_free(e)}dispose(){this.disposed=!0}}t.WasmEngine=o})),__define("lib/bvh",(function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.buildMeshBVH=i,t.invalidateBVH=function(e){c.delete(e)},t.meshBVH=function(e,t=0){const o=c.get(e);if(o&&o.version===t)return o.bvh;const n=i(e);return c.set(e,{version:t,bvh:n}),n},t.raycastBVH=function(e,t,n=1/0){if(0===e.triangleCount)return null;const A=t.origin[0],i=t.origin[1],c=t.origin[2],l=t.dir[0],g=t.dir[1],d=t.dir[2],u=Math.abs(l)>=1e-12?1/l:0,m=Math.abs(g)>=1e-12?1/g:0,p=Math.abs(d)>=1e-12?1/d:0,h=e.bounds,I=e.left,f=e.right,C=e.start,y=e.count,E=e.order,B=e.positions;if(r(h,0,A,i,c,l,g,d,u,m,p,n)<0)return null;let b=n,v=-1,Q=0;s[Q++]=0;for(;Q>0;){const e=s[--Q],t=I[e];if(t<0){const t=C[e],o=t+y[e];for(let e=t;e<o;e++){const t=E[e],o=a(A,i,c,l,g,d,B,9*t);o>0&&o<b&&(b=o,v=t)}continue}const o=f[e],n=r(h,t,A,i,c,l,g,d,u,m,p,b),M=r(h,o,A,i,c,l,g,d,u,m,p,b);n<0&&M<0||(n<0?s[Q++]=o:M<0?s[Q++]=t:n<=M?(s[Q++]=o,s[Q++]=t):(s[Q++]=t,s[Q++]=o))}return o.rayTriangle,v>=0?{t:b,faceIndex:e.faceIndex[v],triangle:v}:null},t.verticesInSphere=function(e,t,o,n){if(0===e.triangleCount)return[];const A=new Set,i=n*n,r=t[0],a=t[1],c=t[2],l=e.bounds,g=e.left,d=e.right,u=e.start,m=e.count,p=e.order,h=e.triVerts;let I=0;s[I++]=0;for(;I>0;){const e=s[--I],t=6*e,n=r<l[t]?l[t]-r:r>l[t+3]?r-l[t+3]:0,f=a<l[t+1]?l[t+1]-a:a>l[t+4]?a-l[t+4]:0,C=c<l[t+2]?l[t+2]-c:c>l[t+5]?c-l[t+5]:0;if(n*n+f*f+C*C>i)continue;const y=g[e];if(y<0){const t=u[e],n=t+m[e];for(let e=t;e<n;e++){const t=3*p[e];for(let e=0;e<3;e++){const n=h[t+e],s=o[n];if(!s)continue;const l=s[0]-r,g=s[1]-a,d=s[2]-c;l*l+g*g+d*d<=i&&A.add(n)}}}else s[I++]=y,s[I++]=d[e]}return[...A]};var o=e("lib/picking");const n=6,A=1e-6,s=new Int32Array(128);function i(e){const t=function(e){let t=0;const o=e.faces;for(let e=0;e<o.length;e++){const n=o[e].length;n>2&&(t+=n-2)}return t}(e),{positions:o,triBounds:A,centroids:s,faceIndex:i,triVerts:r}=function(e,t){const o=new Float64Array(9*t),n=new Float64Array(6*t),A=new Float64Array(3*t),s=new Int32Array(t),i=new Int32Array(3*t),r=e.vertices,a=e.faces;let c=0;for(let e=0;e<a.length;e++){const t=a[e],l=t.length;if(l<3)continue;const g=t[0],d=r[g],u=d[0],m=d[1],p=d[2];for(let a=1;a<l-1;a++){const l=t[a],d=t[a+1],h=r[l],I=r[d],f=h[0],C=h[1],y=h[2],E=I[0],B=I[1],b=I[2],v=9*c;o[v]=u,o[v+1]=m,o[v+2]=p,o[v+3]=f,o[v+4]=C,o[v+5]=y,o[v+6]=E,o[v+7]=B,o[v+8]=b;const Q=6*c;n[Q]=u<f?u<E?u:E:f<E?f:E,n[Q+1]=m<C?m<B?m:B:C<B?C:B,n[Q+2]=p<y?p<b?p:b:y<b?y:b,n[Q+3]=u>f?u>E?u:E:f>E?f:E,n[Q+4]=m>C?m>B?m:B:C>B?C:B,n[Q+5]=p>y?p>b?p:b:y>b?y:b;const M=3*c;A[M]=(u+f+E)*(1/3),A[M+1]=(m+C+B)*(1/3),A[M+2]=(p+y+b)*(1/3),s[c]=e,i[M]=g,i[M+1]=l,i[M+2]=d,c++}}return{positions:o,triBounds:n,centroids:A,faceIndex:s,triVerts:i}}(e,t),a=new Int32Array(t);for(let e=0;e<t;e++)a[e]=e;const c=Math.max(1,2*t),l=new Float64Array(6*c),g=new Int32Array(c),d=new Int32Array(c),u=new Int32Array(c),m=new Int32Array(c);let p=0;return t>0?function e(t,o){const i=p++;u[i]=t,m[i]=o,g[i]=-1,d[i]=-1;let r=1/0,c=1/0,h=1/0,I=-1/0,f=-1/0,C=-1/0,y=1/0,E=1/0,B=1/0,b=-1/0,v=-1/0,Q=-1/0;const M=t+o;for(let e=t;e<M;e++){const t=a[e],o=6*t,n=A[o],i=A[o+1],l=A[o+2],g=A[o+3],d=A[o+4],u=A[o+5];n<r&&(r=n),i<c&&(c=i),l<h&&(h=l),g>I&&(I=g),d>f&&(f=d),u>C&&(C=u);const m=3*t,p=s[m],M=s[m+1],k=s[m+2];p<y&&(y=p),M<E&&(E=M),k<B&&(B=k),p>b&&(b=p),M>v&&(v=M),k>Q&&(Q=k)}const k=6*i;if(l[k]=r,l[k+1]=c,l[k+2]=h,l[k+3]=I,l[k+4]=f,l[k+5]=C,o<=n)return i;const w=b-y,x=v-E,S=Q-B,D=o>>1;return function(e,t,o,n){let A=e,i=e+t-1;const r=e+o;for(;A<i;){const e=s[3*a[A+i>>1]+n];let t=A,o=i;for(;t<=o;){for(;s[3*a[t]+n]<e;)t++;for(;s[3*a[o]+n]>e;)o--;if(t<=o){const e=a[t];a[t]=a[o],a[o]=e,t++,o--}}if(r<=o)i=o;else{if(!(r>=t))break;A=t}}}(t,o,D,w>=x&&w>=S?0:x>=S?1:2),g[i]=e(t,D),d[i]=e(t+D,o-D),i}(0,t):(u[0]=0,m[0]=0,p=1),{triangleCount:t,positions:o,faceIndex:i,triVerts:r,order:a,bounds:l,left:g,right:d,start:u,count:m,nodeCount:p}}function r(e,t,o,n,A,s,i,r,a,c,l,g){const d=6*t;let u=0,m=g;const p=e[d],h=e[d+3];if(Math.abs(s)<1e-12){if(o<p||o>h)return-1}else{let e=(p-o)*a,t=(h-o)*a;if(e>t){const o=e;e=t,t=o}if(e>u&&(u=e),t<m&&(m=t),u>m)return-1}const I=e[d+1],f=e[d+4];if(Math.abs(i)<1e-12){if(n<I||n>f)return-1}else{let e=(I-n)*c,t=(f-n)*c;if(e>t){const o=e;e=t,t=o}if(e>u&&(u=e),t<m&&(m=t),u>m)return-1}const C=e[d+2],y=e[d+5];if(Math.abs(r)<1e-12){if(A<C||A>y)return-1}else{let e=(C-A)*l,t=(y-A)*l;if(e>t){const o=e;e=t,t=o}if(e>u&&(u=e),t<m&&(m=t),u>m)return-1}return u}function a(e,t,o,n,s,i,r,a){const c=r[a],l=r[a+1],g=r[a+2],d=r[a+3]-c,u=r[a+4]-l,m=r[a+5]-g,p=r[a+6]-c,h=r[a+7]-l,I=r[a+8]-g,f=s*I-i*h,C=i*p-n*I,y=n*h-s*p,E=d*f+u*C+m*y;if(E>-A&&E<A)return-1;const B=1/E,b=e-c,v=t-l,Q=o-g,M=(b*f+v*C+Q*y)*B;if(M<-A||M>1+A)return-1;const k=v*m-Q*u,w=Q*d-b*m,x=b*u-v*d,S=(n*k+s*w+i*x)*B;if(S<-A||M+S>1+A)return-1;const D=(p*k+h*w+I*x)*B;return D>A?D:-1}const c=new WeakMap})),__define("lib/picking",(function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ENGINE_TRIANGLE_THRESHOLD=void 0,t.cameraRay=function(e,t,n,A,s,i=(0,o.cameraBasis)(e)){const r=t/Math.max(A,1)*2-1,a=1-n/Math.max(s,1)*2,c=Math.tan(e.fov*Math.PI/360),l=A/Math.max(s,1),g=[i.forward[0]+i.right[0]*r*l*c+i.up[0]*a*c,i.forward[1]+i.right[1]*r*l*c+i.up[1]*a*c,i.forward[2]+i.right[2]*r*l*c+i.up[2]*a*c],d=Math.hypot(g[0],g[1],g[2])||1;return{origin:[...i.eye],dir:[g[0]/d,g[1]/d,g[2]/d]}},t.pickElement=function(e,t,o,s,a,c=0){const l=(0,n.mat4Invert)(t),p=(0,n.transformVec3)(l,o.origin),h=(0,n.transformDir3)(l,o.dir),I={origin:p,dir:h},f=e=>(0,n.transformVec3)(t,e);let C=null;if("face"===s){const t=r&&d(e)>=g?u(e,c):0,n=t?r.raycast(t,I.origin,I.dir):(0,A.raycastBVH)((0,A.meshBVH)(e,c),I);return n?{kind:"face",index:"faceIndex"in n?n.faceIndex:n.face,t:n.t,world:[o.origin[0]+o.dir[0]*n.t,o.origin[1]+o.dir[1]*n.t,o.origin[2]+o.dir[2]*n.t]}:null}if("vertex"===s){for(let t=0;t<e.vertices.length;t++){const{t:o,distance:n}=m(I,e.vertices[t]);o<0||n>a||(!C||o<C.t)&&(C={kind:"vertex",index:t,t:o,world:f(e.vertices[t])})}return C}for(let t=0;t<e.edges.length;t++){const[o,n]=e.edges[t],A=e.vertices[o],s=e.vertices[n],r=s[0]-A[0],c=s[1]-A[1],l=s[2]-A[2],g=p[0]-A[0],d=p[1]-A[1],u=p[2]-A[2],y=h[0]*r+h[1]*c+h[2]*l,E=h[0]*g+h[1]*d+h[2]*u,B=r*g+c*d+l*u,b=r*r+c*c+l*l-y*y;let v=0;Math.abs(b)>i&&(v=Math.min(1,Math.max(0,(B-y*E)/b)));const Q=[A[0]+r*v,A[1]+c*v,A[2]+l*v],{t:M,distance:k}=m(I,Q);M<0||k>a||(!C||M<C.t)&&(C={kind:"edge",index:t,t:M,world:f(Q)})}return C},t.pickObjects=function(e,t){let o=null;for(const s of e){const e=(0,n.mat4FromTRS)(s.position,s.rotation,s.scale),i=(0,n.mat4Invert)(e),a={origin:(0,n.transformVec3)(i,t.origin),dir:(0,n.transformDir3)(i,t.dir)},c=r&&d(s.mesh)>=g?u(s.mesh,s.version??0):0,l=c?r.raycast(c,a.origin,a.dir):(0,A.raycastBVH)((0,A.meshBVH)(s.mesh,s.version??0),a);if(l&&(!o||l.t<o.t)){const t=[a.origin[0]+a.dir[0]*l.t,a.origin[1]+a.dir[1]*l.t,a.origin[2]+a.dir[2]*l.t];o={id:s.id,t:l.t,world:(0,n.transformVec3)(e,t)}}}return o},t.pickingEngineLoaded=function(){return null!==r},t.projectWorld=function(e,t,o,n,A){const s=e[0]-t.eye[0],i=e[1]-t.eye[1],r=e[2]-t.eye[2],a=s*t.forward[0]+i*t.forward[1]+r*t.forward[2],c=s*t.right[0]+i*t.right[1]+r*t.right[2],l=s*t.up[0]+i*t.up[1]+r*t.up[2],g=Math.tan(o*Math.PI/360),d=n/Math.max(A,1);if(a<=.001)return{x:0,y:0,depth:a,visible:!1};return{x:.5*(c/(a*g*d)+1)*n,y:.5*(1-l/(a*g))*A,depth:a,visible:!0}},t.rayTriangle=function(e,t,o,n,A){const s=n[0]-o[0],r=n[1]-o[1],a=n[2]-o[2],c=A[0]-o[0],l=A[1]-o[1],g=A[2]-o[2],d=t[1]*g-t[2]*l,u=t[2]*c-t[0]*g,m=t[0]*l-t[1]*c,p=s*d+r*u+a*m;if(Math.abs(p)<i)return null;const h=1/p,I=e[0]-o[0],f=e[1]-o[1],C=e[2]-o[2],y=(I*d+f*u+C*m)*h;if(y<-i||y>1+i)return null;const E=f*a-C*r,B=C*s-I*a,b=I*r-f*s,v=(t[0]*E+t[1]*B+t[2]*b)*h;if(v<-i||y+v>1+i)return null;const Q=(c*E+l*B+g*b)*h;return Q>i?Q:null},t.rayWorldThreshold=function(e,t,n,A=14){return(0,o.worldPerPixel)(Math.max(.01,t),e.fov,n)*A},t.setPickingEngine=function(e){r=e};var o=e("lib/math3d"),n=e("lib/glmath"),A=e("lib/bvh"),s=e("lib/wasm");const i=1e-6;let r=null;const a=new WeakMap,c=new WeakMap,l="undefined"!=typeof FinalizationRegistry?new FinalizationRegistry((e=>{r&&e&&r.free(e)})):null,g=128;function d(e){let t=c.get(e);if(void 0===t){t=0;for(const o of e.faces)t+=Math.max(0,o.length-2);c.set(e,t)}return t}function u(e,t){if(!r)return 0;let o=a.get(e);if(o&&o.version===t)return o.handle;if(!o){const n=(0,s.triangleSoup)(e),A=r.createMesh(n.vertices,n.triangles);return A&&l?.register(e,A,e),o={handle:A,version:t,triangles:n.triangles.length/3},a.set(e,o),A}const n=new Float32Array(3*e.vertices.length);for(let t=0;t<e.vertices.length;t++)n[3*t]=e.vertices[t][0],n[3*t+1]=e.vertices[t][1],n[3*t+2]=e.vertices[t][2];return r.refit(o.handle,n),o.version=t,o.handle}function m(e,t){const o=t[0]-e.origin[0],n=t[1]-e.origin[1],A=t[2]-e.origin[2],s=o*e.dir[0]+n*e.dir[1]+A*e.dir[2],i=e.origin[0]+e.dir[0]*s-t[0],r=e.origin[1]+e.dir[1]*s-t[1],a=e.origin[2]+e.dir[2]*s-t[2];return{t:s,distance:Math.hypot(i,r,a)}}t.ENGINE_TRIANGLE_THRESHOLD=g})),__define("lib/gl",(function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.GLRenderer=void 0,t.objectRenderColor=function(e){return(0,n.hexColor)(e)};var o=e("lib/mesh"),n=e("lib/glmath");const A=[.24,.85,.66],s=[1,.76,.28];function i(e,t,o){const n=e.createShader(t);if(e.shaderSource(n,o),e.compileShader(n),!e.getShaderParameter(n,e.COMPILE_STATUS)){const t=e.getShaderInfoLog(n);throw e.deleteShader(n),new Error(`Shader compile error: ${t}`)}return n}function r(e,t,o){const n=e.createProgram(),A=i(e,e.VERTEX_SHADER,t),s=i(e,e.FRAGMENT_SHADER,o);if(e.attachShader(n,A),e.attachShader(n,s),e.linkProgram(n),e.deleteShader(A),e.deleteShader(s),!e.getProgramParameter(n,e.LINK_STATUS))throw new Error(`Program link error: ${e.getProgramInfoLog(n)}`);const r={},a={},c=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let t=0;t<c;t++){const o=e.getActiveUniform(n,t);o&&(r[o.name]=e.getUniformLocation(n,o.name))}const l=e.getProgramParameter(n,e.ACTIVE_ATTRIBUTES);for(let t=0;t<l;t++){const o=e.getActiveAttrib(n,t);o&&(a[o.name]=e.getAttribLocation(n,o.name))}return{program:n,uniforms:r,attribs:a}}t.GLRenderer=class{textureCache=new WeakMap;whiteTexture=null;meshCache=new Map;gridVao=null;gridBuffers=[];gridCount=0;axesVao=null;axesBuffers=[];axesCount=0;dynamicVao=null;dynamicPos=null;dynamicColor=null;dynamicTriVao=null;dynamicTriPos=null;dynamicTriColor=null;identity=(0,n.mat4Identity)();calls=0;modelFor(e){const t=this._mc||(this._mc=new Map),o=e.id,p=e.position,r=e.rotation,sc=e.scale,c=t.get(o);if(c&&c.p[0]===p[0]&&c.p[1]===p[1]&&c.p[2]===p[2]&&c.r[0]===r[0]&&c.r[1]===r[1]&&c.r[2]===r[2]&&c.s[0]===sc[0]&&c.s[1]===sc[1]&&c.s[2]===sc[2])return c.m;const a=(0,n.mat4FromTRS)(p,r,sc);return t.set(o,{p:[p[0],p[1],p[2]],r:[r[0],r[1],r[2]],s:[sc[0],sc[1],sc[2]],m:a}),a}fallbackSlot(e){const t=this._fb||(this._fb={color:e.color,emissive:e.emissive,emissiveStrength:e.emissiveStrength??1,metalness:e.metalness,roughness:e.roughness,specular:e.specular??.5,normalStrength:e.normalStrength??1,opacity:e.opacity,blendMode:e.blendMode||"blend",uvRepeat:1,uvScaleY:1,uvOffsetX:0,uvOffsetY:0,uvRotation:0,texMapping:0,texStrength:1,texTint:[1,1,1],albedo:null,roughnessMap:null,bumpMap:null});t.color=e.color;t.emissive=e.emissive;t.emissiveStrength=e.emissiveStrength??1;t.metalness=e.metalness;t.roughness=e.roughness;t.specular=e.specular??.5;t.normalStrength=e.normalStrength??1;t.opacity=e.opacity;t.blendMode=e.blendMode||"blend";return t}oneGroup(e){const t=this._og||(this._og={start:0,count:0,materialIndex:0});t.count=e;return this._oga||(this._oga=[t])}constructor(e){const t=e.getContext("webgl2",{antialias:!__lowEnd,alpha:!1,preserveDrawingBuffer:!1,depth:!0,powerPreference:"high-performance"});if(!t)throw new Error("WebGL2 is not available in this browser.");this.gl=t,this.meshProgram=r(t,"#version 300 es\nin vec3 aPosition;\nin vec3 aNormal;\nin float aSelect;\nin vec3 aColor;\nin vec2 aUV;\nuniform mat4 uViewProj;\nuniform mat4 uModel;\nuniform mat3 uNormalMat;\nuniform int uOutline;\nuniform float uOutlinePx;\nuniform vec2 uViewport;\nuniform vec3 uLightDir;\nout vec3 vNormal;\nout vec3 vWorld;\nout vec3 vLocal;\nout float vSelect;\nout vec3 vColor;\nout vec2 vUV;\nvoid main() {\n\tvec4 world = uModel * vec4(aPosition, 1.0);\n\tvLocal = aPosition;\n\tif (uOutline == 2) {\n\t\tvec2 shShift = uLightDir.xz / max(0.32, abs(uLightDir.y));\n\t\tfloat h = max(0.0, world.y);\n\t\tworld.xz -= shShift * h * 0.65;\n\t\tworld.y = 0.004;\n\t\tgl_Position = uViewProj * world;\n\t\treturn;\n\t}\n\tvWorld = world.xyz;\n\tvNormal = uNormalMat * aNormal;\n\tvSelect = aSelect;\n\tvColor = aColor;\n\tvUV = aUV;\n\tvec4 clip = uViewProj * world;\n\tif (uOutline == 1) {\n\t\tvec3 radial = length(aPosition) > 0.0001 ? normalize(uNormalMat * aPosition) : normalize(vNormal);\n\t\tvec3 expandN = normalize(mix(normalize(vNormal), radial, 0.45));\n\t\tvec4 clipN = uViewProj * vec4(expandN, 0.0);\n\t\tfloat len = length(clipN.xy);\n\t\tvec2 dir = len > 0.0001 ? clipN.xy / len : vec2(0.0);\n\t\tclip.xy += dir * (uOutlinePx * 2.0 / uViewport) * clip.w;\n\t\tclip.z += 0.0035 * clip.w;\n\t}\n\tgl_Position = clip;\n}","#version 300 es\nprecision highp float;\nprecision highp int;\nin vec3 vNormal;\nin vec3 vWorld;\nin vec3 vLocal;\nin float vSelect;\nin vec3 vColor;\nin vec2 vUV;\nuniform int uShading;\nuniform int uOutline;\nuniform int uUseVertexColor;\nuniform int uUseTexture;\nuniform int uUseRoughMap;\nuniform int uUseBumpMap;\nuniform sampler2D uTexture;\nuniform sampler2D uRoughMap;\nuniform sampler2D uBumpMap;\nuniform vec3 uBaseColor;\nuniform vec3 uEmissive;\nuniform vec3 uTexTint;\nuniform vec2 uUVRepeat;\nuniform vec2 uUVOffset;\nuniform float uUVRotation;\nuniform int uTexMapping;\nuniform float uTexStrength;\nuniform float uSpecular;\nuniform float uNormalStrength;\nuniform int uAlphaMode;\nuniform float uAO;\nuniform float uBloom;\nuniform vec3 uOutlineColor;\nuniform vec3 uSelectColor;\nuniform vec3 uLightDir;\nuniform vec3 uLightColor;\nuniform vec3 uEye;\nuniform float uAmbient;\nuniform float uOpacity;\nuniform float uMetalness;\nuniform float uRoughness;\nout vec4 outColor;\n\nvec3 perturbNormal(vec3 N, vec3 worldPos, float height) {\n\tvec3 dpdx = dFdx(worldPos);\n\tvec3 dpdy = dFdy(worldPos);\n\tfloat dhdx = dFdx(height);\n\tfloat dhdy = dFdy(height);\n\tvec3 r1 = cross(dpdy, N);\n\tvec3 r2 = cross(N, dpdx);\n\tfloat det = dot(dpdx, r1);\n\tvec3 grad = sign(det) * (dhdx * r1 + dhdy * r2);\n\treturn normalize(abs(det) * N - grad);\n}\n\nvoid main() {\n\tif (uOutline == 1) { outColor = vec4(uOutlineColor, 1.0); return; }\n\tif (uOutline == 2) { outColor = vec4(0.02, 0.03, 0.06, 0.36); return; }\n\tvec3 N = normalize(vNormal);\n\tif (!gl_FrontFacing) N = -N;\n\tvec3 V = normalize(uEye - vWorld);\n\tvec3 L = normalize(uLightDir);\n\tvec2 rawUV = vUV;\n\tif (uTexMapping == 1) rawUV = vLocal.xz + vec2(0.5);\n\telse if (uTexMapping == 2) rawUV = vWorld.xz * 0.5 + vec2(0.5);\n\tvec2 centeredUV = rawUV - vec2(0.5);\n\tfloat cRot = cos(uUVRotation);\n\tfloat sRot = sin(uUVRotation);\n\tvec2 rotUV = vec2(centeredUV.x * cRot - centeredUV.y * sRot, centeredUV.x * sRot + centeredUV.y * cRot) + vec2(0.5);\n\tvec2 finalUV = rotUV * uUVRepeat + uUVOffset;\n\tvec3 keyDir = uShading == 2 ? L : normalize(mix(L, normalize(V + vec3(-0.28, 0.55, 0.25)), 0.42));\n\tvec3 fillDir = normalize(vec3(-keyDir.x, 0.35, -keyDir.z));\n\tvec3 base = uBaseColor;\n\tfloat alpha = uOpacity;\n\tif (uUseVertexColor == 1) base = uBaseColor * vColor;\n\tif (uUseTexture == 1) {\n\t\tvec4 texel = texture(uTexture, finalUV);\n\t\tbase = mix(base, base * texel.rgb * uTexTint, clamp(uTexStrength, 0.0, 1.0));\n\t\talpha *= mix(1.0, texel.a, clamp(uTexStrength, 0.0, 1.0));\n\t}\n\tif (uAlphaMode == 0) alpha = 1.0;\n\telse if (uAlphaMode == 2) { if (alpha < 0.5) discard; alpha = 1.0; }\n\tif (alpha < 0.01) discard;\n\tfloat roughness = clamp(uRoughness, 0.04, 1.0);\n\tif (uUseRoughMap == 1) {\n\t\tfloat rough = texture(uRoughMap, finalUV).r;\n\t\troughness = clamp(roughness * rough * 2.0, 0.04, 1.0);\n\t}\n\tif (uUseBumpMap == 1) {\n\t\tfloat height = texture(uBumpMap, finalUV).r * uNormalStrength;\n\t\tN = perturbNormal(N, vWorld, height);\n\t}\n\tif (uShading == 0) base = vec3(0.96, 0.97, 0.99);\n\n\tfloat ndl = max(dot(N, keyDir), 0.0);\n\tfloat fill = max(dot(N, fillDir), 0.0) * 0.24;\n\tfloat aoFactor = 1.0 - clamp(uAO, 0.0, 1.0) * (1.0 - clamp(N.y * 0.5 + 0.5, 0.15, 1.0)) * 0.6;\n\tfloat ambScale = clamp(uAmbient / 0.45, 0.1, 3.0);\n\tfloat hemi = mix(0.38, 0.62, N.y * 0.5 + 0.5) * ambScale * aoFactor;\n\tvec3 H = normalize(keyDir + V);\n\tfloat specPower = mix(140.0, 14.0, roughness);\n\tfloat spec = pow(max(dot(N, H), 0.0), specPower) * (1.0 - roughness * 0.72) * 0.34 * (uSpecular * 2.0);\n\tfloat rim = pow(1.0 - max(dot(N, V), 0.0), 3.2) * 0.12;\n\n\tvec3 color;\n\tif (uShading == 3) {\n\t\tfloat cel = smoothstep(0.18, 0.22, ndl) * 0.22 + smoothstep(0.55, 0.60, ndl) * 0.20;\n\t\tfloat studioLight = (0.52 * ambScale + cel) * aoFactor;\n\t\tcolor = base * studioLight * uLightColor + vec3(spec * 0.6) + uEmissive * (1.0 + uBloom);\n\t} else {\n\t\tfloat lighting = clamp(hemi + ndl * 0.58 + fill, 0.18, 1.65);\n\t\tvec3 diffuse = base * lighting * uLightColor;\n\t\tvec3 specCol = mix(vec3(1.0), base, uMetalness * 0.75) * spec * uLightColor;\n\t\tcolor = diffuse + specCol * (1.0 + uBloom * 0.6) + uEmissive * (1.0 + uBloom * 1.2) + vec3(rim);\n\t}\n\tcolor = clamp(color, 0.0, 1.0);\n\tcolor = mix(color, uSelectColor, vSelect * 0.65);\n\toutColor = vec4(color, alpha);\n}"),this.lineProgram=r(t,"#version 300 es\nin vec3 aPosition;\nin vec3 aColor;\nuniform mat4 uViewProj;\nuniform mat4 uModel;\nout vec3 vColor;\nvoid main() {\n\tvColor = aColor;\n\tgl_Position = uViewProj * uModel * vec4(aPosition, 1.0);\n}","#version 300 es\nprecision highp float;\nprecision highp int;\nin vec3 vColor;\nuniform float uOpacity;\nout vec4 outColor;\nvoid main() { outColor = vec4(vColor, uOpacity); }"),this.pointProgram=r(t,"#version 300 es\nin vec3 aPosition;\nin vec3 aColor;\nuniform mat4 uViewProj;\nuniform mat4 uModel;\nuniform float uPointSize;\nout vec3 vColor;\nvoid main() {\n\tvColor = aColor;\n\tgl_Position = uViewProj * uModel * vec4(aPosition, 1.0);\n\tgl_PointSize = uPointSize;\n}","#version 300 es\nprecision highp float;\nprecision highp int;\nin vec3 vColor;\nout vec4 outColor;\nvoid main() {\n\tfloat d = length(gl_PointCoord - vec2(0.5));\n\tif (d > 0.5) discard;\n\toutColor = vec4(vColor, smoothstep(0.5, 0.36, d));\n}"),this.glowProgram=r(t,"#version 300 es\nin vec3 aPosition;\nin vec3 aNormal;\nuniform mat4 uViewProj;\nuniform mat4 uModel;\nuniform mat3 uNormalMat;\nout vec3 vNormal;\nout vec3 vWorld;\nvoid main() {\n\tvec4 world = uModel * vec4(aPosition, 1.0);\n\tvWorld = world.xyz;\n\tvNormal = uNormalMat * aNormal;\n\tgl_Position = uViewProj * world;\n}","#version 300 es\nprecision highp float;\nin vec3 vNormal;\nin vec3 vWorld;\nuniform vec3 uEye;\nuniform vec3 uGlowColor;\nout vec4 outColor;\nvoid main() {\n\tvec3 N = normalize(vNormal);\n\tvec3 V = normalize(uEye - vWorld);\n\tfloat facing = 1.0 - abs(dot(N, V));\n\tfloat rim = pow(clamp(facing, 0.0, 1.0), 1.6);\n\tfloat pulse = 0.65 + 0.35 * rim;\n\toutColor = vec4(uGlowColor * pulse, rim * 0.85);\n}"),this.overlayProgram=r(t,"#version 300 es\nin vec3 aPosition;\nin vec3 aColor;\nuniform mat4 uViewProj;\nuniform mat4 uModel;\nout vec3 vColor;\nvoid main() {\n\tvColor = aColor;\n\tgl_Position = uViewProj * uModel * vec4(aPosition, 1.0);\n}","#version 300 es\nprecision highp float;\nin vec3 vColor;\nuniform float uOpacity;\nout vec4 outColor;\nvoid main() { outColor = vec4(vColor, uOpacity); }"),this.whiteTexture=this.createWhiteTexture(),t.enable(t.DEPTH_TEST),t.depthFunc(t.LEQUAL),this.buildGrid(),this.buildAxes(),this.dynamicVao=t.createVertexArray(),this.dynamicPos=t.createBuffer(),this.dynamicColor=t.createBuffer(),this.dynamicTriVao=t.createVertexArray(),this.dynamicTriPos=t.createBuffer(),this.dynamicTriColor=t.createBuffer()}buildLineVao(e,t){const o=this.gl,n=o.createVertexArray();o.bindVertexArray(n);const A=o.createBuffer();o.bindBuffer(o.ARRAY_BUFFER,A),o.bufferData(o.ARRAY_BUFFER,new Float32Array(e),o.STATIC_DRAW),o.enableVertexAttribArray(this.lineProgram.attribs.aPosition),o.vertexAttribPointer(this.lineProgram.attribs.aPosition,3,o.FLOAT,!1,0,0);const s=o.createBuffer();return o.bindBuffer(o.ARRAY_BUFFER,s),o.bufferData(o.ARRAY_BUFFER,new Float32Array(t),o.STATIC_DRAW),o.enableVertexAttribArray(this.lineProgram.attribs.aColor),o.vertexAttribPointer(this.lineProgram.attribs.aColor,3,o.FLOAT,!1,0,0),o.bindVertexArray(null),{vao:n,buffers:[A,s]}}buildGrid(){const e=12,t=[],o=[];for(let n=-12;n<=e;n++){if(0===n)continue;const A=[.137,.157,.212];t.push(n,0,-12,n,0,e,-12,0,n,e,0,n),o.push(...A,...A,...A,...A)}const n=this.buildLineVao(t,o);this.gridVao=n.vao,this.gridBuffers=n.buffers,this.gridCount=t.length/3}buildAxes(){const e=[0,0,0,2,0,0,0,0,0,0,2,0,0,0,0,0,0,2,0,0,0,-2,0,0,0,0,0,0,0,-2],t=this.buildLineVao(e,[.898,.376,.302,.898,.376,.302,.239,.859,.69,.239,.859,.69,.302,.553,.898,.302,.553,.898,.4,.302,.4,.302,.4,.302,.4,.302,.31,.31,.345,.31,.31,.345]);this.axesVao=t.vao,this.axesBuffers=t.buffers,this.axesCount=e.length/3}createVao(){return this.gl.createVertexArray()}attachBuffer(e,t,o,n){const A=this.gl,s=A.createBuffer();return A.bindBuffer(A.ARRAY_BUFFER,s),A.bufferData(A.ARRAY_BUFFER,e,n),A.enableVertexAttribArray(t),A.vertexAttribPointer(t,o,A.FLOAT,!1,0,0),s}buildGpuMesh(e){const t=this.gl,{positions:n,normals:A,colors:s,uvs:i}=function(e){const t=e.faces.length,n=new Array(t),A=Array.from({length:e.vertices.length},(()=>[]));for(let s=0;s<t;s++){const t=e.faces[s];n[s]=(0,o.faceNormal)(e,t);for(let e=0;e<t.length;e++)A[t[e]]?.push(s)}const s=[],i=[];for(let o=0;o<t;o++){const t=e.faces[o];for(let e=1;e<t.length-1;e++)s.push(t[0],t[e],t[e+1]),i.push(o)}const r=new Float32Array(3*s.length),a=new Float32Array(3*s.length),c=new Float32Array(3*s.length),l=new Float32Array(2*s.length),g=e.colors,d=e.uvs;for(let t=0;t<s.length;t+=3){const o=n[i[t/3]],u=o[0],m=o[1],p=o[2],h=Math.abs(u),I=Math.abs(m),f=Math.abs(p);for(let o=0;o<3;o++){const i=s[t+o],C=e.vertices[i],y=3*(t+o);r[y]=C[0],r[y+1]=C[1],r[y+2]=C[2];let E=u,B=m,b=p;if(e.smooth){const t=A[i];if(t&&t.length>1){let e=0,o=0,A=0;for(let s=0;s<t.length;s++){const i=n[t[s]];u*i[0]+m*i[1]+p*i[2]>=.55&&(e+=i[0],o+=i[1],A+=i[2])}const s=Math.hypot(e,o,A);s>1e-5&&(E=e/s,B=o/s,b=A/s)}else if(e.normals?.[i]){const t=e.normals[i];E=t[0],B=t[1],b=t[2]}}a[y]=E,a[y+1]=B,a[y+2]=b;let v=1,Q=1,M=1;if(g&&g.length>=3*i+3&&(v=g[3*i],Q=g[3*i+1],M=g[3*i+2]),e.mask&&e.mask.length>i){const t=1-.65*(e.mask[i]??0);v*=t,Q*=t,M*=t}c[y]=v,c[y+1]=Q,c[y+2]=M;const k=2*(t+o),w=d?.[i];w&&2===w.length?(l[k]=w[0],l[k+1]=w[1]):h>=I&&h>=f?(l[k]=C[2],l[k+1]=C[1]):I>=f?(l[k]=C[0],l[k+1]=C[2]):(l[k]=C[0],l[k+1]=C[1])}}return{positions:r,normals:a,colors:c,uvs:l}}(e.mesh),r=n.length/3,a=new Float32Array(r),c=this.createVao();t.bindVertexArray(c);const l=this.attachBuffer(n,this.meshProgram.attribs.aPosition,3,t.STATIC_DRAW),g=this.attachBuffer(A,this.meshProgram.attribs.aNormal,3,t.STATIC_DRAW),d=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,d),t.bufferData(t.ARRAY_BUFFER,i,t.STATIC_DRAW),t.enableVertexAttribArray(this.meshProgram.attribs.aUV),t.vertexAttribPointer(this.meshProgram.attribs.aUV,2,t.FLOAT,!1,0,0);const u=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,u),t.bufferData(t.ARRAY_BUFFER,s,t.DYNAMIC_DRAW),t.enableVertexAttribArray(this.meshProgram.attribs.aColor),t.vertexAttribPointer(this.meshProgram.attribs.aColor,3,t.FLOAT,!1,0,0);const m=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,m),t.bufferData(t.ARRAY_BUFFER,a,t.DYNAMIC_DRAW),t.enableVertexAttribArray(this.meshProgram.attribs.aSelect),t.vertexAttribPointer(this.meshProgram.attribs.aSelect,1,t.FLOAT,!1,0,0);const p=new Float32Array(6*e.mesh.edges.length);for(let t=0;t<e.mesh.edges.length;t++){const[o,n]=e.mesh.edges[t],A=e.mesh.vertices[o],s=e.mesh.vertices[n];p.set([A[0],A[1],A[2],s[0],s[1],s[2]],6*t)}const h=new Float32Array(6*e.mesh.edges.length),I=this.createVao();t.bindVertexArray(I);const f=this.attachBuffer(p,this.lineProgram.attribs.aPosition,3,t.STATIC_DRAW),C=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,C),t.bufferData(t.ARRAY_BUFFER,h,t.DYNAMIC_DRAW),t.enableVertexAttribArray(this.lineProgram.attribs.aColor),t.vertexAttribPointer(this.lineProgram.attribs.aColor,3,t.FLOAT,!1,0,0);const y=new Float32Array(3*e.mesh.vertices.length);for(let t=0;t<e.mesh.vertices.length;t++){const o=e.mesh.vertices[t];y.set([o[0],o[1],o[2]],3*t)}const E=new Float32Array(3*e.mesh.vertices.length),B=this.createVao();t.bindVertexArray(B);const b=this.attachBuffer(y,this.pointProgram.attribs.aPosition,3,t.STATIC_DRAW),v=t.createBuffer();return t.bindBuffer(t.ARRAY_BUFFER,v),t.bufferData(t.ARRAY_BUFFER,E,t.DYNAMIC_DRAW),t.enableVertexAttribArray(this.pointProgram.attribs.aColor),t.vertexAttribPointer(this.pointProgram.attribs.aColor,3,t.FLOAT,!1,0,0),t.bindVertexArray(null),{geometryVersion:e.geometryVersion,selectionVersion:-1,colorVersion:-1,glowVersion:-1,pointSource:e.mesh.vertices.length,vaoTri:c,triPos:l,triNorm:g,triSelect:m,triColor:u,triUV:d,triCount:r,vaoEdge:I,edgePos:f,edgeColor:C,edgeCount:2*e.mesh.edges.length,vaoPoint:B,pointPos:b,pointColor:v,pointCount:e.mesh.vertices.length,vaoGlow:null,glowPos:null,glowNorm:null,glowCount:0}}uploadTexture(e){if(!e)return null;const t=this.textureCache.get(e);if(t)return t;const o=this.gl,n=o.createTexture();return o.bindTexture(o.TEXTURE_2D,n),o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,!0),o.texImage2D(o.TEXTURE_2D,0,o.RGBA,o.RGBA,o.UNSIGNED_BYTE,e),o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,!1),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_S,o.REPEAT),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_T,o.REPEAT),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MIN_FILTER,o.LINEAR),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MAG_FILTER,o.LINEAR),this.textureCache.set(e,n),n}createWhiteTexture(){const e=this.gl,t=e.createTexture();return e.bindTexture(e.TEXTURE_2D,t),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,new Uint8Array([255,255,255,255])),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.REPEAT),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.REPEAT),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),t}updateGlow(e,t){if(t.glowVersion===e.glowVersion)return;const n=this.gl;t.vaoGlow&&(n.deleteVertexArray(t.vaoGlow),t.glowPos&&n.deleteBuffer(t.glowPos),t.glowNorm&&n.deleteBuffer(t.glowNorm),t.vaoGlow=null,t.glowPos=null,t.glowNorm=null,t.glowCount=0);const A=e.glowFaces;if(A&&A.size){const s=[],i=[],r=e.mesh.normals??(0,o.computeVertexNormals)(e.mesh);if(e.mesh.faces.forEach(((t,o)=>{if(A.has(o))for(let o=1;o<t.length-1;o++)for(const n of[t[0],t[o],t[o+1]]){const t=e.mesh.vertices[n];s.push(t[0],t[1],t[2]);const o=r[n]??[0,1,0];i.push(o[0],o[1],o[2])}})),s.length){const e=this.createVao();n.bindVertexArray(e),t.glowPos=this.attachBuffer(new Float32Array(s),this.glowProgram.attribs.aPosition,3,n.STATIC_DRAW),t.glowNorm=this.attachBuffer(new Float32Array(i),this.glowProgram.attribs.aNormal,3,n.STATIC_DRAW),n.bindVertexArray(null),t.vaoGlow=e,t.glowCount=s.length/3}}t.glowVersion=e.glowVersion}updateSelection(e,t){if(e.selectionVersion===t.selectionVersion)return;const o=this.gl,n=new Float32Array(t.triCount),i="face"===e.hoverKind?e.hoverIndex:null;let r=0;e.mesh.faces.forEach(((t,o)=>{let A=0;e.selectedFaces?.has(o)?A=1:i===o&&(A=.45);for(let e=1;e<t.length-1;e++){for(let e=0;e<3;e++)n[3*r+e]=A;r++}})),o.bindBuffer(o.ARRAY_BUFFER,t.triSelect),o.bufferSubData(o.ARRAY_BUFFER,0,n);const a=e.selected?A:[.7,.76,.86],c=new Float32Array(6*e.mesh.edges.length);for(let t=0;t<e.mesh.edges.length;t++){let o=a;e.selectedEdges?.has(t)?o=A:"edge"===e.hoverKind&&e.hoverIndex===t&&(o=s),c.set([...o,...o],6*t)}o.bindBuffer(o.ARRAY_BUFFER,t.edgeColor),o.bufferSubData(o.ARRAY_BUFFER,0,c);const l=new Float32Array(3*e.mesh.vertices.length);for(let t=0;t<e.mesh.vertices.length;t++){let o=[.6,.66,.76];e.selectedVertices?.has(t)?o=A:"vertex"===e.hoverKind&&e.hoverIndex===t&&(o=s),l.set(o,3*t)}o.bindBuffer(o.ARRAY_BUFFER,t.pointColor),o.bufferSubData(o.ARRAY_BUFFER,0,l),t.selectionVersion=e.selectionVersion}updateColors(e,t){if(e.colorVersion===t.colorVersion)return;const o=this.gl,n=new Float32Array(3*t.triCount),A=e.mesh.colors;let s=0;for(const t of e.mesh.faces)for(let o=1;o<t.length-1;o++)for(const i of[t[0],t[o],t[o+1]]){let t=1,o=1,r=1;if(A&&A.length>=3*i+3&&(t=A[3*i],o=A[3*i+1],r=A[3*i+2]),e.mesh.mask&&e.mesh.mask.length>i){const n=1-.65*(e.mesh.mask[i]??0);t*=n,o*=n,r*=n}n[3*s]=t,n[3*s+1]=o,n[3*s+2]=r,s++}o.bindBuffer(o.ARRAY_BUFFER,t.triColor),o.bufferSubData(o.ARRAY_BUFFER,0,n),t.colorVersion=e.colorVersion}getGpuMesh(e){let t=this.meshCache.get(e.id);return t&&t.geometryVersion===e.geometryVersion&&t.pointSource===e.mesh.vertices.length||(t&&this.disposeGpuMesh(t),t=this.buildGpuMesh(e),this.meshCache.set(e.id,t)),t}disposeGpuMesh(e){const t=this.gl;t.deleteVertexArray(e.vaoTri),t.deleteVertexArray(e.vaoEdge),t.deleteVertexArray(e.vaoPoint),e.vaoGlow&&t.deleteVertexArray(e.vaoGlow),t.deleteBuffer(e.triPos),t.deleteBuffer(e.triNorm),t.deleteBuffer(e.triSelect),t.deleteBuffer(e.triColor),t.deleteBuffer(e.triUV),t.deleteBuffer(e.edgePos),t.deleteBuffer(e.edgeColor),t.deleteBuffer(e.pointPos),t.deleteBuffer(e.pointColor),e.glowPos&&t.deleteBuffer(e.glowPos),e.glowNorm&&t.deleteBuffer(e.glowNorm)}drawDynamic(e,t,o,n,A=1){const s=this.gl;this.dynamicPos&&this.dynamicColor&&(s.bindVertexArray(e),s.bindBuffer(s.ARRAY_BUFFER,this.dynamicPos),s.bufferData(s.ARRAY_BUFFER,new Float32Array(t),s.DYNAMIC_DRAW),s.enableVertexAttribArray(this.lineProgram.attribs.aPosition),s.vertexAttribPointer(this.lineProgram.attribs.aPosition,3,s.FLOAT,!1,0,0),s.bindBuffer(s.ARRAY_BUFFER,this.dynamicColor),s.bufferData(s.ARRAY_BUFFER,new Float32Array(o),s.DYNAMIC_DRAW),s.enableVertexAttribArray(this.lineProgram.attribs.aColor),s.vertexAttribPointer(this.lineProgram.attribs.aColor,3,s.FLOAT,!1,0,0),n===s.POINTS?(s.useProgram(this.pointProgram.program),s.uniformMatrix4fv(this.pointProgram.uniforms.uModel,!1,this.identity),s.uniform1f(this.pointProgram.uniforms.uPointSize,A),s.bindBuffer(s.ARRAY_BUFFER,this.dynamicColor),s.enableVertexAttribArray(this.pointProgram.attribs.aColor),s.vertexAttribPointer(this.pointProgram.attribs.aColor,3,s.FLOAT,!1,0,0),s.drawArrays(n,0,t.length/3)):s.drawArrays(n,0,t.length/3),this.calls++)}drawDynamicTriangles(e,t){const o=this.gl;this.dynamicTriVao&&this.dynamicTriPos&&this.dynamicTriColor&&(o.bindVertexArray(this.dynamicTriVao),o.bindBuffer(o.ARRAY_BUFFER,this.dynamicTriPos),o.bufferData(o.ARRAY_BUFFER,new Float32Array(e),o.DYNAMIC_DRAW),o.enableVertexAttribArray(this.overlayProgram.attribs.aPosition),o.vertexAttribPointer(this.overlayProgram.attribs.aPosition,3,o.FLOAT,!1,0,0),o.bindBuffer(o.ARRAY_BUFFER,this.dynamicTriColor),o.bufferData(o.ARRAY_BUFFER,new Float32Array(t),o.DYNAMIC_DRAW),o.enableVertexAttribArray(this.overlayProgram.attribs.aColor),o.vertexAttribPointer(this.overlayProgram.attribs.aColor,3,o.FLOAT,!1,0,0),o.drawArrays(o.TRIANGLES,0,e.length/3),this.calls++)}render(e,t,o,s,i){const r=this.gl;if(this.calls=0,this.meshCache.size>o.length){const e=new Set(o.map((e=>e.id)));for(const[t,o]of this.meshCache)e.has(t)||(this.disposeGpuMesh(o),this.meshCache.delete(t),this._mc&&this._mc.delete(t))}r.viewport(0,0,e,t),r.clearColor(i.background[0],i.background[1],i.background[2],1),r.clear(r.COLOR_BUFFER_BIT|r.DEPTH_BUFFER_BIT);const a=(0,n.mat4LookAt)(s.eye,[s.eye[0]+s.forward[0],s.eye[1]+s.forward[1],s.eye[2]+s.forward[2]],s.up),c=(0,n.mat4Perspective)(s.fov,e/Math.max(t,1),s.near,s.far),l=(0,n.mat4Multiply)(c,a);r.useProgram(this.lineProgram.program),r.uniformMatrix4fv(this.lineProgram.uniforms.uViewProj,!1,l),r.uniformMatrix4fv(this.lineProgram.uniforms.uModel,!1,this.identity),r.uniform1f(this.lineProgram.uniforms.uOpacity,1),i.grid&&this.gridVao&&(r.bindVertexArray(this.gridVao),r.drawArrays(r.LINES,0,this.gridCount),this.calls++),i.axes&&this.axesVao&&(r.bindVertexArray(this.axesVao),r.drawArrays(r.LINES,0,this.axesCount),this.calls++);const g=o.find((e=>"light"===e.special));let d=i.lightDir||[-.45,.86,.52],u=i.lightColor||[1,1,1];if(g&&!i.lightDir){const e=g.position[0],t=g.position[1],o=g.position[2],n=Math.hypot(e,t,o)||1;d=[e/n,t/n,o/n],u=g.color}const m=o.filter((e=>!e.special)),p={solid:0,material:1,rendered:2,toon:3,wireframe:1}[i.shading];if("wireframe"!==i.shading){r.useProgram(this.meshProgram.program),r.uniformMatrix4fv(this.meshProgram.uniforms.uViewProj,!1,l),r.uniform3f(this.meshProgram.uniforms.uLightDir,d[0],d[1],d[2]),r.uniform3f(this.meshProgram.uniforms.uLightColor,u[0],u[1],u[2]),r.uniform3f(this.meshProgram.uniforms.uEye,s.eye[0],s.eye[1],s.eye[2]),r.uniform1f(this.meshProgram.uniforms.uAmbient,i.ambient??.45),r.uniform1f(this.meshProgram.uniforms.uAO,i.ao??0),r.uniform1f(this.meshProgram.uniforms.uBloom,i.bloom??0),r.uniform1i(this.meshProgram.uniforms.uOutline,0),r.uniform1i(this.meshProgram.uniforms.uShading,p),r.uniform3f(this.meshProgram.uniforms.uSelectColor,A[0],A[1],A[2]),r.disable(r.CULL_FACE);if(i.shadows){r.enable(r.BLEND),r.blendFunc(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA),r.depthMask(!1),r.uniform1i(this.meshProgram.uniforms.uOutline,2);for(const t of m){if(t.position[1]<-0.05)continue;const e=this.getGpuMesh(t),o=(0,n.mat4FromTRS)(t.position,t.rotation,t.scale);r.uniformMatrix4fv(this.meshProgram.uniforms.uModel,!1,o),r.bindVertexArray(e.vaoTri),r.drawArrays(r.TRIANGLES,0,e.triCount),this.calls++}r.uniform1i(this.meshProgram.uniforms.uOutline,0),r.depthMask(!0),r.disable(r.BLEND)}const e=[...m].sort(((e,t)=>{const o=i.xray||e.opacity<.999||e.slots.some((e=>e.opacity<.999));if(o!==(i.xray||t.opacity<.999||t.slots.some((e=>e.opacity<.999))))return o?1:-1;if(!o)return 0;const n=Math.hypot(e.position[0]-s.eye[0],e.position[1]-s.eye[1],e.position[2]-s.eye[2]);return Math.hypot(t.position[0]-s.eye[0],t.position[1]-s.eye[1],t.position[2]-s.eye[2])-n}));for(const t of e){const e=this.getGpuMesh(t);this.updateSelection(t,e),this.updateColors(t,e);const o=this.modelFor(t);r.uniformMatrix4fv(this.meshProgram.uniforms.uModel,!1,o),r.uniformMatrix3fv(this.meshProgram.uniforms.uNormalMat,!1,(0,n.normalMatrix)(o)),r.uniform1i(this.meshProgram.uniforms.uUseVertexColor,t.mesh.colors?.length?1:0);const A=this.fallbackSlot(t),s=t.mesh.groups?.length?t.mesh.groups:this.oneGroup(e.triCount);for(const o of s){const n=t.slots[o.materialIndex]??A,s=i.xray?Math.min(.38,n.opacity):n.opacity,alphaMode="opaque"===n.blendMode?0:"clip"===n.blendMode?2:1;i.xray||(1===alphaMode&&s<.999)||Boolean(n.albedo)?(r.enable(r.BLEND),r.blendFunc(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA),r.depthMask(!i.xray&&s>=.95)):(r.disable(r.BLEND),r.depthMask(!0)),r.uniform3f(this.meshProgram.uniforms.uBaseColor,n.color[0],n.color[1],n.color[2]),r.uniform3f(this.meshProgram.uniforms.uEmissive,n.emissive[0]*(n.emissiveStrength??1),n.emissive[1]*(n.emissiveStrength??1),n.emissive[2]*(n.emissiveStrength??1)),r.uniform3f(this.meshProgram.uniforms.uTexTint,n.texTint[0],n.texTint[1],n.texTint[2]),r.uniform2f(this.meshProgram.uniforms.uUVRepeat,n.uvRepeat??1,n.uvScaleY??n.uvRepeat??1),r.uniform2f(this.meshProgram.uniforms.uUVOffset,n.uvOffsetX??0,n.uvOffsetY??0),r.uniform1f(this.meshProgram.uniforms.uUVRotation,(n.uvRotation??0)*Math.PI/180),r.uniform1i(this.meshProgram.uniforms.uTexMapping,n.texMapping??0),r.uniform1f(this.meshProgram.uniforms.uTexStrength,n.texStrength??1),r.uniform1f(this.meshProgram.uniforms.uSpecular,n.specular??.5),r.uniform1f(this.meshProgram.uniforms.uNormalStrength,n.normalStrength??1),r.uniform1i(this.meshProgram.uniforms.uAlphaMode,alphaMode),r.uniform1f(this.meshProgram.uniforms.uOpacity,s),r.uniform1f(this.meshProgram.uniforms.uMetalness,n.metalness),r.uniform1f(this.meshProgram.uniforms.uRoughness,n.roughness);const a=this.uploadTexture(n.albedo)??this.whiteTexture;r.activeTexture(r.TEXTURE0),r.bindTexture(r.TEXTURE_2D,a),r.uniform1i(this.meshProgram.uniforms.uTexture,0),r.uniform1i(this.meshProgram.uniforms.uUseTexture,n.albedo?1:0);const c=this.uploadTexture(n.roughnessMap)??this.whiteTexture;r.activeTexture(r.TEXTURE1),r.bindTexture(r.TEXTURE_2D,c),r.uniform1i(this.meshProgram.uniforms.uRoughMap,1),r.uniform1i(this.meshProgram.uniforms.uUseRoughMap,n.roughnessMap?1:0);const l=this.uploadTexture(n.bumpMap)??this.whiteTexture;r.activeTexture(r.TEXTURE2),r.bindTexture(r.TEXTURE_2D,l),r.uniform1i(this.meshProgram.uniforms.uBumpMap,2),r.uniform1i(this.meshProgram.uniforms.uUseBumpMap,n.bumpMap?1:0),r.activeTexture(r.TEXTURE0),r.bindVertexArray(e.vaoTri),r.drawArrays(r.TRIANGLES,o.start,o.count),this.calls++}}r.disable(r.BLEND),r.depthMask(!0)}const h=o.filter((e=>e.glowFaces&&e.glowFaces.size));if(h.length){r.enable(r.BLEND),r.blendFunc(r.SRC_ALPHA,r.ONE),r.depthMask(!1),r.useProgram(this.glowProgram.program),r.uniformMatrix4fv(this.glowProgram.uniforms.uViewProj,!1,l),r.uniform3f(this.glowProgram.uniforms.uEye,s.eye[0],s.eye[1],s.eye[2]),r.uniform3f(this.glowProgram.uniforms.uGlowColor,.24,.85,.66);for(const e of h){const t=this.getGpuMesh(e);if(this.updateGlow(e,t),!t.vaoGlow)continue;const o=this.modelFor(e);r.uniformMatrix4fv(this.glowProgram.uniforms.uModel,!1,o),r.uniformMatrix3fv(this.glowProgram.uniforms.uNormalMat,!1,(0,n.normalMatrix)(o)),r.bindVertexArray(t.vaoGlow),r.drawArrays(r.TRIANGLES,0,t.glowCount),this.calls++}r.depthMask(!0),r.disable(r.BLEND)}if(i.outlines||i.selectOutline){r.useProgram(this.meshProgram.program),r.uniformMatrix4fv(this.meshProgram.uniforms.uViewProj,!1,l),r.uniform2f(this.meshProgram.uniforms.uViewport,e,t),r.uniform1i(this.meshProgram.uniforms.uOutline,1),r.uniform1f(this.meshProgram.uniforms.uOutlinePx,1.75),r.enable(r.CULL_FACE),r.cullFace(r.FRONT),r.depthFunc(r.LESS),r.depthMask(!1);for(const e of m){if(e.mesh.faces.length<=2)continue;const t=i.outlines&&"toon"===i.shading,o=i.selectOutline&&e.selected&&!i.editMode;if(!t&&!o)continue;const A=this.getGpuMesh(e),s=this.modelFor(e);r.uniformMatrix4fv(this.meshProgram.uniforms.uModel,!1,s),r.uniformMatrix3fv(this.meshProgram.uniforms.uNormalMat,!1,(0,n.normalMatrix)(s)),r.uniform3f(this.meshProgram.uniforms.uOutlineColor,o?.24:.12,o?.85:.15,o?.66:.2),r.bindVertexArray(A.vaoTri),r.drawArrays(r.TRIANGLES,0,A.triCount),this.calls++}r.depthMask(!0),r.depthFunc(r.LEQUAL),r.cullFace(r.BACK),r.disable(r.CULL_FACE);const o=m.filter((e=>e.selected&&!i.editMode&&e.mesh.faces.length<=2));if(o.length){r.useProgram(this.lineProgram.program),r.uniformMatrix4fv(this.lineProgram.uniforms.uViewProj,!1,l),r.uniform1f(this.lineProgram.uniforms.uOpacity,.95);for(const e of o){const t=this.getGpuMesh(e);this.updateSelection(e,t),r.uniformMatrix4fv(this.lineProgram.uniforms.uModel,!1,this.modelFor(e)),r.bindVertexArray(t.vaoEdge),r.drawArrays(r.LINES,0,t.edgeCount),this.calls++}}}if("wireframe"===i.shading||i.wireOverlay||i.editMode){r.enable(r.BLEND),r.blendFunc(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA),r.useProgram(this.lineProgram.program),r.uniformMatrix4fv(this.lineProgram.uniforms.uViewProj,!1,l);for(const e of m){if(i.editMode&&!e.selected)continue;"wireframe"===i.shading?r.uniform1f(this.lineProgram.uniforms.uOpacity,e.selected?.95:.6):r.uniform1f(this.lineProgram.uniforms.uOpacity,i.xray?.4:.85);const t=this.getGpuMesh(e);this.updateSelection(e,t),r.uniformMatrix4fv(this.lineProgram.uniforms.uModel,!1,this.modelFor(e)),r.bindVertexArray(t.vaoEdge),r.drawArrays(r.LINES,0,t.edgeCount),this.calls++}r.disable(r.BLEND)}if(i.editMode&&"vertex"===i.elementMode){r.useProgram(this.pointProgram.program),r.uniformMatrix4fv(this.pointProgram.uniforms.uViewProj,!1,l),r.uniform1f(this.pointProgram.uniforms.uPointSize,10);for(const e of m){if(!e.selected)continue;const t=this.getGpuMesh(e);this.updateSelection(e,t),r.uniformMatrix4fv(this.pointProgram.uniforms.uModel,!1,this.modelFor(e)),r.bindVertexArray(t.vaoPoint),r.drawArrays(r.POINTS,0,t.pointCount),this.calls++}}const I=[],f=[];for(const e of o)if("light"===e.special){const t=e.selected?[.24,.85,.66]:[1,.76,.28],o=e.position;for(let e=0;e<8;e++){const n=e/8*Math.PI*2;I.push(o[0],o[1],o[2],o[0]+.38*Math.cos(n),o[1]+.35,o[2]+.38*Math.sin(n)),f.push(...t,...t)}I.push(o[0],o[1],o[2],0,0,0),f.push(...t,.35,.3,.15)}else if("camera"===e.special){const t=e.selected?[.24,.85,.66]:[.66,.55,.98],o=e.position;I.push(o[0],o[1],o[2],o[0],o[1]+.45,o[2]),f.push(...t,...t)}if(i.cursor){const[e,t,o]=i.cursor,n=.28,A=[1,.35,.35],s=[.95,.97,1];I.push(e-n,t,o,e+n,t,o,e,t-n,o,e,t+n,o,e,t,o-n,e,t,o+n),f.push(...A,...A,...s,...s,...A,...A)}if(I.length&&this.dynamicVao&&(r.useProgram(this.lineProgram.program),r.uniformMatrix4fv(this.lineProgram.uniforms.uViewProj,!1,l),r.uniformMatrix4fv(this.lineProgram.uniforms.uModel,!1,this.identity),r.uniform1f(this.lineProgram.uniforms.uOpacity,1),this.drawDynamic(this.dynamicVao,I,f,r.LINES)),i.brushRing&&this.dynamicVao){const e=i.brushRing,t=[],o=[],n=e.color??[1,.55,.1],A=[e.center,...e.mirrors??[]],s=e.normal??[0,1,0];let a=Math.abs(s[1])<.9?[0,1,0]:[1,0,0];const c=a[0]*s[0]+a[1]*s[1]+a[2]*s[2];a=[a[0]-s[0]*c,a[1]-s[1]*c,a[2]-s[2]*c];const g=Math.hypot(a[0],a[1],a[2])||1;a=[a[0]/g,a[1]/g,a[2]/g];const d=[s[1]*a[2]-s[2]*a[1],s[2]*a[0]-s[0]*a[2],s[0]*a[1]-s[1]*a[0]],u=32;for(const i of A){for(let A=0;A<u;A++){const s=A/u*Math.PI*2,r=(A+1)/u*Math.PI*2,c=i[0]+e.radius*(Math.cos(s)*a[0]+Math.sin(s)*d[0]),l=i[1]+e.radius*(Math.cos(s)*a[1]+Math.sin(s)*d[1]),g=i[2]+e.radius*(Math.cos(s)*a[2]+Math.sin(s)*d[2]),m=i[0]+e.radius*(Math.cos(r)*a[0]+Math.sin(r)*d[0]),p=i[1]+e.radius*(Math.cos(r)*a[1]+Math.sin(r)*d[1]),h=i[2]+e.radius*(Math.cos(r)*a[2]+Math.sin(r)*d[2]);t.push(c,l,g,m,p,h),o.push(...n,...n)}t.push(i[0],i[1],i[2],i[0]+s[0]*(.25*e.radius),i[1]+s[1]*(.25*e.radius),i[2]+s[2]*(.25*e.radius)),o.push(1,1,1,1,1,1)}r.disable(r.DEPTH_TEST),r.useProgram(this.lineProgram.program),r.uniformMatrix4fv(this.lineProgram.uniforms.uViewProj,!1,l),r.uniformMatrix4fv(this.lineProgram.uniforms.uModel,!1,this.identity),r.uniform1f(this.lineProgram.uniforms.uOpacity,.95),this.drawDynamic(this.dynamicVao,t,o,r.LINES),r.enable(r.DEPTH_TEST)}if(i.overlayLine&&this.dynamicVao){const o=i.overlayLine,n=e/Math.max(1,this.gl.canvas.clientWidth||e),A=t/Math.max(1,this.gl.canvas.clientHeight||t),s=o.x0*n/Math.max(1,e)*2-1,a=1-o.y0*A/Math.max(1,t)*2,c=o.x1*n/Math.max(1,e)*2-1,l=1-o.y1*A/Math.max(1,t)*2;r.disable(r.DEPTH_TEST),r.useProgram(this.lineProgram.program),r.uniformMatrix4fv(this.lineProgram.uniforms.uViewProj,!1,this.identity),r.uniformMatrix4fv(this.lineProgram.uniforms.uModel,!1,this.identity),r.uniform1f(this.lineProgram.uniforms.uOpacity,1),this.drawDynamic(this.dynamicVao,[s,a,0,c,l,0],[1,.42,.32,1,.42,.32],r.LINES),r.enable(r.DEPTH_TEST)}if(i.gizmo&&i.gizmo.length){r.disable(r.DEPTH_TEST),r.enable(r.BLEND),r.blendFunc(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA);const e=[],t=[];for(const o of i.gizmo)for(const n of o.lines)e.push(...n.a,...n.b),t.push(...n.color,...n.color);e.length&&(r.useProgram(this.lineProgram.program),r.uniformMatrix4fv(this.lineProgram.uniforms.uViewProj,!1,l),r.uniformMatrix4fv(this.lineProgram.uniforms.uModel,!1,this.identity),r.uniform1f(this.lineProgram.uniforms.uOpacity,1),this.drawDynamic(this.dynamicVao,e,t,r.LINES));const o=[],n=[];for(const e of i.gizmo)for(const t of e.triangles)o.push(...t.points[0],...t.points[1],...t.points[2]),n.push(...t.color,...t.color,...t.color);o.length&&(r.useProgram(this.overlayProgram.program),r.uniformMatrix4fv(this.overlayProgram.uniforms.uViewProj,!1,l),r.uniformMatrix4fv(this.overlayProgram.uniforms.uModel,!1,this.identity),r.uniform1f(this.overlayProgram.uniforms.uOpacity,1),this.drawDynamicTriangles(o,n)),r.disable(r.BLEND),r.enable(r.DEPTH_TEST)}r.bindVertexArray(null)}snapshot(){return this.gl.canvas.toDataURL("image/png")}dispose(){for(const e of this.meshCache.values())this.disposeGpuMesh(e);this.meshCache.clear();const e=this.gl;e.deleteProgram(this.meshProgram.program),e.deleteProgram(this.lineProgram.program),e.deleteProgram(this.pointProgram.program),e.deleteProgram(this.glowProgram.program),e.deleteProgram(this.overlayProgram.program),this.whiteTexture&&e.deleteTexture(this.whiteTexture),this.gridVao&&e.deleteVertexArray(this.gridVao);for(const t of this.gridBuffers)e.deleteBuffer(t);this.axesVao&&e.deleteVertexArray(this.axesVao);for(const t of this.axesBuffers)e.deleteBuffer(t);this.dynamicVao&&e.deleteVertexArray(this.dynamicVao),this.dynamicPos&&e.deleteBuffer(this.dynamicPos),this.dynamicColor&&e.deleteBuffer(this.dynamicColor),this.dynamicTriVao&&e.deleteVertexArray(this.dynamicTriVao),this.dynamicTriPos&&e.deleteBuffer(this.dynamicTriPos),this.dynamicTriColor&&e.deleteBuffer(this.dynamicTriColor)}}})),__define("lib/render",(function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.drawScene=function(e,t,s,i,g,d){const u="eye"in g?g:(0,o.cameraBasis)(g),m=e.createRadialGradient(.5*t,.34*s,40,.5*t,.5*s,.8*Math.max(t,s));m.addColorStop(0,"#1b2030"),m.addColorStop(1,"#0b0c10"),e.fillStyle=m,e.fillRect(0,0,t,s),d.grid&&function(e,t,o,n){const A=12;e.lineWidth=1;for(let s=-A;s<=A;s++){const i=0===s;e.strokeStyle=i?"rgba(120, 145, 180, 0.34)":"rgba(120, 145, 180, 0.12)";const a=r([s,0,-A],[s,0,A],t,o,n);a&&(e.beginPath(),e.moveTo(a[0].x,a[0].y),e.lineTo(a[1].x,a[1].y),e.stroke());const c=r([-A,0,s],[A,0,s],t,o,n);c&&(e.beginPath(),e.moveTo(c[0].x,c[0].y),e.lineTo(c[1].x,c[1].y),e.stroke())}}(e,u,t,s);d.axes&&function(e,t,n,A){const s=(0,o.project)([0,0,0],t,n,A),i=[[[2,0,0],"#ff6b6b"],[[0,2,0],"#51d88a"],[[0,0,2],"#5cb8ff"]];e.lineWidth=2;for(const[r,a]of i){const i=(0,o.project)(r,t,n,A);s.visible&&i.visible&&(e.strokeStyle=a,e.beginPath(),e.moveTo(s.x,s.y),e.lineTo(i.x,i.y),e.stroke())}}(e,u,t,s);const p=[],h=[],I=[];for(const e of i){if(!e.visible)continue;if("light"===e.type||"camera"===e.type){I.push(e);const n=(0,o.project)(e.position,u,t,s);n.visible&&h.push({id:e.id,x:n.x,y:n.y,radius:18});continue}const i=e.geometry??(0,n.meshFor)(e.type);if(!i)continue;const r=i.vertices.map((t=>(0,o.transformPoint)(t,e.position,e.rotation,e.scale))),c=r.map((e=>(0,o.project)(e,u,t,s))),l=(0,o.project)(e.position,u,t,s),g=Math.max(e.scale[0],e.scale[1],e.scale[2]);if(l.visible){const t=i.radius*g*(s/2/Math.tan(u.fov*Math.PI/360))/Math.max(l.z,.1);h.push({id:e.id,x:l.x,y:l.y,radius:(0,o.clamp)(t+10,14,120)})}const m=e.geometry?.slots?.[0]?.color||e.color||"#ebeff5";for(const e of i.faces)if(!e.some((e=>!c[e]?.visible))&&"wireframe"!==d.shading){const t=r[e[0]],n=r[e[1]],s=r[e[2]],i=(0,o.normalize)((0,o.cross)((0,o.sub)(n,t),(0,o.sub)(s,t))),l=(0,o.clamp)(.38+.7*Math.abs((0,o.dot)(i,A)),.22,1.12);let g="rendered"===d.shading?.98:.92;d.xray&&(g=.16);const u="solid"===d.shading?a("#7f8ca6",l,!1,g):a(m,l,"toon"===d.shading,g),h=e.map((e=>c[e])),I=h.reduce(((e,t)=>e+t.z),0)/h.length;p.push({points:h,depth:I,fill:u,stroke:"toon"===d.shading?"rgba(6, 10, 14, 0.55)":"rgba(8, 12, 18, 0.28)"})}}p.sort(((e,t)=>t.depth-e.depth));for(const t of p){e.beginPath(),e.moveTo(t.points[0].x,t.points[0].y);for(let o=1;o<t.points.length;o++)e.lineTo(t.points[o].x,t.points[o].y);e.closePath(),e.fillStyle=t.fill,e.fill(),e.strokeStyle=t.stroke,e.lineWidth=.75,e.stroke()}for(const A of i){if(!A.visible)continue;if("light"===A.type||"camera"===A.type)continue;const i=A.geometry??(0,n.meshFor)(A.type);if(!i)continue;const a=i.vertices.map((e=>(0,o.transformPoint)(e,A.position,A.rotation,A.scale))),c=d.selectedId===A.id;e.strokeStyle=c?"#3dd9a8":"wireframe"===d.shading?(0,o.withAlpha)(A.geometry?.slots?.[0]?.color||A.color||"#ebeff5",.85):"rgba(220, 230, 245, 0.16)",e.lineWidth=c?2:.8;for(const[o,n]of i.edges){const A=r(a[o],a[n],u,t,s);A&&(e.beginPath(),e.moveTo(A[0].x,A[0].y),e.lineTo(A[1].x,A[1].y),e.stroke())}}for(const o of I){const n=d.selectedId===o.id;"light"===o.type?c(e,o,u,t,s,n):l(e,o,u,t,s,n)}const f=i.find((e=>e.id===d.selectedId));f&&d.showGizmo&&function(e,t,n,A,s,i){const r=(0,o.project)(t.position,n,A,s);if(!r.visible)return;const a=["#ff6b6b","#51d88a","#5cb8ff"],c=[(0,o.add)(t.position,[.85,0,0]),(0,o.add)(t.position,[0,.85,0]),(0,o.add)(t.position,[0,0,.85])],l=["X","Y","Z"];e.lineWidth=2.5,e.font="700 10px Inter, system-ui, sans-serif",e.textAlign="center",e.textBaseline="middle";for(let t=0;t<c.length;t++){const i=(0,o.project)(c[t],n,A,s);i.visible&&(e.strokeStyle=a[t],e.fillStyle=a[t],e.beginPath(),e.moveTo(r.x,r.y),e.lineTo(i.x,i.y),e.stroke(),e.beginPath(),e.arc(i.x,i.y,4.5,0,2*Math.PI),e.fill(),e.fillStyle="#0b0c10",e.fillText(l[t],i.x,i.y+.5))}e.beginPath(),e.arc(r.x,r.y,4,0,2*Math.PI),e.fillStyle="rgba(238, 240, 246, 0.9)",e.fill()}(e,f,u,t,s);return{hits:h,fpsLabel:`${i.length} obj`}};var o=e("lib/math3d"),n=e("lib/mesh");const A=(0,o.normalize)([-.45,.92,.55]);function s(e,t){const n=(0,o.sub)(e,t.eye);return[(0,o.dot)(n,t.right),(0,o.dot)(n,t.up),(0,o.dot)(n,t.forward)]}function i(e,t,o,n){const A=n/2/Math.tan(t.fov*Math.PI/360);return{x:o/2+e[0]/e[2]*A,y:n/2-e[1]/e[2]*A}}function r(e,t,o,n,A){let r=s(e,o),a=s(t,o);if(r[2]<o.near&&a[2]<o.near)return null;if(r[2]<o.near){const e=(o.near-r[2])/(a[2]-r[2]);r=[r[0]+(a[0]-r[0])*e,r[1]+(a[1]-r[1])*e,o.near]}else if(a[2]<o.near){const e=(o.near-a[2])/(r[2]-a[2]);a=[a[0]+(r[0]-a[0])*e,a[1]+(r[1]-a[1])*e,o.near]}return[i(r,o,n,A),i(a,o,n,A)]}function a(e,t,n,A=1){const[s,i,r]=(0,o.hexToRgb)(e),a=n?Math.round(3*t)/3:t;return`rgba(${Math.round(s*a)}, ${Math.round(i*a)}, ${Math.round(r*a)}, ${A})`}function c(e,t,n,A,s,i){const r=(0,o.project)(t.position,n,A,s);if(r.visible){e.save(),e.strokeStyle=i?"#3dd9a8":"#ffc247",e.fillStyle=i?"rgba(61, 217, 168, 0.18)":"rgba(255, 194, 71, 0.18)",e.lineWidth=i?2:1.5,e.beginPath(),e.arc(r.x,r.y,9,0,2*Math.PI),e.fill(),e.stroke();for(let t=0;t<8;t++){const o=t/8*Math.PI*2;e.beginPath(),e.moveTo(r.x+12*Math.cos(o),r.y+12*Math.sin(o)),e.lineTo(r.x+17*Math.cos(o),r.y+17*Math.sin(o)),e.stroke()}e.restore()}}function l(e,t,n,A,s,i){const r=(0,o.rotateEuler)([0,0,-1],t.rotation),a=(0,o.rotateEuler)([0,1,0],t.rotation),c=(0,o.normalize)((0,o.cross)(r,a)),l=.32,g=.75,d=t.position,u=[(0,o.add)((0,o.add)(d,(0,o.scale)(r,g)),(0,o.add)((0,o.scale)(c,-.32),(0,o.scale)(a,-.32))),(0,o.add)((0,o.add)(d,(0,o.scale)(r,g)),(0,o.add)((0,o.scale)(c,l),(0,o.scale)(a,-.32))),(0,o.add)((0,o.add)(d,(0,o.scale)(r,g)),(0,o.add)((0,o.scale)(c,l),(0,o.scale)(a,l))),(0,o.add)((0,o.add)(d,(0,o.scale)(r,g)),(0,o.add)((0,o.scale)(c,-.32),(0,o.scale)(a,l)))],m=i?"#3dd9a8":"#a78bfa";e.strokeStyle=m,e.lineWidth=i?2:1.5;const p=(0,o.project)(d,n,A,s);for(const t of u){const i=(0,o.project)(t,n,A,s);p.visible&&i.visible&&(e.beginPath(),e.moveTo(p.x,p.y),e.lineTo(i.x,i.y),e.stroke())}e.beginPath();for(let t=0;t<u.length;t++){const i=(0,o.project)(u[t],n,A,s);i.visible&&(0===t?e.moveTo(i.x,i.y):e.lineTo(i.x,i.y))}e.closePath(),e.stroke()}})),__define("stores/brush",(function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.brushStore=void 0;var o=e("svelte/store");const n={kind:"draw",radius:.9,strength:.6,hardness:.5,falloff:"smooth",inverted:!1,symmetryX:!1,symmetryY:!1,symmetryZ:!1,color:"#f97316",quickSmooth:!1};const A=function(){const{subscribe:e,set:t,update:s}=(0,o.writable)(n);return{subscribe:e,set:t,setKind:e=>s((t=>(t.kind=e,t))),setRadius:e=>s((t=>(t.radius=Math.min(5,Math.max(.05,e)),t))),setStrength:e=>s((t=>(t.strength=Math.min(1,Math.max(.02,e)),t))),setHardness:e=>s((t=>(t.hardness=Math.min(1,Math.max(0,e)),t))),setFalloff:e=>s((t=>(t.falloff=e,t))),toggleInverted:()=>s((e=>(e.inverted=!e.inverted,e))),setInverted:e=>s((t=>(t.inverted=e,t))),toggleSymmetry:e=>s((t=>("x"===e&&(t.symmetryX=!t.symmetryX),"y"===e&&(t.symmetryY=!t.symmetryY),"z"===e&&(t.symmetryZ=!t.symmetryZ),t))),setQuickSmooth:e=>s((t=>(t.quickSmooth=e,t))),setColor:e=>s((t=>(t.color=e,t))),symmetry:()=>{const e=(0,o.get)(A);return e.symmetryX||e.symmetryY||e.symmetryZ?{x:e.symmetryX,y:e.symmetryY,z:e.symmetryZ}:null},reset:()=>t({...n})}}();t.brushStore=A})),__define("stores/physics",(function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.physicsStore=void 0;var o=e("svelte/store");const n=function(){const{subscribe:e,set:t,update:n}=(0,o.writable)({running:!1,gravity:9.8});return{subscribe:e,set:t,toggle:()=>n((e=>(e.running=!e.running,e))),setRunning:e=>n((t=>(t.running=e,t))),setGravity:e=>n((t=>(t.gravity=Math.max(0,e),t)))}}();t.physicsStore=n})),__define("stores/ui",(function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.uiStore=void 0;var o=e("svelte/store");const n={showOutliner:!1,dockOpen:!0,activeDialog:null,toast:null};const A=function(){const{subscribe:e,set:t,update:A}=(0,o.writable)(n);return{subscribe:e,set:t,toggleOutliner:()=>A((e=>(e.showOutliner=!e.showOutliner,e))),toggleDock:()=>A((e=>(e.dockOpen=!e.dockOpen,e))),openDialog:e=>A((t=>(t.activeDialog=e,t))),closeDialog:()=>A((e=>(e.activeDialog=null,e))),showToast:(e,t="info",o=2e3)=>A((n=>(n.toast={message:e,type:t,duration:o},n))),hideToast:()=>A((e=>(e.toast=null,e)))}}();t.uiStore=A})),__define("stores/viewport",(function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.viewportStore=void 0;var o=e("svelte/store");const n={width:0,height:0,camera:{position:[0,1,5],rotation:[0,0,0,1],fov:50,aspect:16/9,near:.1,far:1e3},gizmoMode:"translate",gizmoSpace:"world",gizmoPivot:"median",snapEnabled:!1,snapIncrement:.5,snapAngle:15,shadingMode:"rendered",xray:!1,overlays:{grid:!0,axes:!0,bounds:!1,wireframe:!1,normals:!1},pipCamera:null,pipMode:0,pipZoom:1.8,resolution:[1920,1080],cursorPosition:[0,0,0],cursorVisible:!1,viewportSplit:1,renderRegion:null,viewThroughCamera:!1,activeCameraId:null};const A=function(){const{subscribe:e,set:t,update:A}=(0,o.writable)(n);return{subscribe:e,set:t,setSize:(e,t)=>A((o=>(o.width=e,o.height=t,o.camera.aspect=e/t,o))),setCamera:e=>A((t=>(t.camera={...t.camera,...e},t))),setGizmoMode:e=>A((t=>(t.gizmoMode=e,t))),setGizmoSpace:e=>A((t=>(t.gizmoSpace=e,t))),setGizmoPivot:e=>A((t=>(t.gizmoPivot=e,t))),toggleSnap:()=>A((e=>(e.snapEnabled=!e.snapEnabled,e))),setSnapIncrement:e=>A((t=>(t.snapIncrement=e,t))),setSnapAngle:e=>A((t=>(t.snapAngle=e,t))),setShadingMode:e=>A((t=>(t.shadingMode=e,t))),toggleXray:()=>A((e=>(e.xray=!e.xray,e))),toggleOverlay:e=>A((t=>(t.overlays[e]=!t.overlays[e],t))),toggleGrid:()=>A((t=>(t.overlays.grid=!t.overlays.grid,t))),toggleAxes:()=>A((t=>(t.overlays.axes=!t.overlays.axes,t))),setPIPCamera:(e,t=0)=>A((o=>(o.pipCamera=e,o.pipMode=t,o))),setPIPZoom:e=>A((t=>(t.pipZoom=Math.min(3,Math.max(.2,e)),t))),setResolution:(e,t)=>A((o=>(o.resolution=[e,t],o))),setCursor:e=>A((t=>(t.cursorPosition=[e[0],e[1],e[2]],t))),toggleCursor:()=>A((e=>(e.cursorVisible=!e.cursorVisible,e))),setCursorVisible:e=>A((t=>(t.cursorVisible=e,t))),setViewportSplit:e=>A((t=>(t.viewportSplit=e,t))),setRenderRegion:e=>A((t=>(t.renderRegion=e?[...e]:null,t))),toggleViewThroughCamera:()=>A((e=>(e.viewThroughCamera=!e.viewThroughCamera,e))),setViewThroughCamera:e=>A((t=>(t.viewThroughCamera=e,t))),setActiveCameraId:e=>A((t=>(t.activeCameraId=e,t)))}}();t.viewportStore=A})),__define("stores/workspace",(function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.workspaceStore=t.currentWorkspace=t.currentHint=t.currentChips=t.currentChipName=t.currentChipIndex=void 0;var o=e("svelte/store"),n=e("lib/constants");const A={current:"mod",open:!0,chipIndices:{mod:0,edt:0,scl:0,uvp:0,shd:0,rig:0,ani:0,phy:0,gam:0,ren:0,age:0}};const s=function(){const{subscribe:e,set:t,update:n}=(0,o.writable)(A);return{subscribe:e,set:t,setWorkspace:e=>n((t=>(t.current=e,t.open=!0,t))),toggleOpen:()=>n((e=>(e.open=!e.open,e))),setChip:(e,t)=>n((o=>(o.chipIndices[e]=t,o.open=!0,o)))}}();t.workspaceStore=s;const i=(0,o.derived)(s,(e=>n.WORKSPACES[e.current]));t.currentWorkspace=i;const r=(0,o.derived)(s,(e=>n.WORKSPACE_CHIPS[e.current]||[]));t.currentChips=r;const a=(0,o.derived)(s,(e=>e.chipIndices[e.current]||0));t.currentChipIndex=a;const c=(0,o.derived)([r,a],(([e,t])=>e[t]?.[0]||""));t.currentChipName=c;const l=(0,o.derived)(s,(e=>n.HINTS[e.current]));t.currentHint=l})),__define("stores/timeline",(function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.KEY_EPSILON=void 0,Object.defineProperty(t,"MAX_TIMELINE_SECONDS",{enumerable:!0,get:function(){return n.MAX_TIMELINE_SECONDS}}),t.actionDuration=h,Object.defineProperty(t,"frameToTime",{enumerable:!0,get:function(){return n.frameToTime}}),t.roundTime=i,t.sameTime=r,t.stripActionTime=p,Object.defineProperty(t,"timeToFrame",{enumerable:!0,get:function(){return n.timeToFrame}}),t.timelineStore=void 0;var o=e("svelte/store"),n=e("lib/fcurve");const A={currentTime:0,duration:10,startFrame:0,endFrame:300,playing:!1,loop:!0,easing:!0,autoKey:!0,snapToFrames:!1,multiSelectMode:!1,show:!1,frameRate:30,keyframes:new Map,curves:new Map,tracks:new Map,strips:[],clips:new Map,selectedStripId:null,selectedKey:null,selectedKeys:[],clipboardKeys:[],isUserScrubbing:!1,pxPerSecond:60},s=.001;function i(e){return Math.round(1e4*e)/1e4}function r(e,t){return Math.abs(e-t)<s}t.KEY_EPSILON=s;let a=1;function c(){const e=new Set((0,o.get)(I).strips.map((e=>e.id)));let t="strip-"+a++;for(;e.has(t);)t="strip-"+a++;return t}function l(e,t,o){return Math.min(o,Math.max(t,e))}function g(e,t){return Array.isArray(e)&&3===e.length&&e.every((e=>"number"==typeof e&&Number.isFinite(e)))?[e[0],e[1],e[2]]:[...t]}function d(e,t){let o=e.get(t);return o||(o=new Map,e.set(t,o)),o}function u(e,t){let o=e.get(t);return o||(o=new n.FCurve(t),e.set(t,o)),o}function m(e,t){let o=e.get(t);return o||(o={objectId:t,locked:!1,hidden:!1,muted:!1},e.set(t,o)),o}function p(e,t){if(e.frozen)return e.actionStart;const o=Math.max(0,t-e.start)*e.speed;return l(e.reversed?e.actionEnd-o:e.actionStart+o,Math.min(e.actionStart,e.actionEnd),Math.max(e.actionStart,e.actionEnd))}function h(e){let t=0;for(const o of e)t=Math.max(t,o.time);return t}const I=function(){const{subscribe:e,set:t,update:a}=(0,o.writable)(A);let f=0,C=0,y=!1;function E(e){f=e,C=performance.now(),y=!0}function B(){y=!1}function b(e){return!e.startFrame||e.startFrame<=0?0:l(i(e.startFrame/e.frameRate),0,Math.max(0,e.duration-1/e.frameRate))}function v(e,t,o,A,s){const i=d(e,t);for(const e of n.TRANSFORM_CHANNELS)u(i,e);const r=s??o.interpolation;i.get("location.x")?.insert(o.time,o.position[0],r),i.get("location.y")?.insert(o.time,o.position[1],r),i.get("location.z")?.insert(o.time,o.position[2],r),i.get("scale.x")?.insert(o.time,o.scale[0],r),i.get("scale.y")?.insert(o.time,o.scale[1],r),i.get("scale.z")?.insert(o.time,o.scale[2],r);const a=(0,n.eulerToQuatClosest)(o.rotation,A??[1,0,0,0]);if(i.get("rotation_quaternion.w")?.insert(o.time,a[0],r),i.get("rotation_quaternion.x")?.insert(o.time,a[1],r),i.get("rotation_quaternion.y")?.insert(o.time,a[2],r),i.get("rotation_quaternion.z")?.insert(o.time,a[3],r),void 0!==o.visible)u(i,n.VISIBILITY_CHANNEL).insert(o.time,o.visible?1:0,r??"constant");else if(i.has(n.VISIBILITY_CHANNEL)){const e=i.get(n.VISIBILITY_CHANNEL),t=e.evaluate(o.time,!0)??1;e.insert(o.time,t>=.5?1:0,r??"constant")}}function Q(e,t,o){const A=e.get(t);return A?(0,n.evaluateQuaternion)(A,o,!0):null}function M(e,t,o){const A=(e.keyframes.get(t)??[]).filter((e=>!r(e.time,o)));A.length?e.keyframes.set(t,A):e.keyframes.delete(t);const s=e.curves.get(t);if(s)for(const e of n.CHANNEL_PATHS)s.get(e)?.remove(o)}return{subscribe:e,set:t,snapTime:e=>{const t=(0,o.get)(I),A=l(e,0,t.duration);return t.snapToFrames?(0,n.frameToTime)((0,n.timeToFrame)(A,t.frameRate),t.frameRate):i(A)},setTime:e=>a((t=>{const o=l(e,0,t.duration);return t.currentTime=o,t.playing&&E(o),t})),seek:e=>a((t=>(t.currentTime=l(e,0,t.duration),t.playing=!1,B(),t))),setFrame:e=>a((t=>{const o=l((0,n.frameToTime)(e,t.frameRate),0,t.duration);return t.currentTime=o,t.playing&&E(o),t})),getCurrentFrame:()=>{const e=(0,o.get)(I);return(0,n.timeToFrame)(e.currentTime,e.frameRate)},setStartFrame:e=>a((t=>{const o=Math.max(0,t.endFrame-1);t.startFrame=l(Math.round(e),0,o);const n=b(t);return t.currentTime<n&&(t.currentTime=n),t})),setEndFrame:e=>a((t=>{const o=Math.round(n.MAX_TIMELINE_SECONDS*t.frameRate);return t.endFrame=l(Math.round(e),t.startFrame+1,o),t.duration=l(i(t.endFrame/t.frameRate),.1,n.MAX_TIMELINE_SECONDS),t.currentTime>t.duration&&(t.currentTime=t.duration),t.playing&&E(t.currentTime),t})),setDuration:e=>a((t=>(t.duration=l(e,.1,n.MAX_TIMELINE_SECONDS),t.endFrame=Math.max(1,Math.round(t.duration*t.frameRate)),t.startFrame>=t.endFrame&&(t.startFrame=Math.max(0,t.endFrame-1)),t.currentTime>t.duration&&(t.currentTime=t.duration),t.playing&&E(t.currentTime),t))),setPlaying:e=>a((t=>{if(e===t.playing)return t;if(t.playing=e,e){const e=b(t);(t.currentTime>=t.duration||t.currentTime<e)&&(t.currentTime=e),E(t.currentTime)}else B();return t})),togglePlay:()=>a((e=>{if(e.playing)return e.playing=!1,B(),e;const t=b(e);return(e.currentTime>=e.duration||e.currentTime<t)&&(e.currentTime=t),e.playing=!0,E(e.currentTime),e})),stop:()=>a((e=>(e.playing=!1,B(),e.currentTime=b(e),e))),goToStart:()=>a((e=>{const t=b(e);return e.currentTime=t,e.playing&&E(t),e})),goToEnd:()=>a((e=>(e.currentTime=e.duration,e.playing&&E(e.duration),e))),resyncClock:()=>{const e=(0,o.get)(I);e.playing&&E(e.currentTime)},toggleLoop:()=>a((e=>(e.loop=!e.loop,e))),setLoop:e=>a((t=>(t.loop=e,t))),toggleEasing:()=>a((e=>(e.easing=!e.easing,e))),setEasing:e=>a((t=>(t.easing=e,t))),toggleAutoKey:()=>a((e=>(e.autoKey=!e.autoKey,e))),setAutoKey:e=>a((t=>(t.autoKey=e,t))),toggleSnapToFrames:()=>a((e=>(e.snapToFrames=!e.snapToFrames,e))),setSnapToFrames:e=>a((t=>(t.snapToFrames=e,t))),toggleMultiSelectMode:()=>a((e=>(e.multiSelectMode=!e.multiSelectMode,e))),setMultiSelectMode:e=>a((t=>(t.multiSelectMode=e,t))),toggleShow:()=>a((e=>(e.show=!e.show,e))),setShow:e=>a((t=>(t.show=e,t))),setFrameRate:e=>a((t=>(t.frameRate=l(Math.round(e),1,120),t.endFrame=Math.max(1,Math.round(t.duration*t.frameRate)),t.startFrame>=t.endFrame&&(t.startFrame=Math.max(0,t.endFrame-1)),t))),setPxPerSecond:e=>a((t=>(t.pxPerSecond=l(e,.25,400),t))),setUserScrubbing:e=>a((t=>(t.isUserScrubbing===e||(t.isUserScrubbing=e),t))),getTrackMeta:e=>(0,o.get)(I).tracks.get(e)??{objectId:e,locked:!1,hidden:!1,muted:!1},setTrackMeta:(e,t)=>a((o=>{const n=m(o.tracks,e);return Object.assign(n,t,{objectId:e}),o})),toggleTrackLock:e=>a((t=>{const o=m(t.tracks,e);return o.locked=!o.locked,t})),toggleTrackMute:e=>a((t=>{const o=m(t.tracks,e);return o.muted=!o.muted,t})),toggleTrackHidden:e=>a((t=>{const o=m(t.tracks,e);return o.hidden=!o.hidden,t})),addKeyframe:(e,t)=>a((o=>{if(!e||!Number.isFinite(t.time))return o;if(o.tracks.get(e)?.locked)return o;const A=l(t.time,0,o.duration),s=o.snapToFrames?(0,n.frameToTime)((0,n.timeToFrame)(A,o.frameRate),o.frameRate):i(A),a=o.keyframes.get(e)??[],c=a.findIndex((e=>r(e.time,s))),d=c>=0?a[c].time:s,u={time:d,position:g(t.position,[0,0,0]),rotation:g(t.rotation,[0,0,0]),scale:g(t.scale,[1,1,1]),...void 0!==t.visible?{visible:Boolean(t.visible)}:{},...t.interpolation?{interpolation:t.interpolation}:{}};c>=0?a[c]=u:a.push(u),a.sort(((e,t)=>e.time-t.time)),o.keyframes.set(e,a);const m=Q(o.curves,e,d);v(o.curves,e,u,m,t.interpolation),o.selectedKey={objectId:e,time:d},o.selectedKeys=[{objectId:e,time:d}];const p=o.clips.get(e);if(p){const t=Math.min(p.start,a[0].time),n=Math.max(p.end,a[a.length-1].time,t+.2);o.clips.set(e,{start:t,end:Math.min(o.duration,n)})}return o})),updateKeyframe:(e,t,o)=>a((n=>{if(n.tracks.get(e)?.locked)return n;const A=n.keyframes.get(e);if(!A)return n;const s=A.findIndex((e=>r(e.time,t)));if(s<0)return n;const i=A[s],a={...i,position:o.position?g(o.position,i.position):[...i.position],rotation:o.rotation?g(o.rotation,i.rotation):[...i.rotation],scale:o.scale?g(o.scale,i.scale):[...i.scale],...void 0!==o.visible?{visible:Boolean(o.visible)}:{},...o.interpolation?{interpolation:o.interpolation}:{}};A[s]=a;const c=Q(n.curves,e,i.time);return v(n.curves,e,a,c,o.interpolation),n})),setVisibilityKeyframe:(e,t,o,A)=>a((s=>{if(!e||!Number.isFinite(t)||s.tracks.get(e)?.locked)return s;const a=s.snapToFrames?(0,n.frameToTime)((0,n.timeToFrame)(l(t,0,s.duration),s.frameRate),s.frameRate):i(l(t,0,s.duration));u(d(s.curves,e),n.VISIBILITY_CHANNEL).insert(a,o?1:0,"constant");const c=s.keyframes.get(e)??[],m=c.findIndex((e=>r(e.time,a)));if(m>=0)c[m]={...c[m],visible:o};else if(A){const t={time:a,position:g(A.position,[0,0,0]),rotation:g(A.rotation,[0,0,0]),scale:g(A.scale,[1,1,1]),visible:o};c.push(t),c.sort(((e,t)=>e.time-t.time)),s.keyframes.set(e,c);const n=Q(s.curves,e,a);v(s.curves,e,t,n)}return s})),addChannelKeyframe:(e,t,o,A,s)=>a((i=>{if(i.tracks.get(e)?.locked)return i;return u(d(i.curves,e),t).insert(l(o,0,n.MAX_TIMELINE_SECONDS),A,s),i})),setInterpolation:(e,t,o,n)=>a((A=>{if(A.tracks.get(e)?.locked)return A;const s=A.curves.get(e)?.get(t);if(!s)return A;for(const e of s.keys)(void 0===n||r(e.time,n))&&(e.interpolation=o);return A})),setObjectInterpolation:(e,t,o)=>a((A=>{if(A.tracks.get(e)?.locked)return A;const s=A.curves.get(e);if(s)for(const e of n.TRANSFORM_CHANNELS){const n=s.get(e);if(n)for(const e of n.keys)(void 0===o||r(e.time,o))&&(e.interpolation=t)}const i=A.keyframes.get(e);if(i)for(const e of i)(void 0===o||r(e.time,o))&&(e.interpolation=t);return A})),interpolationOf:(e,t,n)=>{const A=(0,o.get)(I),s=A.curves.get(e)?.get(t);if(!s||!s.keys.length)return"bezier";if(void 0!==n){const e=s.keys.find((e=>r(e.time,n)));if(e)return e.interpolation}return s.keys[0]?.interpolation??"bezier"},removeKeyframe:(e,t)=>a((o=>(o.tracks.get(e)?.locked||(M(o,e,t),o.selectedKey?.objectId===e&&r(o.selectedKey.time,t)&&(o.selectedKey=null),o.selectedKeys=o.selectedKeys.filter((o=>!(o.objectId===e&&r(o.time,t)))),!o.selectedKey&&o.selectedKeys.length&&(o.selectedKey={...o.selectedKeys[o.selectedKeys.length-1]})),o))),selectKeyframe:(e,t,o=!1)=>a((n=>{if(!e||!Number.isFinite(t))return n;const A=l(t,0,n.duration);if(o||n.multiSelectMode){const t=n.selectedKeys.findIndex((t=>t.objectId===e&&r(t.time,A)));t>=0?(n.selectedKeys.splice(t,1),n.selectedKey=n.selectedKeys.length?{...n.selectedKeys[n.selectedKeys.length-1]}:null):(n.selectedKeys.push({objectId:e,time:A}),n.selectedKey={objectId:e,time:A})}else n.selectedKey={objectId:e,time:A},n.selectedKeys=[{objectId:e,time:A}];return n.currentTime=A,n.playing=!1,B(),n})),selectKeyframes:e=>a((t=>{const o=e.filter((e=>Boolean(e.objectId)&&Number.isFinite(e.time))).map((e=>({objectId:e.objectId,time:l(e.time,0,t.duration)})));return t.selectedKeys=o,t.selectedKey=o.length?{...o[o.length-1]}:null,t})),selectKeyframesInRange:(e,t,o)=>a((n=>{const A=Math.min(e,t)-s,i=Math.max(e,t)+s,r=[];for(const[e,t]of n.keyframes)if(!(o&&e!==o||n.tracks.get(e)?.locked))for(const o of t)o.time>=A&&o.time<=i&&r.push({objectId:e,time:o.time});return n.selectedKeys=r,n.selectedKey=r.length?{...r[r.length-1]}:null,n})),clearKeyframeSelection:()=>a((e=>(e.selectedKey=null,e.selectedKeys=[],e))),deleteSelectedKey:()=>a((e=>{const t=e.selectedKeys.length>0?[...e.selectedKeys]:e.selectedKey?[e.selectedKey]:[];if(!t.length)return e;for(const o of t)e.tracks.get(o.objectId)?.locked||M(e,o.objectId,o.time);return e.selectedKey=null,e.selectedKeys=[],e})),moveKeyframe:(e,t,o)=>a((A=>{if(A.tracks.get(e)?.locked)return A;const s=i(t),a=l(o,0,A.duration),c=A.snapToFrames?(0,n.frameToTime)((0,n.timeToFrame)(a,A.frameRate),A.frameRate):i(a);if(r(s,c))return A;const g=A.keyframes.get(e);if(!g)return A;const d=g.findIndex((e=>r(e.time,s)));if(d<0)return A;const u=g[d],m={...u,time:c,position:[...u.position],rotation:[...u.rotation],scale:[...u.scale]},p=g.filter((e=>!r(e.time,c))),h=p.findIndex((e=>r(e.time,s)));if(h<0)return A;p[h]=m,p.sort(((e,t)=>e.time-t.time)),A.keyframes.set(e,p);const I=A.curves.get(e);if(I)for(const e of n.CHANNEL_PATHS){const t=I.get(e);if(!t)continue;const o=t.keys.findIndex((e=>r(e.time,s)));if(o<0)continue;const n=t.keys.findIndex(((e,t)=>t!==o&&r(e.time,c)));n>=0&&t.keys.splice(n,1);const A=t.keys.findIndex((e=>r(e.time,s)));A<0||(t.keys[A].time=c,t.keys.sort(((e,t)=>e.time-t.time)))}return A.selectedKey?.objectId===e&&r(A.selectedKey.time,s)&&(A.selectedKey={objectId:e,time:c},A.currentTime=l(c,0,A.duration)),A.selectedKeys=A.selectedKeys.map((t=>t.objectId===e&&r(t.time,s)?{objectId:e,time:c}:t)),A})),moveSelectedKeyframes:e=>a((t=>{const o=t.selectedKeys.length>0?[...t.selectedKeys]:t.selectedKey?[t.selectedKey]:[];if(!o.length||!Number.isFinite(e)||Math.abs(e)<1e-6)return t;let A=1/0,s=-1/0;for(const e of o)t.tracks.get(e.objectId)?.locked||(A=Math.min(A,e.time),s=Math.max(s,e.time));if(!Number.isFinite(A))return t;let a=l(e,-A,t.duration-s);if(t.snapToFrames&&(a=Math.round(a*t.frameRate)/t.frameRate),Math.abs(a)<1e-6)return t;const c=[...o].sort(((e,t)=>a>0?t.time-e.time:e.time-t.time)),g=[];for(const e of c){if(t.tracks.get(e.objectId)?.locked){g.push(e);continue}const o=i(e.time),A=i(l(o+a,0,t.duration)),s=t.keyframes.get(e.objectId);if(!s)continue;const c=s.findIndex((e=>r(e.time,o)));c>=0&&(s[c]={...s[c],time:A,position:[...s[c].position],rotation:[...s[c].rotation],scale:[...s[c].scale]},s.sort(((e,t)=>e.time-t.time)));const d=t.curves.get(e.objectId);if(d)for(const e of n.CHANNEL_PATHS){const t=d.get(e);if(!t)continue;const n=t.keys.findIndex((e=>r(e.time,o)));n>=0&&(t.keys[n].time=A,t.keys.sort(((e,t)=>e.time-t.time)))}g.push({objectId:e.objectId,time:A})}if(t.selectedKeys=g,t.selectedKey){const e=g[g.length-1];e&&(t.selectedKey={...e},t.currentTime=e.time)}return t})),copySelectedKeys:e=>{let t=0;return a((o=>{let n=o.selectedKeys.length>0?[...o.selectedKeys]:o.selectedKey?[o.selectedKey]:[];if(!n.length&&e){const t=o.keyframes.get(e)??[],A=t.find((e=>r(e.time,o.currentTime)))??t[0];A&&(n=[{objectId:e,time:A.time}])}if(!n.length)return o;const A=Math.min(...n.map((e=>e.time))),s=[];for(const e of n){const t=(o.keyframes.get(e.objectId)??[]).find((t=>r(t.time,e.time)));if(!t)continue;const n={},a=o.curves.get(e.objectId);if(a)for(const[t,o]of a){const A=o.keys.find((t=>r(t.time,e.time)));A&&(n[t]={...A,handleLeft:[A.handleLeft[0],A.handleLeft[1]],handleRight:[A.handleRight[0],A.handleRight[1]]})}s.push({objectId:e.objectId,offset:i(t.time-A),pose:{...t,position:[...t.position],rotation:[...t.rotation],scale:[...t.scale]},channels:n})}return o.clipboardKeys=s,t=s.length,o})),t},pasteKeysAtPlayhead:e=>{let t=0;return a((o=>{if(!o.clipboardKeys.length)return o;const A=new Set(o.clipboardKeys.map((e=>e.objectId))),s=Boolean(e&&1===A.size),a=[];for(const A of o.clipboardKeys){const c=s?e:A.objectId;if(o.tracks.get(c)?.locked)continue;const g=l(o.currentTime+A.offset,0,o.duration),m=o.snapToFrames?(0,n.frameToTime)((0,n.timeToFrame)(g,o.frameRate),o.frameRate):i(g),p=o.keyframes.get(c)??[],h=p.findIndex((e=>r(e.time,m))),I={...A.pose,time:m,position:[...A.pose.position],rotation:[...A.pose.rotation],scale:[...A.pose.scale]};h>=0?p[h]=I:p.push(I),p.sort(((e,t)=>e.time-t.time)),o.keyframes.set(c,p);const f=Q(o.curves,c,m);v(o.curves,c,I,f,A.pose.interpolation);const C=d(o.curves,c);for(const[e,t]of Object.entries(A.channels)){const o=u(C,e).insert(m,t.value,t.interpolation);o.handleLeft=[t.handleLeft[0],t.handleLeft[1]],o.handleRight=[t.handleRight[0],t.handleRight[1]],o.autoLeft=t.autoLeft,o.autoRight=t.autoRight}a.push({objectId:c,time:m}),t++}return a.length&&(o.selectedKeys=a,o.selectedKey={...a[a.length-1]}),o})),t},prevKeyframe:e=>{let t=null,o=null;return a((n=>{for(const[A,i]of n.keyframes)if(!(e&&A!==e||n.tracks.get(A)?.hidden))for(const e of i)e.time<n.currentTime-s&&(null===t||e.time>t)&&(t=e.time,o=A);return null!==t&&null!==o&&(n.currentTime=t,n.selectedKey={objectId:o,time:t},n.selectedKeys=[{objectId:o,time:t}],n.playing=!1,B()),n})),t},nextKeyframe:e=>{let t=null,o=null;return a((n=>{for(const[A,i]of n.keyframes)if(!(e&&A!==e||n.tracks.get(A)?.hidden))for(const e of i)e.time>n.currentTime+s&&(null===t||e.time<t)&&(t=e.time,o=A);return null!==t&&null!==o&&(n.currentTime=t,n.selectedKey={objectId:o,time:t},n.selectedKeys=[{objectId:o,time:t}],n.playing=!1,B()),n})),t},shiftLayer:(e,t)=>a((o=>{if(o.tracks.get(e)?.locked)return o;const n=o.keyframes.get(e)??[],A=o.strips.filter((t=>t.objectId===e));if(!n.length&&!A.length||!Number.isFinite(t))return o;let s=1/0,r=-1/0;for(const e of n)s=Math.min(s,e.time),r=Math.max(r,e.time);for(const e of A)s=Math.min(s,e.start),r=Math.max(r,e.end);const a=l(t,-s,o.duration-r);if(Math.abs(a)<1e-6)return o;const c=n.map((e=>({...e,time:i(l(e.time+a,0,o.duration))}))).sort(((e,t)=>e.time-t.time));o.keyframes.set(e,c);const g=o.curves.get(e);if(g)for(const e of g.values()){for(const t of e.keys)t.time=i(l(t.time+a,0,o.duration));e.keys.sort(((e,t)=>e.time-t.time))}for(const e of A)e.start=i(l(e.start+a,0,o.duration)),e.end=i(l(e.end+a,0,o.duration));return o.selectedKey?.objectId===e&&(o.selectedKey={objectId:e,time:i(l(o.selectedKey.time+a,0,o.duration))}),o.selectedKeys=o.selectedKeys.map((t=>t.objectId===e?{objectId:e,time:i(l(t.time+a,0,o.duration))}:t)),o})),setClip:(e,t,o)=>a((n=>{if(n.tracks.get(e)?.locked)return n;const A=i(l(Math.min(t,o),0,n.duration)),s=i(l(Math.max(t,o),0,n.duration));return s-A<.1||n.clips.set(e,{start:A,end:s}),n})),shiftClip:(e,t)=>a((o=>{if(o.tracks.get(e)?.locked)return o;const n=o.clips.get(e);if(!n||!Number.isFinite(t))return o;const A=l(t,-n.start,o.duration-n.end);return Math.abs(A)<1e-6||o.clips.set(e,{start:i(l(n.start+A,0,o.duration)),end:i(l(n.end+A,0,o.duration))}),o})),setLayerSpeed:(e,t)=>a((o=>{if(o.tracks.get(e)?.locked)return o;const A=l(t,.1,10),r=o.clips.get(e)??{start:0,end:15},a=l(Math.max(.1,r.end-r.start)/A,.1,n.MAX_TIMELINE_SECONDS),c=l(i(r.start+a),r.start+.1,o.duration);o.clips.set(e,{start:r.start,end:c});const g=o.keyframes.get(e);if(g&&g.length){for(const e of g)e.time>=r.start-s&&(e.time=i(l(r.start+(e.time-r.start)/A,0,o.duration)));g.sort(((e,t)=>e.time-t.time));const t=o.curves.get(e);if(t)for(const e of t.values()){for(const t of e.keys)t.time>=r.start-s&&(t.time=i(l(r.start+(t.time-r.start)/A,0,o.duration)));e.keys.sort(((e,t)=>e.time-t.time))}}for(const t of o.strips)t.objectId===e&&(t.speed=A,t.end=i(l(t.start+(t.end-t.start)/A,t.start+.1,o.duration)));return o})),reverseLayer:e=>a((t=>{if(t.tracks.get(e)?.locked)return t;const o=t.clips.get(e)??{start:0,end:15},n=t.keyframes.get(e);if(n&&n.length){for(const e of n)e.time>=o.start-s&&e.time<=o.end+s&&(e.time=i(l(o.start+o.end-e.time,0,t.duration)));n.sort(((e,t)=>e.time-t.time));const A=t.curves.get(e);if(A)for(const e of A.values()){for(const n of e.keys)n.time>=o.start-s&&n.time<=o.end+s&&(n.time=i(l(o.start+o.end-n.time,0,t.duration)));e.keys.sort(((e,t)=>e.time-t.time))}}for(const o of t.strips)o.objectId===e&&(o.reversed=!o.reversed);return t})),freezeLayer:(e,t,o=2)=>a((n=>{if(n.tracks.get(e)?.locked)return n;const A=void 0!==t?t:n.currentTime,r=l(o,.2,30),a=n.clips.get(e)??{start:0,end:15};n.clips.set(e,{start:a.start,end:l(a.end+r,0,n.duration)});const c=n.keyframes.get(e)??[];for(const e of c)e.time>A+s&&(e.time=i(l(e.time+r,0,n.duration)));const g=n.curves.get(e);if(g)for(const e of g.values()){for(const t of e.keys)t.time>A+s&&(t.time=i(l(t.time+r,0,n.duration)));e.keys.sort(((e,t)=>e.time-t.time))}if(c.length){const t=c.slice().reverse().find((e=>e.time<=A+s))??c[0],o={time:i(l(A+r,0,n.duration)),position:[...t.position],rotation:[...t.rotation],scale:[...t.scale],interpolation:"constant"};c.push(o),c.sort(((e,t)=>e.time-t.time));const a=Q(n.curves,e,o.time);v(n.curves,e,o,a,"constant")}return n})),removeKeyframesFor:e=>a((t=>(t.keyframes.delete(e),t.curves.delete(e),t.clips.delete(e),t.tracks.delete(e),t.strips=t.strips.filter((t=>t.objectId!==e)),t.selectedStripId&&!t.strips.some((e=>e.id===t.selectedStripId))&&(t.selectedStripId=null),t.selectedKey?.objectId===e&&(t.selectedKey=null),t.selectedKeys=t.selectedKeys.filter((t=>t.objectId!==e)),t))),clearKeyframes:()=>a((e=>(e.keyframes=new Map,e.curves=new Map,e.tracks=new Map,e.strips=[],e.clips=new Map,e.selectedStripId=null,e.selectedKey=null,e.selectedKeys=[],e.startFrame=0,e))),prevFrame:()=>a((e=>{const t=1/e.frameRate,o=b(e);return e.currentTime=Math.max(o,i(e.currentTime-t)),e.playing&&E(e.currentTime),e})),nextFrame:()=>a((e=>{const t=1/e.frameRate;return e.currentTime=Math.min(e.duration,e.currentTime+t),e.playing&&E(e.currentTime),e})),tick:e=>{const t=(0,o.get)(I);if(!t.playing)return t.currentTime;if(t.isUserScrubbing)return t.currentTime;const n=performance.now();let A;if("number"==typeof e&&Number.isFinite(e))A=t.currentTime+Math.max(0,e);else{y||E(t.currentTime);const e=Math.max(0,(n-C)/1e3);if(e>.5)return E(t.currentTime),t.currentTime;A=f+e}const s=t.duration,i=b(t),r=s-i;if(s<=0||r<=0)return a((e=>(e.playing=!1,e.currentTime=0,e))),B(),0;let c=!1;return A>=s&&(t.loop?A=i+(A-i)%r:(A=s,c=!0)),a((e=>(e.currentTime=A,c&&(e.playing=!1),e))),c?B():E(A),A},evaluate:(e,t)=>{const A=(0,o.get)(I),s=t??A.easing,i=new Map;if(!A.curves.size)return i;const r=new Map;for(const e of A.strips){if(e.muted)continue;const t=r.get(e.objectId);t?t.push(e):r.set(e.objectId,[e])}for(const[t,o]of A.curves){const a=A.tracks.get(t);if(a?.muted)continue;const c=r.get(t);let l=e;if(c?.length){let t=!1;for(const o of c)e>=o.start&&e<=o.end&&(l=p(o,e),t=!0);if(!t)continue}const g=(0,n.evaluateVector)(o,"location",l,s,0),d=(0,n.evaluateQuaternion)(o,l,s),u=(0,n.evaluateVector)(o,"scale",l,s,1),m=(0,n.evaluateVisibility)(o,l,s);(g||d||u||null!==m)&&i.set(t,{position:g??void 0,rotation:d?(0,n.quatToEuler)(d):void 0,scale:u??void 0,...null!==m?{visible:m}:{}})}return i},addStrip:(e,t,o)=>a((n=>{const A=n.keyframes.get(e)??[],s=h(A),i=l(t,0,n.duration),r=l(o??i+Math.max(s,1),0,n.duration),a={id:c(),objectId:e,name:A.length?"Action":"Strip",start:Math.min(i,r),end:Math.max(i,r),actionStart:0,actionEnd:Math.max(s,1),speed:1,reversed:!1,frozen:!1,muted:!1};return n.strips.push(a),n.selectedStripId=a.id,n})),updateStrip:(e,t)=>a((o=>{const n=o.strips.find((t=>t.id===e));return n?(Object.assign(n,t),n.start=l(n.start,0,o.duration),n.end=l(n.end,0,o.duration),n.end<n.start&&(n.end=n.start),n.speed=l(n.speed,.1,10),o):o})),removeStrip:e=>a((t=>(t.strips=t.strips.filter((t=>t.id!==e)),t.selectedStripId===e&&(t.selectedStripId=null),t))),selectStrip:e=>a((t=>(t.selectedStripId=e,t))),splitStripAtPlayhead:e=>a((t=>{const o=t.strips.find((t=>t.id===e));if(!o)return t;const n=t.currentTime;if(n<=o.start+1e-4||n>=o.end-1e-4)return t;const A=p(o,n),s={...o,id:c(),start:n};return o.end=n,o.reversed?(o.actionStart=A,s.actionEnd=A):(o.actionEnd=A,s.actionStart=A),t.strips.push(s),t.selectedStripId=s.id,t})),duplicateStrip:e=>a((t=>{const o=t.strips.find((t=>t.id===e));if(!o)return t;const n=o.end-o.start,A={...o,id:c(),start:l(o.end,0,t.duration),end:l(o.end+n,0,t.duration),name:`${o.name} copy`};return t.strips.push(A),t.selectedStripId=A.id,t})),reverseStrip:e=>a((t=>{const o=t.strips.find((t=>t.id===e));return o?(o.reversed=!o.reversed,t):t})),freezeStrip:(e,t)=>a((o=>{const n=o.strips.find((t=>t.id===e));return n?(n.frozen=t??!n.frozen,o):o})),setStripSpeed:(e,t)=>a((o=>{const n=o.strips.find((t=>t.id===e));return n?(n.speed=l(t,.1,10),o):o})),trimStrip:(e,t,o)=>a((n=>{const A=n.strips.find((t=>t.id===e));return A?("start"===t?A.start=l(A.start+o,0,A.end-.05):A.end=l(A.end+o,A.start+.05,n.duration),n):n})),snapshotAnimation:()=>{const e=(0,o.get)(I),t={};for(const[o,n]of e.keyframes)t[o]=n.map((e=>({time:e.time,position:[...e.position],rotation:[...e.rotation],scale:[...e.scale],...void 0!==e.visible?{visible:e.visible}:{},...e.interpolation?{interpolation:e.interpolation}:{}})));const n={};for(const[t,o]of e.curves){const e={};for(const[t,n]of o)n.keys.length&&(e[t]=n.keys.map((e=>({time:e.time,value:e.value,interpolation:e.interpolation,handleLeft:[e.handleLeft[0],e.handleLeft[1]],handleRight:[e.handleRight[0],e.handleRight[1]],autoLeft:e.autoLeft,autoRight:e.autoRight}))));Object.keys(e).length&&(n[t]=e)}const A={};for(const[t,o]of e.tracks)A[t]={...o};const s={};for(const[t,o]of e.clips)s[t]={...o};return{keyframes:t,curves:n,tracks:A,strips:e.strips.map((e=>({...e}))),clips:s,selectedStripId:e.selectedStripId,selectedKey:e.selectedKey?{...e.selectedKey}:null,selectedKeys:e.selectedKeys.map((e=>({...e}))),duration:e.duration,startFrame:e.startFrame,endFrame:e.endFrame,snapToFrames:e.snapToFrames,loop:e.loop,easing:e.easing,frameRate:e.frameRate}},restoreAnimation:e=>a((t=>{t.clips=new Map;for(const[o,n]of Object.entries(e.clips??{}))t.clips.set(o,{start:n.start,end:n.end});t.tracks=new Map;for(const[o,n]of Object.entries(e.tracks??{}))t.tracks.set(o,{...n,objectId:o});t.keyframes=new Map;for(const[o,n]of Object.entries(e.keyframes))t.keyframes.set(o,n.map((e=>({time:e.time,position:[...e.position],rotation:[...e.rotation],scale:[...e.scale],...void 0!==e.visible?{visible:e.visible}:{},...e.interpolation?{interpolation:e.interpolation}:{}}))));t.curves=new Map;for(const[o,A]of Object.entries(e.curves)){const e=new Map;for(const[t,o]of Object.entries(A)){const A=new n.FCurve(t);for(const e of o)A.keys.push({...e,handleLeft:[e.handleLeft?.[0]??0,e.handleLeft?.[1]??0],handleRight:[e.handleRight?.[0]??0,e.handleRight?.[1]??0]});e.set(t,A)}t.curves.set(o,e)}return t.strips=e.strips.map((e=>({...e}))),t.selectedStripId=e.selectedStripId&&t.strips.some((t=>t.id===e.selectedStripId))?e.selectedStripId:null,t.selectedKey=e.selectedKey?{...e.selectedKey}:null,t.selectedKeys=e.selectedKeys?e.selectedKeys.map((e=>({...e}))):t.selectedKey?[{...t.selectedKey}]:[],t.frameRate=l(Math.round(e.frameRate),1,120),t.duration=l(e.duration,.1,n.MAX_TIMELINE_SECONDS),t.startFrame=e.startFrame??0,t.endFrame=e.endFrame??Math.max(1,Math.round(t.duration*t.frameRate)),t.snapToFrames=Boolean(e.snapToFrames),t.currentTime=l(t.currentTime,0,t.duration),t.loop=e.loop,t.easing=e.easing,t.playing&&E(t.currentTime),t})),serializeKeyframes:()=>{const e=(0,o.get)(I);return Object.fromEntries(e.keyframes.entries())},serializeCurves:()=>{const e=(0,o.get)(I),t={};for(const[o,n]of e.curves){const e={};for(const[t,o]of n)o.keys.length&&(e[t]=o.keys.map((e=>({time:e.time,value:e.value,interpolation:e.interpolation,handleLeft:[e.handleLeft[0],e.handleLeft[1]],handleRight:[e.handleRight[0],e.handleRight[1]],autoLeft:e.autoLeft,autoRight:e.autoRight}))));Object.keys(e).length&&(t[o]=e)}return t},loadCurves:e=>a((t=>{t.curves=new Map;for(const[o,A]of Object.entries(e??{})){const e=new Map;for(const[t,o]of Object.entries(A)){const A=new n.FCurve(t);for(const e of o)A.keys.push({...e,handleLeft:[e.handleLeft?.[0]??0,e.handleLeft?.[1]??0],handleRight:[e.handleRight?.[0]??0,e.handleRight?.[1]??0]});e.set(t,A)}t.curves.set(o,e)}return t})),serializeTracks:()=>{const e={};for(const[t,n]of(0,o.get)(I).tracks)e[t]={...n};return e},loadTracks:e=>a((t=>{t.tracks=new Map;for(const[o,n]of Object.entries(e??{}))n&&"object"==typeof n&&t.tracks.set(o,{objectId:o,name:"string"==typeof n.name?n.name:void 0,locked:!0===n.locked,hidden:!0===n.hidden,muted:!0===n.muted});return t})),serializeStrips:()=>(0,o.get)(I).strips.map((e=>({...e}))),serializeClips:()=>{const e={};for(const[t,n]of(0,o.get)(I).clips)e[t]={start:n.start,end:n.end};return e},loadClips:e=>a((t=>{t.clips=new Map;for(const[o,n]of Object.entries(e??{}))n&&Number.isFinite(n.start)&&Number.isFinite(n.end)&&t.clips.set(o,{start:l(n.start,0,t.duration),end:l(n.end,0,t.duration)});return t})),loadStrips:e=>a((t=>(t.strips=(e??[]).map((e=>({...e}))),t.selectedStripId=null,t))),loadKeyframes:e=>a((t=>{t.keyframes=new Map,t.curves=new Map;for(const[o,n]of Object.entries(e??{})){const e=[...n].sort(((e,t)=>e.time-t.time));t.keyframes.set(o,e);for(const n of e)v(t.curves,o,n,null,n.interpolation)}return t.currentTime=0,t.playing=!1,t.selectedKey=null,t.selectedKeys=[],B(),t}))}}();t.timelineStore=I})),__define("stores/scene",(function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.STUDIO_WHITE=t.PRIMITIVES=void 0,t.defaultCreationParams=d,t.iconForType=function(e){return{text:"text",image:"photo",video:"video"}[e]??g.find((t=>t.type===e))?.icon??"cube"},t.selectedObject=t.sceneStore=void 0;var o=e("svelte/store"),n=e("lib/math3d"),A=e("lib/mesh"),s=e("lib/bisect"),i=e("lib/materials"),r=e("lib/media"),a=e("lib/topology"),c=e("stores/timeline");const l="#ffffff";t.STUDIO_WHITE=l;const g=[{type:"cube",label:"Cube",icon:"cube",color:l,category:"Mesh"},{type:"sphere",label:"UV Sphere",icon:"sphere",color:l,category:"Mesh"},{type:"icosphere",label:"Ico Sphere",icon:"sphere",color:l,category:"Mesh"},{type:"cylinder",label:"Cylinder",icon:"cylinder",color:l,category:"Mesh"},{type:"cone",label:"Cone",icon:"cone",color:l,category:"Mesh"},{type:"torus",label:"Torus",icon:"torus",color:l,category:"Mesh"},{type:"plane",label:"Plane",icon:"plane",color:l,category:"Mesh"},{type:"circle",label:"Circle",icon:"torus",color:l,category:"Mesh"},{type:"grid",label:"Grid",icon:"plane",color:l,category:"Mesh"},{type:"pyramid",label:"Pyramid",icon:"cone",color:l,category:"Mesh"},{type:"tube",label:"Tube",icon:"cylinder",color:l,category:"Mesh"},{type:"capsule",label:"Capsule",icon:"sphere",color:l,category:"Mesh"},{type:"curve_bezier",label:"Bezier Curve",icon:"curve",color:l,category:"Curve"},{type:"curve_circle",label:"Bezier Circle",icon:"torus",color:l,category:"Curve"},{type:"curve_path",label:"Path",icon:"curve",color:l,category:"Curve"},{type:"curve_nurbs",label:"NURBS Curve",icon:"curve",color:l,category:"Curve"},{type:"light",label:"Point Light",icon:"lamp",color:l,category:"Light"},{type:"light_sun",label:"Sun Light",icon:"lamp",color:l,category:"Light"},{type:"light_spot",label:"Spot Light",icon:"lamp",color:l,category:"Light"},{type:"light_area",label:"Area Light",icon:"lamp",color:l,category:"Light"},{type:"camera",label:"Perspective",icon:"camera",color:l,category:"Camera"},{type:"camera_ortho",label:"Orthographic",icon:"camera",color:l,category:"Camera"},{type:"empty_axes",label:"Plain Axes",icon:"move",color:l,category:"Empty"},{type:"empty_arrows",label:"Arrows",icon:"move",color:l,category:"Empty"},{type:"empty_cube",label:"Cube Empty",icon:"cube",color:l,category:"Empty"},{type:"empty_sphere",label:"Sphere Empty",icon:"sphere",color:l,category:"Empty"},{type:"empty_circle",label:"Circle Empty",icon:"torus",color:l,category:"Empty"},{type:"empty_image",label:"Image Empty",icon:"photo",color:l,category:"Empty"},{type:"text_3d",label:"3D Text",icon:"text",color:l,category:"Text"},{type:"import_device",label:"Device Model",icon:"cube",color:l,category:"Import"},{type:"import_photo",label:"Reference Image",icon:"photo",color:l,category:"Import"},{type:"asset_suzanne",label:"Suzanne Monkey",icon:"sphere",color:l,category:"Import"},{type:"asset_tree",label:"Stylized Tree",icon:"cylinder",color:l,category:"Import"},{type:"asset_car",label:"Stylized Car",icon:"cube",color:l,category:"Import"},{type:"asset_character",label:"Character",icon:"bone",color:l,category:"Import"},{type:"asset_chair",label:"Modern Chair",icon:"cube",color:l,category:"Import"},{type:"bone",label:"Armature Bone",icon:"bone",color:l,category:"More"},{type:"metaball",label:"Metaball",icon:"sphere",color:l,category:"More"},{type:"lattice",label:"Lattice Cage",icon:"cube",color:l,category:"More"},{type:"forcefield",label:"Force Field",icon:"torus",color:l,category:"More"},{type:"speaker",label:"Audio Speaker",icon:"lamp",color:l,category:"More"},{type:"coin",label:"Coin Plate",icon:"torus",color:l,category:"More"}];function d(e){switch(e){case"sphere":return{segments:32,rings:16,radius:.5};case"icosphere":return{subdivisions:1,radius:.5};case"cylinder":case"cone":return{segments:32,radius:.5,height:1};case"torus":return{segments:32,sides:16,radius:.35,tube:.15};case"cube":return{sizeX:1,sizeY:1,sizeZ:1};case"plane":return{sizeX:2.4,sizeZ:2.4};case"circle":return{segments:32,radius:.5};case"grid":return{subdivX:4,subdivY:4,sizeX:2,sizeY:2};case"pyramid":return{sides:4,radius:.5,height:1};case"tube":return{segments:24,innerRadius:.3,outerRadius:.5,height:1};case"capsule":return{segments:20,rings:6,radius:.25,height:.6};case"light":case"light_point":return{intensity:1,color:"#ffffff",radius:5};case"light_sun":return{intensity:1.5,color:"#fff9e6",angle:45};case"light_spot":return{intensity:2,color:"#ffffff",spotAngle:45,radius:8};case"light_area":return{intensity:1.2,color:"#ffffff",sizeX:1,sizeY:1};case"camera":case"camera_perspective":return{fov:45,near:.1,far:100};case"camera_ortho":return{orthoScale:4,near:.1,far:100};case"text_3d":return{text:"3D Text",depth:.2,bevel:.02};default:return{}}}t.PRIMITIVES=g;const u=()=>({emissive:"#000000",opacity:1,metalness:.04,roughness:.36}),m=()=>({dynamic:!1,velocity:[0,0,0],restitution:.45}),p={objects:[],selectedId:null,gameMode:!1,score:0,editMode:!1,elementMode:"vertex",selectedVertices:[],selectedEdges:[],selectedFaces:[],hover:null,markedFaces:[],markedObjectId:null,portionVersion:0},h={up:!1,down:!1,left:!1,right:!1,jump:!1};let I=1;const f=80,C=new WeakMap;function y(e){let t=C.get(e);if(t)return t;t=new Map;for(const[o,n]of e.edges){let e=t.get(o);e||(e=[],t.set(o,e)),e.push(n);let A=t.get(n);A||(A=[],t.set(n,A)),A.push(o)}return C.set(e,t),t}let E=null,B=null;function b(){return"obj-"+I++}function v(e){return{...e,position:[...e.position],rotation:[...e.rotation],scale:[...e.scale],restPose:e.restPose?{position:[...e.restPose.position],rotation:[...e.restPose.rotation],scale:[...e.restPose.scale]}:void 0,bindPose:e.bindPose?{position:[...e.bindPose.position],rotation:[...e.bindPose.rotation],scale:[...e.bindPose.scale]}:void 0,boneLength:e.boneLength,connected:e.connected,boneLayer:e.boneLayer,boneLocked:e.boneLocked,ik:e.ik?{...e.ik}:void 0,constraints:e.constraints?e.constraints.map((c=>({...c}))):void 0,baseVertices:e.baseVertices?e.baseVertices.map((pt=>[...pt])):void 0,skinWeights:e.skinWeights?e.skinWeights.map((row=>row.map(( pair=>[pair[0],pair[1]] )))):void 0,savedColors:e.savedColors?[...e.savedColors]:void 0,bindMatrix:e.bindMatrix?new Float32Array(e.bindMatrix):void 0,invBindMatrix:e.invBindMatrix?new Float32Array(e.invBindMatrix):void 0,children:[...e.children],material:{...e.material},physics:{...e.physics,velocity:[...e.physics.velocity],home:e.physics.home?[...e.physics.home]:void 0},geometry:e.geometry?(0,A.cloneMesh)(e.geometry):void 0}}function Q(e){return e.map(v)}function M(e){return{...e,objects:Q(e.objects),selectedVertices:[...e.selectedVertices],selectedEdges:[...e.selectedEdges],selectedFaces:[...e.selectedFaces],hover:e.hover?{...e.hover}:null,markedFaces:[...e.markedFaces],markedObjectId:e.markedObjectId,portionVersion:e.portionVersion}}function k(e,t){const o=new Set(e.map((e=>e.name)));if(!o.has(t))return t;let n=1;for(;o.has(`${t}.${String(n).padStart(3,"0")}`);)n++;return`${t}.${String(n).padStart(3,"0")}`}function w(e){return[...new Set(e)].sort(((e,t)=>e-t))}const x=function(){const{subscribe:e,set:t,update:C}=(0,o.writable)(p),S=[],D=[];function L(e){S.push({kind:"scene",state:M(e)}),S.length>f&&S.shift(),D.length=0}function F(){S.length>f&&(S.length=f),D.length>f&&(D.length=f)}function N(e){return JSON.stringify({keyframes:e.keyframes,curves:e.curves,strips:e.strips,clips:e.clips,duration:e.duration,loop:e.loop,easing:e.easing,frameRate:e.frameRate})}function R(e){const t={};for(const o of e.objects)t[o.id]={position:[...o.position],rotation:[...o.rotation],scale:[...o.scale]};return t}function G(e,t){if(!e||!t)return e===t;for(let o=0;o<3;o++){if(Math.abs(e.position[o]-t.position[o])>1e-6)return!1;if(Math.abs(e.rotation[o]-t.rotation[o])>1e-6)return!1;if(Math.abs(e.scale[o]-t.scale[o])>1e-6)return!1}return!0}function P(e,t){e.objects=t.objects,e.selectedId=t.selectedId,e.editMode=t.editMode,e.elementMode=t.elementMode,e.selectedVertices=t.selectedVertices,e.selectedEdges=t.selectedEdges,e.selectedFaces=t.selectedFaces,e.markedFaces=t.markedFaces,e.markedObjectId=t.markedObjectId}function T(e,t){for(const o of e.objects){const e=t[o.id];e&&(o.position=[...e.position],o.rotation=[...e.rotation],o.scale=[...e.scale])}}function j(e){return{name:e.name,color:e.color,emissive:e.material.emissive,emissiveStrength:1,metalness:e.material.metalness,roughness:e.material.roughness,opacity:e.material.opacity,uvRepeat:1}}function Y(e){if(!e.geometry){const t=(0,A.cloneMesh)((0,A.meshFor)(e.type)??(0,A.meshFor)("cube"));t.slots=[j(e)],t.faceSlot=t.faces.map((()=>0)),t.groups=(0,A.buildGroups)(t),e.geometry=t}return e.geometry.slots.length||(e.geometry.slots=[j(e)]),e.geometry.faceSlot.length!==e.geometry.faces.length&&(e.geometry.faceSlot=e.geometry.faces.map(((t,o)=>e.geometry?.faceSlot[o]??0)),e.geometry.groups=(0,A.buildGroups)(e.geometry)),e.geometry}function U(e,t,o){return{id:b(),name:k(e.objects,o),type:t,position:[0,0,0],rotation:[0,0,0],scale:[1,1,1],restPose:{position:[0,0,0],rotation:[0,0,0],scale:[1,1,1]},color:l,material:u(),geometryVersion:1,colorVersion:1,selectionVersion:1,physics:m(),visible:!0,locked:!1,selected:!0,depth:0,children:[]}}function K(e){C((t=>{const o=t.objects.find((t=>t.id===e));return o?(o.colorVersion++,o.selectionVersion++,t):t}))}function _(e,t,o,n){const A=Y(e);A.slots[0]={...A.slots[0],name:e.name,color:"#ffffff",metalness:0,roughness:.92,emissive:"#ffffff",emissiveStrength:.3,imageUrl:t,uvRepeat:1},e.scale=(0,r.aspectPlaneScale)(o,n),e.restPose={position:[...e.position],rotation:[...e.rotation],scale:[...e.scale]},(0,r.primeLayerTexture)(t,(()=>K(e.id)))}return{subscribe:e,set:t,addPrimitive:(e,t,o)=>C((n=>{L(n);const s=g.find((t=>t.type===e)),i=b(),r=function(e,t){if("plane"===e)return{position:[0,.02,0],rotation:[0,0,0],scale:[2.4,1,2.4]};if("light"===e)return{position:[2.5,3.5,2.5],rotation:[0,0,0],scale:[1,1,1]};if("camera"===e)return{position:[3.2,2.2,4.2],rotation:[-.25,.65,0],scale:[1,1,1]};const o=2.399963*t,n=0===t?0:1.25*Math.sqrt(t);return{position:[Math.cos(o)*n,.5,Math.sin(o)*n],rotation:[0,0,0],scale:"coin"===e?[1.1,1,1.1]:[1,1,1]}}(e,n.objects.length),a=t?[...t]:r.position,c=o?{...o}:d(e),p=(0,A.meshFor)(e,c),h={id:i,name:k(n.objects,s?.label||e),type:e,position:[...a],rotation:[...r.rotation],scale:[...r.scale],restPose:{position:[...a],rotation:[...r.rotation],scale:[...r.scale]},color:l,material:u(),geometry:p?(0,A.cloneMesh)(p):void 0,geometryVersion:1,colorVersion:1,selectionVersion:1,physics:m(),visible:!0,locked:!1,selected:!0,depth:0,children:[],creationParams:c};return("light"===e||e.startsWith("light_"))&&(h.lightProps={type:e.replace("light_","")||"point",intensity:c.intensity??1,color:c.color??"#ffffff",distance:c.radius??10,angle:c.spotAngle?c.spotAngle*Math.PI/180:Math.PI/4}),("camera"===e||e.startsWith("camera_"))&&(h.cameraProps={fov:c.fov??45,near:c.near??.1,far:c.far??100,ortho:"camera_ortho"===e,orthoScale:c.orthoScale??4,trackingMode:"none",trackingTargetId:null}),n.objects.forEach((e=>e.selected=!1)),n.objects.push(h),n.selectedId=i,n.editMode=!1,n.selectedVertices=[],n.selectedEdges=[],n.selectedFaces=[],n})),updateCreationParams:e=>C((t=>{const o=t.objects.find((e=>e.id===t.selectedId));if(!o)return t;L(t),o.creationParams={...o.creationParams||d(o.type),...e};const n=(0,A.meshFor)(o.type,o.creationParams);return n&&(o.geometry=(0,A.cloneMesh)(n),o.geometryVersion=(o.geometryVersion||1)+1),o.lightProps&&(void 0!==e.intensity&&(o.lightProps.intensity=e.intensity),void 0!==e.color&&(o.lightProps.color=e.color)),o.cameraProps&&(void 0!==e.fov&&(o.cameraProps.fov=e.fov),void 0!==e.orthoScale&&(o.cameraProps.orthoScale=e.orthoScale)),t})),importMeshObject:(e,t)=>C((o=>{L(o);const n=U(o,"cube",e.replace(/\.[^.]+$/,"").trim()||"Imported_Mesh");n.position=[0,.5,0],n.restPose={position:[0,.5,0],rotation:[0,0,0],scale:[1,1,1]};const s=(0,A.cloneMesh)(t);return s.slots.length||(s.slots=[j(n)]),s.faceSlot=s.faces.map(((e,t)=>s.faceSlot[t]??0)),s.groups=(0,A.buildGroups)(s),n.geometry=s,o.objects.forEach((e=>e.selected=!1)),o.objects.push(n),o.selectedId=n.id,o.editMode=!1,o})),addTextLayer:e=>C((t=>{L(t);const o=e.replace(/\s+/g," ").trim()||"Text",n=U(t,"text",o.slice(0,24));n.text=o,n.position=[0,1.45,.6],n.rotation=[Math.PI/2,0,0],n.material={...u(),metalness:0,roughness:.9};const A=(0,r.textTextureDataUrl)(o);return A?_(n,A,1024,512):(Y(n),n.scale=[2.4,1.2,1],n.restPose={position:[...n.position],rotation:[...n.rotation],scale:[...n.scale]}),t.objects.forEach((e=>e.selected=!1)),t.objects.push(n),t.selectedId=n.id,t.editMode=!1,t})),addImageLayer:(e,t,o,n="Image")=>C((A=>{if("string"!=typeof e||!e.startsWith("data:image/"))return A;L(A);const s=U(A,"image",n.replace(/\.[^.]+$/,"").trim()||"Image");return s.position=[0,1.45,.6],s.rotation=[Math.PI/2,0,0],s.material={...u(),metalness:0,roughness:.8},_(s,e,t,o),A.objects.forEach((e=>e.selected=!1)),A.objects.push(s),A.selectedId=s.id,A.editMode=!1,A})),setTextContent:(e,t)=>C((o=>{const n=o.objects.find((t=>t.id===e));if(!n||"text"!==n.type)return o;const A=t.replace(/\s+/g," ").trim()||"Text";if(A===n.text)return o;L(o),n.text=A,n.name=k(o.objects.filter((t=>t.id!==e)),A.slice(0,24));const s=(0,r.textTextureDataUrl)(A);if(s){const t=Y(n);t.slots[0]={...t.slots[0],color:"#ffffff",imageUrl:s},(0,r.primeLayerTexture)(s,(()=>K(e)))}return n.colorVersion++,o})),reorderObject:(e,t)=>C((o=>{const n=o.objects.findIndex((t=>t.id===e));if(n<0)return o;const A=Math.max(0,Math.min(o.objects.length-1,n+t));if(A===n)return o;L(o);const[s]=o.objects.splice(n,1);return o.objects.splice(A,0,s),o})),recordKeyframe:(e,t)=>{const n=(0,o.get)(x).objects.find((t=>t.id===e));if(!n)return 0;const A=(0,o.get)(c.timelineStore);let s=t??A.currentTime;const i=A.keyframes.get(e)??[],r={position:[...n.position],rotation:[...n.rotation],scale:[...n.scale]},a=n.restPose??r;B=c.timelineStore.snapshotAnimation(),0===i.length&&s>.02?(c.timelineStore.addKeyframe(e,{time:0,position:[...a.position],rotation:[...a.rotation],scale:[...a.scale]}),c.timelineStore.addKeyframe(e,{time:s,position:[...r.position],rotation:[...r.rotation],scale:[...r.scale]})):1===i.length&&Math.abs(i[0].time-s)<.02&&!G(i[0],r)?(s=Math.min(A.duration,i[0].time+1.5),c.timelineStore.setTime(s),c.timelineStore.addKeyframe(e,{time:s,position:[...r.position],rotation:[...r.rotation],scale:[...r.scale]})):(c.timelineStore.addKeyframe(e,{time:s,position:[...r.position],rotation:[...r.rotation],scale:[...r.scale]}),0===i.length&&s<=.02&&(n.restPose={position:[...r.position],rotation:[...r.rotation],scale:[...r.scale]}));const l=B;if(B=null,l){const e=c.timelineStore.snapshotAnimation();N(l)!==N(e)&&(S.push({kind:"animation",before:l,after:e}),F(),D.length=0)}return s},refreshObject:e=>K(e),addObject:e=>C((t=>(L(t),t.objects.push(v(e)),t))),removeObject:e=>C((t=>(L(t),t.objects=t.objects.filter((t=>t.id!==e)),t.selectedId===e&&(t.selectedId=null),t))),selectObject:(e,t=!1)=>C((o=>{if(o.selectedId!==e&&(o.selectedVertices=[],o.selectedEdges=[],o.selectedFaces=[],o.hover=null),t&&e){const t=o.objects.find((t=>t.id===e));if(!t||t.locked)return o;t.selected=!t.selected,t.selected?o.selectedId=e:o.selectedId===e&&(o.selectedId=[...o.objects].reverse().find((e=>e.selected))?.id??null)}else o.selectedId=e,o.objects.forEach((t=>t.selected=t.id===e));for(const e of o.objects)e.selectionVersion++;return o})),selectAll:()=>C((e=>{let t=null;for(const o of e.objects)o.locked||(o.selected=!0,t=o.id,o.selectionVersion++);return e.selectedId=t??e.selectedId,e})),setTransforms:e=>C((t=>{const prevMap=new Map();for(const b of t.objects)if("bone"===b.type)prevMap.set(b.id,{position:[...b.position],rotation:[...b.rotation],scale:[...b.scale]});for(const o of e){const obj=t.objects.find((x=>x.id===o.id));obj&&(o.position&&(obj.position=[...o.position]),o.rotation&&(obj.rotation=[...o.rotation]),o.scale&&(obj.scale=[...o.scale]))}if(window.__rigEngine)window.__rigEngine.onTransformsChanged(t,e.map((x=>x.id)),prevMap);return t})),toggleVisibility:e=>C((t=>{const n=t.objects.find((t=>t.id===e));if(!n)return t;n.visible=!n.visible,c.timelineStore.setTrackMeta(e,{hidden:!n.visible});const A=(0,o.get)(c.timelineStore),s=Boolean(A.curves.get(e)?.get("visible")?.keys.length);return A.autoKey&&(s||(A.keyframes.get(e)?.length??0)>0)&&c.timelineStore.setVisibilityKeyframe(e,A.currentTime,n.visible,{position:[...n.position],rotation:[...n.rotation],scale:[...n.scale]}),t})),toggleLock:e=>C((t=>{const o=t.objects.find((t=>t.id===e));return o?(o.locked=!o.locked,c.timelineStore.setTrackMeta(e,{locked:o.locked}),o.locked&&t.selectedId===e&&(o.selected=!1,t.selectedId=null),t):t})),deleteObject:e=>C((t=>(L(t),t.objects=t.objects.filter((t=>t.id!==e)),t.selectedId===e&&(t.selectedId=null),t))),deleteSelected:()=>C((e=>{const t=new Set(e.objects.filter((e=>e.selected&&!e.locked)).map((e=>e.id)));return e.selectedId&&!t.size&&t.add(e.selectedId),t.size?(L(e),e.objects=e.objects.filter((e=>!t.has(e.id))),e.selectedId=null,e.editMode=!1,e):e})),renameObject:(e,t)=>C((o=>{const n=o.objects.find((t=>t.id===e));if(!n)return o;const A=t.trim().slice(0,60);return A&&A!==n.name?(L(o),n.name=A,c.timelineStore.setTrackMeta(e,{name:A}),o):o})),duplicateObject:e=>C((t=>{const o=t.objects.find((t=>t.id===e));if(!o)return t;L(t);const n=v(o);return n.id=b(),n.name=k(t.objects,o.name),n.position=[o.position[0]+.35,o.position[1],o.position[2]+.35],n.selected=!1,t.objects.forEach((e=>e.selected=!1)),t.objects.push(n),t.selectedId=n.id,t})),duplicateSelected:()=>C((e=>{const t=e.objects.filter((e=>e.selected));if(!t.length){const o=e.objects.find((t=>t.id===e.selectedId));o&&t.push(o)}if(!t.length)return e;L(e),e.objects.forEach((e=>e.selected=!1));let o=null;for(const n of t){const t=v(n);t.id=b(),t.name=k(e.objects,n.name),t.position=[n.position[0]+.7,n.position[1],n.position[2]+.7],t.selected=!0,e.objects.push(t),o=t.id}return e.selectedId=o,e})),mirrorSelected:(e="x")=>C((t=>{const o=t.objects.find((e=>e.id===t.selectedId));if(!o)return t;L(t);const n="x"===e?0:"y"===e?1:2;return o.scale[n]*=-1,t})),setColor:(e,t)=>C((o=>{const n=o.objects.find((t=>t.id===e));if(!n)return o;L(o),n.color=t;const A=n.geometry?.slots;return A?.length&&(n.geometry={...n.geometry,slots:A.map(((e,o)=>0===o?{...e,color:t}:e))},n.colorVersion++),o})),setMaterial:(e,t)=>C((o=>{const n=o.objects.find((t=>t.id===e));if(!n)return o;L(o),n.material={...n.material,...t};const A=n.geometry?.slots;return A?.length&&(n.geometry={...n.geometry,slots:A.map(((e,o)=>0===o?{...e,emissive:t.emissive??e.emissive,opacity:t.opacity??e.opacity,metalness:t.metalness??e.metalness,roughness:t.roughness??e.roughness}:e))},n.colorVersion++),o})),paintObject:(e,t)=>C((o=>{const n=o.objects.find((t=>t.id===e));return n?(L(o),n.color=t,o):o})),setTransform:(e,t)=>C((o=>{const prevMap=new Map();for(const b of o.objects)if("bone"===b.type)prevMap.set(b.id,{position:[...b.position],rotation:[...b.rotation],scale:[...b.scale]});const n=o.objects.find((t=>t.id===e));if(!n)return o;t.position&&(n.position=[...t.position]),t.rotation&&(n.rotation=[...t.rotation]),t.scale&&(n.scale=[...t.scale]);if(window.__rigEngine)window.__rigEngine.onTransformsChanged(o,[e],prevMap);return o})),setPhysics:(e,t)=>C((o=>{const n=o.objects.find((t=>t.id===e));return n?(L(o),n.physics={...n.physics,...t},n.physics.dynamic&&!n.physics.home&&(n.physics.home=[...n.position]),!1===t.dynamic&&(n.physics.velocity=[0,0,0]),o):o})),stepPhysics:(e,t=9.8)=>C((o=>{const n=[];for(const s of o.objects){if(!s.physics.dynamic||"light"===s.type||"camera"===s.type)continue;n.push(s);const o=Math.max(.1,(s.geometry?.radius??(0,A.meshFor)(s.type)?.radius??.5)*Math.abs(s.scale[1])),i=s.physics.velocity;i[1]-=t*e;const r=[...s.position];r[0]+=i[0]*e,r[1]+=i[1]*e,r[2]+=i[2]*e,r[1]<=o&&(r[1]=o,i[1]=-i[1]*s.physics.restitution,i[0]*=.86,i[2]*=.86,Math.abs(i[1])<.35&&(i[1]=0)),s.position=r}for(let e=0;e<n.length;e++)for(let t=e+1;t<n.length;t++){const o=n[e],A=n[t],s=Math.max(.2,(o.geometry?.radius??.5)*Math.max(Math.abs(o.scale[0]),Math.abs(o.scale[2]))*.75),i=Math.max(.2,(A.geometry?.radius??.5)*Math.max(Math.abs(A.scale[0]),Math.abs(A.scale[2]))*.75),r=A.position[0]-o.position[0],a=A.position[1]-o.position[1],c=A.position[2]-o.position[2],l=Math.hypot(r,a,c),g=s+i;if(l>1e-5&&l<g){const e=r/l,t=a/l,n=c/l,s=.5*(g-l);o.position=[o.position[0]-e*s,o.position[1]-t*s,o.position[2]-n*s],A.position=[A.position[0]+e*s,A.position[1]+t*s,A.position[2]+n*s];const i=(A.physics.velocity[0]-o.physics.velocity[0])*e+(A.physics.velocity[1]-o.physics.velocity[1])*t+(A.physics.velocity[2]-o.physics.velocity[2])*n;if(i<0){const s=-(1+Math.min(o.physics.restitution,A.physics.restitution))*i*.5;o.physics.velocity[0]-=s*e,o.physics.velocity[1]-=s*t,o.physics.velocity[2]-=s*n,A.physics.velocity[0]+=s*e,A.physics.velocity[1]+=s*t,A.physics.velocity[2]+=s*n}}}return o})),resetPhysics:()=>C((e=>{L(e);for(const t of e.objects)t.physics.dynamic&&(t.physics.velocity=[0,0,0],t.physics.home&&(t.position=[...t.physics.home]));return e})),bakePhysicsToKeyframes:(e=3,t=15,n=9.8)=>{const s=(0,o.get)(x).objects.filter((e=>e.physics.dynamic&&"light"!==e.type&&"camera"!==e.type));if(!s.length)return 0;const i=s.map((e=>({id:e.id,pos:[...e.position],rot:[...e.rotation],scl:[...e.scale],vel:[...e.physics.velocity],rest:e.physics.restitution,halfH:Math.max(.1,(e.geometry?.radius??(0,A.meshFor)(e.type)?.radius??.5)*Math.abs(e.scale[1]))}))),r=1/t,a=Math.max(2,Math.round(e*t));c.timelineStore.setDuration(Math.max(e,(0,o.get)(c.timelineStore).duration));for(let e=0;e<=a;e++){const t=e*r;for(const e of i)c.timelineStore.addKeyframe(e.id,{time:t,position:[...e.pos],rotation:[...e.rot],scale:[...e.scl]}),e.vel[1]-=n*r,e.pos[0]+=e.vel[0]*r,e.pos[1]+=e.vel[1]*r,e.pos[2]+=e.vel[2]*r,e.pos[1]<=e.halfH&&(e.pos[1]=e.halfH,e.vel[1]=-e.vel[1]*e.rest,e.vel[0]*=.86,e.vel[2]*=.86,Math.abs(e.vel[1])<.25&&(e.vel[1]=0))}return s.length},mutateRig:(fn,record=!0)=>C((t=>{record&&L(t);fn(t);return t})),bindArmature:e=>C((t=>{if(window.__rigEngine){L(t);window.__rigEngine.computeAutomaticWeights(t,e);return t}const o=t.objects.find((t=>t.id===e));if(!o)return t;const n=t.objects.find((e=>"bone"===e.type||"armature"===e.type));return n&&(L(t),o.parent=n.id,n.children.includes(o.id)||n.children.push(o.id)),t})),addBoneChain:(e=3,o=3,A=.45)=>C((t=>{const r=Array.isArray(e)?o:e,a=Array.isArray(e)?e:[0,.3,0],c=Array.isArray(e)?A:.45;let l;L(t),t.objects.forEach((e=>e.selected=!1));let n=null;for(let A=0;A<r;A++){const s=U(t,"bone",`Bone.${String(A+1).padStart(2,"0")}`);if(s.position=[a[0],a[1]+c*A,a[2]],s.restPose={position:[...s.position],rotation:[0,0,0],scale:[1,1,1]},s.depth=A,s.parent=l,s.selected=A===r-1,l){const e=t.objects.find((e=>e.id===l));e&&e.children.push(s.id)}t.objects.push(s),l=s.id,n=s.id}return t.selectedId=n,t})),beginAnimationEdit:()=>{B=c.timelineStore.snapshotAnimation()},endAnimationEdit:()=>{const e=B;if(B=null,!e)return;const t=c.timelineStore.snapshotAnimation();N(e)!==N(t)&&(S.push({kind:"animation",before:e,after:t}),F(),D.length=0)},animationEdit:e=>{B=c.timelineStore.snapshotAnimation(),e();const t=B;if(B=null,!t)return;const o=c.timelineStore.snapshotAnimation();N(t)!==N(o)&&(S.push({kind:"animation",before:t,after:o}),F(),D.length=0)},beginTransform:(e="transform")=>{const t=(0,o.get)(x),n=t.objects.find((e=>e.id===t.selectedId))??null,A="geometry"===e&&n?Y(n):null;E={mode:e,objectId:n?.id??null,transforms:R(t),vertices:A?Float32Array.from(A.vertices.flat()):null}},endTransform:()=>{const e=E;if(!e)return;E=null;const t=(0,o.get)(x),n=R(t),s=function(e,t){const o={},n={};let A=0;for(const s of Object.keys(t))G(e[s],t[s])||(o[s]=e[s],n[s]=t[s],A++);return A?{before:o,after:n}:null}(e.transforms,n);if("geometry"===e.mode&&e.objectId&&e.vertices){const o=t.objects.find((t=>t.id===e.objectId));if(!o)return;const n=o.geometry;if(!n)return;const i=e.vertices,r=[],a=[],c=[],l=Math.min(n.vertices.length,i.length/3);for(let e=0;e<l;e++){const t=n.vertices[e][0],o=n.vertices[e][1],A=n.vertices[e][2];t===i[3*e]&&o===i[3*e+1]&&A===i[3*e+2]||(r.push(e),a.push(i[3*e],i[3*e+1],i[3*e+2]),c.push(t,o,A))}if(!r.length)return;return n.radius=(0,A.computeRadius)(n.vertices),n.normals=(0,A.computeVertexNormals)(n),o.geometryVersion++,S.push({kind:"mesh",objectId:e.objectId,indices:r,before:a,after:c,transforms:s}),F(),void(D.length=0)}if(!s)return;const i=c.timelineStore.snapshotAnimation(),r=(0,o.get)(c.timelineStore);for(const e of Object.keys(s.after)){const o=t.objects.find((t=>t.id===e)),n=r.keyframes.get(e)??[],A=s.before[e],i=s.after[e];if(o&&0===n.length&&r.currentTime<=.02&&("bone"!==o.type||("Rig"===window.__rigEngine?.state?.activeTab&&"edit"===window.__rigEngine?.state?.mode))&&(o.restPose={position:[...i.position],rotation:[...i.rotation],scale:[...i.scale]}),r.autoKey)if(0===n.length&&r.currentTime>.02){const t=o?.restPose??A;c.timelineStore.addKeyframe(e,{time:0,position:[...t.position],rotation:[...t.rotation],scale:[...t.scale]}),c.timelineStore.addKeyframe(e,{time:r.currentTime,position:[...i.position],rotation:[...i.rotation],scale:[...i.scale]})}else c.timelineStore.addKeyframe(e,{time:r.currentTime,position:[...i.position],rotation:[...i.rotation],scale:[...i.scale]})}const a=c.timelineStore.snapshotAnimation(),l=N(i)!==N(a);S.push({kind:"transform",before:s.before,after:s.after,...l?{animBefore:i,animAfter:a}:{}}),F(),D.length=0},setTimelineHidden:e=>{const t=(0,o.get)(x);let n=!1;for(const o of t.objects)if(Boolean(o.timelineHidden)!==e.has(o.id)){n=!0;break}n&&C((t=>{for(const o of t.objects)o.timelineHidden=e.has(o.id);return t}))},applyAnimation:e=>C((t=>{const prevMap=new Map();for(const b of t.objects)if("bone"===b.type)prevMap.set(b.id,{position:[...b.position],rotation:[...b.rotation],scale:[...b.scale]});for(const o of t.objects){const k=e.get(o.id);k&&(k.position&&(o.position[0]=k.position[0],o.position[1]=k.position[1],o.position[2]=k.position[2]),k.rotation&&(o.rotation[0]=k.rotation[0],o.rotation[1]=k.rotation[1],o.rotation[2]=k.rotation[2]),k.scale&&(o.scale[0]=k.scale[0],o.scale[1]=k.scale[1],o.scale[2]=k.scale[2]),void 0!==k.visible&&(o.visible=k.visible))}if(window.__rigEngine)window.__rigEngine.onTransformsChanged(t,[...e.keys()],prevMap);return t})),undo:()=>{const e=S[S.length-1];if("animation"===e?.kind)return S.pop(),c.timelineStore.restoreAnimation(e.before),void D.push(e);C((e=>{const t=S.pop();if(!t)return e;if("scene"===t.kind)return D.push({kind:"scene",state:M(e)}),P(e,t.state),e;if("transform"===t.kind)return T(e,t.before),t.animBefore&&c.timelineStore.restoreAnimation(t.animBefore),D.push(t),e;if("animation"===t.kind)return e;const o=e.objects.find((e=>e.id===t.objectId));if(!o?.geometry)return e;const n=o.geometry;for(let e=0;e<t.indices.length;e++){const o=n.vertices[t.indices[e]];o&&(o[0]=t.before[3*e],o[1]=t.before[3*e+1],o[2]=t.before[3*e+2])}return n.radius=(0,A.computeRadius)(n.vertices),n.normals=void 0,t.transforms&&T(e,t.transforms.before),o.geometryVersion++,D.push(t),e}))},redo:()=>{const e=D[D.length-1];if("animation"===e?.kind)return D.pop(),c.timelineStore.restoreAnimation(e.after),void S.push(e);C((e=>{const t=D.pop();if(!t)return e;if("scene"===t.kind)return S.push({kind:"scene",state:M(e)}),P(e,t.state),e;if("transform"===t.kind)return T(e,t.after),t.animAfter&&c.timelineStore.restoreAnimation(t.animAfter),S.push(t),e;if("animation"===t.kind)return e;const o=e.objects.find((e=>e.id===t.objectId));if(!o?.geometry)return e;const n=o.geometry;for(let e=0;e<t.indices.length;e++){const o=n.vertices[t.indices[e]];o&&(o[0]=t.after[3*e],o[1]=t.after[3*e+1],o[2]=t.after[3*e+2])}return n.radius=(0,A.computeRadius)(n.vertices),n.normals=void 0,t.transforms&&T(e,t.transforms.after),o.geometryVersion++,S.push(t),e}))},canUndo:()=>S.length>0,canRedo:()=>D.length>0,historySize:()=>({past:S.length,future:D.length}),toggleGameMode:()=>C((e=>(e.gameMode=!e.gameMode,e))),addScore:(e=1)=>C((t=>(t.score+=e,t))),setScore:e=>C((t=>(t.score=Math.max(0,Math.round(e)),t))),resetScore:()=>C((e=>(e.score=0,e))),resetGameInput:()=>{h.up=!1,h.down=!1,h.left=!1,h.right=!1,h.jump=!1},setGameInput:(e,t)=>{h[e]=t},setJump:e=>{h.jump=e},getGameInput:()=>({...h}),setEditMode:e=>C((t=>{if(t.editMode===e)return t;if(t.editMode=e,t.selectedVertices=[],t.selectedEdges=[],t.selectedFaces=[],t.hover=null,e){const e=t.objects.find((e=>e.id===t.selectedId));e&&"light"!==e.type&&"camera"!==e.type&&(Y(e),e.geometryVersion++)}for(const e of t.objects)e.selectionVersion++;return t})),setElementMode:e=>C((t=>{t.elementMode=e,t.selectedVertices=[],t.selectedEdges=[],t.selectedFaces=[];for(const e of t.objects)e.selectionVersion++;return t})),setHover:e=>C((t=>{const o=t.hover;if(o?.kind===e?.kind&&o?.index===e?.index)return t;t.hover=e;const n=t.objects.find((e=>e.id===t.selectedId));return n&&n.selectionVersion++,t})),selectElement:(e,t,o)=>C((n=>{const A="vertex"===e?"selectedVertices":"edge"===e?"selectedEdges":"selectedFaces",s=n[A],i=s.includes(t);n.selectedVertices="vertex"===e?n.selectedVertices:[],n.selectedEdges="edge"===e?n.selectedEdges:[],n.selectedFaces="face"===e?n.selectedFaces:[],n[A]=o&&i?s.filter((e=>e!==t)):o?w([...s,t]):[t];const r=n.objects.find((e=>e.id===n.selectedId));return r&&r.selectionVersion++,n})),selectElements:(e,t,o)=>C((n=>{const A="vertex"===e?"selectedVertices":"edge"===e?"selectedEdges":"selectedFaces";n.selectedVertices="vertex"===e?n.selectedVertices:[],n.selectedEdges="edge"===e?n.selectedEdges:[],n.selectedFaces="face"===e?n.selectedFaces:[],n[A]=w(o?[...n[A],...t]:t);const s=n.objects.find((e=>e.id===n.selectedId));return s&&s.selectionVersion++,n})),clearElementSelection:()=>C((e=>{e.selectedVertices=[],e.selectedEdges=[],e.selectedFaces=[];const t=e.objects.find((t=>t.id===e.selectedId));return t&&t.selectionVersion++,e})),translateSelectedElements:e=>C((t=>{const o=t.objects.find((e=>e.id===t.selectedId));if(!o||!o.geometry)return t;const n=o.geometry,s=new Set;for(const e of t.selectedVertices)s.add(e);for(const e of t.selectedEdges){const t=n.edges[e];t&&(s.add(t[0]),s.add(t[1]))}for(const e of t.selectedFaces){const t=n.faces[e];if(t)for(const e of t)s.add(e)}if(!s.size)return t;for(const t of s){const o=n.vertices[t];o&&(o[0]+=e[0],o[1]+=e[1],o[2]+=e[2])}return n.radius=(0,A.computeRadius)(n.vertices),n.smooth?n.normals=(0,A.computeVertexNormals)(n):n.normals=void 0,o.geometryVersion++,t})),meshOp:(e,t={})=>{let o=null;return C((n=>{const s=n.objects.find((e=>e.id===n.selectedId));if(!s||"light"===s.type||"camera"===s.type)return n;const i=Y(s);let r=null,c=null;switch(L(n),e){case"subdivide":r=(0,A.subdivide)(i,i.smooth??!0);break;case"extrude":{const e=n.selectedFaces.length?n.selectedFaces:[0];r=(0,A.extrudeFaces)(i,e,t.amount??.35);break}case"inset":{const e=n.selectedFaces.length?n.selectedFaces:[0];r=(0,A.insetFaces)(i,e,t.amount??.18);break}case"delete":if("face"===n.elementMode&&n.selectedFaces.length){if(n.selectedFaces.length>=i.faces.length)return S.pop(),n;r=(0,A.deleteFaces)(i,n.selectedFaces)}else if("edge"===n.elementMode&&n.selectedEdges.length)r=(0,A.deleteGeometry)(i,"edge",n.selectedEdges);else{if("vertex"!==n.elementMode||!n.selectedVertices.length)return S.pop(),n;r=(0,A.deleteGeometry)(i,"vertex",n.selectedVertices)}break;case"duplicate":{const e="face"===n.elementMode?n.selectedFaces.length?n.selectedFaces:[0]:"edge"===n.elementMode?n.selectedEdges:n.selectedVertices;if(!e.length)return S.pop(),n;const o=(0,A.duplicateMeshGeometry)(i,n.elementMode,e);r=o.mesh,s=o.newVertexIndices,l=o.newFaceIndices;break}case"merge":r=(0,A.mergeByDistance)(i,t.amount??.001);break;case"flip":r=(0,A.flipNormals)(i);break;case"array":r=(0,A.arrayMesh)(i,t.amount??3,[1.25,0,0]);break;case"solidify":r=(0,A.solidifyMesh)(i,t.amount??.12);break;case"smooth":r=(0,A.smoothMeshVertices)(i,Math.max(1,Math.round(t.amount??2)),.5);break;case"unwrap-box":r=(0,A.unwrapMeshUV)(i,"box",t.amount??1);break;case"unwrap-planar":r=(0,A.unwrapMeshUV)(i,"planar",t.amount??1);break;case"unwrap-cylindrical":r=(0,A.unwrapMeshUV)(i,"cylindrical",t.amount??1);break;case"unwrap-spherical":r=(0,A.unwrapMeshUV)(i,"spherical",t.amount??1);break;case"bake-ao":r=(0,A.bakeMeshVertexColors)(i,"ao");break;case"bake-light":r=(0,A.bakeMeshVertexColors)(i,"light");break;case"bake-gradient":r=(0,A.bakeMeshVertexColors)(i,"gradient");break;case"bake-curvature":r=(0,A.bakeMeshVertexColors)(i,"curvature");break;case"loopcut":{const e=n.selectedEdges[0]??0,A=(0,a.loopCut)(i,e,t.cuts??t.amount??1);if(!A.ok)return o=A.error.message,S.pop(),n;r=A.mesh,c=A.edges;break}case"bevel":{const e=n.selectedVertices.length?n.selectedVertices:i.vertices.map(((e,t)=>t)),A=(0,a.bevelVertices)(i,e,t.amount??.05);if(!A.ok)return o=A.error.message,S.pop(),n;r=A.mesh;for(let o=1;o<(t.segments??1);o++){const e=(0,a.bevelVertices)(r,r.vertices.map(((e,t)=>t)),(t.amount??.05)*.5);if(e.ok)r=e.mesh}break}case"bridge":if(n.selectedFaces.length>=2){const e=i.faces[n.selectedFaces[0]],t=i.faces[n.selectedFaces[1]];r=(0,A.bridgeEdgeLoops)(i,e,t)}else if(n.selectedEdges.length>=2){const e=i.edges[n.selectedEdges[0]],t=i.edges[n.selectedEdges[1]];r=(0,A.bridgeEdgeLoops)(i,[e[0],e[1]],[t[0],t[1]])}else{const e=i.faces[0],t=i.faces[i.faces.length-1];r=(0,A.bridgeEdgeLoops)(i,e,t)}break;case"merge-center":case"merge-first":case"merge-last":case"merge-collapse":{const t="merge-first"===e?"first":"merge-last"===e?"last":"merge-collapse"===e?"collapse":"center",o=n.selectedVertices.length?n.selectedVertices:i.vertices.map(((e,t)=>t));r=(0,A.mergeVertices)(i,o,t);break}case"dissolve":if("face"===n.elementMode&&n.selectedFaces.length)r=(0,A.dissolveGeometry)(i,"face",n.selectedFaces);else if("edge"===n.elementMode&&n.selectedEdges.length)r=(0,A.dissolveGeometry)(i,"edge",n.selectedEdges);else{if("vertex"!==n.elementMode||!n.selectedVertices.length)return S.pop(),n;r=(0,A.dissolveGeometry)(i,"vertex",n.selectedVertices)}break;case"separate":{if(!n.selectedFaces.length)return S.pop(),n;const e=(0,A.separateGeometry)(i,n.selectedFaces);r=e.remainingMesh;const t="obj_"+Date.now().toString(36)+"_"+Math.random().toString(36).slice(2,6),o={...s,id:t,name:s.name+"_sep",geometry:e.separatedMesh,geometryVersion:1,colorVersion:1,selectionVersion:1,position:[...s.position],children:[]};n.objects.push(o);break}case"decimate":r=(0,A.decimateMesh)(i,t.ratio??t.amount??.5);break;case"mirror":r=(0,A.mirrorMesh)(i,t.axis??"x",t.threshold??.001);break;case"screw":r=(0,A.screwSpinMesh)(i,t.axis??"z",t.angle??360,t.steps??16,t.pitch??t.amount??.5);break;case"boolean":{const e=n.objects.find((e=>e.id!==s.id&&e.geometry));if(!e||!e.geometry)return S.pop(),n;r=(0,A.booleanMesh)(i,e.geometry,t.op??"difference");break}default:return S.pop(),n}return r?(s.geometry=r,s.geometryVersion++,s.colorVersion++,s.selectionVersion++,n.selectedVertices=[],n.selectedEdges=[],n.selectedFaces=[],c?(n.selectedEdges=c.map((e=>r.edges.findIndex((t=>t[0]===e[0]&&t[1]===e[1])))).filter((e=>e>=0)),n.elementMode="edge"):"bevel"===e&&(n.elementMode="vertex"),n):(S.pop(),n)})),o},applyBrush:(e,t,o,n,s,i=[0,0,0],r=!0,a)=>C((c=>{const l=c.objects.find((e=>e.id===c.selectedId));if(!l||"light"===l.type||"camera"===l.type)return c;r&&L(c);const g=Y(l);g.normals&&g.normals.length===g.vertices.length||(g.normals=(0,A.computeVertexNormals)(g));const d=g.normals;let u=0;const m=[t];if(s&&(s.x&&m.push([-t[0],t[1],t[2]]),s.y&&m.push([t[0],-t[1],t[2]]),s.z&&m.push([t[0],t[1],-t[2]]),s.x&&s.y&&m.push([-t[0],-t[1],t[2]]),s.x&&s.z&&m.push([-t[0],t[1],-t[2]]),s.y&&s.z&&m.push([t[0],-t[1],-t[2]]),s.x&&s.y&&s.z&&m.push([-t[0],-t[1],-t[2]])),"simplify"===e){for(let e=0;e<m.length;e++){const t=(0,A.decimateLocal)(g,m[e],o);t!==g&&t.vertices.length<g.vertices.length&&(l.geometry=t,u++)}return u&&(l.geometryVersion++,l.selectionVersion++,l.colorVersion++),c}let p=.5,h=!1,I="smooth",f=1,C=null,E=null;"object"==typeof a&&null!==a&&(void 0!==a.hardness&&(p=a.hardness),void 0!==a.inverted&&(h=a.inverted),void 0!==a.falloff&&(I=a.falloff),void 0!==a.pressure&&(f=a.pressure),a.strokeVector&&(C=a.strokeVector),a.hitNormal&&(E=a.hitNormal));const B=h?-1:1,b=n*Math.max(.05,Math.min(2,f)),v="smooth"===e||"clay"===e?y(g):null,Q=o*o,M=1/Math.max(1e-6,o),k=g.vertices,w=k.length;if("mask"===e){g.mask&&g.mask.length===w||(g.mask=new Array(w).fill(0));for(let e=0;e<m.length;e++){const t=m[e],o=t[0],n=t[1],A=t[2];for(let e=0;e<w;e++){const t=k[e],s=t[0]-o,i=t[1]-n,r=t[2]-A,a=s*s+i*i+r*r;if(a>Q)continue;u++;const c=1-Math.sqrt(a)*M,l=c*c*b*B;g.mask[e]=Math.min(1,Math.max(0,g.mask[e]+l))}}return u&&l.colorVersion++,c}for(let t=0;t<m.length;t++){const n=m[t],A=n[0],s=n[1],r=n[2];for(let t=0;t<w;t++){const n=k[t],a=n[0]-A,c=n[1]-s,l=n[2]-r,m=a*a+c*c+l*l;if(m>Q)continue;const f=g.mask?.[t]??0,y=Math.max(0,1-f);if(y<=1e-4)continue;u++;const w=Math.sqrt(m),x=1-w*M;let S;if("linear"===I)S=x;else if("hard"===I)S=w<.85*o?1:6.6*(1-w*M);else{const e=.5*(1+Math.cos((1-x)*Math.PI)),t=Math.max(.1,2.2*(1-p)+.3);S=Math.pow(e,t)}const D=S*b*y;if("draw"===e){const e=d[t]??[0,1,0],o=.12*D*B;n[0]+=e[0]*o,n[1]+=e[1]*o,n[2]+=e[2]*o}else if("clay"===e){const e=E??d[t]??[0,1,0],o=(.14*B*b*S-(a*e[0]+c*e[1]+l*e[2]))*Math.min(1,.85*D);n[0]+=e[0]*o,n[1]+=e[1]*o,n[2]+=e[2]*o}else if("smooth"===e){const e=v?.get(t);if(!e||!e.length)continue;let o=0,A=0,s=0;for(let t=0;t<e.length;t++){const n=k[e[t]];o+=n[0],A+=n[1],s+=n[2]}const i=1/e.length,r=Math.min(1,D);n[0]+=(o*i-n[0])*r,n[1]+=(A*i-n[1])*r,n[2]+=(s*i-n[2])*r}else if("inflate"===e){const e=d[t]??[0,1,0],o=.15*D*B;n[0]+=e[0]*o,n[1]+=e[1]*o,n[2]+=e[2]*o}else if("grab"===e)n[0]+=i[0]*D,n[1]+=i[1]*D,n[2]+=i[2]*D;else if("snake_hook"===e){const e=!C||0===C[0]&&0===C[1]&&0===C[2]?i:C,t=1.35;n[0]+=e[0]*D*t,n[1]+=e[1]*D*t,n[2]+=e[2]*D*t}else if("pinch"===e){const e=Math.min(.7,.8*D)*B;n[0]-=a*e,n[1]-=c*e,n[2]-=l*e}else if("crease"===e){const e=Math.min(.65,.7*D);n[0]-=a*e,n[1]-=c*e,n[2]-=l*e;const o=d[t]??[0,1,0],A=.12*D*(h?1:-1);n[0]+=o[0]*A,n[1]+=o[1]*A,n[2]+=o[2]*A}else if("flatten"===e){const e=E??d[t]??[0,1,0],o=(a*e[0]+c*e[1]+l*e[2])*Math.min(1,D);n[0]-=e[0]*o,n[1]-=e[1]*o,n[2]-=e[2]*o}else if("fill"===e){const e=E??d[t]??[0,1,0],o=a*e[0]+c*e[1]+l*e[2];if(B>0&&o<0){const t=o*Math.min(1,D);n[0]-=e[0]*t,n[1]-=e[1]*t,n[2]-=e[2]*t}else if(B<0&&o<0){const t=Math.abs(o)*Math.min(.5,.5*D);n[0]-=e[0]*t,n[1]-=e[1]*t,n[2]-=e[2]*t}}}}return u?(g.radius=(0,A.computeRadius)(k),g.normals=(0,A.computeVertexNormals)(g),l.geometryVersion++,c):(r&&S.pop(),c)})),clearMask:e=>C((t=>{const o=e??t.selectedId,n=t.objects.find((e=>e.id===o));return n&&n.geometry?(L(t),n.geometry.mask&&n.geometry.mask.fill(0),n.colorVersion++,t):t})),invertMask:e=>C((t=>{const o=e??t.selectedId,n=t.objects.find((e=>e.id===o));if(!n||!n.geometry)return t;L(t);const A=n.geometry.vertices.length;if(n.geometry.mask&&n.geometry.mask.length===A)for(let e=0;e<A;e++)n.geometry.mask[e]=Math.max(0,Math.min(1,1-(n.geometry.mask[e]??0)));else n.geometry.mask=new Array(A).fill(1);return n.colorVersion++,t})),blurMask:e=>C((t=>{const o=e??t.selectedId,n=t.objects.find((e=>e.id===o));if(!n||!n.geometry)return t;const A=n.geometry,s=A.vertices.length;if(!A.mask||A.mask.length!==s)return t;L(t);const i=y(A),r=new Array(s).fill(0);for(let e=0;e<s;e++){const t=i.get(e);if(!t||!t.length){r[e]=A.mask[e];continue}let o=2*A.mask[e];for(const e of t)o+=A.mask[e]??0;r[e]=o/(t.length+2)}return A.mask=r,n.colorVersion++,t})),paintVertices:(e,t,o,n=1,A=!0)=>C((s=>{const i=s.objects.find((e=>e.id===s.selectedId));if(!i||"light"===i.type||"camera"===i.type)return s;A&&L(s);const r=Y(i);r.colors&&r.colors.length===3*r.vertices.length||(r.colors=new Array(3*r.vertices.length).fill(1));let a=!1;const c=t*t,l=1/Math.max(1e-6,t),g=e[0],d=e[1],u=e[2];for(let e=0;e<r.vertices.length;e++){const t=r.vertices[e],A=t[0]-g,s=t[1]-d,i=t[2]-u,m=A*A+s*s+i*i;if(m>c)continue;const p=1-Math.sqrt(m)*l,h=p*p*n,I=3*e;r.colors[I]+=(o[0]-r.colors[I])*h,r.colors[I+1]+=(o[1]-r.colors[I+1])*h,r.colors[I+2]+=(o[2]-r.colors[I+2])*h,a=!0}return a&&i.colorVersion++,s})),fillVertexColor:e=>C((t=>{const o=t.objects.find((e=>e.id===t.selectedId));if(!o||"light"===o.type||"camera"===o.type)return t;L(t);const n=Y(o),A=parseInt(e.slice(1,3),16)/255,s=parseInt(e.slice(3,5),16)/255,i=parseInt(e.slice(5,7),16)/255;n.colors=new Array(3*n.vertices.length);for(let e=0;e<n.vertices.length;e++)n.colors[3*e]=A,n.colors[3*e+1]=s,n.colors[3*e+2]=i;return o.colorVersion++,t})),markPortion:(e,t)=>C((o=>(o.markedObjectId=e,o.markedFaces=[...new Set(t)].sort(((e,t)=>e-t)),o.portionVersion++,o))),clearPortion:()=>C((e=>(e.markedFaces=[],e.markedObjectId=null,e.portionVersion++,e))),applyMaterialPreset:(e,t)=>C((o=>{const n=o.objects.find((t=>t.id===e));if(!n)return o;const s=(0,i.presetById)(t);if(!s)return o;L(o);const r=(0,i.presetToSlot)(s),a=Y(n),c=o.markedObjectId===e&&o.markedFaces.length?o.markedFaces:null;if(c){const e=a.slots.length,t=(0,A.assignFacesToSlot)(a,c,e);t.slots=[...a.slots],t.slots[e]=r,n.geometry=t}else{const e=(0,A.assignFacesToSlot)(a,a.faces.map(((e,t)=>t)),0);e.slots=[...a.slots],e.slots[0]=r,n.geometry=e,n.color=s.color,n.material={emissive:s.emissive,opacity:s.opacity,metalness:s.metalness,roughness:s.roughness}}return n.geometryVersion++,n.colorVersion++,n.selectionVersion++,o})),applyMaterialImage:(e,t,o)=>C((n=>{const s=n.objects.find((t=>t.id===e));if(!s)return n;L(n);const r=Y(s),a=(0,i.slotFromImage)(o,t),c=n.markedObjectId===e&&n.markedFaces.length?n.markedFaces:null;if(c){const e=r.slots.length,t=(0,A.assignFacesToSlot)(r,c,e);t.slots=[...r.slots,a],s.geometry=t}else{const e=(0,A.assignFacesToSlot)(r,r.faces.map(((e,t)=>t)),0);e.slots=[...r.slots],e.slots[0]=a,s.geometry=e,s.color=a.color}return s.geometryVersion++,s.colorVersion++,n})),updateMaterialSlot:(e,t,o)=>C((n=>{const A=n.objects.find((t=>t.id===e));if(!A)return n;L(n);const s=Y(A),i=[...s.slots];for(;i.length<=t;)i.push({...i[0]??j(A),name:`Slot ${i.length}`});return i[t]={...i[t],...o},A.geometry={...s,slots:i},A.geometryVersion++,A.colorVersion++,n})),addMaterialSlot:(e,t="Slot")=>C((o=>{const n=o.objects.find((t=>t.id===e));if(!n)return o;L(o);const A=Y(n),s=[...A.slots,{...j(n),name:t}];return n.geometry={...A,slots:s},n.geometryVersion++,o})),cutObject:(e,t,o)=>C((n=>{const i=n.objects.find((t=>t.id===e));if(!i)return n;const r=Y(i);if(L(n),"mark"===o){const{negative:e}=(0,s.classifyFacesByPlane)(r,t);if(!e.length)return S.pop(),n;const o=r.slots.length,a=(0,A.assignFacesToSlot)(r,e,o);return a.slots=[...r.slots],a.slots[o]={...j(i),name:"Cut Surface",color:"#ff7a6b"},i.geometry=a,i.geometryVersion++,i.colorVersion++,n}const a=(0,s.bisectMesh)(r,t);if(!a.positive.faces.length||!a.negative.faces.length)return S.pop(),n;const c=.12,l=(0,s.offsetMesh)(a.negative,[t.normal[0]*c,t.normal[1]*c,t.normal[2]*c]),g=new Set(n.objects.map((e=>e.name))),d=e=>{let t=e,o=1;for(;g.has(t);)t=`${e}.${String(o).padStart(3,"0")}`,o++;return g.add(t),t},u=i.name,m=d(`${u}_Part_A`),p=d(`${u}_Part_B`);i.name=m;const h={...a.positive,slots:r.slots.map((e=>({...e}))),faceSlot:[...a.positive.faceSlot??[]]};h.groups=(0,A.buildGroups)(h),i.geometry=h;const I=v(i);I.id=b(),I.name=p;const f={...l,slots:r.slots.map((e=>({...e}))),faceSlot:[...l.faceSlot??[]]};return f.groups=(0,A.buildGroups)(f),I.geometry=f,I.selected=!1,n.objects.push(I),i.geometryVersion++,i.colorVersion++,n})),extrudePortion:(e,t,o)=>C((n=>{const A=n.objects.find((t=>t.id===e));if(!A)return n;const i=Y(A);return t.length?(L(n),A.geometry=(0,s.extrudeRegion)(i,t,o),A.geometryVersion++,A.colorVersion++,n):n})),serialize:()=>{const e=(0,o.get)(x);return{objects:Q(e.objects),selectedId:e.selectedId,score:e.score}},load:(e,t=null)=>C((o=>{L(o);let n=0;for(const t of e){const e=/^obj-(\d+)$/.exec(t.id);e&&(n=Math.max(n,Number(e[1])))}I=Math.max(I,n+1),o.objects=Q(e).map((e=>({...e,restPose:e.restPose??{position:[...e.position],rotation:[...e.rotation],scale:[...e.scale]}}))),o.selectedId=t,o.editMode=!1,o.selectedVertices=[],o.selectedEdges=[],o.selectedFaces=[],o.objects.forEach((e=>e.selected=e.id===t));for(const e of o.objects){const t=e.geometry?.slots?.find((e=>e.imageUrl))?.imageUrl;t&&(0,r.primeLayerTexture)(t,(()=>K(e.id)))}return o})),setCameraProps:(e,t)=>C((o=>{const n=o.objects.find((t=>t.id===e));if(!n||"camera"!==n.type)return o;if(n.cameraProps={...n.cameraProps??{fov:50,targetId:null,targetOffset:[0,.5,0],trackingMode:"look_at",followDistance:4.5,followHeight:1.8,damping:.1,active:!0},...t},t.active)for(const t of o.objects)t.id!==e&&t.cameraProps&&(t.cameraProps.active=!1);return o})),updateCameraTracking:(e=.016,t=0)=>C((e=>{for(const o of e.objects){if("camera"!==o.type||!o.cameraProps||"none"===o.cameraProps.trackingMode)continue;const A=o.cameraProps.targetId;if(!A)continue;const s=e.objects.find((e=>e.id===A));if(!s)continue;const i=o.cameraProps.targetOffset??[0,.5,0],r=[s.position[0]+i[0],s.position[1]+i[1],s.position[2]+i[2]];if("look_at"===o.cameraProps.trackingMode)o.rotation=(0,n.lookAtEuler)(o.position,r);else if("follow"===o.cameraProps.trackingMode){const e=o.cameraProps.followDistance??4.5,t=o.cameraProps.followHeight??1.8,A=(0,n.rotateEuler)([0,0,e],s.rotation),i=[r[0]+A[0],r[1]+t,r[2]+A[2]],a=(0,n.clamp)(o.cameraProps.damping??.15,.01,1);o.position[0]+=(i[0]-o.position[0])*a,o.position[1]+=(i[1]-o.position[1])*a,o.position[2]+=(i[2]-o.position[2])*a,o.rotation=(0,n.lookAtEuler)(o.position,r)}else if("orbit"===o.cameraProps.trackingMode){const e=o.cameraProps.followDistance??4.5,A=o.cameraProps.followHeight??1.8,s=.75*t;o.position[0]=r[0]+Math.sin(s)*e,o.position[1]=r[1]+A,o.position[2]=r[2]+Math.cos(s)*e,o.rotation=(0,n.lookAtEuler)(o.position,r)}}return e})),splitLayer:(e,t)=>{let n=null;return C((A=>{const s=A.objects.find((t=>t.id===e));if(!s)return A;const i=(0,o.get)(c.timelineStore),r=void 0!==t?t:i.currentTime,a=i.clips.get(e)??{start:0,end:15};if(r<=a.start+.05||r>=a.end-.05)return A;L(A),c.timelineStore.setClip(e,a.start,r);const l=b(),g=v(s);g.id=l,g.name=k(A.objects,s.name+" Part 2"),g.selected=!0,s.selected=!1,A.objects.push(g),A.selectedId=l,c.timelineStore.setClip(l,r,a.end);const d=i.keyframes.get(e)??[],u=d.filter((e=>e.time<=r)),m=d.filter((e=>e.time>=r)),p=c.timelineStore.evaluate(r,i.easing).get(e),h={time:r,position:p?.position?[...p.position]:[...s.position],rotation:p?.rotation?[...p.rotation]:[...s.rotation],scale:p?.scale?[...p.scale]:[...s.scale]};return u.some((e=>Math.abs(e.time-r)<.001))||u.push({...h}),m.some((e=>Math.abs(e.time-r)<.001))||m.unshift({...h}),c.timelineStore.loadKeyframes({...c.timelineStore.serializeKeyframes(),[e]:u,[l]:m}),n={partAId:e,partBId:l},A})),n},replaceObjectGeometry:(e,t)=>C((o=>{const n=o.objects.find((t=>t.id===e));if(!n||n.locked)return o;L(o),n.type=t;const s=(0,A.cloneMesh)((0,A.meshFor)(t)??(0,A.meshFor)("cube"));return n.geometry?.slots?.length&&(s.slots=[...n.geometry.slots],s.faceSlot=s.faces.map((()=>0)),s.groups=(0,A.buildGroups)(s)),n.geometry=s,n.geometryVersion++,n.colorVersion++,n.selectionVersion++,o})),replaceObjectMedia:(e,t,o=1280,n=720)=>C((A=>{const s=A.objects.find((t=>t.id===e));return!s||s.locked||(L(A),_(s,t,o,n),s.geometryVersion++,s.colorVersion++),A})),setObjectOpacity:(e,t)=>C((A=>{const s=A.objects.find((t=>t.id===e));if(!s||s.locked)return A;const i=(0,n.clamp)(t,0,1);if(s.material.opacity=i,s.geometry?.slots?.length)for(const e of s.geometry.slots)e.opacity=i;s.colorVersion++;const r=(0,o.get)(c.timelineStore);return r.autoKey&&c.timelineStore.addChannelKeyframe(e,"material.opacity",r.currentTime,i),A})),selectLinked:()=>C((e=>{const t=e.objects.find((t=>t.id===e.selectedId));if(!t||!t.geometry)return e;const o=t.geometry,n=new Map;o.faces.forEach(((e,t)=>{for(const o of e)n.has(o)||n.set(o,[]),n.get(o).push(t)}));const A=new Set(e.selectedFaces),s=new Set(e.selectedVertices),i=[...e.selectedVertices];for(const t of e.selectedFaces)for(const e of o.faces[t])s.has(e)||(s.add(e),i.push(e));for(!i.length&&o.vertices.length&&(i.push(0),s.add(0));i.length>0;){const e=i.pop(),t=n.get(e)||[];for(const e of t)if(!A.has(e)){A.add(e);for(const t of o.faces[e])s.has(t)||(s.add(t),i.push(t))}}return e.selectedVertices=[...s],e.selectedFaces=[...A],t.selectionVersion++,e})),selectLoop:()=>C((e=>{const t=e.objects.find((t=>t.id===e.selectedId));if(!t||!t.geometry)return e;const o=t.geometry;if("edge"===e.elementMode){const t=e.selectedEdges[0]??0,n=o.edges[t];if(!n)return e;const A=new Set(e.selectedEdges);o.faces.forEach(((e,t)=>{if(4===e.length)for(let t=0;t<4;t++){const s=e[t],i=e[(t+1)%4];if(s===n[0]&&i===n[1]||s===n[1]&&i===n[0]){const n=e[(t+2)%4],s=e[(t+3)%4],i=o.edges.findIndex((e=>e[0]===n&&e[1]===s||e[0]===s&&e[1]===n));i>=0&&A.add(i)}}})),e.selectedEdges=[...A]}else if("face"===e.elementMode){const t=e.selectedFaces[0]??0,n=new Set(e.selectedFaces);o.faces.forEach(((e,o)=>{Math.abs(o-t)<=3&&n.add(o)})),e.selectedFaces=[...n]}return t.selectionVersion++,e})),selectRing:()=>C((e=>{const t=e.objects.find((t=>t.id===e.selectedId));if(!t||!t.geometry)return e;const o=t.geometry;if("edge"===e.elementMode){const t=e.selectedEdges[0]??0,n=o.edges[t];if(!n)return e;const A=new Set(e.selectedEdges);o.faces.forEach((e=>{if(4===e.length)for(let t=0;t<4;t++){const s=e[t],i=e[(t+1)%4];if(s===n[0]&&i===n[1]||s===n[1]&&i===n[0]){const n=o.edges.findIndex((o=>o[0]===e[(t+1)%4]&&o[1]===e[(t+2)%4]||o[0]===e[(t+2)%4]&&o[1]===e[(t+1)%4])),s=o.edges.findIndex((o=>o[0]===e[(t+3)%4]&&o[1]===e[t]||o[0]===e[t]&&o[1]===e[(t+3)%4]));n>=0&&A.add(n),s>=0&&A.add(s)}}})),e.selectedEdges=[...A]}return t.selectionVersion++,e})),invertSelection:()=>C((e=>{const t=e.objects.find((t=>t.id===e.selectedId));if(!t||!t.geometry)return e;const o=t.geometry;if("vertex"===e.elementMode){const t=new Set(e.selectedVertices);e.selectedVertices=o.vertices.map(((e,t)=>t)).filter((e=>!t.has(e)))}else if("edge"===e.elementMode){const t=new Set(e.selectedEdges);e.selectedEdges=o.edges.map(((e,t)=>t)).filter((e=>!t.has(e)))}else if("face"===e.elementMode){const t=new Set(e.selectedFaces);e.selectedFaces=o.faces.map(((e,t)=>t)).filter((e=>!t.has(e)))}return t.selectionVersion++,e})),selectSimilar:(e="normal")=>C((e=>{const t=e.objects.find((t=>t.id===e.selectedId));if(!t||!t.geometry)return e;const o=t.geometry;if("vertex"===e.elementMode){const t=e.selectedVertices[0]??0,n=o.edges.filter((e=>e[0]===t||e[1]===t)).length,A=[];o.vertices.forEach(((e,t)=>{o.edges.filter((e=>e[0]===t||e[1]===t)).length===n&&A.push(t)})),e.selectedVertices=A}else if("edge"===e.elementMode){const t=e.selectedEdges[0]??0,n=o.edges[t];if(n){const t=o.vertices[n[0]],A=o.vertices[n[1]],s=Math.hypot(t[0]-A[0],t[1]-A[1],t[2]-A[2]),i=[];o.edges.forEach(((e,t)=>{const n=o.vertices[e[0]],A=o.vertices[e[1]],r=Math.hypot(n[0]-A[0],n[1]-A[1],n[2]-A[2]);Math.abs(r-s)<.05*s+1e-4&&i.push(t)})),e.selectedEdges=i}}else if("face"===e.elementMode){const t=e.selectedFaces[0]??0,n=o.faces[t];if(n&&o.normals){const t=o.normals[n[0]],A=[];o.faces.forEach(((e,n)=>{const s=o.normals[e[0]];t[0]*s[0]+t[1]*s[1]+t[2]*s[2]>.85&&A.push(n)})),e.selectedFaces=A}}return t.selectionVersion++,e})),boxSelect:(e,t)=>C((o=>{const n=o.objects.find((e=>e.id===o.selectedId));if(!n||!n.geometry)return o;const s=n.geometry;if("vertex"===o.elementMode){const n=[];s.vertices.forEach(((o,A)=>{const s=t(o);s&&s.x>=e.minX&&s.x<=e.maxX&&s.y>=e.minY&&s.y<=e.maxY&&n.push(A)})),o.selectedVertices=n}else if("face"===o.elementMode){const n=[];s.faces.forEach(((o,i)=>{const r=(0,A.faceCenter)(s,o),a=t(r);a&&a.x>=e.minX&&a.x<=e.maxX&&a.y>=e.minY&&a.y<=e.maxY&&n.push(i)})),o.selectedFaces=n}else if("edge"===o.elementMode){const n=[];s.edges.forEach(((o,A)=>{const i=s.vertices[o[0]],r=s.vertices[o[1]],a=[(i[0]+r[0])/2,(i[1]+r[1])/2,(i[2]+r[2])/2],c=t(a);c&&c.x>=e.minX&&c.x<=e.maxX&&c.y>=e.minY&&c.y<=e.maxY&&n.push(A)})),o.selectedEdges=n}return n.selectionVersion++,o})),setOrigin:(e,t=[0,0,0])=>C((o=>{const A=o.objects.find((e=>e.id===o.selectedId));if(!A)return o;const s=Y(A);if(L(o),"geometry"===e){let e=1/0,t=1/0,o=1/0,i=-1/0,r=-1/0,a=-1/0;for(const n of s.vertices)n[0]<e&&(e=n[0]),n[0]>i&&(i=n[0]),n[1]<t&&(t=n[1]),n[1]>r&&(r=n[1]),n[2]<o&&(o=n[2]),n[2]>a&&(a=n[2]);const c=(e+i)/2,l=(t+r)/2,g=(o+a)/2;s.vertices.forEach((e=>{e[0]-=c,e[1]-=l,e[2]-=g}));const d=(0,n.rotateEuler)([c*A.scale[0],l*A.scale[1],g*A.scale[2]],A.rotation);A.position=[A.position[0]+d[0],A.position[1]+d[1],A.position[2]+d[2]]}else if("cursor"===e){const e=t[0]-A.position[0],o=t[1]-A.position[1],n=t[2]-A.position[2];s.vertices.forEach((t=>{t[0]-=e/A.scale[0],t[1]-=o/A.scale[1],t[2]-=n/A.scale[2]})),A.position=[...t]}else s.vertices.forEach((e=>{e[0]+=A.position[0]/A.scale[0],e[1]+=A.position[1]/A.scale[1],e[2]+=A.position[2]/A.scale[2]})),A.position=[0,0,0];return A.geometryVersion++,o})),applyTransformation:e=>C((t=>{const o=t.objects.find((e=>e.id===t.selectedId));if(!o)return t;const A=Y(o);return L(t),"scale"!==e&&"all"!==e||(A.vertices.forEach((e=>{e[0]*=o.scale[0],e[1]*=o.scale[1],e[2]*=o.scale[2]})),o.scale=[1,1,1]),"rotation"!==e&&"all"!==e||(A.vertices=A.vertices.map((e=>(0,n.rotateEuler)(e,o.rotation))),o.rotation=[0,0,0]),"location"!==e&&"all"!==e||(A.vertices.forEach((e=>{e[0]+=o.position[0],e[1]+=o.position[1],e[2]+=o.position[2]})),o.position=[0,0,0]),o.geometryVersion++,t})),clearTransformation:e=>C((t=>{const o=t.objects.find((e=>e.id===t.selectedId));return o?(L(t),"location"!==e&&"all"!==e||(o.position=[0,0,0]),"rotation"!==e&&"all"!==e||(o.rotation=[0,0,0]),"scale"!==e&&"all"!==e||(o.scale=[1,1,1]),t):t})),setParent:(e,t)=>C((o=>{const n=o.objects.find((t=>t.id===e)),A=o.objects.find((e=>e.id===t));return n&&A&&n.id!==A.id?(L(o),n.parent=t,A.children.includes(e)||A.children.push(e),o):o})),clearParent:e=>C((t=>{const o=t.objects.find((t=>t.id===e));if(!o||!o.parent)return t;L(t);const n=t.objects.find((e=>e.id===o.parent));return n&&(n.children=n.children.filter((t=>t!==e))),delete o.parent,t})),joinSelected:()=>C((e=>{const t=e.objects.find((t=>t.id===e.selectedId));if(!t||!t.geometry)return e;const o=e.objects.filter((e=>e.selected&&e.id!==t.id&&e.geometry));if(!o.length)return e;L(e);const n=[{mesh:t.geometry,position:[0,0,0],scale:[1,1,1]},...o.map((e=>({mesh:e.geometry,position:[(e.position[0]-t.position[0])/t.scale[0],(e.position[1]-t.position[1])/t.scale[1],(e.position[2]-t.position[2])/t.scale[2]],scale:[e.scale[0]/t.scale[0],e.scale[1]/t.scale[1],e.scale[2]/t.scale[2]]})))];t.geometry=(0,A.joinMeshes)(n),t.geometryVersion++;const s=new Set(o.map((e=>e.id)));return e.objects=e.objects.filter((e=>!s.has(e.id))),e})),clear:()=>C((e=>(L(e),e.objects=[],e.selectedId=null,e.score=0,e.editMode=!1,e.selectedVertices=[],e.selectedEdges=[],e.selectedFaces=[],e)))}}();t.sceneStore=x;const S=(0,o.derived)(x,(e=>e.objects.find((t=>t.id===e.selectedId))||null));t.selectedObject=S})),__define("lib/project",(function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.PROJECT_VERSION=t.PROJECT_FORMAT=void 0,t.applyProject=function(e){const t=p(e);n.sceneStore.load(t.scene.objects,t.scene.selectedId),n.sceneStore.setScore(t.scene.score),s.timelineStore.loadKeyframes(t.timeline.keyframes),Object.keys(t.timeline.curves).length&&s.timelineStore.loadCurves(t.timeline.curves);t.timeline.tracks&&s.timelineStore.loadTracks(t.timeline.tracks);s.timelineStore.setFrameRate(t.timeline.frameRate),s.timelineStore.setDuration(t.timeline.duration),"number"==typeof t.timeline.startFrame&&s.timelineStore.setStartFrame(t.timeline.startFrame);s.timelineStore.setSnapToFrames(Boolean(t.timeline.snapToFrames)),s.timelineStore.loadStrips(t.timeline.strips),s.timelineStore.loadClips(t.timeline.clips),s.timelineStore.setLoop(t.timeline.loop),s.timelineStore.setEasing(t.timeline.easing);const A=s.timelineStore.evaluate((0,o.get)(s.timelineStore).currentTime,t.timeline.easing);A.size&&n.sceneStore.applyAnimation(A)},t.createProject=function(e="Untitled"){const t=n.sceneStore.serialize(),A=(0,o.get)(s.timelineStore);return{format:i,version:r,name:e,savedAt:(new Date).toISOString(),scene:t,timeline:{duration:A.duration,startFrame:A.startFrame,endFrame:A.endFrame,snapToFrames:A.snapToFrames,loop:A.loop,easing:A.easing,frameRate:A.frameRate,keyframes:s.timelineStore.serializeKeyframes(),curves:s.timelineStore.serializeCurves(),tracks:s.timelineStore.serializeTracks(),strips:s.timelineStore.serializeStrips(),clips:s.timelineStore.serializeClips()}}},t.deleteSavedProject=function(e){I(h().filter((t=>t.name!==e)))},t.downloadProject=function(e){const t=JSON.stringify(e,null,2),o=new Blob([t],{type:"application/json"}),n=URL.createObjectURL(o),A=document.createElement("a");A.href=n,A.download=`${e.name.replace(/[^\w-]+/g,"-").toLowerCase()||"toon-project"}.tsf.json`,document.body.appendChild(A),A.click(),A.remove(),setTimeout((()=>URL.revokeObjectURL(n)),1e3)},t.listSavedProjects=function(){return h().sort(((e,t)=>t.savedAt.localeCompare(e.savedAt)))},t.loadAutosave=function(){try{const e=localStorage.getItem(c);return e?p(JSON.parse(e)):null}catch{return null}},t.readProjectFile=async function(e){const t=await e.text();let o;try{o=JSON.parse(t)}catch{throw new Error("The selected file is not valid JSON.")}return p(o)},t.saveAutosave=function(e){try{localStorage.setItem(c,JSON.stringify(e))}catch{}},t.saveToBrowser=function(e){const t=h().filter((t=>t.name!==e.name));t.push({name:e.name,savedAt:e.savedAt,project:e}),I(t.slice(-20))},t.validateProject=p;var o=e("svelte/store"),n=e("stores/scene"),A=e("lib/fcurve"),s=e("stores/timeline");const i="toon-studio";t.PROJECT_FORMAT=i;const r=2;t.PROJECT_VERSION=r;const a="toon-studio.projects",c="toon-studio.autosave";function l(e,t){if(!Array.isArray(e)||3!==e.length)return t;const o=e.map((e=>"number"==typeof e&&Number.isFinite(e)?e:0));return[o[0],o[1],o[2]]}function g(e,t){return"string"==typeof e&&/^#[0-9a-fA-F]{6}$/.test(e)?e:t}function d(e){const t=e||{};return{emissive:g(t.emissive,"#000000"),opacity:"number"==typeof t.opacity?Math.min(1,Math.max(0,t.opacity)):1,metalness:"number"==typeof t.metalness?Math.min(1,Math.max(0,t.metalness)):.05,roughness:"number"==typeof t.roughness?Math.min(1,Math.max(0,t.roughness)):.55}}function u(e){const t=e||{};return{dynamic:!0===t.dynamic,velocity:l(t.velocity,[0,0,0]),restitution:"number"==typeof t.restitution?Math.min(1,Math.max(0,t.restitution)):.45,home:Array.isArray(t.home)?l(t.home,[0,0,0]):void 0}}function m(e){if(!e||"object"!=typeof e)return;const t=e;if(!Array.isArray(t.vertices)||!Array.isArray(t.faces))return;const o=t.vertices.filter((e=>Array.isArray(e)&&3===e.length&&e.every((e=>"number"==typeof e&&Number.isFinite(e))))).map((e=>[e[0],e[1],e[2]]));if(o.length<3)return;const n=t.faces.filter((e=>Array.isArray(e)&&e.length>=3&&e.every((e=>Number.isInteger(e)&&e>=0&&e<o.length)))).map((e=>e.map(Number)));if(!n.length)return;const A=[],s=new Set;for(const e of n)for(let t=0;t<e.length;t++){const o=e[t],n=e[(t+1)%e.length],i=o<n?`${o}:${n}`:`${n}:${o}`;s.has(i)||(s.add(i),A.push([o,n]))}let i=1;for(const e of o)i=Math.max(i,Math.hypot(e[0],e[1],e[2]));const r=Array.isArray(t.colors)&&t.colors.length>=3*o.length?t.colors.slice(0,3*o.length).map((e=>"number"==typeof e&&Number.isFinite(e)?Math.min(1,Math.max(0,e)):1)):void 0,a=Array.isArray(t.uvs)&&t.uvs.length>=o.length?t.uvs.slice(0,o.length).map((e=>{if(!Array.isArray(e)||2!==e.length)return[0,0];return["number"==typeof e[0]&&Number.isFinite(e[0])?e[0]:0,"number"==typeof e[1]&&Number.isFinite(e[1])?e[1]:0]})):void 0,c=function(e){return Array.isArray(e)?e.map(((e,t)=>{const o=e||{};return{name:"string"==typeof o.name&&o.name?o.name:`Slot ${t}`,color:g(o.color,"#9aa3b8"),emissive:g(o.emissive,"#000000"),emissiveStrength:"number"==typeof o.emissiveStrength?Math.min(4,Math.max(0,o.emissiveStrength)):1,metalness:"number"==typeof o.metalness?Math.min(1,Math.max(0,o.metalness)):.05,roughness:"number"==typeof o.roughness?Math.min(1,Math.max(0,o.roughness)):.55,opacity:"number"==typeof o.opacity?Math.min(1,Math.max(0,o.opacity)):1,uvRepeat:"number"==typeof o.uvRepeat?Math.min(20,Math.max(.5,o.uvRepeat)):1,presetId:"string"==typeof o.presetId?o.presetId:void 0,imageUrl:"string"==typeof o.imageUrl?o.imageUrl:void 0}})):[]}(t.slots),l=Array.isArray(t.faceSlot)?t.faceSlot.map((e=>Number.isInteger(e)&&e>=0?e:0)):n.map((()=>0));for(;l.length<n.length;)l.push(0);l.length=n.length;const d={vertices:o,faces:n,edges:A,radius:i,colors:r,uvs:a,smooth:!0===t.smooth,slots:c,faceSlot:l,groups:[]};return d.groups=function(e){return Array.isArray(e)?e.filter((e=>Boolean(e)&&"number"==typeof e.start)).map((e=>({start:Math.max(0,Math.round(e.start)),count:Math.max(0,Math.round(e.count)),materialIndex:Math.max(0,Math.round(e.materialIndex))}))):[]}(t.groups),d.groups.length||(d.groups=[{start:0,count:0,materialIndex:0}]),d}function p(e){if(!e||"object"!=typeof e)throw new Error("Project file is empty or invalid.");const t=e;if(t.format!==i)throw new Error("Not a Toon Studio project file.");if("number"!=typeof t.version||t.version>r)throw new Error("This project was created by a newer version of Toon Studio.");const o=t.scene;if(!o||!Array.isArray(o.objects))throw new Error("Project is missing its scene data.");const n=o.objects.map(((e,t)=>{const o=e;if(!o||"object"!=typeof o)throw new Error(`Invalid object at index ${t}.`);const n="string"==typeof o.type?o.type:"cube";return{id:"string"==typeof o.id&&/^[A-Za-z0-9_-]{1,64}$/.test(o.id)?o.id:`obj-${t+1}`,name:"string"==typeof o.name?o.name.slice(0,120):`${n} ${t+1}`,type:n,position:l(o.position,[0,.5,0]),rotation:l(o.rotation,[0,0,0]),scale:l(o.scale,[1,1,1]),color:g(o.color,"#ebeff5"),material:d(o.material),physics:u(o.physics),geometry:m(o.geometry),geometryVersion:"number"==typeof o.geometryVersion?o.geometryVersion:1,colorVersion:"number"==typeof o.colorVersion?o.colorVersion:1,selectionVersion:"number"==typeof o.selectionVersion?o.selectionVersion:1,visible:!1!==o.visible,locked:!0===o.locked,selected:!0===o.selected,text:"string"==typeof o.text?o.text.slice(0,2e3):void 0,depth:"number"==typeof o.depth?o.depth:0,parent:"string"==typeof o.parent?o.parent:void 0,children:Array.isArray(o.children)?o.children.filter((e=>"string"==typeof e)):[],cameraProps:o.cameraProps&&"object"==typeof o.cameraProps?{fov:"number"==typeof o.cameraProps.fov?o.cameraProps.fov:50,targetId:"string"==typeof o.cameraProps.targetId?o.cameraProps.targetId:null,targetOffset:l(o.cameraProps.targetOffset,[0,.5,0]),trackingMode:["none","look_at","follow","orbit"].includes(o.cameraProps.trackingMode)?o.cameraProps.trackingMode:"look_at",followDistance:"number"==typeof o.cameraProps.followDistance?o.cameraProps.followDistance:4.5,followHeight:"number"==typeof o.cameraProps.followHeight?o.cameraProps.followHeight:1.8,damping:"number"==typeof o.cameraProps.damping?o.cameraProps.damping:.1,active:!1!==o.cameraProps.active}:void 0}})),s=t.timeline||{},a={};if(s.keyframes&&"object"==typeof s.keyframes)for(const[e,t]of Object.entries(s.keyframes))Array.isArray(t)&&(a[e]=t.filter((e=>Boolean(e)&&"number"==typeof e.time)).map((e=>({time:Number.isFinite(e.time)?e.time:0,position:l(e.position,[0,0,0]),rotation:l(e.rotation,[0,0,0]),scale:l(e.scale,[1,1,1]),..."boolean"==typeof e.visible?{visible:e.visible}:{},..."constant"===e.interpolation||"linear"===e.interpolation||"bezier"===e.interpolation?{interpolation:e.interpolation}:{}}))).sort(((e,t)=>e.time-t.time)));const c={};if(s.curves&&"object"==typeof s.curves)for(const[e,t]of Object.entries(s.curves)){const o={};for(const[e,n]of Object.entries(t||{}))Array.isArray(n)&&(o[e]=n.filter((e=>Boolean(e)&&"number"==typeof e.time&&Number.isFinite(e.time))).map((e=>({time:Math.min(A.MAX_TIMELINE_SECONDS,Math.max(0,e.time)),value:"number"==typeof e.value&&Number.isFinite(e.value)?e.value:0,interpolation:"constant"===e.interpolation||"linear"===e.interpolation?e.interpolation:"bezier",handleLeft:Array.isArray(e.handleLeft)?[Number(e.handleLeft[0])||0,Number(e.handleLeft[1])||0]:[-1/3,0],handleRight:Array.isArray(e.handleRight)?[Number(e.handleRight[0])||0,Number(e.handleRight[1])||0]:[1/3,0],autoLeft:!1!==e.autoLeft,autoRight:!1!==e.autoRight}))).sort(((e,t)=>e.time-t.time)));Object.keys(o).length&&(c[e]=o)}const p={};if(s.tracks&&"object"==typeof s.tracks&&!Array.isArray(s.tracks))for(const[e,t]of Object.entries(s.tracks))t&&"object"==typeof t&&(p[e]={objectId:e,name:"string"==typeof t.name?t.name:void 0,locked:!0===t.locked,hidden:!0===t.hidden,muted:!0===t.muted});const h=Array.isArray(s.strips)?s.strips.filter((e=>Boolean(e)&&"string"==typeof e.id)).map((e=>({id:e.id,objectId:"string"==typeof e.objectId?e.objectId:"",name:"string"==typeof e.name?e.name:"Strip",start:Math.min(A.MAX_TIMELINE_SECONDS,Math.max(0,Number(e.start)||0)),end:Math.min(A.MAX_TIMELINE_SECONDS,Math.max(0,Number(e.end)||0)),actionStart:Number(e.actionStart)||0,actionEnd:Number(e.actionEnd)||0,speed:Math.min(10,Math.max(.1,Number(e.speed)||1)),reversed:!0===e.reversed,frozen:!0===e.frozen,muted:!0===e.muted}))):[],I={};if(s.clips&&"object"==typeof s.clips&&!Array.isArray(s.clips))for(const[e,t]of Object.entries(s.clips)){if(!t||"object"!=typeof t)continue;const o=Number(t.start),n=Number(t.end);!Number.isFinite(o)||!Number.isFinite(n)||n<=o||(I[e]={start:Math.min(A.MAX_TIMELINE_SECONDS,Math.max(0,o)),end:Math.min(A.MAX_TIMELINE_SECONDS,Math.max(0,n))})}const f="number"==typeof s.frameRate?Math.min(120,Math.max(1,s.frameRate)):30,C="number"==typeof s.duration?Math.min(A.MAX_TIMELINE_SECONDS,Math.max(.1,s.duration)):A.MAX_TIMELINE_SECONDS,y="number"==typeof s.startFrame?Math.max(0,Math.round(s.startFrame)):0,E="number"==typeof s.endFrame?Math.max(y+1,Math.round(s.endFrame)):Math.max(1,Math.round(C*f));return{format:i,version:r,name:"string"==typeof t.name&&t.name.trim()?t.name.trim():"Untitled",savedAt:"string"==typeof t.savedAt?t.savedAt:(new Date).toISOString(),scene:{objects:n,selectedId:"string"==typeof o.selectedId?o.selectedId:null,score:"number"==typeof o.score?o.score:0},timeline:{duration:C,startFrame:y,endFrame:E,snapToFrames:!0===s.snapToFrames,loop:!1!==s.loop,easing:!1!==s.easing,frameRate:f,keyframes:a,curves:c,tracks:p,strips:h,clips:I}}}function h(){try{const e=localStorage.getItem(a);if(!e)return[];const t=JSON.parse(e);return Array.isArray(t)?t:[]}catch{return[]}}function I(e){try{localStorage.setItem(a,JSON.stringify(e))}catch{}}})),__define("lib/io3d",(function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.exportSceneToOBJ=function(e){const t=["# Toon Studio 3D Export (.obj)",`# Objects: ${e.length}`,""];let A=1;for(const s of e){if(!s.visible||"light"===s.type||"camera"===s.type)continue;const e=s.geometry??(0,n.meshFor)(s.type);if(!e)continue;const i=s.name.replace(/\s+/g,"_")||s.id;t.push(`o ${i}`);for(const n of e.vertices){const e=(0,o.transformPoint)(n,s.position,s.rotation,s.scale);t.push(`v ${e[0].toFixed(5)} ${e[1].toFixed(5)} ${e[2].toFixed(5)}`)}if(e.uvs&&e.uvs.length===e.vertices.length){for(const o of e.uvs)t.push(`vt ${o[0].toFixed(5)} ${o[1].toFixed(5)}`);for(const o of e.faces){const e=o.map((e=>`${e+A}/${e+A}`)).join(" ");t.push(`f ${e}`)}}else for(const o of e.faces){const e=o.map((e=>String(e+A))).join(" ");t.push(`f ${e}`)}t.push(""),A+=e.vertices.length}return t.join("\n")},t.exportSceneToSTL=function(e){const t=["solid toon_studio"];for(const A of e){if(!A.visible||"light"===A.type||"camera"===A.type)continue;const e=A.geometry??(0,n.meshFor)(A.type);if(!e)continue;const s=e.vertices.map((e=>(0,o.transformPoint)(e,A.position,A.rotation,A.scale)));for(const o of e.faces)for(let e=1;e<o.length-1;e++){const n=s[o[0]],A=s[o[e]],i=s[o[e+1]],r=A[0]-n[0],a=A[1]-n[1],c=A[2]-n[2],l=i[0]-n[0],g=i[1]-n[1],d=i[2]-n[2];let u=a*d-c*g,m=c*l-r*d,p=r*g-a*l;const h=Math.hypot(u,m,p)||1;u/=h,m/=h,p/=h,t.push(`  facet normal ${u.toFixed(5)} ${m.toFixed(5)} ${p.toFixed(5)}`),t.push("    outer loop"),t.push(`      vertex ${n[0].toFixed(5)} ${n[1].toFixed(5)} ${n[2].toFixed(5)}`),t.push(`      vertex ${A[0].toFixed(5)} ${A[1].toFixed(5)} ${A[2].toFixed(5)}`),t.push(`      vertex ${i[0].toFixed(5)} ${i[1].toFixed(5)} ${i[2].toFixed(5)}`),t.push("    endloop"),t.push("  endfacet")}}return t.push("endsolid toon_studio"),t.join("\n")},t.parseOBJ=function(e){const t=[],o=[],A=[];for(const n of e.split(/\r?\n/)){const e=n.trim();if(!e||e.startsWith("#"))continue;const s=e.split(/\s+/),i=s[0];if("v"===i&&s.length>=4){const e=Number(s[1]),o=Number(s[2]),n=Number(s[3]);Number.isFinite(e)&&Number.isFinite(o)&&Number.isFinite(n)&&t.push([e,o,n])}else if("vt"===i&&s.length>=3){const e=Number(s[1]),t=Number(s[2]);Number.isFinite(e)&&Number.isFinite(t)&&o.push([e,t])}else if("f"===i&&s.length>=4){const e=[];for(let o=1;o<s.length;o++){const n=s[o].split("/")[0];let A=parseInt(n,10);Number.isFinite(A)&&(A<0?A=t.length+A:A-=1,A>=0&&A<t.length&&e.push(A))}e.length>=3&&A.push(e)}}if(t.length<3||A.length<1)return null;const s=(0,n.finalizeMesh)({vertices:t,faces:A},!1);o.length===t.length&&(s.uvs=o);return s},t.parseSTL=function(e){const t=[],o=[],A=new Map,s=(e,o,n)=>{const s=`${e.toFixed(4)}:${o.toFixed(4)}:${n.toFixed(4)}`,i=A.get(s);if(void 0!==i)return i;const r=t.length;return t.push([e,o,n]),A.set(s,r),r};let i=[];for(const t of e.split(/\r?\n/)){const e=t.trim();if(e.startsWith("vertex ")){const t=e.split(/\s+/);if(t.length>=4){const e=Number(t[1]),o=Number(t[2]),n=Number(t[3]);Number.isFinite(e)&&Number.isFinite(o)&&Number.isFinite(n)&&i.push(s(e,o,n))}3===i.length&&(i[0]!==i[1]&&i[1]!==i[2]&&i[2]!==i[0]&&o.push(i),i=[])}}return t.length<3||o.length<1?null:(0,n.finalizeMesh)({vertices:t,faces:o},!1)};var o=e("lib/math3d"),n=e("lib/mesh")})),__define("stores/tools",(function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.toolStore=void 0;var o=e("svelte/store"),n=e("stores/scene"),A=e("stores/timeline"),s=e("stores/ui");const i={current:"move",snap:!1,space:"world",pivot:"median",agentPrompt:"",cutMode:"split",selectionMode:"single",axisConstraint:"all",uniformScale:!0,activeParamTool:null,toolParams:{extrude:{amount:.35},bevel:{amount:.05,segments:1},loopcut:{amount:1},inset:{amount:.18},decimate:{ratio:.5},solidify:{amount:.12},smooth:{iterations:2,factor:.5},array:{count:3,offset:[1.25,0,0]},screw:{axis:"z",angle:360,steps:16,pitch:.5},boolean:{op:"difference"},subdivide:{levels:1}}},r={red:"#ff6b6b",orange:"#ffa94d",yellow:"#ffd43b",green:"#51d88a",teal:"#3dd9a8",cyan:"#5cb8ff",blue:"#4c8dff",purple:"#a78bfa",violet:"#b197fc",pink:"#f472b6",white:"#f1f3f9",grey:"#9aa3b8",gray:"#9aa3b8",black:"#14161d"},a={cube:"cube",box:"cube",sphere:"sphere",ball:"sphere",cylinder:"cylinder",cone:"cone",torus:"torus",donut:"torus",ring:"torus",plane:"plane",floor:"plane",ground:"plane",coin:"coin",light:"light",lamp:"light",sun:"light",camera:"camera",bone:"bone"};function c(e){const t=/#([0-9a-f]{6}|[0-9a-f]{3})\b/i.exec(e);if(t)return t[0];for(const[t,o]of Object.entries(r))if(new RegExp(`\\b${t}\\b`,"i").test(e))return o;return null}function l(e){return(e.match(/-?\d+(?:\.\d+)?/g)||[]).map(Number).filter((e=>Number.isFinite(e)))}function g(e){const t=(0,o.get)(n.sceneStore),A=e.toLowerCase();return t.objects.filter((e=>A.includes(e.name.toLowerCase()))).sort(((e,t)=>t.name.length-e.name.length))[0]||null}function d(e){return g(e)||function(){const e=(0,o.get)(n.sceneStore);return e.objects.find((t=>t.id===e.selectedId))||null}()}function u(e,t="info"){s.uiStore.showToast(e,t,2600)}function m(e){const t=e.trim(),s=t.toLowerCase();if(t)if(/\b(help|commands)\b/.test(s))u("Try: add cube, add 3 red spheres, select Cube, move to 2 0 0, spin, drop, play, undo.","info");else{if(/\b(undo)\b/.test(s))return n.sceneStore.undo(),void u("Undo.","success");if(/\b(redo)\b/.test(s))return n.sceneStore.redo(),void u("Redo.","success");if(/\b(clear|reset)\b/.test(s)&&!/\b(reset score)\b/.test(s))return n.sceneStore.clear(),A.timelineStore.clearKeyframes(),void u("Scene cleared. Undo is available.","success");if(/\b(reset score|score reset)\b/.test(s))return n.sceneStore.resetScore(),void u("Score reset.","success");if(/\b(play game|game mode|start game)\b/.test(s)){return(0,o.get)(n.sceneStore).gameMode||n.sceneStore.toggleGameMode(),void u("Game mode on. Use arrow keys or the on-screen pad.","success")}if(/\b(stop game|exit game|end game)\b/.test(s)){return(0,o.get)(n.sceneStore).gameMode&&n.sceneStore.toggleGameMode(),n.sceneStore.resetGameInput(),void u("Game mode off.","success")}if(/\b(play|start)\b/.test(s)&&!/\b(play game)\b/.test(s))return A.timelineStore.setShow(!0),A.timelineStore.setPlaying(!0),void u("Playing timeline.","success");if(/\b(pause|stop)\b/.test(s))return A.timelineStore.setPlaying(!1),void u("Timeline paused.","success");if(/\b(add key|keyframe)\b/.test(s)){const e=d(t);if(!e)return void u("Select an object before adding a keyframe.","warning");const n=(0,o.get)(A.timelineStore).currentTime;return A.timelineStore.addKeyframe(e.id,{time:n,position:[...e.position],rotation:[...e.rotation],scale:[...e.scale]}),void u(`Keyframe added for ${e.name} at ${n.toFixed(2)}s.`,"success")}if(/\b(delete|remove)\b/.test(s)){const e=g(t);return e?(n.sceneStore.deleteObject(e.id),A.timelineStore.removeKeyframesFor(e.id),void u(`Deleted ${e.name}.`,"success")):(n.sceneStore.deleteSelected(),void u("Deleted selected object.","success"))}if(/\b(select)\b/.test(s)){const e=g(t);e?(n.sceneStore.selectObject(e.id),u(`Selected ${e.name}.`,"success")):u("No matching object. Check the outliner for names.","warning")}else{if(/\b(color|paint|make.*(red|blue|green|yellow|purple|pink|white|black))\b/.test(s)){const e=d(t),o=c(t);return e?o?(n.sceneStore.setColor(e.id,o),void u(`Colored ${e.name}.`,"success")):void u("I could not find a color name in that request.","warning"):void u("Select an object before changing its color.","warning")}if(/\b(move|translate)\b/.test(s)){const e=d(t);if(!e)return void u("Select an object before moving it.","warning");const o=l(s);if(!o.length)return void u("Give me a position, for example: move to 2 0 0.","warning");const A=/by\b/.test(s)&&o.length>=3?[e.position[0]+o[0],e.position[1]+o[1],e.position[2]+o[2]]:function(e,t){return e.length>=3?[e[0],e[1],e[2]]:t}(o,e.position);return n.sceneStore.setTransform(e.id,{position:A}),void u(`Moved ${e.name}.`,"success")}if(/\b(rotate|turn)\b/.test(s)){const e=d(t);if(!e)return void u("Select an object before rotating it.","warning");const o=l(s),A=(o.length>=3?o:[0,45,0]).map((e=>e*Math.PI/180));return n.sceneStore.setTransform(e.id,{rotation:[e.rotation[0]+A[0],e.rotation[1]+A[1],e.rotation[2]+A[2]]}),void u(`Rotated ${e.name}.`,"success")}if(/\b(scale|resize|size)\b/.test(s)){const e=d(t);if(!e)return void u("Select an object before scaling it.","warning");const o=l(s),A=o[0]&&o[0]>0?o[0]:1.25;return n.sceneStore.setTransform(e.id,{scale:[e.scale[0]*A,e.scale[1]*A,e.scale[2]*A]}),void u(`Scaled ${e.name}.`,"success")}(function(e){const t=e.toLowerCase();if(!/\b(animate|spin|rotate|bounce|orbit|fall|drop)\b/.test(t))return!1;const n=d(e);if(!n)return u("Select an object before asking for an animation.","warning"),!0;const s=Math.max(1,Math.min(10,l(t).find((e=>e>=1&&e<=10))||2)),i={time:0,position:[...n.position],rotation:[...n.rotation],scale:[...n.scale]};if(/\bspin\b/.test(t))A.timelineStore.addKeyframe(n.id,i),A.timelineStore.addKeyframe(n.id,{...i,time:s,rotation:[i.rotation[0],i.rotation[1]+2*Math.PI,i.rotation[2]]}),u(`Spinning ${n.name} over ${s}s.`,"success");else if(/\bbounce\b/.test(t))A.timelineStore.addKeyframe(n.id,i),A.timelineStore.addKeyframe(n.id,{...i,time:s/2,position:[i.position[0],i.position[1]+2,i.position[2]]}),A.timelineStore.addKeyframe(n.id,{...i,time:s}),u(`Bouncing ${n.name} over ${s}s.`,"success");else if(/\borbit\b/.test(t)){const e=Math.hypot(i.position[0],i.position[2])||2;for(let t=0;t<=4;t++){const o=t/4*Math.PI*2;A.timelineStore.addKeyframe(n.id,{...i,time:s*t/4,position:[Math.cos(o)*e,i.position[1],Math.sin(o)*e]})}u(`Orbiting ${n.name} over ${s}s.`,"success")}else/\b(fall|drop)\b/.test(t)?(A.timelineStore.addKeyframe(n.id,i),A.timelineStore.addKeyframe(n.id,{...i,time:s,position:[i.position[0],0,i.position[2]]}),u(`${n.name} will fall over ${s}s.`,"success")):(A.timelineStore.addKeyframe(n.id,i),A.timelineStore.addKeyframe(n.id,{...i,time:s,rotation:[i.rotation[0],i.rotation[1]+Math.PI,i.rotation[2]]}),u(`Animated ${n.name} over ${s}s.`,"success"));return A.timelineStore.setDuration(Math.max(s,(0,o.get)(A.timelineStore).duration)),A.timelineStore.setPlaying(!0),!0})(t)||function(e){const t=e.toLowerCase();if(!/\b(add|create|make|place|new)\b/.test(t))return!1;const A=Object.entries(a);let s="";for(const[e,o]of A)if(new RegExp(`\\b${e}(?:e?s)?\\b`,"i").test(t)){s=o;break}if(!s)return!1;const i=l(t);let r=1;const g=/\b(\d+)\b/.exec(t);if(g){const e=Number(g[1]);e>=1&&e<=25&&(r=e)}const d=c(e),m=n.PRIMITIVES.find((e=>e.type===s)),p=i.length>=3?i.slice(-3):null,h=[];for(let e=0;e<r;e++){n.sceneStore.addPrimitive(s,p&&0===e?p:void 0);const t=(0,o.get)(n.sceneStore).selectedId;t&&h.push(t)}if(d)for(const e of h)n.sceneStore.setColor(e,d);return u(`Added ${r>1?`${r} `:""}${m?.label.toLowerCase()||s}${r>1?"s":""}.`,"success"),!0}(t)||u('I did not understand that. Type "help" for example commands.',"warning")}}}const p=function(){const{subscribe:e,set:t,update:A}=(0,o.writable)(i);return{subscribe:e,set:t,setTool:e=>A((t=>(t.current=e,t))),setPan:()=>A((e=>(e.current="pan",e))),toggleSnap:()=>A((e=>(e.snap=!e.snap,e))),setSpace:e=>A((t=>(t.space=e,t))),setPivot:e=>A((t=>(t.pivot=e,t))),setAgentPrompt:e=>A((t=>(t.agentPrompt=e,t))),setCutMode:e=>A((t=>(t.cutMode=e,t))),setSelectionMode:e=>A((t=>(t.selectionMode=e,t))),setAxisConstraint:e=>A((t=>(t.axisConstraint=e,t))),setUniformScale:e=>A((t=>(t.uniformScale=e,t))),setActiveParamTool:e=>A((t=>(t.activeParamTool=e,t))),setToolParam:(e,t,o)=>A((n=>(n.toolParams[e]||(n.toolParams[e]={}),n.toolParams[e][t]=o,n))),runAgent:()=>{const e=(0,o.get)(p).agentPrompt.trim();e?(m(e),A((e=>(e.agentPrompt="",e)))):u("Describe what to build or animate first.","warning")},runCommand:e=>m(e),undo:()=>n.sceneStore.undo(),redo:()=>n.sceneStore.redo()}}();t.toolStore=p})),function(){const{get:e}=__require("svelte/store"),{ICONS:t,WORKSPACES:o,WORKSPACE_CHIPS:n,CHIP_ICONS:A}=__require("lib/constants");var s={curve:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19C4 19 6 4 12 4C18 4 20 19 20 19"/></svg>',light:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>',camera:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>',text:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 7 4 4 20 4 20 7"/><line x1="9" y1="20" x2="15" y2="20"/><line x1="12" y1="4" x2="12" y2="20"/></svg>',cube:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>',sphere:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><ellipse cx="12" cy="12" rx="10" ry="4"/><line x1="12" y1="2" x2="12" y2="22"/></svg>',cylinder:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5"/></svg>',cone:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="19" rx="9" ry="3"/><path d="M3 19L12 2l9 17"/></svg>',torus:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="12" rx="10" ry="6"/><circle cx="12" cy="12" r="3"/></svg>',plane:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="2 18 8 6 22 6 16 18"/></svg>',photo:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>',bone:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 10c.7-.7 1.6-1 2.5-1a2.5 2.5 0 1 0-1.8-4.2c-.9.9-1.2 1.8-.7 2.7l-9 9c-.9-.5-1.8-.2-2.7.7a2.5 2.5 0 1 0 4.2 1.8c0-.9.3-1.8 1-2.5l6.5-6.5z"/></svg>',split:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><line x1="20" y1="4" x2="8.12" y2="15.88"/><line x1="14.47" y1="14.48" x2="20" y2="20"/><line x1="8.12" y1="8.12" x2="12" y2="12"/></svg>',speed:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',reverse:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 8 1 5 4 2"/><path d="M1 5h15a5 5 0 0 1 5 5v1"/><polyline points="20 16 23 19 20 22"/><path d="M23 19H8a5 5 0 0 1-5-5v-1"/></svg>',freeze:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="2" x2="12" y2="22"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/><line x1="19.07" y1="4.93" x2="4.93" y2="19.07"/></svg>',duplicate:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>',copy:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>',paste:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1"/></svg>',opacity:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 3a9 9 0 0 0 0 18z" fill="currentColor"/></svg>',replace:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>',trash:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>',save:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>',cam_track:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M23 7l-7 5 7 5V7z"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg>',cam_view:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>',start:'<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><rect x="4" y="4" width="3" height="16" rx="0.5"/><polygon points="20 4 8 12 20 20 20 4"/></svg>',prev_frame:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>',play:'<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="6 4 20 12 6 20 6 4"/></svg>',pause:'<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16" rx="1"/><rect x="14" y="4" width="4" height="16" rx="1"/></svg>',stop:'<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><rect x="5" y="5" width="14" height="14" rx="2"/></svg>',next_frame:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>',prev_key:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="11 17 6 12 11 7"/><polygon points="17 7 21 12 17 17 13 12 17 7" fill="currentColor"/></svg>',add_key:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 3 19 12 12 21 5 12 12 3"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>',del_key:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 3 19 12 12 21 5 12 12 3"/><line x1="8" y1="12" x2="16" y2="12"/></svg>',next_key:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polygon points="7 7 11 12 7 17 3 12 7 7" fill="currentColor"/><polyline points="13 7 18 12 13 17"/></svg>',autokey:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3" fill="currentColor"/></svg>',loop:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg>',snap:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9V5h4M20 9V5h-4M4 15v4h4M20 15v4h-4"/><circle cx="12" cy="12" r="2.5"/></svg>',undo:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7v6h6"/><path d="M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13"/></svg>',redo:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 7v6h-6"/><path d="M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3L21 13"/></svg>',zoom_in:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>',zoom_out:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="8" y1="11" x2="14" y2="11"/></svg>',tab_add:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>',tab_edit:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>',tab_sculpt:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18"/><path d="M5 21v-7l9-9a2.5 2.5 0 0 1 3.5 3.5L8.5 17.5 5 21z"/><path d="M14 8l3 3"/></svg>',tab_rig:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="6" r="2.5"/><circle cx="18" cy="18" r="2.5"/><line x1="7.8" y1="7.8" x2="16.2" y2="16.2"/><line x1="5" y1="13" x2="13" y2="5"/></svg>',tab_animate:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 19 12 12 22 5 12 12 2"/><circle cx="12" cy="12" r="2"/></svg>',tab_look:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 3a9 9 0 0 1 0 18v-9a4.5 4.5 0 0 0 0-9z"/></svg>',close:'<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',target:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/><line x1="12" y1="2" x2="12" y2="6"/><line x1="12" y1="18" x2="12" y2="22"/><line x1="2" y1="12" x2="6" y2="12"/><line x1="18" y1="12" x2="22" y2="12"/></svg>',follow:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polygon points="3 11 22 2 13 21 11 13 3 11"/></svg>',orbit:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><ellipse cx="12" cy="12" rx="9" ry="4.5" transform="rotate(-30 12 12)"/></svg>',unlock:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 9.9-1"/></svg>',pencil:'<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"/></svg>',plus:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>',move:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="5 9 2 12 5 15"/><polyline points="9 5 12 2 15 5"/><polyline points="15 19 12 22 9 19"/><polyline points="19 9 22 12 19 15"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="12" y1="2" x2="12" y2="22"/></svg>',rotate:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/></svg>',scale:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/><line x1="21" y1="3" x2="14" y2="10"/><line x1="3" y1="21" x2="10" y2="14"/></svg>',universal:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 2v4M12 18v4M2 12h4M18 12h4"/><circle cx="12" cy="12" r="9" stroke-dasharray="3 3"/></svg>',extrude:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/><line x1="12" y1="2" x2="12" y2="8" stroke-width="2.5"/></svg>',bevel:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3h10l8 8v10H3z"/><line x1="13" y1="3" x2="21" y2="11"/></svg>',loopcut:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="12" y1="3" x2="12" y2="21" stroke-dasharray="3 2"/></svg>',inset:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><rect x="7" y="7" width="10" height="10" rx="1"/></svg>',knife:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2l7.5 7.5L8.5 23H2v-6.5L14.5 2z"/><line x1="16" y1="5" x2="19" y2="8"/></svg>',bridge:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="6" width="6" height="12" rx="1"/><rect x="16" y="6" width="6" height="12" rx="1"/><line x1="8" y1="9" x2="16" y2="9"/><line x1="8" y1="15" x2="16" y2="15"/></svg>',merge:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><polyline points="4 4 10 10"/><line x1="4" y1="10" x2="10" y2="10"/><line x1="10" y1="4" x2="10" y2="10"/><polyline points="20 4 14 10"/><line x1="20" y1="10" x2="14" y2="10"/><line x1="14" y1="4" x2="14" y2="10"/></svg>',dissolve:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" stroke-dasharray="4 2"/><line x1="9" y1="9" x2="15" y2="15"/></svg>',separate:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="8" height="8" rx="1"/><rect x="13" y="13" width="8" height="8" rx="1"/><polyline points="13 7 17 3 21 7"/><polyline points="11 17 7 21 3 17"/></svg>',join:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-3"/><polyline points="10 14 21 3 21 9"/><polyline points="15 3 21 3"/></svg>',decimate:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 22 22 22"/><line x1="12" y1="12" x2="12" y2="18"/></svg>',screw:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="7" ry="3"/><path d="M5 5v14c0 1.66 3.13 3 7 3s7-1.34 7-3V5"/><path d="M5 12c0 1.66 3.13 3 7 3s7-1.34 7-3"/></svg>',boolean:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="12" r="7"/><circle cx="15" cy="12" r="7"/></svg>',origin:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><line x1="12" y1="2" x2="12" y2="6"/><line x1="12" y1="18" x2="12" y2="22"/><line x1="2" y1="12" x2="6" y2="12"/><line x1="18" y1="12" x2="22" y2="12"/></svg>',parent:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="5" r="3"/><circle cx="6" cy="19" r="3"/><circle cx="18" cy="19" r="3"/><path d="M12 8v5M6 16v-3h12v3"/></svg>',box_sel:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" stroke-dasharray="3 3"/><circle cx="12" cy="12" r="1.5"/></svg>',lasso_sel:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 22a5 5 0 0 1-2-4c0-4 4-8 9-8s8 3 8 7-4 7-9 7c-2 0-3-.5-4-1"/><path d="M7 16l-3 6"/></svg>',subdiv:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="12" y1="3" x2="12" y2="21"/></svg>',brush_draw:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/></svg>',brush_clay:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',brush_smooth:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12c3-4 6-4 9 0s6 4 9 0"/><path d="M2 17c3-3 6-3 9 0s6 3 9 0"/></svg>',brush_inflate:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="8"/><path d="M12 2v4M12 18v4M2 12h4M18 12h4"/></svg>',brush_grab:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 11V6a2 2 0 0 0-4 0v5M14 10V4a2 2 0 0 0-4 0v6M10 10.5V6a2 2 0 0 0-4 0v8"/><path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"/></svg>',brush_snake_hook:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 3c-4 0-7 3-7 7 0 3 2 5 4 5s3-1 3-3-2-3-4-3c-3 0-5 2-6 5l-4 7"/></svg>',brush_pinch:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 12 10 12"/><polyline points="20 12 14 12"/><polyline points="7 9 10 12 7 15"/><polyline points="17 9 14 12 17 15"/></svg>',brush_crease:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="2 7 12 17 22 7"/><line x1="12" y1="17" x2="12" y2="22"/></svg>',brush_flatten:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="19" x2="21" y2="19"/><path d="M5 15l7-10 7 10H5z"/></svg>',brush_fill:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 11V4a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v7"/><path d="M5 11a7 7 0 0 0 14 0"/><line x1="12" y1="12" x2="12" y2="18"/></svg>',brush_mask:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 3a9 9 0 0 1 0 18z" fill="currentColor"/></svg>',brush_simplify:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 22 22 22"/><circle cx="12" cy="14" r="2"/></svg>'};function i(e){if(e){var t=!1,o=0,n=0;e.addEventListener("pointerdown",(function(A){if("mouse"!==A.pointerType||0!==A.button||window.__tlScrubbing)return void(t=!1);if(A.target.closest("input,select,textarea,canvas,.tl-clip,.tl-row,#tl-body"))return void(t=!1);t=!0,o=A.clientX,n=e.scrollLeft})),window.addEventListener("pointerdown",(function(A){if(t&&!e.contains(A.target))t=!1}),!0),window.addEventListener("pointermove",(function(A){if(!t||window.__tlScrubbing||"mouse"!==A.pointerType||(typeof A.buttons==="number"&&0===(1&A.buttons)))return void(t=!1);var s=A.clientX-o;Math.abs(s)>4&&(e.scrollLeft=n-s)})),window.addEventListener("pointerup",(function(){t=!1}),!0),window.addEventListener("pointercancel",(function(){t=!1}),!0),window.addEventListener("blur",(function(){t=!1})),e.addEventListener("wheel",(function(t){0===t.deltaX&&Math.abs(t.deltaY)>0&&(e.scrollLeft+=t.deltaY,t.preventDefault())}),{passive:!1})}}const{DEFAULT_CAMERA:r,add:a,cameraBasis:c,clamp:l,dot:g,sub:d,worldPerPixel:u,basisFromDirection:m,rotateEuler:p,lookAtEuler:h,focalLengthToFOV:I,fovToFocalLength:f}=__require("lib/math3d"),{mat4FromTRS:C,mat4Invert:y,mat4Transpose:E,transformDir3:B,transformVec3:b}=__require("lib/glmath"),{formatClock:v}=__require("lib/time"),{isClippable:Q,clipHidesLayer:M,layerRange:k,layerTint:w,mediaVisible:x}=__require("lib/layers"),{eulerToQuat:S,quatConjugate:D,quatFromAxisAngle:L,quatMul:F,quatToEuler:N,MAX_TIMELINE_SECONDS:R}=__require("lib/fcurve"),{meshFor:G}=__require("lib/mesh"),{cutPlaneFromScreenSegment:P}=__require("lib/bisect"),{detectCoplanarRegion:T}=__require("lib/regions"),{MATERIAL_GROUPS:j,MATERIAL_PRESETS:Y,thumbnailFor:K_thumb,renderSlotsFor:K}=__require("lib/materials"),{readLayerImage:_}=__require("lib/media"),{buildGizmo:J,distanceToPolyline:V,distanceToSegment:q,gizmoAxisDirection:O,gizmoPlaneAxes:H,screenAngle:z}=__require("lib/gizmo"),{WasmEngine:X}=__require("lib/wasm"),{cameraRay:W,pickElement:$,pickObjects:Z,pickingEngineLoaded:ee,projectWorld:te,rayWorldThreshold:oe,setPickingEngine:ne}=__require("lib/picking"),{GLRenderer:Ae,objectRenderColor:se}=__require("lib/gl"),{drawScene:ie}=__require("lib/render"),{brushStore:re}=__require("stores/brush"),{physicsStore:ae}=__require("stores/physics"),{uiStore:ce}=__require("stores/ui"),{viewportStore:le}=__require("stores/viewport"),{workspaceStore:ge}=__require("stores/workspace"),{timelineStore:de,roundTime:ue}=__require("stores/timeline"),{PRIMITIVES:me,iconForType:pe,sceneStore:he,defaultCreationParams:defaultCreationParams}=__require("stores/scene"),{applyProject:Ie,createProject:fe,deleteSavedProject:Ce,downloadProject:ye,listSavedProjects:Ee,loadAutosave:Be,readProjectFile:be,saveAutosave:ve,saveToBrowser:Qe,validateProject:Me}=__require("lib/project"),{exportSceneToOBJ:ke,exportSceneToSTL:we,parseOBJ:xe,parseSTL:Se}=__require("lib/io3d"),{toolStore:De}=__require("stores/tools");const Le=new Map;let Fe=!1;
const {mat4FromTRS:__mat4FromTRS,mat4Invert:__mat4Invert,mat4Multiply:__mat4Multiply,transformVec3:__transformVec3}=__require("lib/glmath");
const {rotateEuler:__rotateEuler,clamp:__clamp,add:__vAdd,sub:__vSub,dot:__vDot,cross:__vCross,normalize:__vNorm,length:__vLen}=__require("lib/math3d");
const {computeVertexNormals:__computeNormals,cloneMesh:__cloneMesh,subdivide:__subdivideMesh}=__require("lib/mesh");

const __rigState = {
  activeTab: "Animate",
  mode: "edit", // "edit" | "pose" | "weight"
  xray: true,
  showNames: true,
  multiSelect: false,
  activeLayer: 0, // 0=All, 1=Core, 2=Limbs, 3=IK
  poseDrawer: null, // null | "ik" | "constraints" | "poselib"
  activeWeightBoneId: null,
  lastSelectedBoneId: null,
  wpBrush: "add", // "add" | "subtract" | "blur" | "lighten" | "darken"
  wpRadius: 0.45,
  wpStrength: 0.65,
  wpMirrorX: true,
  wpAutoNormalize: true,
  poseNameDraft: "HeroPose",
  savedPoses: [
    { name: "Rest Pose", builtIn: "rest", poses: {} },
    { name: "T-Pose", builtIn: "tpose", poses: {} },
    { name: "Wave Hi", builtIn: "wave", poses: {} },
    { name: "Walk Stride", builtIn: "walk", poses: {} },
    { name: "Action Jump", builtIn: "jump", poses: {} }
  ]
};

function __getBoneLen(b) {
  return Math.max(0.08, (b.boneLength || 0.45) * (b.scale?.[1] || 1));
}

function __getBoneEndpoints(b) {
  const head = [b.position[0], b.position[1], b.position[2]];
  const len = __getBoneLen(b);
  const dir = __vNorm(__rotateEuler([0, 1, 0], b.rotation));
  const tail = [head[0] + dir[0] * len, head[1] + dir[1] * len, head[2] + dir[2] * len];
  return { head, tail, dir, len };
}

function __orientBoneFromHeadTail(head, tail, roll = 0) {
  const dx = tail[0] - head[0], dy = tail[1] - head[1], dz = tail[2] - head[2];
  const dist = Math.hypot(dx, dy, dz) || 0.45;
  const ux = dx / dist, uy = dy / dist, uz = dz / dist;
  const rx = Math.asin(__clamp(uz, -1, 1));
  const rz = Math.atan2(-ux, uy);
  return { rotation: [rx, roll, rz], length: dist };
}

function __pointSegDistSq(pt, a, b) {
  const abx = b[0] - a[0], aby = b[1] - a[1], abz = b[2] - a[2];
  const apx = pt[0] - a[0], apy = pt[1] - a[1], apz = pt[2] - a[2];
  const ab2 = abx * abx + aby * aby + abz * abz;
  const t = ab2 > 1e-8 ? __clamp((apx * abx + apy * aby + apz * abz) / ab2, 0, 1) : 0;
  const cx = a[0] + abx * t - pt[0], cy = a[1] + aby * t - pt[1], cz = a[2] + abz * t - pt[2];
  return cx * cx + cy * cy + cz * cz;
}

function __weightToRgb(w) {
  const x = __clamp(w, 0, 1);
  if (x <= 0.25) {
    const t = x / 0.25;
    return [0.06 * (1 - t), 0.22 + 0.68 * t, 0.96];
  } else if (x <= 0.5) {
    const t = (x - 0.25) / 0.25;
    return [0.08 * t, 0.90, 0.96 * (1 - t) + 0.22 * t];
  } else if (x <= 0.75) {
    const t = (x - 0.5) / 0.25;
    return [0.08 + 0.90 * t, 0.90, 0.22 * (1 - t) + 0.06 * t];
  } else {
    const t = (x - 0.75) / 0.25;
    return [0.98, 0.90 * (1 - t) + 0.12 * t, 0.06];
  }
}

function __makeBoneObj(st, name, head, tail, parentId = null, connected = false, layer = 1) {
  const existingNames = new Set(st.objects.map(o => o.name));
  let finalName = name;
  let idx = 1;
  while (existingNames.has(finalName)) {
    finalName = `${name}.${String(idx++).padStart(2, "0")}`;
  }
  const { rotation, length } = __orientBoneFromHeadTail(head, tail, 0);
  const bMesh = __cloneMesh(G("bone"));
  const id = "obj-" + Math.random().toString(36).slice(2, 8) + "-" + (st.objects.length + 1);
  const bone = {
    id,
    name: finalName,
    type: "bone",
    position: [...head],
    rotation: [...rotation],
    scale: [1, Math.max(0.15, length / 0.45), 1],
    boneLength: 0.45,
    connected: Boolean(connected && parentId),
    boneLayer: layer,
    boneLocked: false,
    restPose: {
      position: [...head],
      rotation: [...rotation],
      scale: [1, Math.max(0.15, length / 0.45), 1]
    },
    bindPose: {
      position: [...head],
      rotation: [...rotation],
      scale: [1, Math.max(0.15, length / 0.45), 1]
    },
    color: "#7dd3fc",
    material: { emissive: "#0c2436", opacity: 0.95, metalness: 0.2, roughness: 0.35 },
    geometry: bMesh,
    geometryVersion: 1,
    colorVersion: 1,
    selectionVersion: 1,
    physics: { dynamic: false, mass: 1, restitution: 0.4, friction: 0.5, velocity: [0, 0, 0] },
    visible: true,
    locked: false,
    selected: true,
    depth: 0,
    parent: parentId,
    children: [],
    ik: { enabled: false, targetId: null, chainLength: 2, influence: 1.0 },
    constraints: []
  };
  if (parentId) {
    const p = st.objects.find(o => o.id === parentId);
    if (p) {
      bone.depth = (p.depth || 0) + 1;
      if (!p.children.includes(id)) p.children.push(id);
    }
  }
  st.objects.push(bone);
  return bone;
}

function __topologicalBones(st) {
  const bones = st.objects.filter(o => "bone" === o.type);
  const byId = new Map(bones.map(b => [b.id, b]));
  const visited = new Set();
  const ordered = [];
  function visit(b) {
    if (!b || visited.has(b.id)) return;
    if (b.parent && byId.has(b.parent)) visit(byId.get(b.parent));
    visited.add(b.id);
    ordered.push(b);
  }
  for (const b of bones) visit(b);
  return ordered;
}

function __propagateHierarchy(st, movedIds = [], prevMap = null) {
  const bones = __topologicalBones(st);
  const byId = new Map(bones.map(b => [b.id, b]));
  const isEdit = ("Rig" === __rigState.activeTab && "edit" === __rigState.mode);

  if (isEdit) {
    for (const b of bones) {
      if (b.connected && b.parent && byId.has(b.parent)) {
        const pEnd = __getBoneEndpoints(byId.get(b.parent));
        b.position = [...pEnd.tail];
      }
      b.restPose = {
        position: [...b.position],
        rotation: [...b.rotation],
        scale: [...b.scale]
      };
    }
    __updateSkinnedMeshes(st);
    return;
  }

  // In Pose / Animate mode: propagate parent delta rotation & translation to children!
  const deltaRotMap = new Map();
  for (const b of bones) {
    const prev = prevMap ? prevMap.get(b.id) : null;
    if (prev && (Math.abs(b.rotation[0] - prev.rotation[0]) > 1e-6 || Math.abs(b.rotation[1] - prev.rotation[1]) > 1e-6 || Math.abs(b.rotation[2] - prev.rotation[2]) > 1e-6)) {
      const qPrev = S(prev.rotation);
      const qCurr = S(b.rotation);
      deltaRotMap.set(b.id, F(qCurr, D(qPrev)));
    }
  }

  for (const b of bones) {
    if (!b.parent || !byId.has(b.parent)) continue;
    const p = byId.get(b.parent);
    const pDeltaQ = deltaRotMap.get(p.id);
    // If parent rotated and child was not directly in movedIds, inherit parent delta rotation!
    if (pDeltaQ && !movedIds.includes(b.id)) {
      const qChild = S(b.rotation);
      const qNext = F(pDeltaQ, qChild);
      b.rotation = N(qNext);
      deltaRotMap.set(b.id, pDeltaQ);
    }
    if (b.connected) {
      const pEnd = __getBoneEndpoints(p);
      b.position = [...pEnd.tail];
    } else if (prevMap && prevMap.has(p.id) && !movedIds.includes(b.id)) {
      const pPrev = prevMap.get(p.id);
      const rel = [b.position[0] - pPrev.position[0], b.position[1] - pPrev.position[1], b.position[2] - pPrev.position[2]];
      let rotRel = rel;
      if (pDeltaQ) {
        const invPrev = [-pPrev.rotation[0], -pPrev.rotation[1], -pPrev.rotation[2]];
        rotRel = __rotateEuler(__rotateEuler(rel, invPrev), p.rotation);
      }
      b.position = [p.position[0] + rotRel[0], p.position[1] + rotRel[1], p.position[2] + rotRel[2]];
    }
  }

  // Solve Bone Constraints
  for (const b of bones) {
    if (!b.constraints || !b.constraints.length) continue;
    for (const con of b.constraints) {
      const inf = con.influence ?? 1.0;
      const target = con.targetId ? st.objects.find(o => o.id === con.targetId) : null;
      if ("copy_rotation" === con.type && target) {
        b.rotation = [
          b.rotation[0] + (target.rotation[0] - b.rotation[0]) * inf,
          b.rotation[1] + (target.rotation[1] - b.rotation[1]) * inf,
          b.rotation[2] + (target.rotation[2] - b.rotation[2]) * inf
        ];
      } else if ("copy_location" === con.type && target && !b.connected) {
        b.position = [
          b.position[0] + (target.position[0] - b.position[0]) * inf,
          b.position[1] + (target.position[1] - b.position[1]) * inf,
          b.position[2] + (target.position[2] - b.position[2]) * inf
        ];
      } else if ("limit_rotation" === con.type) {
        const mn = con.min ?? -1.2, mx = con.max ?? 1.2;
        b.rotation = [__clamp(b.rotation[0], mn, mx), __clamp(b.rotation[1], mn, mx), __clamp(b.rotation[2], mn, mx)];
      } else if ("limit_location" === con.type && !b.connected) {
        const mn = con.min ?? -2.0, mx = con.max ?? 2.0;
        b.position = [__clamp(b.position[0], mn, mx), __clamp(b.position[1], mn, mx), __clamp(b.position[2], mn, mx)];
      } else if ("child_of" === con.type && target && target.restPose) {
        const dx = target.position[0] - target.restPose.position[0];
        const dy = target.position[1] - target.restPose.position[1];
        const dz = target.position[2] - target.restPose.position[2];
        const base = b.restPose ? b.restPose.position : b.position;
        if (!b.connected) b.position = [base[0] + dx * inf, base[1] + dy * inf, base[2] + dz * inf];
      } else if ("damped_track" === con.type && target) {
        const { rotation } = __orientBoneFromHeadTail(b.position, target.position, b.rotation[1]);
        b.rotation = [
          b.rotation[0] + (rotation[0] - b.rotation[0]) * inf,
          b.rotation[1],
          b.rotation[2] + (rotation[2] - b.rotation[2]) * inf
        ];
      }
    }
  }

  // Solve Inverse Kinematics (CCD Solver)
  for (const b of bones) {
    if (!b.ik || !b.ik.enabled || !b.ik.targetId) continue;
    const targetObj = st.objects.find(o => o.id === b.ik.targetId);
    if (!targetObj) continue;
    const targetPos = [...targetObj.position];
    const chainLen = Math.max(1, Math.min(6, b.ik.chainLength || 2));
    const inf = __clamp(b.ik.influence ?? 1.0, 0, 1);
    const chain = [];
    let curr = b;
    for (let i = 0; i < chainLen && curr; i++) {
      chain.push(curr);
      curr = curr.parent ? byId.get(curr.parent) : null;
    }
    for (let iter = 0; iter < 8; iter++) {
      for (let cIdx = 0; cIdx < chain.length; cIdx++) {
        const joint = chain[cIdx];
        const effEnd = __getBoneEndpoints(chain[0]).tail;
        const jHead = joint.position;
        const vCur = __vNorm(__vSub(effEnd, jHead));
        const vTar = __vNorm(__vSub(targetPos, jHead));
        const blendedDir = __vNorm([
          vCur[0] + (vTar[0] - vCur[0]) * inf,
          vCur[1] + (vTar[1] - vCur[1]) * inf,
          vCur[2] + (vTar[2] - vCur[2]) * inf
        ]);
        const curJointEnd = __getBoneEndpoints(joint);
        const angleCos = __clamp(__vDot(vCur, blendedDir), -1, 1);
        if (angleCos < 0.9999) {
          const axis = __vCross(vCur, blendedDir);
          const axisLen = __vLen(axis);
          if (axisLen > 1e-5) {
            const qRot = L([axis[0] / axisLen, axis[1] / axisLen, axis[2] / axisLen], Math.acos(angleCos));
            joint.rotation = N(F(qRot, S(joint.rotation)));
          } else {
            const { rotation } = __orientBoneFromHeadTail(jHead, [jHead[0] + blendedDir[0], jHead[1] + blendedDir[1], jHead[2] + blendedDir[2]], joint.rotation[1]);
            joint.rotation = rotation;
          }
        }
        // Forward-update connected positions from joint down to chain[0]
        for (let k = cIdx - 1; k >= 0; k--) {
          const childBone = chain[k];
          const parBone = chain[k + 1];
          if (childBone.connected) {
            childBone.position = [...__getBoneEndpoints(parBone).tail];
          }
        }
      }
    }
  }

  // Final pass to ensure all connected child bones sit on parent tails
  for (const b of bones) {
    if (b.connected && b.parent && byId.has(b.parent)) {
      b.position = [...__getBoneEndpoints(byId.get(b.parent)).tail];
    }
  }

  __updateSkinnedMeshes(st);
}

function __computeAutomaticWeights(st, targetMeshId = null) {
  const bones = st.objects.filter(o => "bone" === o.type && !o.boneLocked);
  if (!bones.length) return 0;

  let meshes = [];
  if (targetMeshId) {
    const m = st.objects.find(o => o.id === targetMeshId && "bone" !== o.type && !o.type.startsWith("light") && !o.type.startsWith("camera") && !o.type.startsWith("empty"));
    if (m) meshes.push(m);
  }
  if (!meshes.length) {
    meshes = st.objects.filter(o => "bone" !== o.type && !o.type.startsWith("light") && !o.type.startsWith("camera") && !o.type.startsWith("empty"));
  }
  if (!meshes.length) return 0;

  // Record each bone's rest-pose world matrix and inverse bind matrix
  const boneSegs = bones.map(b => {
    const rp = b.restPose || { position: [...b.position], rotation: [...b.rotation], scale: [...b.scale] };
    b.bindPose = { position: [...rp.position], rotation: [...rp.rotation], scale: [...rp.scale] };
    const restMat = __mat4FromTRS(rp.position, rp.rotation, [1, 1, 1]);
    b.invBindMatrix = __mat4Invert(restMat);
    const len = __getBoneLen({ boneLength: b.boneLength, scale: rp.scale });
    const dir = __vNorm(__rotateEuler([0, 1, 0], rp.rotation));
    const head = [...rp.position];
    const tail = [head[0] + dir[0] * len, head[1] + dir[1] * len, head[2] + dir[2] * len];
    return { id: b.id, head, tail };
  });

  let boundCount = 0;
  for (const mObj of meshes) {
    if (!mObj.geometry) {
      mObj.geometry = __cloneMesh(G(mObj.type) || G("cube"));
    }
    // If mesh has very few vertices (like a raw 8-vert cube), subdivide once so it bends smoothly!
    if (mObj.geometry.vertices.length <= 12 && "cube" === mObj.type && !mObj.baseVertices) {
      mObj.geometry = __subdivideMesh(mObj.geometry, true);
    }
    const baseVerts = mObj.baseVertices ? mObj.baseVertices.map(v => [...v]) : mObj.geometry.vertices.map(v => [...v]);
    mObj.baseVertices = baseVerts;
    mObj.bindMatrix = __mat4FromTRS(mObj.position, mObj.rotation, mObj.scale);
    mObj.invBindMatrix = __mat4Invert(mObj.bindMatrix);

    const weights = new Array(baseVerts.length);
    for (let i = 0; i < baseVerts.length; i++) {
      const worldPt = __transformVec3(mObj.bindMatrix, baseVerts[i]);
      const raw = [];
      for (const seg of boneSegs) {
        const d2 = __pointSegDistSq(worldPt, seg.head, seg.tail);
        const d = Math.sqrt(d2);
        const w = (1 / Math.pow(d + 0.065, 3.2)) * Math.exp(-2.2 * d2);
        raw.push([seg.id, w]);
      }
      raw.sort((a, b) => b[1] - a[1]);
      const top = raw.slice(0, 4);
      const sum = top.reduce((acc, item) => acc + item[1], 0) || 1;
      weights[i] = top.map(item => [item[0], item[1] / sum]);
    }
    mObj.skinWeights = weights;
    boundCount++;
  }

  if (!__rigState.activeWeightBoneId || !bones.some(b => b.id === __rigState.activeWeightBoneId)) {
    __rigState.activeWeightBoneId = bones[0].id;
  }
  __updateSkinnedMeshes(st);
  __updateWeightHeatmap(st);
  return boundCount;
}

function __updateSkinnedMeshes(st) {
  const isEdit = ("Rig" === __rigState.activeTab && "edit" === __rigState.mode);
  const bones = st.objects.filter(o => "bone" === o.type);
  const boneById = new Map(bones.map(b => [b.id, b]));

  for (const mObj of st.objects) {
    if (!mObj.baseVertices || !mObj.skinWeights || !mObj.geometry) continue;
    const base = mObj.baseVertices;
    const verts = mObj.geometry.vertices;
    if (verts.length !== base.length) continue;

    if (isEdit || !bones.length) {
      for (let i = 0; i < base.length; i++) {
        verts[i][0] = base[i][0];
        verts[i][1] = base[i][1];
        verts[i][2] = base[i][2];
      }
      mObj.geometry.normals = __computeNormals(mObj.geometry);
      mObj.geometryVersion = (mObj.geometryVersion || 1) + 1;
      continue;
    }

    const meshBind = mObj.bindMatrix || __mat4FromTRS(mObj.position, mObj.rotation, mObj.scale);
    const meshInvBind = mObj.invBindMatrix || __mat4Invert(meshBind);

    // Precompute skin matrix per bone: S_j = meshInvBind * bonePoseMat * boneInvBind * meshBind
    const skinMatrices = new Map();
    for (const b of bones) {
      const rp = b.bindPose || b.restPose || { position: [...b.position], rotation: [...b.rotation], scale: [...b.scale] };
      const bInv = b.invBindMatrix || __mat4Invert(__mat4FromTRS(rp.position, rp.rotation, [1, 1, 1]));
      const bPose = __mat4FromTRS(b.position, b.rotation, [b.scale[0] / (rp.scale[0] || 1), b.scale[1] / (rp.scale[1] || 1), b.scale[2] / (rp.scale[2] || 1)]);
      const m1 = __mat4Multiply(bPose, bInv);
      const m2 = __mat4Multiply(m1, meshBind);
      const skinMat = __mat4Multiply(meshInvBind, m2);
      skinMatrices.set(b.id, skinMat);
    }

    for (let i = 0; i < base.length; i++) {
      const v = base[i];
      const infs = mObj.skinWeights[i];
      if (!infs || !infs.length) {
        verts[i][0] = v[0];
        verts[i][1] = v[1];
        verts[i][2] = v[2];
        continue;
      }
      let sx = 0, sy = 0, sz = 0, wSum = 0;
      for (let k = 0; k < infs.length; k++) {
        const bId = infs[k][0], w = infs[k][1];
        const sm = skinMatrices.get(bId);
        if (!sm || w <= 0) continue;
        const tv = __transformVec3(sm, v);
        sx += tv[0] * w;
        sy += tv[1] * w;
        sz += tv[2] * w;
        wSum += w;
      }
      if (wSum > 1e-5) {
        verts[i][0] = sx / wSum;
        verts[i][1] = sy / wSum;
        verts[i][2] = sz / wSum;
      } else {
        verts[i][0] = v[0];
        verts[i][1] = v[1];
        verts[i][2] = v[2];
      }
    }
    mObj.geometry.normals = __computeNormals(mObj.geometry);
    mObj.geometryVersion = (mObj.geometryVersion || 1) + 1;
  }
}

function __updateWeightHeatmap(st) {
  const showHeat = ("Rig" === __rigState.activeTab && "weight" === __rigState.mode);
  const activeBoneId = __rigState.activeWeightBoneId;
  for (const mObj of st.objects) {
    if (!mObj.geometry || "bone" === mObj.type) continue;
    const mesh = mObj.geometry;
    if (showHeat && mObj.skinWeights && activeBoneId) {
      if (!mObj.savedColors) {
        mObj.savedColors = mesh.colors ? [...mesh.colors] : [];
      }
      const n = mesh.vertices.length;
      if (!mesh.colors || mesh.colors.length !== n * 3) {
        mesh.colors = new Array(n * 3).fill(0);
      }
      for (let i = 0; i < n; i++) {
        const infs = mObj.skinWeights[i] || [];
        const match = infs.find(pair => pair[0] === activeBoneId);
        const w = match ? match[1] : 0;
        const rgb = __weightToRgb(w);
        mesh.colors[3 * i] = rgb[0];
        mesh.colors[3 * i + 1] = rgb[1];
        mesh.colors[3 * i + 2] = rgb[2];
      }
      mObj.colorVersion = (mObj.colorVersion || 1) + 1;
    } else if (mObj.savedColors !== void 0) {
      mesh.colors = mObj.savedColors.length ? [...mObj.savedColors] : void 0;
      mObj.savedColors = void 0;
      mObj.colorVersion = (mObj.colorVersion || 1) + 1;
    }
  }
}

function __paintMeshWeights(st, meshObjId, localHit, radius, strength, brushKind, activeBoneId) {
  const mObj = st.objects.find(o => o.id === meshObjId);
  const bone = st.objects.find(o => o.id === activeBoneId && "bone" === o.type);
  if (!mObj || !mObj.geometry || !bone || bone.boneLocked) return false;
  if (!mObj.skinWeights) {
    __computeAutomaticWeights(st, mObj.id);
  }
  const verts = mObj.geometry.vertices;
  const weights = mObj.skinWeights;
  if (!weights) return false;

  const r2 = radius * radius;
  const invR = 1 / Math.max(1e-5, radius);
  let changed = false;

  // Build vertex adjacency for Blur brush if needed
  let adj = null;
  if ("blur" === brushKind) {
    adj = new Map();
    for (const [u, v] of mObj.geometry.edges) {
      if (!adj.has(u)) adj.set(u, []);
      if (!adj.has(v)) adj.set(v, []);
      adj.get(u).push(v);
      adj.get(v).push(u);
    }
  }

  const getW = (vIdx, bId) => {
    const row = weights[vIdx] || [];
    const found = row.find(p => p[0] === bId);
    return found ? found[1] : 0;
  };

  const applyToVert = (vIdx, bId, falloff) => {
    let row = weights[vIdx] ? weights[vIdx].map(p => [p[0], p[1]]) : [];
    let cur = getW(vIdx, bId);
    let next = cur;
    const delta = falloff * 0.35;
    if ("add" === brushKind) next = Math.min(1, cur + delta);
    else if ("subtract" === brushKind) next = Math.max(0, cur - delta);
    else if ("lighten" === brushKind) {
      if (cur < strength) next = Math.min(strength, cur + delta);
    } else if ("darken" === brushKind) {
      if (cur > (1 - strength)) next = Math.max(1 - strength, cur - delta);
    } else if ("blur" === brushKind && adj) {
      const nbrs = adj.get(vIdx) || [];
      if (nbrs.length) {
        let sum = cur;
        for (const nb of nbrs) sum += getW(nb, bId);
        const avg = sum / (nbrs.length + 1);
        next = cur + (avg - cur) * Math.min(1, falloff);
      }
    }
    if (Math.abs(next - cur) < 1e-5) return;
    changed = true;
    const existing = row.find(p => p[0] === bId);
    if (existing) existing[1] = next;
    else row.push([bId, next]);

    if (__rigState.wpAutoNormalize) {
      const others = row.filter(p => p[0] !== bId);
      const otherSum = others.reduce((acc, p) => acc + p[1], 0);
      const rem = Math.max(0, 1 - next);
      if (otherSum > 1e-5) {
        for (const p of others) p[1] = (p[1] / otherSum) * rem;
      }
    }
    weights[vIdx] = row.filter(p => p[1] > 1e-4);
  };

  for (let i = 0; i < verts.length; i++) {
    const v = verts[i];
    const dx = v[0] - localHit[0], dy = v[1] - localHit[1], dz = v[2] - localHit[2];
    const d2 = dx * dx + dy * dy + dz * dz;
    if (d2 <= r2) {
      const falloff = Math.pow(1 - Math.sqrt(d2) * invR, 1.6) * strength;
      applyToVert(i, activeBoneId, falloff);
    }
    if (__rigState.wpMirrorX && Math.abs(localHit[0]) > 0.02) {
      const mdx = v[0] - (-localHit[0]), mdy = v[1] - localHit[1], mdz = v[2] - localHit[2];
      const md2 = mdx * mdx + mdy * mdy + mdz * mdz;
      if (md2 <= r2) {
        const falloff = Math.pow(1 - Math.sqrt(md2) * invR, 1.6) * strength;
        let mirrorBoneId = activeBoneId;
        if (bone.name.endsWith(".L")) {
          const rName = bone.name.slice(0, -2) + ".R";
          const rBone = st.objects.find(o => "bone" === o.type && o.name === rName);
          if (rBone && !rBone.boneLocked) mirrorBoneId = rBone.id;
        } else if (bone.name.endsWith(".R")) {
          const lName = bone.name.slice(0, -2) + ".L";
          const lBone = st.objects.find(o => "bone" === o.type && o.name === lName);
          if (lBone && !lBone.boneLocked) mirrorBoneId = lBone.id;
        }
        applyToVert(i, mirrorBoneId, falloff);
      }
    }
  }

  if (changed) {
    __updateWeightHeatmap(st);
    __updateSkinnedMeshes(st);
  }
  return changed;
}

window.__rigEngine = {
  state: __rigState,
  getBoneEndpoints: __getBoneEndpoints,
  orientBoneFromHeadTail: __orientBoneFromHeadTail,
  makeBoneObj: __makeBoneObj,
  onTransformsChanged: __propagateHierarchy,
  computeAutomaticWeights: __computeAutomaticWeights,
  updateSkinnedMeshes: __updateSkinnedMeshes,
  updateWeightHeatmap: __updateWeightHeatmap,
  paintMeshWeights: __paintMeshWeights
};

const __lookState = {
  tab: "material", // "material" | "texture" | "lighting" | "camera" | "render"
  matGroupFilter: "All",
  activeSlotIdx: 0,
  texChannel: "base", // "base" | "roughness" | "metallic" | "normal" | "emission"
  bgColor: "#0d0f14",
  ambientStrength: 0.45,
  hdriPreset: "studio", // "studio" | "sunset" | "neon" | "daylight" | "night"
  envStrength: 1.0,
  castShadows: true,
  aoEnabled: false,
  aoStrength: 0.65,
  bloomEnabled: false,
  bloomStrength: 0.45,
  aaEnabled: true,
  lockCamToView: false,
  dofEnabled: false,
  dofDistance: 5.0,
  dofFstop: 2.8,
  renderResolution: "1920x1080"
};

const __hdriColors = {
  studio: { bg: "#0d0f14", tint: [1.0, 1.0, 1.0] },
  sunset: { bg: "#1f1218", tint: [1.08, 0.86, 0.72] },
  neon: { bg: "#090d1a", tint: [0.82, 0.92, 1.15] },
  daylight: { bg: "#141d29", tint: [0.98, 1.02, 1.06] },
  night: { bg: "#05070b", tint: [0.68, 0.78, 0.96] }
};

function __ensureMaterialSlots(obj) {
  if (!obj) return null;
  if (!obj.geometry) {
    obj.geometry = __cloneMesh(G(obj.type) || G("cube"));
  }
  if (!obj.geometry.slots || !obj.geometry.slots.length) {
    obj.geometry.slots = [{
      name: (obj.name || "Object") + "_Mat",
      color: obj.color || "#ffffff",
      emissive: obj.material?.emissive || "#000000",
      emissiveStrength: obj.material?.emissiveStrength ?? 1,
      metalness: obj.material?.metalness ?? 0.04,
      roughness: obj.material?.roughness ?? 0.36,
      specular: obj.material?.specular ?? 0.5,
      normalStrength: obj.material?.normalStrength ?? 1.0,
      opacity: obj.material?.opacity ?? 1,
      blendMode: obj.material?.blendMode || "blend",
      uvRepeat: 1,
      uvScaleY: 1,
      uvOffsetX: 0,
      uvOffsetY: 0,
      uvRotation: 0,
      texMapping: 0,
      texStrength: 1
    }];
  }
  if (!obj.geometry.faceSlot || obj.geometry.faceSlot.length !== obj.geometry.faces.length) {
    obj.geometry.faceSlot = obj.geometry.faces.map((_, idx) => obj.geometry.faceSlot?.[idx] ?? 0);
  }
  return obj.geometry.slots;
}

function __generateProceduralTex(kind, colorHex = "#ffffff") {
  const sz = 128;
  const cv = document.createElement("canvas");
  cv.width = sz; cv.height = sz;
  const ctx = cv.getContext("2d");
  if (!ctx) return "";
  const img = ctx.createImageData(sz, sz);
  const d = img.data;
  for (let y = 0; y < sz; y++) {
    for (let x = 0; x < sz; x++) {
      const u = x / sz, v = y / sz;
      let r = 255, g = 255, b = 255;
      if ("checker" === kind) {
        const c = ((Math.floor(u * 8) + Math.floor(v * 8)) % 2 === 0) ? 245 : 48;
        r = c; g = c; b = c;
      } else if ("noise" === kind) {
        const n1 = Math.sin(x * 12.9898 + y * 78.233) * 43758.5453;
        const frac = n1 - Math.floor(n1);
        const c = Math.round(70 + frac * 185);
        r = c; g = c; b = c;
      } else if ("gradient" === kind) {
        r = Math.round(40 + u * 215);
        g = Math.round(80 + (1 - v) * 175);
        b = Math.round(180 + v * 75);
      } else if ("brick" === kind) {
        const row = Math.floor(v * 8);
        const bx = (u * 4 + (row % 2) * 0.5) % 1;
        const by = (v * 8) % 1;
        const mortar = bx < 0.08 || by < 0.12;
        r = mortar ? 210 : 185;
        g = mortar ? 205 : 72;
        b = mortar ? 198 : 54;
      } else if ("wood" === kind) {
        const rings = Math.sin((u * 6 + Math.sin(v * Math.PI * 2) * 0.35) * Math.PI * 2) * 0.5 + 0.5;
        r = Math.round(115 + rings * 85);
        g = Math.round(72 + rings * 58);
        b = Math.round(38 + rings * 30);
      } else if ("marble" === kind) {
        const wave = Math.sin((u * 4 + v * 4 + Math.sin(u * 10) * 0.25) * Math.PI) * 0.5 + 0.5;
        const c = Math.round(145 + wave * 110);
        r = c; g = c; b = Math.min(255, c + 8);
      } else if ("carbon" === kind) {
        const cx = Math.floor(u * 16), cy = Math.floor(v * 16);
        const c = ((cx + cy) % 2 === 0) ? 95 : 35;
        r = c; g = c + 4; b = c + 10;
      } else {
        const cr = Math.abs(Math.sin(u * 18) * Math.cos(v * 18));
        r = Math.round(110 + cr * 145);
        g = Math.round(175 + cr * 80);
        b = 250;
      }
      const idx = 4 * (y * sz + x);
      d[idx] = r; d[idx + 1] = g; d[idx + 2] = b; d[idx + 3] = 255;
    }
  }
  ctx.putImageData(img, 0, 0);
  return cv.toDataURL("image/png");
}

function __drawMaterialPreviewSphere(slot) {
  const cv = document.getElementById("mat-preview-sphere");
  if (!cv) return;
  const ctx = cv.getContext("2d");
  if (!ctx) return;
  const w = cv.width, h = cv.height;
  ctx.clearRect(0, 0, w, h);
  // Checkerboard background for opacity preview
  for (let py = 0; py < h; py += 6) {
    for (let px = 0; px < w; px += 6) {
      ctx.fillStyle = ((px / 6 + py / 6) % 2 === 0) ? "#1b202c" : "#0f131a";
      ctx.fillRect(px, py, 6, 6);
    }
  }
  const baseRgb = se(slot?.color || "#ffffff");
  const emisRgb = se(slot?.emissive || "#000000");
  const emisStr = slot?.emissiveStrength ?? 1;
  const rough = slot?.roughness ?? 0.36;
  const metal = slot?.metalness ?? 0.04;
  const spec = slot?.specular ?? 0.5;
  const op = slot?.opacity ?? 1;
  const imgData = ctx.getImageData(0, 0, w, h);
  const data = imgData.data;
  const cx = w / 2, cy = h / 2, rad = w * 0.44;
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const nx = (x - cx) / rad, ny = (cy - y) / rad;
      const r2 = nx * nx + ny * ny;
      if (r2 > 1) continue;
      const nz = Math.sqrt(1 - r2);
      const lx = -0.42, ly = 0.58, lz = 0.69;
      const ndl = Math.max(0, nx * lx + ny * ly + nz * lz);
      const hx = -0.22, hy = 0.32, hz = 0.92;
      const ndh = Math.max(0, nx * hx + ny * hy + nz * hz);
      const spPow = 120 * (1 - rough * 0.85) + 8;
      const spVal = Math.pow(ndh, spPow) * (1 - rough * 0.65) * spec * 1.6;
      const diff = 0.32 + ndl * 0.68;
      const cr = Math.min(1, baseRgb[0] * diff * (1 - metal * 0.35) + (metal * baseRgb[0] + (1 - metal)) * spVal + emisRgb[0] * emisStr * 0.5);
      const cg = Math.min(1, baseRgb[1] * diff * (1 - metal * 0.35) + (metal * baseRgb[1] + (1 - metal)) * spVal + emisRgb[1] * emisStr * 0.5);
      const cb = Math.min(1, baseRgb[2] * diff * (1 - metal * 0.35) + (metal * baseRgb[2] + (1 - metal)) * spVal + emisRgb[2] * emisStr * 0.5);
      const idx = 4 * (y * w + x);
      data[idx] = Math.round((data[idx] * (1 - op)) + cr * 255 * op);
      data[idx + 1] = Math.round((data[idx + 1] * (1 - op)) + cg * 255 * op);
      data[idx + 2] = Math.round((data[idx + 2] * (1 - op)) + cb * 255 * op);
      data[idx + 3] = 255;
    }
  }
  ctx.putImageData(imgData, 0, 0);
}

window.__lookEngine = {
  state: __lookState,
  ensureSlots: __ensureMaterialSlots,
  generateProceduralTex: __generateProceduralTex,
  drawPreviewSphere: __drawMaterialPreviewSphere,
  onTexLoaded: () => { if (typeof _e === "function") _e(); }
};

const __animState = {
  drawer: null, // null | "graph" | "onion"
  keyChannelMode: "all", // "all" | "loc" | "rot" | "scale" | "avail"
  playbackSpeed: 1.0,
  reversePlay: false,
  trackFilter: "all", // "all" | "objects" | "bones" | "cameras"
  soloTrackId: null,
  onionEnabled: false,
  onionCount: 2,
  onionStepFrames: 4,
  onionOpacity: 0.45,
  copiedPose: null
};

function __insertSmartKeyframe(mode = __animState.keyChannelMode, replaceOnly = false) {
  const st = e(he);
  const tl = e(de);
  const selObjs = st.objects.filter(o => o.selected || o.id === st.selectedId);
  if (!selObjs.length && st.objects.length) {
    selObjs.push(st.objects[0]);
  }
  if (!selObjs.length) return 0;

  let count = 0;
  const now = de.snapTime(tl.currentTime);
  he.beginAnimationEdit();
  for (const obj of selObjs) {
    const existingList = tl.keyframes.get(obj.id) || [];
    const existingAtNow = existingList.find(k => Math.abs(k.time - now) < 0.005);
    if (replaceOnly && !existingAtNow && !existingList.length) continue;
    if ("avail" === mode && !existingList.length) continue;

    const evalMap = de.evaluate(now, tl.easing);
    const evalPose = evalMap.get(obj.id);
    const basePos = existingAtNow ? existingAtNow.position : (evalPose?.position || obj.restPose?.position || obj.position);
    const baseRot = existingAtNow ? existingAtNow.rotation : (evalPose?.rotation || obj.restPose?.rotation || obj.rotation);
    const baseScl = existingAtNow ? existingAtNow.scale : (evalPose?.scale || obj.restPose?.scale || obj.scale);

    const pos = ("all" === mode || "loc" === mode || "avail" === mode) ? [...obj.position] : [...basePos];
    const rot = ("all" === mode || "rot" === mode || "avail" === mode) ? [...obj.rotation] : [...baseRot];
    const scl = ("all" === mode || "scale" === mode || "avail" === mode) ? [...obj.scale] : [...baseScl];

    if (0 === existingList.length && now > 0.02 && obj.restPose) {
      de.addKeyframe(obj.id, {
        time: 0,
        position: [...obj.restPose.position],
        rotation: [...obj.restPose.rotation],
        scale: [...obj.restPose.scale]
      });
    }
    de.addKeyframe(obj.id, {
      time: now,
      position: pos,
      rotation: rot,
      scale: scl
    });
    const kList = e(de).keyframes.get(obj.id) || [];
    const added = kList.find(k => Math.abs(k.time - now) < 0.005);
    if (added) added.channelKind = mode;
    count++;
  }
  he.endAnimationEdit();
  return count;
}

function __drawGraphEditorCanvas() {
  const cv = document.getElementById("anim-graph-canvas");
  if (!cv) return;
  const ctx = cv.getContext("2d");
  if (!ctx) return;
  const w = cv.width, h = cv.height;
  ctx.clearRect(0, 0, w, h);
  ctx.fillStyle = "#0b0e15";
  ctx.fillRect(0, 0, w, h);
  ctx.strokeStyle = "rgba(255,255,255,0.08)";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(0, h / 2); ctx.lineTo(w, h / 2);
  ctx.stroke();

  const st = e(he), tl = e(de);
  const objId = st.selectedId || (tl.selectedKey ? tl.selectedKey.objectId : (st.objects[0]?.id || null));
  const kList = objId ? (tl.keyframes.get(objId) || []) : [];
  const maxT = Math.max(2, kList.length ? kList[kList.length - 1].time + 0.5 : Math.min(10, tl.duration));

  const channels = [
    { idx: 0, color: "#f87171" },
    { idx: 1, color: "#3ddbb0" },
    { idx: 2, color: "#60a5fa" }
  ];
  if (kList.length >= 1) {
    let minV = -2, maxV = 2;
    for (const k of kList) {
      for (let c = 0; c < 3; c++) {
        minV = Math.min(minV, k.position[c] - 0.5, k.rotation[c] - 0.5);
        maxV = Math.max(maxV, k.position[c] + 0.5, k.rotation[c] + 0.5);
      }
    }
    const spanV = Math.max(0.5, maxV - minV);
    for (const ch of channels) {
      ctx.strokeStyle = ch.color;
      ctx.lineWidth = 1.4;
      ctx.beginPath();
      for (let px = 0; px <= w; px += 4) {
        const tSample = (px / w) * maxT;
        const ev = de.evaluate(tSample, tl.easing).get(objId);
        const val = ev?.position ? ev.position[ch.idx] : (kList[0]?.position[ch.idx] || 0);
        const py = h - 4 - ((val - minV) / spanV) * (h - 8);
        if (0 === px) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.stroke();
      for (const k of kList) {
        const kx = (k.time / maxT) * w;
        const ky = h - 4 - ((k.position[ch.idx] - minV) / spanV) * (h - 8);
        ctx.fillStyle = "#fde047";
        ctx.beginPath();
        ctx.arc(kx, ky, 2.5, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  }
  const phX = Math.max(0, Math.min(w, (tl.currentTime / maxT) * w));
  ctx.strokeStyle = "#ffffff";
  ctx.lineWidth = 1.2;
  ctx.beginPath();
  ctx.moveTo(phX, 0); ctx.lineTo(phX, h);
  ctx.stroke();
}

function __updateLiveAnimReadouts(tlState) {
  if ("graph" === __animState.drawer) __drawGraphEditorCanvas();
}

window.__animEngine = {
  state: __animState,
  insertSmartKeyframe: __insertSmartKeyframe,
  drawGraph: __drawGraphEditorCanvas,
  updateLiveReadouts: __updateLiveAnimReadouts
};window.__toon={scene:()=>e(he),timeline:()=>e(de),sceneStore:he,timelineStore:de,viewportStore:le,createProject:fe,validateProject:Me,applyProject:Ie,curves:()=>de.serializeCurves(),strips:()=>de.serializeStrips(),setDuration:e=>de.setDuration(e),layerMediaMap:Le};let Ne=null;function Re(e,t=.09,o="triangle"){if(!Fe)try{if("undefined"==typeof AudioContext)return;Ne||(Ne=new AudioContext),"suspended"===Ne.state&&Ne.resume();const n=Ne.createOscillator(),A=Ne.createGain();n.type=o,n.frequency.setValueAtTime(e,Ne.currentTime),A.gain.setValueAtTime(.08,Ne.currentTime),A.gain.exponentialRampToValueAtTime(.001,Ne.currentTime+t),n.connect(A),A.connect(Ne.destination),n.start(),n.stop(Ne.currentTime+t)}catch{}}window.addEventListener("DOMContentLoaded",(()=>{const A=X.fromBytes(function(e){const t=atob(e),o=new Uint8Array(t.length);for(let e=0;e<t.length;e++)o[e]=t.charCodeAt(e);return o}("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NwIAIAlBCGogBkEIaiIKKAIANgIAIAJBIGpBCGoiCyAKKAIANgIAIAIgBikCADcDICABIAcgBUEEaigCAEGAjMCAABCLgICAACIGKQIANwIAIAFBCGoiCiAGQQhqIgwoAgA2AgAgAkE4akEIaiINIAwoAgA2AgAgAiAGKQIANwM4IAJBIGogAkE4ahDHgICAACABIAcgBUEIaigCAEGQjMCAABCLgICAACIGKQIANwIAIAogBkEIaiIMKAIANgIAIA0gDCgCADYCACACIAYpAgA3AzggAkEgaiACQThqEMeAgIAAIAJBCGpBCGogC/0AAwD9CwMAIAIgAikDIDcDCCAAQRBqIAJBCGpBEGopAwA3AgAgACAC/QADCP0LAgAgBUEMaiEFIABBGGohACAIQX9qIggNAAsLIAQgAzYCACACQdAAaiSAgICAAAstAAJAIAAoAgBBf0YNACAAQSxqEIeAgIAAIABBOGoQiICAgAAgABCJgICAAAsLEgAgABDdgICAACAAENqAgIAACw4AIABBBEEMENmBgIAAC0YBAX8CQCAAKAIAQQJGDQAgAEEIaiIBEN2AgIAAIAEQ0YCAgAAgAEEUaiIBEN2AgIAAIAEQpYCAgAAgAEEgahCKgICAAAsLEgAgABDdgICAACAAEM+AgIAACysBAX8CQCABIAAoAggiA0kNACABIAMgAhD6gYCAAAALIAAoAgQgAUEMbGoLlQEBAn8jgICAgABBwABrIgEkgICAgAAgASAAQSxqNgIcIAEgACgCPCICNgIUIAEgAiAAKAJAQQxsajYCGCABQQhqIAFBFGoQjYCAgAAgAUEUaiABKAIMIAEoAhAQy4CAgAAgABCJgICAAAJAQSxFDQAgACABQRRqQSz8CgAACyABQQhqEIqAgIAAIAFBwABqJICAgIAAC3oBAn8jgICAgABBIGsiAiSAgICAACACQQhqIAEoAgQgASgCAGtBDG5BBEEYEJKAgIAAIAJBFGpBCGoiA0EANgIAIAIgAikDCDcCFCACQRRqIAEQg4CAgAAgAEEIaiADKAIANgIAIAAgAikCFDcCACACQSBqJICAgIAAC0wBAX9BACEBAkAgACgCAEH/////B3FB////+wdKDQAgACgCBEH/////B3FB////+wdKDQAgACgCCEH/////B3FBgICA/AdIIQELIAELDAAgAEEMEJCAgIAAC1UBAX8jgICAgABBEGsiAiSAgICAACACQQhqIAAgACgCAEEBQQQgARDMgYCAAAJAIAIoAggiAEF/Rg0AIAAgAigCDBDNgYCAAAALIAJBEGokgICAgAALDQAgAEHMABCQgICAAAtmAQF/I4CAgIAAQRBrIgQkgICAgAAgBEEEaiABQQAgAiADENyBgIAAIAQoAgghAwJAIAQoAgRBAUcNACADIAQoAgwQzYGAgAAACyAAIAQoAgw2AgQgACADNgIAIARBEGokgICAgAALcAECfyOAgICAAEEQayICJICAgIAAIAEtAAAhAyABQQE6AAAgAiADOgAPAkAgA0EBRw0AQQAgAkEPakHOisCAAEHQjMCAAEHBAEHwjMCAABDmgICAAAALIAAgATYCBCAAQQA2AgAgAkEQaiSAgICAAAtSAQJ/I4CAgIAAQRBrIgEkgICAgAAgACgCACIAKAIAIQIgACgCCBCrgICAACEAIAEgAjYCDCABIAA2AgggAUEIahClgICAACABQRBqJICAgIAACzIBAX8jgICAgABBEGsiASSAgICAACABIAA2AgwgAUEMahCUgICAACABQRBqJICAgIAACwQAQQELOgEBfyOAgICAAEEQayIBJICAgIAAIAFBCGogAEEBQQEQkoCAgAAgASgCDCEAIAFBEGokgICAgAAgAAtdAQF/I4CAgIAAQRBrIgIkgICAgAACQCAARQ0AIAEQyoGAgAAhASACQQA2AgwgAiAANgIIIAIgATYCBCACQQRqEOKBgIAAIAJBBGoQyIGAgAALIAJBEGokgICAgAALmAEBA38jgICAgABB4ABrIgEkgICAgAAgAUEIakHInsCAABCTgICAAEEAIQICQCAAQX9qIgMgASgCDCIAKAIMTw0AIAAoAgggA0HMAGxqIQICQEHMAEUNACABQRRqIAJBzAD8CgAACyACQX82AgAgASgCFEF/RyECIAFBFGoQhoCAgAALIABBADoAACABQeAAaiSAgICAACACC48BAQN/I4CAgIAAQRBrIgEkgICAgAAgAUEIakHInsCAABCTgICAAAJAAkAgASgCDCICDQBBACEDDAELQQAhAwJAIABFDQBBACEDIABBf2oiACACKAIMTw0AQQAhAyACKAIIIABBzABsaiIAKAIAQX9GDQAgACgCRCEDCyACQQA6AAALIAFBEGokgICAgAAgAwu3BwMHfwN9AX8jgICAgABB0AFrIgQkgICAgABBACEFAkAgAEUNACACRQ0AIAFFDQAgA0UNACAEQRhqIAFBBEEMEJKAgIAAIAQgBCkDGDcCICADQQNsIQYgAUEDbCEHQQAhCEEAIQlBACEFAkACQANAIAQgBTYCKAJAAkACQAJAAkAgASAFRg0AIAggB08NASAIQQFqIAdPDQIgCEECaiAHTw0DIAAgCWoiCioCACILvEH/////B3FB////+wdKDQcgCkEEaioCACIMvEH/////B3FBgICA/AdODQcgCkEIaioCACINvEH/////B3FBgICA/AdIDQQMBwsgBEEQaiADQQRBDBCSgICAACAEIAQpAxA3AixBACEIQQAhCUEAIQUDQCAEIAU2AjQCQAJAAkACQAJAIAMgBUYNACAIIAZPDQEgCEEBaiAGTw0CIAhBAmogBk8NAyACIAlqIgdBCGooAgAiASAEKAIoIgpPDQsgBygCACIAIApPDQsgB0EEaigCACIOIApJDQQMCwsgBUUNCiAEQewAaiAEQSBqQQhqKAIANgIAIARB+ABqIARBLGpBCGooAgA2AgAgBCAEKQIgNwJkIAQgBCkCLDcCcCAEQgA3AnwgBEECNgI4IARBOGoQjICAgAAgBEEIakHInsCAABCTgICAACAEKAIMIQgCQEHMAEUNACAEQYQBaiAEQThqQcwA/AoAAAsCQCAIKAIMIgUgCCgCBEcNACAIQQRqEJGAgIAACwJAQcwARQ0AIAgoAgggBUHMAGxqIARBhAFqQcwA/AoAAAsgCCAFQQFqIgU2AgwgCEEAOgAADAwLIAggBkGAjcCAABD6gYCAAAALIAhBAWogBkGQjcCAABD6gYCAAAALIAhBAmogBkGgjcCAABD6gYCAAAALAkAgBSAEKAIsRw0AIARBLGoQj4CAgAALIAQoAjAgCWoiByAANgIAIAdBCGogATYCACAHQQRqIA42AgAgCEEDaiEIIAlBDGohCSAFQQFqIQUMAAsLIAggB0GwjcCAABD6gYCAAAALIAhBAWogB0HAjcCAABD6gYCAAAALIAhBAmogB0HQjcCAABD6gYCAAAALAkAgBSAEKAIgRw0AIARBIGoQ1ICAgAALIAQoAiQgCWoiCiALOAIAIApBCGogDTgCACAKQQRqIAw4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BCACQQFGDQAgAUEEaiEFIAJBf2pB/////wNxIQZBACEHQQAhBANAIAdBAWoiByAEIAMgASAFEK6AgIAAIggbIQQgBSABIAgbIQEgBUEEaiEFIAYgB0cNAAsLIAAgBDYCBCAAIAJBAEc2AgALWAACQAJAIAIgAU8NACADIAFJDQEgAyABIAQQ+oGAgAAACyACIAEgBBD6gYCAAAALIAAgAkECdGoiASgCACECIAEgACADQQJ0aiIDKAIANgIAIAMgAjYCAAt9AQV/AkACQCACDQAMAQtBACEEIAJBAUYNACABQQRqIQUgAkF/akH/////A3EhBkEAIQdBACEEA0AgB0EBaiIHIAQgAyAFIAEQroCAgAAiCBshBCAFIAEgCBshASAFQQRqIQUgBiAHRw0ACwsgACAENgIEIAAgAkEARzYCAAszAAJAIAMgAUkNACAAIAMgAWs2AgQgACACIAFBAnRqNgIADwsgASADIAMgBBD0gYCAAAALTQEBfyOAgICAAEEQayIFJICAgIAAIAVBCGpBACABIAIgAyAEELiAgIAAIAUoAgwhBCAAIAUoAgg2AgAgACAENgIEIAVBEGokgICAgAALQwACQAJAIAJBf2ogAU8NACABQQJ0IQEgAkECdCECA0AgASACRg0CIAAgACACaiADEL+AgIAAIAJBBGohAgwACwsACwv+BAAgACABIAIgAyAEIAUQrYCAgAAhBQJAAkACQAJAAkACQAJAAkACQAJAAkACQCAAIAEgAiAJIAogCxCtgICAACIJIAFPDQAgBSABTw0BIAIgACAJQQJ0aiAAIAVBAnRqEK6AgIAAIQQgCCABTw0CIAYgAU8NAyACIAAgCEECdGogACAGQQJ0ahCugICAACEDIAcgAU8NBCAIIAYgAxsiCiABTw0FIAkgBSAEGyELIAUgCSAEGyEFAkAgAiAAIAdBAnRqIgkgACAKQQJ0ahCugICAAA0AIAYgCCADGyIKIAFPDQcgAiAAIApBAnRqIAkQroCAgAANACALIAFPDQggAiAJIAAgC0ECdGoQroCAgAANCSAFIAFPDQoCQCACIAAgBUECdGogCRCugICAAEUNACAAIAEgByAFQfCRwIAAELKAgIAACw8LIAsgAU8NCgJAIAIgACAKQQJ0aiIIIAAgC0ECdGoQroCAgAANACAFIAFPDQwgBSAKIAIgACAFQQJ0aiAIEK6AgIAAGyELCyAAIAEgCyAHQbCSwIAAELKAgIAADwsgCSABQeCQwIAAEPqBgIAAAAsgBSABQfCQwIAAEPqBgIAAAAsgCCABQYCRwIAAEPqBgIAAAAsgBiABQZCRwIAAEPqBgIAAAAsgByABQaCRwIAAEPqBgIAAAAsgCiABQbCRwIAAEPqBgIAAAAsgCiABQcCRwIAAEPqBgIAAAAsgCyABQdCRwIAAEPqBgIAAAAsgACABIAcgC0GAksCAABCygICAAA8LIAUgAUHgkcCAABD6gYCAAAALIAsgAUGQksCAABD6gYCAAAALIAUgAUGgksCAABD6gYCAAAALPAACQAJAIAIgAUkNACACIARNDQELIAEgAiAEIAUQ9IGAgAAACyAAIAIgAWs2AgQgACADIAFBAnRqNgIAC80BAQJ/I4CAgIAAQRBrIgQkgICAgAACQAJAIAENAEEAIQIMAQsCQAJAIAIgAU8NACAAKAIAIQUgACAAIAJBAnRqIgIoAgA2AgAgAiAFNgIAIAQgACABQQFBwJLAgAAQvICAgAAgBCgCBEUNASAEKAIIIAQoAgwgBCgCACADEMCAgIAAIgIgAU8NACAAKAIAIQEgACAAIAJBAnRqIgMoAgA2AgAgAyABNgIADAILAAtBAEEAQdCSwIAAEPqBgIAAAAsgBEEQaiSAgICAACACC8oDAQF/I4CAgIAAQTBrIgUkgICAgAAgBSAENgIYIAUgAzYCFCAFIAI2AhwCQAJAAkACQCADIAJPDQACQAJAAkAgAyACQX9qRg0AIANFDQEgASACIANBACAFQRhqELuAgIAADAILIAUgASACIAVBGGoQsYCAgAAgBSgCAEEBcUUNAyABIAIgBSgCBCADQdCPwIAAELKAgIAADAELIAVBCGogASACIAVBGGoQs4CAgAAgBSgCCEEBcUUNAyABIAIgBSgCDEEAQbCPwIAAELKAgIAACyAFQSBqIAEgAiADQeCPwIAAELyAgIAAIAUoAiQhAiAFKAIgIQMgBUEgaiAFKAIoIAUoAixBAUHwj8CAABC8gICAACAFKAIkDQNBAEEAQYCQwIAAEPqBgIAAAAsgBUGBgICAADYCLCAFQYGAgIAANgIkIAUgBUEcajYCKCAFIAVBFGo2AiBBz4HAgAAgBUEgakGQkMCAABDugYCAAAALQcCPwIAAEJKCgIAAAAtBoI/AgAAQkoKAgAAACyAFKAIoIQEgBSgCICEEIAAgBSgCLDYCECAAIAE2AgwgACAENgIIIAAgAjYCBCAAIAM2AgAgBUEwaiSAgICAAAuXBAEHfyOAgICAAEEgayIFJICAgIAAQRAhBgNAQQEgBmshBwJAAkACQAJAA0ACQAJAAkACQCABQRFJDQACQCAHQQFqIghBAkcNACAAIAEgBCACEK+AgIAADAYLIAAgAUEDdiIGQRxsaiEJIAAgBkEEdGohCgJAAkAgAUHAAEkNACAAIAogCSAGIAQQvYCAgAAhBgwBCyAAIQYgBCAAIAoQroCAgAAiCyAEIAAgCRCugICAAEcNACAJIAogCyAEIAogCRCugICAAHMbIQYLIAYgAGsiCUECdiEGIAMNAQwDCyABQQFLDQEMBAsgBCADIAAgCWoQroCAgAANASAFIAQ2AhAgACABIAYgBUEQahC+gICAACIGIAJPDQMgBUEIaiAGQQFqIgYgACABQaCQwIAAELSAgIAAIAIgBmshAkEAIQMgBSgCDCEBIAUoAgghAAwGCyAAIAFBASAEELaAgIAADAILIAVBEGogACABIAAgASAGIAQQuYCAgAAiBkGwkMCAABC8gICAACAFKAIUIQEgBSgCECEAIAVBEGogBSgCGCAFKAIcQQFBwJDAgAAQvICAgAAgBSgCFEUNAiAGIAJJDQMgCCEHIAYgAksNAAsLIAVBIGokgICAgAAPC0EAQQBB0JDAgAAQ+oGAgAAACyAFKAIcIQEgBSgCGCEAIAUoAhAhAyACIAZBf3NqIQILQQAgB2shBgwACwtDAAJAIAIgA0kNACAAIAM2AgQgACABNgIAIAAgAiADazYCDCAAIAEgA0ECdGo2AggPC0Ggk8CAAEETIAQQ7oGAgAAAC6IBAQJ/AkAgA0H4////AXFFDQAgACAAIANBA3YiA0EEdCIFaiAAIANBHGwiBmogAyAEEL2AgIAAIQAgASABIAVqIAEgBmogAyAEEL2AgIAAIQEgAiACIAVqIAIgBmogAyAEEL2AgIAAIQILAkAgBCAAIAEQroCAgAAiAyAEIAAgAhCugICAAEcNACACIAEgAyAEIAEgAhCugICAAHMbIQALIAALzQEBAn8jgICAgABBEGsiBCSAgICAAAJAAkAgAQ0AQQAhAgwBCwJAAkAgAiABTw0AIAAoAgAhBSAAIAAgAkECdGoiAigCADYCACACIAU2AgAgBCAAIAFBAUHAksCAABC8gICAACAEKAIERQ0BIAQoAgggBCgCDCAEKAIAIAMQwoCAgAAiAiABTw0AIAAoAgAhASAAIAAgAkECdGoiAygCADYCACADIAE2AgAMAgsAC0EAQQBB0JLAgAAQ+oGAgAAACyAEQRBqJICAgIAAIAILfAEDfyOAgICAAEEQayIDJICAgIAAAkAgAiABIAFBfGoiBBCugICAAEUNACADIAEoAgAiBTYCDAJAA0AgBCIBQQRqIAEoAgA2AgAgASAARg0BIAIgA0EMaiABQXxqIgQQroCAgAANAAsLIAEgBTYCAAsgA0EQaiSAgICAAAuYAgEBfyOAgICAAEEwayIEJICAgIAAIAQgADYCDAJAAkAgAQ0AQQAhAwwBCyAEIAI2AhQgBCADNgIQIAQgBEEMajYCGCAEIAAoAgA2AhwgBEEANgIsIAQgAEEEaiIDNgIoIAQgADYCICAAIAFBAnRqQXxqIQAgBCAEQRxqNgIkA0ACQCADIABJDQAgBCgCDCABQQJ0aiEAAkADQCADIABGDQEgBEEQaiAEQSBqEMGAgIAAIAQoAighAwwACwsgBCAEKAIkNgIoIARBEGogBEEgahDBgICAACAEKAIsIQMMAgsgBEEQaiAEQSBqEMGAgIAAIARBEGogBEEgahDBgICAACAEKAIoIQMMAAsLIARBMGokgICAgAAgAwtiAQN/IAAoAgAgASgCCCICIAAoAgQQroCAgAAhAyABKAIAIAAoAggoAgAgASgCDCIAQQJ0aiIEKAIANgIAIAEgAkEEajYCCCABIAI2AgAgASAAIANqNgIMIAQgAigCADYCAAuYAgEBfyOAgICAAEEwayIEJICAgIAAIAQgADYCDAJAAkAgAQ0AQQAhAwwBCyAEIAI2AhQgBCADNgIQIAQgBEEMajYCGCAEIAAoAgA2AhwgBEEANgIsIAQgAEEEaiIDNgIoIAQgADYCICAAIAFBAnRqQXxqIQAgBCAEQRxqNgIkA0ACQCADIABJDQAgBCgCDCABQQJ0aiEAAkADQCADIABGDQEgBEEQaiAEQSBqEMOAgIAAIAQoAighAwwACwsgBCAEKAIkNgIoIARBEGogBEEgahDDgICAACAEKAIsIQMMAgsgBEEQaiAEQSBqEMOAgIAAIARBEGogBEEgahDDgICAACAEKAIoIQMMAAsLIARBMGokgICAgAAgAwtoAQN/IAAoAgAoAgAgACgCBCABKAIIIgIQroCAgAAhAyABKAIAIAAoAggoAgAgASgCDCIAQQJ0aiIEKAIANgIAIAEgAkEEajYCCCABIAI2AgAgASAAIANBAXNqNgIMIAQgAigCADYCAAtEACAAIAEqAhQgASoCCJJDAAAAP5Q4AgggACABKgIQIAEqAgSSQwAAAD+UOAIEIAAgASoCDCABKgIAkkMAAAA/lDgCAAs2AAJAAkACQAJAIAEOAwMBAgALQeyUwIAAQScgAhDugYCAAAALIABBBGoPCyAAQQhqIQALIAALogMGAX8CfQF/AX0CfwV9IAFBDGohBEMAAAAAIQVDAACAfyEGQQAhBwNAIAUhCCAHQQMgB0EDSxshCQJAA0ACQCAJIAdHDQBBASEKDAILIAIgB0Gsk8CAABDFgICAACoCACELIAMgB0G8k8CAABDFgICAACoCACEMIAEgB0HMk8CAABDFgICAACoCACEFIAQgB0Hck8CAABDFgICAACoCACENAkAgDItDzLyMK10NACAHQQFqIQdDAACAPyAMlSIOIA0gC5OUIgwgDiAFIAuTlCILIAsgDF4iCRsiBSAFIAggBSAIYBsgCCAIXBsiBSALIAwgCRsiCyALIAYgCyAGXxsgBiAGXBsiBiAGiyILIAsgBYsiDCALIAxgGyAFIAVcG0MAAIA/kkOsxSc3lJJeRQ0DQQAhCgwCC0EAIQogCyAFIAuLIg4gDiANiyIMIAwgBYsiDyAMIA9gGyAFIAVcGyIMIA4gDGAbIAwgDFwbQwAAgD+SQ6zFJzeUIgyTXQ0BIAdBAWohByALIA0gDJJeRQ0ACwsLIAAgCDgCBCAAIAo2AgALegECfyOAgICAAEEQayICJICAgIAAIAJBBGogACABEMiAgIAAIABBCGogAkEEakEIaiIDKAIANgIAIAAgAikCBDcCACACQQRqIABBDGogAUEMahDJgICAACAAQRRqIAMoAgA2AgAgACACKQIENwIMIAJBEGokgICAgAALZwECfSAAIAIqAggiAyADIAEqAggiBCADIARfGyAEIARcGzgCCCAAIAIqAgQiAyADIAEqAgQiBCADIARfGyAEIARcGzgCBCAAIAIqAgAiAyADIAEqAgAiBCADIARfGyAEIARcGzgCAAtnAQJ9IAAgAioCCCIDIAMgASoCCCIEIAMgBGAbIAQgBFwbOAIIIAAgAioCBCIDIAMgASoCBCIEIAMgBGAbIAQgBFwbOAIEIAAgAioCACIDIAMgASoCACIEIAMgBGAbIAQgBFwbOAIAC0gBAn8jgICAgABBEGsiAiSAgICAACACQQhqIAAgARCsgICAAAJAIAIoAggiAw0AIAAgARDHgYCAAAALIAJBEGokgICAgAAgAwvNAgEFfyOAgICAAEHQAGsiAySAgICAACADQQA2AhwgA0KAgICAwAA3AhQgA0IENwIwIANCADcCKCADQoCAgIDAADcCICADQQA2AgwCQCACRQ0AIANBLGohBCADQSBqIQUgA0E4akEAIAIQzICAgAAgA0EUaiIGIAJBAXZBAmoQzYCAgAAgA0HEAGogAhDOgICAAAJAIAJBGGwiB0UNACADKAJIIAEgB/wKAAALIANBxABqQQhqIgcgAjYCACAEEM+AgIAAIARBCGogBygCADYCACAEIAMpAkQ3AgAgBiABIAIgAygCPCADQThqQQhqIgQoAgBBAEEAENCAgIAAIQIgBRClgICAACAFQQhqIAQoAgA2AgAgBSADKQI4NwIAIAMgAjYCECADQQE2AgwLAkBBLEUNACAAIANBDGpBLPwKAAALIANB0ABqJICAgIAAC30BAn8jgICAgABBIGsiAySAgICAACADQQhqQQAgAiABayIEIAQgAksbQQRBBBCpgICAACADQRRqQQhqIgRBADYCACADIAMpAwg3AhQgA0EUaiABIAIQpoCAgAAgAEEIaiAEKAIANgIAIAAgAykCFDcCACADQSBqJICAgIAACxUAIAAgACgCCCABQQRBNBDSgICAAAtIAgF/AX4jgICAgABBEGsiAiSAgICAACACQQhqIAFBBEEYEKmAgIAAIAIpAwghAyAAQQA2AgggACADNwIAIAJBEGokgICAgAALDgAgAEEEQRgQ2YGAgAALgwUCBH8DfSOAgICAAEHQAGsiBySAgICAACAHQoCAgPyPgIBANwIYIAdCgICA/IeAgEA3AhAgB0KAgID8h4CAwP8ANwIIIARBAnQhCEEAIQkCQAJAA0AgCCAJRg0BIAMgCWooAgAiCiACTw0CIAdBCGogASAKQRhsahDH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IAIPC0GAlcCAABDfgICAAAALEgAgABDigYCAACAAEMiBgIAACwwAIAEgABD1gICAAAsXAAJAIAAoAgBBf0YNACAAEOKAgIAACwsKACAAEOSAgIAAC0gBAX8jgICAgABBEGsiBiSAgICAACAGIAI2AgwgBiABNgIIIAAgBkEIakGwlcCAACAGQQxqQbCVwIAAIAMgBCAFEOuBgIAAAAsLACAAEOiAgIAAAAssACAAKAIAIAAoAgRBACgCrKLAgAAiAEGDgICAACAAGxGBgICAAICAgIAAAAsLACAAEOqAgIAAAAuhAQEDfyOAgICAAEEgayIBJICAgIAAIAFBCGogACgCABDtgICAAAJAIAEoAggiAkUNACABKAIMIQMgASACNgIQIAEgAzYCFCABQRBqQdiVwIAAIAAoAgQgACgCCCIBLQAIIAEtAAkQ64CAgAAACyABQX82AhAgASAANgIcIAFBEGpB9JXAgAAgACgCBCAAKAIIIgEtAAggAS0ACRDrgICAAAALxwIBA38jgICAgABBMGsiBSSAgICAAAJAAkBBARChgYCAAEH/AXEiBkECRg0AIAZBAXFFDQEgBUEQaiAAIAEoAhgRgYCAgACAgICAAAALQQAoArCiwIAAIgZBAEgNAAJAIAZBAWoiByAGTg0AQdiXwIAAQRxB9JfAgAAQk4KAgAAMAQtBACAHNgKwosCAACAFQbCiwIAANgIcIAVBtKLAgAA2AhgCQAJAQQAoArSiwIAARQ0AIAVBCGogACABKAIUEYGAgIAAgICAgAAgBSAEOgAtIAUgAzoALCAFIAI2AiggBSAFKQMINwIgQQAoArSiwIAAIAVBIGpBACgCuKLAgAAoAhQRgYCAgACAgICAAAwBCyAFQX82AiAgBUEgahDkgICAAAsgBUEYahCigYCAABCjgYCAACADRQ0AIAAgARDugICAAAALAAsNAEEAQQE6AMCiwIAACyYBAX8gACABKAIEIgJBAXY2AgQgAEEAIAJBAXFrIAEoAgBxNgIACw4AIAAgARDegICAABoACwwAIAEgABDjgICAAAsDAAALDAAgACABEPKAgIAACwwAIAAgARD4gICAAAt8ACAAIAAgARD0gICAAAJAAkAgAkEJSQ0AIAMgAhD1gICAACICDQFBAA8LAkAgAEUNAEHYnsCAACAAIAMQ9oCAgAAPC0HY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mMCAADYCBCAAIAE2AgALDAAgACABKQIANwMACy4BAX4gASkCACECQQRBCBD/gICAACIBIAI3AgAgAEGImMCAADYCBCAAIAE2AgALDwAgACgCACABEKKCgIAACxQAIAEgACgCACAAKAIEEIyCgIAAC2QBAn8gACgCCCECAkACQCABQYABTw0AQQEhAwwBCwJAIAFBgBBPDQBBAiEDDAELQQNBBCABQYCABEkbIQMLIAAgAxDQgYCAACABIAAoAgQgAmoQ/oCAgAAgACADIAJqNgIIQQALEAAgACABIAIQ0oGAgABBAAseACABEICBgIAAIQEgAEGkmMCAADYCBCAAIAE2AgALqAECA38CfiOAgICAAEEgayICJICAgIAAIAEQgIGAgAAhASACQQhqENSBgIAAIAFBCGoiAygCACEEIAIpAwghBSADQQA2AgAgAkEQakEIaiIDIAQ2AgAgASkCACEGIAEgBTcCACACIAY3AxBBBEEMEP+AgIAAIgFBCGogAygCADYCACABIAIpAxA3AgAgAEGkmMCAADYCBCAAIAE2AgAgAkEgaiSAgICAAAsJACAAQQA2AgALCABBpKLAgAALBABBCAsHACAAIAFqCwcAIAAgAWsLBABBBwsjACACIAIoAgRBfnE2AgQgACABQQFyNgIEIAAgAWogATYCAAseACAAIAFBA3I2AgQgACABaiIBIAEoAgRBAXI2AgQLFgAgACABQQFyNgIEIAAgAWogATYCAAsHACAAQQhqCwcAIABBeGoLJwAgACABIAAoAgRBAXFyQQJyNgIEIAAgAWoiACAAKAIEQQFyNgIECxkBAX8CQCAAKAIQIgENACAAKAIUIQELIAELBwAgACgCDAsHACAAKAIICw0AIAAoAgAgACgCBGoLJgECf0EAIQICQCAAKAIAIgMgAUsNACABIAMgACgCBGpJIQILIAILEgBBAEEZIABBAXZrIABBH0YbCw8AIABBAXQiAEEAIABrcgvAAQECfwJAAkAgAkUNAEEALQDBosCAACEDQQBBAToAwaLAgABB0KLAgAAhBEGAgICIAEHQosCAAE0NACACQYCAgIgAQdCiwIAAa0sNACADQf8BcQ0AQYCAgIgAQdCiwIAAayECDAELQQAhBAJAIAJBEHYgAkH//wNxQQBHaiICQAAiA0F/Rw0AQQAhAgwBCyACQRB0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IAMgAUkNACAAIAMgAWs2AgQgACACIAFqNgIADwsgASADIAMgBBD0gYCAAAALHAAgACgCACAAKAIEIAEoAgAgASgCBBCQgoCAAAtcAQF/I4CAgIAAQRBrIgIkgICAgAACQCAALQAAQQFHDQAgAiAALQABOgAPIAFBNCACQQ9qQcCZwIAAQYSawIAAEPiBgIAAAAsgACgCBCEAIAJBEGokgICAgAAgAAtsAQF/I4CAgIAAQSBrIgUkgICAgAAgBSABNgIEIAUgADYCACAFIAM2AgwgBSACNgIIIAVBmICAgAA2AhwgBUGagICAADYCFCAFIAVBCGo2AhggBSAFNgIQQciDwIAAIAVBEGogBBDugYCAAAALDgAgAEGAgICAeCABa00LYQEBfyOAgICAAEEgayIDJICAgIAAIAMgATYCDCADIAA2AgggA0GBgICAADYCHCADQYGAgIAANgIUIAMgA0EIajYCGCADIANBDGo2AhBBqIDAgAAgA0EQaiACEO6BgIAAAAuNBAEKfyOAgICAAEHAAGsiAySAgICAAEEAIQQgA0EAOwEsIAMgAjYCKCADQQA2AiQgA0EBOgAgIANBCjYCHCADIAI2AhggA0EANgIUIAMgAjYCECADIAE2AgwgA0EKNgIIIAAoAgQhBSAAKAIAIQYgACgCCCEHIANBG2ohCCADQRxqIQkCQANAIAMtAC0NASADKAIMIQoCQAJAIAMoAhgiASADKAIQIgtLDQAgCCADLQAgIgBqIQwgAygCFCECAkADQCABIAJJDQIgAyAMLQAAIAogAmogASACaxD9gYCAACADKAIAQQFxRQ0BIAMgAiADKAIEakEBaiICNgIUIAIgAEkNACACIAtLDQAgAyAANgI0IAMgCiACIABrajYCMCADIAA2AjwgAyAJNgI4IANBMGogA0E4ahD2gYCAAEUNAAsgAygCJCEAIAMgAjYCJCACIABrIQIMAgsgAyABNgIUCyADQQE6AC0CQAJAIAMtACxBAUcNACADKAIoIQIgAygCJCEADAELIAMoAigiAiADKAIkIgBGDQMLIAIgAGshAgsCQAJAIActAABFDQAgBkGYncCAAEEEIAUoAgwRgoCAgACAgICAAA0BCyAHIAogAGoiACACQQoQ44GAgAA6AAAgBiAAIAIgBSgCDBGCgICAAICAgIAARQ0BCwtBASEECyADQcAAaiSAgICAACAEC4sBAQJ/IAAtAAQiASECAkAgAC0ABUUNAEEBIQICQCABQQFxDQACQCAAKAIAIgItAApBgAFxDQAgAigCAEGFmcCAAEECIAIoAgQoAgwRgoCAgACAgICAACECDAELIAIoAgBBgJnAgABBASACKAIEKAIMEYKAgIAAgICAgAAhAgsgACACOgAECyACQQFxC3gBAX8jgICAgABBEGsiBCSAgICAAAJAAkAgA0EISQ0AIARBCGogASACIAMQnYKAgAAgBCgCDCEDIAQoAgghAgwBCyAEIAEgAiADEJyCgIAAIAQoAgQhAyAEKAIAIQILIAAgAjYCACAAIAM2AgQgBEEQaiSAgICAAAvKAgEEfyOAgICAAEEgayIDJICAgIAAIAAoAgAhBEEBIQUCQCAALQAIDQACQCAAKAIEIgYtAApBgAFxDQBBASEFIAYoAgBBgZnAgABBiJnAgAAgBBtBAkEBIAQbIAYoAgQoAgwRgoCAgACAgICAAA0BIAEgBiACKAIMEYOAgIAAgICAgAAhBQwBCwJAIAQNAEEBIQUgBigCAEGJmcCAAEECIAYoAgQoAgwRgoCAgACAgICAAA0BC0EBIQUgA0EBOgAPIANBjJnAgAA2AhQgAyAGKQIANwIAIAMgBikCCDcCGCADIANBD2o2AgggAyADNgIQIAEgA0EQaiACKAIMEYOAgIAAgICAgAANACADKAIQQYOZwIAAQQIgAygCFCgCDBGCgICAAICAgIAAIQULIAAgBToACCAAIARBAWo2AgAgA0EgaiSAgICAACAAC7UBAQN/IAAtAAghAQJAAkAgACgCACICDQAgASEDDAELQQEhAwJAIAFBAXENAAJAAkACQCACQQFHDQAgAC0ACUEBcQ0BCyAAKAIEIQEMAQsgACgCBCIBLQAKQYABcQ0AQQEhAyABKAIAQYuZwIAAQQEgASgCBCgCDBGCgICAAICAgIAADQELIAEoAgBBh5nAgABBASABKAIEKAIMEYKAgIAAgICAgAAhAwsgACADOgAICyADQQFxCwkAIABBADYCAAtcAQN/IAIoAgQhAyACKAIAIQRBACECAkADQCACIgVB//8DcSABQf//A3FPDQEgBUEBaiECIAQgACADKAIQEYOAgIAAgICAgABFDQALCyAFQf//A3EgAUH//wNxSQsTAEGA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dGo2AgQgACABNgIAC3QBAn8jgICAgABBEGsiAySAgICAACADIAI2AgwgAyABNgIIIAMgA0EIahCAgoCAAAJAAkAgAygCACIERQ0AIAAgBCADKAIEEPuBgIAAIQIMAQsgAEGMmcCAACABIAIQi4KAgAAhAgsgA0EQaiSAgICAACACC0ABAn8DQAJAIAINAEEADwsgAkF/aiECIAEtAAAhAyAALQAAIQQgAEEBaiEAIAFBAWohASAEIANGDQALIAQgA2sLDgAgACABIAIQpYKAgAALC7ciAgBBgIDAAAvIHhZzbGljZSBpbmRleCBzdGFydHMgYXQgwA0gYnV0IGVuZHMgYXQgwAAgaW5kZXggb3V0IG9mIGJvdW5kczogdGhlIGxlbiBpcyDAEiBidXQgdGhlIGluZGV4IGlzIMAAEnJhbmdlIHN0YXJ0IGluZGV4IMAiIG91dCBvZiByYW5nZSBmb3Igc2xpY2Ugb2YgbGVuZ3RoIMAAEHJhbmdlIGVuZCBpbmRleCDAIiBvdXQgb2YgcmFuZ2UgZm9yIHNsaWNlIG9mIGxlbmd0aCDAABlwYXJ0aXRpb25fYXRfaW5kZXggaW5kZXggwB4gZ3JlYXRlciB0aGFuIGxlbmd0aCBvZiBzbGljZSDAABBhc3NlcnRpb24gYGxlZnQgwBcgcmlnaHRgIGZhaWxlZAogIGxlZnQ6IMAJCiByaWdodDogwAAQYXNzZXJ0aW9uIGBsZWZ0IMAQIHJpZ2h0YCBmYWlsZWQ6IMAJCiAgbGVmdDogwAkKIHJpZ2h0OiDAAEhjYW5ub3QgYWNjZXNzIGEgVGhyZWFkIExvY2FsIFN0b3JhZ2UgdmFsdWUgZHVyaW5nIG9yIGFmdGVyIGRlc3RydWN0aW9uOiDAAMACOiDAAC9kYXRhL2RhdGEvY29tLnRlcm11eC9maWxlcy91c3IvbGliL3J1c3RsaWIvc3JjL3J1c3QvbGlicmFyeS9jb3JlL3NyYy9zbGljZS9zb3J0L3Vuc3RhYmxlL3F1aWNrc29ydC5ycwAvZGF0YS9kYXRhL2NvbS50ZXJtdXgvZmlsZXMvdXNyL2xpYi9ydXN0bGliL3NyYy9ydXN0L2xpYnJhcnkvY29yZS9zcmMvc2xpY2Uvc29ydC9zZWxlY3QucnMAL2RhdGEvZGF0YS9jb20udGVybXV4L2ZpbGVzL3Vzci9saWIvcnVzdGxpYi9zcmMvcnVzdC9saWJyYXJ5L3N0ZC9zcmMvc3lzL3N5bmMvbXV0ZXgvbm9fdGhyZWFkcy5ycwAvZGF0YS9kYXRhL2NvbS50ZXJtdXgvZmlsZXMvdXNyL2xpYi9ydXN0bGliL3NyYy9ydXN0L2xpYnJhcnkvc3RkL3NyYy9zeXMvc3luYy9yd2xvY2svbm9fdGhyZWFkcy5ycwAvZGF0YS9kYXRhL2NvbS50ZXJtdXgvZmlsZXMvdXNyL2xpYi9ydXN0bGliL3NyYy9ydXN0L2xpYnJhcnkvY29yZS9zcmMvZm10L251bS5ycwAvZGF0YS9kYXRhL2NvbS50ZXJtdXgvZmlsZXMvdXNyL2xpYi9ydXN0bGliL3NyYy9ydXN0L2xpYnJhcnkvc3RkL3NyYy90aHJlYWQvbG9jYWwucnMAY3JhdGVzL2dlb20vc3JjL2J2aC5ycwAvZGF0YS9kYXRhL2NvbS50ZXJtdXgvZmlsZXMvdXNyL2xpYi9ydXN0bGliL3NyYy9ydXN0L2xpYnJhcnkvY29yZS9zcmMvc2xpY2UvbW9kLnJzAC9kYXRhL2RhdGEvY29tLnRlcm11eC9maWxlcy91c3IvbGliL3J1c3RsaWIvc3JjL3J1c3QvbGlicmFyeS9hbGxvYy9zcmMvcmF3X3ZlYy9tb2QucnMAL2RhdGEvZGF0YS9jb20udGVybXV4L2ZpbGVzL2hvbWUvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tMTk0OWNmOGM2YjViNTU3Zi9kbG1hbGxvYy0wLjIuMTQvc3JjL2RsbWFsbG9jLnJzAGNyYXRlcy9lbmdpbmUtd2FzbS9zcmMvbGliLnJzAAD7AxAAFgAAAKIAAAAbAAAA+wMQABYAAACkAAAAIwAAAPsDEAAWAAAArwAAADUAAAD7AxAAFgAAALkAAAAwAAAA+wMQABYAAAC6AAAAMQAAADEFEAAdAAAAyAAAABUAAAAxBRAAHQAAAMkAAAAVAAAAMQUQAB0AAADKAAAAFQAAADEFEAAdAAAAHQEAABgAAAAxBRAAHQAAACEBAAAiAAAAMQUQAB0AAAAfAAAATgAAADEFEAAdAAAAIAAAAEwAAAAxBRAAHQAAACEAAABMAAAAMQUQAB0AAAA0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"));A&&ne(A),de.setDuration(R),de.setPxPerSecond(48),de.setShow(!1);const h=document.getElementById("app"),v=document.getElementById("dock"),M=document.getElementById("viewport-canvas"),x=document.getElementById("pip"),j=document.getElementById("pip-canvas");let U=null,Ce=!0,ve=1,Me=1,ke=1,__vid=null,__qMul=1,__idleT=0,__idleP=0,__frame=null,__adaptT=0,__wasPlaying=!1,__wasIdle=!0,__wasGame=!1,__wasPhysics=!1;const we={...r,target:[...r.target]},Ne=new Map;let Ge=null,Pe=null,Te=null,je=null,Ye=null;const Ue=new WeakMap,Ke=new Map;function __wake(){if(__idleP){__idleP=0,clearTimeout(__idleT),__frame&&requestAnimationFrame(__frame)}}function _e(){Ce=!0,__wake()}try{U=new Ae(M)}catch(e){const t=document.getElementById("gl-error");t&&(t.style.display="flex",t.textContent="WebGL2 unavailable: "+(e.message||e))}function Je(){if(__vid&&__vid.active)return;if(!v||!h)return;const e=Math.max(84,Math.round(v.getBoundingClientRect().height||92));if(h.style.setProperty("--dh",e+"px"),M){const e=M.getBoundingClientRect();(Math.abs(e.width-ve)>1||Math.abs(e.height-Me)>1)&&(ve=Math.max(1,e.width),Me=Math.max(1,e.height),M.width=Math.round(ve*ke),M.height=Math.round(Me*ke),le.setSize(ve,Me),_e())}}function __applyQ(){if(!M||(__vid&&__vid.active))return;ke=__capDpr(ve,Me)*__qMul,M.width=Math.round(ve*ke),M.height=Math.round(Me*ke),le.setSize(ve,Me),_e()}function Ve(){if(__vid&&__vid.active)return;if(!M)return;const e=M.getBoundingClientRect();ve=Math.max(1,e.width),Me=Math.max(1,e.height),ke=__capDpr(ve,Me)*__qMul,M.width=Math.round(ve*ke),M.height=Math.round(Me*ke),le.setSize(ve,Me),Je(),_e()}function qe(e,t,o){const n=Ke.get(e);if(n&&n.version===t)return n.set;const A=new Set(o);return Ke.set(e,{version:t,set:A}),A}function Oe(){const t=e(he);return t.objects.find((e=>e.id===t.selectedId))||null}function He(){const t=e(he),o=t.objects.filter((e=>e.selected&&!e.locked)),n=o.find((e=>e.id===t.selectedId));return n?[n,...o.filter((e=>e!==n))]:o}function ze(e){if(!e.length)return[0,0,0];let t=0,o=0,n=0;for(const A of e)t+=A.position[0],o+=A.position[1],n+=A.position[2];return[t/e.length,o/e.length,n/e.length]}function Xe(){const t=e(De).current;return"move"===t?"translate":"rotate"===t?"rotate":"scale"===t?"scale":"universal"===t?"universal":null}function We(){const t=e(De).current;return"cut"===t||"detect"===t?t:null}function $e(){const t=Xe();if(!t)return null;const o=Oe(),n=He();if(!o||o.locked)return null;const A=ze(n),s=c(we),i=d(A,s.eye),r=Math.max(.2,g(i,s.forward)),a=u(r,we.fov,Me);let l=.01;for(const e of n){const t=e.geometry??G(e.type),o=Math.max(Math.abs(e.scale[0]),Math.abs(e.scale[1]),Math.abs(e.scale[2]),.01);l=Math.max(l,(t?.radius??.5)*o)}const m="rotate"===t?46:30,p=Math.max(a*m,Math.min(72*a,2.4*l));return J({mode:t,target:A,size:p,rotation:o.rotation,local:"local"===e(De).space,view:{right:s.right,up:s.up},hover:Pe})}function Ze(e,t){const o=$e();if(!o)return null;const n=c(we);let A=null;for(const s of o){const o=s.pick;let i=1/0;if("point"===o.kind){const A=te(o.at,n,we.fov,ve,Me);if(!A.visible)continue;i=Math.hypot(A.x-e,A.y-t)}else if("segment"===o.kind){const A=te(o.a,n,we.fov,ve,Me),s=te(o.b,n,we.fov,ve,Me);if(!A.visible||!s.visible)continue;i=q(e,t,A.x,A.y,s.x,s.y)}else{const A=o.points.map((e=>te(e,n,we.fov,ve,Me))).filter((e=>e.visible));if(A.length<3)continue;i=V(e,t,A)}if(i>o.radius)continue;const r=i/o.radius;(!A||r<A.score)&&(A={hit:s.hit,score:r})}return A?.hit??null}function et(){return e(he).objects.filter((e=>e.visible&&!e.timelineHidden&&!e.locked&&"light"!==e.type&&"camera"!==e.type)).map((e=>({id:e.id,mesh:e.geometry??G(e.type)??G("cube"),position:e.position,rotation:e.rotation,scale:e.scale,version:e.geometryVersion})))}function tt(){if(!U)return;const t=e(le),o=e(he),n=o.objects.find((e=>e.type.startsWith("camera")&&e.cameraProps?.active))??o.objects.find((e=>e.type.startsWith("camera")))??null;let A=c(we),camFov=we.fov,camNear=.05,camFar=260;if(t.viewThroughCamera&&n){const fwd=p([0,0,-1],n.rotation);camFov=n.cameraProps?.ortho?Math.max(8,Math.min(90,(n.cameraProps?.orthoScale??4)*8)):(n.cameraProps?.fov??50);camNear=n.cameraProps?.near??.05;camFar=n.cameraProps?.far??260;A=m(n.position,fwd,camFov);const rollRad=n.rotation[2]||0;if(Math.abs(rollRad)>1e-4){const cr=Math.cos(rollRad),sr=Math.sin(rollRad);A.up=[A.up[0]*cr+A.right[0]*sr,A.up[1]*cr+A.right[1]*sr,A.up[2]*cr+A.right[2]*sr]}}const activeLight=o.objects.find((e=>e.id===o.selectedId&&e.type.startsWith("light")))??o.objects.find((e=>e.type.startsWith("light")))??null;const hdriCfg=__hdriColors[__lookState.hdriPreset]||__hdriColors.studio;const bgRgb=se(__lookState.bgColor||hdriCfg.bg);let lDir=[-.45,.86,.52],lCol=[hdriCfg.tint[0]*__lookState.envStrength,hdriCfg.tint[1]*__lookState.envStrength,hdriCfg.tint[2]*__lookState.envStrength];if(activeLight){const lx=activeLight.position[0],ly=activeLight.position[1],lz=activeLight.position[2],ll=Math.hypot(lx,ly,lz)||1;lDir=[lx/ll,ly/ll,lz/ll];const lc=se(activeLight.lightProps?.color||activeLight.color||"#ffffff"),lp=activeLight.lightProps?.intensity??1;lCol=[lc[0]*lp*hdriCfg.tint[0],lc[1]*lp*hdriCfg.tint[1],lc[2]*lp*hdriCfg.tint[2]]}if(M){const bloomFilter=__lookState.bloomEnabled?`drop-shadow(0 0 ${Math.round(8*__lookState.bloomStrength)}px rgba(110,231,183,0.22)) brightness(${(1+0.12*__lookState.bloomStrength).toFixed(2)})`:"";const dofFilter=__lookState.dofEnabled?` contrast(1.03)`:"";M.style.filter=(bloomFilter+dofFilter).trim()||"none"}const s=Boolean(function(){const t=e(he);if(!t.selectedId||t.gameMode)return null;const o=t.objects.find((e=>e.id===t.selectedId));return o&&(!t.editMode||t.selectedVertices.length||t.selectedEdges.length||t.selectedFaces.length)?[...o.position]:null}())&&!o.gameMode&&!We();U.render(Math.round(ve*ke),Math.round(Me*ke),function(){const t=e(he),o=t.editMode;return t.objects.filter((e=>e.visible&&!e.timelineHidden)).map((e=>{const n=e.geometry??G(e.type)??G("cube"),A=e.id===t.selectedId,s=A&&o;return{id:e.id,mesh:n,geometryVersion:e.geometryVersion,selectionVersion:e.selectionVersion,colorVersion:e.colorVersion,position:e.position,rotation:e.rotation,scale:e.scale,color:se(e.color),emissive:se(e.material.emissive),emissiveStrength:e.material.emissiveStrength??1,opacity:e.material.opacity,metalness:e.material.metalness,roughness:e.material.roughness,specular:e.material.specular??.5,normalStrength:e.material.normalStrength??1,blendMode:e.material.blendMode||"blend",slots:e.geometry?.slots?.length?K(e.geometry.slots):[],glowFaces:t.markedObjectId===e.id&&t.markedFaces.length?qe("glow:"+e.id,t.portionVersion,t.markedFaces):null,glowVersion:t.portionVersion,selected:A,selectedFaces:s?qe("faces:"+e.id,t.selectionVersion,t.selectedFaces):null,selectedEdges:s?qe("edges:"+e.id,t.selectionVersion,t.selectedEdges):null,selectedVertices:s?qe("verts:"+e.id,t.selectionVersion,t.selectedVertices):null,hoverKind:s?t.hover?.kind??null:null,hoverIndex:s?t.hover?.index??null:null,special:e.type.startsWith("light")?"light":e.type.startsWith("camera")?"camera":null}}))}(),{eye:A.eye,forward:A.forward,up:A.up,fov:camFov,near:camNear,far:camFar},{shading:t.shadingMode,xray:t.xray,grid:t.overlays.grid,axes:t.overlays.axes,wireOverlay:t.overlays.wireframe,outlines:"toon"===t.shadingMode,selectOutline:!o.editMode,editMode:o.editMode,elementMode:o.editMode?o.elementMode:null,background:bgRgb,ambient:__lookState.ambientStrength*__lookState.envStrength,lightDir:lDir,lightColor:lCol,shadows:!__lowEnd&&__lookState.castShadows,ao:__lookState.aoEnabled?__lookState.aoStrength:0,bloom:__lookState.bloomEnabled?__lookState.bloomStrength:0,gizmo:s?$e():null,cursor:t.cursorVisible?t.cursorPosition:null,overlayLine:je&&Ye?{x0:je.x,y0:je.y,x1:Ye.x,y1:Ye.y}:null,brushRing:(()=>{if(("Rig"===_o&&"weight"===__rigState.mode)&&Te)return{center:Te.world,normal:Te.normal,radius:__rigState.wpRadius,color:"subtract"===__rigState.wpBrush?[.2,.6,1]:[1,.25,.55],mirrors:[]};if(("Sculpt"!==_o&&"scl"!==e(ge).current)||!Te)return null;const t=e(re),o=[],n=Oe();if(n&&(t.symmetryX||t.symmetryY||t.symmetryZ)){const e=y(C(n.position,n.rotation,n.scale)),A=C(n.position,n.rotation,n.scale),s=b(e,Te.world);t.symmetryX&&o.push(b(A,[-s[0],s[1],s[2]])),t.symmetryY&&o.push(b(A,[s[0],-s[1],s[2]])),t.symmetryZ&&o.push(b(A,[s[0],s[1],-s[2]]))}return{center:Te.world,normal:Te.normal,radius:t.radius,color:t.inverted?[.95,.25,.25]:[1,.55,.1],mirrors:o}})()});const i=o.objects.find((e=>e.id===t.pipCamera))??o.objects.find((e=>"camera"===e.type))??null;if(2!==t.pipMode&&x&&j){x.style.display="block";const e=j.getBoundingClientRect();if(e.width>2&&e.height>2){j.width=Math.round(e.width*ke),j.height=Math.round(e.height*ke);const n=j.getContext("2d");if(n){n.setTransform(ke,0,0,ke,0,0);const A=i?i.position:[3.4,2.3,3.8],s=i?p([0,0,-1],i.rotation):[-.6165,-.3808,-.689],r=Math.min(120,Math.max(10,65/Math.max(.4,t.pipZoom||1))),a=m(A,s,r),c=o.objects.filter((e=>(!i||e.id!==i.id)&&e.visible&&!e.timelineHidden&&"light"!==e.type&&"camera"!==e.type&&"bone"!==e.type));ie(n,e.width,e.height,c,a,{shading:t.shadingMode,xray:t.xray,grid:!0,axes:!1,selectedId:null,showGizmo:!1,gameMode:!1,background:[.04,.048,.068]})}}}else x&&(x.style.display="none");
const rigCv=document.getElementById("rig-overlay-canvas");
if(rigCv){
  if(rigCv.width!==Math.round(ve*ke)||rigCv.height!==Math.round(Me*ke)){rigCv.width=Math.round(ve*ke);rigCv.height=Math.round(Me*ke)}
  const rCtx=rigCv.getContext("2d");
  if(rCtx){
    rCtx.setTransform(ke,0,0,ke,0,0);
    rCtx.clearRect(0,0,ve,Me);
    const bones=o.objects.filter(b=>"bone"===b.type&&b.visible&&!b.timelineHidden&&(0===__rigState.activeLayer||(b.boneLayer||1)===__rigState.activeLayer));
    if(bones.length&&(__rigState.xray||"Rig"===_o)){
      const byId=new Map(o.objects.map(b=>[b.id,b]));
      for(const b of bones){
        const end=__getBoneEndpoints(b);
        const hScr=te(end.head,A,we.fov,ve,Me);
        const tScr=te(end.tail,A,we.fov,ve,Me);
        if(!hScr.visible&&!tScr.visible)continue;
        if(b.parent&&!b.connected&&byId.has(b.parent)){
          const pEnd=__getBoneEndpoints(byId.get(b.parent));
          const pScr=te(pEnd.tail,A,we.fov,ve,Me);
          if(pScr.visible&&hScr.visible){
            rCtx.save();rCtx.setLineDash([4,4]);rCtx.strokeStyle="rgba(148,163,184,0.75)";rCtx.lineWidth=1.3;
            rCtx.beginPath();rCtx.moveTo(pScr.x,pScr.y);rCtx.lineTo(hScr.x,hScr.y);rCtx.stroke();rCtx.restore();
          }
        }
        const isAct=b.id===o.selectedId;
        const isSel=Boolean(b.selected);
        const isWp="Rig"===_o&&"weight"===__rigState.mode&&b.id===__rigState.activeWeightBoneId;
        const isIk=Boolean(b.ik&&b.ik.enabled);
        let stroke="#cbd5e1",fill="rgba(148,163,184,0.22)";
        if(isWp){stroke="#f472b6";fill="rgba(244,114,182,0.34)"}
        else if(isAct){stroke="#3ddbb0";fill="rgba(61,219,176,0.32)"}
        else if(isSel){stroke="#fb923c";fill="rgba(251,146,60,0.28)"}
        else if(isIk){stroke="#facc15";fill="rgba(250,204,21,0.28)"}
        else if("pose"===__rigState.mode){stroke="#38bdf8";fill="rgba(56,189,248,0.22)"}
        const dx=tScr.x-hScr.x,dy=tScr.y-hScr.y,segLen=Math.hypot(dx,dy)||1;
        const nx=-dy/segLen,ny=dx/segLen,wRad=Math.min(12,Math.max(4,segLen*0.14));
        const wx=hScr.x+dx*0.22,wy=hScr.y+dy*0.22;
        rCtx.save();
        rCtx.fillStyle=fill;rCtx.strokeStyle=stroke;rCtx.lineWidth=isAct||isWp?2.2:1.6;
        rCtx.beginPath();
        rCtx.moveTo(hScr.x,hScr.y);
        rCtx.lineTo(wx+nx*wRad,wy+ny*wRad);
        rCtx.lineTo(tScr.x,tScr.y);
        rCtx.lineTo(wx-nx*wRad,wy-ny*wRad);
        rCtx.closePath();
        rCtx.fill();rCtx.stroke();
        rCtx.beginPath();rCtx.moveTo(hScr.x,hScr.y);rCtx.lineTo(tScr.x,tScr.y);rCtx.stroke();
        // Head joint sphere
        rCtx.beginPath();rCtx.arc(hScr.x,hScr.y,isAct||isWp?6.2:4.8,0,Math.PI*2);
        rCtx.fillStyle=stroke;rCtx.fill();rCtx.lineWidth=1.4;rCtx.strokeStyle="#0b0d13";rCtx.stroke();
        // Tail joint sphere
        rCtx.beginPath();rCtx.arc(tScr.x,tScr.y,isAct||isWp?5.0:3.8,0,Math.PI*2);
        rCtx.fillStyle=isAct?"#fef08a":stroke;rCtx.fill();rCtx.lineWidth=1.3;rCtx.strokeStyle="#0b0d13";rCtx.stroke();
        if(__rigState.showNames){
          const mx=(hScr.x+tScr.x)/2,my=(hScr.y+tScr.y)/2-8;
          const lbl=b.name+(isIk?" [IK]":"")+(b.boneLocked?" 🔒":"");
          rCtx.font="600 10px Inter,system-ui,sans-serif";
          const tw=rCtx.measureText(lbl).width+8;
          rCtx.fillStyle="rgba(11,13,19,0.82)";
          rCtx.fillRect(mx-tw/2,my-8,tw,15);
          rCtx.strokeStyle=stroke;rCtx.lineWidth=0.8;
          rCtx.strokeRect(mx-tw/2,my-8,tw,15);
          rCtx.fillStyle=isAct||isWp?"#ffffff":"#e2e8f0";
          rCtx.textAlign="center";rCtx.textBaseline="middle";
          rCtx.fillText(lbl,mx,my-0.5);
        }
        rCtx.restore();
      }
    }
    if(__animState.onionEnabled){
      const tl=e(de);
      const stepSec=Math.max(1/tl.frameRate,(__animState.onionStepFrames||4)/tl.frameRate);
      const gCount=Math.max(1,Math.min(4,__animState.onionCount||2));
      const baseAlpha=__animState.onionOpacity||0.45;
      const targets=o.objects.filter(x=>x.visible&&(tl.keyframes.get(x.id)?.length>0));
      for(let gi=gCount;gi>=1;gi--){
        for(const dir of [-1,1]){
          const sampleT=tl.currentTime+dir*gi*stepSec;
          if(sampleT<0||sampleT>tl.duration)continue;
          const evMap=de.evaluate(sampleT,tl.easing);
          const alpha=Math.max(0.08,baseAlpha*(1-(gi-1)/gCount));
          const col=dir<0?`rgba(61,219,176,${alpha.toFixed(2)})`:`rgba(248,113,113,${alpha.toFixed(2)})`;
          rCtx.save();
          rCtx.strokeStyle=col;
          rCtx.fillStyle=col;
          rCtx.lineWidth=1.4;
          for(const obj of targets){
            const pose=evMap.get(obj.id);
            if(!pose)continue;
            const pos=pose.position||obj.position;
            const rot=pose.rotation||obj.rotation;
            const scl=pose.scale||obj.scale;
            if("bone"===obj.type){
              const len=__getBoneLen({boneLength:obj.boneLength,scale:scl});
              const bDir=__vNorm(__rotateEuler([0,1,0],rot));
              const tail=[pos[0]+bDir[0]*len,pos[1]+bDir[1]*len,pos[2]+bDir[2]*len];
              const hs=te(pos,A,we.fov,ve,Me),ts=te(tail,A,we.fov,ve,Me);
              if(hs.visible&&ts.visible){
                rCtx.beginPath();rCtx.moveTo(hs.x,hs.y);rCtx.lineTo(ts.x,ts.y);rCtx.stroke();
                rCtx.beginPath();rCtx.arc(hs.x,hs.y,3.5,0,Math.PI*2);rCtx.fill();
              }
            } else {
              const mesh=obj.geometry||G(obj.type)||G("cube");
              const mat=__mat4FromTRS(pos,rot,scl);
              const stepEdge=Math.max(1,Math.floor(mesh.edges.length/24));
              rCtx.beginPath();
              for(let ei=0;ei<mesh.edges.length;ei+=stepEdge){
                const [uIdx,vIdx]=mesh.edges[ei];
                const p0=__transformVec3(mat,mesh.vertices[uIdx]);
                const p1=__transformVec3(mat,mesh.vertices[vIdx]);
                const s0=te(p0,A,we.fov,ve,Me),s1=te(p1,A,we.fov,ve,Me);
                if(s0.visible&&s1.visible){rCtx.moveTo(s0.x,s0.y);rCtx.lineTo(s1.x,s1.y)}
              }
              rCtx.stroke();
            }
          }
          rCtx.restore();
        }
      }
    }
  }
}}function ot(e){const t=M.getBoundingClientRect();return{x:e.clientX-t.left,y:e.clientY-t.top}}function nt(e,t,o){const n=te(e,o,we.fov,ve,Me),A=te(a(e,t),o,we.fov,ve,Me);if(!n.visible||!A.visible)return null;const s=A.x-n.x,i=A.y-n.y,r=Math.hypot(s,i);return r<4?null:{x:s/r,y:i/r}}function At(e){return e.map((e=>({id:e.id,position:[...e.position],rotation:[...e.rotation],scale:[...e.scale]})))}function __pickBone2D(px,py){
  const st=e(he),cam=c(we);
  const bones=st.objects.filter(b=>"bone"===b.type&&b.visible&&!b.timelineHidden&&(0===__rigState.activeLayer||(b.boneLayer||1)===__rigState.activeLayer));
  let best=null,bestDist=18;
  for(const b of bones){
    const end=__getBoneEndpoints(b);
    const hScr=te(end.head,cam,we.fov,ve,Me),tScr=te(end.tail,cam,we.fov,ve,Me);
    if(!hScr.visible&&!tScr.visible)continue;
    const d=q(px,py,hScr.x,hScr.y,tScr.x,tScr.y);
    if(d<bestDist){bestDist=d;best=b.id}
  }
  return best;
}
function st(t){
  if("Rig"===_o&&"weight"===__rigState.mode){
    const pt=ot(t),ray=W(we,pt.x,pt.y,ve,Me),stObj=e(he);
    const hitBone=__pickBone2D(pt.x,pt.y);
    const meshes=stObj.objects.filter(m=>"bone"!==m.type&&!m.type.startsWith("light")&&!m.type.startsWith("camera")&&!m.type.startsWith("empty")&&m.visible);
    const hitMesh=Z(meshes.map(m=>({id:m.id,mesh:m.geometry??G(m.type)??G("cube"),position:m.position,rotation:m.rotation,scale:m.scale,version:m.geometryVersion})),ray);
    if(hitBone&&!hitMesh){__rigState.activeWeightBoneId=hitBone;he.mutateRig(s=>__updateWeightHeatmap(s),!1);Jo();_e();return!0}
    if(!hitMesh)return!1;
    const mObj=stObj.objects.find(m=>m.id===hitMesh.id);
    if(!mObj)return!1;
    if(!__rigState.activeWeightBoneId){
      const firstBone=stObj.objects.find(b=>"bone"===b.type);
      if(firstBone)__rigState.activeWeightBoneId=firstBone.id;
    }
    const invM=y(C(mObj.position,mObj.rotation,mObj.scale)),loc=b(invM,hitMesh.world);
    he.beginTransform("geometry");
    Ge={kind:"brush",op:"weight",targetMeshId:mObj.id,startLocal:loc,lastLocal:loc};
    Te={world:hitMesh.world,normal:[0,1,0],radius:__rigState.wpRadius};
    he.mutateRig(s=>__paintMeshWeights(s,mObj.id,loc,__rigState.wpRadius,__rigState.wpStrength,__rigState.wpBrush,__rigState.activeWeightBoneId),!1);
    return!0;
  }
  const o=function(){const t=e(ge).current;return"Sculpt"===_o||"scl"===t?"sculpt":"uvp"===t?"paint":null}();if(!o)return!1;const n=Oe();if(!n||"light"===n.type||"camera"===n.type)return!1;const A=ot(t),s=W(we,A.x,A.y,ve,Me),i=n.geometry??G(n.type),r=Z([{id:n.id,mesh:i,position:n.position,rotation:n.rotation,scale:n.scale,version:n.geometryVersion}],s);if(!r)return!1;const a=y(C(n.position,n.rotation,n.scale)),c=b(a,r.world);he.beginTransform("geometry"),Ge={kind:"brush",op:o,startLocal:c,lastLocal:c};const l=e(re);if(Te={world:r.world,normal:[0,1,0],radius:l.radius},"paint"===o)he.paintVertices(c,l.radius,se(l.color),l.strength,!1);else{const e=l.symmetryX||l.symmetryY||l.symmetryZ?{x:l.symmetryX,y:l.symmetryY,z:l.symmetryZ}:null,o=l.quickSmooth?"smooth":l.kind,n=t.pressure&&t.pressure>0?1.5*t.pressure:1;he.applyBrush(o,c,l.radius,l.strength,e,[0,0,0],!1,{hardness:l.hardness,inverted:l.inverted,falloff:l.falloff,pressure:n})}return!0}function it(t){const o=e(he),n=ot(t),A=W(we,n.x,n.y,ve,Me);let s=o.selectedId?o.objects.find((e=>e.id===o.selectedId)):null;if(!s||"light"===s.type||"camera"===s.type){const e=Z(et(),A);s=e?o.objects.find((t=>t.id===e.id)):null}if(!s)return void he.clearPortion();const i=s.geometry??G(s.type)??G("cube"),r=C(s.position,s.rotation,s.scale),a=$(i,r,A,"face",0);a?he.markPortion(s.id,T(i,a.index,.85)):he.clearPortion()}new ResizeObserver(Ve).observe(M),v&&new ResizeObserver(Je).observe(v),Ve(),M.addEventListener("pointerdown",(t=>{if(M.setPointerCapture(t.pointerId),Ne.set(t.pointerId,{x:t.clientX,y:t.clientY}),2===Ne.size){const e=[...Ne.values()];return Ge={kind:"pinch",distance:Math.hypot(e[0].x-e[1].x,e[0].y-e[1].y),midX:(e[0].x+e[1].x)/2,midY:(e[0].y+e[1].y)/2},void _e()}const o=t.clientX,n=t.clientY;if("pan"===e(De).current||2===t.button||1===t.button||t.shiftKey)return Ge={kind:"pan",lastX:o,lastY:n},void _e();const A=We();if("cut"===A&&0===t.button){const e=ot(t);return je=e,Ye=e,Ge={kind:"cut",startX:e.x,startY:e.y},void _e()}if("detect"===A&&0===t.button)return Ge={kind:"detect"},it(t),void _e();if(0===t.button&&st(t))return void _e();const s=e(he),i=c(we),r=ot(t),a=Ze(r.x,r.y);if(a){const t=Oe(),A=Xe();if(t&&A){const c="local"===e(De).space,l=He(),u=ze(l),m=Math.max(.2,g(d(u,i.eye),i.forward)),p=te(u,i,we.fov,ve,Me);let h=[1,0,0],I=[[1,0,0],[0,1,0]];return"axis"===a.kind||"ring"===a.kind||"scale"===a.kind?h=O(t.rotation,c,a.axis):"plane"===a.kind&&(I=H(t.rotation,c,a.axis)),he.beginTransform(s.editMode?"geometry":"transform"),Ge={kind:"transform",tool:"translate"===A?"move":A,hit:a,mode:A,lastX:o,lastY:n,startX:r.x,startY:r.y,depth:m,startAngle:z(p.x,p.y,r.x,r.y),startDistance:Math.hypot(r.x-p.x,r.y-p.y),axisDir:h,planeAxes:I,startPosition:u,startRotation:[...t.rotation],startScale:[...t.scale],starts:At(l)},void _e()}}if(s.editMode&&0===t.button){const e=Oe(),A=W(we,r.x,r.y,ve,Me);if(e){const i=C(e.position,e.rotation,e.scale),r=Math.min(Math.abs(e.scale[0]),Math.abs(e.scale[1]),Math.abs(e.scale[2]))||1,a=oe(we,we.distance,Me,14)/r,c=$(e.geometry??G(e.type),i,A,s.elementMode,a,e.geometryVersion);he.selectElement(s.elementMode,c?c.index:0,t.ctrlKey||t.metaKey),c||(he.clearElementSelection(),Ge={kind:"orbit",lastX:o,lastY:n})}return void _e()}const l=((__rigState.xray||"Rig"===_o)?__pickBone2D(r.x,r.y):null)??Z(et(),W(we,r.x,r.y,ve,Me))?.id??null;if(l){he.selectObject(l,t.shiftKey||t.ctrlKey||t.metaKey||("Rig"===_o&&__rigState.multiSelect));if("Rig"===_o){const selB=e(he).objects.find(x=>x.id===l&&"bone"===x.type);if(selB)__rigState.activeWeightBoneId=selB.id;Jo()}const e=Xe(),A=Oe();if(e&&A&&!A.locked&&!s.editMode){const t=He(),s=ze(t),a=Math.max(.2,g(d(s,i.eye),i.forward)),c=te(s,i,we.fov,ve,Me);he.beginTransform("transform"),Ge={kind:"transform",tool:"translate"===e?"move":e,hit:{kind:"center"},mode:e,lastX:o,lastY:n,startX:r.x,startY:r.y,depth:a,startAngle:z(c.x,c.y,r.x,r.y),startDistance:Math.hypot(r.x-c.x,r.y-c.y),axisDir:[1,0,0],planeAxes:[[1,0,0],[0,1,0]],startPosition:s,startRotation:[...A.rotation],startScale:[...A.scale],starts:At(t)}}_e()}else"select"!==e(De).current||s.editMode||he.selectObject(null),Ge={kind:"orbit",lastX:o,lastY:n},_e()})),M.addEventListener("pointermove",(t=>{if(Ne.has(t.pointerId)&&Ne.set(t.pointerId,{x:t.clientX,y:t.clientY}),!Ge){if("Sculpt"===_o||"scl"===e(ge).current){const o=Oe();if(o&&"light"!==o.type&&"camera"!==o.type){const n=ot(t),A=W(we,n.x,n.y,ve,Me),s=o.geometry??G(o.type),i=Z([{id:o.id,mesh:s,position:o.position,rotation:o.rotation,scale:o.scale}],A);i?(Te={world:i.world,normal:[0,1,0],radius:e(re).radius},_e()):Te&&(Te=null,_e())}}const o=ot(t),n=Ze(o.x,o.y);return void((n?.kind!==Pe?.kind||n&&Pe&&n.axis!==Pe.axis)&&(Pe=n,_e()))}if("pinch"===Ge.kind){const e=[...Ne.values()];if(e.length<2)return;const t=Math.hypot(e[0].x-e[1].x,e[0].y-e[1].y),o=(e[0].x+e[1].x)/2,n=(e[0].y+e[1].y)/2;Ge.distance>0&&(we.distance=l(we.distance*(Ge.distance/Math.max(t,1)),.5,90));const A=c(we),s=u(we.distance,we.fov,Me);return we.target=[we.target[0]-A.right[0]*(o-Ge.midX)*s+A.up[0]*(n-Ge.midY)*s,we.target[1]-A.right[1]*(o-Ge.midX)*s+A.up[1]*(n-Ge.midY)*s,we.target[2]-A.right[2]*(o-Ge.midX)*s+A.up[2]*(n-Ge.midY)*s],Ge.distance=t,Ge.midX=o,Ge.midY=n,void _e()}if("cut"===Ge.kind)return Ye=ot(t),void _e();if("detect"===Ge.kind)return it(t),void _e();if("brush"===Ge.kind){if("weight"===Ge.op){const mObj=e(he).objects.find(x=>x.id===Ge.targetMeshId);if(!mObj)return;const pt=ot(t),ray=W(we,pt.x,pt.y,ve,Me),hit=Z([{id:mObj.id,mesh:mObj.geometry??G(mObj.type),position:mObj.position,rotation:mObj.rotation,scale:mObj.scale,version:mObj.geometryVersion}],ray);if(!hit)return;const invM=y(C(mObj.position,mObj.rotation,mObj.scale)),loc=b(invM,hit.world);he.mutateRig(s=>__paintMeshWeights(s,mObj.id,loc,__rigState.wpRadius,__rigState.wpStrength,__rigState.wpBrush,__rigState.activeWeightBoneId),!1);Ge.lastLocal=loc;Te={world:hit.world,normal:[0,1,0],radius:__rigState.wpRadius};return void _e()}const o=Oe();if(!o)return;const n=ot(t),A=W(we,n.x,n.y,ve,Me),s=Z([{id:o.id,mesh:o.geometry??G(o.type),position:o.position,rotation:o.rotation,scale:o.scale}],A);if(!s)return;const i=y(C(o.position,o.rotation,o.scale)),r=b(i,s.world),a=e(re);if("paint"===Ge.op)he.paintVertices(r,a.radius,se(a.color),a.strength,!1);else{const e=a.symmetryX||a.symmetryY||a.symmetryZ?{x:a.symmetryX,y:a.symmetryY,z:a.symmetryZ}:null,o=[r[0]-Ge.lastLocal[0],r[1]-Ge.lastLocal[1],r[2]-Ge.lastLocal[2]],n=a.quickSmooth?"smooth":a.kind,A=t.pressure&&t.pressure>0?1.5*t.pressure:1;he.applyBrush(n,r,a.radius,a.strength,e,o,!1,{hardness:a.hardness,inverted:a.inverted,falloff:a.falloff,pressure:A,strokeVector:o})}return Ge.lastLocal=r,Te={world:s.world,normal:[0,1,0],radius:a.radius},void _e()}const o=t.clientX-Ge.lastX,n=t.clientY-Ge.lastY;Ge.lastX=t.clientX,Ge.lastY=t.clientY;const A=c(we);if("orbit"===Ge.kind){we.yaw-=.008*o,we.pitch=l(we.pitch+.008*n,-1.45,1.45);if(__lookState.lockCamToView&&e(le).viewThroughCamera){const scCam=e(he).objects.find(x=>x.type.startsWith("camera"));if(scCam){const cb=c(we);he.setTransform(scCam.id,{position:[...cb.eye],rotation:[-we.pitch,we.yaw,scCam.rotation[2]||0]})}}return void _e()}if("pan"===Ge.kind){const e=u(we.distance,we.fov,Me);return we.target=[we.target[0]-A.right[0]*o*e+A.up[0]*n*e,we.target[1]-A.right[1]*o*e+A.up[1]*n*e,we.target[2]-A.right[2]*o*e+A.up[2]*n*e],void _e()}if("transform"===Ge.kind){if(!Oe())return;const s=u(Ge.depth,we.fov,Me);if(e(he).editMode){const e="axis"===Ge.hit.kind?(()=>{const e=nt(Ge.startPosition,Ge.axisDir,A),t=e?(o*e.x+n*e.y)*s:0;return[Ge.axisDir[0]*t,Ge.axisDir[1]*t,Ge.axisDir[2]*t]})():[A.right[0]*o*s-A.up[0]*n*s,A.right[1]*o*s-A.up[1]*n*s,A.right[2]*o*s-A.up[2]*n*s];return he.translateSelectedElements(e),void _e()}const i=ot(t),r=i.x-Ge.startX,a=i.y-Ge.startY,c=Ge.startPosition,l=e(le),g=Ge.starts;const effMode="universal"===Ge.mode?("ring"===Ge.hit.kind?"rotate":"scale"===Ge.hit.kind?"scale":"translate"):Ge.mode;if("translate"===effMode){let e;if("axis"===Ge.hit.kind){const t=nt(c,Ge.axisDir,A);let o=t?(r*t.x+a*t.y)*s:0;l.snapEnabled&&(o=Math.round(o/l.snapIncrement)*l.snapIncrement),e=[c[0]+Ge.axisDir[0]*o,c[1]+Ge.axisDir[1]*o,c[2]+Ge.axisDir[2]*o]}else if("plane"===Ge.hit.kind){const[t,o]=Ge.planeAxes,n=nt(c,t,A),i=nt(c,o,A);let u=n?(r*n.x+a*n.y)*s:0,m=i?(r*i.x+a*i.y)*s:0;l.snapEnabled&&(u=Math.round(u/l.snapIncrement)*l.snapIncrement,m=Math.round(m/l.snapIncrement)*l.snapIncrement),e=[c[0]+t[0]*u+o[0]*m,c[1]+t[1]*u+o[1]*m,c[2]+t[2]*u+o[2]*m]}else e=[c[0]+A.right[0]*r*s-A.up[0]*a*s,c[1]+A.right[1]*r*s-A.up[1]*a*s,c[2]+A.right[2]*r*s-A.up[2]*a*s],l.snapEnabled&&(e=e.map((e=>Math.round(e/l.snapIncrement)*l.snapIncrement)));let t=e[0]-c[0],o=e[1]-c[1],n=e[2]-c[2];"x"===Yo&&(o=0,n=0),"y"===Yo&&(t=0,n=0),"z"===Yo&&(t=0,o=0),he.setTransforms(g.map((e=>({id:e.id,position:[e.position[0]+t,e.position[1]+o,e.position[2]+n]}))))}else if("rotate"===effMode){const e=S(Ge.startRotation);let n;if("ring"===Ge.hit.kind){const t=te(c,A,we.fov,ve,Me);let o=z(t.x,t.y,i.x,i.y)-Ge.startAngle;const s=g(Ge.axisDir,A.forward)<0?1:-1;if(o*=s,l.snapEnabled){const e=l.snapAngle*Math.PI/180;o=Math.round(o/e)*e}n=F(L(Ge.axisDir,o),e)}else{const t=.013*r,o=.013*a;n=F(L(A.right,o),F(L(A.up,t),e))}const s=S(Ge.startRotation),u=F(n,D(s));he.setTransforms(g.map((e=>({id:e.id,rotation:N(F(u,S(e.rotation)))}))))}else{if("axis"===Ge.hit.kind||"scale"===Ge.hit.kind){const e=nt(c,Ge.axisDir,A),t=e?r*e.x+a*e.y:r,o=Math.max(.05,1+t/120),n=Ge.hit.axis;he.setTransforms(g.map((e=>{const t=[...e.scale];return t[n]=e.scale[n]*o,{id:e.id,scale:t}})))}else{const e=te(c,A,we.fov,ve,Me),t=Math.hypot(i.x-e.x,i.y-e.y),o=Math.max(.05,1+(t-Ge.startDistance)/120);he.setTransforms(g.map((e=>({id:e.id,scale:[("all"===Yo||"x"===Yo)?e.scale[0]*o:e.scale[0],("all"===Yo||"y"===Yo)?e.scale[1]*o:e.scale[1],("all"===Yo||"z"===Yo)?e.scale[2]*o:e.scale[2]]}))))}}_e()}}));const rt=t=>{Ne.delete(t.pointerId),"transform"!==Ge?.kind&&"brush"!==Ge?.kind||he.endTransform(),"cut"===Ge?.kind&&function(){const t=je,o=Ye;if(je=null,Ye=null,!t||!o||Math.hypot(o.x-t.x,o.y-t.y)<8)return;const n=c(we),A={x:(t.x+o.x)/2,y:(t.y+o.y)/2},s=W(we,A.x,A.y,ve,Me),i=Z(et(),s),r=e(he),a=i?.id??r.selectedId;if(!a)return;const l=r.objects.find((e=>e.id===a));if(!l)return;let u=we.distance;if(i){const e=d(i.world,n.eye);u=Math.max(.1,g(e,n.forward))}const m=P({eye:n.eye,forward:n.forward,right:n.right,up:n.up,fov:we.fov},t,o,ve,Me,u),p=C(l.position,l.rotation,l.scale),h=B(E(y(p)),m.normal),I=Math.hypot(h[0],h[1],h[2])||1;he.cutObject(a,{normal:[h[0]/I,h[1]/I,h[2]/I],dist:m.dist/I},"mark"===e(De).cutMode?"mark":"split")}(),Ge=null,_e()};function at(e){if(!e.length)return we.target=[...r.target],we.yaw=r.yaw,we.pitch=r.pitch,we.distance=r.distance,void _e();let t=1/0,o=1/0,n=1/0,A=-1/0,s=-1/0,i=-1/0;for(const r of e){const e=.8;t=Math.min(t,r.position[0]-e),o=Math.min(o,r.position[1]-e),n=Math.min(n,r.position[2]-e),A=Math.max(A,r.position[0]+e),s=Math.max(s,r.position[1]+e),i=Math.max(i,r.position[2]+e)}we.target=[(t+A)/2,(o+s)/2,(n+i)/2];const a=Math.max(.8,Math.hypot(A-t,s-o,i-n)/2);we.distance=l(2.6*a,2,120),_e()}M.addEventListener("pointerup",rt),M.addEventListener("pointercancel",rt),M.addEventListener("wheel",(e=>{e.preventDefault(),we.distance=l(we.distance*Math.exp(.0012*e.deltaY),.5,90),_e()}),{passive:!1}),M.addEventListener("contextmenu",(e=>e.preventDefault())),window.addEventListener("toon:frame-selected",(()=>at(He()))),window.addEventListener("toon:frame-all",(()=>at(e(he).objects.filter((e=>e.visible&&"light"!==e.type&&"camera"!==e.type))))),window.addEventListener("toon:capture",(()=>{if(!U)return;tt();const e=document.createElement("a");e.href=U.snapshot(),e.download="toon-studio-"+Date.now()+".png",document.body.appendChild(e),e.click(),e.remove()})),document.querySelectorAll("[data-cam-preset]").forEach((e=>{e.addEventListener("click",(()=>{const t=e.getAttribute("data-cam-preset");"front"===t?(we.yaw=0,we.pitch=0):"right"===t?(we.yaw=Math.PI/2,we.pitch=0):"left"===t?(we.yaw=-Math.PI/2,we.pitch=0):"top"===t?(we.yaw=0,we.pitch=1.44):"bottom"===t?(we.yaw=0,we.pitch=-1.44):(we.yaw=r.yaw,we.pitch=r.pitch),_e()}))}));const ct=document.getElementById("rail"),lt=document.getElementById("topbar"),gt=document.getElementById("action-panel"),dt=document.getElementById("sh"),ut=document.getElementById("ob"),mt=document.getElementById("timelineSlot"),pt=document.getElementById("tl-resize"),ht=document.getElementById("tl-body"),It=document.getElementById("tl-scroller"),ft=(document.getElementById("tl-inner"),document.getElementById("tl-content")),Ct=document.getElementById("tl-ruler"),yt=document.getElementById("tl-rows"),Et=(document.getElementById("tl-playhead"),document.getElementById("tt")),Bt=document.getElementById("pp"),bt=document.getElementById("tl-upload-plus"),vt=document.getElementById("tl-universal-file"),Qt=document.getElementById("msg"),Mt=document.getElementById("dlg"),kt=document.getElementById("viewport-stats"),wt=document.getElementById("viewport-hints"),xt=document.getElementById("element-mode"),St=document.getElementById("pad"),Dt=document.getElementById("jmp"),Lt=document.getElementById("sc"),Ft=document.getElementById("agent-bar-wrap");let Nt=null,Rt=148,Gt=window.__tlScrubbing=!1,Pt=!1;function Tt(e,t="info",o=2400){ce.showToast(e,t,o)}function jt(){Fo((t=>{const o=he.recordKeyframe(t.id);de.setShow(!0);const n=e(de).keyframes.get(t.id)?.length??0;Tt("Keyframe recorded at "+o.toFixed(2)+"s ("+n+" keys).","success")}))}function Yt(){const t=e(de),o=e(he);let n=3;for(const e of o.objects){const o=(t.keyframes.get(e.id)??[]).map((e=>e.time)),A=t.strips.filter((t=>t.objectId===e.id)),s=t.clips.get(e.id)??null,i=Q(e.type),r=k(o,A,R,s,i);r.end>n&&(n=r.end)}return l(n,1,R)}function Ut(e){const t=Math.max(0,Math.floor(e+1e-4)),o=Math.floor(t/3600),n=Math.floor(t%3600/60),A=t%60;return o>0?String(o).padStart(2,"0")+":"+String(n).padStart(2,"0")+":"+String(A).padStart(2,"0"):String(n).padStart(2,"0")+":"+String(A).padStart(2,"0")}function Kt(e,t){const o=Math.round(30*e),n=Math.floor((o+.1)/30),A=o-30*n;return t<1&&A>0?A+"f":Ut(n)}function _t(t,o){if(!It)return;const n=o??e(de).pxPerSecond,A=Math.max(0,t*n);Math.abs(It.scrollLeft-A)>.5&&(Pt=!0,It.scrollLeft=A,requestAnimationFrame((()=>{Pt=!1})))}function Jt(){if(!Ct||!It)return;const t=e(de).pxPerSecond,o=function(e){const t=[5/30,10/30,.5,1,2,5,10,15,30,60,120,300,600];for(const o of t)if(o*e>=72)return o;return 600}(t),n=It.scrollLeft,A=It.clientWidth||800,s=Math.max(0,Math.floor((n-A)/t/o)*o),i=Math.min(R,Math.ceil((n+1.5*A)/t/o)*o),r=Math.min(260,Math.round((i-s)/o)),a=[];for(let e=0;e<=r;e++){const n=s+e*o;if(n>R+1e-4)break;const A=n*t,i=Kt(n,o);a.push(`<span class="tl-tick" style="left:${A}px">${i}</span>`);const r=n+.5*o;r<=R&&a.push(`<span class="tl-dot" style="left:${r*t}px">•</span>`)}Ct.innerHTML=a.join("")}let Vt="",qt=0;function Ot(){const t=e(de),o=e(he),n=Yt(),A=Math.round(t.currentTime*t.frameRate);Bt&&(Bt.innerHTML=t.playing?s.pause:s.play),ko(),Et&&(Et.innerHTML='<span class="tt-cur">'+Ut(t.currentTime)+'</span> <span class="tt-frame" data-testid="timeline-frame-readout" style="font-size:9.5px;color:#3ddbb0;margin-left:3px;">F'+A+"</span>"),window.__animEngine?.updateLiveReadouts?.(t),null?.classList.toggle("on",t.loop),null?.classList.toggle("on",t.easing),null?.classList.toggle("on",t.autoKey),null?.classList.toggle("on",t.snapToFrames),null?.classList.toggle("on",t.multiSelectMode);const i=null;i&&document.activeElement!==i&&(i.value=String(t.frameRate));const r=null;r&&document.activeElement!==r&&(r.value=String(t.startFrame||0));const a=null;a&&document.activeElement!==a&&(a.value=String(Math.round(n*t.frameRate)));const c=o.selectedId||t.selectedKey?.objectId,l=c?de.interpolationOf(c,"location.x",t.selectedKey?.time):"bezier";document.querySelectorAll("[data-tl-interp]").forEach((e=>{e.classList.toggle("on",e.getAttribute("data-tl-interp")===l)}));for(const[,e]of Le){if(e.videoEl&&(e.videoEl.muted=Fe,Math.abs(e.videoEl.currentTime-t.currentTime%Math.max(.5,e.duration||1))>.25))try{e.videoEl.currentTime=t.currentTime%Math.max(.5,e.duration||1)}catch{}e.audioEl&&(e.audioEl.muted=Fe)}}function Ht(){if(!yt)return;const t=e(he),o=e(de),n=null;n&&n.querySelectorAll("[data-side-row]").forEach((e=>{const o=e.getAttribute("data-side-row");e.classList.toggle("row-sel",o===t.selectedId)})),yt.querySelectorAll("[data-row-obj]").forEach((e=>{const o=e.getAttribute("data-row-obj");e.classList.toggle("row-sel",o===t.selectedId)})),yt.querySelectorAll("[data-clip-obj]").forEach((e=>{const o=e.getAttribute("data-clip-obj");e.classList.toggle("selected",o===t.selectedId)})),yt.querySelectorAll("[data-tl-key-obj]").forEach((e=>{const t=e.getAttribute("data-tl-key-obj"),n=Number(e.getAttribute("data-tl-key-t")??-1),A=(o.selectedKeys??[]).some((e=>e.objectId===t&&Math.abs(e.time-n)<.002))||Boolean(o.selectedKey&&o.selectedKey.objectId===t&&Math.abs(o.selectedKey.time-n)<.002);e.classList.toggle("on",A),e.setAttribute("aria-pressed",String(A))}))}function zt(t){if(!yt)return;const o=e(de),n=t??o.pxPerSecond,A=Yt(),s=Math.min(R,Math.max(A,o.currentTime+2)),i=Math.max(100,Math.ceil(s*n));ft&&(ft.style.width=i+"px"),yt.querySelectorAll("[data-clip-obj]").forEach((e=>{const t=Number(e.getAttribute("data-range-start")??0),o=Number(e.getAttribute("data-range-end")??15),A=Math.max(.2,o-t);e.style.left=t*n+"px",e.style.width=Math.max(36,A*n)+"px";const s=e.querySelector(".tl-dur-badge");s&&(s.textContent=A.toFixed(1)+"s")})),yt.querySelectorAll("[data-tl-key-obj]").forEach((e=>{const t=Number(e.getAttribute("data-tl-key-t")??0);e.style.left=t*n+"px"})),yt.querySelectorAll("[data-strip-id]").forEach((e=>{const t=Number(e.getAttribute("data-strip-start")??0),o=Number(e.getAttribute("data-strip-end")??1);e.style.left=t*n+"px",e.style.width=Math.max(16,(o-t)*n)+"px"}))}function Xt(t){if(!t)return;const o=performance.now();if(o-qt<260)return;qt=o;e(he).selectedId===t?he.selectObject(null):he.selectObject(t),Ht()}function Wt(o=!1){const n=e(de),A=e(he);if(mt.classList.toggle("open",n.show),mt.setAttribute("aria-hidden",String(!n.show)),void 0!==go&&go&&(go.style.display="flex"),Ot(),Je(),!n.show||!yt||!It)return;if(Gt)return;ht&&(ht.style.height=26+Rt+"px"),yt.style.height=Rt+"px";const i=function(e,t){const o=e.objects.map((e=>{const o=(t.keyframes.get(e.id)??[]).map((e=>e.time.toFixed(3))).join(","),n=t.strips.filter((t=>t.objectId===e.id)).map((e=>`${e.id}:${e.start.toFixed(2)}-${e.end.toFixed(2)}`)).join(",");let A=t.clips.get(e.id)??null;const s=Q(e.type);if(!A&&s&&0===o.length&&0===n.length){const t=Le.get(e.id)?.duration??15;A={start:0,end:Math.min(R,t)}}const i=k((t.keyframes.get(e.id)??[]).map((e=>e.time)),t.strips.filter((t=>t.objectId===e.id)),R,A,s),r=Le.get(e.id)?.thumbUrl?"1":"0",a=t.tracks?.get(e.id),c=`${e.visible?1:0}${e.locked||a?.locked?1:0}${a?.muted?1:0}`;return`${e.id}:${e.name}:${e.type}:${c}:${i.start.toFixed(3)}-${i.end.toFixed(3)}:${o}:${n}:${r}`})).join("||");return`${t.show?1:0}::${Fe?1:0}::${Rt}::${__animState.trackFilter}::${__animState.soloTrackId||""}::${o}`}(A,n);if(!o&&i===Vt&&yt.children.length>0)return Ht(),zt(n.pxPerSecond),void Jt();Vt=i;const r=n.pxPerSecond,a=Yt(),c=Math.min(R,Math.max(a,n.currentTime+2)),g=Math.max(100,Math.ceil(c*r));ft&&(ft.style.width=g+"px"),Jt();const d=Fe?t.eye_off:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M11 5L6 9H2v6h4l5 4V5z"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>';yt.innerHTML=0===A.objects.length?'<button class="tl-row-empty" id="tl-empty-add">'+t.plus+"<span>Tap + on the right to upload or add a layer</span></button>":A.objects.filter((e=>"objects"===__animState.trackFilter?"bone"!==e.type&&!e.type.startsWith("camera")&&!e.type.startsWith("light"):"bones"===__animState.trackFilter?"bone"===e.type:"cameras"===__animState.trackFilter?e.type.startsWith("camera")||e.type.startsWith("light"):!0)).map(((e,o)=>{const i=(n.keyframes.get(e.id)??[]).map((e=>e.time)),a=n.strips.filter((t=>t.objectId===e.id));let c=n.clips.get(e.id)??null;const l=Q(e.type);if(!c&&l&&i.length<2&&!a.length){const t=Le.get(e.id)?.duration??15;c={start:0,end:Math.min(R,t)}}const g=k(i,a,R,c,l),u=w(e.type),m=e.id===A.selectedId,p=g.start*r,h=Math.max(.2,g.end-g.start),I=Math.max(36,h*r),f=Le.get(e.id),C=f?.thumbUrl?`background-image:url("${f.thumbUrl}");background-size:auto 100%;background-repeat:repeat-x;`:"",y=n.tracks?.get(e.id),E=Boolean(e.locked||y?.locked);let B='<div class="tl-row '+(m?"row-sel":"")+" "+(E?"row-locked":"")+" "+(Boolean(y?.muted)?"row-muted":"")+'" data-row-obj="'+e.id+'" data-testid="timeline-row">';return B+='<div class="tl-left-controls">',0===o&&(B+='<button type="button" class="tl-left-btn '+(Fe?"on":"")+'" id="tl-btn-mute" data-testid="timeline-mute" title="Mute/Unmute Audio">'+d+"<span>"+(Fe?"Muted":"Mute")+"</span></button>",B+='<button type="button" class="tl-left-btn" id="tl-btn-cover" data-testid="timeline-cover" title="Capture Cover">'+t.photo+"<span>Cover</span></button>"),B+='<button type="button" class="tl-track-ib '+(e.visible?"":"off")+'" data-track-vis="'+e.id+'" data-testid="track-vis-'+e.id+'" title="'+(e.visible?"Hide Track (Auto-Keys Visibility)":"Show Track")+'">'+(e.visible?t.eye:t.eye_off)+"</button>",B+='<button type="button" class="tl-track-ib '+(E?"on":"")+'" data-track-lock="'+e.id+'" data-testid="track-lock-'+e.id+'" title="'+(E?"Unlock Track":"Lock Track")+'">'+t.lock+"</button>",B+='<button type="button" class="tl-track-ib '+(y?.muted?"mute-on":"")+'" data-track-mute="'+e.id+'" data-testid="track-mute-'+e.id+'" title="Mute/Unmute Track Animation" style="font:700 9px Inter,sans-serif;">M</button>',B+='<button type="button" class="tl-track-ib '+( __animState.soloTrackId===e.id?"solo-on":"")+'" data-track-solo="'+e.id+'" data-testid="track-solo-'+e.id+'" title="Solo Track" style="font:700 9px Inter,sans-serif;">S</button>',B+='<button type="button" class="tl-track-ib" data-track-rename="'+e.id+'" data-testid="track-rename-'+e.id+'" title="Rename Track">'+s.pencil+"</button>",B+="</div>",B+='<div class="tl-clip movable '+(m?"selected":"")+" "+(f?.thumbUrl?"has-thumb":"")+'" data-clip-obj="'+e.id+'" data-range-start="'+g.start+'" data-range-end="'+g.end+'" style="left:'+p+"px;width:"+I+"px;--clip:"+u.bar+";--clip-edge:"+u.edge+";"+C+'" title="1st click: Select · 2nd click: Deselect · Drag horizontally: Scrub timeline">',B+='<button type="button" class="tl-clip-trim left" data-trim-obj="'+e.id+'" data-trim-edge="start" data-testid="clip-trim-start" title="Drag to trim start"></button>',B+='<div class="tl-clip-name" data-tl-sel="'+e.id+'" data-testid="timeline-row-name">',B+='<span class="tl-row-icon">'+(t[pe(e.type)]??t.cube)+"</span>",B+='<span class="tl-row-label" data-label-obj="'+e.id+'">'+e.name+"</span>",B+="</div>",B+='<span class="tl-dur-badge" data-testid="clip-duration-badge">'+h.toFixed(1)+"s</span>",B+='<button type="button" class="tl-clip-trim right" data-trim-obj="'+e.id+'" data-trim-edge="end" data-testid="clip-trim-end" title="Drag to extend up to 1 hour (3600s)"></button>',B+="</div>",B+=(n.keyframes.get(e.id)??[]).map((kfObj=>{const t=kfObj.time,chCls="loc"===kfObj.channelKind?"kf-loc":"rot"===kfObj.channelKind?"kf-rot":"scale"===kfObj.channelKind?"kf-scale":"",o=(n.selectedKeys??[]).some((o=>o.objectId===e.id&&Math.abs(o.time-t)<.002))||Boolean(n.selectedKey&&n.selectedKey.objectId===e.id&&Math.abs(n.selectedKey.time-t)<.002);return'<button type="button" class="tl-key '+chCls+" "+(o?"on":"")+'" aria-pressed="'+o+'" data-tl-key-obj="'+e.id+'" data-tl-key-t="'+t+'" style="left:'+t*r+'px" data-testid="timeline-key" title="Keyframe at '+t.toFixed(2)+"s (F"+Math.round(t*n.frameRate)+') · Drag to retime"></button>'})).join(""),B+=a.map((e=>'<div class="tl-strip '+(e.id===n.selectedStripId?"on":"")+'" data-strip-id="'+e.id+'" data-strip-start="'+e.start+'" data-strip-end="'+e.end+'" style="left:'+e.start*r+"px;width:"+Math.max(16,(e.end-e.start)*r)+'px" data-testid="nla-strip"><span class="tl-strip-name">'+e.name+"</span></div>")).join(""),B+="</div>",B})).join(""),document.getElementById("tl-btn-mute")?.addEventListener("click",(e=>{e.stopPropagation(),Fe=!Fe,Tt(Fe?"Track audio muted.":"Track audio unmuted.","info"),Wt(!0)})),document.getElementById("tl-btn-cover")?.addEventListener("click",(e=>{e.stopPropagation(),window.dispatchEvent(new CustomEvent("toon:capture")),Tt("Cover snapshot captured!","success")})),yt.querySelectorAll("[data-trim-obj]").forEach((t=>{t.addEventListener("pointerdown",(o=>{if("mouse"===o.pointerType&&0!==o.button)return;o.stopPropagation(),o.preventDefault();const n=t.getAttribute("data-trim-obj"),A=t.getAttribute("data-trim-edge"),s=t.closest(".tl-clip"),i=s?.querySelector(".tl-dur-badge"),r=Number(s?.getAttribute("data-range-start")??0),a=Number(s?.getAttribute("data-range-end")??15);he.selectObject(n),Ht(),he.beginAnimationEdit(),e(de).clips.has(n)||de.setClip(n,r,a);const c=o.clientX,g=It.scrollLeft;let d=o.clientX,u=0;function m(){const t=e(de).pxPerSecond,o=It.scrollLeft-g,u=(d-c+o)/t;let m=r,p=a;if("start"===A?m=ue(l(r+u,0,a-.2)):p=ue(l(a+u,r+.2,R)),de.setClip(n,m,p),ft){const e=Math.ceil(Math.max(Yt(),p+5)*t);e>ft.clientWidth&&(ft.style.width=e+"px")}s&&(s.setAttribute("data-range-start",String(m)),s.setAttribute("data-range-end",String(p)),s.style.left=m*t+"px",s.style.width=Math.max(36,(p-m)*t)+"px"),i&&(i.textContent=(p-m).toFixed(1)+"s"),Ot(),Jt()}function p(){if(u=0,!Gt||!It)return;const e=It.getBoundingClientRect();let t=0;d>e.right-44?t=Math.min(48,6+Math.ceil(.45*(d-(e.right-44)))):d<e.left+44&&(t=-Math.min(48,6+Math.ceil(.45*(e.left+44-d)))),0!==t&&(Pt=!0,It.scrollLeft=Math.max(0,It.scrollLeft+t),Pt=!1,m(),u=requestAnimationFrame(p))}Gt=window.__tlScrubbing=!0;const h=e=>{d=e.clientX,m(),u||(u=requestAnimationFrame(p))},I=()=>{u&&cancelAnimationFrame(u),window.removeEventListener("pointermove",h),window.removeEventListener("pointerup",I),window.removeEventListener("pointercancel",I),Gt=window.__tlScrubbing=!1,he.endAnimationEdit(),Wt()};window.addEventListener("pointermove",h),window.addEventListener("pointerup",I),window.addEventListener("pointercancel",I)}))})),yt.querySelectorAll("[data-clip-obj]").forEach((t=>{let o=!1,n=!1;t.addEventListener("pointerdown",(A=>{if("mouse"===A.pointerType&&0!==A.button)return;if(A.target.closest(".tl-clip-trim, .tl-key"))return;A.stopPropagation();if(no())return void(n=!0);const s=t.getAttribute("data-clip-obj"),i=A.clientX,r=A.clientY,a=It.scrollLeft,c=yt.scrollTop;o=!1,n=!1,Gt=window.__tlScrubbing=!0,de.setUserScrubbing(!0);const g=t=>{if(no())return n=!0,void(Gt=window.__tlScrubbing=!1);const A=t.clientX-i,s=t.clientY-r;if(!o&&Math.hypot(A,s)<12)return;o=!0;const g=e(de).pxPerSecond,d=Yt(),u=l(a-A,0,d*g);Pt=!0,It.scrollLeft=u,Pt=!1;const m=l(u/g,0,d);de.setTime(m),yt&&Math.abs(s)>4&&(yt.scrollTop=Math.max(0,c-s)),Ot(),Jt()},d=()=>{window.removeEventListener("pointermove",g),window.removeEventListener("pointerup",u),window.removeEventListener("pointercancel",m),Gt=window.__tlScrubbing=!1,de.setUserScrubbing(!1),de.resyncClock()},u=()=>{d(),o||n||no()||Xt(s)},m=()=>{d()};window.addEventListener("pointermove",g),window.addEventListener("pointerup",u),window.addEventListener("pointercancel",m)})),t.addEventListener("click",(e=>{if(!e.target.closest(".tl-clip-trim, .tl-key")&&(e.stopPropagation(),!o)){Xt(t.getAttribute("data-clip-obj"))}}))}));const u=document.getElementById("tl-body")||yt;u.querySelectorAll("[data-track-vis]").forEach((e=>{e.addEventListener("click",(t=>{t.stopPropagation();const o=e.getAttribute("data-track-vis");he.toggleVisibility(o),Wt(!0)}))})),u.querySelectorAll("[data-track-lock]").forEach((e=>{e.addEventListener("click",(t=>{t.stopPropagation();const o=e.getAttribute("data-track-lock");he.toggleLock(o),Wt(!0)}))})),u.querySelectorAll("[data-track-mute]").forEach((el=>{el.addEventListener("click",(ev=>{ev.stopPropagation();const oid=el.getAttribute("data-track-mute");de.toggleTrackMute(oid);Wt(!0)}))})),u.querySelectorAll("[data-track-solo]").forEach((el=>{el.addEventListener("click",(ev=>{ev.stopPropagation();const oid=el.getAttribute("data-track-solo");__animState.soloTrackId=__animState.soloTrackId===oid?null:oid;const st=e(he);for(const obj of st.objects){de.setTrackMeta(obj.id,{muted:Boolean(__animState.soloTrackId&&obj.id!==__animState.soloTrackId)})}Wt(!0)}))})),u.querySelectorAll("[data-track-rename]").forEach((t=>{t.addEventListener("click",(o=>{o.stopPropagation();const n=t.getAttribute("data-track-rename"),A=e(he).objects.find((e=>e.id===n));if(!A)return;const s=yt.querySelector('[data-label-obj="'+n+'"]');if(!s)return;const i=document.createElement("input");i.type="text",i.value=A.name,i.className="tl-inline-rename",i.setAttribute("data-testid","track-rename-input");const r=()=>{const e=i.value.trim();e&&e!==A.name&&he.renameObject(n,e),Wt(!0)};i.addEventListener("keydown",(e=>{e.stopPropagation(),"Enter"===e.key?r():"Escape"===e.key&&Wt(!0)})),i.addEventListener("blur",r,{once:!0}),i.addEventListener("pointerdown",(e=>e.stopPropagation())),i.addEventListener("click",(e=>e.stopPropagation())),s.replaceWith(i),i.focus(),i.select()}))})),yt.querySelectorAll("[data-tl-key-obj]").forEach((t=>{t.addEventListener("pointerdown",(o=>{if("mouse"===o.pointerType&&0!==o.button)return;o.stopPropagation(),o.preventDefault();const n=t.getAttribute("data-tl-key-obj"),A=Number(t.getAttribute("data-tl-key-t"));let s=A;const i=o.clientX;let r=!1;const a=o.shiftKey||o.ctrlKey||o.metaKey||e(de).multiSelectMode,c=(e(de).selectedKeys??[]).some((e=>e.objectId===n&&Math.abs(e.time-A)<.002));he.selectObject(n),c&&!a||de.selectKeyframe(n,A,a),Ht(),Gt=window.__tlScrubbing=!0;const g=o=>{const a=o.clientX-i;if(!r&&Math.abs(a)<4)return;r||(r=!0,he.beginAnimationEdit());const c=e(de),g=l(A+a/c.pxPerSecond,0,R),d=de.snapTime(g),u=d-s;if(Math.abs(u)>1e-4){(c.selectedKeys??[]).length>1?(de.moveSelectedKeyframes(u),s=d):(de.moveKeyframe(n,s,d),s=d,t.setAttribute("data-tl-key-t",String(d)),t.style.left=d*c.pxPerSecond+"px");const e=de.evaluate(c.currentTime,c.easing);e.size&&he.applyAnimation(e),_e()}},d=()=>{window.removeEventListener("pointermove",g),window.removeEventListener("pointerup",d),window.removeEventListener("pointercancel",d),Gt=window.__tlScrubbing=!1,r&&he.endAnimationEdit(),Wt()};window.addEventListener("pointermove",g),window.addEventListener("pointerup",d),window.addEventListener("pointercancel",d)}))})),document.getElementById("tl-empty-add")?.addEventListener("click",(()=>vt?.click()))}const $t=new Map;let Zt=0,eo=null,to=null,oo=0;function no(){return $t.size>=2||Zt>=2||Boolean(eo)}function Ao(){to&&(clearTimeout(to),to=null),oo&&(cancelAnimationFrame(oo),oo=0)}function so(t,o){const n=e(de),A=l(t,.25,400),s=o??n.currentTime;de.setPxPerSecond(A),zt(A),_t(s,A),Jt()}function io(t){Ao(),Gt=window.__tlScrubbing=!1;const o=e(de),n=Math.max(12,t||60),A=o.pxPerSecond,s=o.currentTime;eo={startDist:n,lastDist:n,startPps:A,anchorTime:s,pinchMoved:!1,holdDir:A>=340?-1:1},to=setTimeout((()=>{to=null,oo=requestAnimationFrame((function t(){if(!eo||eo.pinchMoved)return void(oo=0);const o=e(de).pxPerSecond,n=eo.holdDir>0?1.032:1/1.032,A=l(o*n,.25,400);so(A,eo.anchorTime),eo.startPps=A,eo.startDist=eo.lastDist,oo=eo.holdDir>0&&A<399||eo.holdDir<0&&A>.26?requestAnimationFrame(t):0}))}),150)}function ro(e){if(!eo)return;const t=Math.max(12,e);if(eo.lastDist=t,Math.abs(t-eo.startDist)>=6&&(eo.pinchMoved=!0,Ao()),eo.pinchMoved){const e=t/eo.startDist;so(eo.startPps*e,eo.anchorTime)}}function ao(){Ao(),eo=null}i(document.getElementById("tl-clip-actions")),i(document.getElementById("tl-sub-drawer")),i(dt),i(gt),mt?.addEventListener("touchstart",(e=>{if(Zt=e.touches.length,e.touches.length<=1)$t.size>1&&$t.clear(),ao();else if(e.touches.length>=2){e.preventDefault();const t=e.touches[0],o=e.touches[1];io(Math.hypot(t.clientX-o.clientX,t.clientY-o.clientY))}}),{passive:!1,capture:!0}),mt?.addEventListener("touchmove",(e=>{if(Zt=e.touches.length,e.touches.length>=2){e.preventDefault();const t=e.touches[0],o=e.touches[1],n=Math.hypot(t.clientX-o.clientX,t.clientY-o.clientY);eo?ro(n):io(n)}}),{passive:!1,capture:!0});const co=e=>{Zt=e.touches?e.touches.length:0,0===Zt&&$t.clear(),Zt<2&&ao()};mt?.addEventListener("touchend",co,{capture:!0}),mt?.addEventListener("touchcancel",co,{capture:!0}),ht?.addEventListener("pointerdown",(t=>{const o=performance.now();if("mouse"===t.pointerType)$t.clear();else for(const[e,t]of $t)o-(t.t||0)>2500&&$t.delete(e);if($t.set(t.pointerId,{x:t.clientX,y:t.clientY,t:o}),$t.size>=2){const e=[...$t.values()],t=Math.hypot(e[0].x-e[1].x,e[0].y-e[1].y);eo||io(t)}else if(("mouse"!==t.pointerType||0===t.button)&&!t.target.closest(".tl-clip, .tl-clip-trim, .tl-key, .tl-left-btn, #tl-upload-plus")){const o=t.clientX,n=t.clientY,A=It.scrollLeft,s=yt.scrollTop;let i=!1,r=!1;de.setUserScrubbing(!0);const a=t=>{if(no())return void(r=!0);const a=t.clientX-o,c=t.clientY-n;if(!i&&Math.hypot(a,c)<5)return;i=!0;const g=e(de).pxPerSecond,d=Yt(),u=l(A-a,0,d*g);Pt=!0,It.scrollLeft=u,Pt=!1;const m=l(u/g,0,d);de.setTime(m),yt&&(yt.scrollTop=Math.max(0,s-c)),Ot(),Jt()},c=()=>{window.removeEventListener("pointermove",a),window.removeEventListener("pointerup",c),window.removeEventListener("pointercancel",c),de.setUserScrubbing(!1),de.resyncClock(),i||r||no()||t.target.closest("#tl-ruler")||(he.selectObject(null),Ht())};window.addEventListener("pointermove",a),window.addEventListener("pointerup",c),window.addEventListener("pointercancel",c)}}),{capture:!0}),window.addEventListener("pointermove",(e=>{if($t.has(e.pointerId)&&($t.set(e.pointerId,{x:e.clientX,y:e.clientY,t:performance.now()}),$t.size>=2&&Zt<2)){const e=[...$t.values()],t=Math.hypot(e[0].x-e[1].x,e[0].y-e[1].y);eo?ro(t):io(t)}}));const lo=e=>{$t.delete(e.pointerId),$t.size<2&&Zt<2&&ao()};window.addEventListener("pointerup",lo),window.addEventListener("pointercancel",lo),It?.addEventListener("scroll",(()=>{if(Jt(),Pt||Gt||no())return;const t=e(de).pxPerSecond,o=Yt(),n=It.scrollLeft/t,A=l(n,0,o);n>o+.05&&(Pt=!0,It.scrollLeft=o*t,Pt=!1),de.setTime(A),Ot()}),{passive:!0}),ht?.addEventListener("wheel",(t=>{if(t.ctrlKey||t.metaKey||t.altKey){t.preventDefault();const o=Math.exp(.0025*-t.deltaY);so(e(de).pxPerSecond*o)}}),{passive:!1});const go=document.getElementById("dock-resize");let uo=!1,mo=170,po=120;function ho(t){t&&t.addEventListener("pointerdown",(o=>{if(0!==o.button&&"mouse"===o.pointerType)return;o.preventDefault(),o.stopPropagation(),t.setPointerCapture?.(o.pointerId),uo=!0;const n=o.clientY,A=e(de).show&&!Bo,s=Rt,i=mo,r=po,a=e=>{const t=n-e.clientY,o=Math.max(120,Math.round(window.innerHeight-44));if(A)Rt=Math.round(l(s+t,48,o-110)),ht&&(ht.style.height=26+Rt+"px"),yt&&(yt.style.height=Rt+"px");else if("Look"===_o){mo=Math.round(l(i+t,60,o-70)),document.documentElement.style.setProperty("--ml-h",mo+"px");const e=gt?.querySelector(".ml");e&&(e.style.height=mo+"px")}else po=Math.round(l(r+t,40,o-70)),document.documentElement.style.setProperty("--ap-h",po+"px"),gt&&(gt.style.maxHeight=po+"px");Je()},c=e=>{t.releasePointerCapture?.(e.pointerId),window.removeEventListener("pointermove",a),window.removeEventListener("pointerup",c),window.removeEventListener("pointercancel",c),uo=!1,A&&Wt()};window.addEventListener("pointermove",a),window.addEventListener("pointerup",c),window.addEventListener("pointercancel",c)}))}ho(go),ho(pt),bt?.addEventListener("click",(e=>{e.stopPropagation(),vt?.click()}));
const lookTexInput=document.getElementById("look-tex-file-input");
lookTexInput?.addEventListener("change",(async e=>{
  const file=e.target.files?.[0];
  e.target.value="";
  if(!file)return;
  const img=await _(file);
  if(img&&img.dataUrl){
    const ch=__lookState.texChannel;
    he.mutateRig((st=>{
      const obj=st.objects.find(x=>x.id===st.selectedId&&!x.type.startsWith("light")&&!x.type.startsWith("camera")&&"bone"!==x.type)||st.objects.find(x=>!x.type.startsWith("light")&&!x.type.startsWith("camera")&&"bone"!==x.type);
      if(!obj)return;
      const slots=__ensureMaterialSlots(obj);
      const sl={...slots[__lookState.activeSlotIdx]||slots[0]};
      if("roughness"===ch)sl.roughnessUrl=img.dataUrl;
      else if("normal"===ch)sl.normalUrl=img.dataUrl;
      else{sl.imageUrl=img.dataUrl;sl.presetId=void 0}
      slots[__lookState.activeSlotIdx]=sl;
      obj.geometry={...obj.geometry,slots:[...slots]};
      obj.colorVersion=(obj.colorVersion||1)+1;
      obj.geometryVersion=(obj.geometryVersion||1)+1;
    }),!0);
    Tt("Applied gallery texture to "+ch+" channel!","success");
    Jo();_e();
  }
}));const Io=document.getElementById("tl-sub-drawer"),fo=document.getElementById("cam-safe-frame"),Co=document.getElementById("cam-hud-badge");function yo(){Io&&(Io.style.display="none",Io.innerHTML="")}function Eo(){const t=e(le),o=e(he),n=o.objects.find((e=>"camera"===e.type&&e.cameraProps?.active))??o.objects.find((e=>"camera"===e.type)),A=t.viewThroughCamera&&Boolean(n);if(fo&&(fo.style.display=A?"block":"none"),Co&&n){const e=n.cameraProps?.fov??50,t=Math.round(f(e)),A=n.cameraProps?.targetId,s=A?o.objects.find((e=>e.id===A)):null;Co.textContent=`CAM: ${n.name} · ${t}mm · FOV ${e}°${s?` · Tracking: ${s.name} (${n.cameraProps?.trackingMode})`:""}`}document.getElementById("tl-act-cam-view")?.classList.toggle("on",A),document.getElementById("btn-cam-view")?.classList.toggle("on",A)}document.getElementById("tl-act-split")?.addEventListener("click",(()=>{Fo((t=>{he.splitLayer(t.id)?(Tt("Split layer at "+Ut(e(de).currentTime),"success"),Wt(!0)):Tt("Move playhead inside the layer clip to split.","warning")}))})),document.getElementById("tl-act-speed")?.addEventListener("click",(()=>{Fo((e=>{"flex"!==Io.style.display||"speed"!==Io.getAttribute("data-mode")?(Io.style.display="flex",Io.setAttribute("data-mode","speed"),Io.innerHTML=`\n\t\t\t\t\t<span>${s.speed} Speed:</span>\n\t\t\t\t\t<button type="button" class="sub-chip" data-speed="0.25">0.25x</button>\n\t\t\t\t\t<button type="button" class="sub-chip" data-speed="0.5">0.5x</button>\n\t\t\t\t\t<button type="button" class="sub-chip on" data-speed="1.0">1.0x</button>\n\t\t\t\t\t<button type="button" class="sub-chip" data-speed="1.5">1.5x</button>\n\t\t\t\t\t<button type="button" class="sub-chip" data-speed="2.0">2.0x</button>\n\t\t\t\t\t<button type="button" class="sub-chip" data-speed="4.0">4.0x</button>\n\t\t\t\t\t<button type="button" class="sub-chip" data-speed="8.0">8.0x</button>\n\t\t\t\t\t<label style="display:flex;align-items:center;gap:4px;margin-left:8px;">\n\t\t\t\t\t\t<input type="range" id="sub-speed-slider" min="0.1" max="8.0" step="0.1" value="1.0" style="width:72px;" />\n\t\t\t\t\t\t<span id="sub-speed-val">1.0x</span>\n\t\t\t\t\t</label>\n\t\t\t\t\t<button type="button" class="sub-chip" id="sub-drawer-close">${s.close}</button>\n\t\t\t\t`,Io.querySelectorAll("[data-speed]").forEach((t=>{t.addEventListener("click",(()=>{const o=Number(t.getAttribute("data-speed"));de.setLayerSpeed(e.id,o),Io.querySelectorAll("[data-speed]").forEach((e=>e.classList.remove("on"))),t.classList.add("on");const n=document.getElementById("sub-speed-slider");n&&(n.value=String(o));const A=document.getElementById("sub-speed-val");A&&(A.textContent=o.toFixed(2)+"x"),Tt(`Speed set to ${o}x`,"success"),Wt(!0)}))})),document.getElementById("sub-speed-slider")?.addEventListener("input",(t=>{const o=Number(t.target.value);de.setLayerSpeed(e.id,o);const n=document.getElementById("sub-speed-val");n&&(n.textContent=o.toFixed(2)+"x"),Wt(!0)})),document.getElementById("sub-drawer-close")?.addEventListener("click",yo)):yo()}))})),document.getElementById("tl-act-reverse")?.addEventListener("click",(()=>{Fo((e=>{he.animationEdit((()=>{de.reverseLayer(e.id)})),Tt("Reversed layer motion.","success"),Wt(!0)}))})),document.getElementById("tl-act-freeze")?.addEventListener("click",(()=>{Fo((t=>{he.animationEdit((()=>{de.freezeLayer(t.id,e(de).currentTime,2)})),Tt("Inserted 2s freeze frame hold.","success"),Wt(!0)}))})),document.getElementById("tl-act-dup")?.addEventListener("click",(()=>{Fo((t=>{he.duplicateObject(t.id);const o=e(he).selectedId;if(o){const n=e(de).clips.get(t.id)??{start:0,end:15};de.setClip(o,n.start,n.end),de.copySelectedKeys(t.id),de.pasteKeysAtPlayhead(o),Tt("Duplicated layer: "+t.name,"success"),Wt(!0)}}))})),document.getElementById("tl-act-copy")?.addEventListener("click",(()=>{Fo((e=>{const t=de.copySelectedKeys(e.id);Tt(t?`Copied layer & ${t} keyframes.`:"Copied layer.","success")}))})),document.getElementById("tl-act-paste")?.addEventListener("click",(()=>{Fo((e=>{let t=0;he.animationEdit((()=>{t=de.pasteKeysAtPlayhead(e.id)})),t?(Tt(`Pasted ${t} keyframe(s) at playhead.`,"success"),Wt(!0)):Tt("Clipboard is empty. Copy first.","warning")}))})),document.getElementById("tl-act-opacity")?.addEventListener("click",(()=>{Fo((e=>{if("flex"===Io.style.display&&"opacity"===Io.getAttribute("data-mode"))return void yo();Io.style.display="flex",Io.setAttribute("data-mode","opacity");const t=Math.round(100*(e.material?.opacity??1));Io.innerHTML=`\n\t\t\t\t\t<span>${s.opacity} Opacity:</span>\n\t\t\t\t\t<input type="range" id="sub-op-slider" min="0" max="100" step="1" value="${t}" style="width:110px;" />\n\t\t\t\t\t<span id="sub-op-val">${t}%</span>\n\t\t\t\t\t<button type="button" class="sub-chip" data-op-val="0">0%</button>\n\t\t\t\t\t<button type="button" class="sub-chip" data-op-val="50">50%</button>\n\t\t\t\t\t<button type="button" class="sub-chip" data-op-val="100">100%</button>\n\t\t\t\t\t<button type="button" class="sub-chip" id="sub-drawer-close">${s.close}</button>\n\t\t\t\t`;const o=t=>{he.setObjectOpacity(e.id,t/100);const o=document.getElementById("sub-op-val");o&&(o.textContent=Math.round(t)+"%");const n=document.getElementById("sub-op-slider");n&&(n.value=String(t)),_e()};document.getElementById("sub-op-slider")?.addEventListener("input",(e=>o(Number(e.target.value)))),Io.querySelectorAll("[data-op-val]").forEach((e=>{e.addEventListener("click",(()=>o(Number(e.getAttribute("data-op-val")))))})),document.getElementById("sub-drawer-close")?.addEventListener("click",yo)}))})),document.getElementById("tl-act-replace")?.addEventListener("click",(()=>{Fo((e=>{"flex"!==Io.style.display||"replace"!==Io.getAttribute("data-mode")?(Io.style.display="flex",Io.setAttribute("data-mode","replace"),Io.innerHTML=`\n\t\t\t\t\t<span>${s.replace} Replace Shape:</span>\n\t\t\t\t\t<button type="button" class="sub-chip" data-rep-prim="cube">Cube</button>\n\t\t\t\t\t<button type="button" class="sub-chip" data-rep-prim="sphere">Sphere</button>\n\t\t\t\t\t<button type="button" class="sub-chip" data-rep-prim="cylinder">Cylinder</button>\n\t\t\t\t\t<button type="button" class="sub-chip" data-rep-prim="cone">Cone</button>\n\t\t\t\t\t<button type="button" class="sub-chip" data-rep-prim="torus">Torus</button>\n\t\t\t\t\t<button type="button" class="sub-chip" data-rep-prim="plane">Plate</button>\n\t\t\t\t\t<button type="button" class="sub-chip" data-rep-prim="coin">Gol Plate</button>\n\t\t\t\t\t<button type="button" class="sub-chip" id="sub-rep-upload">Upload File</button>\n\t\t\t\t\t<button type="button" class="sub-chip" id="sub-drawer-close">${s.close}</button>\n\t\t\t\t`,Io.querySelectorAll("[data-rep-prim]").forEach((t=>{t.addEventListener("click",(()=>{const o=t.getAttribute("data-rep-prim");he.replaceObjectGeometry(e.id,o),Tt(`Replaced with ${o}.`,"success"),_e(),Wt(!0),yo()}))})),document.getElementById("sub-rep-upload")?.addEventListener("click",(()=>{vt?.click(),yo()})),document.getElementById("sub-drawer-close")?.addEventListener("click",yo)):yo()}))})),document.getElementById("tl-act-del")?.addEventListener("click",(()=>{Fo((e=>{he.deleteObject(e.id),de.removeKeyframesFor(e.id),Tt(`Deleted ${e.name}.`,"success"),Wt(!0)}))})),document.getElementById("tl-act-save")?.addEventListener("click",(()=>{ce.openDialog("save")})),document.getElementById("tl-act-cam-view")?.addEventListener("click",(()=>{let t=e(he).objects.find((e=>"camera"===e.type));t||(he.addPrimitive("camera",[0,2.5,6]),t=e(he).objects.find((e=>"camera"===e.type)),Tt("Added new Scene Camera.","success")),le.toggleViewThroughCamera(),Eo(),_e()})),document.getElementById("btn-cam-view")?.addEventListener("click",(()=>{let t=e(he).objects.find((e=>"camera"===e.type));t||(he.addPrimitive("camera",[0,2.5,6]),t=e(he).objects.find((e=>"camera"===e.type))),le.toggleViewThroughCamera(),Eo(),_e()})),document.getElementById("tl-act-cam-track")?.addEventListener("click",(()=>{const t=e(he);let o=t.objects.find((e=>e.id===t.selectedId&&"camera"===e.type))??t.objects.find((e=>"camera"===e.type));if(o||(he.addPrimitive("camera",[0,2.5,6]),o=e(he).objects.find((e=>"camera"===e.type)),Tt("Added Scene Camera.","success")),!o)return;if(he.selectObject(o.id),"flex"===Io.style.display&&"camera"===Io.getAttribute("data-mode"))return void yo();Io.style.display="flex",Io.setAttribute("data-mode","camera");const n=o.cameraProps??{fov:50,targetId:null,trackingMode:"look_at"},A=t.objects.filter((e=>e.id!==o.id&&"camera"!==e.type&&"light"!==e.type)),i=Math.round(f(n.fov??50));Io.innerHTML=`\n\t\t\t\t<span>${s.cam_track} Track Target:</span>\n\t\t\t\t<select id="sub-cam-target" class="tl-select" data-testid="camera-target-select">\n\t\t\t\t\t<option value="">None (Free Direction)</option>\n\t\t\t\t\t${A.map((e=>`<option value="${__esc(e.id)}" ${e.id===n.targetId?"selected":""}>${__esc(e.name)}</option>`)).join("")}\n\t\t\t\t</select>\n\t\t\t\t<span>Mode:</span>\n\t\t\t\t<button type="button" class="sub-chip ${"look_at"===n.trackingMode?"on":""}" data-cam-mode="look_at" title="Camera aims directly at target">Look-At</button>\n\t\t\t\t<button type="button" class="sub-chip ${"follow"===n.trackingMode?"on":""}" data-cam-mode="follow" title="Camera follows behind target">Follow</button>\n\t\t\t\t<button type="button" class="sub-chip ${"orbit"===n.trackingMode?"on":""}" data-cam-mode="orbit" title="Camera orbits around target">Orbit</button>\n\t\t\t\t<button type="button" class="sub-chip ${"none"===n.trackingMode?"on":""}" data-cam-mode="none" title="No tracking">Free</button>\n\t\t\t\t<span style="margin-left:6px;">Lens:</span>\n\t\t\t\t<button type="button" class="sub-chip" data-cam-lens="24">24mm</button>\n\t\t\t\t<button type="button" class="sub-chip" data-cam-lens="35">35mm</button>\n\t\t\t\t<button type="button" class="sub-chip" data-cam-lens="50">50mm</button>\n\t\t\t\t<button type="button" class="sub-chip" data-cam-lens="85">85mm</button>\n\t\t\t\t<button type="button" class="sub-chip" data-cam-lens="135">135mm</button>\n\t\t\t\t<label style="display:flex;align-items:center;gap:4px;">\n\t\t\t\t\t<input type="range" id="sub-cam-fov" min="15" max="100" step="1" value="${n.fov}" style="width:68px;" />\n\t\t\t\t\t<span id="sub-cam-fov-val">${i}mm</span>\n\t\t\t\t</label>\n\t\t\t\t<button type="button" class="sub-chip" id="sub-drawer-close">${s.close}</button>\n\t\t\t`,document.getElementById("sub-cam-target")?.addEventListener("change",(t=>{const A=t.target.value||null;he.setCameraProps(o.id,{targetId:A,trackingMode:A?"none"===n.trackingMode?"look_at":n.trackingMode:"none"}),he.updateCameraTracking(.016,e(de).currentTime),Eo(),_e(),Tt(A?"Camera tracking target set.":"Camera tracking cleared.","success")})),Io.querySelectorAll("[data-cam-mode]").forEach((t=>{t.addEventListener("click",(()=>{const n=t.getAttribute("data-cam-mode");he.setCameraProps(o.id,{trackingMode:n}),Io.querySelectorAll("[data-cam-mode]").forEach((e=>e.classList.remove("on"))),t.classList.add("on"),he.updateCameraTracking(.016,e(de).currentTime),Eo(),_e(),Tt(`Camera tracking mode: ${n}`,"success")}))})),Io.querySelectorAll("[data-cam-lens]").forEach((e=>{e.addEventListener("click",(()=>{const t=Number(e.getAttribute("data-cam-lens")),n=I(t);he.setCameraProps(o.id,{fov:n});const A=document.getElementById("sub-cam-fov");A&&(A.value=String(Math.round(n)));const s=document.getElementById("sub-cam-fov-val");s&&(s.textContent=t+"mm"),Eo(),_e(),Tt(`Lens focal length: ${t}mm`,"success")}))})),document.getElementById("sub-cam-fov")?.addEventListener("input",(e=>{const t=Number(e.target.value),n=Math.round(f(t));he.setCameraProps(o.id,{fov:t});const A=document.getElementById("sub-cam-fov-val");A&&(A.textContent=n+"mm"),Eo(),_e()})),document.getElementById("sub-drawer-close")?.addEventListener("click",yo)})),vt?.addEventListener("change",(async t=>{const o=t.target.files;await async function(t){if(t&&t.length)for(const o of t){const t=o.name||"Uploaded_Layer",n=t.toLowerCase(),A=o.type||"";try{if(A.startsWith("image/")||/\.(png|jpe?g|webp|gif|bmp|svg|avif)$/i.test(n)){const n=await _(o);if(n){he.addImageLayer(n.dataUrl,n.width,n.height,t);const o=e(he).selectedId;o&&(Le.set(o,{kind:"image",thumbUrl:n.dataUrl,duration:15,fileName:t}),de.setClip(o,0,15)),Tt("Uploaded image layer: "+t,"success"),Wt();continue}}if(A.startsWith("video/")||/\.(mp4|webm|mov|mkv|avi|m4v)$/i.test(n)){const n=URL.createObjectURL(o),A=document.createElement("video");A.src=n,A.muted=Fe,A.playsInline=!0,A.crossOrigin="anonymous",await new Promise((e=>{const t=()=>e();A.onloadedmetadata=t,A.onerror=t,setTimeout(t,1500)}));const s=l(Number.isFinite(A.duration)&&A.duration>0?A.duration:42.8,.5,R);let i=null;try{A.currentTime=Math.min(.1,.1*s),await new Promise((e=>setTimeout(e,120)));const e=document.createElement("canvas");e.width=160,e.height=90;const t=e.getContext("2d");t&&A.videoWidth>0&&(t.drawImage(A,0,0,160,90),i=e.toDataURL("image/jpeg",.8))}catch{}if(!i){const e=document.createElement("canvas");e.width=160,e.height=90;const o=e.getContext("2d");if(o){const n=o.createLinearGradient(0,0,160,90);n.addColorStop(0,"#2b3a55"),n.addColorStop(1,"#182232"),o.fillStyle=n,o.fillRect(0,0,160,90),o.fillStyle="#ffffff",o.font="700 13px Inter, sans-serif",o.fillText("Video: "+t.slice(0,16),12,48),i=e.toDataURL("image/png")}}he.addImageLayer(i,A.videoWidth||1280,A.videoHeight||720,t);const r=e(he).selectedId;if(r){const o=e(he).objects.find((e=>e.id===r));o&&(o.type="video"),Le.set(r,{kind:"video",videoEl:A,thumbUrl:i,duration:s,fileName:t}),de.setClip(r,0,s)}Tt(`Uploaded video "${t}" (${s.toFixed(1)}s)`,"success"),Wt();continue}if(A.startsWith("audio/")||/\.(mp3|wav|ogg|m4a|aac|flac)$/i.test(n)){const n=URL.createObjectURL(o),A=new Audio(n);await new Promise((e=>{const t=()=>e();A.onloadedmetadata=t,A.onerror=t,setTimeout(t,1200)}));const s=l(Number.isFinite(A.duration)&&A.duration>0?A.duration:30,.5,R);he.addTextLayer("Audio: "+t);const i=e(he).selectedId;i&&(Le.set(i,{kind:"audio",audioEl:A,duration:s,fileName:t}),de.setClip(i,0,s)),Tt(`Uploaded audio "${t}" (${s.toFixed(1)}s)`,"success"),Wt();continue}if(/\.(obj|stl)$/i.test(n)){const A=await o.text(),s=n.endsWith(".stl")?Se(A):xe(A);if(s){he.importMeshObject(t,s);const o=e(he).selectedId;o&&de.setClip(o,0,15),Tt("Imported 3D model: "+t,"success"),Wt();continue}}if(/\.(json|tsf)$/i.test(n)){const e=await be(o);Ie(e),Tt("Loaded project: "+t,"success"),Wt();continue}he.addTextLayer("Doc: "+t);const s=e(he).selectedId;s&&(Le.set(s,{kind:"file",duration:15,fileName:t}),de.setClip(s,0,15)),Tt("Added file layer: "+t,"success"),Wt()}catch(o){he.addTextLayer("Doc: "+t);const n=e(he).selectedId;n&&de.setClip(n,0,15),Tt("Added layer: "+t,"success"),Wt()}}}(o),t.target.value=""})),null?.addEventListener("click",(()=>{de.goToStart(),_t(e(de).currentTime)})),null?.addEventListener("click",(()=>{de.stop(),_t(e(de).currentTime);const t=de.evaluate(e(de).currentTime,e(de).easing);t.size&&he.applyAnimation(t),_e()})),null?.addEventListener("click",(()=>{de.prevFrame(),_t(e(de).currentTime)})),null?.addEventListener("click",(()=>{de.nextFrame(),_t(e(de).currentTime)})),null?.addEventListener("click",(()=>{const t=de.prevKeyframe(e(he).selectedId||void 0);null!==t?_t(t):Tt("No earlier keyframe.","info")})),null?.addEventListener("click",(()=>{const t=de.nextKeyframe(e(he).selectedId||void 0);null!==t?_t(t):Tt("No later keyframe.","info")})),null?.addEventListener("click",(()=>{const t=de.copySelectedKeys(e(he).selectedId||void 0);Tt(t?`Copied ${t} keyframe${t>1?"s":""}.`:"Select a keyframe to copy.",t?"success":"warning")})),null?.addEventListener("click",(()=>{let t=0;he.animationEdit((()=>{t=de.pasteKeysAtPlayhead(e(he).selectedId||void 0)})),t?(Tt(`Pasted ${t} keyframe${t>1?"s":""} at ${Ut(e(de).currentTime)}.`,"success"),Wt(!0)):Tt("Clipboard is empty. Copy a keyframe first.","warning")})),null?.addEventListener("click",(()=>{de.toggleMultiSelectMode(),Ot()})),null?.addEventListener("click",(()=>{de.toggleSnapToFrames(),Ot()})),document.querySelectorAll("[data-tl-interp]").forEach((t=>{t.addEventListener("click",(()=>{const o=t.getAttribute("data-tl-interp"),n=e(de),A=e(he).selectedId||n.selectedKey?.objectId;A?(he.animationEdit((()=>{de.setObjectInterpolation(A,o,n.selectedKey?.objectId===A?n.selectedKey.time:void 0)})),Ot(),Tt(`Interpolation set to ${o}.`,"success")):Tt("Select an animated object or keyframe first.","warning")}))})),null?.addEventListener("change",(e=>{de.setFrameRate(Number(e.target.value)||30),Ot(),Jt()})),null?.addEventListener("change",(e=>{de.setStartFrame(Number(e.target.value)||0),Ot()})),null?.addEventListener("change",(e=>{de.setEndFrame(Number(e.target.value)||300),Ot(),Wt(!0)})),Bt?.addEventListener("click",(()=>de.togglePlay()));let Bo=!1,bo=!1;const vo=document.getElementById("dock-btn-collapse"),Qo=document.getElementById("dock-collapse-icon"),Mo=document.getElementById("dock-badge-text");function ko(){Mo&&(Mo.textContent=(No||"Animate").toUpperCase())}function wo(e){Bo=Boolean(e),bo=Bo,v?.classList.toggle("collapsed",Bo),mt?.classList.toggle("collapsed",Bo),Qo&&(Qo.innerHTML=Bo?'<polyline points="18 15 12 9 6 15"/>':'<polyline points="6 9 12 15 18 9"/>'),vo&&(vo.title=Bo?"Open / Expand Panel":"Collapse / Hide Panel"),Je(),Bo||"Animate"!==No||Wt()}vo?.addEventListener("click",(e=>{e.stopPropagation(),wo(!Bo)}));const xo=null;xo&&xo!==vo&&xo.addEventListener("click",(e=>{e.stopPropagation(),wo(!Bo)}));const So=null;function Do(){const o=e(De).current,n=e(de).show;ct.innerHTML=[{id:"select",icon:"select",label:"Select (V)"},{id:"move",icon:"move",label:"Move (G)"},{id:"rotate",icon:"rotate",label:"Rotate (R)"},{id:"scale",icon:"scale",label:"Scale (S)"},{id:"pan",icon:"pan",label:"Pan"}].map((e=>`<button class="tb ${o===e.id?"on":""}" data-tool="${e.id}" data-testid="tool-${e.id}" title="${e.label}" aria-label="${e.label}">${t[e.icon]}</button>`)).join("")+`<button class="tb tl-toggle ${n?"on":""}" id="rail-tl-toggle" data-testid="timeline-toggle" aria-expanded="${n}" title="${n?"Collapse timeline":"Expand timeline"}">${t.expand}</button>`,ct.querySelectorAll("[data-tool]").forEach((e=>{e.addEventListener("click",(()=>De.setTool(e.getAttribute("data-tool"))))})),document.getElementById("rail-tl-toggle")?.addEventListener("click",(()=>{de.setShow(!e(de).show),Wt(!0),Ot(),Do()})),wt&&(wt.textContent="move"===o?"Drag gizmo arrows or object to move · Auto-Key records on timeline":"rotate"===o?"Drag rings to rotate · Auto-Key records on timeline":"scale"===o?"Drag handles to scale · Auto-Key records on timeline":"pan"===o?"Drag to pan view · pinch/scroll to zoom":"cut"===o?"Draw a line across the mesh to slice it":"detect"===o?"Tap a surface to mark its coplanar portion":"Drag to orbit · tap to select")}function Lo(){const A=e(ge),s=e(ce),i=o[A.current],r=n[A.current]||[],a=r[A.chipIndices[A.current]||0]?.[0]||"";lt.innerHTML=`\n\t\t\t\t<div class="left">
					<button type="button" id="top-home-btn" class="top-home-btn" data-testid="top-home-btn" title="Open Studio Projects Hub">
						<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 10.5L12 3l9 7.5V20a1 1 0 0 1-1 1h-5.5v-6h-5v6H4a1 1 0 0 1-1-1z"/></svg>
						<span>Home</span>
					</button>
					<button id="mode" class="mode" data-testid="mode-pill">${i.label} · ${a}</button>
				</div>\n\t\t\t\t<nav class="tabs" aria-label="Workspaces">\n\t\t\t\t\t${Object.entries(o).map((([e,t])=>`\n\t\t\t\t\t\t<button class="tab ${A.current===e?"on":""}" data-ws="${e}" data-testid="workspace-${e}" style="--c:${t.color}">\n\t\t\t\t\t\t\t<span class="tab-dot"></span><span>${t.label}</span>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t`)).join("")}\n\t\t\t\t</nav>\n\t\t\t\t<div class="right">\n\t\t\t\t\t<button class="tb" id="top-undo" data-testid="undo" title="Undo (Ctrl+Z)">${t.undo}</button>\n\t\t\t\t\t<button class="tb" id="top-redo" data-testid="redo" title="Redo (Ctrl+Y)">${t.redo}</button>\n\t\t\t\t\t<button class="tb" id="top-save" data-testid="save" title="Save Project (Ctrl+S)">${t.save}</button>\n\t\t\t\t\t<button class="tb" id="top-frame" data-testid="toolbar-frame" title="Frame Selection (F)">${t.frame}</button>\n\t\t\t\t\t<button class="tb ${s.showOutliner?"on":""}" id="top-outliner" data-testid="outliner-toggle" title="Outliner">${t.layers}</button>\n\t\t\t\t</div>\n\t\t\t`;const syncWsToTab=t=>{const m={mod:"Add",edt:"Edit",scl:"Sculpt",uvp:"Look",shd:"Look",rig:"Rig",ani:"Animate",phy:"Animate",gam:"Animate",ren:"Look",age:"Agent"};if(m[t]){No=m[t];_o=m[t]}he.setEditMode("edt"===t),"ani"===t&&de.setShow(!0),ko(),Vo(),Jo()};lt.querySelectorAll("[data-ws]").forEach((e=>{e.addEventListener("click",(()=>{const t=e.getAttribute("data-ws");ge.setWorkspace(t),syncWsToTab(t)}))})),document.getElementById("top-home-btn")?.addEventListener("click",(()=>{window.__openStudioHome&&window.__openStudioHome()})),document.getElementById("mode")?.addEventListener("click",(()=>{const e=Object.keys(o),t=e[(e.indexOf(A.current)+1)%e.length];ge.setWorkspace(t),syncWsToTab(t)})),document.getElementById("top-undo")?.addEventListener("click",(()=>he.undo())),document.getElementById("top-redo")?.addEventListener("click",(()=>he.redo())),document.getElementById("top-save")?.addEventListener("click",(()=>ce.openDialog("save"))),document.getElementById("top-frame")?.addEventListener("click",(()=>window.dispatchEvent(new CustomEvent("toon:frame-selected")))),document.getElementById("top-outliner")?.addEventListener("click",(()=>ce.toggleOutliner()))}function Fo(e){const t=Oe();t?e(t):Tt("Select an object first.","warning")}So&&So!==vo&&So.addEventListener("click",(()=>wo(!0))),document.getElementById("tl-btn-step-prev")?.addEventListener("click",(e=>{e.stopPropagation(),de.prevFrame(),Ot(),Wt()})),document.getElementById("tl-btn-step-next")?.addEventListener("click",(e=>{e.stopPropagation(),de.nextFrame(),Ot(),Wt()})),document.getElementById("tl-btn-undo")?.addEventListener("click",(()=>he.undo())),document.getElementById("tl-btn-redo")?.addEventListener("click",(()=>he.redo())),document.getElementById("tl-btn-add-key")?.addEventListener("click",(()=>{const cnt=__insertSmartKeyframe();cnt?(Tt("Added "+__animState.keyChannelMode.toUpperCase()+" keyframe at F"+Math.round(e(de).currentTime*e(de).frameRate),"success"),Wt(!0),Jo()):Tt("Select an object or bone first.","warning")})),document.getElementById("tl-btn-del-key")?.addEventListener("click",(()=>{const t=e(de);t.selectedKey?(he.animationEdit((()=>de.deleteSelectedKey())),Tt("Selected keyframe deleted.","success")):Fo((e=>{const o=t.keyframes.get(e.id)||[];if(!o.length)return void Tt("No keys on this object.","warning");const n=o.reduce(((e,o)=>Math.abs(o.time-t.currentTime)<Math.abs(e.time-t.currentTime)?o:e));he.animationEdit((()=>de.removeKeyframe(e.id,n.time))),Tt("Nearest keyframe deleted.","success")}))})),null?.addEventListener("click",(()=>de.toggleAutoKey())),null?.addEventListener("click",(()=>de.toggleLoop())),null?.addEventListener("click",(()=>de.toggleEasing())),document.getElementById("tl-btn-zoom-in")?.addEventListener("click",(()=>so(1.35*e(de).pxPerSecond))),document.getElementById("tl-btn-zoom-out")?.addEventListener("click",(()=>so(e(de).pxPerSecond/1.35))),null?.addEventListener("click",(()=>{Fo((t=>{const o=e(de),n=o.currentTime,A=o.clips.get(t.id)??{start:0,end:15};n<=A.start+.1||n>=A.end-.1?Tt("Move playhead inside the selected layer to split it.","warning"):(he.animationEdit((()=>{de.setClip(t.id,A.start,n),he.duplicateObject(t.id);const o=e(he).selectedId;o&&de.setClip(o,n,A.end)})),Tt("Split layer at "+Ut(n),"success"))}))}));var No="Agent",Ro="Mesh",Go=null,Po="Quick",To=null,jo={extrude:{amount:.35},bevel:{amount:.05,segments:1},loopcut:{cuts:1},inset:{amount:.18},decimate:{ratio:.5},solidify:{amount:.12},smooth:{amount:2},array:{amount:3},screw:{axis:"z",angle:360,steps:16,amount:.5},boolean:{op:"difference"},subdivide:{amount:1}},Yo="all",Uo=!0,Ko="single",_o="Agent";function Jo(){
  var __savedScrolls=[];
  if(gt){
    gt.querySelectorAll(".ap-crossover-bar,.add-sub-nav,.rig-header-bar,.sculpt-sliders-row,.ap").forEach(function(el,idx){
      __savedScrolls.push({key:el.getAttribute("data-testid")||el.className+"-"+idx,left:el.scrollLeft});
    });
  }
  __rigState.activeTab=_o;var o=e(he),n=Oe(),A=e(le),i=e(re);e(de),e(ae);var __isAg=("Agent"===_o||"age"===e(ge).current),__dockEl=document.getElementById("dock");Ft.style.display=__isAg?"flex":"none",__dockEl&&__dockEl.classList.toggle("agent-fullscreen-active",__isAg&&!Bo),document.body.classList.toggle("agent-tab-open",__isAg&&!Bo),xt.style.display=o.editMode?"flex":"none",o.editMode&&xt.querySelectorAll("[data-elem-mode]").forEach((function(e){e.classList.toggle("on",e.getAttribute("data-elem-mode")===o.elementMode)}));var r={cube:"Cube",sphere:"Sphere (Gol)",cylinder:"Cylinder (Slender)",cone:"Cone",torus:"Torus",plane:"Plate (Floor)",coin:"Round Plate (Gol Plate)",light:"Light",camera:"Camera",bone:"Bone"},a=("Add"===_o||"Combined"===_o)?'<div class="ap-crossover-bar" data-testid="crossover-bar"><button class="ap-cross-pill '+("Add"===_o?"on":"")+'" data-cross-cat="Add">'+STUDIO_ICONS.cross_prim+'<span>Primitives</span></button><button class="ap-cross-pill '+("Edit"===_o?"on":"")+'" data-cross-cat="Edit">'+STUDIO_ICONS.cross_edit+'<span>Edit Tools</span></button><button class="ap-cross-pill '+("Rig"===_o?"on":"")+'" data-cross-cat="Rig">'+STUDIO_ICONS.cross_rig+'<span>Rig Bones</span></button><button class="ap-cross-pill '+("Sculpt"===_o?"on":"")+'" data-cross-cat="Sculpt">'+STUDIO_ICONS.cross_sculpt+'<span>Sculpt</span></button><button class="ap-cross-pill '+("Look"===_o?"on":"")+'" data-cross-cat="Look">'+STUDIO_ICONS.cross_look+'<span>Materials</span></button><button class="ap-cross-pill '+("Combined"===_o?"on":"")+'" data-cross-cat="Combined">'+STUDIO_ICONS.cross_all+'<span>All-in-One</span></button></div>':"",c=me.map((function(e){var o=n&&n.type===e.type?"on":"",A=STUDIO_ICONS["prim_"+e.type]||t[e.icon]||s.plus,i="plane"===e.type?"Plate":"coin"===e.type?"Gol Plate":e.label;return'<button class="pa '+o+'" data-add-prim="'+e.type+'" data-testid="add-'+e.type+'" title="Add '+(r[e.type]||e.label)+'">'+A+"<span>"+i+"</span></button>"})).join(""),l='<div class="asg"><button class="s '+("vertex"===o.elementMode?"on":"")+'" data-el="vertex" data-testid="mode-vertex">Vertex</button><button class="s '+("edge"===o.elementMode?"on":"")+'" data-el="edge" data-testid="mode-edge">Edge</button><button class="s '+("face"===o.elementMode?"on":"")+'" data-el="face" data-testid="mode-face">Face</button></div><button class="pa" data-mop="extrude" data-testid="op-extrude">'+s.split+'<span>Extrude</span></button><button class="pa" data-mop="bevel" data-testid="op-bevel">'+s.split+'<span>Bevel</span></button><button class="pa" data-mop="loopcut" data-testid="op-loopcut">'+s.split+'<span>Loop Cut</span></button><button class="pa" data-mop="subdivide" data-testid="op-subdivide">'+s.duplicate+'<span>Subdivide</span></button><button class="pa" id="act-dup" data-testid="duplicate">'+s.duplicate+'<span>Duplicate</span></button><button class="pa" id="act-del" data-testid="delete">'+s.trash+'<span>Delete</span></button><button class="pa" data-mirror="x">'+STUDIO_ICONS.mod_mirror_x+'<span>Mirror X</span></button><button class="pa" data-mirror="y">'+STUDIO_ICONS.mod_mirror_y+'<span>Mirror Y</span></button><button class="pa" data-mirror="z">'+STUDIO_ICONS.mod_mirror_z+'<span>Mirror Z</span></button><button class="pa" data-mop="array" data-testid="op-array">'+s.duplicate+'<span>Array</span></button><button class="pa" data-mop="solidify" data-testid="op-solidify">'+s.duplicate+'<span>Solidify</span></button><button class="pa" data-mop="smooth" data-testid="op-smooth">'+s.freeze+'<span>Smooth</span></button><button class="pa" data-mop="unwrap-box" data-testid="uv-box">'+s.copy+'<span>Box UV</span></button><button class="pa" data-mop="unwrap-planar" data-testid="uv-planar">'+s.copy+"<span>Planar UV</span></button>",g='<button class="pa" data-add-prim="bone" data-testid="add-bone">'+s.tab_rig+'<span>Add Bone</span></button><button class="pa" id="act-bone-chain" data-testid="add-bone-chain">'+s.tab_rig+'<span>3-Bone Chain</span></button><button class="pa" id="act-bind-skin">'+s.copy+'<span>Bind Skin (Auto-Weights)</span></button><button class="pa" id="act-weight-paint">'+s.tab_sculpt+'<span>Weight Paint</span></button><button class="pa" id="act-pose-mode">'+s.tab_rig+'<span>Pose Mode</span></button><button class="pa" id="act-clear-pose">'+s.replace+"<span>Reset Pose</span></button>",d=[{kind:"draw",label:"Draw",icon:"brush_draw",desc:"Adds mass along surface normals"},{kind:"clay",label:"Clay Strips",icon:"brush_clay",desc:"Flat layered clay accumulation"},{kind:"smooth",label:"Smooth",icon:"brush_smooth",desc:"Relaxes bumps & surface noise"},{kind:"inflate",label:"Inflate",icon:"brush_inflate",desc:"Radial outward volume inflation"},{kind:"grab",label:"Grab",icon:"brush_grab",desc:"Pulls geometry with finger delta"},{kind:"snake_hook",label:"Snake Hook",icon:"brush_snake_hook",desc:"Pulls long tentacles & horns"},{kind:"pinch",label:"Pinch",icon:"brush_pinch",desc:"Pinches vertices toward center"},{kind:"crease",label:"Crease",icon:"brush_crease",desc:"Pinches and indents sharp furrow"},{kind:"flatten",label:"Flatten",icon:"brush_flatten",desc:"Projects onto tangent plane"},{kind:"fill",label:"Fill",icon:"brush_fill",desc:"Fills cavity up to surface plane"},{kind:"mask",label:"Mask",icon:"brush_mask",desc:"Protects brushed area from sculpt"},{kind:"simplify",label:"Simplify",icon:"brush_simplify",desc:"Locally decimates dense mesh"}],u=d.find((function(e){return e.kind===i.kind}))||d[0],m='<div class="sculpt-header-bar" data-testid="sculpt-header"><div class="sculpt-active-pill">'+(s[u.icon]||s.tab_sculpt)+'<span class="sculpt-active-title">'+u.label+'</span><span class="sculpt-mode-badge '+(i.inverted?"sub":"add")+'">'+(i.inverted?"[-] SUB":"[+] ADD")+'</span></div><button class="pa sculpt-inv-btn '+(i.inverted?"on":"")+'" id="btn-brush-inv" data-brush-invert="true" data-testid="brush-invert" title="Toggle Invert (+ / -)">'+STUDIO_ICONS.sculpt_invert+'<span>'+(i.inverted?"Subtract":"Invert")+'</span></button><button class="pa sculpt-qs-btn '+(i.quickSmooth?"on":"")+'" id="btn-quick-smooth" data-testid="quick-smooth" title="Hold to temporarily smooth">'+STUDIO_ICONS.sculpt_smooth_hold+"<span>Smooth (Hold)</span></button></div>",p=d.map((function(e){var t=i.kind===e.kind?"on":"",o=s[e.icon]||s.tab_sculpt;return'<button class="pa '+t+'" data-brush="'+e.kind+'" data-testid="brush-'+e.kind+'" title="'+e.label+" — "+e.desc+'">'+o+"<span>"+e.label+"</span></button>"})).join(""),h=m+'<div class="sculpt-sliders-row"><label class="arange">Size<input type="range" min="0.05" max="3" step="0.05" value="'+i.radius+'" id="rng-b-rad" data-testid="brush-radius"/><span class="range-val" id="val-b-rad">'+i.radius.toFixed(2)+'</span></label><label class="arange">Str<input type="range" min="0.02" max="1" step="0.02" value="'+i.strength+'" id="rng-b-str" data-testid="brush-strength"/><span class="range-val" id="val-b-str">'+Math.round(100*i.strength)+'%</span></label><label class="arange">Hard<input type="range" min="0" max="1" step="0.05" value="'+(void 0!==i.hardness?i.hardness:.5)+'" id="rng-b-hard" data-testid="brush-hardness"/><span class="range-val" id="val-b-hard">'+Math.round(100*(void 0!==i.hardness?i.hardness:.5))+'%</span></label><div class="asg" title="Brush Falloff Curve"><button class="s '+("smooth"!==i.falloff&&i.falloff?"":"on")+'" data-falloff="smooth">Smooth</button><button class="s '+("linear"===i.falloff?"on":"")+'" data-falloff="linear">Linear</button><button class="s '+("hard"===i.falloff?"on":"")+'" data-falloff="hard">Hard</button></div><button class="pa '+(i.symmetryX?"on":"")+'" data-sym="x" title="Symmetry across X axis">'+STUDIO_ICONS.mod_mirror_x+'<span>Sym X</span></button><button class="pa '+(i.symmetryY?"on":"")+'" data-sym="y" title="Symmetry across Y axis">'+STUDIO_ICONS.mod_mirror_y+'<span>Sym Y</span></button><button class="pa '+(i.symmetryZ?"on":"")+'" data-sym="z" title="Symmetry across Z axis">'+STUDIO_ICONS.mod_mirror_z+'<span>Sym Z</span></button></div><div class="ap sculpt-brush-strip" data-testid="sculpt-brush-strip">'+p+'<span class="studio-sep"></span><button class="pa" data-mask-act="invert" data-testid="mask-invert">'+s.reverse+'<span>Invert Mask</span></button><button class="pa" data-mask-act="clear" data-testid="mask-clear">'+s.trash+'<span>Clear Mask</span></button><button class="pa" data-mask-act="blur" data-testid="mask-blur">'+s.freeze+'<span>Blur Mask</span></button><span class="studio-sep"></span><button class="pa" data-mop="subdivide" title="Subdivide selected geometry">'+s.speed+'<span>Dyntopo Subdivide</span></button><button class="pa" data-mop="merge" title="Merge nearby vertices">'+STUDIO_ICONS.sculpt_voxel+'<span>Voxel Simplify</span></button><button class="pa" data-mop="smooth" title="Smooth / relax vertex positions">'+STUDIO_ICONS.sculpt_relax+"<span>Relax Mesh</span></button></div>",I=["wireframe","solid","material","rendered","toon"].map((function(e){return'<button class="s '+(A.shadingMode===e?"on":"")+'" data-shade="'+e+'">'+("wireframe"===e?"Wire":e[0].toUpperCase()+e.slice(1))+"</button>"})).join(""),f="",C=Boolean(o.markedObjectId&&o.markedFaces.length),y='<div class="asg">'+I+'</div><button class="pa '+(A.xray?"on":"")+'" id="btn-xray">'+s.cam_view+'<span>X-ray</span></button><input class="scolor" type="color" value="'+(n?n.color:"#ffffff")+'" id="col-base" title="Base Color"/><label class="arange">Rough<input type="range" min="0" max="1" step="0.05" value="'+(n?n.material.roughness:.36)+'" id="rng-rough" data-testid="mat-roughness"/></label><label class="arange">Metal<input type="range" min="0" max="1" step="0.05" value="'+(n?n.material.metalness:.04)+'" id="rng-metal" data-testid="mat-metalness"/></label><label class="arange">Fade<input type="range" min="0.1" max="1" step="0.05" value="'+(n?n.material.opacity:1)+'" id="rng-opacity" data-testid="mat-opacity"/></label><button class="pa '+(A.overlays.grid?"on":"")+'" id="act-ov-grid">'+STUDIO_ICONS.ren_grid+'<span>Grid</span></button><button class="pa '+(A.overlays.axes?"on":"")+'" id="act-ov-axes">'+STUDIO_ICONS.ren_axes+'<span>Axes</span></button><button class="pa '+(A.cursorVisible?"on":"")+'" id="act-ov-cursor">'+s.target+"<span>3D Cursor</span></button>";if("Add"===_o){var E='<div class="ap-crossover-bar add-sub-nav" data-testid="add-sub-nav"><button class="ap-cross-pill '+("Mesh"===Ro?"on":"")+'" data-add-sub="Mesh">'+s.cube+'<span>Mesh</span></button><button class="ap-cross-pill '+("Curve"===Ro?"on":"")+'" data-add-sub="Curve">'+s.curve+'<span>Curve</span></button><button class="ap-cross-pill '+("Light"===Ro?"on":"")+'" data-add-sub="Light">'+s.light+'<span>Light</span></button><button class="ap-cross-pill '+("Camera"===Ro?"on":"")+'" data-add-sub="Camera">'+s.camera+'<span>Camera</span></button><button class="ap-cross-pill '+("Empty"===Ro?"on":"")+'" data-add-sub="Empty">'+s.origin+'<span>Empty</span></button><button class="ap-cross-pill '+("Text"===Ro?"on":"")+'" data-add-sub="Text">'+s.text+'<span>Text</span></button><button class="ap-cross-pill '+("Import"===Ro?"on":"")+'" data-add-sub="Import">'+s.save+'<span>Import</span></button><button class="ap-cross-pill '+("More"===Ro?"on":"")+'" data-add-sub="More">'+STUDIO_ICONS.cross_all+"<span>More</span></button></div>",B="";if(Go){var b=Oe(),v=b&&b.creationParams?b.creationParams:defaultCreationParams(Go);B='<div class="edit-param-drawer add-param-drawer" data-testid="creation-param-drawer"><span class="param-title">NEW '+Go.replace(/^asset_/,"").replace(/^light_/,"").replace(/^curve_/,"").replace(/^empty_/,"").replace(/^camera_/,"").toUpperCase()+":</span>","sphere"===Go?B+='<label class="arange">Rad<input type="range" min="0.1" max="2.0" step="0.05" value="'+(v.radius||.5)+'" id="cprm-radius"/><span id="cprm-radius-num">'+(v.radius||.5)+'</span></label><label class="arange">Seg<input type="range" min="8" max="64" step="4" value="'+(v.segments||32)+'" id="cprm-segments"/><span id="cprm-segments-num">'+(v.segments||32)+'</span></label><label class="arange">Ring<input type="range" min="4" max="32" step="2" value="'+(v.rings||16)+'" id="cprm-rings"/><span id="cprm-rings-num">'+(v.rings||16)+"</span></label>":"icosphere"===Go?B+='<label class="arange">Rad<input type="range" min="0.1" max="2.0" step="0.05" value="'+(v.radius||.5)+'" id="cprm-radius"/><span id="cprm-radius-num">'+(v.radius||.5)+'</span></label><label class="arange">Subdiv<input type="range" min="0" max="3" step="1" value="'+(void 0!==v.subdivisions?v.subdivisions:1)+'" id="cprm-subdiv"/><span id="cprm-subdiv-num">'+(void 0!==v.subdivisions?v.subdivisions:1)+"</span></label>":"cylinder"===Go||"cone"===Go?B+='<label class="arange">Rad<input type="range" min="0.1" max="2.0" step="0.05" value="'+(v.radius||.5)+'" id="cprm-radius"/><span id="cprm-radius-num">'+(v.radius||.5)+'</span></label><label class="arange">Hgt<input type="range" min="0.2" max="3.0" step="0.1" value="'+(v.height||1)+'" id="cprm-height"/><span id="cprm-height-num">'+(v.height||1)+'</span></label><label class="arange">Seg<input type="range" min="8" max="64" step="4" value="'+(v.segments||32)+'" id="cprm-segments"/><span id="cprm-segments-num">'+(v.segments||32)+"</span></label>":"cube"===Go?B+='<label class="arange">X<input type="range" min="0.1" max="3.0" step="0.1" value="'+(v.sizeX||1)+'" id="cprm-sizex"/><span id="cprm-sizex-num">'+(v.sizeX||1)+'</span></label><label class="arange">Y<input type="range" min="0.1" max="3.0" step="0.1" value="'+(v.sizeY||1)+'" id="cprm-sizey"/><span id="cprm-sizey-num">'+(v.sizeY||1)+'</span></label><label class="arange">Z<input type="range" min="0.1" max="3.0" step="0.1" value="'+(v.sizeZ||1)+'" id="cprm-sizez"/><span id="cprm-sizez-num">'+(v.sizeZ||1)+"</span></label>":"torus"===Go?B+='<label class="arange">Maj R<input type="range" min="0.1" max="1.5" step="0.05" value="'+(v.radius||.35)+'" id="cprm-radius"/><span id="cprm-radius-num">'+(v.radius||.35)+'</span></label><label class="arange">Min R<input type="range" min="0.02" max="0.5" step="0.02" value="'+(v.tube||.15)+'" id="cprm-tube"/><span id="cprm-tube-num">'+(v.tube||.15)+'</span></label><label class="arange">Seg<input type="range" min="8" max="64" step="4" value="'+(v.segments||32)+'" id="cprm-segments"/><span id="cprm-segments-num">'+(v.segments||32)+"</span></label>":"circle"===Go?B+='<label class="arange">Rad<input type="range" min="0.1" max="2.0" step="0.05" value="'+(v.radius||.5)+'" id="cprm-radius"/><span id="cprm-radius-num">'+(v.radius||.5)+'</span></label><label class="arange">Seg<input type="range" min="6" max="64" step="2" value="'+(v.segments||32)+'" id="cprm-segments"/><span id="cprm-segments-num">'+(v.segments||32)+"</span></label>":"grid"===Go||"plane"===Go?B+='<label class="arange">Size<input type="range" min="0.5" max="5.0" step="0.5" value="'+(v.sizeX||2)+'" id="cprm-sizex"/><span id="cprm-sizex-num">'+(v.sizeX||2)+'</span></label><label class="arange">Subdiv<input type="range" min="1" max="16" step="1" value="'+(v.subdivX||4)+'" id="cprm-subdiv"/><span id="cprm-subdiv-num">'+(v.subdivX||4)+"</span></label>":"pyramid"===Go?B+='<label class="arange">Sides<input type="range" min="3" max="12" step="1" value="'+(v.sides||4)+'" id="cprm-sides"/><span id="cprm-sides-num">'+(v.sides||4)+'</span></label><label class="arange">Rad<input type="range" min="0.1" max="2.0" step="0.05" value="'+(v.radius||.5)+'" id="cprm-radius"/><span id="cprm-radius-num">'+(v.radius||.5)+'</span></label><label class="arange">Hgt<input type="range" min="0.2" max="3.0" step="0.1" value="'+(v.height||1)+'" id="cprm-height"/><span id="cprm-height-num">'+(v.height||1)+"</span></label>":"tube"===Go?B+='<label class="arange">Out R<input type="range" min="0.2" max="2.0" step="0.05" value="'+(v.outerRadius||.5)+'" id="cprm-outer-r"/><span id="cprm-outer-r-num">'+(v.outerRadius||.5)+'</span></label><label class="arange">In R<input type="range" min="0.05" max="1.8" step="0.05" value="'+(v.innerRadius||.3)+'" id="cprm-inner-r"/><span id="cprm-inner-r-num">'+(v.innerRadius||.3)+'</span></label><label class="arange">Hgt<input type="range" min="0.2" max="3.0" step="0.1" value="'+(v.height||1)+'" id="cprm-height"/><span id="cprm-height-num">'+(v.height||1)+"</span></label>":"capsule"===Go?B+='<label class="arange">Rad<input type="range" min="0.1" max="1.5" step="0.05" value="'+(v.radius||.25)+'" id="cprm-radius"/><span id="cprm-radius-num">'+(v.radius||.25)+'</span></label><label class="arange">Hgt<input type="range" min="0.2" max="3.0" step="0.1" value="'+(v.height||.6)+'" id="cprm-height"/><span id="cprm-height-num">'+(v.height||.6)+'</span></label><label class="arange">Seg<input type="range" min="8" max="32" step="2" value="'+(v.segments||20)+'" id="cprm-segments"/><span id="cprm-segments-num">'+(v.segments||20)+"</span></label>":-1!==Go.indexOf("light")?B+='<label class="arange">Power<input type="range" min="0.1" max="5.0" step="0.1" value="'+(v.intensity||1)+'" id="cprm-intensity"/><span id="cprm-intensity-num">'+(v.intensity||1)+'</span></label><label class="arange">Dist<input type="range" min="1" max="20" step="1" value="'+(v.radius||5)+'" id="cprm-dist"/><span id="cprm-dist-num">'+(v.radius||5)+"</span></label>":-1!==Go.indexOf("camera")?B+='<label class="arange">FOV<input type="range" min="20" max="100" step="2" value="'+(v.fov||45)+'" id="cprm-fov"/><span id="cprm-fov-num">'+(v.fov||45)+'</span></label><button class="pa" id="cprm-cam-view-btn" data-testid="cam-view-btn">'+s.cam_view+"<span>View Camera</span></button>":"text_3d"===Go&&(B+='<input type="text" value="'+(v.text||"3D Text")+'" id="cprm-text-val" style="width:90px;height:24px;background:#0d1117;color:#fff;border:1px solid #30363d;border-radius:4px;padding:2px 6px;font-size:11px;"/><label class="arange">Depth<input type="range" min="0.05" max="0.8" step="0.05" value="'+(v.depth||.2)+'" id="cprm-depth"/><span id="cprm-depth-num">'+(v.depth||.2)+"</span></label>"),B+='<button class="pa" id="cprm-close-btn" title="Close Drawer" style="margin-left:auto;">'+s.close+"</button></div>"}var M=me.filter((function(e){return e.category===Ro})).map((function(e){var o=n&&n.type===e.type?"on":"",A=STUDIO_ICONS["prim_"+e.type]||s[e.icon]||t[e.icon]||s.plus;return'<button class="pa '+o+'" data-add-prim="'+e.type+'" data-testid="add-'+e.type+'" title="Add '+e.label+'">'+A+"<span>"+e.label+"</span></button>"})).join("");"Camera"===Ro?M+='<button class="pa" id="act-cam-toggle-view" data-testid="cam-toggle-view">'+s.cam_view+"<span>View Camera</span></button>":"Text"===Ro?M+='<button class="pa" id="act-add-text" data-testid="add-text-layer">'+(t.text||s.text)+"<span>Text Layer</span></button>":"Import"===Ro?M='<button class="pa" id="act-upload-3d" data-testid="upload-3d">'+s.save+'<span>Device Model</span></button><button class="pa" id="act-upload-photo" data-testid="upload-photo">'+s.photo+'<span>Reference Photo</span></button><span class="studio-sep"></span>'+M:"More"===Ro&&(M+='<button class="pa" id="act-bone-chain" data-testid="add-bone-chain">'+s.tab_rig+"<span>3-Bone Chain</span></button>"),gt.innerHTML=a+E+B+'<div class="ap primitives" data-testid="primitive-panel">'+M+"</div>"}else if("Edit"===_o){var k='<div class="ap-crossover-bar edit-sub-nav" data-testid="edit-sub-nav"><button class="ap-cross-pill '+("Quick"===Po?"on":"")+'" data-edit-sub="Quick">'+s.tab_edit+'<span>Quick Access</span></button><button class="ap-cross-pill '+("Mesh"===Po?"on":"")+'" data-edit-sub="Mesh">'+s.duplicate+'<span>Mesh Tools</span></button><button class="ap-cross-pill '+("Transform"===Po?"on":"")+'" data-edit-sub="Transform">'+s.move+'<span>Transform</span></button><button class="ap-cross-pill '+("Modifiers"===Po?"on":"")+'" data-edit-sub="Modifiers">'+s.subdiv+'<span>Modifiers</span></button><button class="ap-cross-pill '+("Object"===Po?"on":"")+'" data-edit-sub="Object">'+s.origin+"<span>Object Level</span></button></div>",w="";if(To)w='<div class="edit-param-drawer" data-testid="param-drawer"><span class="param-title">'+To.toUpperCase()+":</span>","extrude"===To?w+='<label class="arange">Dist<input type="range" min="-1" max="1" step="0.02" value="'+jo.extrude.amount+'" id="prm-extrude-val" data-testid="param-extrude-slider"/><span id="prm-extrude-num">'+jo.extrude.amount+'</span></label><button class="pa on" id="prm-apply-btn" data-testid="param-apply-btn">'+s.split+"<span>Apply</span></button>":"bevel"===To?w+='<label class="arange">Width<input type="range" min="0.01" max="0.3" step="0.01" value="'+jo.bevel.amount+'" id="prm-bevel-val"/><span id="prm-bevel-num">'+jo.bevel.amount+'</span></label><label class="arange">Seg<input type="range" min="1" max="6" step="1" value="'+jo.bevel.segments+'" id="prm-bevel-seg"/><span id="prm-bevel-seg-num">'+jo.bevel.segments+'</span></label><button class="pa on" id="prm-apply-btn">'+s.bevel+"<span>Apply</span></button>":"loopcut"===To?w+='<label class="arange">Cuts<input type="range" min="1" max="8" step="1" value="'+jo.loopcut.cuts+'" id="prm-loopcut-val"/><span id="prm-loopcut-num">'+jo.loopcut.cuts+'</span></label><button class="pa on" id="prm-apply-btn">'+s.loopcut+"<span>Apply</span></button>":"inset"===To?w+='<label class="arange">Thick<input type="range" min="0.02" max="0.5" step="0.02" value="'+jo.inset.amount+'" id="prm-inset-val"/><span id="prm-inset-num">'+jo.inset.amount+'</span></label><button class="pa on" id="prm-apply-btn">'+s.inset+"<span>Apply</span></button>":"decimate"===To?w+='<label class="arange">Ratio<input type="range" min="0.1" max="0.9" step="0.05" value="'+jo.decimate.ratio+'" id="prm-decimate-val"/><span id="prm-decimate-num">'+jo.decimate.ratio+'</span></label><button class="pa on" id="prm-apply-btn">'+s.decimate+"<span>Apply</span></button>":"solidify"===To?w+='<label class="arange">Thick<input type="range" min="0.02" max="0.5" step="0.02" value="'+jo.solidify.amount+'" id="prm-solidify-val"/><span id="prm-solidify-num">'+jo.solidify.amount+'</span></label><button class="pa on" id="prm-apply-btn">'+s.duplicate+"<span>Apply</span></button>":"smooth"===To?w+='<label class="arange">Iter<input type="range" min="1" max="6" step="1" value="'+jo.smooth.amount+'" id="prm-smooth-val"/><span id="prm-smooth-num">'+jo.smooth.amount+'</span></label><button class="pa on" id="prm-apply-btn">'+s.freeze+"<span>Apply</span></button>":"screw"===To?w+='<label class="arange">Pitch<input type="range" min="0" max="2" step="0.1" value="'+jo.screw.amount+'" id="prm-screw-val"/><span id="prm-screw-num">'+jo.screw.amount+'</span></label><button class="pa on" id="prm-apply-btn">'+s.screw+"<span>Apply</span></button>":"array"===To&&(w+='<label class="arange">Count<input type="range" min="1" max="8" step="1" value="'+jo.array.amount+'" id="prm-array-val"/><span id="prm-array-num">'+jo.array.amount+'</span></label><button class="pa on" id="prm-apply-btn">'+s.duplicate+"<span>Apply</span></button>"),w+='<button class="pa" id="prm-close-btn">'+s.close+"<span>Cancel</span></button></div>";var x=e(De).current,S=(e(le).gizmoMode,"");"Quick"===Po?S='<div class="asg"><button class="s '+("vertex"===o.elementMode?"on":"")+'" data-el="vertex" data-testid="mode-vertex">Vertex</button><button class="s '+("edge"===o.elementMode?"on":"")+'" data-el="edge" data-testid="mode-edge">Edge</button><button class="s '+("face"===o.elementMode?"on":"")+'" data-el="face" data-testid="mode-face">Face</button></div><button class="pa '+("move"===x?"on":"")+'" data-edit-qa="move" data-testid="qa-move" title="Move Object/Elements">'+s.move+'<span>Move</span></button><button class="pa '+("rotate"===x?"on":"")+'" data-edit-qa="rotate" data-testid="qa-rotate" title="Rotate Object/Elements">'+s.rotate+'<span>Rotate</span></button><button class="pa '+("scale"===x?"on":"")+'" data-edit-qa="scale" data-testid="qa-scale" title="Scale Object/Elements">'+s.scale+'<span>Scale</span></button><button class="pa '+("extrude"===To?"on":"")+'" data-edit-qa="extrude" data-testid="qa-extrude" title="Extrude Selection">'+s.extrude+'<span>Extrude</span></button><button class="pa '+("bevel"===To?"on":"")+'" data-edit-qa="bevel" data-testid="qa-bevel" title="Bevel Corners/Edges">'+s.bevel+'<span>Bevel</span></button><button class="pa '+("loopcut"===To?"on":"")+'" data-edit-qa="loopcut" data-testid="qa-loopcut" title="Add Loop Cut">'+s.loopcut+'<span>Loop Cut</span></button><button class="pa" data-edit-qa="delete" data-testid="qa-delete" title="Delete Selection">'+s.trash+'<span>Delete</span></button><button class="pa" data-edit-qa="duplicate" data-testid="qa-duplicate" title="Duplicate Selection">'+s.duplicate+'<span>Duplicate</span></button><button class="pa '+(o.editMode?"on":"")+'" data-toggle-mode="true" title="Toggle Edit/Object Mode">'+s.tab_edit+"<span>"+(o.editMode?"Edit Mode":"Object Mode")+"</span></button>":"Mesh"===Po?S='<div class="asg"><button class="s '+("vertex"===o.elementMode?"on":"")+'" data-el="vertex">Vertex</button><button class="s '+("edge"===o.elementMode?"on":"")+'" data-el="edge">Edge</button><button class="s '+("face"===o.elementMode?"on":"")+'" data-el="face">Face</button></div><div class="asg"><button class="s '+("single"===Ko?"on":"")+'" data-sel-mode="single" title="Single Select">'+s.target+' Single</button><button class="s '+("box"===Ko?"on":"")+'" data-sel-mode="box" title="Box Marquee Select">'+s.box_sel+' Box</button><button class="s '+("lasso"===Ko?"on":"")+'" data-sel-mode="lasso" title="Lasso Freehand Select">'+s.lasso_sel+' Lasso</button></div><div class="asg"><button class="s" data-sel-action="linked" title="Select Linked Topology">Linked</button><button class="s" data-sel-action="loop" title="Select Edge/Face Loop">Loop</button><button class="s" data-sel-action="ring" title="Select Edge Ring">Ring</button><button class="s" data-sel-action="invert" title="Invert Selection">Invert</button><button class="s" data-sel-action="similar" title="Select Similar">Similar</button></div><button class="pa" data-edit-qa="extrude">'+s.extrude+'<span>Extrude</span></button><button class="pa" data-edit-qa="inset">'+s.inset+'<span>Inset</span></button><button class="pa" data-edit-qa="bevel">'+s.bevel+'<span>Bevel</span></button><button class="pa" data-edit-qa="loopcut">'+s.loopcut+'<span>Loop Cut</span></button><button class="pa '+("cut"===x?"on":"")+'" id="act-tool-knife">'+s.knife+'<span>Knife</span></button><button class="pa" data-mop="bridge">'+s.bridge+'<span>Bridge</span></button><button class="pa" data-mop="merge-center">'+STUDIO_ICONS.edit_merge_center+'<span>Merge Center</span></button><button class="pa" data-mop="merge-first">'+STUDIO_ICONS.edit_merge_first+'<span>Merge First</span></button><button class="pa" data-mop="merge-last">'+STUDIO_ICONS.edit_merge_last+'<span>Merge Last</span></button><button class="pa" data-mop="merge-collapse">'+STUDIO_ICONS.edit_collapse+'<span>Collapse</span></button><button class="pa" data-mop="dissolve">'+s.dissolve+'<span>Dissolve</span></button><button class="pa" data-edit-qa="delete">'+s.trash+'<span>Delete</span></button><button class="pa" data-edit-qa="duplicate">'+s.duplicate+'<span>Duplicate</span></button><button class="pa" data-mop="separate">'+s.separate+'<span>Separate</span></button><button class="pa" data-join-act="true">'+s.join+"<span>Join</span></button>":"Transform"===Po?S='<div class="asg"><button class="s '+("move"===x?"on":"")+'" data-gizmo-tool="move">'+s.move+' Move</button><button class="s '+("rotate"===x?"on":"")+'" data-gizmo-tool="rotate">'+s.rotate+' Rotate</button><button class="s '+("scale"===x?"on":"")+'" data-gizmo-tool="scale">'+s.scale+' Scale</button><button class="s '+("universal"===x?"on":"")+'" data-gizmo-tool="universal">'+s.universal+' Universal</button></div><div class="asg"><button class="s '+("all"===Yo?"on":"")+'" data-axis-constraint="all">All Axes</button><button class="s '+("x"===Yo?"on":"")+'" data-axis-constraint="x">X</button><button class="s '+("y"===Yo?"on":"")+'" data-axis-constraint="y">Y</button><button class="s '+("z"===Yo?"on":"")+'" data-axis-constraint="z">Z</button></div><button class="pa '+(Uo?"on":"")+'" id="act-toggle-uniform-scale">'+s.scale+"<span>"+(Uo?"Uniform Scale":"Non-Uniform")+'</span></button><button class="pa '+("local"===e(De).space?"on":"")+'" id="act-toggle-space">'+s.target+"<span>Space: "+("local"===e(De).space?"Local":"World")+"</span></button>":"Modifiers"===Po?S='<button class="pa" data-mop="subdivide">'+s.subdiv+'<span>Subdivide</span></button><button class="pa" data-edit-qa="smooth">'+s.freeze+'<span>Smooth/Relax</span></button><button class="pa" data-edit-qa="decimate">'+s.decimate+'<span>Decimate</span></button><button class="pa" data-edit-qa="solidify">'+STUDIO_ICONS.mod_solidify+'<span>Solidify</span></button><button class="pa" data-mop="boolean" data-bool-op="difference">'+STUDIO_ICONS.mod_bool_diff+'<span>Boolean Diff</span></button><button class="pa" data-mop="boolean" data-bool-op="union">'+STUDIO_ICONS.mod_bool_union+'<span>Boolean Union</span></button><button class="pa" data-mirror="x">'+STUDIO_ICONS.mod_mirror_x+'<span>Mirror X</span></button><button class="pa" data-mirror="y">'+STUDIO_ICONS.mod_mirror_y+'<span>Mirror Y</span></button><button class="pa" data-mirror="z">'+STUDIO_ICONS.mod_mirror_z+'<span>Mirror Z</span></button><button class="pa" data-edit-qa="array">'+STUDIO_ICONS.mod_array+'<span>Array</span></button><button class="pa" data-edit-qa="screw">'+s.screw+"<span>Screw/Spin</span></button>":"Object"===Po&&(S='<button class="pa '+(o.editMode?"on":"")+'" data-toggle-mode="true">'+s.tab_edit+"<span>"+(o.editMode?"Exit Edit Mode":"Enter Edit Mode")+'</span></button><button class="pa" data-set-origin="geometry">'+STUDIO_ICONS.obj_origin_geo+'<span>Origin to Geometry</span></button><button class="pa" data-set-origin="cursor">'+STUDIO_ICONS.obj_origin_cursor+'<span>Origin to 3D Cursor</span></button><button class="pa" data-set-origin="center">'+STUDIO_ICONS.obj_origin_center+'<span>Origin to Center</span></button><button class="pa" data-apply-tf="all">'+s.target+'<span>Apply All Transforms</span></button><button class="pa" data-apply-tf="location">'+STUDIO_ICONS.obj_apply_loc+'<span>Apply Location</span></button><button class="pa" data-apply-tf="rotation">'+STUDIO_ICONS.obj_apply_rot+'<span>Apply Rotation</span></button><button class="pa" data-apply-tf="scale">'+STUDIO_ICONS.obj_apply_scale+'<span>Apply Scale</span></button><button class="pa" data-clear-tf="all">'+s.replace+'<span>Clear Transforms</span></button><button class="pa" data-parent-act="set">'+s.parent+'<span>Parent to Active</span></button><button class="pa" data-parent-act="clear">'+s.unlock+'<span>Clear Parent</span></button><button class="pa" data-join-act="true">'+s.join+"<span>Join Objects</span></button>"),gt.innerHTML=a+k+w+'<div class="ap">'+S+"</div>"}else"Sculpt"===_o?gt.innerHTML=a+h
:"Rig"===_o?(function(){
  var bones=o.objects.filter(function(b){return"bone"===b.type});
  if(n&&"bone"===n.type)__rigState.lastSelectedBoneId=n.id;var selBone=(n&&"bone"===n.type?n:null)||bones.find(function(b){return b.id===__rigState.lastSelectedBoneId})||bones.find(function(b){return b.id===__rigState.activeWeightBoneId})||bones[0]||null;
  if(selBone&&!__rigState.activeWeightBoneId)__rigState.activeWeightBoneId=selBone.id;
  var curTool=e(De).current;
  var modeBar='<div class="ap-crossover-bar rig-sub-nav" data-testid="rig-mode-bar">'
    +'<button class="ap-cross-pill '+("edit"===__rigState.mode?"on":"")+'" data-rig-mode="edit" data-testid="rig-mode-edit">'+STUDIO_ICONS.rig_mode_edit+'<span>Edit Bones</span></button>'
    +'<button class="ap-cross-pill '+("pose"===__rigState.mode?"on":"")+'" data-rig-mode="pose" data-testid="rig-mode-pose">'+STUDIO_ICONS.rig_mode_pose+'<span>Pose Mode</span></button>'
    +'<button class="ap-cross-pill '+("weight"===__rigState.mode?"on":"")+'" data-rig-mode="weight" data-testid="rig-mode-weight">'+STUDIO_ICONS.rig_mode_wp+'<span>Weight Paint</span></button>'
    +'<button class="ap-cross-pill '+(__rigState.xray?"on":"")+'" data-rig-act="toggle-xray" data-testid="rig-xray" title="Show bones in front of mesh (X-Ray)">'+STUDIO_ICONS.rig_xray+'<span>X-Ray</span></button>'
    +'<button class="ap-cross-pill '+(__rigState.showNames?"on":"")+'" data-rig-act="toggle-names" data-testid="rig-names" title="Show bone names">'+STUDIO_ICONS.rig_names+'<span>Names</span></button>'
    +'<button class="ap-cross-pill '+(__rigState.multiSelect?"on":"")+'" data-rig-act="toggle-multisel" data-testid="rig-multisel" title="Touch Multi-Bone Selection">'+STUDIO_ICONS.rig_multisel+'<span>Multi-Sel</span></button>'
    +'<button class="ap-cross-pill '+(0===__rigState.activeLayer?"on":"")+'" data-rig-layer="0" title="Show All Bone Layers">'+STUDIO_ICONS.rig_layer+'<span>All ('+bones.length+')</span></button>'
    +'<button class="ap-cross-pill '+(1===__rigState.activeLayer?"on":"")+'" data-rig-layer="1" title="Layer 1: Core/Spine">'+STUDIO_ICONS.rig_layer+'<span>L1:Core</span></button>'
    +'<button class="ap-cross-pill '+(2===__rigState.activeLayer?"on":"")+'" data-rig-layer="2" title="Layer 2: Limbs">'+STUDIO_ICONS.rig_layer+'<span>L2:Limb</span></button>'
    +'<button class="ap-cross-pill '+(3===__rigState.activeLayer?"on":"")+'" data-rig-layer="3" title="Layer 3: IK/Ctrl">'+STUDIO_ICONS.rig_layer+'<span>L3:IK</span></button>'
    +'</div>';

  var drawerHtml="";
  var bodyHtml="";

  if("edit"===__rigState.mode){
    if(selBone){
      drawerHtml='<div class="rig-header-bar" data-testid="rig-edit-info">'
        +'<span>Active: <strong style="color:#3ddbb0">'+selBone.name+'</strong></span>'
        +'<span>Parent: <strong>'+(selBone.parent?(o.objects.find(function(x){return x.id===selBone.parent})?.name||"None"):"Root")+'</strong>'+(selBone.connected?" (Connected)":" (Offset)")+'</span>'
        +'<span>Layer: L'+(selBone.boneLayer||1)+'</span>'
        +'<button class="pa" data-rig-act="cycle-bone-layer" style="height:24px;padding:0 7px;">'+STUDIO_ICONS.rig_layer+'<span>Move Layer</span></button>'
        +'<button class="pa" data-rig-act="toggle-bone-hide" style="height:24px;padding:0 7px;">'+STUDIO_ICONS.cam_view+'<span>'+(selBone.visible?"Hide Bone":"Show Bone")+'</span></button>'
        +'</div>';
    }
    bodyHtml='<div class="ap" data-testid="rig-edit-tools">'
      +'<span class="studio-sep"></span>'
      +'<button class="pa" data-rig-act="add-single-bone" data-testid="rig-add-bone" title="Add Single Bone at Cursor/Origin">'+STUDIO_ICONS.rig_add_bone+'<span>Add Bone</span></button>'
      +'<button class="pa" data-rig-act="add-biped" data-testid="rig-add-biped" title="Create Basic Human / Biped Skeleton">'+STUDIO_ICONS.rig_biped+'<span>Biped Rig</span></button>'
      +'<button class="pa" data-rig-act="add-chain" data-testid="rig-add-chain" title="Add 3-Bone Connected Chain">'+STUDIO_ICONS.rig_chain+'<span>3-Bone Chain</span></button>'
      +'<button class="pa" data-rig-act="add-demo-char" data-testid="rig-add-demo" title="Spawn Character Mesh + Rig + Automatic Weights">'+STUDIO_ICONS.rig_demo_char+'<span>Demo Char+Rig</span></button>'
      +'<span class="studio-sep"></span>'
      +'<button class="pa" data-rig-act="extrude-bone" data-testid="rig-extrude" title="Extrude New Bone from Selected Bone Tail">'+STUDIO_ICONS.rig_extrude+'<span>Extrude Bone</span></button>'
      +'<button class="pa" data-rig-act="subdivide-bone" data-testid="rig-subdivide" title="Split Bone in Two Connected Bones">'+STUDIO_ICONS.rig_subdivide+'<span>Subdivide</span></button>'
      +'<button class="pa" data-rig-act="duplicate-bone" data-testid="rig-duplicate" title="Duplicate Selected Bone(s)">'+s.duplicate+'<span>Duplicate</span></button>'
      +'<button class="pa" data-rig-act="delete-bone" data-testid="rig-delete" title="Delete Selected Bone(s)">'+s.trash+'<span>Delete Bone</span></button>'
      +'<span class="studio-sep"></span>'
      +'<button class="pa '+("move"===curTool?"on":"")+'" data-rig-tf="move" data-testid="rig-move">'+s.move+'<span>Move</span></button>'
      +'<button class="pa '+("rotate"===curTool?"on":"")+'" data-rig-tf="rotate" data-testid="rig-rotate">'+s.rotate+'<span>Rotate</span></button>'
      +'<button class="pa '+("scale"===curTool?"on":"")+'" data-rig-tf="scale" data-testid="rig-scale">'+s.scale+'<span>Scale</span></button>'
      +'<span class="studio-sep"></span>'
      +'<button class="pa" data-rig-act="parent-connected" data-testid="rig-parent-conn" title="Parent Bone (Connected to Tail)">'+STUDIO_ICONS.rig_parent_conn+'<span>Parent (Conn)</span></button>'
      +'<button class="pa" data-rig-act="parent-offset" data-testid="rig-parent-offset" title="Parent Bone (Keep Offset)">'+STUDIO_ICONS.rig_parent_off+'<span>Parent (Offset)</span></button>'
      +'<button class="pa '+(selBone&&selBone.connected?"on":"")+'" data-rig-act="toggle-connect" data-testid="rig-toggle-conn" title="Connect or Disconnect Bone from Parent Tail">'+STUDIO_ICONS.rig_conn+'<span>'+(selBone&&selBone.connected?"Disconnect":"Connect")+'</span></button>'
      +'<button class="pa" data-rig-act="clear-parent" data-testid="rig-clear-parent" title="Clear Bone Parent">'+STUDIO_ICONS.rig_unparent+'<span>Clear Parent</span></button>'
      +'<button class="pa" data-rig-act="flip-bone" data-testid="rig-flip-dir" title="Switch Bone Direction (Flip Head/Tail)">'+STUDIO_ICONS.rig_flip+'<span>Flip Dir</span></button>'
      +'<button class="pa" data-rig-act="recalc-roll" data-testid="rig-recalc-roll" title="Recalculate Bone Roll">'+STUDIO_ICONS.rig_roll+'<span>Recalc Roll</span></button>'
      +'<span class="studio-sep"></span>'
      +'<button class="pa" data-rig-act="symmetrize" data-testid="rig-symmetrize" title="Mirror .L Bones to .R across X Axis">'+STUDIO_ICONS.rig_sym+'<span>Symmetrize .L→.R</span></button>'
      +'<button class="pa" data-rig-act="autoname-lr" data-testid="rig-autoname" title="Auto-Name Bone .L / .R by X Position">'+STUDIO_ICONS.rig_autoname+'<span>Name L/R</span></button>'
      +'<button class="pa" data-rig-act="auto-weights" data-testid="rig-bind-auto" title="Bind Mesh to Armature with Automatic Weights">'+STUDIO_ICONS.wp_auto+'<span>Automatic Weights</span></button>'
      +'</div>';
  } else if("pose"===__rigState.mode){
    if("ik"===__rigState.poseDrawer&&selBone){
      var ikCfg=selBone.ik||{enabled:false,targetId:null,chainLength:2,influence:1};
      var targetOpts='<option value="">-- Select Target --</option>'+o.objects.filter(function(x){return x.id!==selBone.id}).map(function(x){return'<option value="'+x.id+'" '+(ikCfg.targetId===x.id?"selected":"")+'>'+x.name+' ('+x.type+')</option>'}).join("");
      drawerHtml='<div class="rig-header-bar" data-testid="rig-ik-drawer">'
        +'<span style="color:#facc15;font-weight:700;">IK ('+selBone.name+'):</span>'
        +'<select class="rig-select" data-rig-ik-target="true" data-testid="rig-ik-target-select">'+targetOpts+'</select>'
        +'<button class="pa" data-rig-act="ik-spawn-target" data-testid="rig-ik-spawn" style="height:24px;padding:0 8px;">'+STUDIO_ICONS.rig_ik+'<span>New Target</span></button>'
        +'<label class="arange">Chain<input type="range" min="1" max="6" step="1" value="'+(ikCfg.chainLength||2)+'" data-rig-ik-chain="true" data-testid="rig-ik-chain"/><span>'+(ikCfg.chainLength||2)+'</span></label>'
        +'<label class="arange">Inf<input type="range" min="0" max="1" step="0.05" value="'+(ikCfg.influence??1)+'" data-rig-ik-inf="true" data-testid="rig-ik-inf"/><span>'+Math.round(100*(ikCfg.influence??1))+'%</span></label>'
        +'<button class="pa" data-rig-act="ik-remove" data-testid="rig-ik-remove" style="height:24px;padding:0 7px;">'+STUDIO_ICONS.trash+'<span>Remove IK</span></button>'
        +'</div>';
    } else if("constraints"===__rigState.poseDrawer&&selBone){
      var conList=(selBone.constraints||[]).map(function(c){return c.type}).join(", ")||"None";
      var conTargets=o.objects.filter(function(x){return x.id!==selBone.id});
      var defaultTargetId=conTargets[0]?conTargets[0].id:"";
      drawerHtml='<div class="rig-header-bar" data-testid="rig-constraints-drawer">'
        +'<span>Constraints ('+conList+'):</span>'
        +'<button class="pa" data-add-con="copy_rotation" data-con-target="'+defaultTargetId+'" style="height:22px;padding:0 7px;">+ Copy Rot</button>'
        +'<button class="pa" data-add-con="copy_location" data-con-target="'+defaultTargetId+'" style="height:22px;padding:0 7px;">+ Copy Loc</button>'
        +'<button class="pa" data-add-con="limit_rotation" style="height:22px;padding:0 7px;">+ Limit Rot</button>'
        +'<button class="pa" data-add-con="limit_location" style="height:22px;padding:0 7px;">+ Limit Loc</button>'
        +'<button class="pa" data-add-con="child_of" data-con-target="'+defaultTargetId+'" style="height:22px;padding:0 7px;">+ Child Of</button>'
        +'<button class="pa" data-add-con="damped_track" data-con-target="'+defaultTargetId+'" style="height:22px;padding:0 7px;">+ Damped Track</button>'
        +'<button class="pa" data-rig-act="clear-constraints" style="height:22px;padding:0 7px;">Clear</button>'
        +'</div>';
    } else if("poselib"===__rigState.poseDrawer){
      var poseBtns=__rigState.savedPoses.map(function(p,idx){return'<button class="pa" data-apply-pose="'+idx+'" data-testid="pose-preset-'+idx+'" style="height:22px;padding:0 8px;">'+s.tab_rig+'<span>'+p.name+'</span></button>'}).join("");
      drawerHtml='<div class="rig-header-bar" data-testid="rig-poselib-drawer">'
        +'<span>Pose Lib:</span>'
        +'<input type="text" class="rig-input" value="'+__rigState.poseNameDraft+'" data-rig-pose-name="true" placeholder="Pose Name"/>'
        +'<button class="pa" data-rig-act="save-pose" data-testid="rig-save-pose" style="height:24px;padding:0 8px;">'+STUDIO_ICONS.rig_pose_save+'<span>Save Pose</span></button>'
        +poseBtns
        +'</div>';
    }
    bodyHtml='<div class="ap" data-testid="rig-pose-tools">'
      +'<span class="studio-sep"></span>'
      +'<button class="pa '+("rotate"===curTool?"on":"")+'" data-rig-tf="rotate" data-testid="pose-rotate">'+s.rotate+'<span>Rotate Bone</span></button>'
      +'<button class="pa '+("move"===curTool?"on":"")+'" data-rig-tf="move" data-testid="pose-move">'+s.move+'<span>Move Bone</span></button>'
      +'<button class="pa '+("scale"===curTool?"on":"")+'" data-rig-tf="scale" data-testid="pose-scale">'+s.scale+'<span>Scale Bone</span></button>'
      +'<button class="pa '+("local"===e(De).space?"on":"")+'" data-rig-act="toggle-pose-space" data-testid="rig-pose-space">'+STUDIO_ICONS.rig_orient+'<span>Orient: '+("local"===e(De).space?"Local":"Global")+'</span></button>'
      +'<span class="studio-sep"></span>'
      +'<button class="pa" data-rig-act="reset-pose-all" data-testid="rig-reset-pose">'+STUDIO_ICONS.rig_reset_pose+'<span>Reset Pose (All)</span></button>'
      +'<button class="pa" data-rig-act="clear-pose-rot" data-testid="rig-clear-rot">'+STUDIO_ICONS.rig_clear_rot+'<span>Clear Rot</span></button>'
      +'<button class="pa" data-rig-act="clear-pose-loc" data-testid="rig-clear-loc">'+STUDIO_ICONS.rig_clear_loc+'<span>Clear Loc</span></button>'
      +'<button class="pa" data-rig-act="clear-pose-scale" data-testid="rig-clear-scale">'+STUDIO_ICONS.rig_clear_scale+'<span>Clear Scale</span></button>'
      +'<span class="studio-sep"></span>'
      +'<button class="pa '+("ik"===__rigState.poseDrawer?"on":"")+'" data-rig-drawer="ik" data-testid="rig-open-ik">'+STUDIO_ICONS.rig_ik+'<span>IK Constraint</span></button>'
      +'<button class="pa '+("constraints"===__rigState.poseDrawer?"on":"")+'" data-rig-drawer="constraints" data-testid="rig-open-con">'+STUDIO_ICONS.rig_con_add+'<span>Constraints</span></button>'
      +'<button class="pa '+("poselib"===__rigState.poseDrawer?"on":"")+'" data-rig-drawer="poselib" data-testid="rig-open-poselib">'+STUDIO_ICONS.rig_pose_save+'<span>Pose Library</span></button>'
      +'<button class="pa" data-rig-act="auto-weights" data-testid="pose-auto-weights">'+STUDIO_ICONS.wp_auto+'<span>Automatic Weights</span></button>'
      +'</div>';
  } else {
    // Weight Paint Mode
    var boneOpts=bones.map(function(b){return'<option value="'+b.id+'" '+(__rigState.activeWeightBoneId===b.id?"selected":"")+'>'+b.name+(b.boneLocked?" (Locked)":"")+'</option>'}).join("");
    var actBoneObj=bones.find(function(b){return b.id===__rigState.activeWeightBoneId})||selBone;
    drawerHtml='<div class="rig-header-bar" data-testid="rig-weight-header">'
      +'<span>Bone:</span>'
      +'<select class="rig-select" data-rig-wp-bone="true" data-testid="rig-wp-bone-select">'+(boneOpts||'<option value="">No Bones</option>')+'</select>'
      +'<button class="pa '+(actBoneObj&&actBoneObj.boneLocked?"on":"")+'" data-rig-act="toggle-bone-lock" data-testid="rig-wp-lock-bone" style="height:24px;padding:0 7px;">'+STUDIO_ICONS.cam_lock+'<span>'+(actBoneObj&&actBoneObj.boneLocked?"Locked":"Unlock")+'</span></button>'
      +'<label class="arange">Size<input type="range" min="0.05" max="2.5" step="0.05" value="'+__rigState.wpRadius+'" data-rig-wp-rad="true" data-testid="rig-wp-radius"/><span>'+__rigState.wpRadius.toFixed(2)+'</span></label>'
      +'<label class="arange">Str<input type="range" min="0.05" max="1" step="0.05" value="'+__rigState.wpStrength+'" data-rig-wp-str="true" data-testid="rig-wp-strength"/><span>'+Math.round(100*__rigState.wpStrength)+'%</span></label>'
      +'<span class="wp-legend" data-testid="wp-heatmap-legend">0% Blue → 100% Red</span>'
      +'</div>';
    bodyHtml='<div class="ap" data-testid="rig-weight-tools">'
      +'<button class="pa" data-rig-act="auto-weights" data-testid="rig-auto-weights" title="Compute Bone Heat / Distance Automatic Weights">'+STUDIO_ICONS.wp_auto+'<span>Automatic Weights</span></button>'
      +'<span class="studio-sep"></span>'
      +'<button class="pa '+("add"===__rigState.wpBrush?"on":"")+'" data-wp-brush="add" data-testid="wp-brush-add">'+STUDIO_ICONS.wp_add+'<span>Add</span></button>'
      +'<button class="pa '+("subtract"===__rigState.wpBrush?"on":"")+'" data-wp-brush="subtract" data-testid="wp-brush-subtract">'+STUDIO_ICONS.wp_sub+'<span>Subtract</span></button>'
      +'<button class="pa '+("blur"===__rigState.wpBrush?"on":"")+'" data-wp-brush="blur" data-testid="wp-brush-blur">'+STUDIO_ICONS.wp_blur+'<span>Blur Smooth</span></button>'
      +'<button class="pa '+("lighten"===__rigState.wpBrush?"on":"")+'" data-wp-brush="lighten" data-testid="wp-brush-lighten">'+STUDIO_ICONS.wp_light+'<span>Lighten</span></button>'
      +'<button class="pa '+("darken"===__rigState.wpBrush?"on":"")+'" data-wp-brush="darken" data-testid="wp-brush-darken">'+STUDIO_ICONS.wp_dark+'<span>Darken</span></button>'
      +'<span class="studio-sep"></span>'
      +'<button class="pa" data-rig-act="wp-normalize" data-testid="rig-wp-normalize" title="Normalize All Vertex Weights to 100%">'+STUDIO_ICONS.wp_norm+'<span>Normalize</span></button>'
      +'<button class="pa '+(__rigState.wpMirrorX?"on":"")+'" data-rig-act="wp-mirror" data-testid="rig-wp-mirror" title="Mirror Weights Across X Axis">'+STUDIO_ICONS.rig_sym+'<span>Mirror X</span></button>'
      +'<button class="pa" data-rig-act="wp-flood-fill" data-testid="rig-wp-fill" title="Assign 100% Weight of Active Bone to Selected Mesh">'+(s.brush_fill||s.plus)+'<span>Flood Fill</span></button>'
      +'</div>';
  }
  gt.innerHTML=a+modeBar+drawerHtml+bodyHtml;
})()
:"Animate"===_o?(function(){
  var tl=e(de);
  var endF=tl.endFrame||Math.round(tl.duration*tl.frameRate);
  var selObj=n||o.objects[0]||null;
  var curInterp=selObj?de.interpolationOf(selObj.id,"location.x",tl.selectedKey?.time):"bezier";

  var settingsBar='<div class="rig-header-bar" data-testid="anim-settings-bar">'
    +'<button class="pa '+(tl.autoKey?"autokey-on on":"")+'" data-anim-act="toggle-autokey" data-testid="anim-autokey" style="height:22px;padding:0 7px;" title="Auto-Key: Automatically record keyframes when moving/rotating/scaling">'
      +''+STUDIO_ICONS.anim_rec+'<span>Auto-Key</span>'
    +'</button>'
    +'<button class="pa '+(tl.loop?"on":"")+'" data-anim-act="toggle-loop" data-testid="anim-loop" style="height:22px;padding:0 7px;" title="Loop Animation">'+STUDIO_ICONS.anim_loop+'<span>Loop</span></button>'
    +'<button class="pa" data-anim-act="prev-key" data-testid="anim-prev-key" style="height:22px;padding:0 6px;" title="Previous Keyframe">'+STUDIO_ICONS.anim_prev_key+'</button>'
    +'<button class="pa" data-anim-act="next-key" data-testid="anim-next-key" style="height:22px;padding:0 6px;" title="Next Keyframe">'+STUDIO_ICONS.anim_next_key+'</button>'
    +'<select class="rig-select" data-anim-key-channel="true" data-testid="anim-key-channel" title="Keyframe Channels">'
      +'<option value="all" '+("all"===__animState.keyChannelMode?"selected":"")+'>Key: Loc+Rot+Scale</option>'
      +'<option value="loc" '+("loc"===__animState.keyChannelMode?"selected":"")+'>Key: Location</option>'
      +'<option value="rot" '+("rot"===__animState.keyChannelMode?"selected":"")+'>Key: Rotation</option>'
      +'<option value="scale" '+("scale"===__animState.keyChannelMode?"selected":"")+'>Key: Scale</option>'
      +'<option value="avail" '+("avail"===__animState.keyChannelMode?"selected":"")+'>Key: Available</option>'
    +'</select>'
    +'<div class="asg" title="Curve Interpolation">'
      +'<button class="s '+("linear"===curInterp?"on":"")+'" data-anim-interp="linear" data-testid="interp-linear">Linear</button>'
      +'<button class="s '+("bezier"===curInterp?"on":"")+'" data-anim-interp="bezier" data-testid="interp-bezier">Bezier</button>'
      +'<button class="s '+("constant"===curInterp?"on":"")+'" data-anim-interp="constant" data-testid="interp-constant">Step</button>'
    +'</div>'
    +'<select class="rig-select" data-anim-fps="true" data-testid="anim-fps-select" title="Frame Rate (FPS)">'
      +[12,24,30,60].map(function(fps){return'<option value="'+fps+'" '+(tl.frameRate===fps?"selected":"")+'>'+fps+' FPS</option>'}).join("")
    +'</select>'
    +'<span>End:</span><input type="number" class="rig-input" style="width:52px;height:22px;" value="'+endF+'" data-anim-end-frame="true" data-testid="anim-end-frame" title="End Frame"/>'
    +'<button class="pa '+(tl.snapToFrames?"on":"")+'" data-anim-act="toggle-snap-frames" data-testid="anim-snap-frames" style="height:24px;padding:0 7px;">'+STUDIO_ICONS.anim_snap+'<span>Snap</span></button>'
    +'<select class="rig-select" data-track-filter-sel="true" data-testid="anim-track-filter" title="Filter Timeline Tracks">'
      +'<option value="all" '+("all"===__animState.trackFilter?"selected":"")+'>Tracks: All</option>'
      +'<option value="objects" '+("objects"===__animState.trackFilter?"selected":"")+'>Tracks: Objects</option>'
      +'<option value="bones" '+("bones"===__animState.trackFilter?"selected":"")+'>Tracks: Bones</option>'
      +'<option value="cameras" '+("cameras"===__animState.trackFilter?"selected":"")+'>Tracks: Cam/Light</option>'
    +'</select>'
    +'</div>';

  var drawerHtml="";
  if("graph"===__animState.drawer){
    drawerHtml='<div class="rig-header-bar" data-testid="anim-graph-drawer">'
      +'<canvas id="anim-graph-canvas" width="220" height="38" data-testid="anim-graph-canvas" title="Graph Editor F-Curves (Red=X, Green=Y, Blue=Z) · Click to scrub"></canvas>'
      +'<button class="pa '+(tl.easing?"on":"")+'" data-anim-act="toggle-easing" style="height:22px;padding:0 7px;"><span>Ease In/Out</span></button>'
      +'<button class="pa" data-anim-act="scale-keys-half" data-testid="anim-scale-half" style="height:22px;padding:0 7px;"><span>Scale Keys 0.5x</span></button>'
      +'<button class="pa" data-anim-act="scale-keys-double" data-testid="anim-scale-double" style="height:22px;padding:0 7px;"><span>Scale Keys 1.5x</span></button>'
      +'<button class="pa" data-anim-act="frame-all-keys" data-testid="anim-frame-all" style="height:22px;padding:0 7px;"><span>Fit Keys</span></button>'
      +'</div>';
  } else if("onion"===__animState.drawer){
    drawerHtml='<div class="rig-header-bar" data-testid="anim-onion-drawer">'
      +'<button class="pa rig-accent '+(__animState.onionEnabled?"on":"")+'" data-anim-act="toggle-onion" data-testid="anim-onion-toggle" style="height:22px;padding:0 8px;"><span>Onion '+( __animState.onionEnabled?"ON":"OFF")+'</span></button>'
      +'<label class="arange">Ghosts<input type="range" min="1" max="4" step="1" value="'+__animState.onionCount+'" data-onion-count="true" data-testid="anim-onion-count"/><span>'+__animState.onionCount+'</span></label>'
      +'<label class="arange">Step<input type="range" min="1" max="10" step="1" value="'+__animState.onionStepFrames+'" data-onion-step="true" data-testid="anim-onion-step"/><span>'+__animState.onionStepFrames+'f</span></label>'
      +'<label class="arange">Alpha<input type="range" min="0.1" max="0.8" step="0.05" value="'+__animState.onionOpacity+'" data-onion-opacity="true" data-testid="anim-onion-opacity"/><span>'+Math.round(100*__animState.onionOpacity)+'%</span></label>'
      +'</div>';
  }

  var stripHtml='<div class="ap anim" data-testid="anim-panel">'
    +'<button class="pa '+(tl.show?"on":"")+'" id="act-toggle-tl">'+s.tab_animate+'<span>'+(tl.show?"Hide Timeline":"Open Timeline")+'</span></button>'
    +'<button class="pa '+("graph"===__animState.drawer?"on":"")+'" data-anim-drawer="graph" data-testid="anim-open-graph">'+STUDIO_ICONS.anim_graph+'<span>Graph Curves</span></button>'
    +'<button class="pa '+("onion"===__animState.drawer||__animState.onionEnabled?"on":"")+'" data-anim-drawer="onion" data-testid="anim-open-onion">'+STUDIO_ICONS.anim_onion+'<span>Onion Skin</span></button>'
    +'<button class="pa" data-anim-act="key-all-bones" data-testid="anim-key-armature">'+STUDIO_ICONS.anim_key_arm+'<span>Key Armature</span></button>'
    +'<button class="pa" data-anim-act="copy-bone-pose" data-testid="anim-copy-pose">'+STUDIO_ICONS.copy+'<span>Copy Pose</span></button>'
    +'<button class="pa" data-anim-act="paste-flipped-pose" data-testid="anim-paste-flipped">'+STUDIO_ICONS.rig_sym+'<span>Paste Flipped (.L↔.R)</span></button>'
    +'<button class="pa" data-anim-act="gen-walk-cycle" data-testid="anim-walk-cycle">'+STUDIO_ICONS.anim_walk+'<span>Auto Walk Cycle</span></button>'
    +'<button class="pa" id="act-bake-phys">'+STUDIO_ICONS.anim_bake+'<span>Bake Physics</span></button>'
    +'<button class="pa" data-cmd="spin">'+STUDIO_ICONS.anim_spin+'<span>Driver: Spin</span></button>'
    +'<button class="pa" data-cmd="bounce">'+STUDIO_ICONS.anim_bounce+'<span>Driver: Bounce</span></button>'
    +'</div>';

  gt.innerHTML=a+settingsBar+drawerHtml+stripHtml;
  if("graph"===__animState.drawer)setTimeout(__drawGraphEditorCanvas,0);
})()
:"Look"===_o?(function(){
  var targetMesh=n&&!n.type.startsWith("light")&&!n.type.startsWith("camera")&&"bone"!==n.type?n:o.objects.find(function(x){return!x.type.startsWith("light")&&!x.type.startsWith("camera")&&"bone"!==x.type})||n;
  var slots=targetMesh?__ensureMaterialSlots(targetMesh):[];
  if(__lookState.activeSlotIdx>=slots.length)__lookState.activeSlotIdx=0;
  var activeSlot=slots[__lookState.activeSlotIdx]||{name:"Default",color:targetMesh?targetMesh.color:"#ffffff",emissive:"#000000",emissiveStrength:1,metalness:0.04,roughness:0.36,specular:0.5,normalStrength:1,opacity:1,blendMode:"blend",uvRepeat:1,uvScaleY:1,uvOffsetX:0,uvOffsetY:0,uvRotation:0,texMapping:0,texStrength:1};

  var lookNav='<div class="ap-crossover-bar look-sub-nav" data-testid="look-mode-bar">'
    +'<button class="ap-cross-pill '+("material"===__lookState.tab?"on":"")+'" data-look-tab="material" data-testid="look-tab-material">'+STUDIO_ICONS.look_mat+'<span>Material</span></button>'
    +'<button class="ap-cross-pill '+("texture"===__lookState.tab?"on":"")+'" data-look-tab="texture" data-testid="look-tab-texture">'+STUDIO_ICONS.look_tex+'<span>Texture</span></button>'
    +'<button class="ap-cross-pill '+("lighting"===__lookState.tab?"on":"")+'" data-look-tab="lighting" data-testid="look-tab-lighting">'+STUDIO_ICONS.look_light+'<span>Lighting</span></button>'
    +'<button class="ap-cross-pill '+("camera"===__lookState.tab?"on":"")+'" data-look-tab="camera" data-testid="look-tab-camera">'+STUDIO_ICONS.look_cam+'<span>Camera</span></button>'
    +'<button class="ap-cross-pill '+("render"===__lookState.tab?"on":"")+'" data-look-tab="render" data-testid="look-tab-render">'+STUDIO_ICONS.look_ren+'<span>Render</span></button>'
    +'<span style="margin-left:auto;font:600 10px Inter,sans-serif;color:#94a3b8;padding:0 6px;white-space:nowrap;">Editing: <strong style="color:#3ddbb0">'+(n?n.name:(targetMesh?targetMesh.name:"Scene"))+'</strong></span>'
    +'</div>';

  var secHtml="";
  if("material"===__lookState.tab){
    var slotOpts=slots.map(function(sl,idx){return'<option value="'+idx+'" '+(__lookState.activeSlotIdx===idx?"selected":"")+'>Slot '+(idx+1)+': '+(sl.name||"Material")+'</option>'}).join("");
    var swatches=["#ffffff","#f87171","#fbbf24","#3ddbb0","#60a5fa","#c084fc"].map(function(hex){
      return'<button type="button" class="look-swatch '+(activeSlot.color?.toLowerCase()===hex?"on":"")+'" data-look-swatch="'+hex+'" style="background:'+hex+'" title="'+hex+'"></button>';
    }).join("");
    var filteredPresets=Y.filter(function(pr){return"All"===__lookState.matGroupFilter||pr.group===__lookState.matGroupFilter}).map(function(e){
      var on=activeSlot.presetId===e.id?"on":"",th="";
      try{th=K_thumb(e)}catch(err){}
      var bg=th?"background-image:url('"+th+"');background-size:cover;":"background:"+e.color+";";
      return'<button class="ml-preset '+on+'" data-preset="'+e.id+'" data-testid="preset-'+e.id+'" title="'+e.name+" ("+e.group+')"><span class="ml-swatch" style="'+bg+'box-shadow:inset 0 0 0 1px rgba(255,255,255,0.2), 0 2px 4px rgba(0,0,0,0.4);"></span><span class="ml-name">'+e.name+"</span></button>";
    }).join("");

    secHtml='<div class="rig-header-bar" data-testid="look-material-header">'
      +'<div class="mat-sphere-wrap" title="Real-Time Material Preview Sphere"><canvas id="mat-preview-sphere" width="34" height="34" data-testid="mat-preview-sphere"></canvas><span>'+(activeSlot.name||"Mat")+'</span></div>'
      +'<select class="rig-select" data-look-mat-slot="true" data-testid="look-mat-slot">'+slotOpts+'</select>'
      +'<button class="pa" data-look-act="new-mat-slot" data-testid="look-new-mat" style="height:26px;padding:0 8px;">'+STUDIO_ICONS.mat_new+'<span>New Mat</span></button>'
      +'<button class="pa" data-look-act="assign-mat-slot" data-testid="look-assign-mat" style="height:26px;padding:0 8px;">'+STUDIO_ICONS.mat_assign+'<span>Assign</span></button>'
      +'<span>Blend:</span>'
      +'<select class="rig-select" data-look-blend-mode="true" data-testid="look-blend-mode">'
        +'<option value="opaque" '+("opaque"===activeSlot.blendMode?"selected":"")+'>Opaque</option>'
        +'<option value="blend" '+((!activeSlot.blendMode||"blend"===activeSlot.blendMode)?"selected":"")+'>Alpha Blend</option>'
        +'<option value="clip" '+("clip"===activeSlot.blendMode?"selected":"")+'>Alpha Clip</option>'
      +'</select>'
      +'</div>'
      +'<div class="ap" data-testid="look-material-controls">'
        +'<span class="studio-sep"></span>'
        +'<input class="scolor" type="color" value="'+(activeSlot.color||"#ffffff")+'" id="col-base" data-look-base-color="true" data-testid="look-base-color" title="Base Color"/>'
        +'<div class="look-swatch-row">'+swatches+'</div>'
        +'<label class="arange">Metal<input type="range" min="0" max="1" step="0.02" value="'+(activeSlot.metalness??0.04)+'" id="rng-metal" data-look-metal="true" data-testid="look-metal"/><span>'+Math.round(100*(activeSlot.metalness??0.04))+'%</span></label>'
        +'<label class="arange">Rough<input type="range" min="0" max="1" step="0.02" value="'+(activeSlot.roughness??0.36)+'" id="rng-rough" data-look-rough="true" data-testid="look-rough"/><span>'+Math.round(100*(activeSlot.roughness??0.36))+'%</span></label>'
        +'<label class="arange">Spec<input type="range" min="0" max="1" step="0.02" value="'+(activeSlot.specular??0.5)+'" data-look-spec="true" data-testid="look-spec"/><span>'+Math.round(100*(activeSlot.specular??0.5))+'%</span></label>'
        +'<span class="studio-sep"></span>'
        +'<input class="scolor" type="color" value="'+(activeSlot.emissive||"#000000")+'" data-look-emis-color="true" data-testid="look-emis-color" title="Emission Color"/>'
        +'<label class="arange">Emit<input type="range" min="0" max="5" step="0.1" value="'+(activeSlot.emissiveStrength??1)+'" data-look-emis-str="true" data-testid="look-emis-str"/><span>'+(activeSlot.emissiveStrength??1).toFixed(1)+'</span></label>'
        +'<label class="arange">Alpha<input type="range" min="0.05" max="1" step="0.05" value="'+(activeSlot.opacity??1)+'" id="rng-opacity" data-look-opacity="true" data-testid="look-opacity"/><span>'+Math.round(100*(activeSlot.opacity??1))+'%</span></label>'
        +'<label class="arange">Normal<input type="range" min="0" max="3" step="0.1" value="'+(activeSlot.normalStrength??1)+'" data-look-norm-str="true" data-testid="look-norm-str"/><span>'+(activeSlot.normalStrength??1).toFixed(1)+'</span></label>'
      +'</div>'
      +'<div class="ml" data-testid="material-library" style="height:'+mo+'px">'
        +'<div class="ml-head">'
          +'<span class="ml-title">Material &amp; Texture Presets (28 PBR)</span>'
          +'<div class="asg">'
            +'<button class="s '+("All"===__lookState.matGroupFilter?"on":"")+'" data-mat-grp="All">All</button>'
            +'<button class="s '+("Metals"===__lookState.matGroupFilter?"on":"")+'" data-mat-grp="Metals">Metals</button>'
            +'<button class="s '+("Wood, Stone & Nature"===__lookState.matGroupFilter?"on":"")+'" data-mat-grp="Wood, Stone & Nature">Nature</button>'
            +'<button class="s '+("Glass, Neon & Stylized"===__lookState.matGroupFilter?"on":"")+'" data-mat-grp="Glass, Neon & Stylized">Stylized</button>'
          +'</div>'
          +(C?'<span class="ml-badge" data-testid="portion-badge">Applying to Selected Faces</span>':"")
        +'</div>'
        +'<div class="ml-grid">'+filteredPresets+'</div>'
      +'</div>';
  } else if("texture"===__lookState.tab){
    var ch=__lookState.texChannel;
    secHtml='<div class="rig-header-bar" data-testid="look-texture-header">'
      +'<span>Slot:</span>'
      +'<div class="asg">'
        +'<button class="s '+("base"===ch?"on":"")+'" data-tex-channel="base" data-testid="tex-slot-base">Base Color</button>'
        +'<button class="s '+("roughness"===ch?"on":"")+'" data-tex-channel="roughness" data-testid="tex-slot-roughness">Roughness</button>'
        +'<button class="s '+("metallic"===ch?"on":"")+'" data-tex-channel="metallic" data-testid="tex-slot-metallic">Metallic</button>'
        +'<button class="s '+("normal"===ch?"on":"")+'" data-tex-channel="normal" data-testid="tex-slot-normal">Normal</button>'
        +'<button class="s '+("emission"===ch?"on":"")+'" data-tex-channel="emission" data-testid="tex-slot-emission">Emission</button>'
      +'</div>'
      +'<span>Mapping:</span>'
      +'<select class="rig-select" data-tex-mapping="true" data-testid="look-tex-mapping">'
        +'<option value="0" '+(0===(activeSlot.texMapping||0)?"selected":"")+'>UV Coordinates</option>'
        +'<option value="1" '+(1===(activeSlot.texMapping||0)?"selected":"")+'>Generated (Local)</option>'
        +'<option value="2" '+(2===(activeSlot.texMapping||0)?"selected":"")+'>Object (World)</option>'
      +'</select>'
      +'</div>'
      +'<div class="ap" data-testid="look-texture-sources">'
        +'<button class="pa" data-look-act="upload-tex-image" data-testid="look-upload-tex">'+STUDIO_ICONS.tex_upload+'<span>Upload Image</span></button>'
        +'<button class="pa" data-look-act="clear-tex-channel" data-testid="look-clear-tex">'+STUDIO_ICONS.tex_clear+'<span>Clear Texture</span></button>'
        +'<span class="studio-sep"></span>'
        +'<button class="pa" data-proc-tex="checker" data-testid="proc-tex-checker">'+STUDIO_ICONS.tex_checker+'<span>Checker</span></button>'
        +'<button class="pa" data-proc-tex="noise" data-testid="proc-tex-noise">'+STUDIO_ICONS.tex_noise+'<span>Noise</span></button>'
        +'<button class="pa" data-proc-tex="gradient" data-testid="proc-tex-gradient">'+STUDIO_ICONS.tex_gradient+'<span>Gradient</span></button>'
        +'<button class="pa" data-proc-tex="brick" data-testid="proc-tex-brick">'+STUDIO_ICONS.tex_brick+'<span>Brick</span></button>'
        +'<button class="pa" data-proc-tex="wood" data-testid="proc-tex-wood">'+STUDIO_ICONS.tex_wood+'<span>Wood</span></button>'
        +'<button class="pa" data-proc-tex="marble" data-testid="proc-tex-marble">'+STUDIO_ICONS.tex_marble+'<span>Marble</span></button>'
        +'<button class="pa" data-proc-tex="carbon" data-testid="proc-tex-carbon">'+STUDIO_ICONS.tex_carbon+'<span>Carbon</span></button>'
      +'</div>'
      +'<div class="sculpt-sliders-row" data-testid="look-texture-transforms">'
        +'<label class="arange">Scale X<input type="range" min="0.2" max="10" step="0.2" value="'+(activeSlot.uvRepeat??1)+'" data-tex-scale-x="true" data-testid="look-tex-scalex"/><span>'+(activeSlot.uvRepeat??1).toFixed(1)+'</span></label>'
        +'<label class="arange">Scale Y<input type="range" min="0.2" max="10" step="0.2" value="'+(activeSlot.uvScaleY??activeSlot.uvRepeat??1)+'" data-tex-scale-y="true" data-testid="look-tex-scaley"/><span>'+(activeSlot.uvScaleY??activeSlot.uvRepeat??1).toFixed(1)+'</span></label>'
        +'<label class="arange">Loc X<input type="range" min="-2" max="2" step="0.05" value="'+(activeSlot.uvOffsetX??0)+'" data-tex-off-x="true" data-testid="look-tex-offx"/><span>'+(activeSlot.uvOffsetX??0).toFixed(2)+'</span></label>'
        +'<label class="arange">Loc Y<input type="range" min="-2" max="2" step="0.05" value="'+(activeSlot.uvOffsetY??0)+'" data-tex-off-y="true" data-testid="look-tex-offy"/><span>'+(activeSlot.uvOffsetY??0).toFixed(2)+'</span></label>'
        +'<label class="arange">Rot°<input type="range" min="-180" max="180" step="5" value="'+(activeSlot.uvRotation??0)+'" data-tex-rot="true" data-testid="look-tex-rot"/><span>'+Math.round(activeSlot.uvRotation??0)+'°</span></label>'
        +'<label class="arange">Influence<input type="range" min="0" max="1" step="0.05" value="'+(activeSlot.texStrength??1)+'" data-tex-strength="true" data-testid="look-tex-strength"/><span>'+Math.round(100*(activeSlot.texStrength??1))+'%</span></label>'
      +'</div>';
  } else if("lighting"===__lookState.tab){
    var lights=o.objects.filter(function(x){return x.type.startsWith("light")});
    var selLight=(n&&n.type.startsWith("light")?n:null)||lights[0]||null;
    var lProps=selLight?.lightProps||{type:"point",intensity:1.2,color:selLight?.color||"#ffffff",distance:10,angle:Math.PI/4};
    var lType=lProps.type||(selLight?selLight.type.replace("light_",""):"point");
    var lightOpts=lights.length?lights.map(function(l){return'<option value="'+l.id+'" '+(selLight&&selLight.id===l.id?"selected":"")+'>'+l.name+' ('+l.type.replace("light_","")+')</option>'}).join(""):'<option value="">Studio Key Light (Default)</option>';

    secHtml='<div class="rig-header-bar" data-testid="look-lighting-header">'
      +'<span>Light:</span>'
      +'<select class="rig-select" data-look-light-select="true" data-testid="look-light-select">'+lightOpts+'</select>'
      +'<button class="pa '+("point"===lType?"on":"")+'" data-add-light-type="light_point" data-testid="look-add-point" style="height:26px;padding:0 8px;">'+STUDIO_ICONS.light_point+'<span>Point</span></button>'
      +'<button class="pa '+("sun"===lType?"on":"")+'" data-add-light-type="light_sun" data-testid="look-add-sun" style="height:26px;padding:0 8px;">'+STUDIO_ICONS.light_sun+'<span>Sun</span></button>'
      +'<button class="pa '+("spot"===lType?"on":"")+'" data-add-light-type="light_spot" data-testid="look-add-spot" style="height:26px;padding:0 8px;">'+STUDIO_ICONS.light_spot+'<span>Spot</span></button>'
      +'<button class="pa '+("area"===lType?"on":"")+'" data-add-light-type="light_area" data-testid="look-add-area" style="height:26px;padding:0 8px;">'+STUDIO_ICONS.light_area+'<span>Area</span></button>'
      +'</div>'
      +'<div class="ap" data-testid="look-lighting-controls">'
        +'<span class="studio-sep"></span>'
        +'<input class="scolor" type="color" value="'+(lProps.color||"#ffffff")+'" data-light-color="true" data-testid="look-light-color" title="Light Color"/>'
        +'<label class="arange">Power<input type="range" min="0" max="5" step="0.1" value="'+(lProps.intensity??1.2)+'" data-light-power="true" data-testid="look-light-power"/><span>'+(lProps.intensity??1.2).toFixed(1)+'</span></label>'
        +'<label class="arange">Radius<input type="range" min="0.5" max="25" step="0.5" value="'+(lProps.distance??10)+'" data-light-radius="true" data-testid="look-light-radius"/><span>'+(lProps.distance??10)+'m</span></label>'
        +'<label class="arange">Angle<input type="range" min="10" max="120" step="2" value="'+Math.round((lProps.angle||Math.PI/4)*180/Math.PI)+'" data-light-angle="true" data-testid="look-light-angle"/><span>'+Math.round((lProps.angle||Math.PI/4)*180/Math.PI)+'°</span></label>'
        +'<button class="pa '+(__lookState.castShadows?"on":"")+'" data-look-act="toggle-shadows" data-testid="look-light-shadows">'+STUDIO_ICONS.light_shadow+'<span>Cast Shadows</span></button>'
      +'</div>'
      +'<div class="sculpt-sliders-row" data-testid="look-world-lighting">'
        +'<span class="studio-sep"></span>'
        +'<input class="scolor" type="color" value="'+__lookState.bgColor+'" data-world-bg="true" data-testid="look-world-bg" title="World Background Color"/>'
        +'<label class="arange">Ambient<input type="range" min="0" max="1.5" step="0.05" value="'+__lookState.ambientStrength+'" data-world-ambient="true" data-testid="look-world-ambient"/><span>'+Math.round(100*__lookState.ambientStrength)+'%</span></label>'
        +'<select class="rig-select" data-world-hdri="true" data-testid="look-world-hdri">'
          +'<option value="studio" '+("studio"===__lookState.hdriPreset?"selected":"")+'>HDRI: Studio Softbox</option>'
          +'<option value="sunset" '+("sunset"===__lookState.hdriPreset?"selected":"")+'>HDRI: Warm Sunset</option>'
          +'<option value="neon" '+("neon"===__lookState.hdriPreset?"selected":"")+'>HDRI: Cyberpunk Neon</option>'
          +'<option value="daylight" '+("daylight"===__lookState.hdriPreset?"selected":"")+'>HDRI: Forest Daylight</option>'
          +'<option value="night" '+("night"===__lookState.hdriPreset?"selected":"")+'>HDRI: Moonlit Night</option>'
        +'</select>'
        +'<label class="arange">Env Str<input type="range" min="0.1" max="2" step="0.05" value="'+__lookState.envStrength+'" data-world-env-str="true" data-testid="look-world-env-str"/><span>'+Math.round(100*__lookState.envStrength)+'%</span></label>'
      +'</div>';
  } else if("camera"===__lookState.tab){
    var cams=o.objects.filter(function(x){return x.type.startsWith("camera")});
    var selCam=(n&&n.type.startsWith("camera")?n:null)||cams[0]||null;
    var cProps=selCam?.cameraProps||{fov:50,near:0.05,far:260,ortho:false,orthoScale:4};
    var focalMm=Math.round(36/(2*Math.tan((cProps.fov||50)*Math.PI/360)));
    var rollDeg=selCam?Math.round((selCam.rotation[2]||0)*180/Math.PI):0;
    var camOpts=cams.length?cams.map(function(cObj){return'<option value="'+cObj.id+'" '+(selCam&&selCam.id===cObj.id?"selected":"")+'>'+cObj.name+'</option>'}).join(""):'<option value="">Viewport Camera</option>';

    secHtml='<div class="rig-header-bar" data-testid="look-camera-header">'
      +'<span>Cam:</span>'
      +'<select class="rig-select" data-look-cam-select="true" data-testid="look-cam-select">'+camOpts+'</select>'
      +'<button class="pa" data-look-act="add-camera" data-testid="look-add-camera" style="height:26px;padding:0 8px;">'+STUDIO_ICONS.cam_add+'<span>Add Camera</span></button>'
      +'<button class="pa '+(A.viewThroughCamera?"on":"")+'" data-look-act="toggle-cam-view" data-testid="look-cam-view" style="height:22px;padding:0 7px;">'+s.cam_view+'<span>Camera View</span></button>'
      +'<button class="pa" data-look-act="align-cam-to-view" data-testid="look-cam-to-view" style="height:26px;padding:0 8px;" title="Align Active Camera to Current Viewport">'+STUDIO_ICONS.cam_align+'<span>Cam to View</span></button>'
      +'<button class="pa '+(__lookState.lockCamToView?"on":"")+'" data-look-act="toggle-lock-cam" data-testid="look-lock-cam" style="height:26px;padding:0 8px;">'+STUDIO_ICONS.cam_lock+'<span>Lock to View</span></button>'
      +'<button class="pa '+(cProps.ortho?"on":"")+'" data-look-act="toggle-cam-ortho" data-testid="look-cam-ortho" style="height:26px;padding:0 8px;">'+STUDIO_ICONS.cam_ortho+'<span>'+(cProps.ortho?"Ortho":"Persp")+'</span></button>'
      +'</div>'
      +'<div class="ap" data-testid="look-camera-controls">'
        +'<label class="arange">Focal<input type="range" min="15" max="135" step="1" value="'+focalMm+'" data-cam-focal="true" data-testid="look-cam-focal"/><span>'+focalMm+'mm</span></label>'
        +'<label class="arange">Ortho<input type="range" min="1" max="15" step="0.2" value="'+(cProps.orthoScale??4)+'" data-cam-ortho-scale="true" data-testid="look-cam-orthoscale"/><span>'+(cProps.orthoScale??4).toFixed(1)+'</span></label>'
        +'<label class="arange">Clip Start<input type="range" min="0.01" max="2" step="0.02" value="'+(cProps.near??0.05)+'" data-cam-clip-start="true" data-testid="look-cam-clip-start"/><span>'+(cProps.near??0.05).toFixed(2)+'m</span></label>'
        +'<label class="arange">Clip End<input type="range" min="20" max="500" step="10" value="'+(cProps.far??260)+'" data-cam-clip-end="true" data-testid="look-cam-clip-end"/><span>'+(cProps.far??260)+'m</span></label>'
        +'<label class="arange">Roll<input type="range" min="-180" max="180" step="1" value="'+rollDeg+'" data-cam-roll="true" data-testid="look-cam-roll"/><span>'+rollDeg+'°</span></label>'
      +'</div>'
      +'<div class="sculpt-sliders-row" data-testid="look-camera-dof">'
        +'<button class="pa '+(__lookState.dofEnabled?"on":"")+'" data-look-act="toggle-dof" data-testid="look-dof-toggle">'+STUDIO_ICONS.cam_dof+'<span>Depth of Field (DOF)</span></button>'
        +'<label class="arange">Focus Dist<input type="range" min="0.5" max="25" step="0.2" value="'+__lookState.dofDistance+'" data-cam-dof-dist="true" data-testid="look-dof-dist"/><span>'+__lookState.dofDistance.toFixed(1)+'m</span></label>'
        +'<label class="arange">Aperture<input type="range" min="1.2" max="16" step="0.2" value="'+__lookState.dofFstop+'" data-cam-dof-fstop="true" data-testid="look-dof-fstop"/><span>f/'+__lookState.dofFstop.toFixed(1)+'</span></label>'
      +'</div>';
  } else {
    // 5. Render / Display Settings
    secHtml='<div class="rig-header-bar" data-testid="look-render-header">'
      +'<span>Shading:</span>'
      +'<div class="asg">'+I+'</div>'
      +'<button class="pa '+(A.xray?"on":"")+'" id="btn-xray">'+STUDIO_ICONS.rig_xray+'<span>X-Ray</span></button>'
      +'<button class="pa '+(A.overlays.grid?"on":"")+'" id="act-ov-grid">'+STUDIO_ICONS.ren_grid+'<span>Grid</span></button>'
      +'<button class="pa '+(A.overlays.axes?"on":"")+'" id="act-ov-axes">'+STUDIO_ICONS.ren_axes+'<span>Axes</span></button>'
      +'<button class="pa '+(A.cursorVisible?"on":"")+'" id="act-ov-cursor">'+s.target+'<span>3D Cursor</span></button>'
      +'</div>'
      +'<div class="ap" data-testid="look-render-fx">'
        +'<button class="pa '+(__lookState.castShadows?"on":"")+'" data-look-act="toggle-shadows" data-testid="render-shadows">'+STUDIO_ICONS.light_shadow+'<span>Shadows</span></button>'
        +'<button class="pa '+(__lookState.aoEnabled?"on":"")+'" data-look-act="toggle-ao" data-testid="render-ao">'+STUDIO_ICONS.wp_dark+'<span>Ambient Occlusion</span></button>'
        +'<label class="arange">AO<input type="range" min="0" max="1" step="0.05" value="'+__lookState.aoStrength+'" data-render-ao-str="true" data-testid="render-ao-str"/><span>'+Math.round(100*__lookState.aoStrength)+'%</span></label>'
        +'<button class="pa '+(__lookState.bloomEnabled?"on":"")+'" data-look-act="toggle-bloom" data-testid="render-bloom">'+STUDIO_ICONS.ren_rendered+'<span>Bloom / Glow</span></button>'
        +'<label class="arange">Bloom<input type="range" min="0" max="1.5" step="0.05" value="'+__lookState.bloomStrength+'" data-render-bloom-str="true" data-testid="render-bloom-str"/><span>'+Math.round(100*__lookState.bloomStrength)+'%</span></label>'
        +'<button class="pa '+(__lookState.aaEnabled?"on":"")+'" data-look-act="toggle-aa" data-testid="render-aa">'+STUDIO_ICONS.ren_matprev+'<span>Anti-Aliasing</span></button>'
      +'</div>'
      +'<div class="sculpt-sliders-row" data-testid="look-render-export">'
        +'<span>Res:</span>'
        +'<select class="rig-select" data-render-res="true" data-testid="render-res-select">'
          +'<option value="1920x1080" '+("1920x1080"===__lookState.renderResolution?"selected":"")+'>1920×1080 (1080p HD)</option>'
          +'<option value="1080x1920" '+("1080x1920"===__lookState.renderResolution?"selected":"")+'>1080×1920 (9:16 Vertical)</option>'
          +'<option value="1080x1080" '+("1080x1080"===__lookState.renderResolution?"selected":"")+'>1080×1080 (1:1 Square)</option>'
          +'<option value="3840x2160" '+("3840x2160"===__lookState.renderResolution?"selected":"")+'>3840×2160 (4K UHD)</option>'
        +'</select>'
        +'<select class="rig-select" data-video-res="true" data-testid="video-res-select" title="Video export resolution">'
          +'<option value="854x480">480p</option>'
          +'<option value="1280x720" '+((__lowEnd?'1280x720':'1920x1080')==='1280x720'?'selected':'')+'>720p</option>'
          +'<option value="1920x1080" '+((__lowEnd?'1280x720':'1920x1080')==='1920x1080'?'selected':'')+'>1080p</option>'
        +'</select>'
        +'<button class="pa" data-look-act="export-video" data-testid="render-export-video">'+STUDIO_ICONS.ren_rendered+'<span>Record Video</span></button>'
        +'<button class="pa" data-look-act="export-png" data-testid="render-export-png">'+STUDIO_ICONS.ren_png+'<span>Render PNG</span></button>'
        +'<button class="pa" data-look-act="export-obj" data-testid="render-export-obj">'+STUDIO_ICONS.ren_obj+'<span>Export OBJ</span></button>'
        +'<button class="pa" data-look-act="export-project" data-testid="render-export-project">'+STUDIO_ICONS.save+'<span>Save Project</span></button>'
      +'</div>';
  }
  gt.innerHTML=a+lookNav+secHtml;
  setTimeout(function(){__drawMaterialPreviewSphere(activeSlot)},0);
})():"Agent"===_o?(gt.innerHTML=""):"Combined"===_o&&(gt.innerHTML=a+'<div class="ap"><span class="studio-sep"></span>'+c+'<span class="studio-sep"></span>'+l+'<span class="studio-sep"></span>'+g+"</div>");gt.querySelectorAll("[data-cross-cat]").forEach((function(e){e.addEventListener("click",(function(){var t=e.getAttribute("data-cross-cat");_o=t,"All"!==t&&(No=t),"Edit"===t?he.setEditMode(!0):he.setEditMode(!1),Vo(),Jo(),_e()}))})),gt.querySelectorAll("[data-add-sub]").forEach((function(e){e.addEventListener("click",(function(){Ro=e.getAttribute("data-add-sub"),Jo()}))})),gt.querySelectorAll("[data-add-prim]").forEach((function(t){t.addEventListener("click",(function(){var o=t.getAttribute("data-add-prim");if("import_device"===o||"import_photo"===o)return void vt?.click();var n=e(le),A=n.cursorVisible&&n.cursorPosition?[...n.cursorPosition]:[0,.5,0];he.addPrimitive(o,A);var s=e(he).selectedId;s&&Q(o)&&de.setClip(s,0,15),-1!==o.indexOf("camera")&&s&&le.setPIPCamera(s,1),De.setTool("move"),le.setGizmoMode("translate"),Go=o,Tt("Added "+o.replace(/^asset_/,"").toUpperCase()+" and switched to Move tool","success"),Jo(),Wt(!0)}))}));var D=function(e,t,o){var n=document.getElementById(e);n&&n.addEventListener("input",(function(){var A=parseFloat(n.value),s=document.getElementById(e+"-num");s&&(s.textContent=n.value);var i={};i[t]=o?o(A):A,he.updateCreationParams(i)}))};D("cprm-radius","radius"),D("cprm-segments","segments",Math.round),D("cprm-rings","rings",Math.round),D("cprm-subdiv","subdivisions",Math.round),D("cprm-height","height"),D("cprm-sizex","sizeX"),D("cprm-sizey","sizeY"),D("cprm-sizez","sizeZ"),D("cprm-tube","tube"),D("cprm-sides","sides",Math.round),D("cprm-outer-r","outerRadius"),D("cprm-inner-r","innerRadius"),D("cprm-intensity","intensity"),D("cprm-dist","radius"),D("cprm-fov","fov"),D("cprm-depth","depth");var L=document.getElementById("cprm-text-val");L&&L.addEventListener("input",(function(){he.updateCreationParams({text:L.value})})),document.getElementById("cprm-close-btn")?.addEventListener("click",(function(){Go=null,Jo()})),document.getElementById("cprm-cam-view-btn")?.addEventListener("click",(function(){var t=e(he);t.selectedId&&(le.setPIPCamera(t.selectedId,1),Tt("Switched view to camera","success"))})),document.getElementById("act-cam-toggle-view")?.addEventListener("click",(function(){var t=e(he).objects.find((function(e){return-1!==e.type.indexOf("camera")}));t?(le.setPIPCamera(t.id,1),Tt("Viewing through camera: "+t.name,"success")):Tt("No camera in scene. Add a camera first.","warning")})),document.getElementById("act-upload-photo")?.addEventListener("click",(function(){vt?.click()})),document.getElementById("act-add-text")?.addEventListener("click",(function(){he.addTextLayer("Text Layer"),Tt("Text layer created on timeline.","success"),Wt(!0)})),document.getElementById("act-upload-3d")?.addEventListener("click",(function(){vt?.click()})),document.getElementById("act-dup")?.addEventListener("click",(function(){he.duplicateSelected()})),document.getElementById("act-del")?.addEventListener("click",(function(){he.deleteSelected()})),gt.querySelectorAll("[data-mirror]").forEach((function(e){e.addEventListener("click",(function(){he.mirrorSelected(e.getAttribute("data-mirror"))}))})),gt.querySelectorAll("[data-shade]").forEach((function(e){e.addEventListener("click",(function(){le.setShadingMode(e.getAttribute("data-shade"))}))})),document.getElementById("btn-xray")?.addEventListener("click",(function(){le.toggleXray()})),document.getElementById("rng-rough")?.addEventListener("input",(function(e){Fo((function(t){he.setMaterial(t.id,{roughness:Number(e.target.value)})}))})),document.getElementById("rng-metal")?.addEventListener("input",(function(e){Fo((function(t){he.setMaterial(t.id,{metalness:Number(e.target.value)})}))})),document.getElementById("rng-opacity")?.addEventListener("input",(function(e){Fo((function(t){he.setMaterial(t.id,{opacity:Number(e.target.value)})}))})),document.getElementById("col-base")?.addEventListener("input",(function(e){Fo((function(t){he.setColor(t.id,e.target.value)}))})),gt.querySelectorAll("[data-brush]").forEach((function(e){e.addEventListener("click",(function(){re.setKind(e.getAttribute("data-brush")),_e()}))})),document.getElementById("rng-b-rad")?.addEventListener("input",(function(e){re.setRadius(Number(e.target.value));var t=document.getElementById("val-b-rad");t&&(t.textContent=Number(e.target.value).toFixed(2))})),document.getElementById("rng-b-str")?.addEventListener("input",(function(e){re.setStrength(Number(e.target.value));var t=document.getElementById("val-b-str");t&&(t.textContent=Math.round(100*Number(e.target.value))+"%")})),document.getElementById("rng-b-hard")?.addEventListener("input",(function(e){re.setHardness(Number(e.target.value));var t=document.getElementById("val-b-hard");t&&(t.textContent=Math.round(100*Number(e.target.value))+"%")})),gt.querySelectorAll("[data-falloff]").forEach((function(e){e.addEventListener("click",(function(){re.setFalloff(e.getAttribute("data-falloff"))}))})),document.getElementById("btn-brush-inv")?.addEventListener("click",(function(){re.toggleInverted()}));var F=document.getElementById("btn-quick-smooth");F&&(F.addEventListener("pointerdown",(function(){re.setQuickSmooth(!0)})),F.addEventListener("pointerup",(function(){re.setQuickSmooth(!1)})),F.addEventListener("pointerleave",(function(){re.setQuickSmooth(!1)}))),gt.querySelectorAll("[data-mask-act]").forEach((function(e){e.addEventListener("click",(function(){var t=e.getAttribute("data-mask-act");Fo((function(e){"invert"===t?he.invertMask(e.id):"clear"===t?he.clearMask(e.id):"blur"===t&&he.blurMask(e.id),Tt("Mask "+t+" applied.","success")}))}))})),gt.querySelectorAll("[data-sym]").forEach((function(e){e.addEventListener("click",(function(){re.toggleSymmetry(e.getAttribute("data-sym"))}))})),document.getElementById("act-bone-chain")?.addEventListener("click",(function(){he.addBoneChain([0,0,0],3,.7),Tt("Created 3-Bone Chain armature.","success")})),document.getElementById("act-bind-skin")?.addEventListener("click",(function(){Fo((function(e){he.bindArmature(e.id),Tt("Bound skin to armature with auto-weights.","success")}))})),document.getElementById("act-weight-paint")?.addEventListener("click",(function(){Tt("Weight Paint Mode Active. Drag across mesh to weight vertices.","info")})),document.getElementById("act-pose-mode")?.addEventListener("click",(function(){Tt("Armature Pose Mode Active.","info")})),document.getElementById("act-clear-pose")?.addEventListener("click",(function(){Fo((function(e){he.setTransform(e.id,{rotation:[0,0,0]}),Tt("Pose reset to rest position.","success")}))})),gt.querySelectorAll("[data-el]").forEach((function(e){e.addEventListener("click",(function(){he.setElementMode(e.getAttribute("data-el"))}))})),gt.querySelectorAll("[data-mop]").forEach((function(e){e.addEventListener("click",(function(){var t=e.getAttribute("data-mop");Fo((function(){var e=he.meshOp(t);e?Tt(e,"warning"):Tt("Applied "+t+" modifier.","success")}))}))})),gt.querySelectorAll("[data-preset]").forEach((function(e){e.addEventListener("click",(function(){var t=e.getAttribute("data-preset");Fo((function(e){he.applyMaterialPreset(e.id,t),Tt("Material applied: "+t,"success")}))}))})),document.getElementById("act-ov-grid")?.addEventListener("click",(function(){le.toggleGrid()})),document.getElementById("act-ov-axes")?.addEventListener("click",(function(){le.toggleAxes()})),document.getElementById("act-ov-cursor")?.addEventListener("click",(function(){le.toggleCursor()})),gt.querySelectorAll("[data-edit-sub]").forEach((function(e){e.addEventListener("click",(function(){Po=e.getAttribute("data-edit-sub"),Jo()}))})),gt.querySelectorAll("[data-edit-qa]").forEach((function(t){t.addEventListener("click",(function(){var o=t.getAttribute("data-edit-qa");if("move"===o)De.setTool("move"),le.setGizmoMode("translate"),To=null,Jo();else if("rotate"===o)De.setTool("rotate"),le.setGizmoMode("rotate"),To=null,Jo();else if("scale"===o)De.setTool("scale"),le.setGizmoMode("scale"),To=null,Jo();else if("extrude"===o||"bevel"===o||"loopcut"===o||"inset"===o||"decimate"===o||"solidify"===o||"smooth"===o||"screw"===o||"array"===o)To=To===o?null:o,Jo();else if("delete"===o){e(he).editMode?(he.meshOp("delete"),Tt("Deleted selected elements.","success")):(he.deleteSelected(),Tt("Deleted selected object.","success"))}else if("duplicate"===o){e(he).editMode?(he.meshOp("duplicate"),Tt("Duplicated geometry. Move it with gizmo.","success")):(he.duplicateSelected(),Tt("Duplicated object.","success"))}}))})),document.getElementById("prm-apply-btn")?.addEventListener("click",(function(){if(To){var e=jo[To]||{};Fo((function(){var t=he.meshOp(To,e);t?Tt(t,"warning"):Tt("Applied "+To+".","success"),To=null,Jo()}))}})),document.getElementById("prm-close-btn")?.addEventListener("click",(function(){To=null,Jo()})),document.getElementById("prm-extrude-val")?.addEventListener("input",(function(e){jo.extrude.amount=Number(e.target.value);var t=document.getElementById("prm-extrude-num");t&&(t.textContent=e.target.value)})),document.getElementById("prm-bevel-val")?.addEventListener("input",(function(e){jo.bevel.amount=Number(e.target.value);var t=document.getElementById("prm-bevel-num");t&&(t.textContent=e.target.value)})),document.getElementById("prm-bevel-seg")?.addEventListener("input",(function(e){jo.bevel.segments=Number(e.target.value);var t=document.getElementById("prm-bevel-seg-num");t&&(t.textContent=e.target.value)})),document.getElementById("prm-loopcut-val")?.addEventListener("input",(function(e){jo.loopcut.cuts=Number(e.target.value);var t=document.getElementById("prm-loopcut-num");t&&(t.textContent=e.target.value)})),document.getElementById("prm-inset-val")?.addEventListener("input",(function(e){jo.inset.amount=Number(e.target.value);var t=document.getElementById("prm-inset-num");t&&(t.textContent=e.target.value)})),document.getElementById("prm-decimate-val")?.addEventListener("input",(function(e){jo.decimate.ratio=Number(e.target.value);var t=document.getElementById("prm-decimate-num");t&&(t.textContent=e.target.value)})),document.getElementById("prm-solidify-val")?.addEventListener("input",(function(e){jo.solidify.amount=Number(e.target.value);var t=document.getElementById("prm-solidify-num");t&&(t.textContent=e.target.value)})),document.getElementById("prm-smooth-val")?.addEventListener("input",(function(e){jo.smooth.amount=Number(e.target.value);var t=document.getElementById("prm-smooth-num");t&&(t.textContent=e.target.value)})),document.getElementById("prm-screw-val")?.addEventListener("input",(function(e){jo.screw.amount=Number(e.target.value);var t=document.getElementById("prm-screw-num");t&&(t.textContent=e.target.value)})),document.getElementById("prm-array-val")?.addEventListener("input",(function(e){jo.array.amount=Number(e.target.value);var t=document.getElementById("prm-array-num");t&&(t.textContent=e.target.value)})),gt.querySelectorAll("[data-gizmo-tool]").forEach((function(e){e.addEventListener("click",(function(){var t=e.getAttribute("data-gizmo-tool");De.setTool(t),"universal"===t?le.setGizmoMode("universal"):"move"===t?le.setGizmoMode("translate"):"rotate"===t?le.setGizmoMode("rotate"):"scale"===t&&le.setGizmoMode("scale"),Jo()}))})),gt.querySelectorAll("[data-axis-constraint]").forEach((function(e){e.addEventListener("click",(function(){Tt("Axis constraint: "+(Yo=e.getAttribute("data-axis-constraint")).toUpperCase(),"info"),Jo()}))})),gt.querySelectorAll("[data-sel-mode]").forEach((function(e){e.addEventListener("click",(function(){Tt("Selection tool: "+(Ko=e.getAttribute("data-sel-mode"))+" select","info"),Jo()}))})),gt.querySelectorAll("[data-sel-action]").forEach((function(e){e.addEventListener("click",(function(){var t=e.getAttribute("data-sel-action");"linked"===t?he.selectLinked():"loop"===t?he.selectLoop():"ring"===t?he.selectRing():"invert"===t?he.invertSelection():"similar"===t&&he.selectSimilar("normal"),Tt("Selection: "+t,"success")}))})),gt.querySelectorAll("[data-toggle-mode]").forEach((function(t){t.addEventListener("click",(function(){var t=e(he).editMode;he.setEditMode(!t),Tt(t?"Exited to Object Mode":"Entered Edit Mode","info"),Jo()}))})),gt.querySelectorAll("[data-set-origin]").forEach((function(t){t.addEventListener("click",(function(){var o=t.getAttribute("data-set-origin"),n=e(le).cursorPosition||[0,0,0];he.setOrigin(o,n),Tt("Origin set to "+o+".","success")}))})),gt.querySelectorAll("[data-apply-tf]").forEach((function(e){e.addEventListener("click",(function(){var t=e.getAttribute("data-apply-tf");he.applyTransformation(t),Tt("Applied transformation: "+t+".","success")}))})),gt.querySelectorAll("[data-clear-tf]").forEach((function(e){e.addEventListener("click",(function(){var t=e.getAttribute("data-clear-tf");he.clearTransformation(t),Tt("Cleared transformation: "+t+".","success")}))})),gt.querySelectorAll("[data-parent-act]").forEach((function(t){t.addEventListener("click",(function(){var o=t.getAttribute("data-parent-act"),n=e(he).selectedId;if(n)if("clear"===o)he.clearParent(n),Tt("Cleared parent.","success");else{var A=e(he).objects.find((function(e){return e.id!==n}));A?(he.setParent(n,A.id),Tt("Parented to "+A.name+".","success")):Tt("No other object to parent to.","warning")}}))})),gt.querySelectorAll("[data-join-act]").forEach((function(e){e.addEventListener("click",(function(){he.joinSelected(),Tt("Joined selected objects.","success")}))})),document.getElementById("act-tool-knife")?.addEventListener("click",(function(){De.setTool("cut"),Tt("Knife tool active: slice across mesh to cut.","info")})),document.getElementById("act-toggle-uniform-scale")?.addEventListener("click",(function(){Tt((Uo=!Uo)?"Uniform Scale active":"Non-Uniform Scale active","info"),Jo()})),document.getElementById("act-toggle-space")?.addEventListener("click",(function(){var t="world"===e(De).space?"local":"world";De.setSpace(t),Tt("Transform Space: "+t.toUpperCase(),"info"),Jo()})),gt.querySelectorAll("[data-cmd]").forEach((function(e){e.addEventListener("click",(function(){De.runCommand(e.getAttribute("data-cmd"))}))})),document.getElementById("act-toggle-tl")?.addEventListener("click",(function(){var t=e(de).show;de.setShow(!t)})),document.getElementById("act-bake-phys")?.addEventListener("click",(function(){var st=e(he);if(!st.objects.some((function(o){return o.physics.dynamic}))&&st.selectedId)he.setPhysics(st.selectedId,{dynamic:!0});var cnt=he.bakePhysicsToKeyframes(5,15,e(ae).gravity);cnt?(de.setShow(!0),de.setTime(0),Tt("Baked physics trajectory for "+cnt+" object(s).","success"),Wt(!0)):Tt("Select an object first to bake physics.","warning")}));
gt.querySelectorAll("[data-rig-mode]").forEach((function(btn){
  btn.addEventListener("click",(function(){
    var nextMode=btn.getAttribute("data-rig-mode");
    __rigState.mode=nextMode;
    he.mutateRig((function(st){
      if("weight"===nextMode){
        var bones=st.objects.filter(function(b){return"bone"===b.type});
        if(!bones.length){
          var b0=__makeBoneObj(st,"Bone",[0,0.2,0],[0,0.75,0],null,!1,1);
          __rigState.activeWeightBoneId=b0.id;
        } else if(!__rigState.activeWeightBoneId||!bones.some(function(b){return b.id===__rigState.activeWeightBoneId})){
          var selB=st.objects.find(function(b){return b.id===st.selectedId&&"bone"===b.type});
          __rigState.activeWeightBoneId=selB?selB.id:bones[0].id;
        }
        var hasSkinned=st.objects.some(function(m){return Boolean(m.skinWeights)});
        if(!hasSkinned)__computeAutomaticWeights(st);
        var meshObj=st.objects.find(function(m){return"bone"!==m.type&&!m.type.startsWith("light")&&!m.type.startsWith("camera")&&!m.type.startsWith("empty")});
        if(meshObj){st.selectedId=meshObj.id;st.objects.forEach(function(o){o.selected=o.id===meshObj.id})}
      } else if("pose"===nextMode){
        De.setTool("rotate");le.setGizmoMode("rotate");
        var firstBone=st.objects.find(function(b){return b.id===st.selectedId&&"bone"===b.type})||st.objects.find(function(b){return"bone"===b.type});
        if(firstBone){st.selectedId=firstBone.id;st.objects.forEach(function(o){o.selected=o.id===firstBone.id})}
      } else {
        De.setTool("move");le.setGizmoMode("translate");
      }
      __updateWeightHeatmap(st);
      __updateSkinnedMeshes(st);
    }),!1);
    Tt("Switched Rig to "+("edit"===nextMode?"Edit Bones Mode":"pose"===nextMode?"Pose Mode":"Weight Paint Mode"),"info");
    Jo();_e();
  }));
}));
gt.querySelectorAll("[data-rig-layer]").forEach((function(btn){
  btn.addEventListener("click",(function(){
    __rigState.activeLayer=Number(btn.getAttribute("data-rig-layer"))||0;
    Jo();_e();
  }));
}));
gt.querySelectorAll("[data-rig-tf]").forEach((function(btn){
  btn.addEventListener("click",(function(){
    var tf=btn.getAttribute("data-rig-tf");
    De.setTool(tf);
    le.setGizmoMode("move"===tf?"translate":tf);
    Jo();_e();
  }));
}));
gt.querySelectorAll("[data-rig-drawer]").forEach((function(btn){
  btn.addEventListener("click",(function(){
    var d=btn.getAttribute("data-rig-drawer");
    __rigState.poseDrawer=__rigState.poseDrawer===d?null:d;
    Jo();
  }));
}));
gt.querySelectorAll("[data-wp-brush]").forEach((function(btn){
  btn.addEventListener("click",(function(){
    __rigState.wpBrush=btn.getAttribute("data-wp-brush")||"add";
    Tt("Weight Brush: "+__rigState.wpBrush.toUpperCase(),"info");
    Jo();
  }));
}));
gt.querySelector("[data-rig-wp-bone]")?.addEventListener("change",(function(ev){
  __rigState.activeWeightBoneId=ev.target.value;
  he.mutateRig((function(st){__updateWeightHeatmap(st)}),!1);
  Jo();_e();
}));
gt.querySelector("[data-rig-wp-rad]")?.addEventListener("input",(function(ev){
  __rigState.wpRadius=Number(ev.target.value)||0.45;
  Jo();_e();
}));
gt.querySelector("[data-rig-wp-str]")?.addEventListener("input",(function(ev){
  __rigState.wpStrength=Number(ev.target.value)||0.65;
  Jo();
}));
gt.querySelector("[data-rig-ik-target]")?.addEventListener("change",(function(ev){
  var tId=ev.target.value||null;
  he.mutateRig((function(st){
    var b=st.objects.find(function(x){return x.id===st.selectedId&&"bone"===x.type})||st.objects.find(function(x){return"bone"===x.type});
    if(b){
      b.ik={...(b.ik||{chainLength:2,influence:1}),enabled:Boolean(tId),targetId:tId};
      __propagateHierarchy(st,[b.id]);
    }
  }),!0);
  Tt(tId?"IK Target assigned.":"IK disabled.","success");
  Jo();_e();
}));
gt.querySelector("[data-rig-ik-chain]")?.addEventListener("input",(function(ev){
  var cLen=Number(ev.target.value)||2;
  he.mutateRig((function(st){
    var b=st.objects.find(function(x){return x.id===st.selectedId&&"bone"===x.type})||st.objects.find(function(x){return"bone"===x.type});
    if(b){b.ik={...(b.ik||{enabled:!0,influence:1}),chainLength:cLen};__propagateHierarchy(st,[b.id])}
  }),!1);
  Jo();_e();
}));
gt.querySelector("[data-rig-ik-inf]")?.addEventListener("input",(function(ev){
  var inf=Number(ev.target.value);
  he.mutateRig((function(st){
    var b=st.objects.find(function(x){return x.id===st.selectedId&&"bone"===x.type})||st.objects.find(function(x){return"bone"===x.type});
    if(b){b.ik={...(b.ik||{enabled:!0,chainLength:2}),influence:inf};__propagateHierarchy(st,[b.id])}
  }),!1);
  Jo();_e();
}));
gt.querySelectorAll("[data-add-con]").forEach((function(btn){
  btn.addEventListener("click",(function(){
    var cType=btn.getAttribute("data-add-con");
    var cTarget=btn.getAttribute("data-con-target")||null;
    he.mutateRig((function(st){
      var b=st.objects.find(function(x){return x.id===st.selectedId&&"bone"===x.type})||st.objects.find(function(x){return"bone"===x.type});
      if(!b)return;
      b.constraints=b.constraints||[];
      b.constraints.push({type:cType,targetId:cTarget,influence:1.0,min:-1.2,max:1.2});
      __propagateHierarchy(st,[b.id]);
    }),!0);
    Tt("Added constraint: "+cType.replace("_"," ").toUpperCase(),"success");
    Jo();_e();
  }));
}));
gt.querySelector("[data-rig-pose-name]")?.addEventListener("input",(function(ev){
  __rigState.poseNameDraft=ev.target.value||"CustomPose";
}));
gt.querySelectorAll("[data-apply-pose]").forEach((function(btn){
  btn.addEventListener("click",(function(){
    var idx=Number(btn.getAttribute("data-apply-pose"))||0;
    var preset=__rigState.savedPoses[idx];
    if(!preset)return;
    he.mutateRig((function(st){
      var bones=__topologicalBones(st);
      for(var i=0;i<bones.length;i++){
        var b=bones[i];
        if(b.restPose){
          b.position=[...b.restPose.position];
          b.rotation=[...b.restPose.rotation];
          b.scale=[...b.restPose.scale];
        }
      }
      if("tpose"===preset.builtIn){
        bones.forEach(function(b){
          if(b.name.includes("UpperArm.L"))b.rotation=[0,0,-1.35];
          else if(b.name.includes("UpperArm.R"))b.rotation=[0,0,1.35];
        });
      } else if("wave"===preset.builtIn){
        bones.forEach(function(b,bi){
          if(b.name.includes("UpperArm.L"))b.rotation=[0,0,-0.45];
          else if(b.name.includes("ForeArm.L"))b.rotation=[0.3,0,0.55];
          else if(1===bi&&bones.length<=4)b.rotation=[0,0,0.45];
          else if(2===bi&&bones.length<=4)b.rotation=[0,0,0.85];
        });
      } else if("walk"===preset.builtIn){
        bones.forEach(function(b,bi){
          if(b.name.includes("Thigh.L"))b.rotation=[0.45,0,0];
          else if(b.name.includes("Shin.L"))b.rotation=[-0.35,0,0];
          else if(b.name.includes("Thigh.R"))b.rotation=[-0.4,0,0];
          else if(b.name.includes("UpperArm.L"))b.rotation=[-0.35,0,-1.1];
          else if(b.name.includes("UpperArm.R"))b.rotation=[0.35,0,1.1];
          else if(bi>0&&bones.length<=4)b.rotation=[0.35*(bi%2?1:-1),0,0];
        });
      } else if("jump"===preset.builtIn){
        bones.forEach(function(b,bi){
          if(b.name.includes("Pelvis")||0===bi)b.position[1]+=0.25;
          if(b.name.includes("UpperArm.L"))b.rotation=[0,0,-0.25];
          if(b.name.includes("UpperArm.R"))b.rotation=[0,0,0.25];
          if(b.name.includes("Thigh"))b.rotation=[0.35,0,0];
        });
      } else if(preset.poses){
        bones.forEach(function(b){
          var saved=preset.poses[b.name]||preset.poses[b.id];
          if(saved){
            b.position=[...saved.position];
            b.rotation=[...saved.rotation];
            b.scale=[...saved.scale];
          }
        });
      }
      __propagateHierarchy(st,bones.map(function(x){return x.id}));
    }),!0);
    Tt("Applied pose: "+preset.name,"success");
    Jo();_e();
  }));
}));
gt.querySelectorAll("[data-rig-act]").forEach((function(btn){
  btn.addEventListener("click",(function(){
    var act=btn.getAttribute("data-rig-act");
    if("toggle-xray"===act){__rigState.xray=!__rigState.xray;Jo();_e();return}
    if("toggle-names"===act){__rigState.showNames=!__rigState.showNames;Jo();_e();return}
    if("toggle-multisel"===act){__rigState.multiSelect=!__rigState.multiSelect;Tt(__rigState.multiSelect?"Multi-Bone Touch Select ON":"Single Bone Select ON","info");Jo();return}
    if("toggle-pose-space"===act){var sp="world"===e(De).space?"local":"world";De.setSpace(sp);Tt("Pose Orientation: "+sp.toUpperCase(),"info");Jo();_e();return}

    he.mutateRig((function(st){
      var selBone=st.objects.find(function(x){return x.id===st.selectedId&&"bone"===x.type})||st.objects.find(function(x){return x.id===__rigState.lastSelectedBoneId&&"bone"===x.type})||st.objects.find(function(x){return"bone"===x.type});
      if("add-single-bone"===act){
        var vp=e(le);
        var head=vp.cursorVisible&&vp.cursorPosition?[...vp.cursorPosition]:(selBone?__getBoneEndpoints(selBone).tail:[0,0.2,0]);
        var tail=[head[0],head[1]+0.5,head[2]];
        st.objects.forEach(function(o){o.selected=!1});
        var nb=__makeBoneObj(st,"Bone",head,tail,selBone?selBone.id:null,!1,1);
        st.selectedId=nb.id;
        __rigState.activeWeightBoneId=nb.id;
        De.setTool("move");le.setGizmoMode("translate");
        Tt("Created bone: "+nb.name,"success");
      } else if("add-biped"===act){
        st.objects.forEach(function(o){o.selected=!1});
        var pelvis=__makeBoneObj(st,"Pelvis",[0,0.85,0],[0,1.05,0],null,!1,1);
        var spine=__makeBoneObj(st,"Spine",[0,1.05,0],[0,1.35,0],pelvis.id,!0,1);
        var chest=__makeBoneObj(st,"Chest",[0,1.35,0],[0,1.62,0],spine.id,!0,1);
        var headB=__makeBoneObj(st,"Head",[0,1.62,0],[0,1.95,0],chest.id,!0,1);
        var shL=__makeBoneObj(st,"Shoulder.L",[0.05,1.58,0],[0.22,1.58,0],chest.id,!1,2);
        var uaL=__makeBoneObj(st,"UpperArm.L",[0.22,1.58,0],[0.54,1.35,0],shL.id,!0,2);
        var faL=__makeBoneObj(st,"ForeArm.L",[0.54,1.35,0],[0.78,1.12,0.05],uaL.id,!0,2);
        var hdL=__makeBoneObj(st,"Hand.L",[0.78,1.12,0.05],[0.92,1.0,0.08],faL.id,!0,2);
        var shR=__makeBoneObj(st,"Shoulder.R",[-0.05,1.58,0],[-0.22,1.58,0],chest.id,!1,2);
        var uaR=__makeBoneObj(st,"UpperArm.R",[-0.22,1.58,0],[-0.54,1.35,0],shR.id,!0,2);
        var faR=__makeBoneObj(st,"ForeArm.R",[-0.54,1.35,0],[-0.78,1.12,0.05],uaR.id,!0,2);
        var hdR=__makeBoneObj(st,"Hand.R",[-0.78,1.12,0.05],[-0.92,1.0,0.08],faR.id,!0,2);
        var thL=__makeBoneObj(st,"Thigh.L",[0.16,0.85,0],[0.17,0.45,0.02],pelvis.id,!1,2);
        var snL=__makeBoneObj(st,"Shin.L",[0.17,0.45,0.02],[0.17,0.06,0],thL.id,!0,2);
        var thR=__makeBoneObj(st,"Thigh.R",[-0.16,0.85,0],[-0.17,0.45,0.02],pelvis.id,!1,2);
        var snR=__makeBoneObj(st,"Shin.R",[-0.17,0.45,0.02],[-0.17,0.06,0],thR.id,!0,2);
        st.objects.forEach(function(o){o.selected=o.id===pelvis.id});
        st.selectedId=pelvis.id;
        __rigState.activeWeightBoneId=pelvis.id;
        Tt("Created 16-Bone Human Biped Armature!","success");
      } else if("add-chain"===act){
        st.objects.forEach(function(o){o.selected=!1});
        var b1=__makeBoneObj(st,"Bone.01",[0,0.15,0],[0,0.6,0],null,!1,1);
        var b2=__makeBoneObj(st,"Bone.02",[0,0.6,0],[0,1.05,0],b1.id,!0,1);
        var b3=__makeBoneObj(st,"Bone.03",[0,1.05,0],[0,1.5,0],b2.id,!0,1);
        st.objects.forEach(function(o){o.selected=o.id===b3.id});
        st.selectedId=b3.id;
        __rigState.activeWeightBoneId=b3.id;
        Tt("Created 3-Bone Connected Chain.","success");
      } else if("add-demo-char"===act){
        st.objects=st.objects.filter(function(o){return"bone"!==o.type&&!("cube"===o.type&&"Cube"===o.name)&&!o.name.startsWith("IK_Target_")});
        var charMesh=st.objects.find(function(o){return"asset_character"===o.type});
        if(!charMesh){
          var cGeom=__subdivideMesh(__cloneMesh(G("asset_character")||G("capsule")),!0);
          charMesh={
            id:"obj-char-"+Date.now(),name:"Character_Mesh",type:"asset_character",
            position:[0,0.9,0],rotation:[0,0,0],scale:[1.15,1.15,1.15],
            restPose:{position:[0,0.9,0],rotation:[0,0,0],scale:[1.15,1.15,1.15]},
            color:"#93c5fd",material:{emissive:"#000000",opacity:1,metalness:0.1,roughness:0.45},
            geometry:cGeom,geometryVersion:1,colorVersion:1,selectionVersion:1,
            physics:{dynamic:!1,mass:1,restitution:0.3,friction:0.5,velocity:[0,0,0]},
            visible:!0,locked:!1,selected:!1,depth:0,children:[]
          };
          st.objects.push(charMesh);
        }
        var rootB=__makeBoneObj(st,"Pelvis",[0,0.75,0],[0,1.15,0],null,!1,1);
        var chestB=__makeBoneObj(st,"SpineChest",[0,1.15,0],[0,1.55,0],rootB.id,!0,1);
        var headBone=__makeBoneObj(st,"Head",[0,1.55,0],[0,1.95,0],chestB.id,!0,1);
        var armL=__makeBoneObj(st,"Arm.L",[0.18,1.45,0],[0.68,1.25,0],chestB.id,!1,2);
        var foreL=__makeBoneObj(st,"ForeArm.L",[0.68,1.25,0],[1.05,1.1,0.05],armL.id,!0,2);
        var armR=__makeBoneObj(st,"Arm.R",[-0.18,1.45,0],[-0.68,1.25,0],chestB.id,!1,2);
        var foreR=__makeBoneObj(st,"ForeArm.R",[-0.68,1.25,0],[-1.05,1.1,0.05],armR.id,!0,2);
        var legL=__makeBoneObj(st,"Leg.L",[0.16,0.75,0],[0.18,0.08,0],rootB.id,!1,2);
        var legR=__makeBoneObj(st,"Leg.R",[-0.16,0.75,0],[-0.18,0.08,0],rootB.id,!1,2);
        __computeAutomaticWeights(st,charMesh.id);
        st.objects.forEach(function(o){o.selected=o.id===armL.id});
        st.selectedId=armL.id;
        __rigState.activeWeightBoneId=armL.id;
        __rigState.mode="pose";
        De.setTool("rotate");le.setGizmoMode("rotate");
        Tt("Spawned Demo Character + Rig with Automatic Weights! Rotate Arm.L to test skin deformation.","success");
      } else if("extrude-bone"===act){
        if(!selBone){Tt("Select a bone first to extrude.","warning");return}
        var end=__getBoneEndpoints(selBone);
        var newTail=[end.tail[0]+end.dir[0]*end.len,end.tail[1]+end.dir[1]*end.len,end.tail[2]+end.dir[2]*end.len];
        st.objects.forEach(function(o){o.selected=!1});
        var extB=__makeBoneObj(st,selBone.name.replace(/\.\d+$/,"")+".Ext",end.tail,newTail,selBone.id,!0,selBone.boneLayer||1);
        st.selectedId=extB.id;
        __rigState.activeWeightBoneId=extB.id;
        De.setTool("move");le.setGizmoMode("translate");
        Tt("Extruded connected bone: "+extB.name,"success");
      } else if("subdivide-bone"===act){
        if(!selBone){Tt("Select a bone first to subdivide.","warning");return}
        var bEnd=__getBoneEndpoints(selBone);
        var mid=[(bEnd.head[0]+bEnd.tail[0])/2,(bEnd.head[1]+bEnd.tail[1])/2,(bEnd.head[2]+bEnd.tail[2])/2];
        var oldChildren=[...selBone.children];
        selBone.scale=[selBone.scale[0],Math.max(0.1,(bEnd.len*0.5)/0.45),selBone.scale[2]];
        selBone.restPose={position:[...selBone.position],rotation:[...selBone.rotation],scale:[...selBone.scale]};
        selBone.children=[];
        st.objects.forEach(function(o){o.selected=!1});
        var subB=__makeBoneObj(st,selBone.name+".Sub",mid,bEnd.tail,selBone.id,!0,selBone.boneLayer||1);
        for(var ci=0;ci<oldChildren.length;ci++){
          var ch=st.objects.find(function(x){return x.id===oldChildren[ci]});
          if(ch){ch.parent=subB.id;subB.children.push(ch.id)}
        }
        st.selectedId=subB.id;
        Tt("Subdivided bone into "+selBone.name+" and "+subB.name,"success");
      } else if("duplicate-bone"===act){
        var selBones=st.objects.filter(function(x){return"bone"===x.type&&x.selected});
        if(!selBones.length&&selBone)selBones=[selBone];
        if(!selBones.length){Tt("Select a bone to duplicate.","warning");return}
        st.objects.forEach(function(o){o.selected=!1});
        var lastDup=null;
        for(var di=0;di<selBones.length;di++){
          var sb=selBones[di],sEnd=__getBoneEndpoints(sb);
          var dup=__makeBoneObj(st,sb.name+".Copy",[sEnd.head[0]+0.25,sEnd.head[1],sEnd.head[2]],[sEnd.tail[0]+0.25,sEnd.tail[1],sEnd.tail[2]],sb.parent,!1,sb.boneLayer||1);
          lastDup=dup;
        }
        if(lastDup)st.selectedId=lastDup.id;
        Tt("Duplicated "+selBones.length+" bone(s).","success");
      } else if("delete-bone"===act){
        var delIds=new Set(st.objects.filter(function(x){return"bone"===x.type&&(x.selected||x.id===st.selectedId)}).map(function(x){return x.id}));
        if(!delIds.size&&selBone)delIds.add(selBone.id);
        if(!delIds.size){Tt("No bone selected to delete.","warning");return}
        var fallbackParent=null;
        st.objects.forEach(function(o){
          if(delIds.has(o.id)&&o.parent&&!delIds.has(o.parent))fallbackParent=o.parent;
        });
        st.objects.forEach(function(o){
          if(!delIds.has(o.id)){
            if(o.parent&&delIds.has(o.parent)){o.parent=fallbackParent;o.connected=!1}
            o.children=(o.children||[]).filter(function(cid){return!delIds.has(cid)});
          }
        });
        st.objects=st.objects.filter(function(o){return!delIds.has(o.id)});
        var nextBone=st.objects.find(function(o){return o.id===fallbackParent})||st.objects.find(function(o){return"bone"===o.type})||null;
        st.selectedId=nextBone?nextBone.id:null;
        if(nextBone)nextBone.selected=!0;
        Tt("Deleted "+delIds.size+" bone(s).","success");
      } else if("parent-connected"===act||"parent-offset"===act){
        if(!selBone){Tt("Select a child bone first.","warning");return}
        var otherSelected=st.objects.find(function(x){return"bone"===x.type&&x.selected&&x.id!==selBone.id});
        var candidates=st.objects.filter(function(x){return"bone"===x.type&&x.id!==selBone.id&&x.parent!==selBone.id});
        var parentBone=otherSelected||candidates[candidates.length-1];
        if(!parentBone){Tt("Need at least 2 bones to parent.","warning");return}
        if(selBone.parent){
          var oldP=st.objects.find(function(x){return x.id===selBone.parent});
          if(oldP)oldP.children=(oldP.children||[]).filter(function(id){return id!==selBone.id});
        }
        selBone.parent=parentBone.id;
        if(!parentBone.children.includes(selBone.id))parentBone.children.push(selBone.id);
        selBone.connected=("parent-connected"===act);
        if(selBone.connected){
          selBone.position=[...__getBoneEndpoints(parentBone).tail];
        }
        selBone.restPose={position:[...selBone.position],rotation:[...selBone.rotation],scale:[...selBone.scale]};
        Tt("Parented "+selBone.name+" to "+parentBone.name+" ("+(selBone.connected?"Connected":"Keep Offset")+").","success");
      } else if("toggle-connect"===act){
        if(!selBone||!selBone.parent){Tt("Select a child bone with a parent first.","warning");return}
        selBone.connected=!selBone.connected;
        if(selBone.connected){
          var parB=st.objects.find(function(x){return x.id===selBone.parent});
          if(parB)selBone.position=[...__getBoneEndpoints(parB).tail];
        }
        selBone.restPose={position:[...selBone.position],rotation:[...selBone.rotation],scale:[...selBone.scale]};
        Tt(selBone.connected?"Bone connected to parent tail.":"Bone disconnected (Keep Offset).","success");
      } else if("clear-parent"===act){
        if(!selBone||!selBone.parent){Tt("Selected bone has no parent.","info");return}
        var pObj=st.objects.find(function(x){return x.id===selBone.parent});
        if(pObj)pObj.children=(pObj.children||[]).filter(function(id){return id!==selBone.id});
        selBone.parent=null;selBone.connected=!1;
        Tt("Cleared parent for "+selBone.name+".","success");
      } else if("flip-bone"===act){
        if(!selBone){Tt("Select a bone to flip.","warning");return}
        var fEnd=__getBoneEndpoints(selBone);
        var flipped=__orientBoneFromHeadTail(fEnd.tail,fEnd.head,selBone.rotation[1]);
        selBone.position=[...fEnd.tail];
        selBone.rotation=[...flipped.rotation];
        selBone.connected=!1;
        selBone.restPose={position:[...selBone.position],rotation:[...selBone.rotation],scale:[...selBone.scale]};
        Tt("Switched bone direction (Head ↔ Tail) for "+selBone.name+".","success");
      } else if("recalc-roll"===act){
        if(!selBone){Tt("Select a bone first.","warning");return}
        selBone.rotation=[selBone.rotation[0],0,selBone.rotation[2]];
        if("edit"===__rigState.mode)selBone.restPose={position:[...selBone.position],rotation:[...selBone.rotation],scale:[...selBone.scale]};
        Tt("Recalculated bone roll to 0° for "+selBone.name+".","success");
      } else if("autoname-lr"===act){
        var renamed=0;
        st.objects.filter(function(x){return"bone"===x.type}).forEach(function(b){
          var base=b.name.replace(/\.(L|R|C)$/i,"");
          var suffix=b.position[0]>0.04?".L":b.position[0]<-0.04?".R":".C";
          b.name=base+suffix;renamed++;
        });
        Tt("Auto-named "+renamed+" bone(s) with .L / .R / .C suffixes.","success");
      } else if("symmetrize"===act){
        var allBones=st.objects.filter(function(x){return"bone"===x.type});
        allBones.forEach(function(b){
          if(!/\.(L|R)$/i.test(b.name)&&Math.abs(b.position[0])>0.04){
            b.name=b.name+(b.position[0]>0?".L":".R");
          }
        });
        var leftBones=allBones.filter(function(b){return b.name.endsWith(".L")});
        if(!leftBones.length){Tt("No .L or +X bones found to symmetrize.","warning");return}
        var lToR=new Map();
        var created=0;
        for(var li=0;li<leftBones.length;li++){
          var lb=leftBones[li],lEnd=__getBoneEndpoints(lb);
          var rName=lb.name.slice(0,-2)+".R";
          var rb=st.objects.find(function(x){return"bone"===x.type&&x.name===rName});
          var mHead=[-lEnd.head[0],lEnd.head[1],lEnd.head[2]],mTail=[-lEnd.tail[0],lEnd.tail[1],lEnd.tail[2]];
          if(rb){
            var mOr=__orientBoneFromHeadTail(mHead,mTail,-lb.rotation[1]);
            rb.position=mHead;rb.rotation=mOr.rotation;rb.scale=[...lb.scale];
            rb.restPose={position:[...mHead],rotation:[...mOr.rotation],scale:[...lb.scale]};
          } else {
            rb=__makeBoneObj(st,rName,mHead,mTail,null,lb.connected,lb.boneLayer||2);
            created++;
          }
          lToR.set(lb.id,rb);
        }
        for(var lj=0;lj<leftBones.length;lj++){
          var srcB=leftBones[lj],dstB=lToR.get(srcB.id);
          if(srcB.parent){
            var mappedP=lToR.get(srcB.parent);
            var parId=mappedP?mappedP.id:srcB.parent;
            dstB.parent=parId;
            var pRef=st.objects.find(function(x){return x.id===parId});
            if(pRef&&!pRef.children.includes(dstB.id))pRef.children.push(dstB.id);
          }
        }
        Tt("Symmetrized "+leftBones.length+" .L bone(s) to .R ("+created+" new).","success");
      } else if("cycle-bone-layer"===act&&selBone){
        selBone.boneLayer=((selBone.boneLayer||1)%3)+1;
        Tt(selBone.name+" moved to Layer L"+selBone.boneLayer+".","info");
      } else if("toggle-bone-hide"===act&&selBone){
        selBone.visible=!selBone.visible;
        Tt(selBone.name+(selBone.visible?" shown.":" hidden."),"info");
      } else if("reset-pose-all"===act){
        st.objects.filter(function(x){return"bone"===x.type}).forEach(function(b){
          if(b.restPose){
            b.position=[...b.restPose.position];
            b.rotation=[...b.restPose.rotation];
            b.scale=[...b.restPose.scale];
          }
        });
        __propagateHierarchy(st);
        Tt("Reset all bones to Rest Pose.","success");
      } else if("clear-pose-rot"===act&&selBone){
        if(selBone.restPose)selBone.rotation=[...selBone.restPose.rotation];
        __propagateHierarchy(st,[selBone.id]);
        Tt("Cleared rotation on "+selBone.name+".","success");
      } else if("clear-pose-loc"===act&&selBone){
        if(selBone.restPose)selBone.position=[...selBone.restPose.position];
        __propagateHierarchy(st,[selBone.id]);
        Tt("Cleared location on "+selBone.name+".","success");
      } else if("clear-pose-scale"===act&&selBone){
        if(selBone.restPose)selBone.scale=[...selBone.restPose.scale];
        __propagateHierarchy(st,[selBone.id]);
        Tt("Cleared scale on "+selBone.name+".","success");
      } else if("ik-spawn-target"===act&&selBone){
        var ikEnd=__getBoneEndpoints(selBone);
        var tEmpty={
          id:"obj-ik-"+Date.now(),name:"IK_Target_"+selBone.name,type:"empty_axes",
          position:[...ikEnd.tail],rotation:[0,0,0],scale:[0.35,0.35,0.35],
          restPose:{position:[...ikEnd.tail],rotation:[0,0,0],scale:[0.35,0.35,0.35]},
          color:"#facc15",material:{emissive:"#713f12",opacity:1,metalness:0,roughness:0.5},
          geometry:__cloneMesh(G("empty_axes")||G("cube")),geometryVersion:1,colorVersion:1,selectionVersion:1,
          physics:{dynamic:!1,mass:1,restitution:0.3,friction:0.5,velocity:[0,0,0]},
          visible:!0,locked:!1,selected:!0,depth:0,children:[]
        };
        st.objects.forEach(function(o){o.selected=!1});
        st.objects.push(tEmpty);
        __rigState.lastSelectedBoneId=selBone.id;selBone.ik={enabled:!0,targetId:tEmpty.id,chainLength:2,influence:1.0};
        st.selectedId=tEmpty.id;
        De.setTool("move");le.setGizmoMode("translate");
        __propagateHierarchy(st,[tEmpty.id]);
        Tt("Created IK Target "+tEmpty.name+"! Drag it with Move gizmo to bend the bone chain.","success");
      } else if("ik-remove"===act&&selBone){
        selBone.ik={enabled:!1,targetId:null,chainLength:2,influence:1};
        Tt("Removed IK constraint from "+selBone.name+".","info");
      } else if("clear-constraints"===act&&selBone){
        selBone.constraints=[];
        Tt("Cleared constraints on "+selBone.name+".","info");
      } else if("save-pose"===act){
        var poseMap={};
        st.objects.filter(function(x){return"bone"===x.type}).forEach(function(b){
          poseMap[b.name]={position:[...b.position],rotation:[...b.rotation],scale:[...b.scale]};
        });
        var pName=(__rigState.poseNameDraft||"Pose").trim();
        __rigState.savedPoses.push({name:pName,poses:poseMap});
        Tt("Saved pose '"+pName+"' to Pose Library!","success");
      } else if("auto-weights"===act){
        var cnt=__computeAutomaticWeights(st);
        if(cnt)Tt("Assigned Automatic Weights to "+cnt+" mesh(es)! Switch to Pose Mode to deform.","success");
        else Tt("Add at least 1 Bone and 1 Mesh to compute Automatic Weights.","warning");
      } else if("toggle-bone-lock"===act){
        var wb=st.objects.find(function(x){return x.id===__rigState.activeWeightBoneId&&"bone"===x.type})||selBone;
        if(wb){wb.boneLocked=!wb.boneLocked;Tt(wb.name+(wb.boneLocked?" locked (masked from weights).":" unlocked."),"info")}
      } else if("wp-normalize"===act){
        st.objects.forEach(function(m){
          if(!m.skinWeights)return;
          for(var vi=0;vi<m.skinWeights.length;vi++){
            var row=m.skinWeights[vi]||[];
            var s=row.reduce(function(acc,p){return acc+p[1]},0)||1;
            m.skinWeights[vi]=row.map(function(p){return[p[0],p[1]/s]});
          }
        });
        __updateWeightHeatmap(st);
        Tt("Normalized all vertex skin weights to 100%.","success");
      } else if("wp-mirror"===act){
        __rigState.wpMirrorX=!__rigState.wpMirrorX;
        st.objects.forEach(function(m){
          if(!m.skinWeights||!m.baseVertices)return;
          var verts=m.baseVertices;
          for(var i=0;i<verts.length;i++){
            if(verts[i][0]>=0)continue;
            var bestJ=-1,bestD=0.08;
            for(var j=0;j<verts.length;j++){
              var d=Math.hypot(verts[j][0]+verts[i][0],verts[j][1]-verts[i][1],verts[j][2]-verts[i][2]);
              if(d<bestD){bestD=d;bestJ=j}
            }
            if(bestJ>=0&&m.skinWeights[bestJ]){
              m.skinWeights[i]=m.skinWeights[bestJ].map(function(pair){
                var bObj=st.objects.find(function(x){return x.id===pair[0]});
                if(bObj&&bObj.name.endsWith(".L")){
                  var rB=st.objects.find(function(x){return"bone"===x.type&&x.name===bObj.name.slice(0,-2)+".R"});
                  if(rB)return[rB.id,pair[1]];
                }
                return[pair[0],pair[1]];
              });
            }
          }
        });
        __updateWeightHeatmap(st);
        Tt("Mirrored weights across X axis (.L ↔ .R).","success");
      } else if("wp-flood-fill"===act){
        if(!__rigState.activeWeightBoneId){Tt("Select a bone first.","warning");return}
        st.objects.forEach(function(m){
          if(!m.geometry||"bone"===m.type||m.type.startsWith("light")||m.type.startsWith("camera"))return;
          if(!m.baseVertices)m.baseVertices=m.geometry.vertices.map(function(v){return[...v]});
          m.skinWeights=m.geometry.vertices.map(function(){return[[__rigState.activeWeightBoneId,1.0]]});
        });
        __updateWeightHeatmap(st);
        __updateSkinnedMeshes(st);
        Tt("Flood-filled 100% weight to active bone.","success");
      }
    }),!0);
    Jo();_e();Wt(!0);
  }));
}));
function __mutateActiveMaterial(patchFn, recordUndo = false) {
  he.mutateRig((function(st){
    var obj=st.objects.find(function(x){return x.id===st.selectedId&&!x.type.startsWith("light")&&!x.type.startsWith("camera")&&"bone"!==x.type})
      ||st.objects.find(function(x){return!x.type.startsWith("light")&&!x.type.startsWith("camera")&&"bone"!==x.type});
    if(!obj)return;
    var slots=__ensureMaterialSlots(obj);
    if(__lookState.activeSlotIdx>=slots.length)__lookState.activeSlotIdx=0;
    var sl={...slots[__lookState.activeSlotIdx]};
    patchFn(sl, obj, slots, st);
    slots[__lookState.activeSlotIdx]=sl;
    obj.geometry={...obj.geometry,slots:[...slots]};
    if(0===__lookState.activeSlotIdx){
      obj.color=sl.color||obj.color;
      obj.material={
        ...obj.material,
        emissive:sl.emissive||"#000000",
        emissiveStrength:sl.emissiveStrength??1,
        metalness:sl.metalness??0.04,
        roughness:sl.roughness??0.36,
        specular:sl.specular??0.5,
        normalStrength:sl.normalStrength??1,
        opacity:sl.opacity??1,
        blendMode:sl.blendMode||"blend"
      };
    }
    obj.colorVersion=(obj.colorVersion||1)+1;
    obj.geometryVersion=(obj.geometryVersion||1)+1;
    __drawMaterialPreviewSphere(sl);
  }),recordUndo);
  _e();
}
gt.querySelectorAll("[data-look-tab]").forEach((function(btn){
  btn.addEventListener("click",(function(){
    __lookState.tab=btn.getAttribute("data-look-tab")||"material";
    Jo();_e();
  }));
}));
gt.querySelectorAll("[data-mat-grp]").forEach((function(btn){
  btn.addEventListener("click",(function(){
    __lookState.matGroupFilter=btn.getAttribute("data-mat-grp")||"All";
    Jo();
  }));
}));
gt.querySelector("[data-look-mat-slot]")?.addEventListener("change",(function(ev){
  __lookState.activeSlotIdx=Number(ev.target.value)||0;
  Jo();
}));
gt.querySelector("[data-look-blend-mode]")?.addEventListener("change",(function(ev){
  var bm=ev.target.value||"blend";
  __mutateActiveMaterial(function(sl){sl.blendMode=bm},!0);
  Tt("Blend Mode: "+bm.toUpperCase(),"info");
  Jo();
}));
gt.querySelectorAll("[data-look-swatch]").forEach((function(btn){
  btn.addEventListener("click",(function(){
    var hex=btn.getAttribute("data-look-swatch")||"#ffffff";
    __mutateActiveMaterial(function(sl){sl.color=hex;sl.presetId=void 0},!0);
    Jo();
  }));
}));
gt.querySelector("[data-look-base-color]")?.addEventListener("input",(function(ev){
  __mutateActiveMaterial(function(sl){sl.color=ev.target.value;sl.presetId=void 0},!1);
}));
gt.querySelector("[data-look-metal]")?.addEventListener("input",(function(ev){
  var val=Number(ev.target.value);
  __mutateActiveMaterial(function(sl){sl.metalness=val},!1);
  var sp=ev.target.parentElement?.querySelector("span");if(sp)sp.textContent=Math.round(100*val)+"%";
}));
gt.querySelector("[data-look-rough]")?.addEventListener("input",(function(ev){
  var val=Number(ev.target.value);
  __mutateActiveMaterial(function(sl){sl.roughness=val},!1);
  var sp=ev.target.parentElement?.querySelector("span");if(sp)sp.textContent=Math.round(100*val)+"%";
}));
gt.querySelector("[data-look-spec]")?.addEventListener("input",(function(ev){
  var val=Number(ev.target.value);
  __mutateActiveMaterial(function(sl){sl.specular=val},!1);
  var sp=ev.target.parentElement?.querySelector("span");if(sp)sp.textContent=Math.round(100*val)+"%";
}));
gt.querySelector("[data-look-emis-color]")?.addEventListener("input",(function(ev){
  __mutateActiveMaterial(function(sl){sl.emissive=ev.target.value},!1);
}));
gt.querySelector("[data-look-emis-str]")?.addEventListener("input",(function(ev){
  var val=Number(ev.target.value);
  __mutateActiveMaterial(function(sl){sl.emissiveStrength=val},!1);
  var sp=ev.target.parentElement?.querySelector("span");if(sp)sp.textContent=val.toFixed(1);
}));
gt.querySelector("[data-look-opacity]")?.addEventListener("input",(function(ev){
  var val=Number(ev.target.value);
  __mutateActiveMaterial(function(sl){sl.opacity=val},!1);
  var sp=ev.target.parentElement?.querySelector("span");if(sp)sp.textContent=Math.round(100*val)+"%";
}));
gt.querySelector("[data-look-norm-str]")?.addEventListener("input",(function(ev){
  var val=Number(ev.target.value);
  __mutateActiveMaterial(function(sl){sl.normalStrength=val},!1);
  var sp=ev.target.parentElement?.querySelector("span");if(sp)sp.textContent=val.toFixed(1);
}));
gt.querySelectorAll("[data-tex-channel]").forEach((function(btn){
  btn.addEventListener("click",(function(){
    __lookState.texChannel=btn.getAttribute("data-tex-channel")||"base";
    Jo();
  }));
}));
gt.querySelector("[data-tex-mapping]")?.addEventListener("change",(function(ev){
  var mp=Number(ev.target.value)||0;
  __mutateActiveMaterial(function(sl){sl.texMapping=mp},!0);
  Tt("Texture Mapping updated.","info");
  Jo();
}));
gt.querySelectorAll("[data-proc-tex]").forEach((function(btn){
  btn.addEventListener("click",(function(){
    var kind=btn.getAttribute("data-proc-tex")||"checker";
    var url=__generateProceduralTex(kind);
    var ch=__lookState.texChannel;
    __mutateActiveMaterial(function(sl){
      if("roughness"===ch)sl.roughnessUrl=url;
      else if("normal"===ch)sl.normalUrl=url;
      else if("metallic"===ch){sl.metallicUrl=url;sl.imageUrl=url}
      else if("emission"===ch){sl.emissionUrl=url;sl.imageUrl=url}
      else{sl.imageUrl=url;sl.presetId=void 0}
    },!0);
    Tt("Applied "+kind.toUpperCase()+" procedural texture to "+ch+" slot.","success");
    Jo();
  }));
}));
gt.querySelector("[data-tex-scale-x]")?.addEventListener("input",(function(ev){
  var val=Number(ev.target.value)||1;
  __mutateActiveMaterial(function(sl){sl.uvRepeat=val},!1);
  var sp=ev.target.parentElement?.querySelector("span");if(sp)sp.textContent=val.toFixed(1);
}));
gt.querySelector("[data-tex-scale-y]")?.addEventListener("input",(function(ev){
  var val=Number(ev.target.value)||1;
  __mutateActiveMaterial(function(sl){sl.uvScaleY=val},!1);
  var sp=ev.target.parentElement?.querySelector("span");if(sp)sp.textContent=val.toFixed(1);
}));
gt.querySelector("[data-tex-off-x]")?.addEventListener("input",(function(ev){
  var val=Number(ev.target.value)||0;
  __mutateActiveMaterial(function(sl){sl.uvOffsetX=val},!1);
  var sp=ev.target.parentElement?.querySelector("span");if(sp)sp.textContent=val.toFixed(2);
}));
gt.querySelector("[data-tex-off-y]")?.addEventListener("input",(function(ev){
  var val=Number(ev.target.value)||0;
  __mutateActiveMaterial(function(sl){sl.uvOffsetY=val},!1);
  var sp=ev.target.parentElement?.querySelector("span");if(sp)sp.textContent=val.toFixed(2);
}));
gt.querySelector("[data-tex-rot]")?.addEventListener("input",(function(ev){
  var val=Number(ev.target.value)||0;
  __mutateActiveMaterial(function(sl){sl.uvRotation=val},!1);
  var sp=ev.target.parentElement?.querySelector("span");if(sp)sp.textContent=Math.round(val)+"°";
}));
gt.querySelector("[data-tex-strength]")?.addEventListener("input",(function(ev){
  var val=Number(ev.target.value);
  __mutateActiveMaterial(function(sl){sl.texStrength=val},!1);
  var sp=ev.target.parentElement?.querySelector("span");if(sp)sp.textContent=Math.round(100*val)+"%";
}));
gt.querySelector("[data-look-light-select]")?.addEventListener("change",(function(ev){
  var lid=ev.target.value;
  if(lid){he.selectObject(lid);Jo();_e()}
}));
gt.querySelectorAll("[data-add-light-type]").forEach((function(btn){
  btn.addEventListener("click",(function(){
    var lType=btn.getAttribute("data-add-light-type")||"light_point";
    he.addPrimitive(lType,[2.5,3.5,2.5]);
    Tt("Added "+lType.replace("light_","").toUpperCase()+" Light.","success");
    Jo();_e();
  }));
}));
function __mutateActiveLight(patchFn, recordUndo = false) {
  he.mutateRig((function(st){
    var lObj=st.objects.find(function(x){return x.id===st.selectedId&&x.type.startsWith("light")})
      ||st.objects.find(function(x){return x.type.startsWith("light")});
    if(!lObj){
      he.addPrimitive("light_point",[2.5,3.5,2.5]);
      lObj=st.objects.find(function(x){return x.type.startsWith("light")});
    }
    if(!lObj)return;
    lObj.lightProps=lObj.lightProps||{type:"point",intensity:1.2,color:lObj.color||"#ffffff",distance:10,angle:Math.PI/4};
    patchFn(lObj.lightProps, lObj);
    lObj.color=lObj.lightProps.color||lObj.color;
    lObj.colorVersion=(lObj.colorVersion||1)+1;
  }),recordUndo);
  _e();
}
gt.querySelector("[data-light-color]")?.addEventListener("input",(function(ev){
  __mutateActiveLight(function(lp){lp.color=ev.target.value},!1);
}));
gt.querySelector("[data-light-power]")?.addEventListener("input",(function(ev){
  var val=Number(ev.target.value);
  __mutateActiveLight(function(lp){lp.intensity=val},!1);
  var sp=ev.target.parentElement?.querySelector("span");if(sp)sp.textContent=val.toFixed(1);
}));
gt.querySelector("[data-light-radius]")?.addEventListener("input",(function(ev){
  var val=Number(ev.target.value);
  __mutateActiveLight(function(lp){lp.distance=val},!1);
  var sp=ev.target.parentElement?.querySelector("span");if(sp)sp.textContent=val+"m";
}));
gt.querySelector("[data-light-angle]")?.addEventListener("input",(function(ev){
  var deg=Number(ev.target.value);
  __mutateActiveLight(function(lp){lp.angle=deg*Math.PI/180},!1);
  var sp=ev.target.parentElement?.querySelector("span");if(sp)sp.textContent=deg+"°";
}));
gt.querySelector("[data-world-bg]")?.addEventListener("input",(function(ev){
  __lookState.bgColor=ev.target.value;
  _e();
}));
gt.querySelector("[data-world-ambient]")?.addEventListener("input",(function(ev){
  __lookState.ambientStrength=Number(ev.target.value);
  var sp=ev.target.parentElement?.querySelector("span");if(sp)sp.textContent=Math.round(100*__lookState.ambientStrength)+"%";
  _e();
}));
gt.querySelector("[data-world-hdri]")?.addEventListener("change",(function(ev){
  __lookState.hdriPreset=ev.target.value||"studio";
  var hc=__hdriColors[__lookState.hdriPreset];
  if(hc)__lookState.bgColor=hc.bg;
  Tt("Environment HDRI: "+__lookState.hdriPreset.toUpperCase(),"info");
  Jo();_e();
}));
gt.querySelector("[data-world-env-str]")?.addEventListener("input",(function(ev){
  __lookState.envStrength=Number(ev.target.value);
  var sp=ev.target.parentElement?.querySelector("span");if(sp)sp.textContent=Math.round(100*__lookState.envStrength)+"%";
  _e();
}));
gt.querySelector("[data-look-cam-select]")?.addEventListener("change",(function(ev){
  var cid=ev.target.value;
  if(cid){he.selectObject(cid);le.setPIPCamera(cid,1);Jo();_e()}
}));
function __mutateActiveCamera(patchFn) {
  he.mutateRig((function(st){
    var cObj=st.objects.find(function(x){return x.id===st.selectedId&&x.type.startsWith("camera")})
      ||st.objects.find(function(x){return x.type.startsWith("camera")});
    if(!cObj){
      he.addPrimitive("camera",[3.2,2.2,4.2]);
      cObj=st.objects.find(function(x){return x.type.startsWith("camera")});
    }
    if(!cObj)return;
    cObj.cameraProps=cObj.cameraProps||{fov:50,near:0.05,far:260,ortho:false,orthoScale:4,trackingMode:"none",targetId:null};
    patchFn(cObj.cameraProps, cObj);
  }),!1);
  Eo();_e();
}
gt.querySelector("[data-cam-focal]")?.addEventListener("input",(function(ev){
  var mm=Number(ev.target.value)||50;
  var newFov=Math.round(2*Math.atan(36/(2*mm))*180/Math.PI);
  we.fov=newFov;
  __mutateActiveCamera(function(cp){cp.fov=newFov});
  var sp=ev.target.parentElement?.querySelector("span");if(sp)sp.textContent=mm+"mm";
}));
gt.querySelector("[data-cam-ortho-scale]")?.addEventListener("input",(function(ev){
  var sc=Number(ev.target.value)||4;
  __mutateActiveCamera(function(cp){cp.orthoScale=sc});
  var sp=ev.target.parentElement?.querySelector("span");if(sp)sp.textContent=sc.toFixed(1);
}));
gt.querySelector("[data-cam-clip-start]")?.addEventListener("input",(function(ev){
  var nr=Number(ev.target.value)||0.05;
  __mutateActiveCamera(function(cp){cp.near=nr});
  var sp=ev.target.parentElement?.querySelector("span");if(sp)sp.textContent=nr.toFixed(2)+"m";
}));
gt.querySelector("[data-cam-clip-end]")?.addEventListener("input",(function(ev){
  var fr=Number(ev.target.value)||260;
  __mutateActiveCamera(function(cp){cp.far=fr});
  var sp=ev.target.parentElement?.querySelector("span");if(sp)sp.textContent=fr+"m";
}));
gt.querySelector("[data-cam-roll]")?.addEventListener("input",(function(ev){
  var deg=Number(ev.target.value)||0;
  __mutateActiveCamera(function(cp,cObj){cObj.rotation=[cObj.rotation[0],cObj.rotation[1],deg*Math.PI/180]});
  var sp=ev.target.parentElement?.querySelector("span");if(sp)sp.textContent=deg+"°";
}));
gt.querySelector("[data-cam-dof-dist]")?.addEventListener("input",(function(ev){
  __lookState.dofDistance=Number(ev.target.value)||5;
  var sp=ev.target.parentElement?.querySelector("span");if(sp)sp.textContent=__lookState.dofDistance.toFixed(1)+"m";
  _e();
}));
gt.querySelector("[data-cam-dof-fstop]")?.addEventListener("input",(function(ev){
  __lookState.dofFstop=Number(ev.target.value)||2.8;
  var sp=ev.target.parentElement?.querySelector("span");if(sp)sp.textContent="f/"+__lookState.dofFstop.toFixed(1);
  _e();
}));
gt.querySelector("[data-render-ao-str]")?.addEventListener("input",(function(ev){
  __lookState.aoStrength=Number(ev.target.value);
  __lookState.aoEnabled=true;
  var sp=ev.target.parentElement?.querySelector("span");if(sp)sp.textContent=Math.round(100*__lookState.aoStrength)+"%";
  _e();
}));
gt.querySelector("[data-render-bloom-str]")?.addEventListener("input",(function(ev){
  __lookState.bloomStrength=Number(ev.target.value);
  __lookState.bloomEnabled=true;
  var sp=ev.target.parentElement?.querySelector("span");if(sp)sp.textContent=Math.round(100*__lookState.bloomStrength)+"%";
  _e();
}));
gt.querySelector("[data-render-res]")?.addEventListener("change",(function(ev){
  __lookState.renderResolution=ev.target.value||"1920x1080";
  Tt("Render Resolution set to "+__lookState.renderResolution,"info");
}));

function __vfmt(sec){
  sec=Math.max(0,Math.floor(sec||0));
  var h=Math.floor(sec/3600),m=Math.floor(sec%3600/60),s=sec%60;
  return (h?String(h).padStart(2,"0")+":":"")+String(m).padStart(2,"0")+":"+String(s).padStart(2,"0");
}
function __vmime(){
  if(!window.MediaRecorder)return"";
  var list=__lowEnd?["video/webm;codecs=vp8","video/webm","video/mp4"]:["video/webm;codecs=vp9","video/webm;codecs=vp8","video/webm","video/mp4"];
  for(var i=0;i<list.length;i++){try{if(MediaRecorder.isTypeSupported(list[i]))return list[i]}catch(e){}}
  return"";
}
function __vhudShow(){
  var hud=document.getElementById("__vidHud");
  if(hud)return hud;
  hud=document.createElement("div");hud.id="__vidHud";
  hud.style.cssText="position:fixed;right:12px;bottom:14px;z-index:2147483000;display:flex;align-items:center;gap:8px;background:rgba(12,16,24,.94);border:1px solid #2EE6B6;border-radius:12px;padding:8px 10px;color:#E8ECF4;font:600 12px Inter,system-ui,sans-serif;box-shadow:0 8px 24px rgba(0,0,0,.4)";
  hud.innerHTML='<span id="__vidTxt">REC 00:00</span><button type="button" id="__vidStop" style="border:0;border-radius:8px;background:#ff5f6d;color:#fff;font:700 11px Inter,sans-serif;padding:5px 9px;cursor:pointer">Stop</button>';
  document.body.appendChild(hud);
  var b=hud.querySelector("#__vidStop");b&&b.addEventListener("click",function(){__vstop()});
  return hud;
}
function __vhudText(t){var e=document.getElementById("__vidTxt");e&&(e.textContent=t)}
function __vhudRemove(){var h=document.getElementById("__vidHud");h&&h.remove()}
function __vrestoreCanvas(old){
  if(!old)return;
  ve=old.w;Me=old.h;ke=__capDpr(ve,Me)*__qMul;
  M.width=Math.round(ve*ke);M.height=Math.round(Me*ke);le.setSize(ve,Me);Je();_e();
}
function __vrestoreTimeline(st){
  if(!st)return;
  de.setLoop(st.loop);de.setStartFrame(st.startFrame);de.setEndFrame(st.endFrame);
  de.setTime(st.time);__animState.playbackSpeed=st.speed;__animState.reversePlay=st.reverse;
  de.setPlaying(Boolean(st.playing));de.setShow(st.show);
}
function __vstop(){
  if(!__vid||__vid.stopping)return;
  __vid.stopping=true;
  if(__vid.timer){clearInterval(__vid.timer);__vid.timer=0}
  try{de.setPlaying(false)}catch(e){}
  __vhudText("Saving…");
  try{if(__vid.rec&&__vid.rec.state!=="inactive")__vid.rec.stop();else __vfinish(null)}catch(e){__vfinish(e&&e.message||"stop failed")}
}
function __vfinish(err){
  var v=__vid;if(!v||v.done)return;v.done=!0;
  v.chain.catch(function(){}).then(function(){
    var dl=null;
    return Promise.resolve().then(function(){
      if(v.writer)return v.writer.close().catch(function(){});
    }).then(function(){
      if(v.mode==="opfs"&&v.handle)return v.handle.getFile().then(function(f){dl=f});
      if(v.mode==="blob")dl=new Blob(v.chunks,{type:v.mime});
    }).then(function(){
      __vid=null;__vrestoreCanvas(v.old);__vrestoreTimeline(v.saved);__vhudRemove();
      if(err){Tt("Video export stopped ("+err+").","warning",4000);return}
      if(v.mode==="fs"){Tt("Video saved to your chosen file ("+v.w+"×"+v.h+" · "+(v.bytes/1048576).toFixed(1)+" MB).","success",5000);return}
      if(!dl){Tt("Video export finished, but the file could not be read back.","warning",4000);return}
      var name="toon-studio-"+new Date().toISOString().slice(0,19).replace(/[:T]/g,"-")+"."+v.ext;
      var u=URL.createObjectURL(dl),a=document.createElement("a");
      a.href=u;a.download=name;document.body.appendChild(a);a.click();a.remove();
      setTimeout(function(){URL.revokeObjectURL(u)},300000);if(v.mode==="opfs"&&v.handle&&v.handle.name)setTimeout(function(){navigator.storage.getDirectory().then(function(r){return r.removeEntry(v.handle.name)}).catch(function(){})},360000);
      Tt("Video saved ("+v.w+"×"+v.h+" · "+(v.bytes/1048576).toFixed(1)+" MB).","success",5000);
    });
  }).catch(function(e){
    __vid=null;__vrestoreCanvas(v.old);__vrestoreTimeline(v.saved);__vhudRemove();
    Tt("Video export failed: "+((e&&e.message)||e),"error",5000);
  });
}
async function __vstart(){
  if(__vid){Tt("A recording is already running. Tap Stop.","warning");return}
  var mime=__vmime();
  if(!mime||!M||!M.captureStream){Tt("Video export needs MediaRecorder + canvas capture. Use Chrome/Edge (Android or desktop).","error",4500);return}
  var sel=gt.querySelector("[data-video-res]");
  var res=(sel&&sel.value)||(__lowEnd?"1280x720":"1920x1080");
  var w=parseInt(res,10)||1280,h=parseInt(res.split("x")[1],10)||720;
  var fps=30,bitrate=res==="854x480"?2200000:res==="1280x720"?4500000:9000000;
  var tl=e(de),total=Math.max(1,Math.min(3600,Math.round(Yt()*1000)/1000)),est=bitrate/8*total;
  var writer=null,handle=null,mode="blob";
  try{
    if(window.showSaveFilePicker){
      var fe=mime.indexOf("mp4")>=0?"mp4":"webm";
      var types={};types["video/"+fe]=["."+fe];
      handle=await window.showSaveFilePicker({suggestedName:"toon-studio."+fe,types:[{description:"Video",accept:types}]});
      writer=await handle.createWritable();mode="fs";
    }else if(navigator.storage&&navigator.storage.getDirectory){
      var ext=mime.indexOf("mp4")>=0?"mp4":"webm";
      var root=await navigator.storage.getDirectory();
      handle=await root.getFileHandle("toon-export-"+Date.now()+"."+ext,{create:true});
      writer=await handle.createWritable();mode="opfs";
    }
  }catch(e){
    if(e&&e.name==="AbortError"){Tt("Video export cancelled.","info");return}
    writer=null;handle=null;mode="blob";
  }
  var st={time:tl.currentTime,playing:tl.playing,loop:tl.loop,startFrame:tl.startFrame,endFrame:tl.endFrame,speed:__animState.playbackSpeed,reverse:__animState.reversePlay,show:tl.show};
  var old={w:ve,h:Me},chunks=[],stream=null;
  try{
    __vid={active:true,old:old,saved:st,mode:mode,writer:writer,handle:handle,chunks:chunks,bytes:0,chain:Promise.resolve(),timer:0,total:total,w:w,h:h,mime:mime,ext:mime.indexOf("mp4")>=0?"mp4":"webm",stopping:false,rec:null};
    ve=w;Me=h;ke=1;M.width=w;M.height=h;le.setSize(w,h);
    de.setLoop(false);de.setStartFrame(0);de.setEndFrame(Math.max(1,Math.round(total*tl.frameRate)));
    de.setShow(true);de.setTime(0);__animState.playbackSpeed=1;__animState.reversePlay=false;
    stream=M.captureStream(fps);
    var rec=new MediaRecorder(stream,{mimeType:mime,videoBitsPerSecond:bitrate});
    __vid.rec=rec;
    rec.ondataavailable=function(ev){
      if(!__vid||!ev.data||!ev.data.size)return;
      __vid.bytes+=ev.data.size;
      if(__vid.mode==="blob"){
        if(__vid.bytes>419430400){Tt("In-memory limit reached. Export auto-stopped; use Chrome for disk streaming.","warning",5000);__vstop();return}
        __vid.chunks.push(ev.data);
      }else{
        var chunk=ev.data;
        __vid.chain=__vid.chain.then(function(){return __vid&&__vid.writer.write(chunk)}).catch(function(){});
      }
    };
    rec.onerror=function(ev){__vfinish((ev&&ev.error&&ev.error.message)||"recorder error")};
    rec.onstop=function(){__vfinish(null)};
    tt();_e();rec.start(1000);
    __vhudShow();__vhudText("REC 00:00 / "+__vfmt(total));
    Tt("Recording "+res+" @30fps · "+__vfmt(total)+". Keep this tab open.","info",4500);
    if(navigator.storage&&navigator.storage.estimate){navigator.storage.estimate().then(function(e){if(e&&e.quota&&e.usage!=null&&e.quota-e.usage<est*1.15)Tt("Low storage: this recording may need ~"+(est/1048576).toFixed(1)+" MB.","warning",6000)}).catch(function(){});}
    var __playing=!1;
    setTimeout(function(){if(__vid&&!__vid.stopping){de.setPlaying(true);__playing=!0;_e()}},120);
    __vid.timer=setInterval(function(){
      if(!__vid||__vid.stopping)return;
      var t=e(de);__vhudText("REC "+__vfmt(t.currentTime)+" / "+__vfmt(total));
      if(t.currentTime>=total-0.05||(__playing&&!t.playing))__vstop();
    },400);
  }catch(e){
    if(stream&&stream.getTracks)stream.getTracks().forEach(function(x){try{x.stop()}catch(_){}});
    __vid=null;__vrestoreCanvas(old);__vrestoreTimeline(st);__vhudRemove();
    Tt("Could not start video export: "+((e&&e.message)||e),"error",5000);
  }
}
gt.querySelectorAll("[data-look-act]").forEach((function(btn){
  btn.addEventListener("click",(function(){
    var act=btn.getAttribute("data-look-act");
    if("new-mat-slot"===act){
      __mutateActiveMaterial(function(sl,obj,slots){
        var newIdx=slots.length;
        slots.push({
          ...sl,
          name:"Material."+String(newIdx+1).padStart(2,"0"),
          presetId:void 0
        });
        __lookState.activeSlotIdx=newIdx;
      },!0);
      Tt("Created Material Slot "+(__lookState.activeSlotIdx+1),"success");
      Jo();
    } else if("assign-mat-slot"===act){
      __mutateActiveMaterial(function(sl,obj,slots,st){
        var faces=(st.markedObjectId===obj.id&&st.markedFaces.length)?st.markedFaces:(st.editMode&&st.selectedFaces.length?st.selectedFaces:obj.geometry.faces.map(function(_,fi){return fi}));
        obj.geometry=(0,__require("lib/mesh").assignFacesToSlot)(obj.geometry,faces,__lookState.activeSlotIdx);
        obj.geometry.slots=slots;
      },!0);
      Tt("Assigned Slot "+(__lookState.activeSlotIdx+1)+" to geometry.","success");
      Jo();
    } else if("upload-tex-image"===act){
      document.getElementById("look-tex-file-input")?.click();
    } else if("clear-tex-channel"===act){
      var ch=__lookState.texChannel;
      __mutateActiveMaterial(function(sl){
        if("roughness"===ch)sl.roughnessUrl=void 0;
        else if("normal"===ch)sl.normalUrl=void 0;
        else{sl.imageUrl=void 0;sl.presetId=void 0}
      },!0);
      Tt("Cleared "+ch+" texture.","info");
      Jo();
    } else if("toggle-shadows"===act){
      __lookState.castShadows=!__lookState.castShadows;
      Tt("Shadows "+(__lookState.castShadows?"Enabled":"Disabled"),"info");
      Jo();_e();
    } else if("add-camera"===act){
      he.addPrimitive("camera",[3.2,2.2,4.2]);
      var cid=e(he).selectedId;
      if(cid)le.setPIPCamera(cid,1);
      Tt("Added Scene Camera.","success");
      Jo();_e();
    } else if("toggle-cam-view"===act){
      var hasCam=e(he).objects.some(function(x){return x.type.startsWith("camera")});
      if(!hasCam)he.addPrimitive("camera",[3.2,2.2,4.2]);
      le.toggleViewThroughCamera();
      Eo();Jo();_e();
    } else if("align-cam-to-view"===act){
      var cb=(0,__require("lib/math3d").cameraBasis)(we);
      __mutateActiveCamera(function(cp,cObj){
        cObj.position=[...cb.eye];
        cObj.rotation=[-we.pitch,we.yaw,0];
      });
      Tt("Aligned active camera to current viewport view!","success");
      Jo();_e();
    } else if("toggle-lock-cam"===act){
      __lookState.lockCamToView=!__lookState.lockCamToView;
      Tt("Lock Camera to View: "+(__lookState.lockCamToView?"ON":"OFF"),"info");
      Jo();
    } else if("toggle-cam-ortho"===act){
      __mutateActiveCamera(function(cp){cp.ortho=!cp.ortho});
      Jo();_e();
    } else if("toggle-dof"===act){
      __lookState.dofEnabled=!__lookState.dofEnabled;
      Tt("Depth of Field: "+(__lookState.dofEnabled?"ON":"OFF"),"info");
      Jo();_e();
    } else if("toggle-ao"===act){
      __lookState.aoEnabled=!__lookState.aoEnabled;
      Jo();_e();
    } else if("toggle-bloom"===act){
      __lookState.bloomEnabled=!__lookState.bloomEnabled;
      Jo();_e();
    } else if("toggle-aa"===act){
      __lookState.aaEnabled=!__lookState.aaEnabled;
      Tt("Anti-Aliasing: "+(__lookState.aaEnabled?"MSAA ON":"OFF"),"info");
      Jo();_e();
    } else if("export-video"===act){__vstart();
    } else if("export-png"===act){
      tt();
      if(M){
        var url=M.toDataURL("image/png");
        var link=document.createElement("a");
        link.download="toon-studio-render-"+__lookState.renderResolution+".png";
        link.href=url;
        link.click();
        Tt("Rendered & downloaded PNG ("+__lookState.renderResolution+")!","success");
      }
    } else if("export-obj"===act){
      var objTxt=ke(e(he).objects);
      var blob=new Blob([objTxt],{type:"text/plain"});
      var aEl=document.createElement("a");
      aEl.download="scene.obj";
      aEl.href=URL.createObjectURL(blob);
      aEl.click();
      Tt("Exported Scene OBJ.","success");
    } else if("export-project"===act){
      ce.openDialog("save");
      qo();
    }
  }));
}));
gt.querySelectorAll("[data-anim-drawer]").forEach((function(btn){
  btn.addEventListener("click",(function(){
    var d=btn.getAttribute("data-anim-drawer");
    __animState.drawer=__animState.drawer===d?null:d;
    if("onion"===d&&__animState.drawer)__animState.onionEnabled=true;
    Jo();_e();
  }));
}));
gt.querySelector("[data-anim-key-channel]")?.addEventListener("change",(function(ev){
  __animState.keyChannelMode=ev.target.value||"all";
  Tt("Keying Mode: "+__animState.keyChannelMode.toUpperCase(),"info");
}));
gt.querySelectorAll("[data-anim-interp]").forEach((function(btn){
  btn.addEventListener("click",(function(){
    var mode=btn.getAttribute("data-anim-interp")||"bezier";
    var st=e(he),tl=e(de);
    var oid=st.selectedId||tl.selectedKey?.objectId||st.objects[0]?.id;
    if(oid){
      he.animationEdit((function(){de.setObjectInterpolation(oid,mode,tl.selectedKey?.time)}));
      Tt("Interpolation set to "+mode.toUpperCase(),"success");
      Jo();_e();
    }
  }));
}));
gt.querySelector("[data-track-filter-sel]")?.addEventListener("change",(function(ev){
  __animState.trackFilter=ev.target.value||"all";
  Wt(!0);Jo();
}));
gt.querySelector("[data-anim-end-frame]")?.addEventListener("change",(function(ev){
  de.setEndFrame(Number(ev.target.value)||300);
  Ot();Wt(!0);Jo();
}));
gt.querySelector("[data-anim-fps]")?.addEventListener("change",(function(ev){
  var fps=Number(ev.target.value)||30;
  de.setFrameRate(fps);
  Tt("Timeline Frame Rate set to "+fps+" FPS.","success");
  Ot();Wt(!0);Jo();
}));
gt.querySelector("[data-onion-count]")?.addEventListener("input",(function(ev){
  __animState.onionCount=Number(ev.target.value)||2;
  __animState.onionEnabled=true;
  var sp=ev.target.parentElement?.querySelector("span");if(sp)sp.textContent=String(__animState.onionCount);
  _e();
}));
gt.querySelector("[data-onion-step]")?.addEventListener("input",(function(ev){
  __animState.onionStepFrames=Number(ev.target.value)||4;
  __animState.onionEnabled=true;
  var sp=ev.target.parentElement?.querySelector("span");if(sp)sp.textContent=__animState.onionStepFrames+"f";
  _e();
}));
gt.querySelector("[data-onion-opacity]")?.addEventListener("input",(function(ev){
  __animState.onionOpacity=Number(ev.target.value)||0.45;
  __animState.onionEnabled=true;
  var sp=ev.target.parentElement?.querySelector("span");if(sp)sp.textContent=Math.round(100*__animState.onionOpacity)+"%";
  _e();
}));
var graphCv=document.getElementById("anim-graph-canvas");
graphCv?.addEventListener("pointerdown",(function(ev){
  var rect=graphCv.getBoundingClientRect();
  var ratio=Math.max(0,Math.min(1,(ev.clientX-rect.left)/Math.max(1,rect.width)));
  var st=e(he),tl=e(de);
  var objId=st.selectedId||st.objects[0]?.id;
  var kList=objId?(tl.keyframes.get(objId)||[]):[];
  var maxT=Math.max(2,kList.length?kList[kList.length-1].time+0.5:Math.min(10,tl.duration));
  var targetT=ratio*maxT;
  de.setTime(targetT);
  var evalMap=de.evaluate(targetT,tl.easing);
  if(evalMap.size)he.applyAnimation(evalMap);
  _t(targetT);Ot();__drawGraphEditorCanvas();_e();
}));
gt.querySelectorAll("[data-anim-act]").forEach((function(btn){
  btn.addEventListener("click",(function(){
    var act=btn.getAttribute("data-anim-act");
    var st=e(he),tl=e(de);
    var selObj=st.objects.find(function(x){return x.id===st.selectedId})||st.objects[0]||null;
    if("toggle-autokey"===act){
      de.toggleAutoKey();
      Tt("Auto-Key Recording "+(e(de).autoKey?"ENABLED":"DISABLED"),e(de).autoKey?"success":"info");
      Jo();
    } else if("prev-key"===act){
      var pk=de.prevKeyframe(st.selectedId||void 0);
      if(null!==pk){
        var evP=de.evaluate(pk,tl.easing);
        if(evP.size)he.applyAnimation(evP);
        _t(pk);Ot();Wt(!0);_e();
      } else Tt("No earlier keyframe found.","info");
    } else if("next-key"===act){
      var nk=de.nextKeyframe(st.selectedId||void 0);
      if(null!==nk){
        var evN=de.evaluate(nk,tl.easing);
        if(evN.size)he.applyAnimation(evN);
        _t(nk);Ot();Wt(!0);_e();
      } else Tt("No later keyframe found.","info");
    } else if("toggle-loop"===act){
      de.toggleLoop();
      Jo();
    } else if("scale-keys-half"===act&&selObj){
      var kListH=tl.keyframes.get(selObj.id);
      if(kListH&&kListH.length>=2){
        he.animationEdit((function(){de.setLayerSpeed(selObj.id,2.0)}));
        Tt("Scaled keyframe timing 0.5x.","success");Wt(!0);Jo();_e();
      } else Tt("Need at least 2 keyframes on track.","warning");
    } else if("scale-keys-double"===act&&selObj){
      var kListD=tl.keyframes.get(selObj.id);
      if(kListD&&kListD.length>=2){
        he.animationEdit((function(){de.setLayerSpeed(selObj.id,0.66)}));
        Tt("Scaled keyframe timing 1.5x.","success");Wt(!0);Jo();_e();
      } else Tt("Need at least 2 keyframes on track.","warning");
    } else if("toggle-easing"===act){
      de.toggleEasing();
      Tt("Smooth Easing "+(e(de).easing?"ON":"OFF"),"info");
      Jo();
    } else if("toggle-snap-frames"===act){
      de.toggleSnapToFrames();
      Tt("Snap to Frames: "+(e(de).snapToFrames?"ON":"OFF"),"info");
      Jo();
    } else if("frame-all-keys"===act){
      var minT=0,maxT=4;
      for(var [oid,kArr] of tl.keyframes.entries()){
        for(var ki=0;ki<kArr.length;ki++)maxT=Math.max(maxT,kArr[ki].time+0.5);
      }
      var visW=Math.max(180,(It?.clientWidth||320)*0.75);
      so(visW/Math.max(1,maxT-minT),minT);
      Tt("Framed all keyframes in timeline.","info");
    } else if("key-all-bones"===act){
      var bones=st.objects.filter(function(b){return"bone"===b.type});
      if(!bones.length){Tt("No bones in scene. Add an Armature in Rig tab first.","warning");return}
      he.beginAnimationEdit();
      var tNow=de.snapTime(tl.currentTime);
      bones.forEach(function(b){
        var ex=tl.keyframes.get(b.id)||[];
        if(0===ex.length&&tNow>0.02&&b.restPose){
          de.addKeyframe(b.id,{time:0,position:[...b.restPose.position],rotation:[...b.restPose.rotation],scale:[...b.restPose.scale]});
        }
        de.addKeyframe(b.id,{time:tNow,position:[...b.position],rotation:[...b.rotation],scale:[...b.scale]});
      });
      he.endAnimationEdit();
      Tt("Keyframed all "+bones.length+" bones at F"+Math.round(tNow*tl.frameRate)+"!","success");
      Wt(!0);Jo();
    } else if("copy-bone-pose"===act){
      var rigBones=st.objects.filter(function(b){return"bone"===b.type});
      var snap={};
      (rigBones.length?rigBones:(selObj?[selObj]:[])).forEach(function(b){
        snap[b.name]={position:[...b.position],rotation:[...b.rotation],scale:[...b.scale]};
      });
      __animState.copiedPose=snap;
      Tt("Copied pose ("+Object.keys(snap).length+" bone/object transforms).","success");
    } else if("paste-flipped-pose"===act){
      if(!__animState.copiedPose){Tt("Copy a pose first to paste flipped.","warning");return}
      he.beginAnimationEdit();
      var fNow=de.snapTime(tl.currentTime);
      he.mutateRig((function(s){
        s.objects.forEach(function(b){
          var lookupName=b.name;
          if(b.name.endsWith(".L"))lookupName=b.name.slice(0,-2)+".R";
          else if(b.name.endsWith(".R"))lookupName=b.name.slice(0,-2)+".L";
          var sv=__animState.copiedPose[lookupName]||__animState.copiedPose[b.name];
          if(sv){
            b.position=[-sv.position[0],sv.position[1],sv.position[2]];
            b.rotation=[sv.rotation[0],-sv.rotation[1],-sv.rotation[2]];
            b.scale=[...sv.scale];
            de.addKeyframe(b.id,{time:fNow,position:[...b.position],rotation:[...b.rotation],scale:[...b.scale]});
          }
        });
        window.__rigEngine?.onTransformsChanged?.(s);
      }),!0);
      he.endAnimationEdit();
      Tt("Pasted mirror-flipped pose (.L ↔ .R) at F"+Math.round(fNow*tl.frameRate)+"!","success");
      Wt(!0);_e();
    } else if("gen-walk-cycle"===act){
      var wBones=st.objects.filter(function(b){return"bone"===b.type});
      he.beginAnimationEdit();
      if(wBones.length>=2){
        var times=[0,0.5,1.0,1.5,2.0];
        for(var ti=0;ti<times.length;ti++){
          var tVal=times[ti];
          var phase=(ti%2===1)?(1===ti?1:-1):0;
          wBones.forEach(function(b,bi){
            var rp=b.restPose||{position:[...b.position],rotation:[...b.rotation],scale:[...b.scale]};
            var rot=[...rp.rotation];
            var pos=[...rp.position];
            if(b.name.includes("Thigh.L")||b.name.includes("Leg.L"))rot[0]+=0.48*phase;
            else if(b.name.includes("Thigh.R")||b.name.includes("Leg.R"))rot[0]-=0.48*phase;
            else if(b.name.includes("Arm.L")||b.name.includes("UpperArm.L"))rot[0]-=0.38*phase;
            else if(b.name.includes("Arm.R")||b.name.includes("UpperArm.R"))rot[0]+=0.38*phase;
            else if(b.name.includes("Pelvis")||0===bi)pos[1]+=Math.abs(phase)*0.06;
            else rot[0]+=0.35*phase*(bi%2?1:-1);
            de.addKeyframe(b.id,{time:tVal,position:pos,rotation:rot,scale:[...rp.scale]});
          });
        }
        Tt("Generated 2.0s looping Walk Cycle across "+wBones.length+" bones! Press Play.","success");
      } else if(selObj){
        var p0=[...selObj.position],r0=[...selObj.rotation],s0=[...selObj.scale];
        de.addKeyframe(selObj.id,{time:0,position:p0,rotation:r0,scale:s0});
        de.addKeyframe(selObj.id,{time:0.5,position:[p0[0]+0.4,p0[1]+0.35,p0[2]],rotation:[r0[0],r0[1],0.25],scale:s0});
        de.addKeyframe(selObj.id,{time:1.0,position:[p0[0],p0[1],p0[2]],rotation:r0,scale:s0});
        de.addKeyframe(selObj.id,{time:1.5,position:[p0[0]-0.4,p0[1]+0.35,p0[2]],rotation:[r0[0],r0[1],-0.25],scale:s0});
        de.addKeyframe(selObj.id,{time:2.0,position:p0,rotation:r0,scale:s0});
        Tt("Generated 2.0s looping Walk/Hop Cycle on "+selObj.name+"! Press Play.","success");
      }
      he.endAnimationEdit();
      de.setTime(0.5);
      var evW=de.evaluate(0.5,tl.easing);
      if(evW.size)he.applyAnimation(evW);
      Wt(!0);Jo();_e();
    } else if("toggle-onion"===act){
      __animState.onionEnabled=!__animState.onionEnabled;
      Tt("Onion Skinning (Ghosting): "+(__animState.onionEnabled?"ON":"OFF"),"info");
      Jo();_e();
    }
  }));
}));
if(gt&&__savedScrolls.length){
  gt.querySelectorAll(".ap-crossover-bar,.add-sub-nav,.rig-header-bar,.sculpt-sliders-row,.ap").forEach(function(el,idx){
    var k=el.getAttribute("data-testid")||el.className+"-"+idx;
    var found=__savedScrolls.find(function(x){return x.key===k})||__savedScrolls[idx];
    if(found&&found.left>0)el.scrollLeft=found.left;
  });
}}
Object.assign(s, {
  tab_add: STUDIO_ICONS.tab_add,
  tab_edit: STUDIO_ICONS.tab_edit,
  tab_sculpt: STUDIO_ICONS.tab_sculpt,
  tab_rig: STUDIO_ICONS.tab_rig,
  tab_animate: STUDIO_ICONS.tab_animate,
  tab_look: STUDIO_ICONS.tab_look,
  tab_agent: STUDIO_ICONS.tab_agent,
  split: STUDIO_ICONS.split,
  speed: STUDIO_ICONS.speed,
  reverse: STUDIO_ICONS.reverse,
  freeze: STUDIO_ICONS.freeze,
  duplicate: STUDIO_ICONS.duplicate,
  copy: STUDIO_ICONS.copy,
  paste: STUDIO_ICONS.paste,
  opacity: STUDIO_ICONS.opacity,
  replace: STUDIO_ICONS.replace,
  save: STUDIO_ICONS.save,
  cam_track: STUDIO_ICONS.cam_track,
  cam_view: STUDIO_ICONS.cam_view
});
[
  ["tl-act-split", STUDIO_ICONS.split],
  ["tl-act-speed", STUDIO_ICONS.speed],
  ["tl-act-reverse", STUDIO_ICONS.reverse],
  ["tl-act-freeze", STUDIO_ICONS.freeze],
  ["tl-act-dup", STUDIO_ICONS.duplicate],
  ["tl-act-copy", STUDIO_ICONS.copy],
  ["tl-act-paste", STUDIO_ICONS.paste],
  ["tl-act-opacity", STUDIO_ICONS.opacity],
  ["tl-act-replace", STUDIO_ICONS.replace],
  ["tl-act-del", STUDIO_ICONS.trash],
  ["tl-act-save", STUDIO_ICONS.save],
  ["tl-act-cam-track", STUDIO_ICONS.cam_track],
  ["tl-act-cam-view", STUDIO_ICONS.cam_view]
].forEach(([id, svg]) => {
  const el = document.querySelector("#" + id + " > span:first-child");
  if (el) el.innerHTML = svg;
});

function Vo(){var t=[["Add","Add primitives, lights, cameras, text & media",s.tab_add],["Edit","Mesh modeling, extrude, bevel, loop cut, vertex/edge/face",s.tab_edit],["Sculpt","Sculpt brushes, dyntopo & remeshing",s.tab_sculpt],["Rig","Armatures, bones, skin binding & weighting",s.tab_rig],["Animate","Timeline, curves, keyframes & camera tracking",s.tab_animate],["Look","Materials, shading modes, PBR presets & colors",s.tab_look],["Agent","Agent — Describe an animation or an asset",s.tab_agent]];dt.innerHTML=t.map((function(e,t){return'<button class="chip '+(e[0]===No?"on":"")+'" data-main-tab="'+e[0]+'" data-chip-idx="'+t+'" data-testid="chip-'+t+'" title="'+e[1]+'">'+e[2]+"<span>"+e[0]+"</span></button>"})).join(""),dt.querySelectorAll("[data-main-tab]").forEach((function(t){t.addEventListener("click",(function(){var o=t.getAttribute("data-main-tab"),wasAnim="Animate"===_o;if(No=o,_o=o,"Rig"!==o&&window.__rigEngine&&he.mutateRig((function(s){window.__rigEngine.updateWeightHeatmap(s)}),!1),"Edit"===o)he.setEditMode(!0),ge.setWorkspace("edt"),de.setShow(!1);else if("Sculpt"===o)he.setEditMode(!1),ge.setWorkspace("scl"),de.setShow(!1);else if("Animate"===o){he.setEditMode(!1),ge.setWorkspace("ani");var n=e(de).show;bo?(wo(!1),de.setShow(!0)):de.setShow(wasAnim?!n:!0)}else if("Agent"===o){he.setEditMode(!1),ge.setWorkspace("age"),de.setShow(!1)}else he.setEditMode(!1),ge.setWorkspace("Look"===o?"shd":"Rig"===o?"rig":"mod"),de.setShow(!1);ko(),Bo&&wo(!1),Vo(),Jo(),Ve(),_e()}))}))}function qo(){const o=e(ce),n=e(he);ut.style.display=o.showOutliner?"flex":"none",o.showOutliner&&(ut.innerHTML=`\n\t\t\t\t<div class="ob-head">\n\t\t\t\t\t<span class="ob-title">Objects</span>\n\t\t\t\t\t<span class="ob-count">${n.objects.length}</span>\n\t\t\t\t</div>\n\t\t\t\t<div class="ob-list">\n\t\t\t\t\t${0===n.objects.length?'<div class="ob-empty">Empty. Use Model → Add.</div>':n.objects.map(((e,o)=>`\n\t\t\t\t\t\t<div class="ro ${e.selected?"on":""} ${e.locked?"locked":""}" data-testid="object-row">\n\t\t\t\t\t\t\t<button class="ro-main" data-sel-obj="${e.id}" data-testid="object-name">\n\t\t\t\t\t\t\t\t<span class="ro-icon">${t[pe(e.type)]}</span>\n\t\t\t\t\t\t\t\t<span class="ro-name">${__esc(e.name)}</span>\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t<div class="ro-actions">\n\t\t\t\t\t\t\t\t<button class="ro-ib" data-up-obj="${e.id}" title="Move Layer Up" ${0===o?"disabled":""}>↑</button>\n\t\t\t\t\t\t\t\t<button class="ro-ib" data-dn-obj="${e.id}" title="Move Layer Down" ${o===n.objects.length-1?"disabled":""}>↓</button>\n\t\t\t\t\t\t\t\t<button class="ro-ib" data-vis-obj="${e.id}" data-testid="object-visibility">${e.visible?t.eye:t.eye_off}</button>\n\t\t\t\t\t\t\t\t<button class="ro-ib ${e.locked?"on":""}" data-lock-obj="${e.id}" data-testid="object-lock">${t.lock}</button>\n\t\t\t\t\t\t\t\t<button class="ro-ib danger" data-del-obj="${e.id}" data-testid="object-delete">${t.trash}</button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t`)).join("")}\n\t\t\t\t</div>\n\t\t\t`,ut.querySelectorAll("[data-sel-obj]").forEach((e=>e.addEventListener("click",(()=>he.selectObject(e.getAttribute("data-sel-obj")))))),ut.querySelectorAll("[data-up-obj]").forEach((e=>e.addEventListener("click",(()=>he.reorderObject(e.getAttribute("data-up-obj"),-1))))),ut.querySelectorAll("[data-dn-obj]").forEach((e=>e.addEventListener("click",(()=>he.reorderObject(e.getAttribute("data-dn-obj"),1))))),ut.querySelectorAll("[data-vis-obj]").forEach((e=>e.addEventListener("click",(()=>he.toggleVisibility(e.getAttribute("data-vis-obj")))))),ut.querySelectorAll("[data-lock-obj]").forEach((e=>e.addEventListener("click",(()=>he.toggleLock(e.getAttribute("data-lock-obj")))))),ut.querySelectorAll("[data-del-obj]").forEach((e=>e.addEventListener("click",(()=>{const t=e.getAttribute("data-del-obj");he.deleteObject(t),de.removeKeyframesFor(t)})))))}const Oo=null,Ho=null;xt?.querySelectorAll("[data-elem-mode]").forEach((e=>{e.addEventListener("click",(()=>he.setElementMode(e.getAttribute("data-elem-mode"))))}));const zo=document.getElementById("viewport-snap");zo?.addEventListener("click",(()=>le.toggleSnap())),he.subscribe((sc=>{Lo();const tlS=e(de);if(!Gt&&!tlS.isUserScrubbing&&!tlS.playing)Jo();qo(),Wt(),St.style.display=sc.gameMode?"grid":"none",Dt.style.display=sc.gameMode?"block":"none",Lt.style.display=sc.gameMode?"flex":"none",Lt&&(Lt.textContent="PTS "+sc.score),_e()})),ge.subscribe((()=>{Lo(),Vo(),Jo(),_e()})),De.subscribe((()=>{Do(),Jo(),_e()})),le.subscribe((e=>{zo?.classList.toggle("on",e.snapEnabled),Jo(),_e()})),re.subscribe((()=>Jo())),ae.subscribe((()=>Jo()));let Xo=-1;let __prevTlShow=null,__prevTlPlay=null,__prevTlLoop=null,__prevTlAuto=null;
de.subscribe((e=>{
  Do();
  if(e.show!==__prevTlShow||e.playing!==__prevTlPlay||e.loop!==__prevTlLoop||e.autoKey!==__prevTlAuto){
    __prevTlShow=e.show;__prevTlPlay=e.playing;__prevTlLoop=e.loop;__prevTlAuto=e.autoKey;
    Jo();
  } else {
    __updateLiveAnimReadouts(e);
  }
  Ot();Wt();
  if(!e.playing&&"transform"!==Ge?.kind&&Math.abs(e.currentTime-Xo)>1e-6){
    Xo=e.currentTime;
    const t=de.evaluate(e.currentTime,e.easing);
    t.size&&he.applyAnimation(t);
    e.isUserScrubbing||_t(e.currentTime);
  }
  _e();
})),ce.subscribe((t=>{Lo(),qo(),function(){const t=e(ce).activeDialog;if(Mt.style.display=t?"flex":"none",!t)return;const o=e(he),n=e(de),A=Ee();Mt.innerHTML=`\n\t\t\t\t<div class="dh">\n\t\t\t\t\t<span id="dlg-title">${"save"===t?"Save Project":"open"===t?"Open Project":"New Project"}</span>\n\t\t\t\t\t<button class="s" id="dlg-close" data-testid="dialog-close">${s.close}</button>\n\t\t\t\t</div>\n\t\t\t\t<div style="padding:14px;flex:1;overflow-y:auto;">\n\t\t\t\t\t${"save"===t?`\n\t\t\t\t\t\t<div class="ds">\n\t\t\t\t\t\t\t<b>Project name</b>\n\t\t\t\t\t\t\t<input id="dlg-proj-name" data-testid="project-name" value="Toon Project" style="width:100%;padding:8px;border-radius:8px;background:var(--bg2);border:1px solid var(--ln2);color:var(--tx);"/>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="ds">\n\t\t\t\t\t\t\t<b>Contents</b>\n\t\t\t\t\t\t\t<p>${o.objects.length} objects · ${n.keyframes.size} animated objects</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="ds dr">\n\t\t\t\t\t\t\t<button class="s" style="height:36px;padding:0 16px;" id="dlg-save-dl" data-testid="save-download">Download .tsf.json</button>\n\t\t\t\t\t\t\t<button class="s" style="height:36px;padding:0 16px;" id="dlg-save-local" data-testid="save-browser">Save in browser</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t`:"open"===t?`\n\t\t\t\t\t\t<div class="ds">\n\t\t\t\t\t\t\t<b>Saved in this browser</b>\n\t\t\t\t\t\t\t${0===A.length?"<p>No saved projects yet.</p>":A.map(((e,t)=>`\n\t\t\t\t\t\t\t\t<div style="display:flex;gap:8px;margin-bottom:6px;">\n\t\t\t\t\t\t\t\t\t<button class="s" style="flex:1;height:34px;" data-load-idx="${t}">${__esc(e.name)} · ${__esc(e.savedAt.slice(0,10))}</button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t`)).join("")}\n\t\t\t\t\t\t</div>\n\t\t\t\t\t`:'\n\t\t\t\t\t\t<div class="ds">\n\t\t\t\t\t\t\t<b>Start over</b>\n\t\t\t\t\t\t\t<p>This clears the scene and all keyframes.</p>\n\t\t\t\t\t\t\t<button class="s" style="height:36px;padding:0 16px;" id="dlg-confirm-new" data-testid="confirm-new">Create new project</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t'}\n\t\t\t\t</div>\n\t\t\t`,document.getElementById("dlg-close")?.addEventListener("click",(()=>ce.closeDialog())),document.getElementById("dlg-save-dl")?.addEventListener("click",(()=>{const e=document.getElementById("dlg-proj-name")?.value||"Untitled";ye(fe(e)),ce.closeDialog(),Tt("Project downloaded.","success")})),document.getElementById("dlg-save-local")?.addEventListener("click",(()=>{const e=document.getElementById("dlg-proj-name")?.value||"Untitled";Qe(fe(e)),ce.closeDialog(),Tt("Project saved in browser.","success")})),Mt.querySelectorAll("[data-load-idx]").forEach((e=>{e.addEventListener("click",(()=>{const t=A[Number(e.getAttribute("data-load-idx"))];t&&(Ie(t.project),ce.closeDialog(),Tt("Opened "+t.name,"success"))}))})),document.getElementById("dlg-confirm-new")?.addEventListener("click",(()=>{he.clear(),de.clearKeyframes(),ce.closeDialog(),Tt("New project created.","success")}))}(),t.toast?(Qt.style.display="block",Qt.textContent=t.toast.message,Qt.style.background="error"===t.toast.type?"#f87171":"warning"===t.toast.type?"#fbbf24":"success"===t.toast.type?"#34d399":"var(--tx)",Nt&&clearTimeout(Nt),Nt=setTimeout((()=>ce.hideToast()),t.toast.duration)):Qt.style.display="none"})),St.querySelectorAll("[data-gdir]").forEach((e=>{const t=e.getAttribute("data-gdir");e.addEventListener("pointerdown",(e=>{e.preventDefault(),he.setGameInput(t,!0)})),e.addEventListener("pointerup",(()=>he.setGameInput(t,!1))),e.addEventListener("pointerleave",(()=>he.setGameInput(t,!1)))})),Dt?.addEventListener("pointerdown",(e=>{e.preventDefault(),he.setJump(!0)})),Dt?.addEventListener("pointerup",(()=>he.setJump(!1))),window.addEventListener("keydown",(t=>{if(t.target instanceof HTMLElement&&["INPUT","TEXTAREA","SELECT"].includes(t.target.tagName))return;const o=t.key.toLowerCase(),n=t.ctrlKey||t.metaKey,A=e(he);if(A.gameMode&&["arrowup","arrowdown","arrowleft","arrowright","w","a","s","d"," "].includes(o))return t.preventDefault(),"arrowup"!==o&&"w"!==o||he.setGameInput("up",!0),"arrowdown"!==o&&"s"!==o||he.setGameInput("down",!0),"arrowleft"!==o&&"a"!==o||he.setGameInput("left",!0),"arrowright"!==o&&"d"!==o||he.setGameInput("right",!0),void(" "===o&&he.setJump(!0));if(n&&"z"===o)return t.preventDefault(),void(t.shiftKey?he.redo():he.undo());if(n&&"y"===o)return t.preventDefault(),void he.redo();if(n&&"d"===o)return t.preventDefault(),void he.duplicateSelected();if(n&&"s"===o)return t.preventDefault(),void ce.openDialog("save");if("delete"!==o&&"backspace"!==o){if(" "===o)return t.preventDefault(),void de.togglePlay();if("i"===o||"k"===o)return t.preventDefault(),void jt();"g"===o&&De.setTool("move"),"r"===o&&De.setTool("rotate"),"s"!==o||n||De.setTool("scale"),"v"===o&&De.setTool("select"),"f"===o&&window.dispatchEvent(new CustomEvent(t.shiftKey?"toon:frame-all":"toon:frame-selected"))}else A.selectedId&&(t.preventDefault(),he.deleteSelected())})),window.addEventListener("keyup",(e=>{const t=e.key.toLowerCase();"arrowup"!==t&&"w"!==t||he.setGameInput("up",!1),"arrowdown"!==t&&"s"!==t||he.setGameInput("down",!1),"arrowleft"!==t&&"a"!==t||he.setGameInput("left",!1),"arrowright"!==t&&"d"!==t||he.setGameInput("right",!1)," "===t&&he.setJump(!1)}));let Wo=performance.now(),$o=0,Zo=16.6;de.subscribe((function(e){e.playing!==__wasPlaying&&(__wasPlaying=e.playing,e.playing&&__wake())}));he.subscribe((function(e){e.gameMode!==__wasGame&&(__wasGame=e.gameMode,e.gameMode&&__wake())}));ae.subscribe((function(e){e.running!==__wasPhysics&&(__wasPhysics=e.running,e.running&&__wake())}));const en=new Map,tn=new Map;const on=Be();if(on&&on.scene.objects.length){Ie(on),de.setDuration(R),de.setShow(!0);const t=e(he).objects[0];t&&!e(de).clips.has(t.id)&&de.setClip(t.id,0,42.8),he.selectObject(null),De.setTool("move"),le.setGizmoMode("translate")}else{he.addPrimitive("cube",[0,.5,0]);const t=e(he).selectedId;t&&de.setClip(t,0,42.8),he.selectObject(null),De.setTool("move"),le.setGizmoMode("translate"),de.setShow(!1)}
function initClonedAgentSection() {
  if (window.__agentInitialized) return;
  window.__agentInitialized = true;

  const STORAGE_KEY_PROVIDERS = "gizmo3d_agent_providers_v1";
  const STORAGE_KEY_MCP = "gizmo3d_agent_mcp_v1";
  const STORAGE_KEY_SKILLS = "gizmo3d_agent_skills_v1";
  const STORAGE_KEY_ROUTING = "gizmo3d_agent_routing_v1";

  const SVG = {
    plus: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>',
    up: '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 15l-6-6-6 6"/></svg>',
    down: '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>',
    ext: '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17L17 7M7 7h10v10"/></svg>',
    eye: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>',
    eyeOff: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><line x1="1" y1="1" x2="23" y2="23"/></svg>',
    close: '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>',
    save: '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/></svg>',
    check: '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>',
    trash: '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/></svg>',
    reset: '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/></svg>'
  };

  const DEFAULT_PROVIDERS = [
    {
      id: "google-ai-studio",
      name: "Google AI Studio (Gemini API)",
      badge: "Free Tier",
      platformUrl: "https://aistudio.google.com/apikey",
      modelUrl: "https://ai.google.dev/gemini-api/docs/models",
      endpointUrl: "https://generativelanguage.googleapis.com/v1beta/openai/chat/completions",
      model: "gemini-2.5-flash",
      modelPresets: ["gemini-2.5-flash", "gemini-2.5-pro", "gemini-2.0-flash"],
      apiKey: "",
      mode: "auto",
      enabled: true,
      temperature: 0.4,
      maxTokens: 4096,
      custom: false
    },
    {
      id: "groq-cloud",
      name: "Groq Cloud (LPU Inference)",
      badge: "Free Plan",
      platformUrl: "https://console.groq.com/keys",
      modelUrl: "https://console.groq.com/docs/models",
      endpointUrl: "https://api.groq.com/openai/v1/chat/completions",
      model: "llama-3.3-70b-versatile",
      modelPresets: ["llama-3.3-70b-versatile", "deepseek-r1-distill-llama-70b", "qwen-qwq-32b", "mixtral-8x7b-32768"],
      apiKey: "",
      mode: "auto",
      enabled: true,
      temperature: 0.4,
      maxTokens: 4096,
      custom: false
    },
    {
      id: "openrouter",
      name: "OpenRouter (Free Models)",
      badge: "25+ :free",
      platformUrl: "https://openrouter.ai/keys",
      modelUrl: "https://openrouter.ai/models?q=:free",
      endpointUrl: "https://openrouter.ai/api/v1/chat/completions",
      model: "meta-llama/llama-3.3-70b-instruct:free",
      modelPresets: ["meta-llama/llama-3.3-70b-instruct:free", "deepseek/deepseek-r1:free", "google/gemini-2.0-flash-exp:free", "qwen/qwen-2.5-coder-32b-instruct:free"],
      apiKey: "",
      mode: "auto",
      enabled: true,
      temperature: 0.4,
      maxTokens: 4096,
      custom: false
    },
    {
      id: "cerebras-cloud",
      name: "Cerebras Cloud",
      badge: "Free 1M/Day",
      platformUrl: "https://cloud.cerebras.ai/",
      modelUrl: "https://inference-docs.cerebras.ai/models/overview",
      endpointUrl: "https://api.cerebras.ai/v1/chat/completions",
      model: "llama-3.3-70b",
      modelPresets: ["llama-3.3-70b", "llama3.1-8b", "qwen-3-32b"],
      apiKey: "",
      mode: "auto",
      enabled: true,
      temperature: 0.4,
      maxTokens: 4096,
      custom: false
    },
    {
      id: "nvidia-nim",
      name: "NVIDIA NIM (Build)",
      badge: "Free Credits",
      platformUrl: "https://build.nvidia.com/settings/api-keys",
      modelUrl: "https://build.nvidia.com/models",
      endpointUrl: "https://integrate.api.nvidia.com/v1/chat/completions",
      model: "meta/llama-3.3-70b-instruct",
      modelPresets: ["meta/llama-3.3-70b-instruct", "nvidia/llama-3.1-nemotron-70b-instruct", "deepseek-ai/deepseek-r1"],
      apiKey: "",
      mode: "auto",
      enabled: true,
      temperature: 0.4,
      maxTokens: 4096,
      custom: false
    },
    {
      id: "mistral-la-plateforme",
      name: "Mistral AI (La Plateforme)",
      badge: "Free Studio",
      platformUrl: "https://console.mistral.ai/api-keys",
      modelUrl: "https://docs.mistral.ai/getting-started/models/models_overview/",
      endpointUrl: "https://api.mistral.ai/v1/chat/completions",
      model: "codestral-latest",
      modelPresets: ["codestral-latest", "mistral-small-latest", "pixtral-12b-2409", "open-mistral-nemo"],
      apiKey: "",
      mode: "auto",
      enabled: true,
      temperature: 0.4,
      maxTokens: 4096,
      custom: false
    },
    {
      id: "huggingface-inference",
      name: "Hugging Face Inference",
      badge: "Free Token",
      platformUrl: "https://huggingface.co/settings/tokens",
      modelUrl: "https://huggingface.co/models?pipeline_tag=text-generation",
      endpointUrl: "https://router.huggingface.co/v1/chat/completions",
      model: "Qwen/Qwen2.5-Coder-32B-Instruct",
      modelPresets: ["Qwen/Qwen2.5-Coder-32B-Instruct", "meta-llama/Llama-3.3-70B-Instruct", "mistralai/Mistral-7B-Instruct-v0.3"],
      apiKey: "",
      mode: "auto",
      enabled: true,
      temperature: 0.4,
      maxTokens: 4096,
      custom: false
    },
    {
      id: "cohere-trial",
      name: "Cohere (Trial API)",
      badge: "Free Trial",
      platformUrl: "https://dashboard.cohere.com/api-keys",
      modelUrl: "https://docs.cohere.com/docs/models",
      endpointUrl: "https://api.cohere.ai/compatibility/v1/chat/completions",
      model: "command-r-plus-08-2024",
      modelPresets: ["command-r-plus-08-2024", "command-r-08-2024", "command-a-03-2025"],
      apiKey: "",
      mode: "auto",
      enabled: true,
      temperature: 0.4,
      maxTokens: 4096,
      custom: false
    },
    {
      id: "github-models",
      name: "GitHub Models",
      badge: "Free PAT",
      platformUrl: "https://github.com/marketplace/models",
      modelUrl: "https://github.com/marketplace/models",
      endpointUrl: "https://models.inference.ai.azure.com/chat/completions",
      model: "gpt-4o-mini",
      modelPresets: ["gpt-4o-mini", "gpt-4o", "DeepSeek-R1", "Llama-3.3-70B-Instruct"],
      apiKey: "",
      mode: "auto",
      enabled: true,
      temperature: 0.4,
      maxTokens: 4096,
      custom: false
    },
    {
      id: "together-ai",
      name: "Together AI",
      badge: "Free Turbo",
      platformUrl: "https://api.together.xyz/settings/api-keys",
      modelUrl: "https://docs.together.ai/docs/serverless-models",
      endpointUrl: "https://api.together.xyz/v1/chat/completions",
      model: "meta-llama/Llama-3.3-70B-Instruct-Turbo-Free",
      modelPresets: ["meta-llama/Llama-3.3-70B-Instruct-Turbo-Free", "deepseek-ai/DeepSeek-R1-Distill-Llama-70B-free"],
      apiKey: "",
      mode: "auto",
      enabled: true,
      temperature: 0.4,
      maxTokens: 4096,
      custom: false
    },
    {
      id: "cloudflare-workers-ai",
      name: "Cloudflare Workers AI",
      badge: "10k/Day Free",
      platformUrl: "https://dash.cloudflare.com/",
      modelUrl: "https://developers.cloudflare.com/workers-ai/models/",
      endpointUrl: "https://api.cloudflare.com/client/v4/accounts/YOUR_ACCOUNT_ID/ai/v1/chat/completions",
      model: "@cf/meta/llama-3.3-70b-instruct-fp8-fast",
      modelPresets: ["@cf/meta/llama-3.3-70b-instruct-fp8-fast", "@cf/qwen/qwen2.5-coder-32b-instruct"],
      apiKey: "",
      mode: "auto",
      enabled: true,
      temperature: 0.4,
      maxTokens: 4096,
      custom: false
    },
    {
      id: "deepseek-platform",
      name: "DeepSeek / Custom OpenAI",
      badge: "OpenAI Compat",
      platformUrl: "https://platform.deepseek.com/api_keys",
      modelUrl: "https://api-docs.deepseek.com/",
      endpointUrl: "https://api.deepseek.com/v1/chat/completions",
      model: "deepseek-chat",
      modelPresets: ["deepseek-chat", "deepseek-reasoner", "llama3.3:latest"],
      apiKey: "",
      mode: "auto",
      enabled: true,
      temperature: 0.4,
      maxTokens: 4096,
      custom: false
    }
  ];

  const DEFAULT_MCP_SERVERS = [
    {
      id: "mcp-gizmo3d-scene",
      name: "Gizmo3D Live Scene Graph MCP",
      badge: "Internal RPC",
      platformUrl: "https://modelcontextprotocol.io/introduction",
      endpointUrl: "mcp://internal/gizmo3d-scene-graph",
      transport: "In-Memory RPC",
      authKey: "",
      mode: "auto",
      enabled: true,
      custom: false
    },
    {
      id: "mcp-polyhaven",
      name: "PolyHaven Free PBR & HDRI MCP",
      badge: "CC0 Public",
      platformUrl: "https://polyhaven.com/",
      endpointUrl: "https://api.polyhaven.com/assets",
      transport: "HTTPS REST",
      authKey: "",
      mode: "auto",
      enabled: true,
      custom: false
    },
    {
      id: "mcp-sketchfab-gltf",
      name: "Sketchfab glTF 3D Asset MCP",
      badge: "3D Models",
      platformUrl: "https://sketchfab.com/settings/password",
      endpointUrl: "https://api.sketchfab.com/v3/models",
      transport: "HTTPS Bearer",
      authKey: "",
      mode: "auto",
      enabled: true,
      custom: false
    },
    {
      id: "mcp-webgl-shader",
      name: "WebGL2 GLSL Shader Compiler MCP",
      badge: "GLSL ES 3.00",
      platformUrl: "https://www.khronos.org/webgl/",
      endpointUrl: "mcp://internal/webgl2-glsl-compiler",
      transport: "In-Memory RPC",
      authKey: "",
      mode: "auto",
      enabled: true,
      custom: false
    },
    {
      id: "mcp-mixamo-rig",
      name: "Humanoid Rig & Motion Solver MCP",
      badge: "IK Solver",
      platformUrl: "https://www.mixamo.com/",
      endpointUrl: "mcp://internal/rig-motion-solver",
      transport: "In-Memory RPC",
      authKey: "",
      mode: "auto",
      enabled: true,
      custom: false
    }
  ];

  const DEFAULT_SKILLS = [
    {
      id: "skill-asset-architect",
      name: "Procedural 3D Asset Architect",
      targetMode: "asset",
      mode: "auto",
      enabled: true,
      instructions: "Decompose complex 3D asset requests (vehicles, mechs, towers, trees, radial coin arrays) into multi-primitive hierarchical meshes with PBR/Toon materials.",
      custom: false
    },
    {
      id: "skill-anim-director",
      name: "Keyframe & Trajectory Director",
      targetMode: "animation",
      mode: "auto",
      enabled: true,
      instructions: "Generate smooth multi-keyframe animation curves (spin 360, bounce loop, figure-8 orbit, pendulum, walk cycle) synchronized to timeline FPS.",
      custom: false
    },
    {
      id: "skill-auto-rigger",
      name: "Armature & Skin Weight Solver",
      targetMode: "asset",
      mode: "auto",
      enabled: true,
      instructions: "Construct hierarchical bone chains with inverse kinematics (IK) targets and compute smooth automatic skinning weights.",
      custom: false
    },
    {
      id: "skill-toon-shader",
      name: "Cel-Shading & Outline Pipeline",
      targetMode: "asset",
      mode: "auto",
      enabled: true,
      instructions: "Configure 2-band cel shading, crisp inverted-hull outlines, specular highlights, and emissive bloom.",
      custom: false
    },
    {
      id: "skill-topology-opt",
      name: "Mesh Boolean & Topology Optimizer",
      targetMode: "asset",
      mode: "manual",
      enabled: true,
      instructions: "Apply Catmull-Clark subdivision, Laplacian smoothing, bevels, extrusions, and CSG boolean operations.",
      custom: false
    },
    {
      id: "skill-camera-choreo",
      name: "Camera & Focal Lens Choreographer",
      targetMode: "animation",
      mode: "manual",
      enabled: true,
      instructions: "Set up 24mm/35mm/50mm/85mm camera focal lengths, Look-At/Orbit tracking targets, and animated camera paths.",
      custom: false
    }
  ];

  function loadJson(key, fallback) {
    try {
      const raw = localStorage.getItem(key);
      if (!raw) return JSON.parse(JSON.stringify(fallback));
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) && parsed.length ? parsed : JSON.parse(JSON.stringify(fallback));
    } catch {
      return JSON.parse(JSON.stringify(fallback));
    }
  }

  function saveJson(key, val) {
    try {
      localStorage.setItem(key, JSON.stringify(val));
    } catch {}
  }

  const agentState = {
    creationMode: "animation",
    splitLive3D: false,
    menuOpen: false,
    settingsOpen: false,
    settingsTab: "providers",
    globalRouting: (function(){try{return localStorage.getItem(STORAGE_KEY_ROUTING)||"auto"}catch{return "auto"}})(),
    searchQuery: "",
    customBuilderOpen: false,
    revealedKeys: {},
    attachments: [],
    providers: loadJson(STORAGE_KEY_PROVIDERS, DEFAULT_PROVIDERS),
    mcpServers: loadJson(STORAGE_KEY_MCP, DEFAULT_MCP_SERVERS),
    skills: loadJson(STORAGE_KEY_SKILLS, DEFAULT_SKILLS)
  };
  window.__agentStudioState = agentState;

  function setSplitLive3D(open) {
    agentState.splitLive3D = Boolean(open);
    const dockEl = document.getElementById("dock");
    dockEl?.classList.toggle("agent-split-live", agentState.splitLive3D);
    document.body.classList.toggle("agent-preview-split", agentState.splitLive3D);
    const splitBtn = document.getElementById("agent-split-toggle-btn");
    const splitLbl = document.getElementById("agent-split-toggle-label");
    splitBtn?.classList.toggle("on", agentState.splitLive3D);
    if (splitLbl) splitLbl.textContent = agentState.splitLive3D ? "Full Agent" : "3D Split";
    setTimeout(() => {
      Ve();
      _e();
    }, 20);
  }

  function resolveActiveProvider() {
    const enabled = agentState.providers.filter(p => p.enabled !== false);
    if (!enabled.length) return agentState.providers[0] || DEFAULT_PROVIDERS[0];
    if (agentState.globalRouting === "manual") {
      return enabled.find(p => p.mode === "manual") || enabled.find(p => p.apiKey && p.apiKey.trim()) || enabled[0];
    }
    return enabled.find(p => p.mode === "auto" && p.apiKey && p.apiKey.trim()) ||
           enabled.find(p => p.apiKey && p.apiKey.trim()) ||
           enabled[0];
  }

  function updateProviderStatusPill() {
    const pillText = document.getElementById("agent-provider-pill-text");
    const provCount = document.getElementById("stab-prov-count");
    const mcpCount = document.getElementById("stab-mcp-count");
    const skillCount = document.getElementById("stab-skill-count");
    if (provCount) provCount.textContent = String(agentState.providers.length);
    if (mcpCount) mcpCount.textContent = String(agentState.mcpServers.length);
    if (skillCount) skillCount.textContent = String(agentState.skills.length);
    if (!pillText) return;
    const active = resolveActiveProvider();
    const hasKey = Boolean(active && active.apiKey && active.apiKey.trim());
    if (agentState.globalRouting === "auto" && !hasKey) {
      pillText.textContent = "Auto";
    } else {
      const modeLabel = agentState.globalRouting === "manual" ? "Manual" : "Auto";
      const modelShort = active ? active.model.split("/").pop() : "Auto";
      pillText.textContent = hasKey ? `${modelShort}` : modeLabel;
    }
  }

  function syncClearButtonVisibility() {
    const inp = document.getElementById("agent-input");
    const clr = document.getElementById("agent-prompt-clear");
    if (clr && inp) {
      const hasVal = inp.value.trim().length > 0;
      clr.style.display = hasVal ? "inline-flex" : "none";
    }
  }

  function updateModeButtons() {
    const isAnim = agentState.creationMode === "animation";
    const animBtn = document.getElementById("agent-mode-anim");
    const assetBtn = document.getElementById("agent-mode-asset");
    if (animBtn) {
      animBtn.classList.toggle("on", isAnim);
      animBtn.style.background = isAnim ? "#18222B" : "transparent";
      animBtn.style.color = isAnim ? "#2EE6B6" : "#8A94A6";
      animBtn.style.fontWeight = isAnim ? "600" : "500";
    }
    if (assetBtn) {
      assetBtn.classList.toggle("on", !isAnim);
      assetBtn.style.background = !isAnim ? "#18222B" : "transparent";
      assetBtn.style.color = !isAnim ? "#2EE6B6" : "#8A94A6";
      assetBtn.style.fontWeight = !isAnim ? "600" : "500";
    }
    const tryList = document.getElementById("agent-try-list");
    if (tryList) {
      const playSvg = '<svg class="ico" style="width:18px;height:18px;color:#2EE6B6;flex:none" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"></circle><path d="M10 8.5l5 3.5-5 3.5z"></path></svg>';
      const cubeSvg = '<svg class="ico" style="width:18px;height:18px;color:#2EE6B6;flex:none" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3l8 4.5v9L12 21l-8-4.5v-9zM12 12l8-4.5M12 12v9M12 12L4 7.5"></path></svg>';
      const chevSvg = '<svg class="ico" style="width:16px;height:16px;color:#5F6A7D;margin-left:auto" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6l6 6-6 6"></path></svg>';
      const rows = isAnim
        ? [
            { label: "Spin the cube", val: "Spin the cube", ico: playSvg },
            { label: "Bouncing ball loop", val: "Bouncing ball loop", ico: playSvg },
            { label: "Low-poly tree", val: "Low-poly tree", ico: cubeSvg }
          ]
        : [
            { label: "Low-poly tree", val: "Low-poly tree", ico: cubeSvg },
            { label: "Cyber sports car", val: "Cyber sports car", ico: cubeSvg },
            { label: "Hero robot mech", val: "Hero robot mech", ico: cubeSvg }
          ];
      tryList.innerHTML = rows.map((r, i) => `
        <button type="button" class="ag-try-row" data-ag-chip="${r.val}" style="width:100%;height:48px;padding:0 14px;border:none;${i < rows.length - 1 ? "border-bottom:1px solid #1A202C;" : ""}background:transparent;color:#E8ECF4;display:flex;align-items:center;gap:12px;text-align:left;cursor:pointer">
          ${r.ico}
          <span style="font-size:14px;color:#E8ECF4">${r.label}</span>
          ${chevSvg}
        </button>
      `).join("");
      wireSuggestionChips();
    }
    syncClearButtonVisibility();
  }

  function renderAttachmentsRow() {
    const row = document.getElementById("agent-attachments-row");
    if (!row) return;
    if (!agentState.attachments.length) {
      row.classList.remove("has-files");
      row.innerHTML = "";
      return;
    }
    row.classList.add("has-files");
    row.innerHTML = agentState.attachments.map((att, idx) => `
      <span class="agent-att-chip" title="${__esc(att.name)} (${__esc(att.sizeLabel)})">
        <span class="agent-att-ext">${__esc(att.ext)}</span>
        <span>${__esc(att.name.length > 20 ? att.name.slice(0, 18) + "..." : att.name)}</span>
        <button type="button" class="agent-att-rm" data-att-rm="${idx}" aria-label="Remove attachment">${SVG.close}</button>
      </span>
    `).join("");

    row.querySelectorAll("[data-att-rm]").forEach(btn => {
      btn.addEventListener("click", () => {
        const idx = Number(btn.getAttribute("data-att-rm"));
        agentState.attachments.splice(idx, 1);
        renderAttachmentsRow();
      });
    });
  }

  function buildProceduralAsset(kind) {
    const addPart = (prim, pos, scale, rot, col) => {
      he.addPrimitive(prim, pos);
      const id = e(he).selectedId;
      if (id) {
        he.setTransform(id, { position: pos, scale: scale || [1, 1, 1], rotation: rot || [0, 0, 0] });
        if (col) he.setColor(id, col);
        de.setClip(id, 0, 42.8);
      }
      return id;
    };

    if (kind === "cyber_car") {
      addPart("asset_car", [0, 0.55, 0], [1.25, 1.1, 1.25], [0, 0, 0], "#2EE6B6");
      Tt("Created Cyber Sports Car in 3D scene!", "success");
    } else if (kind === "hero_robot") {
      addPart("cube", [0, 1.05, 0], [0.75, 0.95, 0.45], [0, 0, 0], "#60a5fa");
      addPart("sphere", [0, 1.85, 0], [0.48, 0.48, 0.48], [0, 0, 0], "#2EE6B6");
      addPart("cylinder", [-0.62, 1.05, 0], [0.22, 0.75, 0.22], [0, 0, 0.15], "#94a3b8");
      addPart("cylinder", [0.62, 1.05, 0], [0.22, 0.75, 0.22], [0, 0, -0.15], "#94a3b8");
      addPart("cylinder", [-0.24, 0.35, 0], [0.25, 0.7, 0.25], [0, 0, 0], "#475569");
      addPart("cylinder", [0.24, 0.35, 0], [0.25, 0.7, 0.25], [0, 0, 0], "#475569");
      Tt("Created Hero Robot Mech in 3D scene!", "success");
    } else if (kind === "castle_tower") {
      addPart("cylinder", [0, 1.1, 0], [0.85, 2.2, 0.85], [0, 0, 0], "#94a3b8");
      addPart("cone", [0, 2.65, 0], [1.15, 1.1, 1.15], [0, 0, 0], "#f87171");
      Tt("Created Castle Tower in 3D scene!", "success");
    } else if (kind === "coin_ring") {
      for (let i = 0; i < 8; i++) {
        const ang = (i / 8) * Math.PI * 2;
        addPart("coin", [Math.cos(ang) * 1.8, 0.7, Math.sin(ang) * 1.8], [0.55, 0.55, 0.55], [0, -ang, 0], "#fbbf24");
      }
      Tt("Created 8-Coin Ring in 3D scene!", "success");
    } else if (kind === "stylized_tree") {
      addPart("cylinder", [0, 0.6, 0], [0.28, 1.2, 0.28], [0, 0, 0], "#b07b45");
      addPart("cone", [0, 1.6, 0], [1.1, 1.3, 1.1], [0, 0, 0], "#4ade80");
      addPart("cone", [0, 2.25, 0], [0.82, 1.05, 0.82], [0, 0, 0], "#2EE6B6");
      Tt("Created Low-Poly 3D Tree in scene!", "success");
    }
    setSplitLive3D(true);
    Wt(!0);
    _e();
  }

  function applyProceduralAnimation(preset, durationSec) {
    const st = e(he);
    let target = st.objects.find(o => o.id === st.selectedId && o.type !== "light" && o.type !== "camera") ||
                 st.objects.find(o => o.type !== "light" && o.type !== "camera" && o.type !== "bone");
    if (!target) {
      he.addPrimitive(preset === "bounce" ? "sphere" : "cube", [0, 0.5, 0]);
      const newId = e(he).selectedId;
      if (newId) he.setColor(newId, "#2EE6B6");
      target = e(he).objects.find(o => o.id === newId);
    } else if (preset === "bounce" && target.type === "cube" && st.objects.length === 1) {
      he.setColor(target.id, "#2EE6B6");
    }
    if (!target) return;

    const dur = Math.max(1, Math.min(30, Number(durationSec) || 3));
    const basePos = [...target.position];
    const baseRot = [...target.rotation];
    const baseScale = [...target.scale];

    he.animationEdit(() => {
      de.removeKeyframesFor(target.id);
      if (preset === "spin") {
        de.addKeyframe(target.id, { time: 0, position: basePos, rotation: baseRot, scale: baseScale });
        de.addKeyframe(target.id, { time: dur / 2, position: basePos, rotation: [baseRot[0], baseRot[1] + Math.PI, baseRot[2]], scale: baseScale });
        de.addKeyframe(target.id, { time: dur, position: basePos, rotation: [baseRot[0], baseRot[1] + Math.PI * 2, baseRot[2]], scale: baseScale });
      } else if (preset === "bounce") {
        de.addKeyframe(target.id, { time: 0, position: basePos, rotation: baseRot, scale: [baseScale[0] * 1.12, baseScale[1] * 0.85, baseScale[2] * 1.12] });
        de.addKeyframe(target.id, { time: dur * 0.5, position: [basePos[0], basePos[1] + 1.8, basePos[2]], rotation: [baseRot[0], baseRot[1] + Math.PI, baseRot[2]], scale: [baseScale[0] * 0.92, baseScale[1] * 1.12, baseScale[2] * 0.92] });
        de.addKeyframe(target.id, { time: dur, position: basePos, rotation: [baseRot[0], baseRot[1] + Math.PI * 2, baseRot[2]], scale: baseScale });
      } else if (preset === "orbit") {
        const rad = 2.0;
        for (let i = 0; i <= 8; i++) {
          const f = i / 8;
          const a = f * Math.PI * 2;
          de.addKeyframe(target.id, {
            time: dur * f,
            position: [Math.cos(a) * rad, basePos[1] + Math.sin(a * 2) * 0.3, Math.sin(a) * rad],
            rotation: [baseRot[0], -a, baseRot[2]],
            scale: baseScale
          });
        }
      }
      de.setClip(target.id, 0, Math.max(15, dur));
    });

    de.setDuration(Math.max(dur, e(de).duration));
    de.setLoop(true);
    de.setTime(0);
    de.setPlaying(true);
    setSplitLive3D(true);
    Wt(!0);
    Tt(`Running ${preset} animation (${dur}s loop) on ${target.name}!`, "success");
  }

  async function executeAgentPrompt() {
    const input = document.getElementById("agent-input");
    const raw = (input ? input.value : "").trim();
    if (!raw && !agentState.attachments.length) {
      Tt("Describe an animation or an asset first.", "warning");
      return;
    }

    const activeProv = resolveActiveProvider();
    const lower = raw.toLowerCase();

    if (activeProv && activeProv.apiKey && activeProv.apiKey.trim() && raw) {
      try {
        const sysPrompt = agentState.creationMode === "animation"
          ? "You are the Gizmo3D Animation Agent. Reply with one concise command from: spin, bounce, orbit."
          : "You are the Gizmo3D Asset Agent. Reply with a short command such as: add 3 cyan spheres, cyber_car, hero_robot, castle_tower, coin_ring, stylized_tree.";
        const res = await fetch(activeProv.endpointUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${activeProv.apiKey.trim()}`
          },
          body: JSON.stringify({
            model: activeProv.model,
            temperature: activeProv.temperature ?? 0.4,
            max_tokens: 256,
            messages: [
              { role: "system", content: sysPrompt },
              { role: "user", content: raw }
            ]
          })
        });
        if (res.ok) {
          const data = await res.json();
          const reply = data?.choices?.[0]?.message?.content || "";
          if (reply) {
            De.setAgentPrompt(reply);
            De.runAgent();
          }
        }
      } catch (err) {}
    }

    if (/(tree|low-poly tree|pine|forest)/i.test(lower)) {
      buildProceduralAsset("stylized_tree");
    } else if (/(car|vehicle|cyber)/i.test(lower)) {
      buildProceduralAsset("cyber_car");
    } else if (/(robot|mech|character)/i.test(lower)) {
      buildProceduralAsset("hero_robot");
    } else if (/(tower|castle)/i.test(lower)) {
      buildProceduralAsset("castle_tower");
    } else if (/(coin|ring)/i.test(lower)) {
      buildProceduralAsset("coin_ring");
    } else if (/(bounce|bouncing)/i.test(lower)) {
      applyProceduralAnimation("bounce", 2.4);
    } else if (/(spin|rotate|360)/i.test(lower)) {
      applyProceduralAnimation("spin", 3);
    } else if (/(orbit)/i.test(lower)) {
      applyProceduralAnimation("orbit", 4);
    } else if (agentState.creationMode === "animation") {
      applyProceduralAnimation("spin", 3);
    } else {
      De.setAgentPrompt(raw);
      De.runAgent();
      setSplitLive3D(true);
    }

    const heroTitle = document.getElementById("agent-hero-title");
    const heroSub = document.getElementById("agent-hero-sub");
    if (heroTitle) heroTitle.textContent = "Live 3D Scene Active Above";
    if (heroSub) heroSub.textContent = `Executed: "${raw}". Tap New Chat (top-right) for full-screen Agent view.`;
  }

  function renderSettingsModal() {
    const modal = document.getElementById("agent-settings-modal");
    const controls = document.getElementById("agent-settings-controls");
    const body = document.getElementById("agent-settings-body");
    if (!modal || !controls || !body) return;

    modal.classList.toggle("open", agentState.settingsOpen);
    updateProviderStatusPill();
    if (!agentState.settingsOpen) return;

    modal.querySelectorAll("[data-agent-stab]").forEach(btn => {
      btn.classList.toggle("on", btn.getAttribute("data-agent-stab") === agentState.settingsTab);
    });

    if (agentState.settingsTab === "providers") {
      controls.innerHTML = `
        <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;">
          <div class="prov-mode-switch">
            <button type="button" class="prov-mode-btn ${agentState.globalRouting === "auto" ? "on" : ""}" data-global-route="auto">Auto</button>
            <button type="button" class="prov-mode-btn ${agentState.globalRouting === "manual" ? "on" : ""}" data-global-route="manual">Manual</button>
          </div>
          <input type="search" id="prov-search-input" class="prov-input" style="width:180px;height:30px;" placeholder="Search providers..." value="${agentState.searchQuery.replace(/"/g, "&quot;")}" />
        </div>
        <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap;">
          <button type="button" id="btn-open-custom-prov" class="prov-mini-btn" style="border-color:#1E5F52;background:#0F2A27;color:#2EE6B6;" data-testid="btn-add-custom-provider">${SVG.plus}<span>Custom Provider</span></button>
          <button type="button" id="btn-save-all-prov" class="prov-mini-btn">${SVG.save}<span>Save All</span></button>
          <button type="button" id="btn-reset-prov" class="prov-mini-btn">${SVG.reset}<span>Reset</span></button>
        </div>
      `;

      const q = agentState.searchQuery.trim().toLowerCase();
      const activeProv = resolveActiveProvider();
      const filtered = agentState.providers
        .map((p, idx) => ({ p, idx }))
        .filter(({ p }) => !q || p.name.toLowerCase().includes(q) || p.model.toLowerCase().includes(q));

      const customBuilderHtml = `
        <div id="custom-provider-builder" class="custom-builder-box ${agentState.customBuilderOpen ? "open" : ""}" data-testid="custom-provider-builder">
          <div style="display:flex;align-items:center;justify-content:space-between;">
            <strong style="color:#2EE6B6;font-size:13px;">Create Custom API Provider Card</strong>
            <button type="button" id="btn-close-custom-builder" class="prov-mini-btn">${SVG.close}</button>
          </div>
          <div class="custom-builder-grid">
            <div class="prov-field"><label>Provider Name</label><input type="text" id="cust-prov-name" class="prov-input" placeholder="e.g. Custom Ollama / vLLM" /></div>
            <div class="prov-field"><label>Platform Link</label><input type="url" id="cust-prov-url" class="prov-input" placeholder="https://ollama.com" value="https://" /></div>
            <div class="prov-field"><label>API Key</label><input type="password" id="cust-prov-key" class="prov-input" placeholder="sk-..." /></div>
            <div class="prov-field"><label>Model Name</label><input type="text" id="cust-prov-model" class="prov-input" placeholder="e.g. llama3.3:70b" /></div>
            <div class="prov-field"><label>Model Link</label><input type="url" id="cust-prov-model-url" class="prov-input" placeholder="https://ollama.com/library" value="https://" /></div>
            <div class="prov-field"><label>Endpoint URL</label><input type="url" id="cust-prov-endpoint" class="prov-input" placeholder="https://api.openai.com/v1/chat/completions" value="https://api.openai.com/v1/chat/completions" /></div>
          </div>
          <div style="display:flex;justify-content:flex-end;margin-top:10px;">
            <button type="button" id="btn-create-custom-prov-confirm" class="prov-mini-btn" style="background:#2EE6B6;color:#06231D;border:none;font-weight:600;" data-testid="confirm-custom-provider">${SVG.check}<span>Save Custom Provider</span></button>
          </div>
        </div>
      `;

      const cardsHtml = filtered.map(({ p, idx }) => {
        const isAct = activeProv && activeProv.id === p.id;
        const showKey = Boolean(agentState.revealedKeys[p.id]);
        const hasKey = Boolean(p.apiKey && p.apiKey.trim());
        const presets = (p.modelPresets && p.modelPresets.length ? p.modelPresets : [p.model]);
        return `
          <div class="prov-card ${isAct ? "active-card" : ""}" data-prov-card="${p.id}" data-testid="provider-card-${p.id}">
            <div class="prov-card-head">
              <span class="prov-rank-badge">#${idx + 1}</span>
              <div class="prov-title-wrap">
                <div class="prov-name">
                  <span>${__esc(p.name)}</span>
                  <span class="prov-free-badge">${__esc(p.badge || "Free")}</span>
                </div>
              </div>
              <div class="prov-order-btns">
                <button type="button" class="prov-ord-btn" data-prov-move-up="${idx}" title="Move Up" ${idx === 0 ? "disabled" : ""}>${SVG.up}</button>
                <button type="button" class="prov-ord-btn" data-prov-move-dn="${idx}" title="Move Down" ${idx === agentState.providers.length - 1 ? "disabled" : ""}>${SVG.down}</button>
              </div>
            </div>

            <div class="prov-links-row">
              <a href="${__safeUrl(p.platformUrl)}" target="_blank" rel="noopener noreferrer" class="prov-ext-link"><span>Open Platform</span>${SVG.ext}</a>
              <a href="${__safeUrl(p.modelUrl || p.platformUrl)}" target="_blank" rel="noopener noreferrer" class="prov-ext-link"><span>Model Link</span>${SVG.ext}</a>
            </div>

            <div class="prov-field">
              <label><span>API Key</span><span>${hasKey ? "Saved" : "Not set"}</span></label>
              <div class="prov-input-row">
                <input type="${showKey ? "text" : "password"}" class="prov-input" data-prov-key-input="${p.id}" value="${showKey ? __esc(p.apiKey || "") : ""}" placeholder="${hasKey ? "•••••• saved — tap the eye to view" : "Enter API key..."}" />
                <button type="button" class="prov-mini-btn" data-prov-toggle-eye="${p.id}" title="Show/Hide">${showKey ? SVG.eyeOff : SVG.eye}</button>
                <button type="button" class="prov-mini-btn" data-prov-clear-key="${p.id}" title="Clear">${SVG.close}</button>
              </div>
            </div>

            <div class="prov-field">
              <label>
                <span>Model Name</span>
                <select class="prov-mini-btn" data-prov-preset-select="${p.id}" style="height:22px;padding:0 6px;font-size:10.5px;">
                  ${presets.map(m => `<option value="${__esc(m)}" ${m === p.model ? "selected" : ""}>${__esc(m)}</option>`).join("")}
                </select>
              </label>
              <input type="text" class="prov-input" data-prov-model-input="${p.id}" value="${__esc(p.model || "")}" placeholder="Model name..." />
            </div>

            <div class="prov-field">
              <label><span>Endpoint Link</span><a href="${__safeUrl(p.endpointUrl)}" target="_blank" rel="noopener noreferrer" style="color:#2EE6B6;text-decoration:none;">Open Link</a></label>
              <input type="url" class="prov-input" data-prov-ep-input="${p.id}" value="${__esc(p.endpointUrl || "")}" placeholder="https://..." />
            </div>

            <div class="prov-adv-row">
              <div class="prov-mode-switch">
                <button type="button" class="prov-mode-btn ${p.mode !== "manual" ? "on" : ""}" data-prov-mode="${p.id}" data-mode-val="auto">Auto</button>
                <button type="button" class="prov-mode-btn ${p.mode === "manual" ? "on" : ""}" data-prov-mode="${p.id}" data-mode-val="manual">Manual</button>
              </div>
              <label style="display:inline-flex;align-items:center;gap:5px;font-size:11.5px;color:#9AA3B2;cursor:pointer;">
                <input type="checkbox" data-prov-enabled="${p.id}" ${p.enabled !== false ? "checked" : ""} />
                <span>Enabled</span>
              </label>
            </div>

            <div class="prov-actions-foot">
              <button type="button" class="prov-act-btn save" data-prov-save="${p.id}">${SVG.save}<span>Save</span></button>
              <button type="button" class="prov-act-btn" data-prov-use="${p.id}">${SVG.check}<span>${isAct ? "Active" : "Use"}</span></button>
              <button type="button" class="prov-act-btn del" data-prov-del="${p.id}">${SVG.trash}<span>Delete</span></button>
            </div>
          </div>
        `;
      }).join("");

      body.innerHTML = customBuilderHtml + `<div class="prov-grid" data-testid="provider-cards-grid">${cardsHtml}</div>`;
    } else if (agentState.settingsTab === "mcp") {
      controls.innerHTML = `
        <span style="font-size:12.5px;color:#9AA3B2;">MCP Servers</span>
        <div style="display:flex;gap:6px;">
          <button type="button" id="btn-add-custom-mcp" class="prov-mini-btn" style="border-color:#1E5F52;background:#0F2A27;color:#2EE6B6;">${SVG.plus}<span>Custom MCP</span></button>
          <button type="button" id="btn-reset-mcp" class="prov-mini-btn">${SVG.reset}<span>Reset</span></button>
        </div>
      `;
      body.innerHTML = `<div class="prov-grid">` + agentState.mcpServers.map((m, idx) => `
        <div class="prov-card ${m.enabled ? "active-card" : ""}" data-mcp-card="${m.id}">
          <div class="prov-card-head">
            <span class="prov-rank-badge">#${idx + 1}</span>
            <div class="prov-title-wrap"><div class="prov-name"><span>${__esc(m.name)}</span><span class="prov-free-badge">${__esc(m.badge)}</span></div></div>
            <div class="prov-order-btns">
              <button type="button" class="prov-ord-btn" data-mcp-up="${idx}" ${idx === 0 ? "disabled" : ""}>${SVG.up}</button>
              <button type="button" class="prov-ord-btn" data-mcp-dn="${idx}" ${idx === agentState.mcpServers.length - 1 ? "disabled" : ""}>${SVG.down}</button>
            </div>
          </div>
          <div class="prov-links-row">
            <a href="${__safeUrl(m.platformUrl)}" target="_blank" rel="noopener noreferrer" class="prov-ext-link"><span>Open Platform</span>${SVG.ext}</a>
          </div>
          <div class="prov-field"><label><span>Endpoint URL</span></label><input type="text" class="prov-input" data-mcp-ep="${m.id}" value="${m.endpointUrl.replace(/"/g, "&quot;")}" /></div>
          <div class="prov-field"><label><span>API Key / Token</span></label><input type="password" class="prov-input" data-mcp-key="${m.id}" value="${(m.authKey || "").replace(/"/g, "&quot;")}" placeholder="Optional token..." /></div>
          <div class="prov-adv-row">
            <div class="prov-mode-switch">
              <button type="button" class="prov-mode-btn ${m.mode !== "manual" ? "on" : ""}" data-mcp-mode="${m.id}" data-mode-val="auto">Auto</button>
              <button type="button" class="prov-mode-btn ${m.mode === "manual" ? "on" : ""}" data-mcp-mode="${m.id}" data-mode-val="manual">Manual</button>
            </div>
            <label style="display:inline-flex;align-items:center;gap:5px;font-size:11.5px;color:#9AA3B2;"><input type="checkbox" data-mcp-en="${m.id}" ${m.enabled ? "checked" : ""} /><span>Enabled</span></label>
          </div>
          <div class="prov-actions-foot">
            <button type="button" class="prov-act-btn save" data-mcp-save="${m.id}">${SVG.save}<span>Save</span></button>
            <button type="button" class="prov-act-btn del" data-mcp-del="${m.id}">${SVG.trash}<span>Delete</span></button>
          </div>
        </div>
      `).join("") + `</div>`;
    } else {
      controls.innerHTML = `
        <span style="font-size:12.5px;color:#9AA3B2;">Agent Skills</span>
        <div style="display:flex;gap:6px;">
          <button type="button" id="btn-add-custom-skill" class="prov-mini-btn" style="border-color:#1E5F52;background:#0F2A27;color:#2EE6B6;">${SVG.plus}<span>Custom Skill</span></button>
          <button type="button" id="btn-reset-skills" class="prov-mini-btn">${SVG.reset}<span>Reset</span></button>
        </div>
      `;
      body.innerHTML = `<div class="prov-grid">` + agentState.skills.map((sk, idx) => `
        <div class="prov-card ${sk.enabled ? "active-card" : ""}" data-skill-card="${sk.id}">
          <div class="prov-card-head">
            <span class="prov-rank-badge">#${idx + 1}</span>
            <div class="prov-title-wrap"><div class="prov-name"><span>${__esc(sk.name)}</span><span class="prov-free-badge">${__esc(sk.targetMode)}</span></div></div>
            <div class="prov-order-btns">
              <button type="button" class="prov-ord-btn" data-skill-up="${idx}" ${idx === 0 ? "disabled" : ""}>${SVG.up}</button>
              <button type="button" class="prov-ord-btn" data-skill-dn="${idx}" ${idx === agentState.skills.length - 1 ? "disabled" : ""}>${SVG.down}</button>
            </div>
          </div>
          <div class="prov-field"><label><span>Instructions</span></label><textarea class="prov-input" data-skill-inst="${sk.id}" style="height:64px;padding:8px;resize:vertical;">${sk.instructions}</textarea></div>
          <div class="prov-adv-row">
            <div class="prov-mode-switch">
              <button type="button" class="prov-mode-btn ${sk.mode !== "manual" ? "on" : ""}" data-skill-mode="${sk.id}" data-mode-val="auto">Auto</button>
              <button type="button" class="prov-mode-btn ${sk.mode === "manual" ? "on" : ""}" data-skill-mode="${sk.id}" data-mode-val="manual">Manual</button>
            </div>
            <label style="display:inline-flex;align-items:center;gap:5px;font-size:11.5px;color:#9AA3B2;"><input type="checkbox" data-skill-en="${sk.id}" ${sk.enabled ? "checked" : ""} /><span>Enabled</span></label>
          </div>
          <div class="prov-actions-foot">
            <button type="button" class="prov-act-btn save" data-skill-save="${sk.id}">${SVG.save}<span>Save</span></button>
            <button type="button" class="prov-act-btn del" data-skill-del="${sk.id}">${SVG.trash}<span>Delete</span></button>
          </div>
        </div>
      `).join("") + `</div>`;
    }

    wireSettingsEvents();
  }

  function syncCardInputsFromDom(provId) {
    const p = agentState.providers.find(x => x.id === provId);
    if (!p) return null;
    const keyEl = document.querySelector(`[data-prov-key-input="${provId}"]`);
    const modEl = document.querySelector(`[data-prov-model-input="${provId}"]`);
    const epEl = document.querySelector(`[data-prov-ep-input="${provId}"]`);
    const enEl = document.querySelector(`[data-prov-enabled="${provId}"]`);
    if (keyEl && keyEl.value.trim()) p.apiKey = keyEl.value.trim();
    if (modEl && modEl.value.trim()) p.model = modEl.value.trim();
    if (epEl && epEl.value.trim()) p.endpointUrl = epEl.value.trim();
    if (enEl) p.enabled = Boolean(enEl.checked);
    return p;
  }

  function wireSettingsEvents() {
    const controls = document.getElementById("agent-settings-controls");
    const body = document.getElementById("agent-settings-body");
    if (!controls || !body) return;

    controls.querySelectorAll("[data-global-route]").forEach(btn => {
      btn.addEventListener("click", () => {
        agentState.globalRouting = btn.getAttribute("data-global-route");
        try { localStorage.setItem(STORAGE_KEY_ROUTING, agentState.globalRouting); } catch {}
        renderSettingsModal();
      });
    });

    const searchInput = document.getElementById("prov-search-input");
    searchInput?.addEventListener("input", ev => {
      agentState.searchQuery = ev.target.value;
      renderSettingsModal();
      const nextInput = document.getElementById("prov-search-input");
      if (nextInput) {
        nextInput.focus();
        nextInput.setSelectionRange(nextInput.value.length, nextInput.value.length);
      }
    });

    document.getElementById("btn-open-custom-prov")?.addEventListener("click", () => {
      agentState.customBuilderOpen = !agentState.customBuilderOpen;
      renderSettingsModal();
    });
    document.getElementById("btn-close-custom-builder")?.addEventListener("click", () => {
      agentState.customBuilderOpen = false;
      renderSettingsModal();
    });

    document.getElementById("btn-create-custom-prov-confirm")?.addEventListener("click", () => {
      const name = (document.getElementById("cust-prov-name")?.value || "").trim() || "Custom Provider";
      const platformUrl = (document.getElementById("cust-prov-url")?.value || "").trim() || "https://openai.com";
      const apiKey = (document.getElementById("cust-prov-key")?.value || "").trim();
      const model = (document.getElementById("cust-prov-model")?.value || "").trim() || "gpt-4o-mini";
      const modelUrl = (document.getElementById("cust-prov-model-url")?.value || "").trim() || platformUrl;
      const endpointUrl = (document.getElementById("cust-prov-endpoint")?.value || "").trim() || "https://api.openai.com/v1/chat/completions";
      agentState.providers.unshift({
        id: "custom-" + Date.now(),
        name,
        badge: "Custom",
        platformUrl,
        modelUrl,
        endpointUrl,
        model,
        modelPresets: [model],
        apiKey,
        mode: "auto",
        enabled: true,
        temperature: 0.4,
        maxTokens: 4096,
        custom: true
      });
      agentState.customBuilderOpen = false;
      saveJson(STORAGE_KEY_PROVIDERS, agentState.providers);
      renderSettingsModal();
      Tt(`Added ${name}`, "success");
    });

    document.getElementById("btn-save-all-prov")?.addEventListener("click", () => {
      agentState.providers.forEach(p => syncCardInputsFromDom(p.id));
      saveJson(STORAGE_KEY_PROVIDERS, agentState.providers);
      renderSettingsModal();
      Tt("Saved all providers.", "success");
    });

    document.getElementById("btn-reset-prov")?.addEventListener("click", () => {
      agentState.providers = JSON.parse(JSON.stringify(DEFAULT_PROVIDERS));
      saveJson(STORAGE_KEY_PROVIDERS, agentState.providers);
      renderSettingsModal();
      Tt("Restored default providers.", "info");
    });

    body.querySelectorAll("[data-prov-move-up]").forEach(btn => {
      btn.addEventListener("click", () => {
        agentState.providers.forEach(p => syncCardInputsFromDom(p.id));
        const idx = Number(btn.getAttribute("data-prov-move-up"));
        if (idx > 0) {
          const tmp = agentState.providers[idx - 1];
          agentState.providers[idx - 1] = agentState.providers[idx];
          agentState.providers[idx] = tmp;
          saveJson(STORAGE_KEY_PROVIDERS, agentState.providers);
          renderSettingsModal();
        }
      });
    });

    body.querySelectorAll("[data-prov-move-dn]").forEach(btn => {
      btn.addEventListener("click", () => {
        agentState.providers.forEach(p => syncCardInputsFromDom(p.id));
        const idx = Number(btn.getAttribute("data-prov-move-dn"));
        if (idx < agentState.providers.length - 1) {
          const tmp = agentState.providers[idx + 1];
          agentState.providers[idx + 1] = agentState.providers[idx];
          agentState.providers[idx] = tmp;
          saveJson(STORAGE_KEY_PROVIDERS, agentState.providers);
          renderSettingsModal();
        }
      });
    });

    body.querySelectorAll("[data-prov-toggle-eye]").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-prov-toggle-eye");
        syncCardInputsFromDom(id);
        agentState.revealedKeys[id] = !agentState.revealedKeys[id];
        renderSettingsModal();
      });
    });

    body.querySelectorAll("[data-prov-clear-key]").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-prov-clear-key");
        const p = agentState.providers.find(x => x.id === id);
        if (p) {
          p.apiKey = "";
          saveJson(STORAGE_KEY_PROVIDERS, agentState.providers);
          renderSettingsModal();
        }
      });
    });

    body.querySelectorAll("[data-prov-preset-select]").forEach(sel => {
      sel.addEventListener("change", () => {
        const id = sel.getAttribute("data-prov-preset-select");
        const p = syncCardInputsFromDom(id);
        if (p) {
          p.model = sel.value;
          saveJson(STORAGE_KEY_PROVIDERS, agentState.providers);
          renderSettingsModal();
        }
      });
    });

    body.querySelectorAll("[data-prov-mode]").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-prov-mode");
        const modeVal = btn.getAttribute("data-mode-val");
        const p = syncCardInputsFromDom(id);
        if (p) {
          p.mode = modeVal;
          if (modeVal === "manual") {
            agentState.globalRouting = "manual";
            try { localStorage.setItem(STORAGE_KEY_ROUTING, "manual"); } catch {}
          }
          saveJson(STORAGE_KEY_PROVIDERS, agentState.providers);
          renderSettingsModal();
        }
      });
    });

    body.querySelectorAll("[data-prov-save]").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-prov-save");
        const p = syncCardInputsFromDom(id);
        saveJson(STORAGE_KEY_PROVIDERS, agentState.providers);
        renderSettingsModal();
        Tt(`Saved ${p ? p.name : "provider"}.`, "success");
      });
    });

    body.querySelectorAll("[data-prov-use]").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-prov-use");
        agentState.providers.forEach(x => {
          syncCardInputsFromDom(x.id);
          if (x.id === id) {
            x.mode = "manual";
            x.enabled = true;
          } else if (x.mode === "manual") {
            x.mode = "auto";
          }
        });
        agentState.globalRouting = "manual";
        try { localStorage.setItem(STORAGE_KEY_ROUTING, "manual"); } catch {}
        saveJson(STORAGE_KEY_PROVIDERS, agentState.providers);
        renderSettingsModal();
        const p = agentState.providers.find(x => x.id === id);
        Tt(`Selected ${p ? p.model : id}`, "success");
      });
    });

    body.querySelectorAll("[data-prov-del]").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-prov-del");
        agentState.providers = agentState.providers.filter(x => x.id !== id);
        saveJson(STORAGE_KEY_PROVIDERS, agentState.providers);
        renderSettingsModal();
      });
    });

    // MCP Events
    document.getElementById("btn-add-custom-mcp")?.addEventListener("click", () => {
      agentState.mcpServers.unshift({
        id: "mcp-custom-" + Date.now(),
        name: "Custom MCP Server",
        badge: "Custom",
        platformUrl: "https://modelcontextprotocol.io",
        endpointUrl: "http://localhost:8080/mcp/sse",
        transport: "SSE",
        authKey: "",
        mode: "auto",
        enabled: true,
        custom: true
      });
      saveJson(STORAGE_KEY_MCP, agentState.mcpServers);
      renderSettingsModal();
    });
    document.getElementById("btn-reset-mcp")?.addEventListener("click", () => {
      agentState.mcpServers = JSON.parse(JSON.stringify(DEFAULT_MCP_SERVERS));
      saveJson(STORAGE_KEY_MCP, agentState.mcpServers);
      renderSettingsModal();
    });
    body.querySelectorAll("[data-mcp-up]").forEach(btn => {
      btn.addEventListener("click", () => {
        const idx = Number(btn.getAttribute("data-mcp-up"));
        if (idx > 0) {
          const t = agentState.mcpServers[idx - 1];
          agentState.mcpServers[idx - 1] = agentState.mcpServers[idx];
          agentState.mcpServers[idx] = t;
          saveJson(STORAGE_KEY_MCP, agentState.mcpServers);
          renderSettingsModal();
        }
      });
    });
    body.querySelectorAll("[data-mcp-dn]").forEach(btn => {
      btn.addEventListener("click", () => {
        const idx = Number(btn.getAttribute("data-mcp-dn"));
        if (idx < agentState.mcpServers.length - 1) {
          const t = agentState.mcpServers[idx + 1];
          agentState.mcpServers[idx + 1] = agentState.mcpServers[idx];
          agentState.mcpServers[idx] = t;
          saveJson(STORAGE_KEY_MCP, agentState.mcpServers);
          renderSettingsModal();
        }
      });
    });
    body.querySelectorAll("[data-mcp-save]").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-mcp-save");
        const m = agentState.mcpServers.find(x => x.id === id);
        if (m) {
          const ep = document.querySelector(`[data-mcp-ep="${id}"]`);
          const k = document.querySelector(`[data-mcp-key="${id}"]`);
          const en = document.querySelector(`[data-mcp-en="${id}"]`);
          if (ep) m.endpointUrl = ep.value.trim();
          if (k) m.authKey = k.value.trim();
          if (en) m.enabled = Boolean(en.checked);
          saveJson(STORAGE_KEY_MCP, agentState.mcpServers);
          renderSettingsModal();
          Tt("Saved MCP Server.", "success");
        }
      });
    });
    body.querySelectorAll("[data-mcp-mode]").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-mcp-mode");
        const m = agentState.mcpServers.find(x => x.id === id);
        if (m) {
          m.mode = btn.getAttribute("data-mode-val");
          saveJson(STORAGE_KEY_MCP, agentState.mcpServers);
          renderSettingsModal();
        }
      });
    });
    body.querySelectorAll("[data-mcp-del]").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-mcp-del");
        agentState.mcpServers = agentState.mcpServers.filter(x => x.id !== id);
        saveJson(STORAGE_KEY_MCP, agentState.mcpServers);
        renderSettingsModal();
      });
    });

    // Skills Events
    document.getElementById("btn-add-custom-skill")?.addEventListener("click", () => {
      agentState.skills.unshift({
        id: "skill-custom-" + Date.now(),
        name: "Custom Agent Skill",
        targetMode: agentState.creationMode,
        mode: "auto",
        enabled: true,
        instructions: "Custom instructions for asset or animation generation.",
        custom: true
      });
      saveJson(STORAGE_KEY_SKILLS, agentState.skills);
      renderSettingsModal();
    });
    document.getElementById("btn-reset-skills")?.addEventListener("click", () => {
      agentState.skills = JSON.parse(JSON.stringify(DEFAULT_SKILLS));
      saveJson(STORAGE_KEY_SKILLS, agentState.skills);
      renderSettingsModal();
    });
    body.querySelectorAll("[data-skill-up]").forEach(btn => {
      btn.addEventListener("click", () => {
        const idx = Number(btn.getAttribute("data-skill-up"));
        if (idx > 0) {
          const t = agentState.skills[idx - 1];
          agentState.skills[idx - 1] = agentState.skills[idx];
          agentState.skills[idx] = t;
          saveJson(STORAGE_KEY_SKILLS, agentState.skills);
          renderSettingsModal();
        }
      });
    });
    body.querySelectorAll("[data-skill-dn]").forEach(btn => {
      btn.addEventListener("click", () => {
        const idx = Number(btn.getAttribute("data-skill-dn"));
        if (idx < agentState.skills.length - 1) {
          const t = agentState.skills[idx + 1];
          agentState.skills[idx + 1] = agentState.skills[idx];
          agentState.skills[idx] = t;
          saveJson(STORAGE_KEY_SKILLS, agentState.skills);
          renderSettingsModal();
        }
      });
    });
    body.querySelectorAll("[data-skill-save]").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-skill-save");
        const sk = agentState.skills.find(x => x.id === id);
        if (sk) {
          const inst = document.querySelector(`[data-skill-inst="${id}"]`);
          const en = document.querySelector(`[data-skill-en="${id}"]`);
          if (inst) sk.instructions = inst.value;
          if (en) sk.enabled = Boolean(en.checked);
          saveJson(STORAGE_KEY_SKILLS, agentState.skills);
          renderSettingsModal();
          Tt("Saved Skill.", "success");
        }
      });
    });
    body.querySelectorAll("[data-skill-mode]").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-skill-mode");
        const sk = agentState.skills.find(x => x.id === id);
        if (sk) {
          sk.mode = btn.getAttribute("data-mode-val");
          saveJson(STORAGE_KEY_SKILLS, agentState.skills);
          renderSettingsModal();
        }
      });
    });
    body.querySelectorAll("[data-skill-del]").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-skill-del");
        agentState.skills = agentState.skills.filter(x => x.id !== id);
        saveJson(STORAGE_KEY_SKILLS, agentState.skills);
        renderSettingsModal();
      });
    });
  }

  function runSlashCommand(cmdStr) {
    const inp = document.getElementById("agent-input");
    if (inp) inp.value = cmdStr;
    document.getElementById("agent-slash-popup")?.classList.remove("open");
    if (cmdStr.startsWith("/anim-director")) {
      agentState.creationMode = "animation";
      updateModeButtons();
      let cam = e(he).objects.find(o => o.type.startsWith("camera"));
      if (!cam) {
        he.addPrimitive("camera", [0, 2.2, 5.2]);
        cam = e(he).objects.find(o => o.type.startsWith("camera"));
      }
      const meshTarget = e(he).objects.find(o => !o.type.startsWith("camera") && !o.type.startsWith("light") && o.type !== "bone");
      if (cam && meshTarget) {
        he.setCameraProps(cam.id, { targetId: meshTarget.id, trackingMode: "orbit", active: true });
      }
      applyProceduralAnimation("orbit", 4);
      Tt("Executed /anim-director: Orbit camera & trajectory!", "success");
    } else if (cmdStr.startsWith("/rig-mcp")) {
      agentState.creationMode = "asset";
      updateModeButtons();
      const hasMesh = e(he).objects.some(o => !o.type.startsWith("camera") && !o.type.startsWith("light") && o.type !== "bone");
      if (!hasMesh) buildProceduralAsset("hero_robot");
      he.addBoneChain([0, 0.15, 0], 3, 0.65);
      const sel = e(he).objects.find(o => o.type !== "bone" && o.type !== "light" && o.type !== "camera");
      if (sel) he.bindArmature(sel.id);
      setSplitLive3D(true);
      Wt(!0);
      _e();
      Tt("Executed /rig-mcp: Auto-rigged 3-bone armature with skin weights!", "success");
    } else if (cmdStr.startsWith("/toon-shader")) {
      le.setShadingMode("toon");
      __lookState.bloomEnabled = true;
      setSplitLive3D(true);
      _e();
      Tt("Executed /toon-shader: 2-band Cel Shading + Outlines active!", "success");
    } else {
      executeAgentPrompt();
    }
  }

  function wireSuggestionChips() {
    document.querySelectorAll("[data-ag-chip]").forEach(chip => {
      chip.addEventListener("click", () => {
        const text = chip.getAttribute("data-ag-chip") || "";
        const inp = document.getElementById("agent-input");
        if (inp) inp.value = text;
        if (/tree|car|robot|tower|coin/i.test(text)) {
          agentState.creationMode = "asset";
        } else {
          agentState.creationMode = "animation";
        }
        updateModeButtons();
        executeAgentPrompt();
      });
    });
    document.querySelectorAll("[data-ag-cmd]").forEach(cmdBtn => {
      cmdBtn.onclick = () => {
        const cmd = cmdBtn.getAttribute("data-ag-cmd") || "";
        runSlashCommand(cmd);
      };
    });
  }

  // Top Menu Button
  document.getElementById("agent-menu-btn")?.addEventListener("click", () => {
    agentState.menuOpen = !agentState.menuOpen;
    document.getElementById("agent-feature-menu")?.classList.toggle("open", agentState.menuOpen);
    document.getElementById("agent-menu-btn")?.classList.toggle("on", agentState.menuOpen);
  });

  // Top-Right New Chat Button (Resets prompt & returns to Full-Screen Agent Hero)
  document.getElementById("agent-new-chat-btn")?.addEventListener("click", () => {
    const inp = document.getElementById("agent-input");
    if (inp) inp.value = "";
    agentState.attachments = [];
    renderAttachmentsRow();
    setSplitLive3D(false);
    const heroTitle = document.getElementById("agent-hero-title");
    const heroSub = document.getElementById("agent-hero-sub");
    if (heroTitle) heroTitle.textContent = "What are we building?";
    if (heroSub) heroSub.innerHTML = 'Describe an animation or a 3D asset. Type <span style="font-family:ui-monospace,monospace;color:#2EE6B6">/</span> for MCP and Skills.';
    Tt("Started new Agent chat.", "info");
  });

  // Menu Actions
  document.querySelectorAll("[data-agent-feat]").forEach(btn => {
    btn.addEventListener("click", () => {
      const feat = btn.getAttribute("data-agent-feat");
      agentState.menuOpen = false;
      document.getElementById("agent-feature-menu")?.classList.remove("open");
      document.getElementById("agent-menu-btn")?.classList.remove("on");

      if (feat === "open-home") {
        window.__openStudioHome?.();
      } else if (feat === "switch-editor") {
        No = "Add"; _o = "Add"; he.setEditMode(false); ge.setWorkspace("mod"); de.setShow(true);
        ko(); Bo && wo(false); Vo(); Jo(); Ve(); _e();
        Tt("Switched to Full 3D Editor.", "info");
      } else if (feat === "export-project") {
        ye(fe("Gizmo_Studio_Project"));
        Tt("Downloaded project (.tsf.json)!", "success");
      } else if (feat === "toggle-preview") {
        setSplitLive3D(!agentState.splitLive3D);
      } else if (feat === "spin-cube") {
        applyProceduralAnimation("spin", 3);
      } else if (feat === "bounce-ball") {
        applyProceduralAnimation("bounce", 2.4);
      } else if (feat === "lowpoly-tree") {
        buildProceduralAsset("stylized_tree");
      } else if (feat === "build-studio") {
        buildProceduralAsset("hero_robot");
        buildProceduralAsset("coin_ring");
      } else if (feat === "auto-rig") {
        he.addBoneChain([0, 0.15, 0], 3, 0.65);
        const sel = e(he).objects.find(o => o.type !== "bone" && o.type !== "light" && o.type !== "camera");
        if (sel) he.bindArmature(sel.id);
        setSplitLive3D(true);
        Tt("Created 3-Bone Armature in 3D scene!", "success");
      } else if (feat === "open-providers") {
        agentState.settingsOpen = true;
        agentState.settingsTab = "providers";
        renderSettingsModal();
      } else if (feat === "clear-scene") {
        he.clear();
        de.clearKeyframes();
        Tt("3D Scene cleared.", "info");
      }
    });
  });

  // Mode Toggle (Animation / Asset)
  document.getElementById("agent-mode-anim")?.addEventListener("click", () => {
    agentState.creationMode = "animation";
    updateModeButtons();
  });
  document.getElementById("agent-mode-asset")?.addEventListener("click", () => {
    agentState.creationMode = "asset";
    updateModeButtons();
  });

  // Clear Prompt Cross Button
  document.getElementById("agent-prompt-clear")?.addEventListener("click", () => {
    const inp = document.getElementById("agent-input");
    if (inp) {
      inp.value = "";
      inp.focus();
    }
    Tt("Prompt cleared.", "info");
  });

  // Universal + File Attachment Button
  const univFileInput = document.getElementById("agent-universal-file");
  document.getElementById("agent-plus-btn")?.addEventListener("click", () => {
    univFileInput?.click();
  });
  univFileInput?.addEventListener("change", async ev => {
    const files = ev.target.files;
    if (!files || !files.length) return;
    for (const file of files) {
      const name = file.name || "attachment";
      const ext = (name.includes(".") ? name.split(".").pop() : "file").toUpperCase();
      const kb = Math.max(1, Math.round((file.size || 1024) / 1024));
      agentState.attachments.push({
        name,
        ext,
        sizeLabel: kb > 1024 ? (kb / 1024).toFixed(1) + " MB" : kb + " KB"
      });
    }
    renderAttachmentsRow();
    const tlInput = document.getElementById("tl-universal-file");
    if (tlInput) {
      try {
        const dt = new DataTransfer();
        for (const f of files) dt.items.add(f);
        tlInput.files = dt.files;
        tlInput.dispatchEvent(new Event("change"));
      } catch {}
    }
    setSplitLive3D(true);
    ev.target.value = "";
  });

  // Open / Close Settings Overlay Modal
  document.getElementById("agent-settings-btn")?.addEventListener("click", () => {
    agentState.settingsOpen = true;
    renderSettingsModal();
  });
  document.getElementById("agent-active-provider-pill")?.addEventListener("click", () => {
    agentState.settingsOpen = true;
    agentState.settingsTab = "providers";
    renderSettingsModal();
  });
  document.getElementById("agent-settings-close")?.addEventListener("click", () => {
    agentState.settingsOpen = false;
    renderSettingsModal();
  });
  document.getElementById("agent-settings-modal")?.addEventListener("click", ev => {
    if (ev.target && ev.target.id === "agent-settings-modal") {
      agentState.settingsOpen = false;
      renderSettingsModal();
    }
  });
  document.querySelectorAll("[data-agent-stab]").forEach(btn => {
    btn.addEventListener("click", () => {
      agentState.settingsTab = btn.getAttribute("data-agent-stab");
      renderSettingsModal();
    });
  });

  // Send Button & Enter Key (Attached ONCE!)
  const sendBtn = document.getElementById("agent-send");
  const promptInput = document.getElementById("agent-input");
  sendBtn?.addEventListener("click", () => executeAgentPrompt());
  promptInput?.addEventListener("keydown", ev => {
    if (ev.key === "Enter" && !ev.shiftKey) {
      ev.preventDefault();
      executeAgentPrompt();
    }
  });

  // Wire new Agent header & composer buttons
  document.getElementById("agent-split-toggle-btn")?.addEventListener("click", () => {
    setSplitLive3D(!agentState.splitLive3D);
  });
  document.getElementById("agent-mcp-quick-btn")?.addEventListener("click", (ev) => {
    ev.stopPropagation();
    document.getElementById("agent-slash-popup")?.classList.toggle("open");
  });
  document.getElementById("agent-slash-open-modal")?.addEventListener("click", () => {
    document.getElementById("agent-slash-popup")?.classList.remove("open");
    agentState.settingsOpen = true;
    agentState.settingsTab = "mcp";
    renderSettingsModal();
  });
  document.querySelectorAll("[data-slash-cmd]").forEach(btn => {
    btn.addEventListener("click", () => {
      runSlashCommand(btn.getAttribute("data-slash-cmd") || "");
    });
  });
  promptInput?.addEventListener("input", () => {
    syncClearButtonVisibility();
    const val = promptInput.value;
    if (val === "/" || val.endsWith(" /")) {
      document.getElementById("agent-slash-popup")?.classList.add("open");
    } else if (!val.startsWith("/")) {
      document.getElementById("agent-slash-popup")?.classList.remove("open");
    }
  });
  document.getElementById("agent-open-home-btn")?.addEventListener("click", () => {
    window.__openStudioHome?.();
  });
  document.getElementById("agent-to-editor-btn")?.addEventListener("click", () => {
    No = "Add";
    _o = "Add";
    he.setEditMode(false);
    ge.setWorkspace("mod");
    de.setShow(true);
    ko();
    Bo && wo(false);
    Vo();
    Jo();
    Ve();
    _e();
    Tt("Switched to 3D Editor.", "info");
  });
  promptInput?.addEventListener("input", () => syncClearButtonVisibility());

  // =========================================================================
  // 1:1 LANDING PAGE CONTROLLER (Toon Studio 3D · Projects)
  // =========================================================================
  function spawnLandingExample(kind) {
    he.clear();
    de.clearKeyframes();
    const addPart = (prim, name, pos, scale, rot, col) => {
      he.addPrimitive(prim, pos);
      const id = e(he).selectedId;
      if (id) {
        if (name) he.renameObject(id, name);
        he.setTransform(id, { position: pos, scale: scale || [1, 1, 1], rotation: rot || [0, 0, 0] });
        if (col) he.setColor(id, col);
        de.setClip(id, 0, 42.8);
      }
      return id;
    };

    if (kind === "cozy_house") {
      addPart("plane", "Garden_Ground", [0, 0, 0], [3.2, 1, 3.2], [0, 0, 0], "#1e3a2f");
      addPart("cube", "Cottage_Walls", [0, 0.85, 0], [1.9, 1.5, 1.6], [0, 0, 0], "#f5d0a9");
      addPart("pyramid", "Cottage_Roof", [0, 2.15, 0], [2.35, 1.25, 2.0], [0, Math.PI / 4, 0], "#e06d53");
      addPart("cube", "Chimney", [0.62, 2.45, -0.35], [0.32, 0.85, 0.32], [0, 0, 0], "#94a3b8");
      addPart("cube", "Front_Door", [0, 0.52, 0.82], [0.42, 0.88, 0.08], [0, 0, 0], "#7c4a21");
      addPart("cube", "Window_Left", [-0.55, 0.95, 0.82], [0.36, 0.36, 0.08], [0, 0, 0], "#fef08a");
      addPart("cube", "Window_Right", [0.55, 0.95, 0.82], [0.36, 0.36, 0.08], [0, 0, 0], "#fef08a");
      addPart("cylinder", "Pine_Trunk", [-1.65, 0.55, 0.65], [0.22, 1.1, 0.22], [0, 0, 0], "#854d0e");
      addPart("cone", "Pine_Leaves", [-1.65, 1.5, 0.65], [0.95, 1.35, 0.95], [0, 0, 0], "#3ddbb0");
      No = "Animate";
      _o = "Animate";
      ge.setWorkspace("ani");
      de.setShow(true);
      Tt("Opened Cozy House (Model)", "success");
    } else if (kind === "toy_car") {
      addPart("plane", "Studio_Floor", [0, 0, 0], [3.4, 1, 3.4], [0, 0, 0], "#161b26");
      const carId = addPart("asset_car", "Toy_Car_Body", [0, 0.58, 0], [1.35, 1.18, 1.35], [0, 0.35, 0], "#3ddbb0");
      addPart("cylinder", "Wheel_FL", [-0.68, 0.32, 0.62], [0.36, 0.18, 0.36], [0, 0, Math.PI / 2], "#1e293b");
      addPart("cylinder", "Wheel_FR", [0.68, 0.32, 0.62], [0.36, 0.18, 0.36], [0, 0, Math.PI / 2], "#1e293b");
      addPart("cylinder", "Wheel_RL", [-0.68, 0.32, -0.62], [0.36, 0.18, 0.36], [0, 0, Math.PI / 2], "#1e293b");
      addPart("cylinder", "Wheel_RR", [0.68, 0.32, -0.62], [0.36, 0.18, 0.36], [0, 0, Math.PI / 2], "#1e293b");
      if (carId) he.selectObject(carId);
      No = "Animate";
      _o = "Animate";
      ge.setWorkspace("ani");
      de.setShow(true);
      Tt("Opened Toy Car (Model)", "success");
    } else if (kind === "city_block") {
      addPart("plane", "City_Road_Grid", [0, 0, 0], [4.2, 1, 4.2], [0, 0, 0], "#1e2433");
      addPart("cube", "Tower_Central", [-0.85, 1.65, -0.65], [1.1, 3.3, 1.1], [0, 0, 0], "#60a5fa");
      addPart("cube", "Tower_Mint", [0.95, 1.25, -0.75], [1.0, 2.5, 1.0], [0, 0, 0], "#3ddbb0");
      addPart("cube", "Apartment_Warm", [-0.9, 0.95, 0.95], [1.15, 1.9, 0.95], [0, 0, 0], "#f472b6");
      addPart("cube", "Shop_Corner", [0.95, 0.68, 0.95], [1.1, 1.35, 1.05], [0, 0, 0], "#fbbf24");
      addPart("asset_car", "Street_Car", [0, 0.35, 0.25], [0.65, 0.65, 0.65], [0, 0, 0], "#f87171");
      No = "Animate";
      _o = "Animate";
      ge.setWorkspace("ani");
      de.setShow(true);
      Tt("Opened City Block (Scene)", "success");
    } else if (kind === "around_world") {
      const globeId = addPart("sphere", "World_Globe", [0, 1.15, 0], [1.35, 1.35, 1.35], [0, 0, 0], "#38bdf8");
      addPart("torus", "Orbital_Ring", [0, 1.15, 0], [2.1, 0.18, 2.1], [0.35, 0, -0.25], "#3ddbb0");
      const satId = addPart("sphere", "Orbit_Satellite", [2.2, 1.15, 0], [0.35, 0.35, 0.35], [0, 0, 0], "#fbbf24");
      he.animationEdit(() => {
        if (globeId) {
          de.addKeyframe(globeId, { time: 0, position: [0, 1.15, 0], rotation: [0, 0, 0], scale: [1.35, 1.35, 1.35] });
          de.addKeyframe(globeId, { time: 2, position: [0, 1.15, 0], rotation: [0, Math.PI, 0], scale: [1.35, 1.35, 1.35] });
          de.addKeyframe(globeId, { time: 4, position: [0, 1.15, 0], rotation: [0, Math.PI * 2, 0], scale: [1.35, 1.35, 1.35] });
          de.setClip(globeId, 0, 15);
        }
        if (satId) {
          for (let i = 0; i <= 8; i++) {
            const f = i / 8;
            const a = f * Math.PI * 2;
            de.addKeyframe(satId, {
              time: f * 4,
              position: [Math.cos(a) * 2.25, 1.15 + Math.sin(a) * 0.45, Math.sin(a) * 2.25],
              rotation: [0, -a, 0],
              scale: [0.35, 0.35, 0.35]
            });
          }
          de.setClip(satId, 0, 15);
        }
      });
      de.setDuration(Math.max(4, e(de).duration));
      de.setLoop(true);
      de.setTime(0);
      de.setShow(true);
      de.setPlaying(true);
      No = "Animate";
      _o = "Animate";
      ge.setWorkspace("ani");
      Tt("Opened Around the World (Animation) — Playing!", "success");
    }

    closeStudioHome();
    setSplitLive3D(false);
    ko();
    Bo && wo(false);
    Vo();
    Jo();
    Wt(!0);
    Ve();
    window.dispatchEvent(new CustomEvent("toon:frame-all"));
    _e();
  }

  function renderStudioHomeProjects() {
    const savedSec = document.getElementById("sh-saved-section");
    const grid = document.getElementById("sh-proj-grid");
    const countBadge = document.getElementById("sh-proj-count-badge");
    if (!savedSec || !grid) return;

    const stored = Ee();
    if (!stored.length) {
      savedSec.style.display = "none";
      grid.innerHTML = "";
      return;
    }
    savedSec.style.display = "block";
    if (countBadge) countBadge.textContent = String(stored.length);

    grid.innerHTML = stored.map((entry, idx) => {
      const objCount = entry.project?.scene?.objects?.length || 1;
      return `
        <a href="#saved-${idx}" class="landing-example-card" data-saved-proj-idx="${idx}" style="display:block;background:#12141a;border:1px solid #232836;border-radius:20px;overflow:hidden;color:inherit;text-decoration:none;cursor:pointer">
          <div style="display:flex;align-items:center;justify-content:space-between;padding:18px 20px">
            <span style="font-family:Sora,Inter,sans-serif;font-weight:600;font-size:17px;color:#eef1f6">${__esc(entry.name || "Saved Project")}</span>
            <span style="font-family:'JetBrains Mono',ui-monospace,monospace;font-size:12px;color:#3ddbb0">${objCount} objs · ${(entry.savedAt || "").slice(0, 10)}</span>
          </div>
        </a>
      `;
    }).join("");

    grid.querySelectorAll("[data-saved-proj-idx]").forEach(card => {
      card.addEventListener("click", ev => {
        ev.preventDefault();
        const entry = stored[Number(card.getAttribute("data-saved-proj-idx"))];
        if (!entry) return;
        Ie(entry.project);
        closeStudioHome();
        No = "Animate";
        _o = "Animate";
        ge.setWorkspace("ani");
        de.setShow(true);
        ko();
        Bo && wo(false);
        Vo();
        Jo();
        Wt(!0);
        Ve();
        _e();
        Tt(`Opened "${entry.name}"`, "success");
      });
    });
  }

  function openStudioHome() {
    const overlay = document.getElementById("studio-home-overlay");
    if (overlay) {
      overlay.classList.add("open");
      renderStudioHomeProjects();
    }
  }

  function closeStudioHome() {
    document.getElementById("studio-home-overlay")?.classList.remove("open");
  }

  window.__openStudioHome = openStudioHome;
  window.__closeStudioHome = closeStudioHome;

  document.getElementById("sh-quick-new")?.addEventListener("click", ev => {
    ev.preventDefault();
    closeStudioHome();
    he.clear();
    de.clearKeyframes();
    he.addPrimitive("cube", [0, 0.5, 0]);
    const id = e(he).selectedId;
    if (id) de.setClip(id, 0, 42.8);
    No = "Animate";
    _o = "Animate";
    he.setEditMode(false);
    ge.setWorkspace("ani");
    de.setShow(true);
    setSplitLive3D(false);
    ko();
    Bo && wo(false);
    Vo();
    Jo();
    Wt(!0);
    Ot();
    Ve();
    window.dispatchEvent(new CustomEvent("toon:frame-all"));
    _e();
    Tt("Created new 3D project.", "success");
  });

  document.getElementById("sh-quick-import")?.addEventListener("click", ev => {
    ev.preventDefault();
    closeStudioHome();
    No = "Add";
    _o = "Add";
    he.setEditMode(false);
    ge.setWorkspace("mod");
    setSplitLive3D(false);
    ko();
    Bo && wo(false);
    Vo();
    Jo();
    Ve();
    _e();
    document.getElementById("tl-universal-file")?.click();
  });

  document.querySelectorAll("[data-landing-example]").forEach(card => {
    card.addEventListener("click", ev => {
      ev.preventDefault();
      const ex = card.getAttribute("data-landing-example");
      if (ex) spawnLandingExample(ex);
    });
  });

  document.getElementById("sh-save-current-btn")?.addEventListener("click", () => {
    const proj = fe("Toon Project " + new Date().toTimeString().slice(0, 5));
    Qe(proj);
    renderStudioHomeProjects();
    Tt(`Saved "${proj.name}" in browser!`, "success");
  });

  renderStudioHomeProjects();

  wireSuggestionChips();
  updateProviderStatusPill();
  updateModeButtons();
}

_t(2),ko(),Vo(),Jo(),Wt(),initClonedAgentSection(),requestAnimationFrame((function t(o){__frame=t;const n=Math.min(__vid?0.25:0.05,Math.max(0,(o-Wo)/1e3||0)),A=o-Wo;Wo=o,!__wasIdle&&A>0&&A<500&&(Zo=.9*Zo+.1*A);const s=e(de);if(s.playing){const startSec=Math.max(0,(s.startFrame||0)/s.frameRate),endSec=Math.max(startSec+0.1,s.endFrame?Math.min(Yt(),s.endFrame/s.frameRate):Yt()),spd=(__animState.playbackSpeed||1)*(__animState.reversePlay?-1:1);let t=s.currentTime+n*spd;if(spd>=0&&t>=endSec){s.loop?t=startSec+(t-startSec)%Math.max(0.05,endSec-startSec):(t=endSec,de.setPlaying(!1))}else if(spd<0&&t<=startSec){s.loop?t=endSec-(startSec-t)%Math.max(0.05,endSec-startSec):(t=startSec,de.setPlaying(!1))}de.setTime(t),Xo=t;const o=de.evaluate(t,s.easing);o.size&&he.applyAnimation(o),he.updateCameraTracking(n,t);const hid=new Set;for(const[id,cl]of s.clips.entries())(t<cl.start||t>cl.end)&&hid.add(id);he.setTimelineHidden(hid),_t(t),Ot(),_e()}const i=e(ae);i.running&&(he.stepPhysics(n,i.gravity),_e());const r=e(he);if(r.gameMode){const e=he.getGameInput(),t=r.objects.find((e=>e.id===r.selectedId&&"light"!==e.type&&"camera"!==e.type))||r.objects.find((e=>"light"!==e.type&&"camera"!==e.type&&"coin"!==e.type&&"plane"!==e.type));if(t){const o=[...t.position];e.left&&(o[0]-=4.5*n),e.right&&(o[0]+=4.5*n),e.up&&(o[2]-=4.5*n),e.down&&(o[2]+=4.5*n);let A=en.get(t.id)||0;e.jump&&o[1]<=.501&&!tn.get(t.id)&&(A=5.8,tn.set(t.id,!0),Re(440,.1,"sine")),e.jump||tn.set(t.id,!1),A-=15*n,o[1]=Math.max(.5,o[1]+A*n),o[1]<=.5&&(A=0),en.set(t.id,A),he.setTransform(t.id,{position:o});for(const e of r.objects.filter((e=>"coin"===e.type&&e.visible)))Math.hypot(e.position[0]-o[0],e.position[2]-o[2])<.75&&Math.abs(e.position[1]-o[1])<1&&(he.deleteObject(e.id),he.addScore(10),Re(880,.12,"triangle"));_e()}};var __busy=s.playing||i.running||r.gameMode;if(__busy&&!__vid&&o-__adaptT>1500&&(__adaptT=o,Zo>31&&__qMul>.6?(__qMul=Math.max(.6,__qMul-.2),__applyQ()):Zo<17&&__qMul<1&&(__qMul=Math.min(1,__qMul+.1),__applyQ())));if(Ce&&(Ce=!1,tt()),o-$o>400&&kt){$o=o;const t=Math.min(120,Math.round(1e3/Math.max(1,Zo)));kt.innerHTML=`<span>${t} fps</span><span>${function(){let t=0;for(const o of e(he).objects){if(!o.visible||o.timelineHidden)continue;const e=o.geometry??G(o.type);if(!e)continue;let n=Ue.get(e);if(void 0===n){n=0;for(const t of e.faces)n+=Math.max(0,t.length-2);Ue.set(e,n)}t+=n}return t}().toLocaleString()} tris</span><span>${r.objects.length} objs</span><span class="engine">${ee()?"wasm":"js"}</span>`}var __idle=!s.playing&&!i.running&&!r.gameMode&&!Ce;__wasIdle=__idle;__idle?(__idleP=1,__idleT=setTimeout((function(){__idleP=0,requestAnimationFrame(t)}),__lowEnd?160:110)):requestAnimationFrame(t)}))}))}();