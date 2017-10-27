module ApplicationHelper
  def auth_token
    token_string = "<input "
    token_string += 'type="hidden" '
    token_string += 'name="authenticity_token" '
    token_string += "value=\"#{form_authenticity_token}\""
    token_string.html_safe
  end
end
