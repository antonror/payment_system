require 'faker'

User.where(email: 'admin@paymentsystem.com').first_or_create!(name: Faker::Name.name,
                                                              description: Faker::Quote.famous_last_words,
                                                              role: 'admin',
                                                              password: 'Admin@123',
                                                              password_confirmation: 'Admin@123')

User.where(email: 'merchant1@paymentsystem.com').first_or_create!(name: Faker::Name.name,
                                                              description: Faker::Quote.yoda,
                                                              role: 'merchant',
                                                              password: 'Merchant@123',
                                                              password_confirmation: 'Merchant@123')

User.where(email: 'merchant2@paymentsystem.com').first_or_create!(name: Faker::Name.name,
                                                              description: Faker::Quote.robin,
                                                              role: 'merchant',
                                                              password: 'Merchant@123',
                                                              password_confirmation: 'Merchant@123')