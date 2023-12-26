const Router = require('express')
const router = Router()

router.get('/', (req, res) => {
    res.send('API is running...')
})

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

// router.get('/UserOTP/:email')
// router.get('/VerifyLogin/:email/:otp')
// router.get('/UserLogout')
// router.post('/CreateProfile')
// router.post('/UpdateProfile')
// router.get('/ReadProfile')
// router.post('/SaveWishList')
// router.post('/RemoveWishList')
// router.get('/WishList')
// router.post('/SaveCartList')
// router.post('/RemoveCartList')
// router.get('/CartList')

module.exports = router;