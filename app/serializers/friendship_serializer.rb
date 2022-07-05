class FriendshipSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :friend_id

  has_one :user
  has_one :friend
end
