This a simple app to get friends from VK using VK API.

How to start:

1. Just go to http://46.32.68.241:5000


If you want to customize:

1. clone repo:
```
git clone https://github.com/ddsvetlov/VKOauth.git
```

2. If it needed install python, pip, Flask:
```
apt-get install -y python3.6 python3-pip 
pip3 install -U pip
pip3 install Flask
```

3. If you want to use your own App go to /static/js/test.js and change params on authVK() method:
```
client_id:YOUR_ID
redirect_uri=YOUR_RED_URL
```

4. To start app:
```
export FLASK_APP=test.py
flask run --port=YOUR_PORT
```

5. Go to YOUR_RED_URL


