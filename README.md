# Redux

- É uma lib para arquitetura em um sistema que usa Javascript (seja react, react-native, etc)
- Utilizado para gerenciar os dados do APP
- Controla o comportamento da Aplicação conforme as ações do Usuario (Cliques, Inputs, etc)
- Deve ser utilizado:
  - Quando se precisa compartilhar o Estado entre componentes
  - Centralizar a logica de funcionamento e regras de negocio em um lugar
  - Tratar os efeitos colaterais de uma ação (Por ex: Finalizar um video (Um componente) e iniciar outro video, atualizando uma sideBar lateral (outro compontente)
  - Event ``prop drilling``: Passar um estado varias vezes, tornando redundande ficar passando por toda a arvore de componentes do React

### Redux

- Reducer: Armazena o Estado e pode manipula-lo
- Actions: Ações que indicam que o Estado precisa ser manipulado
- ``export default connect()()``:
  - 1° Função: Se trata do que a segunda função está experando receber do Redux
  - 2° Função: Se trata do Componente com as informações carregadas do Redux
  - ``connect`` é um import do Redux