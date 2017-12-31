class UsersController < ApplicationController
  def create
    input = params.require(:user).permit(:username, :password)
    User.create(input)
  end


  def index
    @user = User.new
  end
end
