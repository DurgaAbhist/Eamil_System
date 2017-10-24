class MailsController < ApplicationController
#   before_action :set_post, only: [:show, :update, :destroy]

   def index
      @mails = Mail.all
      render json: @mails
   end

   def show
      render json: @mail
   end

   def create
     @mail = Mail.new(mail_params)

     if @mail.save
       render json: @mail, status: :created, location: @mail
     else
       render json: @mail.errors, status: :unprocessable_entity
     end
   end

   private

      def mail_params
         params.require(:mail).permit(:name, :imagePath, :descriptionHeader, :description, :badge, :starred, :important)
      end
end
