export interface IReceita {
  status: string,
  ultima_atualizacao: Date,
  cnpj: string,
  tipo: string,
  porte: string,
  nome: string,
  fantasia: string,
  abertura: string,
  atividade_principal: IPrincipalActive[]
  atividades_secundarias: ISecondaryActive[],
  natureza_juridica: string,
  logradouro: string,
  numero: string,
  complemento: string,
  cep: string,
  bairro: string,
  municipio: string,
  uf: string,
  email: string,
  telefone: string,
  efr: string,
  situacao: string,
  data_situacao: string,
  motivo_situacao: string,
  situacao_especial: string,
  data_situacao_especial: string,
  capital_social: string,
  qsa: IQsa[],
  simples: ISimples,
  simei: ISimei,
  billing: IBilling
}

interface IPrincipalActive {
  code: string,
  text: string
}

interface ISecondaryActive {
  code: string,
  text: string
}

interface IQsa {
  nome: string,
  qual: string,
  pais_origem: string,
  nome_rep_legal: string,
  qual_rep_legal: string
}

interface ISimples {
  optante: true,
  data_opcao: Date
  data_exclusao: Date
  ultima_atualizacao: Date
}

interface ISimei {
  optante: true,
  data_opcao: Date
  data_exclusao: Date
  ultima_atualizacao: Date
}

interface IBilling {
  free: true,
  database: true
}

