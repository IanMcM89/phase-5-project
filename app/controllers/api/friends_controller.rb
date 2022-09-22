class Api::FriendsController < ApplicationController
  before_action :find_friend, except: :index

  def index
    render json: @current_user.friends, include: [:id, :username, :avatar, :login_status]
  end

  def show
    render json: @friend, include: [:id, :username, :avatar, :login_status]
  end

  def destroy
    friendship = Friendship.find_by(friend: @friend)
    friendship.destroy
    head :no_content
  end

  private

  def find_friend
    @friend = @current_user.friends.find(params[:id])
  rescue ActiveRecord::RecordNotFound
    render json: "Friend not found", status: :not_found
  end
end
