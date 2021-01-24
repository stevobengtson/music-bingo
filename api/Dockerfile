FROM ruby:2.7.1

RUN apt-get update -qq && apt-get install -y build-essential vim

# Set an environment variable where the Rails app is installed to inside of Docker image
ENV RAILS_ROOT /var/www/music_bingo
RUN mkdir -p $RAILS_ROOT 

# Set working directory
WORKDIR $RAILS_ROOT

# Adding gems
COPY Gemfile Gemfile
COPY Gemfile.lock Gemfile.lock
RUN bundle install --jobs 20 --retry 5 --with development test

COPY entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]

#Adding project files
COPY . $RAILS_ROOT

EXPOSE 3000
CMD ["rails", "server", "-b", "0.0.0.0"]