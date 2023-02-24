class Api::V1::UsersController < ApplicationController
  before_action :set_user, only: [:show, :update, :destroy]

  # ユーザーごとの投稿一覧
  def userindex
    @posts = Post.where(user_id: params[:user_id])
    user = User.find_by(id: params[:user_id])
    
    if @data.present?
      render json: { status: 'SUCCESS', message: 'Loaded the user', data: [@data] }
    end
    
  end

  def create
    user = User.new(user_params)

    if user.save
      render json: { status: 'SUCCESS',message: 'created user', data:user}
    else
      render json: { status: 'ERROR',message: 'failed create user',data: user.errors }
    end
  end

  def destroy
    @user.destroy
    render json: { status: 'SUCCESS', message: 'Deleted the user', data: @user }
  end

  def update
    if @user.update(user_params)
      render json: { status: 'SUCCESS', message: 'Updated the user', data: @user }
    else
      render json: { status: 'ERROR', message: 'failed update', data: @user.errors }
    end
  end

  def login
    @loginuser = User.find_by(name: params[:name],
                              password: params[:password])

    if @loginuser.present?
      render json: { status: 'SUCCESS', message: 'logined', data: @loginuser }
    else
      # 間違えた値を返却値として返す
      @name = params[:name]
      @password = params[:password]
      render json: { status: 'ERROR', message: 'login error', data:["false" , @name , @password] }
    end
  end

  private

  def set_user
    @user = User.find(params[:id])
  end

  def user_params
    params.require(:user).permit(:name,:password)
  end

end