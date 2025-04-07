const { useState, useEffect } = React;

function Letreiro({ texto, intervalo = 150, delayReinicio = 1000 }) {
  const [exibido, setExibido] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let timer;

    if (index < texto.length) {
      timer = setTimeout(() => {
        setExibido(prev => prev + texto[index]);
        setIndex(prev => prev + 1);
      }, intervalo);
    } else {
      // Espera um pouco e reinicia o texto
      timer = setTimeout(() => {
        setExibido('');
        setIndex(0);
      }, delayReinicio);
    }

    return () => clearTimeout(timer);
  }, [index, texto, intervalo, delayReinicio]);

  return <h1>{exibido}</h1>;
}

const root = ReactDOM.createRoot(document.getElementById('letreiro'));
root.render(<Letreiro texto="Venha estudar na Fatec" intervalo={150} delayReinicio={1000}/>);