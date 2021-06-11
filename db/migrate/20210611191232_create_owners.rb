class CreateOwners < ActiveRecord::Migration[6.1]
  def change
    create_table :owners do |t|
      t.string :email
      t.string :password_digest

      t.timestamps
    end
    add_index :owners, :email, unique: true
  end
end
