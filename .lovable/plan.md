

# Corrigir Erro no GitHub Actions

## Problema Identificado

O arquivo `.github/workflows/main.yml` está vazio, causando o erro:
```
No event triggers defined in `on`
```

O GitHub tenta processar todos os arquivos `.yml` na pasta `workflows`, e como esse arquivo está vazio, ele falha.

## Solução

**Deletar o arquivo** `.github/workflows/main.yml` que está vazio e não serve para nada.

O workflow correto já está configurado em `.github/workflows/jekyll-gh-pages.yml`.

## Detalhes Técnicos

```text
Arquivos na pasta .github/workflows/:
├── jekyll-gh-pages.yml  ✅ (workflow correto do Vite)
└── main.yml             ❌ (arquivo vazio causando erro)
```

## Após a Correção

1. O código será sincronizado com o GitHub
2. Apenas o workflow `jekyll-gh-pages.yml` será executado
3. O deploy deve funcionar corretamente

