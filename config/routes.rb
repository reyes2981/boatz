Rails.application.routes.draw do
  resources :sessions, only: %i[create]
  resources :owner_registrations, only: %i[create]
  resources :renter_registrations, only: %i[create]
  delete :logout, to: 'sessions#logout'
  get :logged_in, to: 'sessions#logged_in'
  root 'welcome#index'
  get :signup, to: 'welcome#index'
  get :login, to: 'welcome#index'
  get :boatz, to: 'welcome#index'
  get :joinrenters, to: 'welcome#index'
  resources :listings do
    resources :rentals, shallow: true
  end
  
  resources :renters
  resources :owners do
    resources :vessels do
      resources :listings, shallow: true
    end
  end
  resources :vessels do
    member do
      delete :delete_file
    end
  end
  resources :rentals
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
