class DropSnaps < ActiveRecord::Migration[7.0] # La versión puede variar
  def up
    drop_table :snaps
  end

  def down
    create_table :snaps do |t|
      t.string :title
      t.text :color
      t.timestamps
      t.timestamps
    end
  end
end
