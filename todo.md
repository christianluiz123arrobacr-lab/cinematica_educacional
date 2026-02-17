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
