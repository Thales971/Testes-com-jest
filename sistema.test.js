// Testes unitários do sistema - Atividade 3.1 Jest

const {
  verificarMaioridade,
  calcularIMC,
  formatarNome,
  ehPar,
  celsiusParaFahrenheit,
  adicionarHobby,
  dividir,
  criarAluno,
  aplicarDesconto,
  validarTamanhoSenha
} = require('./sistema');

describe('Sistema de Testes - Atividade 3.1', () => {

  // Teste 1: verificarMaioridade
  test('1. verificarMaioridade: deve retornar true para idade >= 18 e false para idade < 18', () => {
    expect(verificarMaioridade(18)).toBe(true);
    expect(verificarMaioridade(17)).toBe(false);
    expect(verificarMaioridade(25)).toBe(true);
  });

  // Teste 2: calcularIMC
  test('2. calcularIMC: deve calcular IMC corretamente com duas casas decimais', () => {
    expect(calcularIMC(70, 1.75)).toBeCloseTo(22.86, 2);
    expect(calcularIMC(50, 1.60)).toBeCloseTo(19.53, 2);
  });

  // Teste 3: formatarNome
  test('3. formatarNome: deve retornar nome no formato "Sobrenome, Nome"', () => {
    expect(formatarNome('João', 'Silva')).toEqual('Silva, João');
    expect(formatarNome('Maria', 'Santos')).toEqual('Santos, Maria');
  });

  // Teste 4: ehPar
  test('4. ehPar: deve retornar true para números pares e false para ímpares', () => {
    expect(ehPar(4)).toBe(true);
    expect(ehPar(7)).toBe(false);
    expect(ehPar(0)).toBe(true);
  });

  // Teste 5: celsiusParaFahrenheit
  test('5. celsiusParaFahrenheit: deve converter temperatura corretamente', () => {
    expect(celsiusParaFahrenheit(0)).toBeCloseTo(32, 2);
    expect(celsiusParaFahrenheit(100)).toBeCloseTo(212, 2);
    expect(celsiusParaFahrenheit(-40)).toBeCloseTo(-40, 2);
  });

  // Teste 6: adicionarHobby
  test('6. adicionarHobby: deve retornar novo array com tamanho incrementado contendo o novo hobby', () => {
    const hobbiesIniciais = ['Futebol', 'Videogame'];
    const resultado = adicionarHobby(hobbiesIniciais, 'Leitura');
    expect(resultado).toHaveLength(3);
    expect(resultado).toEqual(['Futebol', 'Videogame', 'Leitura']);
  });

  // Teste 7: dividir
  test('7. dividir: deve dividir normalmente e lançar erro ao dividir por zero', () => {
    expect(dividir(10, 2)).toBe(5);
    expect(() => dividir(10, 0)).toThrow('Divisão por zero não permitida');
  });

  // Teste 8: criarAluno
  test('8. criarAluno: deve retornar o objeto do aluno com as propriedades corretas', () => {
    const alunoEsperado = { nome: 'Mariana', curso: 'Desenvolvimento de Sistemas', ativo: true };
    expect(criarAluno('Mariana', 'Desenvolvimento de Sistemas')).toEqual(alunoEsperado);
  });

  // Teste 9: aplicarDesconto
  test('9. aplicarDesconto: deve calcular desconto corretamente', () => {
    expect(aplicarDesconto(100, 10)).toBe(90);
    expect(aplicarDesconto(100, 0)).toBe(100);
    expect(aplicarDesconto(200, 25)).toBe(150);
  });

  // Teste 10: validarTamanhoSenha
  test('10. validarTamanhoSenha: deve reprovar senha com menos de 8 caracteres e aprovar com 8 ou mais', () => {
    expect(validarTamanhoSenha('12345')).toBe(false);
    expect(validarTamanhoSenha('senha123')).toBe(true);
    expect(validarTamanhoSenha('senhaSuperSegura2026')).toBe(true);
  });

});