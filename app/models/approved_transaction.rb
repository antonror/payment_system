# transaction = Transaction.find(x)
# approved_transaction = ApprovedTransaction.new(transaction)
# approved_transaction.save
class ApprovedTransaction < SimpleDelegator
  def save
    Transaction.create(amount: amount, customer_email: customer_email,
                      customer_phone: customer_phone, status: 1,
                      user_id: user_id, authorized_transaction_id: id)
  end
end