class Event < ApplicationRecord
  belongs_to :user
  
  validates :title, :date, :time, :description, presence: true
  validates :description, length: { maximum: 500,
  too_long: "500 characters maximum" }

  def date
    attributes['date'].strftime("%m/%d/%Y")
  end

  def time
    attributes['time'].strftime("%I:%M %p")
  end

  def rating
    attributes['rating'].to_f
  end

  def lat
    attributes['lat'].to_f
  end

  def lng
    attributes['lng'].to_f
  end
end
