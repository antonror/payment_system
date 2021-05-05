# transaction = Transaction.new(params)
# charged_transaction = ChargedTransaction.new(transaction)
# charged_transaction.save
class ChargedTransaction < SimpleDelegator
  def save
    super.save
    update_user_amount
  end

  private

  def update_user_amount
    user.update_total_transaction_sum
  end
end
  
  # validates :amount, numericality: { greater_than: 0 }
#
#   has_one :refunded_transaction, foreign_key: :charged_transaction_id, dependent: :destroy
#   belongs_to :authorized_transaction, foreign_key: :authorized_transaction_id
#
#   after_update :create_refunded_transaction, if: Proc.new { |t| t.saved_change_to_attribute?(:status, from: 'approved', to: 'refunded') }
#   after_create :update_user_amount
#
#   private
#
#   def create_refunded_transaction
#     RefundedTransaction.create(amount: amount, customer_email: customer_email,
#                                customer_phone: customer_phone, status: 2,
#                                user_id: user_id, charged_transaction_id: id)
#   end
#
#   def update_user_amount
#     user.update_total_transaction_sum
#   end
end
