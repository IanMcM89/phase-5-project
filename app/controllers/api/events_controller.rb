class Api::EventsController < ApplicationController
  skip_before_action :authorize, only: :create
  before_action :find_event, except: [:index, :index_friends, :create]

  def index
    events = []

    @current_user.events.each do |event|
      events << event
    end

    @current_user.friends.each do |friend|
      if friend.events != []
        Event.where(user_id: friend.id).each do |event|
          events << event
        end
      end
    end

    render json: events
  end

  def show
    render json: @event
  end

  def create
    event = Event.create!(event_params)
    render json: event, status: :created
  end

  def destroy
    @event.destroy
    head :no_content
  end

  private

  def event_params
    params.permit(:user_id, :title, :location, :address, :rating, :date, :time, :description, :lat, :lng)
  end

  def find_event
    @event = Event.find(params[:id])
  rescue ActiveRecord::RecordNotFound
    render json: "Event not found", status: :not_found
  end
end
