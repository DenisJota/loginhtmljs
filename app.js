const formElement = document.querySelector('.form-login')
const btnRegister = document.querySelector('.form-login button')

formElement.addEventListener('submit', async (event) => {
    event.preventDefault()

    const formData = new FormData(formElement)

    if (formData.get('password') !== formData.get('repeatPassword')) {
        alert("Oops! Senhas não conferem")
        return;
    }

    const newUser = {
        email: formData.get('email'),
        name: formData.get('name'),
        password: formData.get('password'),
        role: 'admin',
        avatar: formData.get('avatar')
    }

    const values = Object.values(newUser)
    const containsEmptyValues = values.includes("")

    if (containsEmptyValues) {
        alert("Oops! Todos os campos devem está prenchidos")
        return
    }

    // Usar o fetch para cadastrar o usuário
    // Fake api

    btnRegister.innerHTML = "Carregando..."
    btnRegister.setAttribute("disabled", true)
    await new Promise((resolve) => setTimeout(resolve, 4000))
    btnRegister.innerHTML = "Efetuar Cadastro"
    btnRegister.removeAttribute("disabled")
