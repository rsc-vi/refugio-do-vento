//idNome
//idComments
function salvar(){
    let nome = document.getElementById("idNome").value;
    let comentarios = document.getElementById("idComments").value;

    localStorage.setItem("usuario", nome)
    localStorage.setItem("comentario", comentarios);
    console.log(localStorage.getItem("usuario"));
    console.log(localStorage.getItem("comentario"));
    
    window.location.href="sucesso.html";
}