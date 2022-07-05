class UserSerializer < ActiveModel::Serializer
  attributes :id, :username

  has_many :friends
  has_many :pending_friends
end
