class FriendRequest < ApplicationRecord
  belongs_to :user
  belongs_to :friend, class_name: 'User'

  validate :befriending_self?
  validate :already_friends?
  validate :already_requested?
  validate :already_pending?

  def accept
    user.friends << friend
    destroy
  end

  def created_at
    attributes['created_at'].strftime("%m/%d/%Y %H:%M")
  end
end
