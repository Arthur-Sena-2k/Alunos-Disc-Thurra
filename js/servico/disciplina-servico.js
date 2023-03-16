class DisciplinaServico {
    constructor() {
        this.repositorio = new DisciplinaRepositorio();
    }

    inserir(codigo, nome) {
        if (this.buscarPorCodigo(codigo).length == 0) {
            const disciplina = new Disciplina(codigo, nome);
            return this.repositorio.inserir(disciplina);
        }
        // já existe uma disciplina com esse código
        return undefined;
    }
    
    remover(codigo) {
        this.repositorio.remover(codigo);
    }

    listar() {
        return this.repositorio.listar();
    }

    buscarPorCodigo(codigo) {
        return this.repositorio.buscarPorCodigo(codigo);
    }
}