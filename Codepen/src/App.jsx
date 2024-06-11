import { useEffect, useState } from 'react';

const App = () => {
  const [html, setHtml] = useState('');
  const [css, setCss] = useState('');
  const [js, setJs] = useState('');
  const [codePenCode, setCodePenCode] = useState('');
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setCodePenCode(`
      <html>
      <style>
      ${css}
      </style>
      <script>
      ${js}
      </script>
      <body>
      ${html}
      </body>
      </html>
    `);
    }, 200);
    return () => clearInterval(timeOut);
  }, [html, css, js]);
  return (
    <div className="wrapper">
      <div className="header"></div>
      <div className="input">
        <textarea
          value={html}
          placeholder="Html"
          onChange={(e) => {
            setHtml(e.target.value);
          }}
        ></textarea>
        <textarea
          value={css}
          placeholder="Css"
          onChange={(e) => {
            setCss(e.target.value);
          }}
        ></textarea>
        <textarea
          value={js}
          placeholder="Js"
          onChange={(e) => {
            setJs(e.target.value);
          }}
        ></textarea>
      </div>
      <div className="output">
        <iframe
          srcDoc={codePenCode}
          sandbox="allow-scripts"
          width="100%"
          height="100%"
          title="output"
        ></iframe>
      </div>
    </div>
  );
};
export default App;
