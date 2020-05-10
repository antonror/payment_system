json.transactions @transactions do |transaction|
  json.id transaction.id
  json.amount transaction.amount
  json.customer_email transaction.customer_email
  json.status transaction.status
  json.type transaction.type
  json.created_at display_date(transaction.created_at)
end
