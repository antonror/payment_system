class CreateTransactions < ActiveRecord::Migration[6.0]
  def change
    create_table :transactions, id: :uuid do |t|
      t.decimal :amount, null: false, default: 0
      t.integer :status, null: false, default: 0
      t.string :customer_email, null: false, default: ""
      t.integer :customer_phone, null: false, default:""
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
