import React from "react";
import { MathFormula } from "@/components/MathFormula";
import { ExampleProblem } from "@/components/AdvancedTheory";

export const EnergyTheory = {
  title: "Trabalho e Energia: Uma Abordagem Integral",
  introduction: (
    <div>
      <p className="mb-4">
        O conceito de Energia é a ferramenta mais poderosa da Física. Enquanto as Leis de Newton lidam com vetores e instantes, a Energia lida com escalares e estados.
      </p>
      <p>
        No nível avançado, definimos Trabalho não como <MathFormula formula={String.raw`$Fd\cos\theta$`} />, mas como uma <strong>Integral de Linha</strong>. Isso nos permite analisar forças variáveis e trajetórias complexas.
      </p>
    </div>
  ),
  sections: [
    {
      title: "1. Trabalho como Integral de Linha",
      content: (
        <div className="space-y-4">
          <p>
            O trabalho realizado por uma força <MathFormula formula={String.raw`$\vec{F}$`} /> ao longo de um caminho <MathFormula formula={String.raw`$C$`} /> de <MathFormula formula={String.raw`$A$`} /> até <MathFormula formula={String.raw`$B$`} /> é:
          </p>
          <div className="bg-slate-100 p-4 rounded text-center">
            <MathFormula formula={String.raw`$$ W_{A \to B} = \int_A^B \vec{F} \cdot d\vec{r} $$`} />
          </div>
          <p>
            <strong>Teorema Trabalho-Energia Cinética (TEC):</strong> O trabalho da força resultante é igual à variação da energia cinética.
            <MathFormula formula={String.raw`$$ W_{res} = \Delta K = \frac{1}{2}mv_B^2 - \frac{1}{2}mv_A^2 $$`} />
          </p>
        </div>
      )
    },
    {
      title: "2. Forças Conservativas e Potencial",
      content: (
        <div className="space-y-4">
          <p>
            Uma força é <strong>Conservativa</strong> se o trabalho realizado por ela independe da trajetória (ou seja, o trabalho em um ciclo fechado é zero: <MathFormula formula={String.raw`$\oint \vec{F} \cdot d\vec{r} = 0$`} />).
          </p>
          <p>
            Para tais forças, podemos definir uma Energia Potencial <MathFormula formula={String.raw`$U$`} /> tal que:
          </p>
          <div className="bg-slate-100 p-4 rounded text-center">
            <MathFormula formula={String.raw`$$ W_{cons} = -\Delta U \quad \text{ou} \quad \vec{F} = -\nabla U $$`} />
          </div>
          <p>
            O operador <MathFormula formula={String.raw`$\nabla$`} /> (gradiente) indica que a força aponta para a direção de maior diminuição da energia potencial.
          </p>
          <p>
            <strong>Conservação da Energia Mecânica:</strong> Se apenas forças conservativas realizam trabalho:
            <MathFormula formula={String.raw`$$ E_{mec} = K + U = \text{constante} $$`} />
          </p>
        </div>
      )
    },
    {
      title: "3. Exemplos Resolvidos (Nível Militar)",
      content: (
        <div className="space-y-6">
          <ExampleProblem
            title="Exemplo 1: Looping com Atrito (ITA)"
            difficulty="Difícil"
            problem={
              <div>
                Um bloco de massa <MathFormula formula={String.raw`$m$`} /> desliza de uma altura <MathFormula formula={String.raw`$H$`} /> e entra em um looping de raio <MathFormula formula={String.raw`$R$`} />. Existe atrito apenas na parte circular. Se o bloco para exatamente no topo do looping, qual foi o trabalho da força de atrito?
              </div>
            }
            solution={
              <div>
                <p>
                  Vamos usar o Teorema Trabalho-Energia entre o ponto inicial (A) e o topo do looping (B).
                </p>
                <p>
                  1. Estado Inicial (A): <MathFormula formula={String.raw`$v_A = 0$`} />, <MathFormula formula={String.raw`$h_A = H$`} />.
                  <br />
                  <MathFormula formula={String.raw`$E_A = mgH$`}/>
                </p>
                <p>
                  2. Estado Final (B): O problema diz que ele "para" no topo, logo <MathFormula formula={String.raw`$v_B = 0$`} />. A altura é <MathFormula formula={String.raw`$2R$`} />.
                  <br />
                  <MathFormula formula={String.raw`$E_B = mg(2R)$`}/>
                </p>
                <p>
                  3. Variação da Energia Mecânica:
                  <MathFormula formula={String.raw`$$ \Delta E = E_B - E_A = 2mgR - mgH = mg(2R - H) $$`} />
                </p>
                <p>
                  4. Trabalho das Forças Não-Conservativas (Atrito):
                  <MathFormula formula={String.raw`$$ W_{fat} = \Delta E = mg(2R - H) $$`} />
                </p>
                <p>
                  Como <MathFormula formula={String.raw`$H > 2R$`} /> para ele chegar lá, o trabalho será negativo, como esperado.
                </p>
              </div>
            }
          />

          <ExampleProblem
            title="Exemplo 2: Potencial de Lennard-Jones (Olimpíada)"
            difficulty="ITA/IME"
            problem={
              <div>
                A energia potencial entre dois átomos é dada por <MathFormula formula={String.raw`$U(r) = \frac{A}{r^{12}} - \frac{B}{r^6}$`} />. Encontre a distância de equilíbrio estável.
              </div>
            }
            solution={
              <div>
                <p>
                  O equilíbrio ocorre onde a força é zero. Como <MathFormula formula={String.raw`$F = -dU/dr$`} />, procuramos os pontos onde a derivada do potencial é nula (mínimo ou máximo de energia).
                </p>
                <p>
                  1. Derivando <MathFormula formula={String.raw`$U(r)$`} />:
                  <MathFormula formula={String.raw`$$ \frac{dU}{dr} = A(-12)r^{-13} - B(-6)r^{-7} $$`} />
                  <MathFormula formula={String.raw`$$ \frac{dU}{dr} = -\frac{12A}{r^{13}} + \frac{6B}{r^7} $$`} />
                </p>
                <p>
                  2. Igualando a zero:
                  <MathFormula formula={String.raw`$$ \frac{6B}{r^7} = \frac{12A}{r^{13}} $$`} />
                  Multiplicando por <MathFormula formula={String.raw`$r^{13}$`} />:
                  <MathFormula formula={String.raw`$$ 6B r^6 = 12A \Rightarrow r^6 = \frac{2A}{B} $$`} />
                </p>
                <p>
                  3. Distância de equilíbrio:
                  <MathFormula formula={String.raw`$$ r_{eq} = \sqrt[6]{\frac{2A}{B}} $$`} />
                </p>
                <p>
                  Para confirmar se é estável (mínimo), verificaríamos se a segunda derivada é positiva. (Neste caso clássico, é um poço de potencial, logo é estável).
                </p>
              </div>
            }
          />
        </div>
      )
    }
  ]
};
