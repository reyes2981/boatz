json.extract! vessel, :id, :owner_id, :name, :location, :berths, :created_at, :updated_at
json.url vessel_url(vessel, format: :json)
