FactoryBot.define do
  factory :transaction do
    customer_email   { 'customer@test.com' }
    customer_phone   { '1(555)555-5555' }
    amount           { 100 }
    status           { 'authorized' }
    user             nil
    type             { 'AuthorizedTransaction' }

    trait :approved do
      status { 'approved' }
    end

    trait :refunded do
      status { 'refunded' }
    end

    trait :reversed do
      status { 'reversed' }
    end

    trait :error do
      status { 'error' }
      type nil
    end
  end
end
