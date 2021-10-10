FROM node:alpine

WORKDIR /app

COPY package*.json ./

RUN npm i

COPY . ./

ENV MONGO_URL=mongodb+srv://Prabhash:Apurva284@zomatoclone.kbgqh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
ENV GOOGLE_CLIENT_ID=1079437825604-ba7s1n399khi174ebfhrsr8ajg2soqqj.apps.googleusercontent.com
ENV GOOGLE_CLIENT_SECRET=E8CuqrohA2HxhJQPVj1HyznZ
ENV AWS_ACCESS_KEY_ID=AKIAWCY2RZM6QTGF4MPE
ENV AWS_SECRET_ACCESS_KEY=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
ENV RZR_PAY_ID=rzp_test_ZaYpHkB2tpaKQo
ENV RZR_PAY_SECRET=e9z6PvGUbP8oRVJRCAlY6FRo

CMD ["npm", "run", "start"]