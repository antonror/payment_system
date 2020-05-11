class TransactionService < ApplicationService

  def initialize(user:, data:, amount_present:)
    @user = user
    @transaction_params = data
    @amount_present = amount_present
  end

  def call
    begin
      if @amount_present
        @operation = @user.authorized_transactions.create(@transaction_params)
      else
        @operation = @user.transactions.create(@transaction_params)
      end
    rescue Exception
      return_struct(false)
    end
    check_operation
  end

  private

  def check_operation
    operation_result = @operation.try(:persisted?)
    return_struct(operation_result)
  end

  def return_struct(operation_result)
    OpenStruct.new(success?: operation_result)
  end
end