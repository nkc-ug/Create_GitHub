Rails.application.routes.draw do
  namespace 'api' do
    namespace 'v1' do
      resources :posts
      get "posts/https://aaa.com/:url" => "posts#Confirm"
      get "posts/https://aaa.com/:url/:key/download" => "posts#download"
    end
  end
end