require 'rails_helper'

RSpec.describe Api::V1::TransactionsController do
  let(:user) { create :user }
  let(:admin) { create :user, :admin, email: 'admin@test.com' }
  let(:transaction1) { create :transaction, user: user }
  let(:transaction2) { create :transaction, user: admin }

  describe 'when merchant sign in' do
    before do
      sign_in user
    end

    context 'GET #index' do

      it '#request end with status :ok' do
        get :index, params: {format: 'json'}
        expect(response).to have_http_status(:ok)
        # expect(assigns(:transactions)).to eq([transaction1])
      end
    end
  end

  describe 'when admin sign in' do
    before do
      sign_in admin
    end

    context 'GET #index' do

      it '#request end with status :ok' do
        get :index, params: {format: 'json'}
        expect(response).to have_http_status(:ok)
        # expect(assigns(:transactions)).to eq([transaction1, transaction2])
      end
    end
  end
end
