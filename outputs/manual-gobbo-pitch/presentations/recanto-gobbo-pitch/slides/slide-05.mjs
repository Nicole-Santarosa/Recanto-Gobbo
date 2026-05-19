import { C, assets, bg, kicker, footer, rect, text } from "./common.mjs";

export async function slide05(presentation, ctx) {
  const slide = presentation.slides.add();
  bg(slide, ctx, C.dark);
  kicker(slide, ctx, "Demonstração", 64, 46, C.clay);
  text(slide, ctx, "O protótipo apresenta o Recanto de forma direta e navegável.", 64, 92, 560, 142, {
    size: 38,
    color: C.white,
    bold: true,
    face: "Georgia",
  });
  text(slide, ctx, "A página de serviços mostra como o site transforma informações em uma experiência visual, com chamadas para contato e navegação simples.", 66, 252, 535, 90, { size: 18, color: "#E7DCCF" });
  await ctx.addImage(slide, { path: assets.services, left: 705, top: 90, width: 390, height: 470, fit: "cover", alt: "Imagem da página de serviços" });
  rect(slide, ctx, 684, 116, 390, 470, "#00000000", { lineColor: C.clay, lineWidth: 3 });
  const bullets = ["menu mobile funcional", "páginas de produtos e serviços", "contato por WhatsApp e redes sociais"];
  bullets.forEach((b, i) => {
    rect(slide, ctx, 70, 366 + i * 58, 12, 12, C.clay);
    text(slide, ctx, b, 100, 358 + i * 58, 420, 30, { size: 19, color: C.white, bold: true });
  });
  footer(slide, ctx, 5);
  return slide;
}
