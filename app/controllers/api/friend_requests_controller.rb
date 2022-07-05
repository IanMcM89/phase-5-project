class Api::FriendRequestsController < ApplicationController
  skip_before_action :authorize, only: :create
  before_action :find_friend_request, except: [:index, :create]

  def index
    render json: FriendRequest.where(friend: @current_user)
  end

  def show
    render json: @friend_request
  end

  def create
    friend_request = FriendRequest.create!(friend_request_params)
    render json: friend_request, status: :created
  end

  def update
    @friend_request.accept
    head :no_content
  end

  def destroy
    @friend_request.destroy
    head :no_content
  end

  private

  def friend_request_params
    params.permit(:user_id, :friend_id)
  end

  def find_friend_request
    @friend_request = FriendRequest.find(params[:id])
  rescue ActiveRecord::RecordNotFound
    render json: "Friend request not found", status: :not_found
  end
end
