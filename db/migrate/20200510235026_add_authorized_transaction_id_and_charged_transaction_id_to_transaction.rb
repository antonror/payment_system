class AddAuthorizedTransactionIdAndChargedTransactionIdToTransaction < ActiveRecord::Migration[6.0]
  def change
    add_column :transactions, :authorized_transaction_id, :string
    add_column :transactions, :charged_transaction_id, :string
  end
end
