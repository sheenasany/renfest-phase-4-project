class AddIsFavoritedToFaires < ActiveRecord::Migration[7.0]
  def change
    add_column :faires, :isFavorited, :boolean
  end
end
