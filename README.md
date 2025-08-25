<div align="center">
	<h1>📝 Gerenciador de Tarefas Minimalista (< 14KB)</h1>
	<p>
		<strong>Ultra leve, rápido e funcional.</strong><br>
		<em>HTML, CSS e TypeScript puros — sem dependências externas!</em>
	</p>
</div>

---

## 🚀 Funcionalidades

- <strong>Adicionar, remover e concluir tarefas:</strong> Interface simples e intuitiva.
- <strong>Persistência de dados:</strong> Tarefas salvas no <code>localStorage</code> do navegador.
- <strong>Design Limpo e Responsivo:</strong> Adapta-se a desktops e dispositivos móveis.
- <strong>Foco em Acessibilidade:</strong> ARIA e navegação por teclado.
- <strong>Sem Dependências:</strong> Nenhum framework ou biblioteca externa.

---

## ⚡ Por que 14KB é Importante para um Carregamento Rápido?

Manter o tamanho dos recursos críticos (<strong>HTML, CSS e JavaScript</strong>) abaixo de <strong>14KB</strong> é essencial para performance. Isso está relacionado ao funcionamento do protocolo <strong>TCP</strong>.

### 🛣️ Janela de Congestionamento Inicial do TCP

Quando o navegador solicita uma página, o TCP envia uma quantidade inicial de dados chamada <strong>Janela de Congestionamento Inicial (<code>cwnd</code>)</strong>, geralmente <strong>14KB</strong>.

### ⏱️ Impacto no Tempo de Carregamento

1. <strong>Menos Round Trips:</strong> Recursos essenciais abaixo de 14KB chegam na primeira viagem de dados.
2. <strong>Renderização Imediata:</strong> O navegador pode exibir o conteúdo quase instantaneamente.
3. <strong>Menos Latência:</strong> Recursos acima de 14KB exigem mais viagens, aumentando o tempo de carregamento, especialmente em redes lentas.

> <strong>Resumo:</strong> Manter o app abaixo de 14KB garante entrega e renderização na <strong>velocidade máxima</strong>, melhorando a experiência do usuário em qualquer conexão.

---

## 📦 Estrutura do Projeto

```
index.tsx        # Código principal (TypeScript)
index.js         # JavaScript gerado
index.js.map     # Mapa de origem para depuração
index.css        # Estilos
index.html       # Página principal
package.json     # Dependências e scripts
tsconfig.json    # Configuração do TypeScript
```

---

## 🛠️ Processo de Compilação

- Usando <strong>TypeScript</strong>.
- Comando: <code>npx tsc</code> compila <code>.tsx</code> e <code>.ts</code> para <code>.js</code>.
- Resultado: <code>.js</code> e <code>.js.map</code>.

---

## 📏 Como Calcular o Tamanho da Aplicação

O tamanho final para distribuição é a soma dos arquivos <strong>JavaScript</strong>, <strong>CSS</strong> e <strong>HTML</strong> enviados ao cliente.

Exemplo (PowerShell):
```powershell
Get-Item .\index.js, .\index.css, .\index.html | Select-Object Name, Length
```

| Arquivo     | Tamanho (bytes) |
|-------------|-----------------|
| index.js    | 3446            |
| index.css   | 2806            |
| index.html  | 1137            |
| **Total**   | **7390**        |

**Em kilobytes (KB):**
```
7390 bytes ÷ 1024 ≈ 7,21 KB
```

---

## 💡 Dicas

- <strong>Hard refresh:</strong> <kbd>Ctrl</kbd> + <kbd>F5</kbd> para limpar cache.
- <strong>Limite de 14KB:</strong> 14 × 1024 = <strong>14.336 bytes</strong>.

---
## 💡 AINDA DA PRA REDUZIR MAIS?


## 🧩 Otimização de Caracteres e Redução de Tamanho

Para garantir que o aplicativo ficasse o menor possível, foram aplicadas as seguintes técnicas de otimização:

- **Minificação automática:** Utilização de ferramentas como Terser (JavaScript), cssnano (CSS) e html-minifier-terser (HTML) para remover espaços, quebras de linha, comentários e reduzir nomes de variáveis.
- **HTML compacto:** O arquivo HTML foi escrito em uma única linha, sem espaços ou quebras desnecessárias, reduzindo o número de caracteres transmitidos.
- **CSS enxuto:** Estilos foram agrupados e simplificados, eliminando duplicidades e regras não utilizadas.
- **JavaScript otimizado:** Funções e variáveis foram reduzidas ao essencial, removendo código morto e simplificando a lógica.
- **Sem dependências externas:** Nenhum framework ou biblioteca foi incluído, evitando sobrecarga.
- **Recursos inline:** Ícone favicon em SVG foi incluído diretamente na tag `<link>`, evitando arquivos extras.

> Essas práticas garantem que o carregamento inicial seja o mais rápido possível, mantendo o tamanho total dos arquivos muito abaixo do limite de 14KB.

### 📊 Tabela de Tamanhos Antes e Depois da Otimização

| Arquivo         | Original (bytes) | Minificado (bytes) |
|-----------------|------------------|--------------------|
| index.js        | 3446             | 2112               |
| index.css       | 2806             | 2124               |
| index.html      | 1137             | 949                |
| **Total**       | **7390**         | **5185**           |

> Redução total: **2205 bytes** (~30%)

---

<div align="center">
	<sub>Feito com ❤️ para máxima eficiência e velocidade.</sub>
</div>
