require 'rails_helper'

RSpec.describe User do
  describe 'Associations' do
    it { should have_many(:transactions) }
    it { should have_many(:charged_transactions) }
    it { should have_many(:refunded_transactions) }
    it { should have_many(:reversed_transactions) }
    it { should have_many(:authorized_transactions) }
  end
end
