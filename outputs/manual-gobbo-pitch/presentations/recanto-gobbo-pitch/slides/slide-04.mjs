import { C, bg, kicker, title, body, footer, rect, text } from "./common.mjs";

export async function slide04(presentation, ctx) {
  const slide = presentation.slides.add();
  bg(slide, ctx);
  kicker(slide, ctx, "Desenvolvimento");
  title(slide, ctx, "O projeto evoluiu com ajustes de estrutura, conteúdo e experiência mobile.");
  body(slide, ctx, "Durante o desenvolvimento, a ideia deixou de ser apenas uma página simples e passou a funcionar como uma presença digital completa.", 66, 202, 860, 58, 18);
  const steps = [
    ["1", "Organização", "Definição das páginas principais."],
    ["2", "Identidade", "Uso de imagens, cores e linguagem do Recanto."],
    ["3", "Responsividade", "Ajustes para funcionar bem no celular."],
    ["4", "Publicação", "Branch integrada à main e enviada ao GitHub."],
  ];
  steps.forEach((step, i) => {
    const x = 92 + i * 285;
    rect(slide, ctx, x, 352, 170, 4, C.line);
    rect(slide, ctx, x, 304, 58, 58, i % 2 === 0 ? C.green : C.clay);
    text(slide, ctx, step[0], x, 316, 58, 30, { size: 22, color: C.white, bold: true, align: "center" });
    text(slide, ctx, step[1], x, 388, 190, 28, { size: 20, color: C.ink, bold: true });
    text(slide, ctx, step[2], x, 426, 190, 52, { size: 14, color: C.muted });
  });
  footer(slide, ctx, 4);
  return slide;
}
