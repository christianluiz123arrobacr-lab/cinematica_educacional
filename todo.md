# Projeto TODO - Cinemática Educacional

## Eletromagnetismo - Em Progresso

### Layout e Estrutura
- [x] Reescrever EletromagnetismoHome.tsx seguindo padrão de EletricidadeHome
- [x] Criar páginas individuais de tópicos (6 tópicos)
  - [x] EletromagnetismoTopicCamposMagneticos.tsx
  - [x] EletromagnetismoTopicInducaoEletromagnetica.tsx
  - [x] EletromagnetismoTopicEquacoesMacwell.tsx
  - [x] EletromagnetismoTopicOndasAvancado.tsx
  - [x] EletromagnetismoTopicAplicacoes.tsx
  - [x] EletromagnetismoTopicRadiacao.tsx
- [x] Adicionar rotas em App.tsx para todos os tópicos

### Conteúdo dos Tópicos
- [x] Campos Magnéticos - Conteúdo ITA/IME com deduções e exemplos
  - [x] Lei de Ampère - APROFUNDADO com contexto histórico, analogia com Gauss, deduções completas, passo-a-passo, 3 exemplos resolvidos
  - [x] Solenóides - APROFUNDADO com contexto, dedução completa, passo-a-passo, aplicações avançadas, 4+ exemplos
  - [x] Propriedades Magnéticas - APROFUNDADO com contexto, classificação, deduções, passo-a-passo, 5+ exemplos
- [x] Indução Eletromagnética - Lei de Faraday, Lei de Lenz, Transformadores
  - [x] Lei de Faraday - APROFUNDADO com contexto, analogias, deduções completas, Lei de Lenz, passo-a-passo, 5+ exemplos
- [ ] Equações de Maxwell - Forma integral e diferencial
  - [x] Lei de Ampère-Maxwell - APROFUNDADO com contexto, corrente de deslocamento, deduções, passo-a-passo, 5+ exemplos
  - [x] Melhorar didática - EXPLICAR CADA TERMO de cada fórmula em linguagem simples com analogias e exemplos numéricos
- [ ] Ondas Eletromagnéticas Avançado - Polarização, Poynting, Espectro
  - [x] Equação de Onda - APROFUNDADO com contexto, dedução completa, termo-a-termo, velocidade da luz, soluções, exemplos
  - [x] Polarização - APROFUNDADO com contexto, tipos, Lei de Malus, polarizadores, passo-a-passo, 5+ exemplos
  - [x] Vetor de Poynting - APROFUNDADO com contexto, dedução, termo-a-termo, intensidade média, passo-a-passo, 5+ exemplos
  - [x] Espectro Eletromagnético - CRIADO COM DIDÁTICA SUPERIOR: todas as 7 faixas, termo-a-termo, tabela completa, 4 exemplos, aplicações
- [x] Aplicações - Transformadores, Motores, Geradores
  - [x] Transformadores - REESCRITO COM DIDÁTICA SUPERIOR: termo-a-termo, analogias, 3 tipos, 3 exemplos, 4 aplicações práticas
  - [x] Motores Elétricos - REESCRITO COM DIDÁTICA SUPERIOR: termo-a-termo, analogias, 3 tipos, passo-a-passo, 4 exemplos, 5 aplicações práticas
  - [x] Geradores Elétricos - CRIADO COM DIDÁTICA SUPERIOR: termo-a-termo, analogias, 2 tipos (CA/CC), passo-a-passo, 4 exemplos, 6 aplicações práticas
- [ ] Radiação Eletromagnética - Emissão, Absorção, Interação
  - [x] Emissão de Radiação - CRIADO COM DIDÁTICA SUPERIOR: termo-a-termo, cargas aceleradas, Larmor, dipolo oscilante, passo-a-passo, 4 exemplos, 6 aplicações
  - [x] Interação com Matéria - CRIADO COM DIDÁTICA SUPERIOR: absorção (Beer-Lambert), reflexão, refração (Snell), espalhamento (Rayleigh), termo-a-termo, passo-a-passo, 5 exemplos, 6 aplicações

### Diagramas Educacionais
- [ ] Gerar 6+ diagramas em português para Eletromagnetismo (opcional - conteúdo funciona sem diagramas)
- [ ] Fazer upload para S3/CDN (opcional)
- [ ] Integrar nos tópicos (opcional)

### Testes
- [x] Verificar renderização de LaTeX
- [x] Testar navegação entre tópicos
- [x] Verificar que todas as páginas carregam corretamente

## Dinâmica - Padronização em Progresso
- [x] Leis de Newton - APROFUNDADO com contexto histórico, deduções completas, passo-a-passo, 3 exemplos resolvidos
- [ ] Cinemática - Padronizar com mesma estrutura de Eletricidade (opcional - já tem conteúdo bom)

## Eletricidade - Revisão com Didática Superior em Progresso
- [x] Lei de Coulomb - REESCRITO COM DIDÁTICA SUPERIOR: explicação simples, contexto histórico, termo-a-termo completo, superposição, passo-a-passo em 7 etapas, 5 exemplos resolvidos, 6 aplicações práticas
- [x] Campo Elétrico - REESCRITO COM DIDÁTICA SUPERIOR: explicação simples (analogias: piscina, mapa de ventos, limalha), contexto histórico (Faraday, Maxwell), termo-a-termo completo (escalar e vetorial), princípio da superposição, linhas de campo (5 propriedades + padrões), passo-a-passo em 7 etapas, 6 exemplos resolvidos ITA/IME, 8 aplicações práticas
- [ ] Potencial Elétrico - REESCREVER com didática superior: termo-a-termo, analogias, trabalho-energia, passo-a-passo, 5+ exemplos
- [x] 8 tópicos com conteúdo ITA/IME rigoroso
- [x] 15 diagramas educacionais em português
- [x] AI Resolver integrado
- [x] Navegação e rotas funcionando

## Refatoração Arquitetural - Sistema Educacional Escalável

### Análise e Planejamento
- [x] Mapear estrutura atual de domínios (cinemática, dinâmica, eletricidade, etc.)
- [x] Identificar dependências cruzadas e acoplamentos
- [x] Documentar padrões inconsistentes

### Tipagem e Contratos
- [x] Criar /shared/types/domain.ts com contratos centralizados
- [x] Definir interfaces: TheoryModule, Section, ContentBlock, SimulatorDefinition
- [x] Eliminar tipagem implícita em todos os módulos
- [x] Garantir implementação correta dos contratos

### Arquitetura de Domínios
- [x] Estruturar cada domínio com padrão: theory/, exercises/, simulators/, index.ts (piloto: kinematics)
- [x] Isolar domínios (sem dependências cruzadas desnecessárias)
- [x] Criar barrel exports consistentes

### Separação Conteúdo/Renderização
- [x] Transformar conteúdo JSX em estrutura serializável baseada em blocos (sistema criado)
- [x] Criar renderizador genérico de blocos
- [x] Preparar para exportação (PDF, API, mobile)

### Modularização de Simuladores
- [ ] Separar: lógica física, estado (hooks), UI
- [ ] Garantir responsabilidade única por arquivo
- [ ] Remover lógica física de componentes de layout

### Padronização e Limpeza
- [ ] Padronizar imports (@/ vs relativos)
- [x] Remover arquivos .bak e duplicados (73 arquivos removidos)
- [ ] Excluir componentes não utilizados
- [x] Validar tsconfig para suportar nova estrutura

### Preparação para Escalabilidade
- [x] Estrutura para sistema de progresso persistente (tipos criados)
- [x] Preparar para versionamento de conteúdo (TopicMetadata.version)
- [x] Arquitetura compatível com backend futuro (conteúdo serializável)
- [x] Base para internacionalização (documentado)

### Validação e Documentação
- [ ] Testes de integração dos domínios
- [x] Documentar padrões arquiteturais (ARCHITECTURE.md)
- [x] Guia de contribuição para novos módulos (ARCHITECTURE.md)

## Física Moderna - Nova Área (Estrutura)
- [x] Criar FisicaModernaHome.tsx (página inicial)
- [x] Criar FisicaModernaTopicRelatividade.tsx (Relatividade Restrita)
- [x] Criar FisicaModernaTopicQuantica.tsx (Física Quântica)
- [x] Criar FisicaModernaTopicAtomo.tsx (Átomo e Núcleo)
- [x] Criar FisicaModernaTopicParticulas.tsx (Partículas Elementares)
- [x] Criar FisicaModernaTopicAplicacoes.tsx (Aplicações Modernas)
- [x] Integrar rotas no App.tsx
- [x] Adicionar link em FisicaIIIHome.tsx

## Física Moderna - Melhorar Layout
- [x] Ler EletricidadeHome.tsx como referência de layout completo
- [x] Adicionar seção de estatísticas/números
- [x] Adicionar seção "Por que estudar Física Moderna?"
- [x] Adicionar seção de recursos/ferramentas
- [x] Melhorar cards de tópicos (mais elaborados)
- [x] Adicionar footer com informações (Call to Action)
- [x] Adicionar animações e transições
- [x] Garantir consistência visual com outras áreas

## Física Moderna - Relatividade Restrita (Conteúdo)
- [x] Escrever Postulados de Einstein com didática superior:
  - [x] Explicação simples com analogias práticas
  - [x] Contexto histórico detalhado (crise do éter, Michelson-Morley)
  - [x] Postulado 1 termo-a-termo (Princípio da Relatividade)
  - [x] Postulado 2 termo-a-termo (Constância da velocidade da luz)
  - [x] Consequências revolucionárias
  - [x] Passo-a-passo prático em 7 etapas
  - [ ] 5+ exemplos resolvidos ITA/IME (próxima fase)
  - [x] Aplicações práticas (GPS, aceleradores de partículas)

## Física Moderna - Ajustar Layout de Relatividade
- [x] Ler página de Eletromagnetismo como referência de layout
- [x] Identificar padrão de estrutura (seções numeradas 0-5, cards coloridos, termo-a-termo)
- [x] Reescrever Relatividade seguindo padrão exato do Eletromagnetismo
- [x] Manter didática superior mas melhorar organização visual
- [ ] Adicionar mais exemplos resolvidos detalhados (próxima fase)
- [ ] Adicionar exercícios propostos (próxima fase)

## Correção de Erro Mobile - MathFormula
- [x] Analisar componente MathFormula atual
- [x] Identificar causa do erro "NotFoundError: insertBefore" no mobile (MathJax tentando manipular DOM antes de estar pronto)
- [x] Adicionar verificações de segurança antes de manipular DOM (isMounted, document.body.contains)
- [x] Implementar useEffect com cleanup adequado (cancelAnimationFrame, clearTimeout)
- [x] Adicionar fallback para erros de renderização (try-catch com warning apenas em dev)
- [x] Garantir compatibilidade com React 19 (useState para tracking, refs adequados)
- [x] Testar renderização no desktop (fórmulas renderizando corretamente)

## Relatividade - Refazer com Padrão Exato do Eletromagnetismo
- [x] Ler página completa de Eletromagnetismo (Radiação) como referência
- [x] Identificar padrão exato de estrutura:
  - [x] Seções numeradas com badges roxos (1, 2, 3, 4, 5)
  - [x] Cards coloridos: slate-900 (fórmulas), azul (interpretação), amarelo (info), verde (passo-a-passo), amber (histórico)
  - [x] Formato de termo-a-termo em grid 2 colunas dentro de card escuro
  - [x] Estrutura de deduções passo-a-passo com círculos numerados verdes
  - [ ] Formato de exemplos resolvidos (próxima fase)
  - [x] Alertas e notas importantes (cards amarelos com AlertTriangle)
- [x] Reescrever Relatividade seguindo estrutura idêntica
- [x] Manter profundidade didática mas ajustar formatação visual
- [ ] Adicionar exemplos resolvidos no mesmo formato (próxima fase)
- [ ] Validar que layout está idêntico ao Eletromagnetismo (próxima fase)

## Temperaturas e Escalas - Refazer com Padrão Eletromagnetismo
- [x] Ler página atual de Temperaturas e Escalas
- [x] Identificar conteúdo existente e estrutura
- [x] Reescrever completamente seguindo padrão Eletromagnetismo:
  - [x] Seções numeradas (1, 2, 3, 4, 5, 6) com badges laranjas
  - [x] Card amber com contexto histórico (Celsius 1742, Fahrenheit 1724, Kelvin 1848)
  - [x] Cards slate-900 para fórmulas de conversão com termo-a-termo em grid
  - [x] Cards azuis para características e interpretação
  - [x] Cards amarelos para alertas importantes (variação vs valor absoluto)
  - [x] Card verde com passo-a-passo de 7 etapas
  - [x] Explicação simples antes de cada fórmula
  - [ ] Exemplos resolvidos ITA/IME (próxima fase)
  - [x] Aplicações práticas (meteorologia, medicina, indústria, culinária, física, astronomia)
- [ ] Validar renderização (próxima fase)

## Temperaturas - Aprofundar Explicações das Escalas
- [x] Aprofundar Escala Celsius:
  - [x] Dedução da escolha dos pontos de referência (0°C e 100°C)
  - [x] Relação com propriedades da água (fusão e ebulição)
  - [x] Por que 100 divisões (escala decimal)
  - [x] Vantagens e limitações da escala (4 pontos)
  - [ ] Exemplos numéricos detalhados (próxima fase)
- [x] Aprofundar Escala Fahrenheit:
  - [x] Dedução histórica dos pontos de referência (0°F, 32°F, 96°F, 212°F)
  - [x] Por que 180 divisões entre fusão e ebulição
  - [x] Relação matemática com Celsius (dedução completa da fórmula 9/5)
  - [x] Vantagens práticas (mais divisões = maior precisão sem decimais)
  - [ ] Exemplos numéricos detalhados (próxima fase)
- [x] Aprofundar Escala Kelvin:
  - [x] Conceito de zero absoluto (terceira lei da termodinâmica de Nernst-Planck)
  - [x] Relação com energia cinética molecular (E_c = 3/2 k_B T com termo-a-termo)
  - [x] Por que Kelvin é escala absoluta (sem valores negativos, energia cinética ≥ 0)
  - [x] Dedução da relação com Celsius (273,15 via lei dos gases)
  - [x] Importância em física (lei dos gases, entropia, radiação de corpo negro)
  - [ ] Exemplos numéricos detalhados (próxima fase)
- [x] Adicionar dedução completa das fórmulas de conversão
- [ ] Validar renderização (próxima fase)


## Conversão entre Escalas - Aprofundar Explicações
- [x] Aprofundar Celsius ↔ Fahrenheit:
  - [x] Dedução completa da fórmula T_F = 9/5 T_C + 32 (4 passos matemáticos)
  - [x] Dedução da fórmula inversa T_C = 5/9 (T_F - 32)
  - [x] Explicação física de cada termo (9/5 = razão, 32 = deslocamento)
  - [x] Exemplo numérico detalhado (25°C → 77°F)
  - [x] Caso especial: -40°C = -40°F (dedução completa)
- [x] Aprofundar Celsius ↔ Kelvin:
  - [x] Dedução da constante 273,15 (via lei dos gases ideais PV=nRT)
  - [x] Explicação física do deslocamento (zero absoluto)
  - [x] Exemplo numérico detalhado (300 K → 26,85°C)
  - [x] Por que não há fator multiplicativo (mesma divisão: 1°C = 1 K)
- [x] Aprofundar Fahrenheit ↔ Kelvin:
  - [x] Dedução combinada das fórmulas (via Celsius intermediário)
  - [ ] Exemplo numérico detalhado (500 K → °F) (próxima fase)
- [x] Adicionar seção especial sobre conversão de VARIAÇÕES (ΔT):
  - [x] ΔT_C = ΔT_K (mesmo tamanho de grau)
  - [x] ΔT_F = 9/5 ΔT_C (graus Fahrenheit menores)
  - [x] Alerta sobre erro comum (não somar 32 ou 273,15 em variações)
  - [x] Exemplos numéricos de variações (aquecimento + resfriamento)
  - [x] Tabela comparativa: valor absoluto vs variação
  - [x] Analogia das réguas (por que variação é diferente)
- [x] Adicionar casos especiais e curiosidades:
  - [x] -40°C = -40°F (único ponto de igualdade - dedução completa)
  - [x] Temperatura corporal (37°C = 310 K)
  - [ ] Zero absoluto em todas as escalas (próxima fase)
- [ ] Validar renderização (próxima fase)


## Energia Térmica e Movimento Molecular - Refazer com Padrão Eletromagnetismo
- [x] Ler página atual de Energia Térmica (TermologiaTopicCalor.tsx)
- [x] Identificar conteúdo existente e estrutura
- [x] Reescrever completamente seguindo padrão Eletromagnetismo:
  - [x] Seções numeradas (1-7) com badges laranjas
  - [x] Card amber com contexto histórico (Bernoulli 1738, Joule 1843, Maxwell 1859, Boltzmann 1872)
  - [x] Cards slate-900 para fórmulas com termo-a-termo em grid (E_c, ⟨E_c⟩, U, Q)
  - [x] Cards azuis para interpretação física (proporcionalidade, zero absoluto, graus de liberdade)
  - [x] Cards amarelos para alertas importantes (sempre Kelvin, gases ideais, energia média)
  - [x] Card verde com passo-a-passo de 7 etapas (resolver problemas de calor)
  - [x] Explicação simples antes de cada fórmula (analogias: salão de baile, bolas de bilhar, multidão)
  - [x] Dedução completa da energia cinética média (⟨E_c⟩ = 3/2 k_B T) em 4 passos
  - [x] Relação com teoria cinética dos gases (PV=NkBT)
  - [x] Energia térmica total (U = 3/2 nRT)
  - [x] Calor sensível (Q = mcΔT) com termo-a-termo
  - [x] Tabela de calores específicos (6 materiais)
  - [ ] Exemplos resolvidos ITA/IME (próxima fase)
  - [x] Aplicações práticas (6 aplicações: oceanos, radiadores, panelas, praia, motores, termômetros)
- [ ] Validar renderização (próxima fase)


## Diferença entre Calor e Temperatura - Criar/Aprofundar com Padrão Eletromagnetismo
- [x] Verificar se a seção já existe em alguma página de Termologia (não existia)
- [x] Criar ou aprofundar seção seguindo padrão Eletromagnetismo:
  - [x] Seção 0 (antes das outras) com badge laranja
  - [x] Card amber com contexto histórico (Joseph Black 1760, calórico, distinção revolucionária)
  - [x] Explicação simples com 3 analogias práticas (salão de baile, oceano vs xícara, conta bancária)
  - [x] Tabela comparativa completa: Calor vs Temperatura (8 características: definição, natureza, unidades, dependência da massa, medida, direção de fluxo, equilíbrio, exemplo)
  - [x] Card slate-900 com exemplo numérico detalhado (iceberg vs fósforo com cálculos)
  - [x] Card azul para analogias práticas (diferenças conceituais)
  - [x] Card amarelo para alertas (4 erros comuns de confusão)
  - [x] Card verde com passo-a-passo de 4 etapas para identificar calor vs temperatura
  - [x] Exemplo numérico detalhado (iceberg 10⁶ kg a 0°C vs fósforo 0,001 kg a 600°C)
  - [ ] Exemplos resolvidos ITA/IME (próxima fase)
  - [ ] Aplicações práticas (isolamento térmico, refrigeração, etc.) (próxima fase)
- [ ] Validar renderização (próxima fase)


## MathJax Mobile Error - Investigação e Correção Definitiva
- [x] Investigar erro "NotFoundError: insertBefore" que ainda ocorre no mobile
- [x] Verificar se todas as páginas estão usando o componente MathFormula corrigido
- [x] Identificar se há múltiplas instâncias do MathJax tentando renderizar simultaneamente (SIM - causa raiz identificada)
- [x] Verificar se há race conditions na renderização (SIM - múltiplas fórmulas renderizando ao mesmo tempo)
- [x] Aplicar correção definitiva (implementado sistema de fila global MathJaxQueue)
- [ ] Testar em múltiplas páginas no desktop (próxima fase)
- [x] Documentar solução (fila global processa fórmulas uma por vez com delay de 50ms entre cada)


## Termologia - Processos de Transferência de Calor (Condução, Convecção, Radiação)
- [x] Criar página completa seguindo padrão Eletromagnetismo (adicionado a TermologiaTopicCalor.tsx)
- [x] Seção 8: Introdução aos 3 processos (explicação simples com analogias: xcara de café)
- [x] Seção 9: Condução Térmica
  - [x] Contexto histórico (Fourier 1822, Théorie analytique de la chaleur)
  - [x] Lei de Fourier com termo-a-termo em grid 2 colunas (Φ = -kAΔT/Δx)
  - [x] Forma diferencial (dΦ/dx)
  - [x] Condutividade térmica (k) - tabela de 7 materiais (cobre, alumínio, ferro, vidro, madeira, lã de vidro, ar)
  - [x] Resistência térmica (analogia com resistência elétrica R=Δx/kA)
- [x] Seção 10: Convecção
  - [x] Contexto histórico (Newton 1701, Lei de Resfriamento)
  - [x] Lei de Resfriamento de Newton com termo-a-termo (Φ = hA(T_sup - T_amb))
  - [x] Convecção natural vs forçada (com exemplos e valores típicos de h)
  - [x] Coeficiente de convecção (h) - valores típicos
- [x] Seção 11: Radiação Térmica
  - [x] Contexto histórico (Stefan 1879, Boltzmann 1884, corpo negro)
  - [x] Lei de Stefan-Boltzmann com termo-a-termo (P = εσAT⁴)
  - [x] Emissividade (ε) e corpo negro (Lei de Kirchhoff)
  - [x] Lei de Wien (deslocamento) - λ_max = b/T com exemplo Sol vs corpo humano
- [x] Seção 12: Comparação entre os 3 processos (tabela completa com 7 características)
- [x] Seção 13: 4 exemplos resolvidos ITA/IME
  - [x] Exemplo 1: Condução em parede composta (tijolo + isopor, resistência térmica)
  - [x] Exemplo 2: Convecção em resfriamento de café (Lei de Newton)
  - [x] Exemplo 3: Radiação solar na Terra (potência do Sol = 3,95 × 10²⁶ W)
  - [x] Exemplo 4: Garrafa térmica (3 processos combinados - análise qualitativa)
- [x] Seção 14: 6 aplicações práticas
  - [x] Isolamento térmico (casas - lã de vidro, janelas duplas, películas)
  - [x] Refrigeração (geladeiras, ar-condicionado - serpentinas, ventiladores)
  - [x] Aquecimento solar (coletores, convecção natural)
  - [x] Panelas e utensílios de cozinha (cobre/alumínio, cabos isolantes)
  - [x] Termômetros infravermelhos (detecção de radiação)
  - [x] Satélites e espaçonaves (radiadores, mantas térmicas)
- [x] Todos os cards coloridos (slate-900, azul, amarelo, verde, amber)
- [x] Todas as fórmulas em LaTeX com MathFormula (escapadas corretamente)
- [ ] Validar renderização no desktop e mobile (próxima fase)
