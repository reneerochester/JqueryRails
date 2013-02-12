class AddDescriptionTitleToPhotos < ActiveRecord::Migration
  def change
    add_column :photos, :description_title, :string

  end
end
