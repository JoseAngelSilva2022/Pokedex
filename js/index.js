const fetch_pokemon = () => {
    const pkeName = document.getElementById("pkeName");
    let poke_input = pkeName.value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${poke_input}`; //info de Mew
    fetch(url)
      .then((resultado) => {
        // console.log(resultado);
        if(resultado.status !="200"){
            console.log(resultado);
            pokeimagen("#")
        }else{
          return resultado.json();
        }
      })
      .then((data) => {
        console.log(data);
        let poke_img = data.sprites.other.dream_world.front_default;
        console.log(poke_img);
        pokeimagen(poke_img);
      });
  };
  
  //fetch_pokemon();
  
  const pokeimagen = (url) => {
    const pokeImg = document.getElementById("poke_imagen");
    pokeImg.src = url;
  };
  // pokeimagen("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png");
  
  const imprimir = () => {
    const pkeName = document.getElementById("pkeName");
    let poke_input = pkeName.value;
    console.log("Hola Explores " + poke_input);
  };
