class Api::FriendsController < ApplicationController
  before_action :find_friend, except: :index

  def index
    render json: @current_user.friends.to_json(only: [:id, :username])
  end

  def show
    render json: @friend.to_json(only: [:id, :username])
  end

  private

  def find_friend
    @friend = @current_user.friends.find(params[:id])
  rescue ActiveRecord::RecordNotFound
    render json: "Friend not found", status: :not_found
  end
end
