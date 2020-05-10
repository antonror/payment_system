class Api::V1::BaseController < ActionController::Base
  before_action :authenticate_user!
  skip_before_action :verify_authenticity_token

  respond_to :json
end
