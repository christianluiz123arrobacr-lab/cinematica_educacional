import React from "react";
import { MathFormula } from "@/components/MathFormula";
import { ExampleProblem } from "@/components/AdvancedTheory";

export const HydrostaticsTheory = {
  title: "Hidrostática Avançada: Pressão e Estabilidade",
  introduction: (
    <div>
      <p className="mb-4">
        A Hidrostática estuda fluidos em repouso. No nível avançado, a pressão não é apenas <MathFormula formula={String.raw`$F/A$`} />, mas um campo escalar que gera forças normais em todas as direções.
      </p>
      <p>
        Tópicos como o cálculo do centro de pressão em superfícies submersas e a estabilidade de corpos flutuantes (metacentro) são diferenciais em provas como a do IME.
      </p>
    </div>
  ),
  sections: [
    {
      title: "1. Teorema de Stevin (Dedução Diferencial)",
      content: (
        <div className="space-y-4">
          <p>
            Considere um elemento infinitesimal de fluido de altura <MathFormula formula={String.raw`$dz$`} /> e área <MathFormula formula={String.raw`$dA$`} />. O equilíbrio de forças verticais exige:
          </p>
          <div className="bg-slate-100 p-4 rounded text-center">
            <MathFormula formula={String.raw`$$ P(z) dA - P(z+dz) dA - \rho g (dA dz) = 0 $$`} />
            <div className="my-2"></div>
            <MathFormula formula={String.raw`$$ -\frac{dP}{dz} = \rho g \quad \Rightarrow \quad P(h) = P_0 + \rho g h $$`} />
          </div>
          <p>
            Isso mostra que a pressão cresce linearmente com a profundidade em fluidos incompressíveis.
          </p>
        </div>
      )
    },
    {
      title: "2. Princípio de Arquimedes e Empuxo",
      content: (
        <div className="space-y-4">
          <p>
            O Empuxo é a resultante das forças de pressão sobre a superfície do corpo submerso. Pelo Teorema da Divergência (Gauss), podemos mostrar que essa integral de superfície equivale ao peso do fluido deslocado:
          </p>
          <div className="bg-slate-100 p-4 rounded text-center">
            <MathFormula formula={String.raw`$$ \vec{E} = - \oint P \hat{n} dA = \rho g V_{sub} \hat{k} $$`} />
          </div>
          <p>
            O ponto de aplicação do Empuxo é o <strong>Centro de Carena</strong> (centro geométrico do volume submerso), que nem sempre coincide com o Centro de Massa do corpo.
          </p>
        </div>
      )
    },
    {
      title: "3. Exemplos Resolvidos (Nível Militar)",
      content: (
        <div className="space-y-6">
          <ExampleProblem
            title="Exemplo 1: Força em Barragem (Cálculo Integral)"
            difficulty="Difícil"
            problem={
              <div>
                Uma barragem tem a forma de um retângulo de largura <MathFormula formula={String.raw`$L$`} /> e altura <MathFormula formula={String.raw`$H$`} />. A água atinge o topo. Calcule a força total exercida pela água e o ponto de aplicação (centro de pressão).
              </div>
            }
            solution={
              <div>
                <p>
                  A pressão varia com a profundidade <MathFormula formula={String.raw`$y$`} />: <MathFormula formula={String.raw`$P(y) = \rho g y$`}/>.
                </p>
                <p>
                  1. Força Total (Integral):
                  <br />
                  Considere uma faixa horizontal de altura <MathFormula formula={String.raw`$dy$`}/> na profundidade <MathFormula formula={String.raw`$y$`}/>. A área é <MathFormula formula={String.raw`$dA = L dy$`}/>.
                  <MathFormula formula={String.raw`$$ dF = P dA = (\rho g y) (L dy) $$`} />
                  <MathFormula formula={String.raw`$$ F = \int_0^H \rho g L y \, dy = \rho g L \left[ \frac{y^2}{2} \right]_0^H = \frac{1}{2} \rho g L H^2 $$`} />
                  Isso equivale à pressão média (<MathFormula formula={String.raw`$\rho g H / 2$`}/>) vezes a área total (<MathFormula formula={String.raw`$LH$`}/>).
                </p>
                <p>
                  2. Centro de Pressão (Torque):
                  <br />
                  O torque total em relação à superfície deve ser igual ao torque da força resultante aplicada em <MathFormula formula={String.raw`$y_{cp}$`}/>.
                  <MathFormula formula={String.raw`$$ \tau = \int y \, dF = \int_0^H y (\rho g L y) \, dy = \rho g L \int_0^H y^2 \, dy = \rho g L \frac{H^3}{3} $$`} />
                  Igualando: <MathFormula formula={String.raw`$F \cdot y_{cp} = \tau$`}/>
                  <MathFormula formula={String.raw`$$ \left( \frac{1}{2} \rho g L H^2 \right) y_{cp} = \frac{1}{3} \rho g L H^3 \Rightarrow y_{cp} = \frac{2}{3}H $$`} />
                </p>
                <p>
                  O centro de pressão fica a 2/3 da profundidade, abaixo do centro geométrico (H/2).
                </p>
              </div>
            }
          />

          <ExampleProblem
            title="Exemplo 2: Estabilidade de Flutuação (IME)"
            difficulty="ITA/IME"
            problem={
              <div>
                Um cubo de madeira de lado <MathFormula formula={String.raw`$a$`} /> e densidade <MathFormula formula={String.raw`$\rho_c = 0,5 \rho_{agua}$`} /> flutua na água. Mostre que a posição de equilíbrio com as faces verticais é instável se ele for girado ligeiramente? (Conceitual)
              </div>
            }
            solution={
              <div>
                <p>
                  Para <MathFormula formula={String.raw`$\rho_c = 0,5 \rho_{agua}$`}/>, o cubo flutua com metade do volume submerso (<MathFormula formula={String.raw`$h_{sub} = a/2$`}/>).
                </p>
                <p>
                  O Centro de Massa (CM) está em <MathFormula formula={String.raw`$a/2$`}/>.
                  <br />
                  O Centro de Carena (CC - centro do volume submerso) está em <MathFormula formula={String.raw`$a/4$`}/>.
                </p>
                <p>
                  Ao inclinar o cubo, a forma do volume submerso muda (de retangular para trapezoidal/triangular). O CC se move lateralmente.
                </p>
                <p>
                  A estabilidade depende da posição do <strong>Metacentro (M)</strong>. Se M estiver acima do CM, é estável. Se M estiver abaixo, é instável.
                </p>
                <p>
                  Cálculo do raio metacêntrico (<MathFormula formula={String.raw`$BM$`}/>):
                  <MathFormula formula={String.raw`$$ BM = \frac{I}{V_{sub}} $$`} />
                  Onde <MathFormula formula={String.raw`$I$`}/> é o momento de inércia da área da linha d'água (quadrado <MathFormula formula={String.raw`$a \times a$`}/>) e <MathFormula formula={String.raw`$V_{sub} = a^3/2$`}/>.
                  <MathFormula formula={String.raw`$$ I = \frac{a \cdot a^3}{12} = \frac{a^4}{12} $$`} />
                  <MathFormula formula={String.raw`$$ BM = \frac{a^4/12}{a^3/2} = \frac{a}{6} $$`} />
                </p>
                <p>
                  Posição de M em relação ao fundo: <MathFormula formula={String.raw`$y_M = y_{CC} + BM = \frac{a}{4} + \frac{a}{6} = \frac{3a+2a}{12} = \frac{5a}{12}$`}/>.
                </p>
                <p>
                  Posição do CM: <MathFormula formula={String.raw`$y_{CM} = \frac{a}{2} = \frac{6a}{12}$`}/>.
                </p>
                <p>
                  Como <MathFormula formula={String.raw`$y_M < y_{CM}$`} /> (<MathFormula formula={String.raw`$5/12 < 6/12$`}/>), o equilíbrio é <strong>INSTÁVEL</strong>. O cubo tende a tombar e flutuar "de quina".
                </p>
              </div>
            }
          />
        </div>
      )
    }
  ]
};
