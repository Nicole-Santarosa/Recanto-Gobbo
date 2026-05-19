import { C, bg, kicker, title, footer, rect, text } from "./common.mjs";

export async function slide07(presentation, ctx) {
  const slide = presentation.slides.add();
  bg(slide, ctx);
  kicker(slide, ctx, "Aprendizados");
  title(slide, ctx, "O maior aprendizado foi comunicar uma ideia com clareza.");
  const learnings = [
    ["Planejamento", "Organizar páginas, conteúdo e imagens antes de desenvolver ajuda a evitar retrabalho."],
    ["Usuário", "Um bom site precisa ser fácil de navegar no computador e no celular."],
    ["Autonomia", "Resolver problemas de layout, Git e responsividade fez parte do crescimento no projeto."],
  ];
  learnings.forEach((item, i) => {
    const y = 244 + i * 112;
    rect(slide, ctx, 86, y, 58, 58, i === 0 ? C.clay : i === 1 ? C.green : C.leaf);
    text(slide, ctx, String(i + 1), 86, y + 13, 58, 30, { size: 22, color: C.white, bold: true, align: "center" });
    text(slide, ctx, item[0], 178, y - 2, 300, 26, { size: 22, bold: true, color: C.ink });
    text(slide, ctx, item[1], 178, y + 34, 760, 44, { size: 16, color: C.muted });
  });
  rect(slide, ctx, 904, 582, 250, 58, C.green);
  text(slide, ctx, "Obrigado!", 904, 596, 250, 30, { size: 22, color: C.white, bold: true, align: "center" });
  footer(slide, ctx, 7);
  return slide;
}
