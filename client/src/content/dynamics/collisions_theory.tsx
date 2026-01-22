import React from "react";
import { MathFormula } from "@/components/MathFormula";
import { ExampleProblem } from "@/components/AdvancedTheory";

export const CollisionsTheory = {
  title: "Impulso e Quantidade de Movimento: Sistemas de Partículas",
  introduction: (
    <div>
      <p className="mb-4">
        A análise de colisões é fundamental na Física Nuclear e na Mecânica Clássica. Aqui, as forças internas são complexas e desconhecidas, mas as leis de conservação nos permitem prever o resultado final.
      </p>
      <p>
        No nível avançado, tratamos a Quantidade de Movimento (<MathFormula formula={String.raw`$\vec{p}$`} />) como a grandeza fundamental, mais até que a velocidade, pois ela se conserva em sistemas isolados mesmo relativísticos.
      </p>
    </div>
  ),
  sections: [
    {
      title: "1. Teorema do Impulso",
      content: (
        <div className="space-y-4">
          <p>
            A 2ª Lei de Newton na forma original é <MathFormula formula={String.raw`$\vec{F} = d\vec{p}/dt$`} />. Integrando no tempo:
          </p>
          <div className="bg-slate-100 p-4 rounded text-center">
            <MathFormula formula={String.raw`$$ \vec{I} = \int_{t_1}^{t_2} \vec{F}_{res} \, dt = \Delta \vec{p} = \vec{p}_f - \vec{p}_i $$`} />
          </div>
          <p>
            Se a força resultante externa for nula, <MathFormula formula={String.raw`$\Delta \vec{p} = 0$`} />, ou seja, a quantidade de movimento se conserva.
          </p>
        </div>
      )
    },
    {
      title: "2. Coeficiente de Restituição (e)",
      content: (
        <div className="space-y-4">
          <p>
            O coeficiente de restituição mede a elasticidade da colisão. É a razão entre a velocidade relativa de afastamento e a de aproximação:
          </p>
          <div className="bg-slate-100 p-4 rounded text-center">
            <MathFormula formula={String.raw`$$ e = \frac{|\vec{v}_{rel, afast}|}{|\vec{v}_{rel, aprox}|} $$`} />
          </div>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Elástica (<MathFormula formula={String.raw`$e=1$`} />):</strong> Energia Cinética se conserva.</li>
            <li><strong>Inelástica (<MathFormula formula={String.raw`$0 < e < 1$`} />):</strong> Perda parcial de energia.</li>
            <li><strong>Perfeitamente Inelástica (<MathFormula formula={String.raw`$e=0$`} />):</strong> Corpos seguem juntos. Perda máxima de energia.</li>
          </ul>
        </div>
      )
    },
    {
      title: "3. Exemplos Resolvidos (Nível Militar)",
      content: (
        <div className="space-y-6">
          <ExampleProblem
            title="Exemplo 1: Colisão Oblíqua Elástica (ITA)"
            difficulty="Difícil"
            problem={
              <div>
                Uma partícula de massa <MathFormula formula={String.raw`$m$`} /> colide elasticamente com outra partícula idêntica (<MathFormula formula={String.raw`$m$`} />) que estava em repouso. A colisão não é frontal. Mostre que as trajetórias finais formam um ângulo de 90º.
              </div>
            }
            solution={
              <div>
                <p>
                  Sejam <MathFormula formula={String.raw`$\vec{v}_0$`} /> a velocidade inicial e <MathFormula formula={String.raw`$\vec{v}_1, \vec{v}_2$`} /> as finais.
                </p>
                <p>
                  1. Conservação de <MathFormula formula={String.raw`$\vec{p}$`} /> (massas iguais cancelam):
                  <MathFormula formula={String.raw`$$ \vec{v}_0 = \vec{v}_1 + \vec{v}_2 $$`} />
                  Elevando ao quadrado (produto escalar):
                  <MathFormula formula={String.raw`$$ v_0^2 = (\vec{v}_1 + \vec{v}_2) \cdot (\vec{v}_1 + \vec{v}_2) = v_1^2 + v_2^2 + 2\vec{v}_1 \cdot \vec{v}_2 $$`} />
                </p>
                <p>
                  2. Conservação de Energia (Elástica):
                  <MathFormula formula={String.raw`$$ \frac{1}{2}mv_0^2 = \frac{1}{2}mv_1^2 + \frac{1}{2}mv_2^2 \Rightarrow v_0^2 = v_1^2 + v_2^2 $$`} />
                </p>
                <p>
                  3. Comparando as duas equações:
                  <br />
                  Temos <MathFormula formula={String.raw`$v_1^2 + v_2^2 + 2\vec{v}_1 \cdot \vec{v}_2 = v_1^2 + v_2^2$`}/>.
                  <br />
                  Logo, <MathFormula formula={String.raw`$2\vec{v}_1 \cdot \vec{v}_2 = 0 \Rightarrow \vec{v}_1 \cdot \vec{v}_2 = 0$`}/>.
                </p>
                <p>
                  <strong>Conclusão:</strong> Se o produto escalar é zero, os vetores velocidade final são perpendiculares (ângulo de 90º).
                </p>
              </div>
            }
          />

          <ExampleProblem
            title="Exemplo 2: Pêndulo Balístico (IME)"
            difficulty="Médio"
            problem={
              <div>
                Um projétil de massa <MathFormula formula={String.raw`$m$`} /> atinge um bloco de massa <MathFormula formula={String.raw`$M$`} /> suspenso por um fio (pêndulo) e fica alojado nele. O conjunto sobe uma altura <MathFormula formula={String.raw`$h$`} />. Calcule a velocidade inicial do projétil.
              </div>
            }
            solution={
              <div>
                <p>
                  O problema tem duas etapas distintas:
                </p>
                <p>
                  <strong>Etapa 1: Colisão (Inelástica)</strong>
                  <br />
                  Conservação da Quantidade de Movimento (imediatamente antes e depois):
                  <MathFormula formula={String.raw`$$ m v_0 = (M+m) V_{conjunto} \Rightarrow V_{conjunto} = \frac{m}{M+m}v_0 $$`} />
                  (A energia mecânica NÃO se conserva aqui devido à deformação).
                </p>
                <p>
                  <strong>Etapa 2: Subida do Pêndulo</strong>
                  <br />
                  Conservação da Energia Mecânica (após a colisão, só peso e tração atuam, tração não realiza trabalho):
                  <MathFormula formula={String.raw`$$ \frac{1}{2}(M+m)V_{conjunto}^2 = (M+m)gh $$`} />
                  <MathFormula formula={String.raw`$$ V_{conjunto} = \sqrt{2gh} $$`} />
                </p>
                <p>
                  <strong>Unindo as etapas:</strong>
                  <MathFormula formula={String.raw`$$ \frac{m}{M+m}v_0 = \sqrt{2gh} \Rightarrow v_0 = \left(\frac{M+m}{m}\right)\sqrt{2gh} $$`} />
                </p>
              </div>
            }
          />
        </div>
      )
    }
  ]
};
