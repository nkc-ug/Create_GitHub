class Api::V1::PostsController < ApplicationController
    # def index
    #   posts = Post.order(created_at: :asc)
    #    posts = Post.where(user_id:params[:id])
    #   render json: { status: 'SUCCESS', message: 'Loaded posts', data: posts }
    # end
  
    def show
      # begin
        post = Post.find(params[:id])
      # rescue
      #   render json: { status: '404', message: 'Not Found', data: params[:id] }
      # else
        render json: { status: 'SUCCESS', message: 'Loaded the post', data: post }
      # end
    end
  
    def create
      post = Post.new(post_params)
      url = exist()
      post.url="https://aaa.com/#{url}"
      # post.file_name=post.file_name.gsub(/ /, '_').gsub(/　/, '_')
      if post.save
        render json: { status: 'SUCCESS', data: post }
      else
        render json: { status: 'ERROR', data: post.errors }
      end
    end
  
    def destroy
      post = Post.find(params[:id])
      post.destroy
      render json: { status: 'SUCCESS', message: 'Deleted the post', data: post }
    end
    #ファイル名に空白が入っているとダウンロードできない
    # post.file_name=post.file_name.gsub(/ /, '_').gsub(/　/, '_')
    def update
      post = Post.find(params[:id])
      
      if post.update(post_params)
        render json: { status: 'SUCCESS', message: 'Updated the post', data: post }
      else
        render json: { status: 'ERROR', data: post.errors }
      end
    end

    def Confirm
      post = Post.where(url:"https://aaa.com/#{params[:url]}")#.select(:url,:title)
      if post == []
        render json: { status: '404', message: 'Not Found', data: params[:url] }
      else
        render json: { status: 'SUCCESS', message: 'Loaded the post', data: post }
      end
    end

    def download
      #バック側でダウンロードを行う
      if params[:key] == "0000"
        params[:key] = nil
      end
      post = Post.find_by(url:"https://aaa.com/#{params[:url]}",key: params[:key])
      begin
      download_file_name = "public/files/#{post.file_name}"
      rescue
        render json: { status: 'SUCCESS', message: 'Not download', data: params[:key] }
      else
        send_file download_file_name
      end
      #フロントにファイルのパスを送る
      # post = Post.find_by(url:"https://aaa.com/#{params[:url]}",key: params[:key])
      # if post.nil?
      #   render json: { status: 'SUCCESS', message: 'Not updated', data: post }
      # else
      #   post.file_name=post.file_name.gsub(/ /, '_').gsub(/　/, '_')
      #   binding.pry
      #   render json: { status: 'SUCCESS', message: 'Updated the post', data:  "/files/#{post.file_name}" }
      # end
    end
  
    private   #よく分からん
  
    def post_params
      params.require(:post).permit(:title,:comment,:date,:file_name,:key)
    end

    def exist
      require 'securerandom'
      url = SecureRandom.alphanumeric
      if Post.exists?(url: "https://aaa.com/#{url}")
        url = SecureRandom.alphanumeric
        exist()
      end
      return url 
    end
  end