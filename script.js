
        const name= document.getElementById("nombre");
        const size= document.getElementById("estatura");
        const gender= document.getElementById("genero");
        const hair= document.getElementById("pelo");
        const birth= document.getElementById("cumple");
        const picture = document.getElementById("pic");

        const button = document.querySelector(".boton");
        button.addEventListener('click', (e)=>{
            e.preventDefault()
            name.innerHTML = '<em>Loading...</em>'
            size.innerHTML = '<em>Loading...</em>'
            gender.innerHTML = '<em>Loading...</em>'
            hair.innerHTML = '<em>Loading...</em>'
            birth.innerHTML = '<em>Loading...</em>'
            
            const randomNumber = Math.ceil(Math.random() * 83)
            fetch(`https://swapi.dev/api/people/${randomNumber}/`)
                .then(response => response.json())
                .then(character =>{
                
                name.innerHTML = character['name'];
                size.innerHTML = character['height'];
                gender.innerHTML = character['gender'];
                hair.innerHTML = character['hair_color'];
                birth.innerHTML = character['birth_year'];
                })
            fetch(`https://akabab.github.io/starwars-api/api/all.json`)
                .then(response => response.json())
                .then(char =>{
                    picture.src = char[randomNumber]['image'];
                    
                })
        })
