# Gerenciador de Tarefas Minimalista (< 14KB)

Este é um aplicativo de gerenciador de tarefas extremamente leve e eficiente, construído com HTML, CSS e TypeScript puros. O objetivo principal deste projeto é fornecer uma ferramenta funcional de gerenciamento de tarefas, mantendo o tamanho total dos recursos abaixo de 14KB.

## Funcionalidades

- **Adicionar, remover e concluir tarefas:** Gerencie suas tarefas diárias com uma interface simples e intuitiva.
- **Persistência de dados:** As tarefas são salvas no `localStorage` do seu navegador, para que não se percam ao recarregar a página.
- **Design Limpo e Responsivo:** A interface se adapta a diferentes tamanhos de tela, funcionando bem em desktops e dispositivos móveis.
- **Foco em Acessibilidade:** Uso de atributos ARIA e navegação por teclado para garantir que o aplicativo seja utilizável por todos.
- **Sem Dependências:** Construído sem frameworks ou bibliotecas externas para garantir o mínimo de sobrecarga.

---

## Por que 14KB é Importante para um Carregamento Rápido?

Manter o tamanho total dos recursos críticos (HTML, CSS e JavaScript) abaixo de 14KB é uma estratégia de otimização de performance fundamental, especialmente para o carregamento inicial da página. A razão para isso está relacionada a como a internet funciona, especificamente o protocolo TCP.

### A Janela de Congestionamento Inicial do TCP

Quando seu navegador solicita uma página da web, ele estabelece uma conexão com o servidor usando o protocolo TCP. Para evitar sobrecarregar a rede, o TCP começa enviando uma pequena quantidade de dados e aguarda a confirmação de que foram recebidos antes de enviar mais.

Essa quantidade inicial de dados é chamada de **Janela de Congestionamento Inicial (Initial Congestion Window - `cwnd`)** e, na maioria dos sistemas modernos, é de aproximadamente **14KB**.

### O Impacto no Tempo de Carregamento

1.  **Menos Viagens de Ida e Volta (Round Trips):** Se todos os recursos essenciais para renderizar a primeira visualização da sua página (o "conteúdo acima da dobra") couberem nesses 14KB, o navegador pode receber tudo o que precisa na primeira viagem de ida e volta de dados entre ele e o servidor.

2.  **Renderização Imediata:** Assim que o navegador recebe esses dados, ele pode começar a analisar o HTML, aplicar o CSS e executar o JavaScript para renderizar a página. O usuário vê o conteúdo quase instantaneamente.

3.  **Evitando o Atraso:** Se os recursos excederem 14KB, o navegador precisa esperar por viagens de ida e volta adicionais para baixar o restante dos dados antes de poder renderizar a página. Cada viagem de ida e volta adiciona latência, que é o tempo que leva para os dados viajarem pela rede. Em redes móveis ou lentas, essa latência pode ser significativa, atrasando visivelmente o carregamento da página.

Em resumo, ao manter nosso aplicativo abaixo do limite de 14KB, garantimos que ele possa ser entregue e renderizado na **velocidade máxima que a rede permite**, proporcionando uma experiência de usuário superior, especialmente em conexões de internet mais lentas ou em dispositivos com recursos limitados. Isso se traduz em menor taxa de rejeição, maior engajamento e usuários mais satisfeitos.



14 KB tem 14.336 bytes (14 × 1024).

hard refresh (Ctrl+F5). limpar cache

index.tsx:  o arquivo principal do aplicativo 
index.js e index.js.map: Arquivos JavaScript gerados após a compilação do TypeScript.
index.css: Estilos do aplicativo.
index.html: Página principal do aplicativo.
package.json: Gerencia dependências e scripts do projeto.
tsconfig.json: Configurações do compilador TypeScript.

Processo de Compilação
Usando TypeScript. O comando npx tsc compila arquivos .tsx e .ts para .js, conforme definido no tsconfig.json. O resultado são arquivos .js e .js.map (mapas de origem para depuração).

Como calcular o tamanho da aplicação
O tamanho final da aplicação para distribuição geralmente é o tamanho dos arquivos JavaScript, CSS e HTML que serão enviados ao cliente.
Para calcular o tamanho, some os tamanhos dos arquivos relevantes (por exemplo, index.js, index.css, index.html).
Get-Item .\index.js, .\index.css, .\index.html | Select-Object Name, Length

index.js: 3446 bytes
index.css: 2806 bytes
index.html: 1137 bytes
Total: 3446 + 2806 + 1137 = 7390 bytes

 kilobytes (KB):
7390 bytes ÷ 1024 ≈ 7,21 KB
