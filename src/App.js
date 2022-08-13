
import './sass/style.scss';

import React from 'react';
import Card from "./components/Card";
import { useState } from 'react';


let fruits =[{name:"MANGUE",price:"10 EUROS"},{name:"ORANGE",price:"10 EUROS"},
{name:"AVOCAT",price:"10 EUROS"},{name:"POMME",price:"10 EUROS"},{name:"BANANE",price:"10 EUROS"},
{name:"SAFU",price:"10 EUROS"},{name:"MANDARINE",price:"10 EUROS"},{name:"PAPAYE",price:"10 EUROS"},
{name:"PASTHEQUE",price:"10 EUROS"}
]




 const App= ()=> {


  const [filterFruits,setFilterFruits] = useState(fruits);



  const displayCards=()=>{
    let displayFruits=[]
    if(filterFruits)
       displayFruits = filterFruits.map(fruit=>{
    return <Card key={fruit.name} name={fruit.name} price={fruit.price}/>
  })
  
  return displayFruits;
  
  }
  
  const filter = (e)=>{
    let myfilterFruits = fruits.filter((fruit)=>{

      return (fruit.name.indexOf(e.target.value.toUpperCase())!==-1)
    })
    
    setFilterFruits([...myfilterFruits])
  
  }

 
  return (
    <div className='container' >
      <h1>
        LISTE DE FRUITS
      </h1>

      <input type="text" placeholder='Rechercher votre fruit' onChange={(e)=>filter(e)}/>

    <div className='container__fruits'>

    {displayCards()}

    </div>
 
    </div>
  );
}

export default App;
