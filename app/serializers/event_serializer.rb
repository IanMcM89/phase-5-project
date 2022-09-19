class EventSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :title, :location, :address, :rating, :date, :time, :description, :lat, :lng

  belongs_to :user
end
