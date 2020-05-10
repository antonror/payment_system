class Api::V1::UsersController < Api::V1::BaseController

  def index
    @merchants = User.merchants
  end

  def check_for_user
    @user = current_user
  end
end
