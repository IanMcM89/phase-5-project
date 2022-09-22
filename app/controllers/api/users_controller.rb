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

    render json: users.to_json(only: [:id, :username, :login_status])
  end

  # GET /me
  def show
    render json: @current_user
  end

  #PATCH /me
  def attach_avatar
    @current_user.avatar.attach(params[:avatar])
    render json: @current_user
  end

  # POST /signup
  def create
    user = User.create!(user_params)
    session[:user_id] = user.id
    render json: user, status: :created
  end

  private

  def user_params
    params.permit(:username, :password, :password_confirmation, :avatar).select {|x,v| v.present?}
  end
end
