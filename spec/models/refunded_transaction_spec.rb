require 'rails_helper'

RSpec.describe RefundedTransaction do
  describe 'Associations' do
    it { should belong_to(:charged_transaction) }
  end

  describe 'Validations' do
    context '#amount' do
      it { should_not allow_value(0).for(:amount) }
      it { should_not allow_value(-10).for(:amount) }
      it { should allow_value(100).for(:amount) }
    end
  end
end
