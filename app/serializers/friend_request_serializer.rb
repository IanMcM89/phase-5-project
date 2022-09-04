class FriendRequestSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :friend_id, :created_at

  has_one :user
  has_one :friend
end
