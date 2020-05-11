require 'rails_helper'

RSpec.describe Transaction do
  describe 'Associations' do
    it { should belong_to(:user) }
  end

  describe 'Validations' do
    context '#customer_email' do
      it { should validate_presence_of(:customer_email) }
      it { should_not allow_value('blah').for(:customer_email) }
      it { should_not allow_value('.blah').for(:customer_email) }
      it { should_not allow_value('@.blah').for(:customer_email) }
      it { should allow_value('test@email.com').for(:customer_email) }
    end

    context '#customer_phone' do
      it { should validate_presence_of(:customer_phone) }
    end
  end
end
