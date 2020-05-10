module ApplicationHelper

  def bootstrap_class_for flash_type
    case flash_type.to_sym

    when :success
      "alert-success"
    when :error
      "alert-danger"
    when :notice
      "alert-info"
    when :alert
      "alert-danger"
    when :warning
      "alert-warning"
    else
      "alert-#{flash_type.to_s}"
    end
  end
end
