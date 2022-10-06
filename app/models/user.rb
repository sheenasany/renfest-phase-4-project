class User < ApplicationRecord
    has_many :planners, dependent: :destroy
    has_many :faires, through: :planners

    has_secure_password
end
