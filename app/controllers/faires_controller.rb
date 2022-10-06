class FairesController < ApplicationController
skip_before_action :authorize, only: [:index, :show,]
# before_action :set_faire, only: [:show]
rescue_from ActiveRecord::RecordNotFound, with: :not_found

    def index
        # user = User.find_by(id: session[:user_id])
        # faires = user.faires.uniq
        faires = Faire.all
        render json: faires, status: :ok
    end

    def show
        faire = Faire.find(params[:id])
        render json: faire, status: :ok
    end

    private

    # def set_faire
    #     @faire = Faires.find(params[:id])
    # end

    def not_found
        render json: {error: "Sorry, faire does not exist. Try again."}, status: :not_found
    end
end
