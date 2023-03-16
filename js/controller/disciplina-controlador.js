class DisciplinaControlador {
    constructor() {
        this.disciplinaServico = new DisciplinaServico();
    }

    inserir() {
        const nomeDisciplina = document.querySelector("#nome").value;
        const codigoDisciplina = Number(document.querySelector("#codigo").value);
        const disciplina = this.disciplinaServico.inserir(codigoDisciplina, nomeDisciplina);

        if (disciplina) {
            this.mostrarDisciplina(nomeDisciplina, codigoDisciplina);
            alert('Disciplina inserida com sucesso!');
        } 
        else {
            alert('Código já existente não permitido!')
        }
    }

    mostrarDisciplina(nomeDisc, codigoDisc) {
        const elementoP = document.createElement("p");
        elementoP.textContent = `${nomeDisc} - ${codigoDisc}`;

        const elementoBotaoApagar = document.createElement("button");
        elementoBotaoApagar.textContent = "X";

        elementoBotaoApagar.addEventListener('click', (event) => {
                this.removerDisciplina(codigoDisc);
                event.target.parentElement.remove();
            }
        );
        elementoP.appendChild(elementoBotaoApagar);
        document.body.appendChild(elementoP);
    }

    removerDisciplina(codigo) {
        this.disciplinaServico.remover(codigo);
    }

}