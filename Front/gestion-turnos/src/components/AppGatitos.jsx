import React from 'react';

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact';
// const ENDPOINT_TO_USE = `https://cataas.com/cat/says/${firstWord}?fontSize=50&fontColor=red&json=true`;

const AppGatitos = () => {
  const [fact, setFact] = useState();

  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then((res) => res.json())
      .then((data) => {
        setFact(data.fact);
      });
  }, []);

  return (
    <div>
      <h1>App de gatitos</h1>
      {fact && <p>{fact}</p>}
    </div>
  );
};

export default AppGatitos;
