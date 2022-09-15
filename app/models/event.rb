class Event < ApplicationRecord
  belongs_to :user
  
  validates :title, :date, :time, :description, presence: true

  def date
    if attributes['date'] then attributes['date'].strftime("%m/%d/%Y")
    end
  end

  def time
    if attributes['time'] then attributes['time'].strftime("%H:%M")
    end
  end
end
