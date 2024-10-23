

const Transaction = require("../model/transactionaModel")

exports.addTransaction = async (req, res) => {
  try {
    const { type, category, amount, date, description } = req.body;
    const newTransaction = new Transaction({ type, category, amount, date, description });
    await newTransaction.save();
    res.status(201).json(newTransaction);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error });
  }
};

exports.getTransactions = async (req,res) => {
    try {
        const transactions = await Transaction.find();
        res.status(200).json(transactions);
    } catch (e) {
        res.status(500).json({ message: 'Server Error', e });
    }
    
}

exports.getTransactionById = async (req, res) => {
    try {
      const {id} = req.params
      const transaction = await Transaction.findById(id);
      if (!transaction) {
        return res.status(404).json({ message: 'Transaction not found' });
      }
      res.status(200).json(transaction);
    } catch (error) {
      res.status(500).json({ message: 'Server Error', error });
    }
  };

exports.updateTransaction = async (req, res) => {
    try {
      const updatedTransaction = await Transaction.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedTransaction) {
        return res.status(404).json({ message: 'Transaction not found' });
      }
      res.status(200).json(updatedTransaction);
    } catch (e) {
      res.status(500).json({ message: 'Server Error', e });
    }
  };

  exports.deleteTransaction = async (req, res) => {
    try {
      const transaction = await Transaction.findByIdAndDelete(req.params.id);
      if (!transaction) {
        return res.status(404).json({ message: 'Transaction not found' });
      }
      res.status(200).json({ message: 'Transaction deleted successfully' });
    } catch (e) {
      res.status(500).json({ message: 'Server Error', e });
    }
  };

 