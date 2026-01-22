import React from "react";
import { MathFormula } from "@/components/MathFormula";
import { ExampleProblem } from "@/components/AdvancedTheory";

export const EquilibriumTheory = {
  title: "Estática de Corpos Rígidos: Torque e Estabilidade",
  introduction: (
    <div>
      <p className="mb-4">
        A Estática não é apenas "força resultante zero". Para corpos extensos (rígidos), a rotação é tão importante quanto a translação.
      </p>
      <p>
        No nível ITA/IME, a definição vetorial de Torque (<MathFormula formula={String.raw`$\vec{\tau} = \vec{r} \times \vec{F}$`} />) é essencial, assim como a análise de estabilidade baseada na minimização da Energia Potencial.
      </p>
    </div>
  ),
  sections: [
    {
      title: "1. Condições de Equilíbrio Estático",
      content: (
        <div className="space-y-4">
          <p>
            Para um corpo rígido estar em equilíbrio total, duas condições vetoriais devem ser satisfeitas simultaneamente:
          </p>
          <div className="bg-slate-100 p-4 rounded text-center">
            <MathFormula formula={String.raw`$$ \sum \vec{F}_{ext} = \vec{0} \quad (\text{Equilíbrio Translacional}) $$`} />
            <div className="my-2"></div>
            <MathFormula formula={String.raw`$$ \sum \vec{\tau}_{ext} = \sum (\vec{r}_i \times \vec{F}_i) = \vec{0} \quad (\text{Equilíbrio Rotacional}) $$`} />
          </div>
          <p>
            O torque deve ser calculado em relação a um polo (ponto de referência). Se a resultante das forças for nula, o torque resultante é o mesmo para <strong>qualquer</strong> polo escolhido. Isso é uma ferramenta poderosa para simplificar cálculos (escolhendo polos onde forças desconhecidas atuam).
          </p>
        </div>
      )
    },
    {
      title: "2. Estabilidade do Equilíbrio",
      content: (
        <div className="space-y-4">
          <p>
            Podemos classificar o equilíbrio analisando a Energia Potencial (<MathFormula formula={String.raw`$U$`} />) em função da posição (<MathFormula formula={String.raw`$x$`} /> ou <MathFormula formula={String.raw`$\theta$`} />):
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Estável:</strong> Mínimo local de <MathFormula formula={String.raw`$U$`} /> (<MathFormula formula={String.raw`$d^2U/dx^2 > 0$`} />). Pequenas perturbações geram forças restauradoras.</li>
            <li><strong>Instável:</strong> Máximo local de <MathFormula formula={String.raw`$U$`} /> (<MathFormula formula={String.raw`$d^2U/dx^2 < 0$`} />). Pequenas perturbações afastam o corpo do equilíbrio.</li>
            <li><strong>Indiferente:</strong> <MathFormula formula={String.raw`$U$`} /> constante. O corpo permanece onde for deixado.</li>
          </ul>
        </div>
      )
    },
    {
      title: "3. Exemplos Resolvidos (Nível Militar)",
      content: (
        <div className="space-y-6">
          <ExampleProblem
            title="Exemplo 1: Escada na Iminência de Escorregar (ITA)"
            difficulty="Difícil"
            problem={
              <div>
                Uma escada homogênea de massa <MathFormula formula={String.raw`$m$`} /> e comprimento <MathFormula formula={String.raw`$L$`} /> apoia-se em uma parede vertical lisa (sem atrito) e em um chão horizontal rugoso (coeficiente de atrito estático <MathFormula formula={String.raw`$\mu$`} />). Qual o menor ângulo <MathFormula formula={String.raw`$\theta$`} /> com o chão para que ela não escorregue?
              </div>
            }
            solution={
              <div>
                <p>
                  Vamos aplicar as condições de equilíbrio.
                </p>
                <p>
                  1. Forças:
                  <br />
                  - Peso <MathFormula formula={String.raw`$P = mg$`} /> no centro (L/2).
                  <br />
                  - Normal da parede <MathFormula formula={String.raw`$N_p$`} /> (horizontal).
                  <br />
                  - Normal do chão <MathFormula formula={String.raw`$N_c$`} /> (vertical).
                  <br />
                  - Atrito no chão <MathFormula formula={String.raw`$f_{at}$`} /> (horizontal, oposto ao escorregamento).
                </p>
                <p>
                  2. Equilíbrio Translacional:
                  <br />
                  Vertical: <MathFormula formula={String.raw`$N_c - mg = 0 \Rightarrow N_c = mg$`}/>
                  <br />
                  Horizontal: <MathFormula formula={String.raw`$f_{at} - N_p = 0 \Rightarrow f_{at} = N_p$`}/>
                </p>
                <p>
                  3. Equilíbrio Rotacional (Torque no ponto de contato com o chão para eliminar <MathFormula formula={String.raw`$N_c$`} /> e <MathFormula formula={String.raw`$f_{at}$`} />):
                  <br />
                  Torque do Peso (horário): <MathFormula formula={String.raw`$\tau_P = mg \cdot (L/2)\cos\theta$`}/>
                  <br />
                  Torque da Parede (anti-horário): <MathFormula formula={String.raw`$\tau_{N_p} = N_p \cdot L\sin\theta$`}/>
                  <br />
                  <MathFormula formula={String.raw`$mg \frac{L}{2}\cos\theta = N_p L\sin\theta \Rightarrow N_p = \frac{mg}{2\tan\theta}$`}/>
                </p>
                <p>
                  4. Condição de não escorregamento (<MathFormula formula={String.raw`$f_{at} \le \mu N_c$`}/>):
                  <br />
                  Como <MathFormula formula={String.raw`$f_{at} = N_p$`}/>:
                  <MathFormula formula={String.raw`$$ \frac{mg}{2\tan\theta} \le \mu (mg) $$`} />
                  <MathFormula formula={String.raw`$$ \frac{1}{2\tan\theta} \le \mu \Rightarrow \tan\theta \ge \frac{1}{2\mu} $$`} />
                </p>
              </div>
            }
          />

          <ExampleProblem
            title="Exemplo 2: Cilindro com Degrau (IME)"
            difficulty="ITA/IME"
            problem={
              <div>
                Um cilindro de raio <MathFormula formula={String.raw`$R$`} /> e peso <MathFormula formula={String.raw`$P$`} /> deve subir um degrau de altura <MathFormula formula={String.raw`$h < R$`} />. Uma força horizontal <MathFormula formula={String.raw`$F$`} /> é aplicada no eixo. Qual o valor mínimo de <MathFormula formula={String.raw`$F$`} /> para iniciar a subida?
              </div>
            }
            solution={
              <div>
                <p>
                  Para subir o degrau, o cilindro deve girar em torno da quina do degrau (ponto de apoio). Nesse instante crítico, o contato com o chão é perdido (Normal do chão = 0).
                </p>
                <p>
                  1. Polo de rotação: A quina do degrau.
                </p>
                <p>
                  2. Braços de alavanca:
                  <br />
                  - Para a força <MathFormula formula={String.raw`$F$`} /> (horizontal no eixo): A distância vertical até a quina é <MathFormula formula={String.raw`$R - h$`}/>.
                  <br />
                  - Para o Peso <MathFormula formula={String.raw`$P$`} /> (vertical no eixo): A distância horizontal até a quina é <MathFormula formula={String.raw`$d$`}/>.
                  <br />
                  Por Pitágoras no triângulo formado pelo raio e a quina: <MathFormula formula={String.raw`$R^2 = (R-h)^2 + d^2 \Rightarrow d = \sqrt{R^2 - (R-h)^2} = \sqrt{2Rh - h^2}$`}/>.
                </p>
                <p>
                  3. Equilíbrio de Torques (Iminência de girar):
                  <br />
                  Torque de F (ajuda a subir) = Torque de P (atrapalha).
                  <MathFormula formula={String.raw`$$ F(R-h) = P \cdot d $$`} />
                  <MathFormula formula={String.raw`$$ F = P \frac{\sqrt{2Rh - h^2}}{R-h} $$`} />
                </p>
              </div>
            }
          />
        </div>
      )
    }
  ]
};
