FROM sapk/cloud9:latest
LABEL mantainer="Everton Canez"

RUN apt-get update && apt-get install -y zip