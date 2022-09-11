class Event < ApplicationRecord
  belongs_to :user
  
  validates :title, :description, :date, :time, presence: true
end
