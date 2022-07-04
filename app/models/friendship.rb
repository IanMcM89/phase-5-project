class Friendship < ApplicationRecord
  belongs_to :user
  belongs_to :friend, class_name: 'User'

  after_create :create_inverse, unless: :has_inverse?
  after_destroy :destroy_inverse, if: :has_inverse?

  validate :not_self
  # validate :not_friends
  # validate :not_pending

  def create_inverse
    self.class.create(inverse_params)
  end

  def destroy_inverse
    self.class.where(inverse_params).destroy_all
  end

  def has_inverse?
    self.class.exists?(inverse_params)
  end

  def inverse_params
    {friend_id: user_id, user_id: friend_id}
  end

  private

  def not_self
    errors.add(:friend, "can't befriend self") if user == friend
  end

  def not_friends
    errors.add(:friend, "already exists") if user.friends.include?(friend)
  end

  def not_pending
    errors.add(:friend, "already requested") if user.pending_friends.include?(friend)
  end
end
