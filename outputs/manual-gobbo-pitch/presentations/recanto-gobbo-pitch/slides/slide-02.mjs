import { C, bg, kicker, title, body, footer, rect, text } from "./common.mjs";

export async function slide02(presentation, ctx) {
  const slide = presentation.slides.add();
  bg(slide, ctx);
  kicker(slide, ctx, "Contexto");
  title(slide, ctx, "O Recanto precisava comunicar melhor sua história e seus canais.");
  body(slide, ctx, "A ideia inicial nasceu da necessidade de organizar informações sobre o Recanto Gobbo em um espaço único, claro e fácil de acessar.", 66, 218, 560, 92);
  const items = [
    ["Antes", "Informações espalhadas em redes sociais e contatos diretos."],
    ["Necessidade", "Apresentar produtos, serviços, história e formas de contato."],
    ["Público", "Clientes, parceiros e pessoas interessadas na vida no campo."],
  ];
  items.forEach((item, i) => {
    const y = 368 + i * 78;
    rect(slide, ctx, 682, y, 34, 34, i === 0 ? C.clay : i === 1 ? C.green : C.leaf);
    text(slide, ctx, item[0], 738, y - 2, 160, 24, { size: 18, bold: true, color: C.ink });
    text(slide, ctx, item[1], 738, y + 28, 410, 30, { size: 15, color: C.muted });
  });
  footer(slide, ctx, 2);
  return slide;
}

