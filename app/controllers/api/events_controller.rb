class Api::EventsController < ApplicationController
  skip_before_action :authorize, only: :create
  before_action :find_event, except: [:index, :create]

  def index
    render json: @current_user.events
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
    params.permit(:user_id, :title, :location, :address, :date, :time, :description, :lat, :lng)
  end

  def find_event
    @event = Event.find(params[:id])
  rescue ActiveRecord::RecordNotFound
    render json: "Event not found", status: :not_found
  end
end
