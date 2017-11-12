const router = require('express').Router();

router.use(require('./scraper'));
router.use(require('./articles'));
router.use(require('./notes'));

export default router;
