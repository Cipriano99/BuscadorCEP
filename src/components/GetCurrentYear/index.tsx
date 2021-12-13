export const GetCurrentYear = () => {
  const data = new Date();

  return <footer>{data.getFullYear()} - BuscadorCEP!</footer>;
};
