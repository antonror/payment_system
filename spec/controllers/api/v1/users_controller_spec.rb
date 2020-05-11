require 'rails_helper'

RSpec.describe Api::V1::UsersController do
  let(:user) { create :user }
  let(:admin) { create :user, :admin, email: 'admin@test.com' }

  describe 'when merchant sign in' do
    before do
      sign_in user
    end

    context 'GET #index' do

      it '#request end with status :ok' do
        get :index, params: {format: 'json'}
        expect(response).to have_http_status(:ok)
      end
    end

    context 'GET #check_for_user' do

      it '#request end with status :ok' do
        get :check_for_user, params: {format: 'json'}
        expect(response).to have_http_status(:ok)
        expect(assigns(:user)).to eq(user)
      end
    end

    context 'GET #update' do

      it '#request end with status :no_content' do
        patch :update, params: {id: user.id, format: 'json'}
        expect(response).to have_http_status(:no_content)
      end
    end

    context 'GET #destroy' do

      it '#request end with status :no_content' do
        delete :destroy, params: {id: user.id, format: 'json'}
        expect(response).to have_http_status(:no_content)
      end
    end
  end

  describe 'when admin sign in' do
    before do
      sign_in admin
    end

    context 'GET #update' do

      it '#request end with status :ok' do
        patch :update, params: {id: user.id, user: {status: 'inactive'}, format: 'json'}
        expect(user.reload.status).to eq('inactive')
      end
    end

    context 'GET #destroy' do

      it '#request end with status :ok' do
        delete :destroy, params: {id: user.id, format: 'json'}
        expect(user.reload.deleted_at).not_to be_nil
      end
    end
  end
end
