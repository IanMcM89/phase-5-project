class Api::FriendshipsController < ApplicationController
  before_action :find_friendship, except: :index

  def index
    render json: @current_user.friendships
  end

  def show
    render json: @friendship
  end

  def destroy
    @friendship.destroy
    head :no_content
  end

  private

  def find_friendship
    @friendship = Friendship.find(params[:id])
  rescue ActiveRecord::RecordNotFound
    render json: "Friendship not found", status: :not_found
  end
end