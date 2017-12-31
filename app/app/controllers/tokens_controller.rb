class TokensController < ApplicationController
  def create
  
  user = User.find_by(username: params[:username])

   if user&.authenticate(params[:password])
    # session[:user_id] = user.id
    #   byebug
    #  render json:user
    #  byebug
    render json: {
       jwt: encode_token({id: user.id, username: user.username})
    }
     else
     head :not_found
     end
  end


  private

   def encode_token(payload = {})
     exp= 24.hours.from_now
     payload[:exp] = exp.to_i
     JWT.encode(payload, Rails.application.secrets.secret_key_base)

   end

   def decode_token(token)
   JWT.decode(token, Rails.application.secrets.secret_key_base)
  end

end
