require 'rails_helper'

RSpec.describe ReversedTransaction do
  describe 'Associations' do
    it { should belong_to(:authorized_transaction) }
  end
end
