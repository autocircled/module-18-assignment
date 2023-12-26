const Router = require('express')
const router = Router()

router.get('/', (req, res) => {
    res.send('API is running...')
})

const AuthVerification = require('../middlewares/AuthVerification')

// Product
const ProductController = require('../controllers/ProductController')
router.get('/ProductBrandList', ProductController.ProductBrandList)
router.get('/ProductCategoryList', ProductController.ProductCategoryList)
router.get('/ProductSliderList', ProductController.ProductSliderList)
router.get('/ProductListByBrand/:BrandID', ProductController.ProductListByBrand)
router.get('/ProductListByCategory/:CategoryID', ProductController.ProductListByCategory)
router.get('/ProductListBySimilar/:CategoryID', ProductController.ProductListBySimilar)
router.get('/ProductListByKeyword/:Keyword', ProductController.ProductListByKeyword)
router.get('/ProductListByRemark/:Remark', ProductController.ProductListByRemark)
router.get('/ProductDetails/:ProductID', ProductController.ProductDetails)
router.get('/ProductReviewList/:ProductID', ProductController.ProductReviewList)

// User
const UserController = require('../controllers/UserController')
router.get('/UserOTP/:email', UserController.UserOTP)
router.get('/VerifyLogin/:email/:otp', UserController.VerifyLogin)
router.get('/UserLogout', AuthVerification, UserController.UserLogout)
router.post('/CreateProfile', AuthVerification, UserController.CreateProfile)
router.post('/UpdateProfile', AuthVerification, UserController.CreateProfile)
router.get('/ReadProfile', AuthVerification, UserController.ReadProfile)


// router.post('/SaveWishList')
// router.post('/RemoveWishList')
// router.get('/WishList')
// router.post('/SaveCartList')
// router.post('/RemoveCartList')
// router.get('/CartList')

module.exports = router;