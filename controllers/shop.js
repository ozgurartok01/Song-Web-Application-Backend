exports.getIndex = (req, res, next) => {
  
      res.render('shop/index', {
        pageTitle: 'Main',
        path: '/'
      });
};

