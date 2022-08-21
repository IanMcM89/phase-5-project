class Api::PendingFriendsController < ApplicationController
  before_action :find_pending_friend, except: :index

  def index
    render json: @current_user.pending_friends.to_json(only: [:id, :username, :login_status])
  end

  def show
    render json: @pending_friend.to_json(only: [:id, :username, :login_status])
  end

  private

  def find_pending_friend
    @pending_friend = @current_user.pending_friends.find(params[:id])
  rescue ActiveRecord::RecordNotFound
    render json: "Pending friend not found", status: :not_found
  end
end
