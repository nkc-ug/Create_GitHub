class Api::V1::UsersController < ApplicationController

  # ユーザーごとの投稿一覧
  def userindex
    posts = Post.where(user_id: params[:user_id])
    user = User.find_by(id: params[:user_id])
    render json: { status: 'SUCCESS', message: 'Loaded the user', data: [posts,user] }
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
    user = User.find_by(id: params[:id])
    user.destroy
    render json: { status: 'SUCCESS', message: 'Deleted the user', data: user }
  end

  def update
    user = User.find_by(id: params[:id])
    if user.update(user_params)
      render json: { status: 'SUCCESS', message: 'Updated the user', data: user }
    else
      render json: { status: 'ERROR', message: 'failed update', data: user.errors }
    end
  end

  def login
    loginuser = User.find_by(name: params[:name],
                              password: params[:password])
    # そのレコードが存在したら
    if loginuser.present?
      render json: { status: 'SUCCESS', message: 'logined' ,data: "true"}
    else
      render json: { status: 'ERROR', message: 'login error', data:"false" }
    end
  end

   private

  def user_params
    params.require(:user).permit(:name,:password)
  end

end