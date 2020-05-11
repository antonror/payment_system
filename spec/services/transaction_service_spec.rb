require 'rails_helper'

RSpec.describe TransactionService do
  describe '#call' do
    let(:user) { create :user }
    let(:valid_data) {
      { amount: 200, customer_email: 'test@test.com', customer_phone: '1555-555-555', status: 'authorized' }
    }
    let(:invalid_data) {
      { amount: nil, customer_email: 'wrong_@.com', customer_phone: 'error', status: 'wrong_status'}
    }

    it 'returns success Struct with valid params' do
      service = described_class.call(user: user, amount_present: true, data: valid_data)
      expect(service.success?).to be_truthy
    end

    it 'returns failed Struct with invalid params' do
      service = described_class.call(user: user, amount_present: true, data: invalid_data)
      expect(service.success?).to be_falsey
    end
  end
end
