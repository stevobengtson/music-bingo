class Game < ApplicationRecord
    before_create :generate_key
    belongs_to :category

    private
    def generate_key
        charset = ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'M', 'P', 'Q', 'R', 'T', 'V', 'W', 'X', 'Y', '2', '3', '4', '6', '7', '8', '9']
        self.key = Array.new(8) { charset.sample }.join
    end
end
