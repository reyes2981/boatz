class Vessel < ApplicationRecord
  belongs_to :owner
  has_many :listings, dependent: :destroy
  has_many :rentals, through: :listings
  validates :location, presence: true
end
