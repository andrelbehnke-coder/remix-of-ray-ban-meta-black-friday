

## Plano: Corrigir Bug do Blend Text no Mobile

### **Diagnóstico Confirmado**

O `mix-blend-mode: difference` não está funcionando corretamente nos textos "Ray-Ban | Meta" e "MEET THE NEW AI GLASSES" no mobile porque:

1. A propriedade `isolation: 'isolate'` na section cria um contexto de empilhamento separado
2. O div de Main Content não tem z-index adequado
3. A ordem de pintura no mobile afeta como o mix-blend-mode interage com o vídeo de fundo

---

### **Solução Proposta**

**Arquivo:** `src/components/HeroSection.tsx`

#### Mudança 1: Remover `isolation: isolate` e ajustar z-index

```tsx
// ANTES (linha 36):
<section className="relative min-h-0 sm:min-h-screen aspect-[9/16] sm:aspect-auto overflow-hidden bg-[#E8E4DD]" style={{ isolation: 'isolate' }}>

// DEPOIS:
<section className="relative min-h-0 sm:min-h-screen aspect-[9/16] sm:aspect-auto overflow-hidden bg-[#E8E4DD]">
```

#### Mudança 2: Adicionar z-index ao vídeo de fundo

```tsx
// ANTES (linha 45):
className="absolute inset-0 w-full h-full object-cover"

// DEPOIS:
className="absolute inset-0 w-full h-full object-cover z-0"
```

#### Mudança 3: Ajustar z-index do Main Content

```tsx
// ANTES (linha 64):
<div className="relative flex flex-col items-center justify-start h-full px-4 pt-24 sm:pt-32 pb-20 sm:pb-0 sm:min-h-screen">

// DEPOIS:
<div className="relative z-10 flex flex-col items-center justify-start h-full px-4 pt-24 sm:pt-32 pb-20 sm:pb-0 sm:min-h-screen">
```

#### Mudança 4: Ajustar z-index do Bottom CTA

```tsx
// ANTES (linha 85):
<div className="absolute bottom-4 sm:bottom-12 left-0 right-0 flex flex-col items-center gap-2 sm:gap-3 px-4 pb-safe">

// DEPOIS:
<div className="absolute bottom-4 sm:bottom-12 left-0 right-0 z-10 flex flex-col items-center gap-2 sm:gap-3 px-4 pb-safe">
```

---

### **Mudança no CSS (Opcional - Se necessário)**

**Arquivo:** `src/index.css`

Adicionar suporte melhorado para mobile:

```css
@layer utilities {
  .blend-text {
    mix-blend-mode: difference;
    color: white;
    filter: contrast(1.3) brightness(1.1);
    transform: translateZ(0);
    will-change: mix-blend-mode;
    -webkit-font-smoothing: antialiased;
    backface-visibility: hidden;
  }
}
```

---

### **Hierarquia de Z-Index Final**

```
┌─────────────────────────────────────────────┐
│  z-50  Header (BUY NOW button)              │
├─────────────────────────────────────────────┤
│  z-10  Main Content (Ray-Ban | Meta, Title) │
├─────────────────────────────────────────────┤
│  z-10  Bottom CTA (SCROLL TO DISCOVER)      │
├─────────────────────────────────────────────┤
│  z-0   Video Background                     │
└─────────────────────────────────────────────┘
```

---

### **Por que isso resolve?**

1. **Remover `isolation: isolate`**: Permite que o mix-blend-mode interaja com elementos fora do contexto isolado
2. **Z-index explícitos**: Garante ordem de pintura consistente entre desktop e mobile
3. **Z-10 para textos**: Coloca os textos acima do vídeo (z-0) mas permite o blend funcionar
4. **transform: translateZ(0)**: Força aceleração de GPU para renderização consistente

---

### **Resumo das Mudanças**

| Arquivo | Linha | Ação |
|---------|-------|------|
| `HeroSection.tsx` | 36 | Remover `style={{ isolation: 'isolate' }}` |
| `HeroSection.tsx` | 45 | Adicionar `z-0` ao vídeo |
| `HeroSection.tsx` | 64 | Adicionar `z-10` ao Main Content div |
| `HeroSection.tsx` | 85 | Adicionar `z-10` ao Bottom CTA div |
| `index.css` | 132-138 | (Opcional) Melhorar propriedades do blend-text |

---

### **Resultado Esperado**

Após as mudanças, todos os textos com classe `blend-text` terão comportamento consistente em mobile e desktop:
- "Ray-Ban | Meta" - Blend funcionando
- "MEET THE NEW AI GLASSES" - Blend funcionando
- "SCROLL TO DISCOVER" - Continua funcionando
- Botão play/pause - Blend funcionando

