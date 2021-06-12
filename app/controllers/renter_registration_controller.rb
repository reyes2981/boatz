class RenterRegistrationsController < ApplicationController
  def create
    renter = Renter.create!(email: params[:renter][:email],
                        password: params[:renter][:password], 
                        password_confirmation: params[:renter][:password_confirmation])
    if renter
      session[:renter_id] = renter.id
      render json: {
        status: :created,
        renter: renter
      }, except: %i[password_digest created_at updated_at]
    else
      render json: { status: 422 }
    end
  end
end