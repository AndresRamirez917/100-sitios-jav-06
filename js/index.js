async function getData(){
    const result = await fetch('https://rickandmortyapi.com/api/character');
    const data = await result.json();
    console.log(result)
    data.results.forEach(element => {
        if(element.id <= 3){
            const card = document.createRange().createContextualFragment(`
                
                <div class="card">
                    
                    <img src="${element.image}" alt="">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit consectetur repellat magni praesentium delectus maiores! Aperiam labore iste fugiat ipsum, nostrum natus quae veniam harum velit. Error officiis, vitae perferendis aliquam, ipsa soluta minus adipisci ex distinctio inventore accusamus quasi?</p>
                 </div>
                
                `)
                const services_row = document.querySelector('.services-row')
                services_row.append(card)
        }
    });
}

const btn_submit = document.getElementById('btn-submit')

const validar = (e) => {
    e.preventDefault();
    const nombre = document.getElementById('nombre')
    const email = document.getElementById('email')
    const mensaje = document.getElementById('message')
   
    if(nombre.value == ""){
        alert("Escribe algo en el nombre sonso")
        return false;
    } 

    if(email.value == ""){
        alert("Escribe algo en el email pendejo")
    return false;
    }

    if(mensaje.value == ""){
        alert("Debes de dejar un mensaje pendejo")
        return false;
    }

    if(!email_valido(email.value)){
        alert("El email no es válido chinga tu madre")
        return false;
    }
    nombre.value="";
    email.value="";
    mensaje.value="";
    return true;
}

const email_valido = email => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}


getData()
btn_submit.addEventListener("click", validar);

