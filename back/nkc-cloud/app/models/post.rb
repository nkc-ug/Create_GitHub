class Post < ApplicationRecord
    validates :title,:date,:file_name, presence: true
end
