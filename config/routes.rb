Rails.application.routes.draw do
  root 'welcome#index'

  resources :listings do
    resources :rentals, shallow: true
  end
  
  resources :renters
  resources :owners do
    resources :vessels do
      resources :listings, shallow: true
    end
  end
  resources :vessels
  resources :rentals
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
