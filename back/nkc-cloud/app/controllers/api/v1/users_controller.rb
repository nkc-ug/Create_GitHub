class Api::V1::UsersController < ApplicationController
  before_action :set_user, only: [:show, :update, :destroy]
  
  def index
    users = User.order(created_at: :desc)
    render json: { status: 'SUCCESS', message: 'Loaded users', data: users }
  end

  def userindex
    # joinsをつかって表の結合をしないといけない
    @posts = Post.where(user_id: params[:user_id])
    user = User.find_by(id: params[:user_id])
    
    render json: { status: 'SUCCESS', message: 'Loaded the user', data: [@posts,user] }
    
  end

  def show
    render json: { status: 'SUCCESS', message: 'Loaded the user', data: @user }
  end

  def create
    user = User.new(user_params)

    if user.save
      render json: { status: 'SUCCESS', data:user}
    else
      render json: { status: 'ERROR', data: user.errors }
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
      render json: { status: 'ERROR', message: 'Not updated', data: @user.errors }
    end
  end

  def login
    # 例外処理を加えないといけない
    @loginuser = User.find_by(name: params[:name],
                              password: params[:password])

    if @loginuser 
      render json: { status: 'SUCCESS', message: 'logined', data: @loginuser }
    else
      render json: { status: 'ERROR', message: 'login error', data: @loginuser.errors }
    end
  end

  # 今のままでは同じレコードが存在してしまう（名前とパスワードが同じやつ）
  private

  def set_user
    @user = User.find(params[:id])
  end

  def user_params
    params.require(:user).permit(:name,:password)
  end



 

end
