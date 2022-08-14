class Api::UsersController < ApplicationController
  skip_before_action :authorize, only: :create

  # GET /users
  def index
    users = []

    User.all.each do |user|
      friends = @current_user.friends.include?(user)
      pending = @current_user.pending_friends.include?(user)
      me = @current_user == user

      if !friends && !pending && !me
        users << user
      end
    end

    render json: users.to_json(only: [:id, :username])
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
