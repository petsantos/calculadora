function cadastraAluno() {
    const nome = document.getElementById('nome').value;
    const ra = document.getElementById('ra').value;
    
    const resultado = `O nome do aluno cadastrado é ${nome}, e o RA ${ra} `
    console.log(resultado)
    document.getElementById("resultado").innerHTML = resultado
}
