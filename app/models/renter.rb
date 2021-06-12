class Renter < ApplicationRecord
  has_secure_password
  has_many :rentals
end
