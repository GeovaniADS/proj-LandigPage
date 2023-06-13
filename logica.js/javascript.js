//Caputarar o formulário

var form = document.getElementById("myForm");

//Adicionar um evento de envio do forms
form.addEventListener("submit", function(event) {
    event.preventDefault(); //Evita o envio padrão do formulário
})

//Caputurar os valores dos campos de entrada
var name = document.getElementById("name").value;
var email = document.getElementById("email").value;
var assunto = document.getElementById("assunto").value;

//Criar um objeto com os dados do formulário
var formData = {
    name: name,
    email: email,
    assunto: assunto
};

//Armazenar os dados no Firebase
var db =  firebase.firestore();
db.collection("forms").add(formData)
.then(function(docRef) {
    console.log("Dados do formulário armazenados com sucesso! ID do documento:", docRef.id);
    //Limpar o formulário, se necessário
    form.reset();
})
.catch(function(error) {
    console.log("erro ao armazenar oa dados do formulário:", error);
});
