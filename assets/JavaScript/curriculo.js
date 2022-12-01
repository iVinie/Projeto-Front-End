let btn = document.querySelector('#verSenha')
let btnConfirm = document.querySelector('#verConfirmSenha')

let nome = document.querySelector('#nome')
let labelNome = document.querySelector('#labelNome')
let validNome = false

let usuario = document.querySelector('#usuario')
let labelUsuario = document.querySelector('#labelUsuario')
let validUsuario = false

let cpf = document.querySelector('#campo_cpf')
let labelCpf = document.querySelector('#labelCpf')
let validCpf = false

let email = document.querySelector('#email')
let labelEmail = document.querySelector('#labelemail')
let validEmail = false

let telefone = document.querySelector('#telefone')
let labelTelefone = document.querySelector('#labelTelefone')
let validTelefone = false

let senha = document.querySelector('#senha')
let labelSenha = document.querySelector('#labelSenha')
let validSenha = false

let confirmSenha = document.querySelector('#confirmSenha')
let labelConfirmSenha = document.querySelector('#labelConfirmSenha')
let validConfirmSenha = false

let msgError = document.querySelector('#erro')
let msgSuccess = document.querySelector('#acerto')

let checkBox = document.querySelector('.checkBox')

nome.addEventListener('keyup', () => {
    if (nome.value.length <= 4) {
        labelNome.setAttribute('style', 'color: red')
        labelNome.innerHTML = 'Digite um Nome de Usuário com Minimo de 5 caracteres'
        nome.setAttribute('style', 'border-color: red')
        validNome = false
    } else {
        labelNome.setAttribute('style', 'color: green')
        labelNome.innerHTML = 'Usuário'
        nome.setAttribute('style', 'border-color: green')
        validNome = true
    }
})

usuario.addEventListener('keyup', () => {
    if (usuario.value.length <= 10) {
        labelUsuario.setAttribute('style', 'color: red')
        labelUsuario.innerHTML = 'Insira seu Nome Completo com no minimo 10 caracteres'
        usuario.setAttribute('style', 'border-color: red')
        validUsuario = false
    } else if (usuario.value.length > 10) {
        labelUsuario.setAttribute('style', 'color: green')
        labelUsuario.innerHTML = 'Nome Completo*'
        usuario.setAttribute('style', 'border-color: green')
        validUsuario = true
    }
})




telefone.addEventListener('keyup', () => {
    if (telefone.value.length <= 10) {
        labelTelefone.setAttribute('style', 'color: red')
        labelTelefone.innerHTML = 'Escreva um Numero de telefone Válido (xx) 9xxxx-xxxx '
        telefone.setAttribute('style', 'border-color: red')
        validTelefone = false
    }
    else if (telefone.value.length >= 12) {
        labelTelefone.setAttribute('style', 'color: red')
        labelTelefone.innerHTML = 'Escreva um Numero de telefone Válido (xx) 9xxxx-xxxx '
        telefone.setAttribute('style', 'border-color: red')
        validTelefone = false
    }
    else {
        labelTelefone.setAttribute('style', 'color: green')
        labelTelefone.innerHTML = 'Numero Valido'
        telefone.setAttribute('style', 'border-color: green')
        validTelefone = true
    }
})

senha.addEventListener('keyup', () => {
    if (senha.value.length <= 2) {
        labelSenha.setAttribute('style', 'color: red')
        labelSenha.innerHTML = 'Senha *Insira no minimo 3 caracteres'
        senha.setAttribute('style', 'border-color: red')
        validSenha = false
    } else {
        labelSenha.setAttribute('style', 'color: green')
        labelSenha.innerHTML = 'Senha'
        senha.setAttribute('style', 'border-color: green')
        validSenha = true
    }
})

confirmSenha.addEventListener('keyup', () => {
    if (senha.value != confirmSenha.value) {
        labelConfirmSenha.setAttribute('style', 'color: red')
        labelConfirmSenha.innerHTML = 'Confirmar Senha *As senhas não conferem'
        confirmSenha.setAttribute('style', 'border-color: red')
        validConfirmSenha = false
    } else {
        labelConfirmSenha.setAttribute('style', 'color: green')
        labelConfirmSenha.innerHTML = 'Confirmar Senha'
        confirmSenha.setAttribute('style', 'border-color: green')
        validConfirmSenha = true
    }
})

let value_cpf = document.querySelector('#campo_cpf');

value_cpf.addEventListener("keydown", function (e) {
    if (e.key > "a" && e.key < "z") {
        e.preventDefault();
    }
});
value_cpf.addEventListener("blur", function (e) {
    //Remove tudo o que não é dígito
    let validar_cpf = this.value.replace(/\D/g, "");

    // verificação da quantidade números
    if (validar_cpf.length == 11) {

        // verificação de CPF valido
        var Soma;
        var Resto;

        Soma = 0;
        for (i = 1; i <= 9; i++) Soma = Soma + parseInt(validar_cpf.substring(i - 1, i)) * (11 - i);
        Resto = (Soma * 10) % 11;

        if ((Resto == 10) || (Resto == 11)) Resto = 0;
        if (Resto != parseInt(validar_cpf.substring(9, 10))) return alert("CPF Inválido!");;

        Soma = 0;
        for (i = 1; i <= 10; i++) Soma = Soma + parseInt(validar_cpf.substring(i - 1, i)) * (12 - i);
        Resto = (Soma * 10) % 11;

        if ((Resto == 10) || (Resto == 11)) Resto = 0;
        if (Resto != parseInt(validar_cpf.substring(10, 11))) return alert("CPF Inválido!");;

        //formatação final
        cpf_final = validar_cpf.replace(/(\d{3})(\d)/, "$1.$2");
        cpf_final = cpf_final.replace(/(\d{3})(\d)/, "$1.$2");
        cpf_final = cpf_final.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
        document.getElementById('campo_cpf').value = cpf_final;
        labelCpf.setAttribute('style', 'color: Green')
        labelCpf.innerHTML = 'CPF Valido !'
        validCpf = true

    } else {
        labelCpf.setAttribute('style', 'color: red')
        labelCpf.innerHTML = 'CPF Invalido !'
        validCpf = false
    }

})



email.addEventListener('keyup', () => {
    if (email.value.length <= 4 || email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        labelEmail.setAttribute('style', 'color: red')
        labelEmail.innerHTML = 'Email invalido!'
        email.setAttribute('style', 'border-color: red')
        validUsuario = false
    } else {
        labelEmail.setAttribute('style', 'color: green')
        labelEmail.innerHTML = 'Email Valido!'
        email.setAttribute('style', 'border-color: green')
        validEmail = true
    }
})


function cadastrar() {

    if (checkBox.checked) {
        if (validNome && validUsuario && validSenha && validConfirmSenha && validCpf && validEmail) {
            let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')

            listaUser.push(
                {
                    nomeCad: nome.value,
                    userCad: usuario.value,
                    senhaCad: senha.value,
                    emailCad: email.value,
                    cpfCad: cpf.value
                }
            )

            localStorage.setItem('listaUser', JSON.stringify(listaUser))


            msgSuccess.setAttribute('style', 'display: block')
            msgSuccess.innerHTML = '<strong>Usuário esta sendo Cadastrado...</strong>'
            msgError.setAttribute('style', 'display: none')
            msgError.innerHTML = ''

            setTimeout(() => {
                window.location.href = 'https://cdpn.io/thicode/debug/ZELzYxV/dXAqBaRyvwJk'
            }, 3000)


        } else {
            msgError.setAttribute('style', 'display: block')
            msgError.innerHTML = '<strong>Algum Campo foi preenchido de Maneira incorreta</strong>'
            msgSuccess.innerHTML = ''
            msgSuccess.setAttribute('style', 'display: none')
        }
    } else {
        alert('Aceite os Termos de contrato')
    }
}

btn.addEventListener('click', () => {
    let inputSenha = document.querySelector('#senha')

    if (inputSenha.getAttribute('type') == 'password') {
        inputSenha.setAttribute('type', 'text')
    } else {
        inputSenha.setAttribute('type', 'password')
    }
})

btnConfirm.addEventListener('click', () => {
    let inputConfirmSenha = document.querySelector('#confirmSenha')

    if (inputConfirmSenha.getAttribute('type') == 'password') {
        inputConfirmSenha.setAttribute('type', 'text')
    } else {
        inputConfirmSenha.setAttribute('type', 'password')
    }
})


