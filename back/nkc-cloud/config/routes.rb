Rails.application.routes.draw do
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