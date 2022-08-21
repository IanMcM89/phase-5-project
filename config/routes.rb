Rails.application.routes.draw do
  mount ActionCable.server => "/cable"
  namespace :api do
    resources :friend_requests
    resources :pending_friends, only: [:index, :show]
    resources :friendships, only: [:index, :show]
    resources :friends, only: [:index, :show, :destroy]
    resources :users, only: [:index]
    post "/signup", to: "users#create"
    get "/me", to: "users#show"
    post "/login", to: "sessions#create"
    delete "/logout", to: "sessions#destroy"
  end
  # Routing logic: fallback requests for React Router.
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
