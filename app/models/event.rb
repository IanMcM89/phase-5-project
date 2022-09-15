class Event < ApplicationRecord
  belongs_to :user
  
  validates :title, :date, :time, :description, presence: true

  def date
    attributes['date'].strftime("%m/%d/%Y")
  end

  def time
    attributes['time'].strftime("%H:%M")
  end
end
