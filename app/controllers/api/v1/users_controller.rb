class Api::V1::UsersController < Api::V1::BaseController
  before_action :set_merchant, only: [:update, :destroy]

  def index
    @merchants = User.merchants
  end

  def check_for_user
    @user = current_user
  end

  def update
    @merchant.update(user_params) if @merchant
  end

  def destroy
    @merchant.destroy if @merchant
  end

  private

  def set_merchant
    @merchant = User.merchants.find(params[:id]) if current_user.admin?
  end

  def user_params
    params.require(:user).permit(:status)
  end
end
