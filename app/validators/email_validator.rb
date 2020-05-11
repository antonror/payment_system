class EmailValidator < ActiveModel::EachValidator
  PATTERN = /\A.+@.+\z/.freeze

  def validate_each(record, attribute, value)
    unless PATTERN.match?(value)
      record.errors.add(attribute, :invalid_pattern)
    end
  end
end
