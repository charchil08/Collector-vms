class ApiFeatures {
    constructor(query, queryStr) {
        this.query = query;
        this.queryStr = queryStr;
    }


    // search using find({name: ____}) & regex
    search() {
        const keyword = this.queryStr.keyword ? {
            details: {
                $regex: this.queryStr.keyword,
                $options: "i"
            }
        } : {};

        this.query = this.query.find({ ...keyword });
        // console.log(keyword);
        
        return this;
    }



    filter() {
        this.queryCopy = { ...this.queryStr };

        // category wise filtering
        const removeFilters = ["keyword", "page", "limit"];
        removeFilters.forEach(key => {
            delete this.queryCopy[key];
        })

        //Rating filters - for numeric values
        let queryStr = JSON.stringify(this.queryCopy);
        queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, key => `$${key}`)


        this.query = this.query.find(JSON.parse(queryStr));
        return this;
    }

    pagination(resultPerPage) {
        const currentPage = this.queryStr.page || 1;
        const skip = resultPerPage * (currentPage - 1);

        this.query = this.query.limit(resultPerPage).skip(skip)
        return this;
    }

}

module.exports = ApiFeatures;