import { useEffect } from 'react';
import './style.css';
import client from '../../client';

function Main() {

  useEffect(() => {
    client.get('/path')
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [])

  return (
    <div className="App">
      <header>
        <p>
          Página Principal
        </p>
      </header>
    </div>
  );
}

export default Main;
