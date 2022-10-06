class PlannersController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :not_found
before_action :set_planner, only: [:show, :update, :destroy]

    def index
        planners = Planner.all
        render json: planners, status: :ok
    end

    def show
        render json: @planner, status: :ok
    end

    def notes
        notes = User.find(session[:user_id]).planners
        render json: notes, status: :ok
    end

    def create
        planner = Planner.create!(planner_params)
        render json: planner, status: :created
    end

    def update
        render json: @planner.update!(planner_params), status: :accepted
    end

    def destroy
        @planner.destroy
        render json: {}, status: :no_content
    end
        
    private 

    def set_planner
        @planner = Planner.find(params[:id])
    end

    def planner_params
        params.permit(:notes, :user_id, :faire_id)
    end
    
    def not_found
        render json: {error: "Planner Notes Not Found. Please try again."}, status: :not_found
    end

    def render_invalid(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end
end
