Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  get '/app', to: 'welcome#app', as: 'app'

  root 'welcome#app'
end
