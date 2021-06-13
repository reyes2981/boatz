module CurrentUserConcern
  extend ActiveSupport::Concern

  included do
    before_action :set_current_user
  end

  def set_current_user
    if session[:owner_id]
      @current_user = Owner.find(session[:owner_id]) 
      @owner = 'IS_OWNER'
    elsif session[:renter_id]
      @current_user = Owner.find(session[:renter_id])
      @owner = 'NOT_OWNER'
    end
  end
end