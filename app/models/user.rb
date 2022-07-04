class User < ApplicationRecord
  has_many :friendships, -> {where(status: true)}
  has_many :friends, through: :friendships, dependent: :destroy
  has_many :friend_requests, -> {where(status: false)}, class_name: 'Friendship'
  has_many :pending_friends, through: :friend_requests, source: :friend

  has_secure_password

  validates :username, presence: true, uniqueness: true

  def friend_request(user)
    self.pending_friends << user
  end

  def accept(user)
    friendships = []
    friendships << find_friendship(self, user)
    friendships << find_friendship(user, self)
    friendships.each do |f|
      f.update(status: true)
    end
  end

  def unfriend(user)
    friendship = find_friendship(self, user)
    friendship.destroy_all
  end

  def find_friendship(user_a, user_b)
    Friendship.where(user: user_a, friend: user_b)
  end

  def has_friend?
    Friendship.exists?({friend_id: user_id, user_id: friend_id})
  end
end
