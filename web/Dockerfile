FROM node:lts

# Install global npm packages
RUN npm i -g @angular/cli

# Set working directory
WORKDIR /usr/src/app

# Copy the remaining source code
COPY . ./

ENTRYPOINT ["npm start -- --poll 1"]
