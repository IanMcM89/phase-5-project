class User < ApplicationRecord
  has_many :friendships
  has_many :friends, through: :friendships, dependent: :destroy
  has_many :friend_requests, dependent: :destroy
  has_many :pending_friends, through: :friend_requests, source: :friend

  has_secure_password

  validates :username, presence: true, uniqueness: true
end
