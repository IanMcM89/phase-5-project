Rails.application.routes.draw do
  mount ActionCable.server => "/cable"
  namespace :api do
    resources :events
    resources :friend_requests
    resources :pending_friends, only: [:index, :show]
    resources :friendships, only: [:index, :show]
    resources :friends, only: [:index, :show, :destroy]
    resources :users, only: [:index]
    post "/login", to: "sessions#create"
    post "/signup", to: "users#create"
    delete "/logout", to: "sessions#destroy"
    get "/me", to: "users#show"
    patch "/me", to: "users#update"
    patch "/me/upload_avatar", to: "users#attach_avatar"
  end
  # Routing logic: fallback requests for React Router.
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
