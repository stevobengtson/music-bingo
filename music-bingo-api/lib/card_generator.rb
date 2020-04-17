class CardGenerator
    def generate(game)
        game.category.clips.shuffle.take(25)
    end
end
