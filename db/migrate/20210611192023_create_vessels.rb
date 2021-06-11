class CreateVessels < ActiveRecord::Migration[6.1]
  def change
    create_table :vessels do |t|
      t.references :owner, null: false, foreign_key: true
      t.string :name
      t.string :location
      t.int :berths

      t.timestamps
    end
  end
end
