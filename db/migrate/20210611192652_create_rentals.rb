class CreateRentals < ActiveRecord::Migration[6.1]
  def change
    create_table :rentals do |t|
      t.references :user, null: false, foreign_key: true
      t.references :listing, null: false, foreign_key: true
      t.datetime :start_time
      t.datetime :end_time
      t.integer :num_guests

      t.timestamps
    end
  end
end
