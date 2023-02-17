class CreatePosts < ActiveRecord::Migration[7.0]
  def change
    create_table :posts do |t|
      t.string :title
      t.string :url
      t.string :comment
      t.date :date
      t.string :file_name
      t.string :key

      t.timestamps
    end
  end
end
