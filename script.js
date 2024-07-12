let tagU1 = document.getElementById("card-usuario");

async function fetchUsuarios() {
    const url = "https://randomuser.me/api/?results=8";

        const response = await fetch(url);
        const data = await response.json();
        return data.results;
    }


async function listarUsuarios(lista) {

        // const lista = await fetchUsuarios();
        for(let i=0; i<lista.length; i++){
            tagU1.innerHTML += '<div class="container"><img src="'+lista[i].picture.large+'" alt="Foto" class="profile-pic"><div class="info1">Name: '+lista[i].name.first+' ' +lista[i].name.last+'</div><div class="info">Email: '+lista[i].email+'</div><div class="info">Country: '+lista[i].location.country+'</div><div class="info">Gender: '+lista[i].gender+'</div></div>'
    }
        

}

listarUsuarios(await fetchUsuarios());






