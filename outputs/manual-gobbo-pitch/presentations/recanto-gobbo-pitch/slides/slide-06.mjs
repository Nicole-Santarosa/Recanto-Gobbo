import { C, assets, bg, kicker, title, footer, rect, text, pill } from "./common.mjs";

export async function slide06(presentation, ctx) {
  const slide = presentation.slides.add();
  bg(slide, ctx, C.cream);
  kicker(slide, ctx, "Divulgação");
  title(slide, ctx, "A divulgação combina redes sociais, site e contato direto.");
  await ctx.addImage(slide, { path: assets.products, left: 64, top: 232, width: 330, height: 260, fit: "cover", alt: "Produtos do Recanto Gobbo" });
  await ctx.addImage(slide, { path: assets.sunset, left: 424, top: 232, width: 330, height: 260, fit: "cover", alt: "Paisagem do Recanto Gobbo" });
  const channels = [
    ["Instagram, TikTok, Facebook e YouTube", C.green],
    ["Site oficial do projeto", C.clay],
    ["WhatsApp e panfletos digitais", C.leaf],
    ["Eventos e parcerias locais", C.green],
  ];
  channels.forEach((c, i) => {
    pill(slide, ctx, c[0], 820, 244 + i * 62, 300, c[1]);
  });
  text(slide, ctx, "Mensagem central: valorizar a vida no campo e facilitar o acesso às informações do Recanto.", 820, 526, 340, 58, { size: 16, color: C.muted });
  footer(slide, ctx, 6);
  return slide;
}

