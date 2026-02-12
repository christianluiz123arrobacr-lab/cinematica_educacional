# Arquitetura do Sistema Educacional

## 📋 Visão Geral

Este projeto implementa uma arquitetura educacional escalável baseada em **domínios isolados**, **tipagem forte** e **separação de conteúdo/renderização**.

## 🏗️ Estrutura de Diretórios

```
client/src/
├── domains/                    # Domínios isolados (física)
│   ├── kinematics/            # Cinemática
│   │   ├── index.ts           # Barrel export + metadata
│   │   ├── theory/            # Conteúdo teórico
│   │   ├── exercises/         # Exercícios e quizzes
│   │   ├── simulators/        # Simuladores interativos
│   │   │   ├── physics/       # Lógica física pura
│   │   │   ├── hooks/         # Estado (React hooks)
│   │   │   └── ui/            # Componentes UI
│   │   ├── calculators/       # Calculadoras
│   │   └── graphs/            # Gráficos
│   ├── dynamics/              # Dinâmica
│   ├── electricity/           # Eletricidade
│   └── ...                    # Outros domínios
│
├── shared/
│   ├── types/                 # Tipagem centralizada
│   │   ├── domain.ts          # Contratos de domínio
│   │   ├── content-renderer.ts
│   │   └── index.ts           # Barrel export
│   ├── components/
│   │   ├── content-renderer/  # Renderizador genérico
│   │   │   ├── ContentRenderer.tsx
│   │   │   └── blocks/        # Renderizadores de blocos
│   │   └── ...
│   └── utils/
│
└── pages/                     # Apenas wrappers de roteamento
    └── ...
```

## 🎯 Princípios Arquiteturais

### 1. Isolamento de Domínios

Cada área da física é um módulo independente:

```typescript
// domains/kinematics/index.ts
export const kinematicsDomain: DomainModule = {
  id: 'kinematics',
  name: 'Cinemática',
  description: '...',
  theory: { topics: [...] },
  simulators: { simulators: [...] },
  // ...
};
```

**Benefícios:**
- ✅ Sem dependências cruzadas
- ✅ Fácil adicionar/remover domínios
- ✅ Equipes podem trabalhar em paralelo

### 2. Tipagem Forte e Contratos

Todos os módulos implementam contratos explícitos:

```typescript
// shared/types/domain.ts
export interface DomainModule {
  id: string;
  name: string;
  theory: TheoryModule;
  exercises?: ExerciseModule;
  // ...
}

export interface Topic {
  id: string;
  title: string;
  sections: Section[];
  metadata: TopicMetadata;
}
```

**Benefícios:**
- ✅ Autocomplete no IDE
- ✅ Erros de tipo em tempo de desenvolvimento
- ✅ Documentação automática

### 3. Separação Conteúdo/Renderização

Conteúdo é estrutura serializável (JSON):

```typescript
const velocityTopic: Topic = {
  id: 'velocity',
  title: 'Velocidade',
  sections: [
    {
      id: 'intro',
      title: 'Introdução',
      content: [
        { type: 'text', content: 'Velocidade é...' },
        { type: 'formula', latex: 'v = \\frac{\\Delta s}{\\Delta t}', ... },
        { type: 'example', title: 'Exemplo 1', ... },
      ],
    },
  ],
};
```

Renderização é genérica:

```tsx
<ContentRenderer blocks={section.content} />
```

**Benefícios:**
- ✅ Exportar para PDF
- ✅ API REST para conteúdo
- ✅ App mobile com mesmo conteúdo
- ✅ Versionamento de conteúdo

### 4. Simuladores com Separação de Responsabilidades

```
simulators/
├── physics/           # Lógica física pura (sem React)
│   └── motion.ts      # Equações, cálculos
├── hooks/             # Estado (React hooks)
│   └── useMotion.ts   # useState, useEffect
└── ui/                # Componentes visuais
    └── MotionSim.tsx  # Canvas, controles
```

**Benefícios:**
- ✅ Testes unitários da física
- ✅ Reutilizar lógica em outros contextos
- ✅ Responsabilidade única

## 📦 Sistema de Blocos de Conteúdo

### Tipos de Blocos Disponíveis

| Tipo | Descrição | Exemplo |
|------|-----------|---------|
| `text` | Texto simples | Parágrafos, explicações |
| `formula` | Fórmula LaTeX + termo-a-termo | `v = Δs/Δt` |
| `example` | Exemplo resolvido | Questões ITA/IME |
| `list` | Lista ordenada/não-ordenada | Propriedades, passos |
| `image` | Imagem com legenda | Diagramas, fotos |
| `video` | Vídeo embarcado | Experimentos |
| `table` | Tabela de dados | Comparações |
| `quote` | Citação | Frases históricas |
| `alert` | Aviso/destaque | Dicas, avisos |
| `divider` | Linha divisória | Separação visual |
| `interactive` | Interação futura | Quiz inline, drag-drop |

### Exemplo Completo

```typescript
const coulombLawTopic: Topic = {
  id: 'coulomb-law',
  title: 'Lei de Coulomb',
  sections: [
    {
      id: 'simple-explanation',
      title: 'Explicação Simples',
      content: [
        {
          type: 'text',
          content: 'A Lei de Coulomb descreve a força elétrica entre cargas...',
        },
        {
          type: 'alert',
          variant: 'info',
          content: 'Analogia: pense em ímãs que se atraem ou repelem.',
        },
      ],
    },
    {
      id: 'formula',
      title: 'Fórmula Matemática',
      content: [
        {
          type: 'formula',
          latex: 'F = k \\frac{|q_1 q_2|}{r^2}',
          display: 'block',
          explanation: [
            { term: 'F', meaning: 'Força elétrica', unit: 'N' },
            { term: 'k', meaning: 'Constante eletrostática', unit: 'N⋅m²/C²' },
            { term: 'q₁, q₂', meaning: 'Cargas elétricas', unit: 'C' },
            { term: 'r', meaning: 'Distância entre cargas', unit: 'm' },
          ],
        },
      ],
    },
    {
      id: 'example',
      title: 'Exemplo Resolvido',
      content: [
        {
          type: 'example',
          title: 'Exemplo 1: Força entre duas cargas',
          problem: 'Duas cargas de +2μC e -3μC estão separadas por 0,5m...',
          difficulty: 'ita-ime',
          solution: [
            { description: 'Identificar dados', formula: 'q_1 = 2 \\times 10^{-6} C' },
            { description: 'Aplicar Lei de Coulomb', formula: 'F = k \\frac{|q_1 q_2|}{r^2}' },
            { calculation: 'F = 9 \\times 10^9 \\times \\frac{6 \\times 10^{-12}}{0.25}' },
            { result: 'F = 0,216 N' },
          ],
        },
      ],
    },
  ],
  metadata: {
    version: '1.0.0',
    lastUpdated: new Date('2026-02-11'),
    difficulty: 'advanced',
    estimatedTime: 45,
    prerequisites: ['electric-charge'],
    tags: ['eletrostática', 'força', 'coulomb'],
  },
};
```

## 🔧 Como Adicionar Novo Domínio

### Passo 1: Criar Estrutura

```bash
mkdir -p client/src/domains/novo-dominio/{theory,exercises,simulators/{physics,hooks,ui},calculators,graphs}
```

### Passo 2: Criar `index.ts`

```typescript
// domains/novo-dominio/index.ts
import type { DomainModule } from '@/shared/types';

export const novoDominioDomain: DomainModule = {
  id: 'novo-dominio',
  name: 'Novo Domínio',
  description: 'Descrição do domínio',
  icon: 'IconName',
  color: '#HEX',
  theory: { topics: [] },
};
```

### Passo 3: Adicionar Tópicos

```typescript
// domains/novo-dominio/theory/topico1.ts
import type { Topic } from '@/shared/types';

export const topico1: Topic = {
  id: 'topico1',
  title: 'Tópico 1',
  description: '...',
  sections: [
    {
      id: 'intro',
      title: 'Introdução',
      content: [
        { type: 'text', content: '...' },
      ],
    },
  ],
  metadata: {
    version: '1.0.0',
    lastUpdated: new Date(),
    difficulty: 'basic',
    estimatedTime: 30,
    prerequisites: [],
    tags: [],
  },
};
```

### Passo 4: Exportar no `theory/index.ts`

```typescript
// domains/novo-dominio/theory/index.ts
export { topico1 } from './topico1';

export const novoDominioTopics = [topico1];
```

### Passo 5: Criar Página de Roteamento

```tsx
// pages/novo-dominio/topics/[topicId].tsx
import { ContentRenderer } from '@/shared/components/content-renderer';
import { novoDominioTopics } from '@/domains/novo-dominio';

export default function TopicPage({ topicId }: { topicId: string }) {
  const topic = novoDominioTopics.find(t => t.id === topicId);
  
  return (
    <div>
      <h1>{topic.title}</h1>
      {topic.sections.map(section => (
        <section key={section.id}>
          <h2>{section.title}</h2>
          <ContentRenderer blocks={section.content} />
        </section>
      ))}
    </div>
  );
}
```

## 🚀 Preparação para Escalabilidade

### Sistema de Progresso (Futuro)

```typescript
interface UserProgress {
  userId: string;
  domains: {
    [domainId: string]: {
      topics: {
        [topicId: string]: {
          completed: boolean;
          progress: number; // 0-100
          timeSpent: number;
          lastAccessed: Date;
        };
      };
    };
  };
}
```

### Versionamento de Conteúdo

```typescript
interface TopicMetadata {
  version: string; // "1.2.3"
  lastUpdated: Date;
  changelog?: string[];
}

// Migração automática de conteúdo antigo
function migrateContent(topic: Topic, fromVersion: string, toVersion: string) {
  // Lógica de migração
}
```

### Internacionalização (i18n)

```typescript
interface LocalizedTopic {
  [locale: string]: Topic;
}

const velocityTopic: LocalizedTopic = {
  'pt-BR': { id: 'velocity', title: 'Velocidade', ... },
  'en-US': { id: 'velocity', title: 'Velocity', ... },
  'es-ES': { id: 'velocity', title: 'Velocidad', ... },
};
```

### API REST para Conteúdo

```typescript
// server/routers.ts
export const contentRouter = router({
  getDomain: publicProcedure
    .input(z.object({ domainId: z.string() }))
    .query(({ input }) => {
      return domains[input.domainId];
    }),
  
  getTopic: publicProcedure
    .input(z.object({ domainId: z.string(), topicId: z.string() }))
    .query(({ input }) => {
      return domains[input.domainId].theory.topics.find(
        t => t.id === input.topicId
      );
    }),
});
```

## 📊 Métricas de Qualidade

### Coesão de Módulos
- ✅ Alta coesão dentro de domínios
- ✅ Cada arquivo tem responsabilidade única

### Acoplamento
- ✅ Baixo acoplamento entre domínios
- ✅ Dependências explícitas via imports

### Testabilidade
- ✅ Lógica física testável sem React
- ✅ Conteúdo validável via schema

### Manutenibilidade
- ✅ Estrutura previsível
- ✅ Padrões consistentes
- ✅ Documentação inline

## 🔍 Troubleshooting

### Erro: "Cannot find module '@/shared/types'"

**Solução:** Verificar `tsconfig.json`:

```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./client/src/*"],
      "@/shared/*": ["./shared/*"]
    }
  }
}
```

### Erro: "Type 'X' is not assignable to type 'ContentBlock'"

**Solução:** Verificar se o tipo do bloco está definido em `shared/types/domain.ts` e exportado em `shared/types/index.ts`.

### Conteúdo não renderiza

**Solução:** Verificar se o renderizador do bloco existe em `shared/components/content-renderer/blocks/`.

## 📚 Referências

- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [React Best Practices](https://react.dev/)
- [Domain-Driven Design](https://martinfowler.com/bliki/DomainDrivenDesign.html)
- [Separation of Concerns](https://en.wikipedia.org/wiki/Separation_of_concerns)

---

**Última atualização:** 2026-02-11  
**Versão da arquitetura:** 1.0.0
