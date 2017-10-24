class Mail < ApplicationRecord
   validates :name, presence: true
   validates :imagePath, presence: true
   validates :descriptionHeader, presence: true
   validates :description, presence: true
   validates :badge, presence: true
   validates :starred, presence: true
   validates :important, presence: true
end
