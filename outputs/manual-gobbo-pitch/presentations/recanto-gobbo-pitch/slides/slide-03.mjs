import { C, assets, bg, kicker, title, footer, rect, text } from "./common.mjs";

export async function slide03(presentation, ctx) {
  const slide = presentation.slides.add();
  bg(slide, ctx, C.cream);
  kicker(slide, ctx, "Solução");
  title(slide, ctx, "A solução foi criar um site simples, visual e responsivo.", 64, 92, 610, 104);
  const cards = [
    ["História", "Página sobre o Recanto e sua identidade."],
    ["Produtos", "Divulgação dos produtos artesanais."],
    ["Serviços", "Apresentação de palestras, ações e parcerias."],
    ["Contato", "Acesso rápido ao WhatsApp, redes e localização."],
  ];
  cards.forEach((card, i) => {
    const x = 64 + (i % 2) * 300;
    const y = 250 + Math.floor(i / 2) * 132;
    rect(slide, ctx, x, y, 250, 104, "#FFFFFF", { lineColor: C.line, lineWidth: 1 });
    text(slide, ctx, card[0], x + 22, y + 18, 190, 24, { size: 20, bold: true, color: C.green });
    text(slide, ctx, card[1], x + 22, y + 48, 200, 32, { size: 13.5, color: C.muted });
  });
  await ctx.addImage(slide, { path: assets.field, left: 742, top: 142, width: 396, height: 396, fit: "cover", alt: "Vida no campo no Recanto Gobbo" });
  rect(slide, ctx, 722, 122, 396, 396, "#00000000", { lineColor: C.clay, lineWidth: 3 });
  footer(slide, ctx, 3);
  return slide;
}
