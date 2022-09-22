class UserSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  default_url_options[:host] = 'localhost:3000'
  attributes :id, :username, :avatar, :login_status

  has_many :friends
  has_many :pending_friends
  has_many :events

  def avatar
    if object.avatar.attached?
      {url: rails_blob_url(object.avatar)}
    end
  end
end
