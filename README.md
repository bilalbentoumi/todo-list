# PrimRecrut Assessment

## Preparing python virtual env
- Clone project
- run `cd server`
- Create python virtual env by running this command `virtualenv -p python3 venv`
- Activate the virtual env by running this command `source venv/bin/activate`
- Install python packages by running `pip install -r requirements.txt`
- Migrate database tables by running this command `python manage.py migrate`
- Run django server by running this command `python manage.py runserver 8000`

## How to start client (next.js)
- In another terminal window run `cd client`
- Install packages by running `npm install`
- Start dev server by runnung `npm run dev`