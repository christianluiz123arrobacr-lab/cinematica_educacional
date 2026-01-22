import React from "react";
import { MathFormula } from "@/components/MathFormula";
import { ExampleProblem } from "@/components/AdvancedTheory";

export const ProjectileTheory = {
  title: "Cinemática Vetorial: Lançamento de Projéteis",
  introduction: (
    <div>
      <p className="mb-4">
        O lançamento oblíquo é a composição de dois movimentos independentes (Princípio de Galileu): MRU na horizontal e MRUV (Queda Livre) na vertical.
      </p>
      <p>
        No nível avançado, analisamos a <strong>Equação da Trajetória</strong> (parábola) eliminando o tempo, e o <strong>Alcance Máximo</strong> em planos inclinados.
      </p>
    </div>
  ),
  sections: [
    {
      title: "1. Equação da Trajetória (Sem o tempo)",
      content: (
        <div className="space-y-4">
          <p>
            Sabemos que <MathFormula formula={String.raw`$x = (v_0 \cos\theta)t \Rightarrow t = \frac{x}{v_0 \cos\theta}$`} />.
          </p>
          <p>
            Substituindo em <MathFormula formula={String.raw`$y = (v_0 \sin\theta)t - \frac{1}{2}gt^2$`} />:
          </p>
          <div className="bg-slate-100 p-4 rounded text-center">
            <MathFormula formula={String.raw`$$ y(x) = x \tan\theta - \frac{g x^2}{2 v_0^2 \cos^2\theta} $$`} />
          </div>
          <p>
            Esta é a equação de uma parábola com concavidade para baixo.
          </p>
        </div>
      )
    },
    {
      title: "2. Alcance Máximo e Parábola de Segurança",
      content: (
        <div className="space-y-4">
          <p>
            O alcance horizontal é <MathFormula formula={String.raw`$A = \frac{v_0^2 \sin(2\theta)}{g}$`} />. Máximo para <MathFormula formula={String.raw`$\theta = 45^\circ$`} />.
          </p>
          <p>
            <strong>Parábola de Segurança:</strong> É a envolvente de todas as trajetórias possíveis para um dado <MathFormula formula={String.raw`$v_0$`} />. Define a região do espaço que pode ser atingida pelo projétil.
            <MathFormula formula={String.raw`$$ y_{seg}(x) = \frac{v_0^2}{2g} - \frac{g x^2}{2 v_0^2} $$`} />
          </p>
        </div>
      )
    },
    {
      title: "3. Exemplos Resolvidos (Nível Militar)",
      content: (
        <div className="space-y-6">
          <ExampleProblem
            title="Exemplo 1: Alcance em Plano Inclinado (ITA)"
            difficulty="Difícil"
            problem={
              <div>
                Um projétil é lançado com velocidade <MathFormula formula={String.raw`$v_0$`} /> e ângulo <MathFormula formula={String.raw`$\theta$`} /> em relação à horizontal, subindo uma rampa que faz um ângulo <MathFormula formula={String.raw`$\alpha$`} /> com a horizontal. Calcule o alcance ao longo da rampa.
              </div>
            }
            solution={
              <div>
                <p>
                  Método mais elegante: Rotacionar o sistema de coordenadas para alinhar o eixo X com a rampa.
                </p>
                <p>
                  Nova gravidade:
                  <br />
                  <MathFormula formula={String.raw`$g_y = g \cos\alpha$`} /> (perpendicular à rampa)
                  <br />
                  <MathFormula formula={String.raw`$g_x = g \sin\alpha$`} /> (paralelo à rampa, desacelerando)
                </p>
                <p>
                  Ângulo de lançamento relativo à rampa: <MathFormula formula={String.raw`$\theta' = \theta - \alpha$`}/>.
                </p>
                <p>
                  Tempo de voo (quando <MathFormula formula={String.raw`$y' = 0$`}/>):
                  <MathFormula formula={String.raw`$$ T = \frac{2 v_0 \sin(\theta - \alpha)}{g \cos\alpha} $$`} />
                </p>
                <p>
                  Alcance na rampa (<MathFormula formula={String.raw`$x'$`}/>):
                  <MathFormula formula={String.raw`$$ D = (v_0 \cos(\theta-\alpha))T - \frac{1}{2}(g \sin\alpha)T^2 $$`} />
                  Substituindo <MathFormula formula={String.raw`$T$`}/> e simplificando (trigonometria pesada):
                  <MathFormula formula={String.raw`$$ D = \frac{2v_0^2 \sin(\theta-\alpha)\cos\theta}{g \cos^2\alpha} $$`} />
                </p>
              </div>
            }
          />
        </div>
      )
    }
  ]
};
