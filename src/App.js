import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [var1, setVar1] = useState("");
  const [foto, setFoto] = useState("foto1");

  const cuandoCambia = function(evento){
    setVar1(evento.target.value)  
  };
  const cuandoCambiaSelect = function(evento){
    setFoto(evento.target.value)  
  };

  return (
    <div className="App">
        <div className='container-fluid'>
          <h1>Primera App con React</h1>
          <h2>Evalúa una foto y coméntala</h2>
          
          <div className='row'>
            <div className='col-md-4'>
              <label>Selecciona una foto</label><br/>
              <select onChange={cuandoCambiaSelect}>
                <option value="foto1">Uno</option>
                <option value="foto2">Dos</option>
                <option value="foto3">Tres</option>
              </select>

              <div className='extrellasContenedor'>
                <p>Evalúala foto</p>
                <form>
                  <p class="clasificacion">
                    <input id="radio1" type="radio" name="estrellas" value="5"/>
                    <label for="radio1">★</label>
                    <input id="radio2" type="radio" name="estrellas" value="4"/>
                    <label for="radio2">★</label>
                    <input id="radio3" type="radio" name="estrellas" value="3"/>
                    <label for="radio3">★</label>
                    <input id="radio4" type="radio" name="estrellas" value="2"/>
                    <label for="radio4">★</label>
                    <input id="radio5" type="radio" name="estrellas" value="1"/>
                    <label for="radio5">★</label>
                  </p>
                </form>
              </div>
              <div className='comentario'>
                <label>Comenta la foto</label><br/>
                <textarea onChange={cuandoCambia}></textarea>
              </div>
            </div>
            <div className='col-md-8'>
              
              <p className='texto'>{var1}</p>
              <div className='muestraFoto'>
                <img src={"../img/"+foto+".jpg"} />
              </div>
            </div>
          </div>

        </div>
     
    </div>
  );
}

export default App;
