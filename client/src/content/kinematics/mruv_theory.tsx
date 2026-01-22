import React from "react";
import { MathFormula } from "@/components/MathFormula";
import { ExampleProblem } from "@/components/AdvancedTheory";

export const MRUVTheory = {
  title: "Movimento Retilíneo Uniformemente Variado (MRUV)",
  introduction: (
    <div>
      <p className="mb-4">
        No MRUV, a aceleração vetorial é constante e não nula. Isso implica que a velocidade varia linearmente com o tempo e a posição varia quadraticamente. É o modelo fundamental para queda livre e movimentos sob forças constantes.
      </p>
      <p>
        Aqui, o uso do Cálculo Diferencial e Integral permite deduzir todas as equações sem necessidade de "decoreba", proporcionando um entendimento profundo da física.
      </p>
    </div>
  ),
  sections: [
    {
      title: "1. Dedução via Cálculo Integral",
      content: (
        <div className="space-y-4">
          <p>
            Partindo da definição de aceleração instantânea <MathFormula formula={String.raw`$\vec{a} = \frac{d\vec{v}}{dt}$`} /> e sabendo que <MathFormula formula={String.raw`$\vec{a}$`} /> é constante:
          </p>
          <div className="bg-slate-100 p-4 rounded text-center">
            <MathFormula formula={String.raw`$$ \int_{\vec{v}_0}^{\vec{v}} d\vec{v} = \int_{0}^{t} \vec{a} \, dt \Rightarrow \vec{v}(t) = \vec{v}_0 + \vec{a}t $$`} />
          </div>
          <p>
            Agora, integramos a velocidade para achar a posição:
          </p>
          <div className="bg-slate-100 p-4 rounded text-center">
            <MathFormula formula={String.raw`$$ \vec{r}(t) = \vec{r}_0 + \int_{0}^{t} (\vec{v}_0 + \vec{a}t) \, dt $$`} />
            <div className="my-2"></div>
            <MathFormula formula={String.raw`$$ \vec{r}(t) = \vec{r}_0 + \vec{v}_0 t + \frac{1}{2}\vec{a}t^2 $$`} />
          </div>
          <p>
            Esta é a famosa equação do "sorvetão", deduzida rigorosamente.
          </p>
        </div>
      )
    },
    {
      title: "2. Equação de Torricelli (Sem o Tempo)",
      content: (
        <div className="space-y-4">
          <p>
            Muitas vezes precisamos relacionar velocidade e posição sem depender do tempo. Usamos a regra da cadeia para reescrever a aceleração:
          </p>
          <div className="bg-slate-100 p-4 rounded text-center">
            <MathFormula formula={String.raw`$$ a = \frac{dv}{dt} = \frac{dv}{dx} \cdot \frac{dx}{dt} = v \cdot \frac{dv}{dx} $$`} />
          </div>
          <p>
            Separando as variáveis e integrando:
          </p>
          <div className="bg-slate-100 p-4 rounded text-center">
            <MathFormula formula={String.raw`$$ \int_{x_0}^{x} a \, dx = \int_{v_0}^{v} v \, dv $$`} />
            <div className="my-2"></div>
            <MathFormula formula={String.raw`$$ a(x - x_0) = \frac{v^2}{2} - \frac{v_0^2}{2} $$`} />
            <div className="my-2"></div>
            <MathFormula formula={String.raw`$$ v^2 = v_0^2 + 2a\Delta x $$`} />
          </div>
          <p>
            Essa dedução mostra que Torricelli é, na verdade, uma consequência direta do <strong>Teorema da Energia Cinética</strong> (Trabalho = Variação da Energia Cinética), dividindo a massa dos dois lados.
          </p>
        </div>
      )
    },
    {
      title: "3. Exemplos Resolvidos (Nível Militar)",
      content: (
        <div className="space-y-6">
          <ExampleProblem
            title="Exemplo 1: O Problema do Trem (ITA)"
            difficulty="Difícil"
            problem={
              <div>
                Um trem de comprimento <MathFormula formula={String.raw`$L$`} /> entra em um túnel de comprimento <MathFormula formula={String.raw`$D$`} /> com velocidade <MathFormula formula={String.raw`$v_0$`} /> e aceleração constante <MathFormula formula={String.raw`$a$`} />. Quanto tempo o trem leva para atravessar completamente o túnel?
              </div>
            }
            solution={
              <div>
                <p>
                  Para atravessar <strong>completamente</strong>, a traseira do trem deve sair do túnel.
                  <br/>
                  Posição inicial da frente do trem: <MathFormula formula={String.raw`$x=0$`} /> (início do túnel).
                  <br/>
                  Posição final da frente do trem: <MathFormula formula={String.raw`$x = D + L$`} /> (frente sai + comprimento do trem).
                </p>
                <p>
                  Usando a equação horária da posição:
                  <MathFormula formula={String.raw`$$ \Delta S = v_0 t + \frac{1}{2}at^2 $$`} />
                  <MathFormula formula={String.raw`$$ D + L = v_0 t + \frac{1}{2}at^2 $$`} />
                </p>
                <p>
                  Temos uma equação do segundo grau em <MathFormula formula={String.raw`$t$`} />:
                  <MathFormula formula={String.raw`$$ \frac{1}{2}at^2 + v_0 t - (D+L) = 0 $$`} />
                </p>
                <p>
                  Resolvendo para <MathFormula formula={String.raw`$t$`} /> (tomando a raiz positiva):
                  <MathFormula formula={String.raw`$$ t = \frac{-v_0 + \sqrt{v_0^2 + 2a(D+L)}}{a} $$`} />
                </p>
              </div>
            }
          />

          <ExampleProblem
            title="Exemplo 2: Aceleração Variável (Jerk)"
            difficulty="ITA/IME"
            problem={
              <div>
                Uma partícula se move tal que sua aceleração varia com o tempo segundo <MathFormula formula={String.raw`$a(t) = 6t$`} /> (SI). Se ela parte do repouso na origem, determine sua posição em <MathFormula formula={String.raw`$t=2s$`} />.
              </div>
            }
            solution={
              <div>
                <p>
                  Aqui a aceleração <strong>não é constante</strong>, então NÃO podemos usar "sorvetão" ou Torricelli. Devemos integrar.
                </p>
                <p>
                  1. Achar a velocidade:
                  <MathFormula formula={String.raw`$$ v(t) = v_0 + \int_0^t a(t) dt = 0 + \int_0^t 6t \, dt = 3t^2 $$`} />
                </p>
                <p>
                  2. Achar a posição:
                  <MathFormula formula={String.raw`$$ x(t) = x_0 + \int_0^t v(t) dt = 0 + \int_0^t 3t^2 \, dt = t^3 $$`} />
                </p>
                <p>
                  Para <MathFormula formula={String.raw`$t=2s$`} />:
                  <MathFormula formula={String.raw`$$ x(2) = 2^3 = 8 \text{ metros} $$`} />
                </p>
                <p>
                  <strong>Nota:</strong> A taxa de variação da aceleração (<MathFormula formula={String.raw`$da/dt$`} />) é chamada de <em>Jerk</em> ou Arrancada.
                </p>
              </div>
            }
          />
        </div>
      )
    }
  ]
};
