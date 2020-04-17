Rails.application.routes.draw do
  resources :categories
  resources :clips
  resources :games do
    collection do
      get 'key/:key', to: 'games#show_key'
    end

    member do
      get 'card'
      get 'play_list'
    end
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
