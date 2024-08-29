// Validação de preenchimento
function acessar() {
    let loginEmail = document.getElementById('loginEmail').value;
    let loginSenha = document.getElementById('loginSenha').value;
 
 
    if (!loginEmail || !loginSenha) {
        alert('Favor preencher todos os campos');
    } else {
        alert('Campos preenchidos com sucesso');
 
        window.location.href = 'cadastro.html';
    }
}
// Variável para armazenar os dados dos usuários
const dadosLista = [];
 
// Função para validar e-mail
function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
 
// Função para validar CPF (simples validação, pode ser melhorada)
function validarCPF(cpf) {
    // Aqui está uma validação muito básica; considere usar uma biblioteca para validação mais robusta
    const regex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    return regex.test(cpf);
}
 
// Função para limpar o formulário
function limparFormulario() {
    document.getElementById('nomeUser').value = "";
    document.getElementById('emailUser').value = "";
    document.getElementById('cpfUser').value = "";
}
 
// Função para salvar usuário
function salvarUser() {
    const nomeUser = document.getElementById('nomeUser').value.trim();
    const emailUser = document.getElementById('emailUser').value.trim();
    const cpfUser = document.getElementById('cpfUser').value.trim();
 
    if (nomeUser && emailUser && cpfUser) {
        if (validarEmail(emailUser) && validarCPF(cpfUser)) {
            dadosLista.push({ nome: nomeUser, email: emailUser, cpf: cpfUser });
            criaLista();  // Atualiza a lista após adicionar o novo usuário
            limparFormulario();
        } else {
            alert("Favor, informar um email e um CPF válidos.");
        }
    } else {
        alert("Favor, informar nome, email e CPF para cadastro.");
    }
}
 
// Função para criar lista de usuários
function criaLista() {
    let tabela = `
        <tr>
            <th>Nome Usuário</th>
            <th>Email</th>
            <th>CPF</th>
            <th>Ações</th>
        </tr>
    `;
 
    dadosLista.forEach((usuario, i) => {
        tabela += `
            <tr>
                <td>${usuario.nome}</td>
                <td>${usuario.email}</td>
                <td>${usuario.cpf}</td>
                <td>
                    <button type='button' onclick='editar(${i})' class='btn btn-warning btn-sm'>Editar</button>
                    <button type='button' onclick='excluir(${i})' class='btn btn-danger btn-sm'>Excluir</button>
                </td>
            </tr>
        `;
    });
 
    document.getElementById('tabela').innerHTML = tabela;
}
 
// Função para editar nomes, emails e CPFs da lista
function editar(i) {
    document.getElementById('nomeUser').value = dadosLista[i].nome;
    document.getElementById('emailUser').value = dadosLista[i].email;
    document.getElementById('cpfUser').value = dadosLista[i].cpf;
    dadosLista.splice(i, 1);
    criaLista();  // Atualiza a lista após a edição
}
 
// Função para excluir nome, email e CPF da lista
function excluir(i) {
    dadosLista.splice(i, 1);
    criaLista();  // Atualiza a lista após a exclusão
}