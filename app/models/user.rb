class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  # Added to soft delete the user
  acts_as_paranoid

  # ENUM
  enum role: { merchant: 0, admin: 1 }
  enum status: { active: 0, inactive: 1 }

  # Scope
  scope :merchants, -> { where(role: 0) }

  # Relations
  has_many :transactions, dependent: :destroy
  has_many :charged_transactions, dependent: :destroy
  has_many :refunded_transactions, dependent: :destroy
  has_many :reversed_transactions, dependent: :destroy
  has_many :authorized_transactions, dependent: :destroy

end
