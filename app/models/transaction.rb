class Transaction < ApplicationRecord
  # Added to soft delete the user
  acts_as_paranoid

  validates :customer_email, presence: true, email: true
  validates :customer_email, format: { with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i }
  validates :customer_phone, presence: true

  enum status: { authorized: 0, approved: 1, refunded: 2, reversed: 3, error: 4 }

  belongs_to :user
end
