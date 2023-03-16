class Disciplina {
  constructor(codigo, nomeDisc) {
      this._codigo = codigo;
      this._nome = nomeDisc;
      this._alunos = [];
  }

  get codigo() {
      return this._codigo;
  }

  get nomeDisc() {
      return this._nome;
  }

  get alunos() {
      return this._alunos;
  }

  set codigo(codigoNovo) {
      this._codigo = codigoNovo;
  }

  set nomeDisc(nomeNovo) {
      this._nome = nomeNovo;
  }
}