Rails.application.routes.draw do
  scope :api do
    resources :rooms

    resources :games do
      collection do
        get 'key/:key', to: 'games#show_key'
      end

      member do
        get 'card'
        get 'play_list'
      end
    end

    resources :categories, shallow: true do
      resources :clips
    end
  end
  
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
