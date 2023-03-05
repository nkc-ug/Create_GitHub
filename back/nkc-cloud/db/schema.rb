ActiveRecord::Schema[7.0].define(version: 2023_02_20_004727) do
  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "password"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end
  
  create_table "posts", force: :cascade do |t|
    t.string "title"
    t.string "url"
    t.string "comment"
    t.date "date"
    t.string "file_name"
    t.string "key"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end
end

