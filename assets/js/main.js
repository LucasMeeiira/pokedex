
const buttonLeft = document.querySelector('.esquerda');
const buttonRight = document.querySelector('.direita');
const pokemonElement = document.querySelector('.tela');

const newHtml = (pokemon)=>{
    pokemonElement.innerHTML = `  
    <div class="tela_preta">
        <img src=${pokemon.img} alt=${pokemon.name} class="tela_preta-img">

        <div class="tela_preta-conteiner">
            <h2 class="tela_preta-texto">${pokemon.name}</h2>
        </div> 
     </div>
    
    `; 
}

buttonRight.addEventListener('click',() =>{
    if(idNumberControler < 150){
        idNumberControler++;
        if(idNumberControler > 150){
            idNumberControler = 150;
        } 
    }
    getPokemon();   
})
 
buttonLeft.addEventListener('click', () =>{ 
    if(idNumberControler > 1){
        idNumberControler--; 
        if(idNumberControler < 1){
            idNumberControler = 1;
        }
    } 
  getPokemon();
})


const idNumber = () => Math.floor(Math.random() * 150);  
let idNumberControler = idNumber();

const url = `https://pokeapi.co/api/v2/pokemon/`; 

const  getPokemon = () => fetch(`${url}${idNumberControler}`)
.then((response) => response.json()) 
    .then((dataJson) => dataJson)
    .then((pokemon) => {
        const newPokemon = {
            name: pokemon.name,
            img: pokemon.sprites.other.dream_world.front_default,
        } 
        newHtml(newPokemon);
        
    }) 
.catch((error)=>console.error(error))

getPokemon(); 

