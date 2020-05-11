class ReversedTransaction < Transaction

  belongs_to :authorized_transaction, foreign_key: :authorized_transaction_id
end
