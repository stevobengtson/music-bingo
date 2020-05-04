# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'

# Clean out existing data
require 'database_cleaner'
DatabaseCleaner.clean_with(:truncation)

# Setup the 80s Category and Clips
category80 = Category.new(name: '80s')
category80.clips = Clip.create([
    { artist: 'A-ha', name: 'Take On Me', start: 60, length: 30, location: 'clips/80s/A-ha - Take On Me.mp3' },
    { artist: 'Asia', name: 'Heat Of The Moment', start: 60, length: 30, location: 'clips/80s/Asia - Heat Of The Moment.mp3' },
    { artist: 'B-52s', name: 'Love Shack', start: 60, length: 30, location: 'clips/80s/B-52s - Love Shack.mp3' },
    { artist: 'Blondie', name: 'Call Me', start: 60, length: 30, location: 'clips/80s/Blondie - Call Me.mp3' },
    { artist: 'Bobby Brown', name: 'My Prerogative', start: 60, length: 30, location: 'clips/80s/Bobby Brown - My Prerogative.mp3' },
    { artist: 'Bruce Springsteen', name: 'Dancing in the Dark', start: 60, length: 30, location: 'clips/80s/Bruce Springsteen - Dancing in the Dark.mp3' },
    { artist: 'Chilliwack', name: 'My Girl', start: 60, length: 30, location: 'clips/80s/Chilliwack - My Girl.mp3' },
    { artist: 'Corey Hart', name: 'Sunglasses At Night', start: 60, length: 30, location: 'clips/80s/Corey Hart - Sunglasses At Night.mp3' },
    { artist: 'Culture Club', name: 'Karma Chameleon', start: 60, length: 30, location: 'clips/80s/Culture Club - Karma Chameleon.mp3' },
    { artist: 'Daryl Hall and John Oates', name: 'I Can\'t Go for That (No Can Do)', start: 60, length: 30, location: 'clips/80s/Daryl Hall and John Oates - I Can\'t Go for That (No Can Do).mp3' },
    { artist: 'Def Leppard', name: 'Pour Some Sugar on Me', start: 60, length: 30, location: 'clips/80s/Def Leppard - Pour Some Sugar on Me.mp3' },
    { artist: 'Depeche Mode', name: 'Just Can\'t Get Enough', start: 60, length: 30, location: 'clips/80s/Depeche Mode - Just Can\'t Get Enough.mp3' },
    { artist: 'Dexy\'s Midnight Runners', name: 'Come On Eileen', start: 60, length: 30, location: 'clips/80s/Dexy\'s Midnight Runners - Come On Eileen.mp3' },
    { artist: 'Druan Duran', name: 'Hungry like a wolf', start: 60, length: 30, location: 'clips/80s/Druan Duran - Hungry like a wolf.mp3' },
    { artist: 'Eddie Money', name: 'Take Me Home Tonight', start: 60, length: 30, location: 'clips/80s/Eddie Money - Take Me Home Tonight.mp3' },
    { artist: 'Eurythmics', name: 'Sweet Dreams (Are Made of This)', start: 60, length: 30, location: 'clips/80s/Eurythmics - Sweet Dreams (Are Made of This).mp3' },
    { artist: 'Fine Young Cannibals', name: 'She Drives Me Crazy', start: 60, length: 30, location: 'clips/80s/Fine Young Cannibals - She Drives Me Crazy.mp3' },
    { artist: 'George Michael', name: 'Faith', start: 60, length: 30, location: 'clips/80s/George Michael - Faith.mp3' },
    { artist: 'John Mellencamp', name: 'Jack And Diane', start: 60, length: 30, location: 'clips/80s/John Mellencamp - Jack And Diane.mp3' },
    { artist: 'Journey', name: 'Don\'t Stop Believin\'', start: 60, length: 30, location: 'clips/80s/Journey - Don\'t Stop Believin\'.mp3' },
    { artist: 'Katrina', name: 'Walking On Sunshine', start: 60, length: 30, location: 'clips/80s/Katrina - Walking On Sunshine.mp3' },
    { artist: 'Kenny Loggins', name: 'Footloose', start: 60, length: 30, location: 'clips/80s/Kenny Loggins - Footloose.mp3' },
    { artist: 'Laid Back', name: 'Whitehorse', start: 60, length: 30, location: 'clips/80s/Laid Back - Whitehorse.mp3' },
    { artist: 'Lionel Ritchie', name: 'All Night Long', start: 60, length: 30, location: 'clips/80s/Lionel Ritchie - All Night Long.mp3' },
    { artist: 'Madonna', name: 'Like A Virgin', start: 60, length: 30, location: 'clips/80s/Madonna - Like A Virgin.mp3' },
    { artist: 'Men Without Hats', name: 'Safety Dance', start: 60, length: 30, location: 'clips/80s/Men Without Hats - Safety Dance.mp3' },
    { artist: 'Men at Work', name: 'Down Under', start: 60, length: 30, location: 'clips/80s/Men at Work - Down Under.mp3' },
    { artist: 'Michael Jackson', name: 'Billie Jean', start: 60, length: 30, location: 'clips/80s/Michael Jackson - Billie Jean.mp3' },
    { artist: 'Pat Benatar', name: 'Love Is A Battle Field', start: 60, length: 30, location: 'clips/80s/Pat Benatar - Love Is A Battle Field.mp3' },
    { artist: 'Police', name: 'Every Breath You Take', start: 60, length: 30, location: 'clips/80s/Police - Every Breath You Take.mp3' },
    { artist: 'Prince', name: '1999', start: 60, length: 30, location: 'clips/80s/Prince-1999.mp3' },
    { artist: 'REO Speedwagon', name: 'Keep on Loving You', start: 60, length: 30, location: 'clips/80s/REO Speedwagon - Keep on Loving You.mp3' },
    { artist: 'Rick James', name: 'Super Freak', start: 60, length: 30, location: 'clips/80s/Rick James - Super Freak.mp3' },
    { artist: 'Rick Springfield', name: 'Jessie s Girl', start: 60, length: 30, location: 'clips/80s/Rick Springfield - Jessie s Girl.mp3' },
    { artist: 'Robert Palmer', name: 'Addicted to Love', start: 60, length: 30, location: 'clips/80s/Robert Palmer - Addicted to Love.MP3' },
    { artist: 'Survivor', name: 'Eye of the tiger', start: 60, length: 30, location: 'clips/80s/Survivor - Eye of the tiger.mp3' },
    { artist: 'Thomas Dolby', name: 'She Blinded Me With Science', start: 60, length: 30, location: 'clips/80s/Thomas Dolby - She Blinded Me With Science.mp3' },
    { artist: 'Toto', name: 'Africa', start: 60, length: 30, location: 'clips/80s/Toto - Africa.mp3' },
    { artist: 'Wham!', name: 'Wake Me Up Before You Go-Go', start: 60, length: 30, location: 'clips/80s/Wham! - Wake Me Up Before You Go-Go.mp3' },
    { artist: 'Whitney Houston', name: 'I Wanna Dance With Somebody', start: 60, length: 30, location: 'clips/80s/Whitney Houston - I Wanna Dance With Somebody.mp3' }
])
category80.save

# Setup the 90s Category and Clips
category90 = Category.new(name: '90s')
category90.clips = Clip.create([
    { artist: 'Britney Spears', name: '...Baby One More Time', start: 0, length: 30, location: 'clips/90s/001. Britney Spears - ...Baby One More Time.mp3' },
    { artist: 'Naughty By Nature', name: 'O.P.P. (1991)', start: 0, length: 30, location: 'clips/90s/013 - Naughty By Nature - O.P.P. (1991).mp3' },
    { artist: 'blink-182', name: 'All The Small Things', start: 0, length: 30, location: 'clips/90s/018. blink-182 - All The Small Things.mp3' },
    { artist: 'Sheryl Crow', name: 'If It Makes You Happy', start: 0, length: 30, location: 'clips/90s/024 - Sheryl Crow - If It Makes You Happy.mp3' },
    { artist: 'Weezer', name: 'Buddy Holly', start: 0, length: 30, location: 'clips/90s/032. Weezer - Buddy Holly.mp3' },
    { artist: 'AC DC', name: 'Thunderstruck', start: 0, length: 30, location: 'clips/90s/044 - AC DC - Thunderstruck.mp3' },
    { artist: 'Cher', name: 'Believe', start: 0, length: 30, location: 'clips/90s/09. Cher - Believe.mp3' },
    { artist: 'Black Velvet', name: 'Alannah Myles', start: 0, length: 30, location: 'clips/90s/10 - Black Velvet - Alannah Myles.mp3' },
    { artist: 'Snow', name: 'Informer', start: 0, length: 30, location: 'clips/90s/21. Snow - Informer.mp3' },
    { artist: 'Blind Melon', name: 'No Rain', start: 0, length: 30, location: 'clips/90s/26 Blind Melon - No Rain.mp3' },
    { artist: 'Beck', name: 'Loser', start: 0, length: 30, location: 'clips/90s/28 Beck - Loser.mp3' },
    { artist: 'Barenaked Ladies', name: 'One Week', start: 0, length: 30, location: 'clips/90s/52. Barenaked Ladies - One Week.mp3' },
    { artist: 'The Offspring', name: 'Self Esteem', start: 0, length: 30, location: 'clips/90s/57 The Offspring - Self Esteem.mp3' },
    { artist: 'Ace of Base', name: 'All That She Wants (Official Music Video)', start: 0, length: 30, location: 'clips/90s/Ace of Base - All That She Wants (Official Music Video).mp3' },
    { artist: 'Alanis Morissette', name: 'Hand In My Pocket [HD]', start: 0, length: 30, location: 'clips/90s/Alanis Morissette - Hand In My Pocket [HD].mp3' },
    { artist: 'All Star', name: 'Smash Mouth', start: 0, length: 30, location: 'clips/90s/All Star - Smash Mouth.mp3' },
    { artist: 'Blackstreet ft. Dr. Dre, Queen Pen', name: 'No Diggity (Official Video)', start: 0, length: 30, location: 'clips/90s/Blackstreet ft. Dr. Dre, Queen Pen - No Diggity (Official Video).mp3' },
    { artist: 'Coolio', name: 'Gangsters Paradise (Official On Screen)', start: 0, length: 30, location: 'clips/90s/Coolio - Gangsters Paradise (Official On Screen).mp3' },
    { artist: 'Fatboy Slim', name: 'Praise You [Official Video]', start: 0, length: 30, location: 'clips/90s/Fatboy Slim - Praise You [Official Video].mp3' },
    { artist: 'Gin Blossoms', name: 'Hey Jealousy', start: 0, length: 30, location: 'clips/90s/Gin Blossoms - Hey Jealousy.mp3' },
    { artist: 'C&C Music Factory', name: 'Gonna Make You Sweat (Everybody Dance Now)', start: 0, length: 30, location: 'clips/90s/Gonna Make You Sweat (Everybody Dance Now).mp3' },
    { artist: 'Hello Time Bomb', name: 'Matthew Good Band', start: 0, length: 30, location: 'clips/90s/Hello Time Bomb - Matthew Good Band.mp3' },
    { artist: 'House Of Pain', name: 'Jump Around (Official)', start: 0, length: 30, location: 'clips/90s/House Of Pain - Jump Around (Official).mp3' },
    { artist: 'Beastie Boys', name: 'Intergalactic', start: 0, length: 30, location: 'clips/90s/Intergalactic Beastie Boys.mp3' },
    { artist: 'LEN', name: 'Steal My Sunshine', start: 0, length: 30, location: 'clips/90s/LEN - Steal My Sunshine.mp3' },
    { artist: 'Ricky Martin', name: 'Livin\' la Vida Loca', start: 0, length: 30, location: 'clips/90s/Livin\' la Vida Loca.mp3' },
    { artist: 'No Doubt', name: 'Just A Girl', start: 0, length: 30, location: 'clips/90s/NO DOUBT for Just A Girl (onscreen text).mp3' },
    { artist: 'TLC', name: 'No Scrubs', start: 0, length: 30, location: 'clips/90s/No Scrubs.mp3' },
    { artist: 'OMC', name: 'How Bizarre', start: 0, length: 30, location: 'clips/90s/OMC - How Bizarre.mp3' },
    { artist: 'Salt-N-Pepa', name: 'Whatta Man (feat. En Vogue)', start: 0, length: 30, location: 'clips/90s/Salt-N-Pepa - Whatta Man (feat. En Vogue).mp3' },
    { artist: 'Sir Mix A Lot - Baby Got Back', name: 'Scrolling', start: 0, length: 30, location: 'clips/90s/Sir Mix A Lot - Baby Got Back - Scrolling.mp3' },
    { artist: 'Sixpence None The Richer', name: 'Kiss Me', start: 0, length: 30, location: 'clips/90s/Sixpence None The Richer- Kiss Me with.mp3' },
    { artist: 'Spice Girls', name: 'Wannabe', start: 0, length: 30, location: 'clips/90s/Spice Girls - Wannabe.mp3' },
    { artist: 'Summertime', name: 'Single Edit', start: 0, length: 30, location: 'clips/90s/Summertime - Single Edit.mp3' },
    { artist: 'Tag Team', name: 'Whoomp (There It Is)', start: 0, length: 30, location: 'clips/90s/Tag Team - Whoomp (There It Is).mp3' },
    { artist: 'The Rembrandts', name: 'I\'ll Be There for You', start: 0, length: 30, location: 'clips/90s/The Rembrandts - I\'ll Be There for You.mp3' },
    { artist: 'Spin Doctors', name: 'Two Princes', start: 0, length: 30, location: 'clips/90s/Two Princes.mp3' },
    { artist: 'UB40', name: '(I Can t Help) Falling In Love With You', start: 0, length: 30, location: 'clips/90s/UB40 - (I Can t Help) Falling In Love With You.mp3' },
    { artist: 'Jennifer Lopez', name: 'Waiting for Tonight', start: 0, length: 30, location: 'clips/90s/Waiting for Tonight.mp3' },
    { artist: 'Green Day', name: 'When I Come Around', start: 0, length: 30, location: 'clips/90s/When I Come Around - Green Day - With.mp3' }
])
category90.save

categories = Category.all

# Create a simple 80s Category Game
100.times { |n|
    Game.create(category: categories.sample, name: Faker::Team.name)
    Game.create(category: categories.sample, name: Faker::Team.name)
}

