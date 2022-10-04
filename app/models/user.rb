class User < ApplicationRecord
    has_many :planners
    has_many :faires, through: :planners

    has_secure_password
end
