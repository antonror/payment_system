class Api::V1::TransactionsController < Api::V1::BaseController
  before_action :set_transaction, only: [:update]
  before_action :check_amount_presence, only: [:create]

  def index
    @transactions = current_user.admin? ? Transaction.all : current_user.transactions
  end

  def create
    result = TransactionService.call(user: current_user, data: transaction_params, amount_present: has_amount?)

    if result.success?
      render json: { message: 'Transaction created!' }, status: :ok
    else
      render json: { message: 'Transaction failed to create' }, status: 422
    end
  end

  def update
    @transaction.update(update_transaction_params) if @transaction.present?
    render json: {message: 'Transaction created!'}, status: :ok
  end

  private

  def transaction_params
    status = has_amount? ? 'authorized' : 'error'
    params.require(:transaction).permit(:amount, :customer_email, :customer_phone).merge(status: status)
  end

  def has_amount?
    params.dig(:transaction, :amount).to_i > 0
  end

  def update_transaction_params
    params.require(:transaction).permit(:status)
  end

  def set_transaction
    @transaction = Transaction.find(params[:id]) if current_user.admin?
  end

  def check_amount_presence
    params.dig(:transaction, :amount).to_i > 0
  end
end
