export const mostrarResultado = (
  data: { cep: string; localidade: string; logradouro: string } | null
) => {
  if (!data) {
    return alert(`
CEP não encontrado!
Verifique os campos e tente novamente
    `);
  }

  const { cep, localidade, logradouro } = data;

  alert(`
CEP: ${cep}
Cidade: ${localidade}
Logradouro: ${logradouro}
      `);
};
