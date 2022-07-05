class ApplicationRecord < ActiveRecord::Base
  self.abstract_class = true

  private

  def befriending_self?
    errors.add(:friend, "can't befriend self") if user == friend
  end

  def already_friends?
    errors.add(:friend, "already added") if user.friends.include?(friend)
  end

  def already_requested?
    errors.add(:friend, "already requested") if user.pending_friends.include?(friend)
  end

  def already_pending?
    errors.add(:friend, "is pending") if friend && friend.pending_friends.include?(user)
  end
end
