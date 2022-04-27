import { useEffect, useState } from "react";

const App = () => {
  const [datos, setDatos] = useState();
  const [isLoading, setIsLoading] = useState(true);

  // Funcion para traer datos de Covalent
  useEffect(() => {
    fetch(
      "https://api.covalenthq.com/v1/pricing/tickers/?quote-currency=USD&format=JSON&key=ckey_e3dc10a3253049ed8f2ac59d12a"
    )
      .then((respuesta) => respuesta.json())
      .then((data) => {
        console.log(data.data.items);
        setIsLoading(false);
        // aca en este punto filter
        const filtro = data.data.items.filter((element) => element.rank <= 10);
        setDatos(filtro);
      });
  }, []);

  return (
    <>
      <h1>Hola Mundo...</h1>
      {isLoading
        ? "Cargando"
        : datos.map((element, index) => {
            return (
              <>
                {
                  <li key={index}>
                    {element.contract_name}-{element.contract_ticker_symbol}-{index}
                  </li>
                }
              </>
            );
          })}
    </>
  );
};

export default App;
