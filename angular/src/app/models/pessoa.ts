export interface Pessoa{
  email: string,
  id: number,
  pessoa: {
    cpf: string,
    endereco: {
      bairro: string,
      cep: string,
      cidade: string,
      estado: string,
      id: number,
      logradouro: string,
      numero: number,
      pais: string
    },
    foto: {
      id: string,
      name: string,
      type: string
    },
    id: number,
    nome: string
  },
  privado: true,
  tag: string,
  telefone: string,
  tipoContato: string,
  usuario: {
    cpf: string,
    dataNascimento: Date,
    email: string,
    id: number,
    nome: string,
    password: string,
    telefone: string,
    username: string
  }

}
