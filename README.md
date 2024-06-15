# yayawallet-dashboard
This is a repository with configuration setup to run YaYa wallet dashboard.

# Environment
Before you run it, you first must setup environment variables to be used by the system. To set it up, you need to create a .env file and add the following environment variables:
```
POSTGRES_DB=dashboard
POSTGRES_USER={your_db_user}
POSTGRES_PASSWORD={your_db_password}
YAYA_API_URL=https://yayawallet.com/api/en
YAYA_API_PATH=/api/en
YAYA_API_KEY={your_yayawallet_api_key}
YAYA_API_SECRET={your_yayawallet_api_secret}
```

You can find the last two credentials on https://yayawallet.com/en/profile/settings, after you logged in to your account on a browser.

# How to run it?
The project is dockerized, so you can simply run it by running the following command in the terminal:
```
docker-compose up
```