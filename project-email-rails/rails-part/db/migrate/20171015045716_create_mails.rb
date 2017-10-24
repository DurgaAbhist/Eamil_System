class CreateMails < ActiveRecord::Migration[5.1]
  def change
    create_table :mails do |t|
      t.string :name
      t.string :imagePath
      t.string :descriptionHeader
      t.string :description
      t.string :badge
      t.boolean :starred
      t.boolean :important

      t.timestamps
    end
  end
end
