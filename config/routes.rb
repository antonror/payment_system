Rails.application.routes.draw do
  devise_for :users
  devise_scope :user do
    get 'users/sign_out' => 'devise/sessions#destroy'
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  get '/app', to: 'welcome#app', as: 'app'

  root 'welcome#app'

  # Api Routes
  namespace :api, defaults: {format: 'json'} do
    namespace :v1 do
      resources :users, only: [:index, :update, :destroy] do
        get 'check_for_user', on: :collection
      end
    end
  end
end
