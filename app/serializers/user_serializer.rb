class UserSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  attributes :id, :username, :avatar, :login_status

  has_many :friends
  has_many :pending_friends
  has_many :events

  def avatar
    if object.avatar.attached?
      Cloudinary::Utils.cloudinary_url(object.avatar.key)
    end
  end
end
