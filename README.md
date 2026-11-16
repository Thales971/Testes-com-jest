# 📚 Atividade 3.1 - Exercícios Jest (Parte 1)

## 🎯 Objetivo
Configurar um ambiente profissional de desenvolvimento e testes no VSCode utilizando Node.js e Jest, organizar a estrutura de projetos de software com scripts automatizados no `package.json`, e escrever suítes de testes unitários para 10 funções lógicas de negócio utilizando os principais matchers do framework (`toBe`, `toBeCloseTo`, `toEqual` e `toThrow`).

## 🛠️ Tecnologias Utilizadas

- **Node.js** - Ambiente de execução JavaScript
- **Jest** - Framework de testes criado pelo Facebook/Meta
- **VS Code** - Editor de código

## 📁 Estrutura do Projeto

```
atividade-jest/
├── .gitignore          # Arquivo que diz ao Git quais arquivos NÃO subir
├── package.json        # Manifesto do Node.js com scripts de teste
├── sistema.js          # Arquivo de produção com 10 funções de negócio
├── sistema.test.js     # Arquivo de testes unitários com 10 testes
└── README.md           # Esta arquivo (documentação da atividade)
```

## 🚀 Como Rodar os Testes

Siga estes passos no terminal do VS Code:

```bash
# 1. Entrar na pasta da atividade
cd c:\\Users\\alunods\\Desktop\\Testes-jest\\atividade-jest

# 2. Inicializar o projeto Node.js (se ainda não tiver)
npm init -y

# 3. Instalar o Jest como dependência de desenvolvimento
npm install --save-dev jest

# 4. Executar os testes
npm test
```

### � Expected Result (Resultado Esperado)

Ao rodar `npm test`, você deve ver no terminal:

```
PASS ./sistema.test.js
  Sistema de Testes - Atividade 3.1
    √ 1. verificarMaioridade: ...
    √ 2. calcularIMC: ...
    √ 3. formatarNome: ...
    √ 4. ehPar: ...
    √ 5. celsiusParaFahrenheit: ...
    √ 6. adicionarHobby: ...
    √ 7. dividir: ...
    √ 8. criarAluno: ...
    √ 9. aplicarDesconto: ...
    √ 10. validarTamanhoSenha: ...

Test Suites: 1 passed, 1 total
Tests:       10 passed, 10 total
Snapshots:   0 total
Time:        < 1.0s 🟩
```

## 📋 Funcções Implementadas (10)

| # | Função | Matcher Utilizado | Descrição |
|---|--------|-------------------|-----------|
| 1 | `verificarMaioridade(idade)` | `toBe` | Verifica se idade >= 18 |
| 2 | `calcularIMC(peso, altura)` | `toBeCloseTo` | Calcula IMC com precisão decimal |
| 3 | `formatarNome(nome, sobrenome)` | `toEqual` | Formata nome no padrão "Sobrenome, Nome" |
| 4 | `ehPar(numero)` | `toBe` | Verifica se número é par |
| 5 | `celsiusParaFahrenheit(c)` | `toBeCloseTo` | Converte graus Celsius para Fahrenheit |
| 6 | `adicionarHobby(lista, hobby)` | `toEqual` | Adiciona hobby em lista imutável |
| 7 | `dividir(a, b)` | `toBe` + `toThrow` | Divide números, lança erro em divisão por zero |
| 8 | `criarAluno(nome, curso)` | `toEqual` | Cria objeto aluno com propriedades |
| 9 | `aplicarDesconto(preco, porcentagem)` | `toBe` | Calcula desconto promocional |
| 10 | `validarTamanhoSenha(senha)` | `toBe` | Valida se senha tem 8 ou mais caracteres |

## 🎯 Matchers Utilizados

| Matcher | Para Que Serve | Exemplos |
|---------|----------------|----------|
| **`.toBe(valor)`** | Tipos primitivos (`number`, `string`, `boolean`) | `expect(ehPar(4)).toBe(true)` |
| **`.toBeCloseTo(valor, casas)`** | Números de ponto flutuante (decimal) | `expect(calcularIMC(70, 1.75)).toBeCloseTo(22.86, 2)` |
| **`.toEqual(objetoOuArray)`** | Estruturas complexas (`Objects` e `Arrays`) | `expect(criarAluno('Mariana', 'Dev')).toEqual({ nome: 'Mariana', curso: 'Dev', ativo: true })` |
| **`.toThrow(mensagem)`** | Captura de erros e exceções | `expect(() => dividir(10, 0)).toThrow('Divisão por zero não permitida')` |

## 📦 Entrega da Atividade

Para submeter no Google Classroom:

1. ✅ **Capture um print** nítido do terminal mostrando o `npm test` executado com os **10 testes aprovados (PASS)** em verde
2. ✅ **Salve os arquivos** `sistema.js` e `sistema.test.js` no seu repositório do GitHub (ou compacte em pasta `.zip`)
3. ✅ **Submeta o print** e o link do repositório/arquivos no Google Classroom da disciplina

### Rubrica de Avaliação

| Critério | Atende Plenamente (3 pts) |
|----------|---------------------------|
| **Setup e Configuração do Ambiente Jest** | Configura perfeitamente o Node.js, instala o Jest como `--save-dev` e define o script `"test": "jest"` no `package.json`. |
| **Precisão no Uso dos Matchers do Jest** | Aplica corretamente os matchers adequados para cada tipo de dado (`toBe` para primitivos, `toBeCloseTo` para decimais, `toEqual` para arrays/objetos e `toThrow` com closure). |
| **Cobertura Completa das 10 Funções** | Codifica com êxito os 10 testes solicitados cobrindo casos felizes e tratamento de erros com 100% PASS. |

## 💡 Dicas Importantes

- **Sempre crie um `.gitignore`** no início do projeto para evitar que `node_modules/` e `package-lock.json` subam para o GitHub (pesam milhões de bytes!)
- **Os matchers têm funções específicas**: use `toBe` para comparar valores primitivos, `toEqual` para comparar objetos/arrays profundamente, `toBeCloseTo` para números decimais (compreende imprecisão de computação) e `toThrow` para testar erros
- **O tempo de execução deve ser < 1.0s** - o Jest é extremamente rápido!
- **Não apague o `.gitignore`** - ele é essencial para manter o repositório limpo

---

Desenvolvido com ❤️ para a atividade de Testes Automatizados com Jest.