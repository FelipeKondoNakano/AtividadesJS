document.addEventListener("DOMContentLoaded", function () {
    const radioProfessor = document.getElementById("professor");
    const radioAluno = document.getElementById("aluno");

    const campoProfessor = document.querySelector(".campo_dados_professor");
    const campoAluno = document.querySelector(".campo_dados_aluno");

    function atualizarVisibilidade() {
        campoProfessor.style.display = radioProfessor.checked ? "block" : "none";
        campoAluno.style.display = radioAluno.checked ? "block" : "none";
    }

    radioProfessor.addEventListener("change", atualizarVisibilidade);
    radioAluno.addEventListener("change", atualizarVisibilidade);
    atualizarVisibilidade();
});

document.getElementById("submit").addEventListener("click", (event) => {
    event.preventDefault();
    function Pessoa() {
        let name, email, dataNascimento, phoneFixo, phoneCel;

        this.setPessoa = function (nome, gmail, dataNasc, telefoneFixo, telefoneCel) {
            name = nome;
            email = gmail;
            dataNascimento = dataNasc;
            phoneFixo = telefoneFixo;
            phoneCel = telefoneCel;
        };
        this.getName = () => name;
        this.getEmail = () => email;
        this.getDataNascimento = () => dataNascimento;
        this.getPhoneFixo = () => phoneFixo;
        this.getPhoneCel = () => phoneCel;
    }

    function Professor() {
        Pessoa.call(this);
        let areaAtuacao, matriculaProf, lattesProf;

        this.setProfessor = function (area, matricula, lattes) {
            areaAtuacao = area;
            matriculaProf = matricula;
            lattesProf = lattes;
        };
        this.getArea = () => areaAtuacao;
        this.getMatricula = () => matriculaProf;
        this.getLattes = () => lattesProf;
    }

    function Aluno() {
        Pessoa.call(this);
        let cursoAluno, matriculaAluno;

        this.setAluno = function (curso, matriculaAlu) {
            cursoAluno = curso;
            matriculaAluno = matriculaAlu;
        };
        this.getCurso = () => cursoAluno;
        this.getMatriculaAlu = () => matriculaAluno;
    }

    // Capturar dados do formulário
    let nome = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let dataNascimento = document.getElementById("date").value;
    let telefoneFixo = document.getElementById("phoneFixo").value;
    let telefoneCelular = document.getElementById("phoneCel").value;
    let perfil = document.querySelector('input[name="perfil"]:checked').value;

    let resultadoDiv = document.getElementById("resultado");
    if (!resultadoDiv) {
        resultadoDiv = document.createElement("div");
        resultadoDiv.id = "resultado";
        document.body.appendChild(resultadoDiv);
    }
    resultadoDiv.innerHTML = "";

    if (perfil === "professor") {
        let area = document.getElementById("area").value;
        let matricula = document.getElementById("matriculaProf").value;
        let lattes = document.getElementById("lattes").value;

        let professor = new Professor();
        professor.setPessoa(nome, email, dataNascimento, telefoneFixo, telefoneCelular);
        professor.setProfessor(area, matricula, lattes);

        resultadoDiv.innerHTML = `
            <h2>Professor Cadastrado:</h2>
            <p><strong>Nome:</strong> ${professor.getName()}</p>
            <p><strong>Email:</strong> ${professor.getEmail()}</p>
            <p><strong>Data de Nascimento:</strong> ${professor.getDataNascimento()}</p>
            <p><strong>Telefone Fixo:</strong> ${professor.getPhoneFixo()}</p>
            <p><strong>Telefone Celular:</strong> ${professor.getPhoneCel()}</p>
            <p><strong>Área:</strong> ${professor.getArea()}</p>
            <p><strong>Matrícula:</strong> ${professor.getMatricula()}</p>
            <p><strong>Lattes:</strong> ${professor.getLattes()}</p>
        `;
    } else if (perfil === "aluno") {
        let curso = document.getElementById("curso").value;
        let matricula = document.getElementById("matriculaAlu").value;

        let aluno = new Aluno();
        aluno.setPessoa(nome, email, dataNascimento, telefoneFixo, telefoneCelular);
        aluno.setAluno(curso, matricula);

        resultadoDiv.innerHTML = `
            <h2>Aluno Cadastrado:</h2>
            <p><strong>Nome:</strong> ${aluno.getName()}</p>
            <p><strong>Email:</strong> ${aluno.getEmail()}</p>
            <p><strong>Data de Nascimento:</strong> ${aluno.getDataNascimento()}</p>
            <p><strong>Telefone Fixo:</strong> ${aluno.getPhoneFixo()}</p>
            <p><strong>Telefone Celular:</strong> ${aluno.getPhoneCel()}</p>
            <p><strong>Curso:</strong> ${aluno.getCurso()}</p>
            <p><strong>Matrícula:</strong> ${aluno.getMatriculaAlu()}</p>
        `;
    }
});
document.getElementById("reset").addEventListener("click", function() {
    const campoProfessor = document.querySelector(".campo_dados_professor");
    const campoAluno = document.querySelector(".campo_dados_aluno");

    campoAluno.style.display = "none";
    campoProfessor.style.display = "none";

    let resultadoDiv = document.getElementById("resultado");
    if (resultadoDiv) {
        document.body.removeChild(resultadoDiv);
    }
});