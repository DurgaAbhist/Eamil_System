class MailSerializer < ActiveModel::Serializer
  attributes :name, :imagePath, :descriptionHeader, :description, :badge, :starred, :important
end
