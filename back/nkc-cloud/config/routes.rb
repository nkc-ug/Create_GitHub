Rails.application.routes.draw do   
    # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  
    # Defines the root path route ("/")
    # root "articles#index"

    namespace 'api',format: 'json' do
      namespace 'v1',format: 'json' do
        resources :users , only: [:userindex,:create,:destroy,:update,:login]  do
          
          collection do
            get ':name/:password/login' , action: :login 
            get ':user_id/index' , action: :userindex 
           
        end
      end
    end
  end

    root 'posts#top'
    get "https://aaa.com/:url" => "posts#top"
    namespace 'api' do
      namespace 'v1' do
        resources :posts
        get "posts/https://aaa.com/:url" => "posts#Confirm"
        get "posts/https://aaa.com/:url/:key/download" => "posts#download"
      end
    end
  end
  