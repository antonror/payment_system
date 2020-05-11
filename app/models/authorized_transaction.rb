class AuthorizedTransaction < Transaction
  validates :amount, numericality: { greater_than: 0 }

  has_one :charged_transaction, foreign_key: :authorized_transaction_id, dependent: :destroy
  has_one :reversed_transaction, foreign_key: :authorized_transaction_id, dependent: :destroy

  after_update :create_charged_transaction, if: Proc.new { |t| t.saved_change_to_attribute?(:status, from: 'authorized', to: 'approved') }
  after_update :create_reversed_transaction, if: Proc.new { |t| t.saved_change_to_attribute?(:status, from: 'authorized', to: 'reversed') }

  private

  def create_charged_transaction
    chareged = ChargedTransaction.create(amount: amount, customer_email: customer_email,
                              customer_phone: customer_phone, status: 1,
                              user_id: user_id, authorized_transaction_id: id)
  end

  def create_reversed_transaction
    ReversedTransaction.create(customer_email: customer_email, customer_phone: customer_phone,
                               status: 3, user_id: user_id, authorized_transaction_id: self.id)
  end
end
