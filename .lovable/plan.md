
# Corrigir Deploy para GitHub Pages

## Problema Identificado

O workflow atual (`jekyll-gh-pages.yml`) está configurado para Jekyll, mas seu projeto usa **Vite + React**. Isso faz o build falhar porque:
- Tenta usar `jekyll-build-pages` ao invés de `npm run build`
- Não instala as dependências do Node.js
- Não compila o TypeScript/React

## O Que Vou Fazer

### 1. Substituir o Workflow Jekyll por Workflow Vite

**Arquivo:** `.github/workflows/jekyll-gh-pages.yml`

Vou trocar todo o conteúdo para:
- Configurar Node.js 20
- Instalar dependências com `npm ci`
- Executar `npm run build` (gera a pasta `dist`)
- Fazer deploy da pasta `dist` para GitHub Pages

### 2. Configurar Base Path no Vite

**Arquivo:** `vite.config.ts`

Adicionar a configuração `base` para que os assets (CSS, JS, imagens) carreguem corretamente no GitHub Pages.

**Nota:** Você precisará me informar o nome do seu repositório no GitHub para configurar corretamente (ex: `/meu-repositorio/`)

## Detalhes Técnicos

### Novo Workflow (Resumo)

```text
Trigger: push na branch "main"
    │
    ▼
┌─────────────────────────────────────┐
│  1. Checkout do código              │
│  2. Setup Node.js 20                │
│  3. npm ci (instala dependências)   │
│  4. npm run build (gera dist/)      │
│  5. Upload artifact (pasta dist)    │
│  6. Deploy para GitHub Pages        │
└─────────────────────────────────────┘
```

### Alteração no vite.config.ts

```text
Antes:  Sem configuração de base
Depois: base: "/nome-do-repositorio/"
```

## Após Implementação

1. O código será sincronizado automaticamente com GitHub
2. O workflow executará o build correto
3. Seu site estará em: `https://[seu-usuario].github.io/[nome-do-repo]/`

## Pergunta Antes de Prosseguir

**Qual é o nome exato do seu repositório no GitHub?** 
(Preciso disso para configurar o caminho base corretamente)
