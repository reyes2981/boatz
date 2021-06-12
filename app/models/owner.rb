class Owner < ApplicationRecord
  has_secure_password
  validates :email, presence: true, uniqueness: true
  validates :password, presence: true

  has_many :vessels
  has_many :listings, through: :vessels
end
