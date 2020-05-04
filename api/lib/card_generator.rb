class CardGenerator
    # We want a 5 by 5 grid of random clips
    # Need a free space (optional?)
    # Organize by colum (B I N G O)
    def generate(game)
        # Take 24 random clips (25 - 1 free)
        randomClips = game.category.clips.shuffle.take(25)
        card = {
            b: [randomClips[0], randomClips[1], randomClips[2], randomClips[3], randomClips[4]],
            i: [randomClips[5], randomClips[6], randomClips[7], randomClips[8], randomClips[9]],
            n: [randomClips[10], randomClips[11], nil, randomClips[12], randomClips[13]],
            g: [randomClips[14], randomClips[15], randomClips[16], randomClips[17], randomClips[18]],
            o: [randomClips[19], randomClips[20], randomClips[21], randomClips[23], randomClips[24]]
        }
    end
end
