// Configurar a conexão com o Firebase
var firebaseConfig = {
    apiKey: "AIzaSyAtlBJ9swPaqbI6usjNGkiG1EEgrNyhX5M",
    authDomain: "database-beb64.firebaseapp.com",
    projectId: "database-beb64",
    storageBucket: "database-beb64.appspot.com",
    messagingSenderId: "586676211549",
    appId: "1:586676211549:web:df5150c251f6c0d60422b4"
  };
  firebase.initializeApp(firebaseConfig);
  
  // Referenciar a coleção do Firestore que será usada
  var db = firebase.firestore().collection("dadosFormulario");
  
  // Capturar o formulário quando for enviado
  document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Impedir o comportamento padrão do envio
  
    // Obter os valores dos campos do formulário
    var nome = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var assunto = document.getElementById("assunto").value;
  
    // Adicionar os dados ao Firestore
    db.add({
      name: nome,
      email: email,
      assunto: assunto
    }).then(function exibirMensagemSucesso() {
      var notifyOK = document.getElementById("notifyOK");
      notifyOK.style.display = "block";
      document.getElementById("myForm").reset(); // Limpar o formulário
      setTimeout (function() {
        notifyOK.style.display = "none";
      }, 3000);
        });/*.then(function(docRef) {
          alert("Dados enviados com sucesso!"); // Exibir uma mensagem de sucesso
          document.getElementById("myForm").reset(); // Limpar o formulário
          }).catch(function(error) {
          console.error("Erro ao enviar dados:", error); // Exibir mensagem de erro no console
          });*/   
  });
