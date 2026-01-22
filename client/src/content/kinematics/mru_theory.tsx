import React from "react";
import { MathFormula } from "@/components/MathFormula";
import { ExampleProblem } from "@/components/AdvancedTheory";

export const MRUTheory = {
  title: "Cinemática Vetorial e Movimento Uniforme",
  introduction: (
    <div>
      <p className="mb-4">
        A Cinemática é a descrição geométrica do movimento, ignorando suas causas (forças). No nível avançado (ITA/IME), abandonamos a visão puramente escalar e adotamos o formalismo vetorial e o cálculo diferencial e integral como ferramentas fundamentais.
      </p>
      <p>
        O Movimento Retilíneo Uniforme (MRU) é o caso mais simples, onde o vetor velocidade é constante em módulo, direção e sentido. Isso implica que a aceleração vetorial é nula.
      </p>
    </div>
  ),
  sections: [
    {
      title: "1. Definição Formal e Cálculo",
      content: (
        <div className="space-y-4">
          <p>
            A velocidade instantânea é definida como a derivada do vetor posição <MathFormula formula={String.raw`$\vec{r}(t)$`} /> em relação ao tempo:
          </p>
          <div className="bg-slate-100 p-4 rounded text-center">
            <MathFormula formula={String.raw`$$ \vec{v}(t) = \frac{d\vec{r}}{dt} $$`} />
          </div>
          <p>
            No MRU, <MathFormula formula={String.raw`$\vec{v} = \text{constante}$`} />. Para encontrar a posição em função do tempo, integramos a equação diferencial:
          </p>
          <div className="bg-slate-100 p-4 rounded text-center">
            <MathFormula formula={String.raw`$$ \int_{\vec{r}_0}^{\vec{r}} d\vec{r} = \int_{t_0}^{t} \vec{v} \, dt $$`} />
            <div className="my-2"></div>
            <MathFormula formula={String.raw`$$ \vec{r}(t) - \vec{r}_0 = \vec{v} \cdot (t - t_0) $$`} />
            <div className="my-2"></div>
            <MathFormula formula={String.raw`$$ \vec{r}(t) = \vec{r}_0 + \vec{v}t $$`} />
          </div>
          <p>
            Esta é a equação vetorial da reta. Em uma dimensão (eixo x), recuperamos a forma escalar clássica <MathFormula formula={String.raw`$x(t) = x_0 + vt$`} />.
          </p>
        </div>
      )
    },
    {
      title: "2. Velocidade Relativa (Tópico Crítico)",
      content: (
        <div className="space-y-4">
          <p>
            Muitos problemas do ITA envolvem referenciais móveis (barcos, aviões, chuva). A relação fundamental de Galileu para velocidades (para <MathFormula formula={String.raw`$v \ll c$`} />) é:
          </p>
          <div className="bg-slate-100 p-4 rounded text-center">
            <MathFormula formula={String.raw`$$ \vec{v}_{A,B} = \vec{v}_{A,T} - \vec{v}_{B,T} $$`} />
          </div>
          <p>
            Onde:
            <ul className="list-disc pl-6 mt-2">
              <li><MathFormula formula={String.raw`$\vec{v}_{A,B}$`} />: Velocidade de A em relação a B.</li>
              <li><MathFormula formula={String.raw`$\vec{v}_{A,T}$`} />: Velocidade de A em relação à Terra.</li>
              <li><MathFormula formula={String.raw`$\vec{v}_{B,T}$`} />: Velocidade de B em relação à Terra.</li>
            </ul>
          </p>
          <p>
            <strong>Dica de Ouro:</strong> Sempre desenhe o triângulo de velocidades. A velocidade em relação à Terra é sempre a soma vetorial da velocidade relativa com a velocidade de arrasto.
          </p>
          <div className="bg-slate-100 p-4 rounded text-center">
            <MathFormula formula={String.raw`$$ \vec{v}_{resultante} = \vec{v}_{relativa} + \vec{v}_{arrasto} $$`} />
          </div>
        </div>
      )
    },
    {
      title: "3. Exemplos Resolvidos (Nível Militar)",
      content: (
        <div className="space-y-6">
          <ExampleProblem
            title="Exemplo 1: Travessia de Rio (Clássico ITA)"
            difficulty="Médio"
            problem={
              <div>
                Um barco motorizado desenvolve velocidade <MathFormula formula={String.raw`$v_b$`} /> em águas paradas. Ele deve atravessar um rio de largura <MathFormula formula={String.raw`$L$`} /> onde a correnteza tem velocidade <MathFormula formula={String.raw`$v_c$`} />.
                <br/>a) Qual o ângulo <MathFormula formula={String.raw`$\theta$`} /> com a margem para atravessar no menor tempo possível?
                <br/>b) Qual o ângulo <MathFormula formula={String.raw`$\alpha$`} /> para atravessar percorrendo a menor distância possível (perpendicularmente)?
              </div>
            }
            solution={
              <div>
                <p className="mb-2"><strong>a) Menor Tempo:</strong></p>
                <p>
                  O tempo de travessia depende apenas da componente da velocidade perpendicular às margens (<MathFormula formula={String.raw`$v_y$`} />).
                  <MathFormula formula={String.raw`$$ t = \frac{L}{v_y} = \frac{L}{v_b \sin(\theta)} $$`} />
                  Para minimizar <MathFormula formula={String.raw`$t$`} />, devemos maximizar <MathFormula formula={String.raw`$\sin(\theta)$`} />. O valor máximo é 1, quando <MathFormula formula={String.raw`$\theta = 90^\circ$`} />.
                  <br/>
                  Ou seja, o barco deve apontar <strong>perpendicularmente à margem</strong>, ignorando a correnteza. Ele será arrastado rio abaixo, mas chegará ao outro lado no menor tempo.
                </p>
                
                <p className="mt-4 mb-2"><strong>b) Menor Distância (Travessia Perpendicular):</strong></p>
                <p>
                  Para cruzar perpendicularmente (sem deriva), a componente horizontal da velocidade do barco deve cancelar a correnteza:
                  <MathFormula formula={String.raw`$$ v_{bx} + v_c = 0 \Rightarrow v_b \cos(\alpha) = v_c $$`} />
                  Isso só é possível se <MathFormula formula={String.raw`$v_b > v_c$`} />. O ângulo de apontamento (contra a correnteza) será:
                  <MathFormula formula={String.raw`$$ \cos(\alpha) = \frac{v_c}{v_b} \Rightarrow \alpha = \arccos\left(\frac{v_c}{v_b}\right) $$`} />
                  A velocidade resultante será <MathFormula formula={String.raw`$v_{res} = \sqrt{v_b^2 - v_c^2}$`} />.
                </p>
              </div>
            }
          />

          <ExampleProblem
            title="Exemplo 2: Encontro de Projéteis (Nível IME)"
            difficulty="ITA/IME"
            problem={
              <div>
                Duas partículas A e B movem-se no plano XY com velocidades constantes <MathFormula formula={String.raw`$\vec{v}_A = 2\hat{i} + 3\hat{j}$`} /> e <MathFormula formula={String.raw`$\vec{v}_B = -4\hat{i} + \hat{j}$`} /> (SI). No instante <MathFormula formula={String.raw`$t=0$`} />, A está na origem e B está em <MathFormula formula={String.raw`$\vec{r}_{B0} = 12\hat{i} + 4\hat{j}$`} />. Determine a distância mínima entre elas.
              </div>
            }
            solution={
              <div>
                <p>
                  A melhor estratégia é usar o referencial relativo. Vamos colocar o observador em A. Para A, B se move com velocidade relativa:
                  <MathFormula formula={String.raw`$$ \vec{v}_{rel} = \vec{v}_B - \vec{v}_A = (-4 - 2)\hat{i} + (1 - 3)\hat{j} = -6\hat{i} - 2\hat{j} $$`} />
                </p>
                <p>
                  A posição inicial relativa é:
                  <MathFormula formula={String.raw`$$ \vec{r}_{rel,0} = \vec{r}_{B0} - \vec{r}_{A0} = 12\hat{i} + 4\hat{j} $$`} />
                </p>
                <p>
                  A trajetória relativa é uma reta. A distância mínima é a distância da origem (A) até a reta descrita por B no referencial relativo.
                  Podemos usar o produto vetorial para achar essa distância <MathFormula formula={String.raw`$d$`} />:
                  <MathFormula formula={String.raw`$$ d = \frac{|\vec{r}_{rel,0} \times \vec{v}_{rel}|}{|\vec{v}_{rel}|} $$`} />
                </p>
                <p>
                  Calculando o produto vetorial (apenas componente k):
                  <MathFormula formula={String.raw`$$ \vec{r}_{rel,0} \times \vec{v}_{rel} = (12)(-2) - (4)(-6) = -24 + 24 = 0 $$`} />
                </p>
                <p>
                  Como o produto vetorial é zero, os vetores posição e velocidade são colineares (ou antiparalelos). Isso significa que <strong>as partículas vão colidir</strong>! A distância mínima é zero.
                </p>
              </div>
            }
          />
        </div>
      )
    }
  ]
};
