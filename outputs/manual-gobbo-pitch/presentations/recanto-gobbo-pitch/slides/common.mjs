export const C = {
  paper: "#F7F1E8",
  ink: "#1F1712",
  muted: "#6F6255",
  green: "#314D32",
  leaf: "#6C8B52",
  clay: "#B46F3A",
  cream: "#FFF9EF",
  line: "#D8C8B5",
  dark: "#17110C",
  white: "#FFFFFF",
};

export const assets = {
  logo: "D:/ProjetoGobbo/Recanto-Gobbo/assets/images/logo-recanto-gobbo.png",
  hero: "D:/ProjetoGobbo/Recanto-Gobbo/assets/images/Image Hero.png",
  services: "D:/ProjetoGobbo/Recanto-Gobbo/assets/images/PostServices.png",
  field: "D:/ProjetoGobbo/Recanto-Gobbo/assets/images/netoecampo.jpeg",
  sunset: "D:/ProjetoGobbo/Recanto-Gobbo/assets/images/recanto_por_do_sol.jpeg",
  products: "D:/ProjetoGobbo/Recanto-Gobbo/assets/images/produtos-queijos-recanto.jpeg",
};

export function rect(slide, ctx, x, y, w, h, fill, opts = {}) {
  return ctx.addShape(slide, {
    left: x,
    top: y,
    width: w,
    height: h,
    fill,
    geometry: opts.geometry ?? "rect",
    line: opts.line ?? ctx.line(opts.lineColor ?? "#00000000", opts.lineWidth ?? 0),
    name: opts.name,
  });
}

export function text(slide, ctx, value, x, y, w, h, opts = {}) {
  return ctx.addText(slide, {
    text: value,
    left: x,
    top: y,
    width: w,
    height: h,
    fontSize: opts.size ?? 24,
    color: opts.color ?? C.ink,
    bold: opts.bold ?? false,
    typeface: opts.face ?? "Aptos",
    align: opts.align ?? "left",
    valign: opts.valign ?? "top",
    fill: opts.fill ?? "#00000000",
    line: opts.line ?? ctx.line(),
    insets: opts.insets ?? { left: 0, right: 0, top: 0, bottom: 0 },
    name: opts.name,
  });
}

export function kicker(slide, ctx, label, x = 64, y = 46, color = C.clay) {
  rect(slide, ctx, x, y + 6, 10, 10, color, { name: `kicker-${ctx.slideNumber}-marker` });
  text(slide, ctx, label.toUpperCase(), x + 22, y, 380, 22, {
    size: 10,
    color: C.muted,
    bold: true,
    name: `kicker-${ctx.slideNumber}-label`,
  });
}

export function footer(slide, ctx, page) {
  rect(slide, ctx, 64, 674, 1110, 1, C.line);
  text(slide, ctx, "Projeto Recanto Gobbo", 64, 688, 420, 18, { size: 9, color: C.muted });
  text(slide, ctx, String(page).padStart(2, "0"), 1135, 684, 70, 22, {
    size: 13,
    color: C.muted,
    bold: true,
    align: "right",
  });
}

export function bg(slide, ctx, fill = C.paper) {
  rect(slide, ctx, 0, 0, ctx.W, ctx.H, fill);
}

export function title(slide, ctx, value, x = 64, y = 92, w = 820, h = 94) {
  text(slide, ctx, value, x, y, w, h, {
    size: 38,
    color: C.ink,
    bold: true,
    face: "Georgia",
  });
}

export function body(slide, ctx, value, x, y, w, h, size = 20) {
  text(slide, ctx, value, x, y, w, h, {
    size,
    color: C.muted,
    line: ctx.line(),
  });
}

export function pill(slide, ctx, value, x, y, w, color = C.green) {
  rect(slide, ctx, x, y, w, 38, color);
  text(slide, ctx, value, x + 14, y + 9, w - 28, 20, {
    size: 11,
    color: C.white,
    bold: true,
    align: "center",
  });
}
