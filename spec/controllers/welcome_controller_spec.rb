require 'rails_helper'

RSpec.describe WelcomeController do
  let(:user) { create :user }

  describe 'GET #app' do
    context 'when user sign in' do
      before do
        sign_in user
      end
      it '#show the main page with status :ok' do
        get :app
        expect(response).to have_http_status(:ok)
      end
    end

    context 'when user not sign in' do

      it '#request end with status :found' do
        get :app
        expect(response).to have_http_status(:found)
      end
    end
  end
end
