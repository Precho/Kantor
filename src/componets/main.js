import React, {useState, useEffect} from 'react';
import Dane from '../dane.json';

function Main() {

    const [wartosc,setWartosc]=useState("")
    const [dodatki,setDodatki]=useState([]);
    const [selectedValue,setSelectedValue]=useState(0)

useEffect(()=> {
    setDodatki(Dane);
},[])

   const zmiana = (evt)=> {
    
    setSelectedValue(evt.target.value);
    console.log(selectedValue);
    }
    const oblicz = (evt) => {
        evt.preventDefault();
        setWartosc(selectedValue);
       
    }
  return (
    <div className="main">
    <form onSubmit={oblicz}>
        <input type="text"  onChange={zmiana}/>
        <select>
            {
                dodatki.map(waluta => {
                return <option key={waluta.id} value={waluta.cena} selected={waluta.selected === 1 ? "selected" : null} onChange={zmiana}>{waluta.waluta}</option>
                })
            }
            <option value=""></option>
        </select>
        <input type="submit" value="Oblicz"/>
    </form>
    <h3>{wartosc}</h3>
    </div>
  );
}

export default Main;
