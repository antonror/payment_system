require 'csv'
namespace :import_users_from_csv do
  task create_users: :environment do
    # Please update the file path, with respect to your system/file. I tested this functionality and it works awesome!
    # The file is in the lib/task folder just update the path to check this functionality
    csv_text = File.read('/Users/projects/payment_system/lib/tasks/users.csv')
    csv = CSV.parse(csv_text, headers: true)
    csv.each do |row|
      User.create!(row.to_hash)
    end
  end
end
