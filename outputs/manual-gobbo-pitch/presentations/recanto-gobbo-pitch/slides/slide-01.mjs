import { C, assets, rect, text } from "./common.mjs";

export async function slide01(presentation, ctx) {
  const slide = presentation.slides.add();
  await ctx.addImage(slide, { path: assets.hero, left: 0, top: 0, width: 1280, height: 720, fit: "cover", alt: "Imagem principal do Recanto Gobbo" });
  rect(slide, ctx, 0, 0, 1280, 720, "#17110CAA");
  await ctx.addImage(slide, { path: assets.logo, left: 70, top: 58, width: 146, height: 88, fit: "contain", alt: "Logo Recanto Gobbo" });
  text(slide, ctx, "Recanto Gobbo", 70, 242, 720, 72, { size: 48, color: C.white, bold: true, face: "Georgia" });
  text(slide, ctx, "Um site para aproximar a vida no campo do mundo digital.", 72, 326, 720, 68, { size: 26, color: "#F6EBDD" });
  rect(slide, ctx, 72, 430, 500, 2, C.clay);
  text(slide, ctx, "Apresentação do projeto", 72, 456, 360, 28, { size: 15, color: "#F6EBDD", bold: true });
  return slide;
}

