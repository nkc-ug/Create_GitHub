Rails.application.routes.draw do
 
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  namespace 'api',format: 'json' do
    namespace 'v1',format: 'json' do
      resources :users  do

        get 'index' , action: :userindex  

        
        collection do

          get ':name/:password/login' , action: :login ,only: [:userindex,:create,:destroy,:update,:login]
      end
    end
  end
end


end
