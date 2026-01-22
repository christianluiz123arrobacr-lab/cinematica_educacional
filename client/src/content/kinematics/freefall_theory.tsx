import React from "react";
import { MathFormula } from "@/components/MathFormula";
import { ExampleProblem } from "@/components/AdvancedTheory";

export const FreeFallTheory = {
  title: "Queda Livre e Resistência do Ar",
  introduction: (
    <div>
      <p className="mb-4">
        A Queda Livre ideal é um MRUV onde a única aceleração é a gravidade (<MathFormula formula={String.raw`$g \approx 9,8 \, m/s^2$`} />). No entanto, em problemas de nível superior e engenharia real, a resistência do ar não pode ser ignorada.
      </p>
      <p>
        Nesta seção, vamos além do básico e analisamos o movimento real de corpos na atmosfera, introduzindo o conceito de Velocidade Terminal através de equações diferenciais.
      </p>
    </div>
  ),
  sections: [
    {
      title: "1. O Modelo Ideal (Vácuo)",
      content: (
        <div className="space-y-4">
          <p>
            No vácuo, as equações são as do MRUV com <MathFormula formula={String.raw`$a = -g$`} /> (adotando referencial para cima):
          </p>
          <div className="bg-slate-100 p-4 rounded text-center">
            <MathFormula formula={String.raw`$$ y(t) = y_0 + v_0 t - \frac{1}{2}gt^2 $$`} />
            <div className="my-2"></div>
            <MathFormula formula={String.raw`$$ v(t) = v_0 - gt $$`} />
          </div>
          <p>
            <strong>Propriedade de Simetria:</strong> O tempo de subida é igual ao tempo de descida (para o mesmo nível). A velocidade de retorno ao solo tem o mesmo módulo da velocidade de lançamento, mas sentido oposto.
          </p>
        </div>
      )
    },
    {
      title: "2. Resistência do Ar e Velocidade Terminal",
      content: (
        <div className="space-y-4">
          <p>
            Quando um corpo cai na atmosfera, ele sofre uma força de arrasto <MathFormula formula={String.raw`$F_{arr}$`} /> oposta ao movimento. Para altas velocidades, o arrasto é proporcional ao quadrado da velocidade (<MathFormula formula={String.raw`$F_{arr} = kv^2$`} />).
          </p>
          <p>
            A Segunda Lei de Newton fica:
          </p>
          <div className="bg-slate-100 p-4 rounded text-center">
            <MathFormula formula={String.raw`$$ mg - kv^2 = ma $$`} />
            <div className="my-2"></div>
            <MathFormula formula={String.raw`$$ a = g - \frac{k}{m}v^2 $$`} />
          </div>
          <p>
            Conforme a velocidade aumenta, o arrasto aumenta até igualar o peso. Nesse ponto, a aceleração zera e o corpo atinge a <strong>Velocidade Terminal (<MathFormula formula={String.raw`$v_T$`} />)</strong>:
          </p>
          <div className="bg-slate-100 p-4 rounded text-center">
            <MathFormula formula={String.raw`$$ 0 = g - \frac{k}{m}v_T^2 \Rightarrow v_T = \sqrt{\frac{mg}{k}} $$`} />
          </div>
          <p>
            Para resolver a equação diferencial completa <MathFormula formula={String.raw`$\frac{dv}{dt} = g - \frac{k}{m}v^2$`} />, usamos separação de variáveis e integração, resultando em uma função tangente hiperbólica (<MathFormula formula={String.raw`$\tanh$`} />).
          </p>
        </div>
      )
    },
    {
      title: "3. Exemplos Resolvidos (Nível Militar)",
      content: (
        <div className="space-y-6">
          <ExampleProblem
            title="Exemplo 1: Altura Máxima (Sem Ar)"
            difficulty="Fácil"
            problem={
              <div>
                Um projétil é lançado verticalmente para cima com <MathFormula formula={String.raw`$v_0 = 30 \, m/s$`} />. Adote <MathFormula formula={String.raw`$g=10 \, m/s^2$`} />. Calcule a altura máxima.
              </div>
            }
            solution={
              <div>
                <p>
                  Na altura máxima, a velocidade instantânea é zero (<MathFormula formula={String.raw`$v=0$`} />). Usando Torricelli:
                  <MathFormula formula={String.raw`$$ v^2 = v_0^2 - 2g\Delta y $$`} />
                  <MathFormula formula={String.raw`$$ 0 = 30^2 - 2(10)H_{max} $$`} />
                  <MathFormula formula={String.raw`$$ 20H_{max} = 900 \Rightarrow H_{max} = 45 \, m $$`} />
                </p>
              </div>
            }
          />

          <ExampleProblem
            title="Exemplo 2: Paraquedista (ITA/IME)"
            difficulty="ITA/IME"
            problem={
              <div>
                Um paraquedista de massa <MathFormula formula={String.raw`$m$`} /> salta e atinge velocidade terminal <MathFormula formula={String.raw`$v_T$`} />. Ao abrir o paraquedas, a constante de arrasto quadruplica (<MathFormula formula={String.raw`$4k$`} />). Qual será a nova velocidade terminal <MathFormula formula={String.raw`$v_T'$`} />?
              </div>
            }
            solution={
              <div>
                <p>
                  A velocidade terminal é dada por <MathFormula formula={String.raw`$v_T = \sqrt{\frac{mg}{k}}$`} />.
                </p>
                <p>
                  Com o paraquedas aberto, a nova constante é <MathFormula formula={String.raw`$k' = 4k$`} />.
                  <MathFormula formula={String.raw`$$ v_T' = \sqrt{\frac{mg}{k'}} = \sqrt{\frac{mg}{4k}} $$`} />
                </p>
                <p>
                  Podemos colocar o <MathFormula formula={String.raw`$1/4$`} /> para fora da raiz:
                  <MathFormula formula={String.raw`$$ v_T' = \frac{1}{\sqrt{4}} \sqrt{\frac{mg}{k}} = \frac{1}{2} v_T $$`} />
                </p>
                <p>
                  Ou seja, ao quadruplicar a resistência aerodinâmica, a velocidade terminal cai pela metade. Isso explica por que paraquedas precisam ser muito grandes.
                </p>
              </div>
            }
          />
        </div>
      )
    }
  ]
};
