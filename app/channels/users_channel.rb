class UsersChannel < ApplicationCable::Channel
  def subscribed
    stream_from 'users_channel'
    user = User.find(params[:id])
    user.update(login_status: true)
    ActionCable.server.broadcast("users_channel", user)
  end

  def unsubscribed
    stop_stream_from 'users_channel'
    user = User.find(params[:id])
    user.update(login_status: false)
    ActionCable.server.broadcast("users_channel", user)
  end
end
