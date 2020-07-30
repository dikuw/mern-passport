## MERN Passport Example

Modified version of https://github.com/b-bly/simple-mern-passport

Discussion here: https://dikuw.wordpress.com/2020/07/30/mern-authorization-with-passport-js/

Changes:
- Set-up to work with MongoDB cloud db. Use variables.env to set your DATABASE string
- Replaced callbacks with aysnc/await where appropriate
- Moved controlling functions from routes to controllers
- Split controlling functions into distinct functions
- Replaced ghost divs with React.Fragment
- Added automatic login of new user after registering
- Added protect component "Page" to demonstrate how to protect routes
- Redirect to home on logout
- Moved all front end methods and state to the App component
- Minor CSS changes

### Installing

Run these commands in the terminal:

```
npm install
npm run dev
```

### Includes

- Sign up, login and logout.
- Authentication with passport and bcryptjs.
- Session information stored with express sessions.
- Store data for production in sessions with connect-mongo

## Author

dikuw

## Acknowledgments

Brendt Bly for the original work: https://github.com/b-bly/simple-mern-passport
