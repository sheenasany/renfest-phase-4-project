class Faire < ApplicationRecord
    has_many :planners, dependent: :destroy
    has_many :users, through: :planners

    
end
