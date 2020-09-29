Uma aplicação para continuar treinando o que estou aprendendo até agora no Node.js junto ao TypeScript, utilizando o conceito de models, repositories e services!

Essa será uma aplicação  que armazena transações financeiras de entrada e saída, e permiti o cadastro e a listagem dessas transações.

##  :floppy_disk:  SOLID 

> S - Principio da Responsabilidade Únicas
>
> O - Principio aberto fechado
>
> L - Principio das substituição de Linskov
>
> I -  Principio da segregação da Interface
>
> D - Principio da Inversão da dependência
>
>>### Principio da Responsabilidade Únicas
>>
>>Uma classe deve ter uma classe e somente um principio pra mudar, uma especialidade, uma responsabilidade, uma única tarefa e ação pra executar. 
>>
>>### Principio aberto fechado
>>
>>Objetos devem estar abertos para  extensão e não modificar o método (classe) real. 
>>
>>### Principio da Substituição de Linskov
>>
>>uma classe derivada pode ser ser substituída por sua classe base. Polimorfismo 
>>
>>### Principio da segregação da Interface
>>
>>Uma classe não deve ser forçada a implementar interface e métodos que não ira utilizar, criar interfaces mais específicas e não generalistas.
>>
>>### Principio da Inversão da dependência
>>
>>Devemos depender de abstrações e não de implementações. abstrações não devem depender de detalhes. Injeção de dependências.


###  Alguns conceitos:

- Moldels: É um arquivo que contém o tipo da fonte de dados que será utilizado em nossa aplicação e tem objetivo de criar os dados também;

- Repositories: Pode ser entendido como a conexão com o banco de dados e a nossa rota, ou entendido como onde será feita toda manipulação do banco de dados;

- Services: É um arquivo que contém apenas um método e é responsável apenas por criar as regras de negócio de uma determinada rota;
