module.exports = {
  register: (req, res) => {
    const { username, password, profile_pic } = req.body;
    req.app.get('db').register_user([username, password, profile_pic])
      .then(() => {
        res.status(200).send();
      })
  },
  login: (req, res) => {
    const { username, password } = req.body;
    req.app.get('db').login_user([username])
    .then((response) => {
      if (response[0]) {
        if (response[0].password === password) {
          return res.status(200).send(response);
        }
      } else {
        return res.status(200).send();
      }
    })
  },
  getPosts: (req, res) => {
    const { userid } = req.params;
    const { userposts, search } = req.query;
    if(userposts === 'true' && search) {
      console.log('userposts is true and there is a search term');
    } else if (userposts === 'true' && !search) {
      console.log('userposts is true and there is no search term');
    } else if (userposts === 'false' && search) {
      console.log('userposts is false and there is a search term');
    } else if (userposts === 'false' && !search) {
      console.log('userposts is false and there is no search term');
    }
    req.app.get('db').get_posts()
    .then((response) => {
      res.status(200).send(response);
    })
  }
}