class AddAvailEndToListing < ActiveRecord::Migration[6.1]
  def change
    add_column :listings, :avail_end, :string
  end
end
