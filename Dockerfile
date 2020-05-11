FROM ubuntu:18.04

RUN apt-get update -y &&  apt-get install -y python3.6 python3-pip 

RUN python3 --version
RUN pip3 --version
RUN pip3 install Flask

COPY . .

RUN export FLASK_APP=test.py
CMD flask run --port=5000