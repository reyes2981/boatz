json.extract! rental, :id, :user_id, :listing_id, :start_time, :end_time, :num_guests, :created_at, :updated_at
json.url rental_url(rental, format: :json)
