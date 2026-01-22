import React from "react";
import { MathFormula } from "@/components/MathFormula";
import { ExampleProblem } from "@/components/AdvancedTheory";

export const CircularTheory = {
  title: "Cinemática Vetorial do Movimento Circular",
  introduction: (
    <div>
      <p className="mb-4">
        O Movimento Circular é o exemplo mais importante de movimento curvilíneo. Aqui, a direção da velocidade muda constantemente, o que implica a existência de uma aceleração mesmo que o módulo da velocidade seja constante.
      </p>
      <p>
        Para dominar este tópico no nível ITA/IME, é crucial entender a decomposição da aceleração em componentes intrínsecas: <strong>Tangencial</strong> (muda o módulo da velocidade) e <strong>Centrípeta</strong> (muda a direção da velocidade).
      </p>
    </div>
  ),
  sections: [
    {
      title: "1. Grandezas Angulares e Lineares",
      content: (
        <div className="space-y-4">
          <p>
            Definimos a posição angular <MathFormula formula={String.raw`$\theta(t)$`} /> (em radianos). As derivadas temporais nos dão:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Velocidade Angular: <MathFormula formula={String.raw`$\omega = \frac{d\theta}{dt}$`} /> (rad/s)</li>
            <li>Aceleração Angular: <MathFormula formula={String.raw`$\alpha = \frac{d\omega}{dt} = \frac{d^2\theta}{dt^2}$`} /> (rad/s²)</li>
          </ul>
          <p>
            A relação com as grandezas lineares (no arco de raio <MathFormula formula={String.raw`$R$`} />) é dada por:
          </p>
          <div className="bg-slate-100 p-4 rounded text-center">
            <MathFormula formula={String.raw`$$ s = \theta R \quad \Rightarrow \quad v = \omega R \quad \Rightarrow \quad a_t = \alpha R $$`} />
          </div>
        </div>
      )
    },
    {
      title: "2. Vetor Aceleração Resultante",
      content: (
        <div className="space-y-4">
          <p>
            A aceleração vetorial <MathFormula formula={String.raw`$\vec{a}$`} /> tem duas componentes ortogonais:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-blue-50 p-4 rounded border border-blue-200">
              <p className="font-bold text-blue-800 mb-2">Aceleração Centrípeta (<MathFormula formula={String.raw`$\vec{a}_{cp}$`} />)</p>
              <p>Aponta para o centro. Responsável por curvar a trajetória.</p>
              <div className="mt-2 text-center">
                <MathFormula formula={String.raw`$$ |\vec{a}_{cp}| = \frac{v^2}{R} = \omega^2 R $$`} />
              </div>
            </div>
            <div className="bg-green-50 p-4 rounded border border-green-200">
              <p className="font-bold text-green-800 mb-2">Aceleração Tangencial (<MathFormula formula={String.raw`$\vec{a}_t$`} />)</p>
              <p>Tangente à trajetória. Responsável por variar o módulo da velocidade.</p>
              <div className="mt-2 text-center">
                <MathFormula formula={String.raw`$$ |\vec{a}_t| = \frac{dv}{dt} = \alpha R $$`} />
              </div>
            </div>
          </div>
          <p>
            O módulo da aceleração total é:
          </p>
          <div className="bg-slate-100 p-4 rounded text-center">
            <MathFormula formula={String.raw`$$ |\vec{a}| = \sqrt{a_{cp}^2 + a_t^2} = \sqrt{\left(\frac{v^2}{R}\right)^2 + (\alpha R)^2} $$`} />
          </div>
        </div>
      )
    },
    {
      title: "3. Exemplos Resolvidos (Nível Militar)",
      content: (
        <div className="space-y-6">
          <ExampleProblem
            title="Exemplo 1: Aceleração Total (MCUV)"
            difficulty="Médio"
            problem={
              <div>
                Uma partícula parte do repouso em movimento circular de raio <MathFormula formula={String.raw`$R=2\,m$`} /> com aceleração angular constante <MathFormula formula={String.raw`$\alpha = 3\,rad/s^2$`} />. Calcule o módulo da aceleração vetorial total no instante <MathFormula formula={String.raw`$t=2\,s$`} />.
              </div>
            }
            solution={
              <div>
                <p>
                  1. Calcular a velocidade angular em <MathFormula formula={String.raw`$t=2$`} />:
                  <MathFormula formula={String.raw`$$ \omega = \omega_0 + \alpha t = 0 + 3(2) = 6 \, rad/s $$`} />
                </p>
                <p>
                  2. Calcular a aceleração centrípeta:
                  <MathFormula formula={String.raw`$$ a_{cp} = \omega^2 R = (6)^2 (2) = 36 \cdot 2 = 72 \, m/s^2 $$`} />
                </p>
                <p>
                  3. Calcular a aceleração tangencial (constante):
                  <MathFormula formula={String.raw`$$ a_t = \alpha R = 3 \cdot 2 = 6 \, m/s^2 $$`} />
                </p>
                <p>
                  4. Calcular a resultante (Pitágoras):
                  <MathFormula formula={String.raw`$$ a = \sqrt{a_{cp}^2 + a_t^2} = \sqrt{72^2 + 6^2} = \sqrt{5184 + 36} = \sqrt{5220} \approx 72,25 \, m/s^2 $$`} />
                </p>
                <p>
                  Note que a componente centrípeta cresce rapidamente com o tempo (<MathFormula formula={String.raw`$\propto t^2$`} />), dominando o vetor aceleração.
                </p>
              </div>
            }
          />

          <ExampleProblem
            title="Exemplo 2: Vetores Unitários (IME)"
            difficulty="ITA/IME"
            problem={
              <div>
                Uma partícula descreve uma trajetória circular dada por <MathFormula formula={String.raw`$\vec{r}(t) = R\cos(\omega t)\hat{i} + R\sin(\omega t)\hat{j}$`} /> com <MathFormula formula={String.raw`$\omega$`}/> constante. Mostre que a aceleração é puramente centrípeta e calcule seu valor.
              </div>
            }
            solution={
              <div>
                <p>
                  Vamos derivar o vetor posição duas vezes em relação ao tempo.
                </p>
                <p>
                  1. Velocidade (<MathFormula formula={String.raw`$d\vec{r}/dt$`} />):
                  <MathFormula formula={String.raw`$$ \vec{v}(t) = -R\omega\sin(\omega t)\hat{i} + R\omega\cos(\omega t)\hat{j} $$`} />
                </p>
                <p>
                  2. Aceleração (<MathFormula formula={String.raw`$d\vec{v}/dt$`} />):
                  <MathFormula formula={String.raw`$$ \vec{a}(t) = -R\omega^2\cos(\omega t)\hat{i} - R\omega^2\sin(\omega t)\hat{j} $$`} />
                </p>
                <p>
                  Podemos fatorar <MathFormula formula={String.raw`$-\omega^2$`} />:
                  <MathFormula formula={String.raw`$$ \vec{a}(t) = -\omega^2 [R\cos(\omega t)\hat{i} + R\sin(\omega t)\hat{j}] $$`} />
                  <MathFormula formula={String.raw`$$ \vec{a}(t) = -\omega^2 \vec{r}(t) $$`} />
                </p>
                <p>
                  <strong>Conclusão:</strong> O vetor aceleração é paralelo ao vetor posição, mas com sentido oposto (sinal negativo). Como <MathFormula formula={String.raw`$\vec{r}$`} /> aponta da origem para fora, <MathFormula formula={String.raw`$\vec{a}$`} /> aponta para a origem (centro). Logo, é centrípeta.
                  <br/>
                  Módulo: <MathFormula formula={String.raw`$|\vec{a}| = \omega^2 |\vec{r}| = \omega^2 R$`} />. (C.Q.D.)
                </p>
              </div>
            }
          />
        </div>
      )
    }
  ]
};
