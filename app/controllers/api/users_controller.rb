class Api::UsersController < ApplicationController
  skip_before_action :authorize, only: :create

  # GET /users
  def index
    render json: User.all.to_json(only: [:id, :username])
  end

  # POST /signup
  def create
    user = User.create!(user_params)
    session[:user_id] = user.id
    render json: user, status: :created
  end

  # GET /me
  def show
    render json: @current_user
  end

  private

  def user_params
    params.permit(:username, :password, :password_confirmation)
  end
end
