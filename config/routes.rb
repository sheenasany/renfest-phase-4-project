Rails.application.routes.draw do
  resources :planners
  resources :faires, only: [:index, :show]
  post '/signup', to: "users#create"
  get '/me', to: "users#show"
  post '/login', to: "sessions#create"
  delete '/logout', to: "sessions#destroy"
  
  get '/users/me/planners', to: "planners#notes"

    # route to test your configuration
    get '*path',
    to: 'fallback#index',
    constraints: ->(req) { !req.xhr? && req.format.html? }
end
