class DeleteTransactionWorker
  include Sidekiq::Worker

  def perform
    Transaction.where('created_at < ?', Time.now - 1.hour).find_each do |ransaction|
      transaction.destroy rescue next
    end
  end
end
