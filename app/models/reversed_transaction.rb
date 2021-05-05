# transaction = Transaction.find(x)
# reversed_transaction = ReversedTransaction.new(transaction)
# reversed_transaction.save
class ReversedTransaction < SimpleDelegator
  def save
    Transaction.create(customer_email: customer_email, customer_phone: customer_phone,
                       status: 3, user_id: user_id, authorized_transaction_id: self.id)
  end
end

# class ReversedTransaction < Transaction
#
#   belongs_to :authorized_transaction, foreign_key: :authorized_transaction_id
# end
