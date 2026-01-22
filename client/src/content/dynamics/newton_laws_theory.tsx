import React from "react";
import { MathFormula } from "@/components/MathFormula";
import { ExampleProblem } from "@/components/AdvancedTheory";

export const NewtonLawsTheory = {
  title: "Dinâmica Avançada: Leis de Newton e Vínculos",
  introduction: (
    <div>
      <p className="mb-4">
        As Leis de Newton são a base da Mecânica Clássica. No entanto, para resolver problemas de nível ITA/IME, não basta saber <MathFormula formula={String.raw`$F=ma$`} />. É necessário dominar o conceito de <strong>Referenciais Não-Inerciais</strong>, <strong>Vínculos Geométricos</strong> e a análise vetorial rigorosa das forças.
      </p>
      <p>
        Nesta seção, trataremos de sistemas complexos, forças fictícias e a aplicação correta do Diagrama de Corpo Livre (DCL).
      </p>
    </div>
  ),
  sections: [
    {
      title: "1. Referenciais Inerciais e Não-Inerciais",
      content: (
        <div className="space-y-4">
          <p>
            A 2ª Lei de Newton (<MathFormula formula={String.raw`$\vec{F}_{res} = m\vec{a}$`} />) só é válida em Referenciais Inerciais (sem aceleração).
          </p>
          <p>
            Para analisar o movimento dentro de um referencial acelerado (não-inercial) com aceleração <MathFormula formula={String.raw`$\vec{A}$`} />, devemos introduzir uma <strong>Força Fictícia (ou Inercial)</strong>:
          </p>
          <div className="bg-slate-100 p-4 rounded text-center">
            <MathFormula formula={String.raw`$$ \vec{F}_{fict} = -m\vec{A} $$`} />
          </div>
          <p>
            Assim, a equação de movimento no referencial não-inercial torna-se:
          </p>
          <div className="bg-slate-100 p-4 rounded text-center">
            <MathFormula formula={String.raw`$$ \vec{F}_{real} + \vec{F}_{fict} = m\vec{a}_{rel} $$`} />
          </div>
          <p>
            Exemplos clássicos: Força Centrífuga (em referenciais rotativos) e a "força" que nos joga para trás em um carro que acelera.
          </p>
        </div>
      )
    },
    {
      title: "2. Vínculos Geométricos",
      content: (
        <div className="space-y-4">
          <p>
            Em sistemas com polias móveis ou cunhas, as acelerações dos corpos não são independentes. Elas estão ligadas por <strong>equações de vínculo</strong>.
          </p>
          <p>
            <strong>Método do Comprimento da Corda (Polias):</strong>
            <br />
            Escrevemos o comprimento total <MathFormula formula={String.raw`$L$`} /> da corda em função das posições dos blocos e derivamos duas vezes em relação ao tempo. Como <MathFormula formula={String.raw`$L$`} /> é constante, <MathFormula formula={String.raw`$\ddot{L} = 0$`} />.
          </p>
          <div className="bg-slate-100 p-4 rounded text-center">
            <MathFormula formula={String.raw`$$ L = y_A + 2y_B + C \quad \Rightarrow \quad 0 = a_A + 2a_B $$`} />
          </div>
          <p>
            Isso revela que a aceleração de um bloco é o dobro (ou metade) do outro, dependendo da configuração.
          </p>
        </div>
      )
    },
    {
      title: "3. Exemplos Resolvidos (Nível Militar)",
      content: (
        <div className="space-y-6">
          <ExampleProblem
            title="Exemplo 1: Máquina de Atwood com Polia Pesada (IME)"
            difficulty="Difícil"
            problem={
              <div>
                Considere uma Máquina de Atwood com dois blocos de massas <MathFormula formula={String.raw`$m_1$`} /> e <MathFormula formula={String.raw`$m_2$`} /> (<MathFormula formula={String.raw`$m_2 > m_1$`} />). A polia tem massa <MathFormula formula={String.raw`$M$`} /> e raio <MathFormula formula={String.raw`$R$`} /> (momento de inércia <MathFormula formula={String.raw`$I = \frac{1}{2}MR^2$`} />). O fio não desliza. Calcule a aceleração do sistema.
              </div>
            }
            solution={
              <div>
                <p>
                  Como a polia tem massa, as trações nos dois lados são diferentes (<MathFormula formula={String.raw`$T_1 \neq T_2$`} />).
                </p>
                <p>
                  1. Equações dos blocos (2ª Lei):
                  <br />
                  Bloco 1 (sobe): <MathFormula formula={String.raw`$T_1 - m_1g = m_1a$`}/>
                  <br />
                  Bloco 2 (desce): <MathFormula formula={String.raw`$m_2g - T_2 = m_2a$`}/>
                </p>
                <p>
                  2. Equação da polia (Torque):
                  <br />
                  <MathFormula formula={String.raw`$\tau_{res} = I\alpha$`}/>. O torque resultante é <MathFormula formula={String.raw`$(T_2 - T_1)R$`}/>.
                  <br />
                  Vínculo de não deslizamento: <MathFormula formula={String.raw`$a = \alpha R \Rightarrow \alpha = a/R$`}/>.
                  <br />
                  <MathFormula formula={String.raw`$(T_2 - T_1)R = \left(\frac{1}{2}MR^2\right) \frac{a}{R} \Rightarrow T_2 - T_1 = \frac{1}{2}Ma$`}/>
                </p>
                <p>
                  3. Somando as equações dos blocos:
                  <br />
                  <MathFormula formula={String.raw`$m_2g - m_1g + (T_1 - T_2) = (m_1 + m_2)a$`}/>
                  <br />
                  Substituindo <MathFormula formula={String.raw`$T_1 - T_2 = -\frac{1}{2}Ma$`}/>:
                  <br />
                  <MathFormula formula={String.raw`$(m_2 - m_1)g - \frac{1}{2}Ma = (m_1 + m_2)a$`}/>
                </p>
                <p>
                  4. Isolando <MathFormula formula={String.raw`$a$`}/>:
                  <MathFormula formula={String.raw`$$ a = \frac{(m_2 - m_1)g}{m_1 + m_2 + \frac{M}{2}} $$`} />
                </p>
              </div>
            }
          />

          <ExampleProblem
            title="Exemplo 2: Cunha Acelerada (ITA)"
            difficulty="ITA/IME"
            problem={
              <div>
                Um bloco de massa <MathFormula formula={String.raw`$m$`} /> está sobre a face inclinada (ângulo <MathFormula formula={String.raw`$\theta$`} />) de uma cunha de massa <MathFormula formula={String.raw`$M$`} />. Não há atrito. Qual deve ser a força horizontal <MathFormula formula={String.raw`$F$`} /> aplicada à cunha para que o bloco <strong>não deslize</strong> em relação a ela (permaneça em repouso relativo)?
              </div>
            }
            solution={
              <div>
                <p>
                  Vamos usar um <strong>Referencial Não-Inercial</strong> fixo na cunha. A cunha tem aceleração <MathFormula formula={String.raw`$a$`} /> para a direita.
                </p>
                <p>
                  No referencial da cunha, o bloco sofre uma força fictícia <MathFormula formula={String.raw`$\vec{F}_{fict} = -m\vec{a}$`} /> (para a esquerda).
                </p>
                <p>
                  Para o bloco estar em repouso relativo, a soma das forças ao longo do plano inclinado deve ser zero.
                  <br />
                  Forças no bloco: Peso (<MathFormula formula={String.raw`$mg$`}/>), Normal (<MathFormula formula={String.raw`$N$`}/>) e Fictícia (<MathFormula formula={String.raw`$ma$`}/>).
                </p>
                <p>
                  Decompondo no eixo do plano:
                  <br />
                  Componente do Peso (desce o plano): <MathFormula formula={String.raw`$P_x = mg\sin\theta$`}/>
                  <br />
                  Componente da Fictícia (sobe o plano): <MathFormula formula={String.raw`$F_{fict,x} = ma\cos\theta$`}/>
                </p>
                <p>
                  Equilíbrio:
                  <MathFormula formula={String.raw`$$ mg\sin\theta = ma\cos\theta \Rightarrow a = g\tan\theta $$`} />
                </p>
                <p>
                  Agora, olhamos para o sistema total (cunha + bloco) como um corpo único de massa <MathFormula formula={String.raw`$M+m$`}/> acelerado por <MathFormula formula={String.raw`$F$`}/>:
                  <MathFormula formula={String.raw`$$ F = (M+m)a = (M+m)g\tan\theta $$`} />
                </p>
              </div>
            }
          />
        </div>
      )
    }
  ]
};
