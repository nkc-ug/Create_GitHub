require 'rails_helper'

RSpec.describe Post, type: :model do

  before do
    @post = Post.create(
      title: "工学院の歴史",
      comment:  "工学院の歴史を書き出しました",
      date:      "2022-12-21",
      file_name:   "NKC-history.xlsx",
      key: "nkc"
    )
  end

  it "is valid with a first name, last name, email, and password" do
      post = Post.new(
        title: "Aaron",
        comment: "工学院にあるサークルです",
        date: "2022-03-09",
        file_name: "nkcug.xlsm"
    )
    expect(post).to be_valid
  end

  it "get /api/v1/posts index" do
    for num in 1..9 do
      post = Post.new(
        title: "Aaron#{num}",
        date: "2022-03-09",
        file_name: "nkcug.xlsm"
      )
      post.save
    end
    expect(Post.count).to eq(10)
  end
  it "get /api/v1/posts/1 show" do
      expect(Post.first.title).to eq("工学院の歴史")
  end
  it "post /api/v1/posts create" do
    post = Post.new(
      title: "nkc",
      date: "2022-03-09",
      file_name: "nkcug.xlsm",
      key: "pro"
    )
    post.save
    expect(post.title).to eq("nkc")
  end
  it "post /api/v1/posts nul検証" do
    post = Post.new(
      title: nil,
      date: nil,
      file_name: nil
    )
    post.valid?
    expect(post.errors[:title]).to include("can't be blank")
    expect(post.errors[:date]).to include("can't be blank")
    expect(post.errors[:file_name]).to include("can't be blank")
  end
  
  it "PUT /api/v1/posts/1 update" do
    post = Post.first
    post.title = "NKCUG"
    post.comment = "工学院にあるサークルです"
    post.date = "2022-03-09"
    post.file_name = "nkcug.xlsm"
    post.key = "pro"
    post.save
    expect(post.title).to eq("NKCUG")
  end
  it "PUT /api/v1/posts/1 nul検証" do
    post = Post.first
    post.title = nil
    post.file_name = nil
    post.date = nil
    post.save
    expect(post.errors[:title]).to include("can't be blank")
    expect(post.errors[:date]).to include("can't be blank")
    expect(post.errors[:file_name]).to include("can't be blank")
  end
  it "posts/1 set_post ユーザが選択したもののIDのデータを取り出す" do
    post = Post.first
    post.title = "NKCUG"
    expect(post.title).to eq("NKCUG")
  end
   # テストデータを1件削除
  it "destroy /api/v1/posts/1" do 
    expect do
        delete post_path(@post)
        expect(response.status).to eq(204)
    end
  end

  it "get posts/https://aaa.com/:url"

    it "get posts/https://aaa.com/:url/:key/download"

    it "post_params 許可するカラムを制限する" do
      post = Post.new(
        title: "nkc",
        url: "https://aaa.com/7eOGifb6ZcGlAPr4",
        comment: "工学院にあるサークルです",
        date: "2022-03-09",
        file_name: "nkcug.xlsm",
        key: "pro"
      )
    end
    it "exist 重複しないURLを生成する"
  end
