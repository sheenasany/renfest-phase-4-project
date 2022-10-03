class SessionController < ApplicationController
    skip_before_action :authorize, only: :create

    def create
        user = User.find_by(username: params[:username])
        if user&.authenticate(params[:password]) #&. is a safe operator to not break your app if it can't find the user
            session[:user_id] = user.id
            render json: user
        else
            render json: {error: "Invalid password. Try again."}, status: :unauthorized
        end
    end

    def destroy
        session.destroy :user_id
        head :no_content
    end
end
