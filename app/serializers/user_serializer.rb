class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :login_status

  has_many :friends
  has_many :pending_friends
end
