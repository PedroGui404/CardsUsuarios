let tagU1 = document.getElementById("card-usuario");

async function fetchUsuarios(quantidade) {
    const url = "https://randomuser.me/api/?results="+quantidade;

    const response = await fetch(url);
    const data = await response.json();
    return data.results;
    }


async function listarUsuarios(lista) {
    document.getElementById('card-inical').remove()
    // const lista = await fetchUsuarios();
    for(let i=0; i<lista.length; i++){
            tagU1.innerHTML += '<div class="container"><img src="'+lista[i].picture.large+'" alt="Foto" class="profile-pic"><div class="info1">Name: '+lista[i].name.first+' ' +lista[i].name.last+'</div><div class="info">Email: '+lista[i].email+'</div><div class="info">Country: '+lista[i].location.country+'</div><div class="info">Gender: '+lista[i].gender+'</div></div>'
    }
        

}
 
// listarUsuarios(await fetchUsuarios(prompt("Digite a Quantidade de Usuários que deseja Gerar:")));

let tagn1 = document.getElementById("botao");
    tagn1.addEventListener("click", async function() {
        let valorInput = document.getElementById("numUsuarios").value
        let usuarios = await fetchUsuarios(valorInput);
        listarUsuarios(usuarios);
  });




