class SessionsController < ApplicationController
  include CurrentUserConcern

  def create
    owner = Owner.find_by(email: params[:owner][:email]).try(:authenticate, params[:owner][:password])
    renter = Renter.find_by(email: params[:renter][:email]).try(:authenticate, params[:renter][:password])
    if owner
      session[:owner_id] = owner.id
      render json: {
        status: :created,
        logged_in: true,
        owner: owner
      }, except: %i[password_digest created_at updated_at]
    elsif renter
      session[:renter_id] = owner.id
      render json: {
        status: :created,
        logged_in: true,
        renter: renter
      }, except: %i[password_digest created_at updated_at]
    else
      render json: { status: 401 }
    end

  end

  def logged_in
    if @current_user
      render json: {
        logged_in: true,
        user: @current_user
      }, except: %i[password_digest created_at updated_at]
    else
      render json: {
        logged_in: false
      }
    end
  end

  def logout
    reset_session
    render json: { status: 200, logged_out: true }
  end
  
end