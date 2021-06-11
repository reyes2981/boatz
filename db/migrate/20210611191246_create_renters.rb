class CreateRenters < ActiveRecord::Migration[6.1]
  def change
    create_table :renters do |t|
      t.string :email
      t.string :password_digest

      t.timestamps
    end
    add_index :renters, :email, unique: true
  end
end
