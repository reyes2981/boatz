Rails.application.routes.draw do
  resources :rentals
  resources :listings
  resources :vessels
  resources :renters
  resources :owners
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
