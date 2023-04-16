# LibraryBook using Express JS

Thanks for visit my repository.  This is a practice of a tutorial [mdm web doc](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Tutorial_local_library_website)

## How to install my project locally

First clone the repository and install the dependencies:

```bash
git clone git@github.com:hroddev/express-locallibrary-tutorial.git
npm i
```
Before you need create an **.env file** in your project root with the next environment variables and replace the info.

```env
MONGO_ROOT_USER=<USER ROOT>
MONGO_ROOT_PASSWORD=<PASS>
MONGOEXPRESS_LOGIN=<USER>
MONGOEXPRESS_PASSWORD=<PASS>
```
Next, you need have installed the Docker and Docker compose. This is the official guide for [install](https://docs.docker.com/desktop/).

Run the docker compose:

```bash
docker compose up
```
Add dummy data from the file **populatedb.js** 
```bash
node populatedb.js
```
Run the nodemon in other tab:
```bash
// Windows
SET DEBUG=express-locallibrary-tutorial:* & npm run dev

// Linux
DEBUG=express-locallibrary-tutorial:* npm run dev
```
Open your browser, put this url and tell me what you think :)
```url
http://localhost:3000/
```
I like the feedback so, feel free to comment and if you have a question too.