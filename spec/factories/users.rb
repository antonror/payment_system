FactoryBot.define do
  factory :user do
    name        { 'Test' }
    description { 'This is testing phase' }
    email       { 'test@email.com' }
    password    { 'Admin@123' }
    password_confirmation { 'Admin@123' }
    role        { 'merchant' }
    status      { 'active' }
    total_transaction_sum  { 1000 }

    trait :admin do
      role    { 'admin' }
    end

    trait :inactive do
      status  { 'inactive' }
    end
  end
end
