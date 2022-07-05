class Friendship < ApplicationRecord
  belongs_to :user
  belongs_to :friend, class_name: 'User'

  after_create :create_inverse, unless: :has_inverse?
  after_destroy :destroy_inverse, if: :has_inverse?

  validate :befriending_self?
  validate :already_friends?

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
end
