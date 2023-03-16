class DisciplinaControlador {
    constructor() {
        this.disciplinaServico = new DisciplinaServico();
    }

    inserir() {
        const nomeDisci = document.querySelector("#nome").value;
        const codigoDisci = Number(document.querySelector("#codigo").value);
        const disciplina = this.disciplinaServico.inserir(codigoDisci, nomeDisci);

        if (disciplina) {
            this.mostrarDisciplina(nomeDisci, codigoDisci);
            alert('Disciplina inserida com sucesso!');
        } 
        else {
            alert('Código já existente não permitido!')
        }
    }

    mostrarDisciplina(nomeDisc, codigoDisc) {
        const elementoDi = document.createElement("d");
        elementoDi.textContent = `${nomeDisc} - ${codigoDisc}`;

        const elementoBotaoApagar = document.createElement("button");
        elementoBotaoApagar.textContent = "X";

        elementoBotaoApagar.addEventListener('click', (event) => {
                this.removerDisciplina(codigoDisc);
                event.target.parentElement.remove();
            }
        );
        elementoDi.appendChild(elementoBotaoApagar);
        document.body.appendChild(elementoDi);
    }

    removerDisciplina(codigo) {
        this.disciplinaServico.remover(codigo);
    }

}