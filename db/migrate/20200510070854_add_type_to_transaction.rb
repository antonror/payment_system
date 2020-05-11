class AddTypeToTransaction < ActiveRecord::Migration[6.0]
  def change
    add_column :transactions, :type, :string
    add_column :transactions, :deleted_at, :datetime

    add_index :transactions, :deleted_at
  end
end