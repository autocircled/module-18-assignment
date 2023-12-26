const BrandModel = require("../models/BrandModel");
const CategoryModel = require("../models/CategoryModel");
const ProductSliderModel = require("../models/ProductSliderModel");
const ProductModel = require("../models/ProductModel");
const ReviewModel = require("../models/ReviewModel");

const mongoose = require("mongoose");
const { ObjectId } = mongoose.Types;

const BrandListService = async () => {
    try {
        let data = await BrandModel.find()
        return {
            status: "success",
            data: data
        }
    } catch (error) {
        return {
            status: "failed",
            data: error
        }
    }
}

const CategoryListService = async () => {
    try {
        let data = await CategoryModel.find()
        return {
            status: "success",
            data: data
        }
    } catch (error) {
        return {
            status: "failed",
            data: error
        }
    }
}

const SliderListService = async () => {
    try {
        let data = await ProductSliderModel.find()
        return {
            status: "success",
            data: data
        }
    } catch (error) {
        return {
            status: "failed",
            data: error
        }
    }
}

const ListByBrandService = async (req) => {
    try {
        let brandID = new ObjectId(req.params.BrandID)
        let MatchStage = {$match: {brandID: brandID}}
        let JoinWithBrandStage = {$lookup: {
            from: "brands",
            localField: "brandID",
            foreignField: "_id",
            as: "brands"
        }}
        let JoinWithCategoryStage = {$lookup: {
            from: "categories",
            localField: "categoryID",
            foreignField: "_id",
            as: "categories"
        }}

        let unwindBrandStage = {$unwind: "$brands"}
        let unwindCategoryStage = {$unwind: "$categories"}

        let projectionStage = {
            $project: {
                "brands._id": 0,
                "categories._id": 0,
                "categoryID": 0,
                "brandID": 0
            }
        }

        let data = await ProductModel.aggregate([
            MatchStage,
            JoinWithBrandStage,
            JoinWithCategoryStage,
            unwindBrandStage,
            unwindCategoryStage,
            projectionStage
        ])

        return {
            status: "success",
            data: data
        }
    } catch (error) {
        return { status: "fail", data: err.toString() };
    }

}

const ListByCategoryService = async (req) => {
    try {
        let categoryID = new ObjectId(req.params.CategoryID);
        let matchStage = { $match: { categoryID: categoryID } };

        let joinWithBrandStage = {
            $lookup: {
                from: "brands",
                localField: "brandID",
                foreignField: "_id",
                as: "brand",
            },
        };

        let joinWithCategoryStage = {
            $lookup: {
                from: "categories",
                localField: "categoryID",
                foreignField: "_id",
                as: "category",
            },
        };

        let unwindBrandStage = { $unwind: "$brand" };
        let unwindCategoryStage = { $unwind: "$category" };

        let projectionStage = {
            $project: {
                "brand._id": 0,
                "category._id": 0,
                categoryID: 0,
                brandID: 0,
            },
        };

        const data = await ProductModel.aggregate([
            matchStage,
            joinWithBrandStage,
            joinWithCategoryStage,
            unwindBrandStage,
            unwindCategoryStage,
            projectionStage,
        ]);
        return { status: "success", data: data };

    } catch (error) {
        return { status: "fail", data: error.toString() };
    }
}

const ListBySimilarService = async (req) => {
    try {
        let categoryID = new ObjectId(req.params.CategoryID);
        let matchStage = { $match: { categoryID: categoryID } };
        let limitStage = { $limit: 20 };

        let joinWithBrandStage = {
            $lookup: {
                from: "brands",
                localField: "brandID",
                foreignField: "_id",
                as: "brand",
            },
        };

        let joinWithCategoryStage = {
            $lookup: {
                from: "categories",
                localField: "categoryID",
                foreignField: "_id",
                as: "category",
            },
        };

        let unwindBrandStage = { $unwind: "$brand" };
        let unwindCategoryStage = { $unwind: "$category" };

        let projectionStage = {
            $project: {
                "brand._id": 0,
                "category._id": 0,
                categoryID: 0,
                brandID: 0,
            },
        };

        const data = await ProductModel.aggregate([
            matchStage,
            limitStage,
            joinWithBrandStage,
            joinWithCategoryStage,
            unwindBrandStage,
            unwindCategoryStage,
            projectionStage,
        ]);
        return { status: "success", data: data };               
    } catch (error) {
        return { status: "fail", data: error.toString() };
    }
}

const ListByKeywordService = async (req, res) => {
    try {
        let searchRegex = { $regex: req.params.Keyword, $options: "i" };
        let searchParams = [{ title: searchRegex }, { shortDes: searchRegex }];
        let searchQuery = { $or: searchParams };
        let matchStage = { $match: searchQuery };

        let joinWithBrandStage = {
            $lookup: {
                from: "brands",
                localField: "brandID",
                foreignField: "_id",
                as: "brand",
            },
        };

        let joinWithCategoryStage = {
            $lookup: {
                from: "categories",
                localField: "categoryID",
                foreignField: "_id",
                as: "category",
            },
        };

        let unwindBrandStage = { $unwind: "$brand" };
        let unwindCategoryStage = { $unwind: "$category" };

        let projectionStage = {
            $project: {
                "brand._id": 0,
                "category._id": 0,
                categoryID: 0,
                brandID: 0,
            },
        };

        const data = await ProductModel.aggregate([
            matchStage,
            joinWithBrandStage,
            joinWithCategoryStage,
            unwindBrandStage,
            unwindCategoryStage,
            projectionStage,
        ]);
        return { status: "success", data: data };
    } catch (error) {
        return { status: "fail", data: error.toString() };
    }
}

const ListByRemarkService = async (req) => {
    try {
        let Remark = req.params.Remark;
        let matchStage = { $match: { remark: Remark } };

        let joinWithBrandStage = {
            $lookup: {
                from: "brands",
                localField: "brandID",
                foreignField: "_id",
                as: "brand",
            },
        };

        let joinWithCategoryStage = {
            $lookup: {
                from: "categories",
                localField: "categoryID",
                foreignField: "_id",
                as: "category",
            },
        };

        let unwindBrandStage = { $unwind: "$brand" };
        let unwindCategoryStage = { $unwind: "$category" };

        let projectionStage = {
            $project: {
                "brand._id": 0,
                "category._id": 0,
                "categoryID": 0,
                'brandID': 0,
            },
        };

        const data = await ProductModel.aggregate([
            matchStage,
            joinWithBrandStage,
            joinWithCategoryStage,
            unwindBrandStage,
            unwindCategoryStage,
            projectionStage,
        ]);
        return { status: "success", data: data };
    } catch (error) {
        return { status: "fail", data: error.toString() };
    }
}

const ProductDetailsService = async (req) => {
    try {
        const ProductID = new ObjectId(req.params.ProductID);
        const matchStage = { $match: { _id: ProductID } };

        const joinWithBrandStage = {
            $lookup: {
                from: "brands",
                localField: "brandID",
                foreignField: "_id",
                as: "brand",
            },
        };

        const joinWithCategoryStage = {
            $lookup: {
                from: "categories",
                localField: "categoryID",
                foreignField: "_id",
                as: "category",
            },
        };
        const joinWithDetailsStage = {
            $lookup: {
                from: "productdetails",
                localField: "_id",
                foreignField: "productID",
                as: "details",
            },
        };

        const projectionStage = {
            $project: {
                "brand._id": 0,
                "category._id": 0,
                'categoryID':0,
                'brandID':0
            },
        };

        const unwindBrandStage = { $unwind: "$brand" };
        const unwindCategoryStage = { $unwind: "$category" };
        const unwindDetailStage = { $unwind: "$details" };

        const data = await ProductModel.aggregate([
            matchStage,
            joinWithBrandStage,
            joinWithCategoryStage,
            joinWithDetailsStage,
            unwindBrandStage,
            unwindCategoryStage,
            unwindDetailStage,
            projectionStage,
        ]);

        return { status: "success", data: data };
    } catch (error) {
        return { status: "fail", data: error.toString() };
    }
}

const ReviewListService = async (req) => {
    try {
        let productID = new ObjectId(req.params.ProductID);
        let matchStage = { $match: { productID: productID } };

        let joinWithProfileStage = {
            $lookup: {
                from: "profiles",
                localField: "userID",
                foreignField: "userID",
                as: "profile",
            },
        };
        let unwindProfileStage = { $unwind: "$profile" };
        let projectionStage = {
            $project:{
                'des':1,
                'rating' : 1,
                'profile.cus_name': 1,
            }
        }

        let data = await ReviewModel.aggregate([
            matchStage,
            joinWithProfileStage,
            unwindProfileStage,
            projectionStage,
        ]);
        return { status: "success", data: data };
    } catch (error) {
        return { status: "fail", data: error.toString() };
    }
}

module.exports = {
    BrandListService,
    CategoryListService,
    SliderListService,
    ListByBrandService,
    ListByCategoryService,
    ListBySimilarService,
    ListByKeywordService,
    ListByRemarkService,
    ProductDetailsService,
    ReviewListService
}