class CreateListings < ActiveRecord::Migration[6.1]
  def change
    create_table :listings do |t|
      t.references :vessel, null: false, foreign_key: true
      t.integer :price
      t.datetime :avail_start
      t.text :description

      t.timestamps
    end
  end
end
