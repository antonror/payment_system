class RefundedTransaction < Transaction
  validates :amount, numericality: { greater_than: 0 }

  belongs_to :charged_transaction, foreign_key: :charged_transaction_id

  after_create :update_user_amount

  private

  def update_user_amount
    user.update_total_transaction_sum
  end
end
