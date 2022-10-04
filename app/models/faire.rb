class Faire < ApplicationRecord
    has_many :planners
    has_many :users, through: :planners
end
