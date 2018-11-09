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
          req.session.userid = response[0].id;
          return res.status(200).send(response);
        }
      } else {
        return res.status(200).send();
      }
    })
  },
  getPosts: (req, res) => {
    const { userid } = req.session;
    const { userposts, search } = req.query;
    if(userposts === 'true' && search) {
      //console.log('userposts is true and there is a search term');
      req.app.get('db').get_posts()
      .then((response) => {
        const result = response.filter(post => {
          return post.title.toLowerCase().indexOf(search.toLowerCase()) !== -1;
        })
        return res.status(200).send(result);
      })
    } else if (userposts === 'true' && !search) {
      //This one will return all posts
      //console.log('userposts is true and there is no search term');
      req.app.get('db').get_posts()
      .then((response) => {
        return res.status(200).send(response);
      })
    } else if (userposts === 'false' && search) {
      //console.log('userposts is false and there is a search term');
      req.app.get('db').get_posts()
      .then((response) => {
        const result = response.filter(post => {
          return userid !== post.id && post.title.toLowerCase().indexOf(search.toLowerCase()) !== -1;
        })
        return res.status(200).send(result);
      })
    } else if (userposts === 'false' && !search) {
      //console.log('userposts is false and there is no search term');
      req.app.get('db').get_posts()
      .then((response) => {
        const result = response.filter(post => {
          return userid !== post.id;
        })
        return res.status(200).send(result);
      })
    } else {
      //console.log('getting all posts');
      req.app.get('db').get_posts()
      .then((response) => {
        return res.status(200).send(response);
      })
    }
  },
  getPost: (req, res) => {
    const { postid } = req.params;
    req.app.get('db').get_post([postid])
    .then((response) => {
      res.status(200).send(response);
    })
  },
  createPost: (req, res) => {
    const { userid } = req.session;
    const { title, img, content } = req.body;
    req.app.get('db').create_post([title, img, content, userid])
    .then(() => {
      res.status(200).send();
    })
  },
  logout: (req, res) => {
    req.session.destroy();
    res.status(200).send();
  },
  getUser: (req, res) => {
    const { userid } = req.session;
    req.app.get('db').get_user([userid])
    .then((response) => {
      res.status(200).send(response);
    })
  }
}