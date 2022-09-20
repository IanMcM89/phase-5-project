class Event < ApplicationRecord
  belongs_to :user
  
  validates :title, :date, :time, :description, presence: true
  validates :description, length: { maximum: 500,
  too_long: "500 characters maximum" }

  def date
    if attributes['date'] then attributes['date'].strftime("%m/%d/%Y")
    end
  end

  def time
    if attributes['time'] then attributes['time'].strftime("%I:%M %p")
    end
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
