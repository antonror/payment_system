class Api::V1::TransactionsController < Api::V1::BaseController

  def index
    @transactions = current_user.admin? ? Transaction.all : current_user.transactions
  end

  def create

    if authorized?
      current_user.authorized_transactions.create(transaction_params)
    else
      current_user.transactions.create(transaction_params)
    end
    render json: {message: 'Transaction created!'}, status: :ok
  end

  private

  def transaction_params
    status = authorized? ? 'authorized' : 'error'
    params.require(:transaction).permit(:amount, :customer_email, :customer_phone).merge(status: status)
  end

  def authorized?
    params.dig(:transaction, :amount).to_i > 0
  end
end
