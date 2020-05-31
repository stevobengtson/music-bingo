FROM ruby:2.7.1

RUN apt-get update -qq && apt-get install -y build-essential libpq-dev nodejs vim

# Set an environment variable where the Rails app is installed to inside of Docker image
ENV RAILS_ROOT /var/www/music_bingo
RUN mkdir -p $RAILS_ROOT 

# Set working directory
WORKDIR $RAILS_ROOT

# Setting env up
ENV RAILS_ENV='production'
ENV RACK_ENV='production' 

# Adding gems
COPY Gemfile Gemfile
COPY Gemfile.lock Gemfile.lock
RUN bundle config set without 'development test'
RUN bundle lock --add-platform x86-mingw32 x86-mswin32 x64-mingw32 java
RUN bundle install --jobs 20 --retry 5 

# Adding project files
COPY . .

EXPOSE 3000
CMD ["bundle", "exec", "puma", "-C", "config/puma.rb"]