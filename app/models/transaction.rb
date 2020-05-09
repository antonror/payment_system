class Transaction < ApplicationRecord

  validates :uuid, presence: true, uniqueness: true
  validates :customer_email, presence: true, uniqueness: true
  validates :email, format: { with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i }
  validates :customer_phone, presence: true, uniqueness: true
  validates :amount, numericality: { greater_than: 0 } , unless: :exclude_reversed_transactions

  enum status: { initial: 0, approved: 1, refunded: 2, reversed: 3, error: 4 }

  belongs_to :user
end
