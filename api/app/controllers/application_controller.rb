class ApplicationController < ActionController::API
    DeviseTokenAuth::Concerns::SetUserByToken
    respond_to :json
end
