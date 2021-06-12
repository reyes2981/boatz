class OwnerRegistrationsController < ApplicationController
  def create
    owner = Owner.create!(email: params[:owner][:email],
                        password: params[:owner][:password])
    if owner
      session[:owner_id] = owner.id
      render json: {
        status: :created,
        owner: owner
      }, except: %i[password_digest created_at updated_at]
    else
      render json: { status: 422 }
    end
  end
end