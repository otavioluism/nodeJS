import TransactionsRepository from '../repositories/TransactionsRepository';
import Transaction from '../models/Transaction';

class CreateTransactionService {
  private transactionsRepository: TransactionsRepository;

  constructor(transactionsRepository: TransactionsRepository) {
    this.transactionsRepository = transactionsRepository;
  }

  public execute({title, value, type}: Omit<Transaction, 'id'>): Transaction {

    // verifica se existe o método de entra e saida de dinheiro
    if (!['income', 'outcome'].includes(type)) {
      throw new Error('Transaction Type is invalid');
    }

    // pegando o total para ver se tem dinheiro suficiente para sair
    const { total } = this.transactionsRepository.getBalance();

    if(type === 'outcome' && total < value){
      throw new Error('Você não tem dinheiro suficiente');
    }

    const transaction = this.transactionsRepository.create({
      title, value, type
    });

    return transaction;
  }
}

export default CreateTransactionService;
