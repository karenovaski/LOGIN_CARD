// Variável para armazenar os dados dos usuários
var dadosLista = [];
 
// Função para salvar usuário
function salvarUser() {
    let nomeUser = document.getElementById('nomeUser').value;
    let emailUser = document.getElementById('emailUser').value;
 
    // Verificação simples para validar o e-mail
    if (nomeUser && emailUser) {
        if (emailUser.includes('@') && emailUser.includes('.')) {
            dadosLista.push({ nome: nomeUser, email: emailUser });
            criaLista();  // Atualiza a lista após adicionar o novo usuário
            document.getElementById('nomeUser').value = "";
            document.getElementById('emailUser').value = "";
        } else {
            alert("Favor, informar um email válido.");
        }
    } else {
        alert("Favor, informar um nome e um email para cadastro.");
    }
}
 
// Função para criar lista de usuários
function criaLista() {
    let tabela = "<tr><th>Nome Usuário</th><th>Email</th><th>Ações</th></tr>";
    for (let i = 0; i < dadosLista.length; i++) {
        tabela += `<tr>
            <td>${dadosLista[i].nome}</td>
            <td>${dadosLista[i].email}</td>
            <td>
                <button type='button' onclick='editar(${i})' class='btn btn-warning btn-sm'>Editar</button>
                <button type='button' onclick='excluir(${i})' class='btn btn-danger btn-sm'>Excluir</button>
            </td>
        </tr>`;
    }
    document.getElementById('tabela').innerHTML = tabela;
}
 
// Função para editar nomes e emails da lista
function editar(i) {
    document.getElementById('nomeUser').value = dadosLista[i].nome;
    document.getElementById('emailUser').value = dadosLista[i].email;
    dadosLista.splice(i, 1);
    criaLista();  // Atualiza a lista após a edição
}
 
// Função para excluir nome e email da lista
function excluir(i) {
    dadosLista.splice(i, 1);
    criaLista();  // Atualiza a lista após a exclusão
}