class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  # ENUM
  enum role: { merchant: 0, admin: 1 }
  enum status: { active: 0, inactive: 1 }

  # Scope
  scope :merchants, -> { where(role: 0) }

  # Relations
  has_many :transactions
  has_many :charged_transactions
  has_many :refunded_transactions
  has_many :reversed_transactions
  has_many :authorized_transactions

end
