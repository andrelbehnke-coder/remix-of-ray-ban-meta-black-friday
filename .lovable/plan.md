

## Plano: Corrigir Blend Text no Safari iOS

### **Diagnóstico do Problema**

O Safari iOS tem um bug conhecido onde `mix-blend-mode` não funciona corretamente quando:
1. Há containers intermediários entre o elemento com blend e o fundo
2. O container pai tem `position: relative` ou cria um stacking context
3. A animação CSS com `transform` interfere no blend mode

**Por que o texto inferior funciona?**
- O `<p>` com "Get assistance..." está em um container `absolute` diretamente na section
- Os textos superiores estão dentro de um container `relative` com `pointer-events-none`

---

### **Solução: Reestruturar o Layout**

**Arquivo:** `src/components/HeroSection.tsx`

#### Abordagem: Mover textos para containers absolutos independentes

Em vez de ter os textos dentro de divs relativos, vamos posicioná-los absolutamente diretamente na section, assim como o texto inferior que funciona:

```tsx
{/* Main Content - Posicionamento absoluto direto */}
<div className="absolute top-0 left-0 right-0 pt-24 sm:pt-32 flex flex-col items-center px-4">
  {/* Logos */}
  <div className="flex items-center gap-2 sm:gap-4 mb-4 sm:mb-8">
    <span className="blend-text text-base sm:text-xl md:text-2xl font-bold opacity-0 animate-[heroSlideUp_1s_ease-out_0.3s_forwards]">
      Ray-Ban
    </span>
    <span className="blend-text text-base sm:text-xl md:text-2xl opacity-0 animate-[heroSlideUp_1s_ease-out_0.3s_forwards]">
      |
    </span>
    <span className="blend-text text-base sm:text-xl md:text-2xl font-medium opacity-0 animate-[heroSlideUp_1s_ease-out_0.3s_forwards]">
      ∞ Meta
    </span>
  </div>

  {/* Main Title */}
  <h1 className="blend-text text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-center leading-tight tracking-tight max-w-4xl opacity-0 animate-[heroSlideUp_1.2s_ease-out_0.5s_forwards]">
    MEET THE NEW AI GLASSES
  </h1>
</div>
```

---

### **Mudanças Detalhadas**

#### 1. Alterar CSS do blend-text (remover transform)

**Arquivo:** `src/index.css`

```css
@layer utilities {
  .blend-text {
    mix-blend-mode: difference;
    color: white;
    -webkit-font-smoothing: antialiased;
  }
  
  /* Fallback para navegadores sem suporte */
  @supports not (mix-blend-mode: difference) {
    .blend-text {
      color: white;
      text-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
    }
  }
}
```

**Remover:** `filter`, `transform: translateZ(0)`, `will-change`, `backface-visibility`

Esses properties criam novos stacking contexts que quebram o blend no iOS.

---

#### 2. Reestruturar o HeroSection

**Arquivo:** `src/components/HeroSection.tsx`

**Mudança principal:** Converter o Main Content de `relative` para `absolute`:

```tsx
{/* Antes - linha 64 */}
<div className="relative flex flex-col items-center justify-start h-full px-4 pt-24 sm:pt-32 pb-20 sm:pb-0 sm:min-h-screen pointer-events-none [&>*]:pointer-events-auto">

{/* Depois */}
<div className="absolute top-0 left-0 right-0 pt-24 sm:pt-32 flex flex-col items-center px-4">
```

**Remover span duplicado no h1:**
```tsx
{/* Antes - linha 79 */}
<h1 className="blend-text ...">
  MEET THE <span className="blend-text">NEW</span> AI GLASSES
</h1>

{/* Depois - remover span interno */}
<h1 className="blend-text ...">
  MEET THE NEW AI GLASSES
</h1>
```

**Ajustar animações para usar `forwards` ao invés de `both`:**
```tsx
{/* both pode causar conflitos com blend no iOS */}
animate-[heroSlideUp_1s_ease-out_0.3s_forwards]
```

---

### **Estrutura Final**

```
┌─────────────────────────────────────────────┐
│  <section className="relative">             │
│                                             │
│    <video className="absolute z-0">         │ ← Vídeo de fundo
│                                             │
│    <header className="absolute z-50">       │ ← BUY NOW button
│                                             │
│    <div className="absolute top-0">         │ ← Textos superiores
│      Ray-Ban | Meta                         │   (POSIÇÃO ABSOLUTA)
│      MEET THE NEW AI GLASSES                │
│    </div>                                   │
│                                             │
│    <div className="absolute bottom-4">      │ ← Textos inferiores
│      SCROLL TO DISCOVER                     │   (já funciona)
│      [Play/Pause]                           │
│      Get assistance...                      │
│    </div>                                   │
│                                             │
└─────────────────────────────────────────────┘
```

---

### **Por que isso resolve no iOS?**

1. **Sem containers intermediários**: Os textos estão diretamente posicionados na section
2. **Sem transform**: Remove propriedades que criam stacking contexts
3. **Sem relative aninhado**: Evita novos contextos de empilhamento
4. **Consistência**: Mesma estrutura do texto inferior que já funciona

---

### **Resumo das Mudanças**

| Arquivo | Linha | Ação |
|---------|-------|------|
| `index.css` | 132-140 | Simplificar `.blend-text` removendo transform/filter |
| `HeroSection.tsx` | 64 | Mudar container de `relative` para `absolute top-0` |
| `HeroSection.tsx` | 64 | Remover `pointer-events-none [&>*]:pointer-events-auto` |
| `HeroSection.tsx` | 67-75 | Trocar `both` por `forwards` nas animações |
| `HeroSection.tsx` | 79-80 | Remover `<span>` duplicado dentro do h1 |

---

### **Resultado Esperado**

Após as mudanças, no iPhone:
- ✅ "Ray-Ban | Meta" - Blend funcionando
- ✅ "MEET THE NEW AI GLASSES" - Blend funcionando  
- ✅ "SCROLL TO DISCOVER" - Continua funcionando
- ✅ Botão play/pause - Blend funcionando
- ✅ "Get assistance..." - Continua funcionando

