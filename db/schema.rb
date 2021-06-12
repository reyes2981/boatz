# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_06_12_154545) do

  create_table "listings", force: :cascade do |t|
    t.integer "vessel_id", null: false
    t.integer "price"
    t.datetime "avail_start"
    t.text "description"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "avail_end"
    t.index ["vessel_id"], name: "index_listings_on_vessel_id"
  end

  create_table "owners", force: :cascade do |t|
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["email"], name: "index_owners_on_email", unique: true
  end

  create_table "rentals", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "listing_id", null: false
    t.datetime "start_time"
    t.datetime "end_time"
    t.integer "num_guests"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["listing_id"], name: "index_rentals_on_listing_id"
    t.index ["user_id"], name: "index_rentals_on_user_id"
  end

  create_table "renters", force: :cascade do |t|
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["email"], name: "index_renters_on_email", unique: true
  end

  create_table "vessels", force: :cascade do |t|
    t.integer "owner_id", null: false
    t.string "name"
    t.string "location"
    t.integer "berths"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["owner_id"], name: "index_vessels_on_owner_id"
  end

  add_foreign_key "listings", "vessels"
  add_foreign_key "rentals", "listings"
  add_foreign_key "rentals", "users"
  add_foreign_key "vessels", "owners"
end
