class User < ApplicationRecord

    validates :name, presence: true 
    validates :password, presence: true , uniqueness: true

    has_many :posts # usersが多,class_nameを指定しないとUserモデルと関連付けができていないといわれる
    
end
