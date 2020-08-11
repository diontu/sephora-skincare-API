//scrapes the scripts and returns the JSON for products
const fetch = require('node-fetch');
const sephoraParser = require('./parser/parser');

async function _fetchJSONScript() {
    const res = await fetch('https://www.sephora.com/ca/en/shop/skincare');
    const html = await res.text();
    // TODO: import the parser and use the parser here.
    const script = sephoraParser(html);
    const JSONScript = JSON.parse(script);
    return JSONScript;
}

const _extractContentItems = (JSONScript) => {
    let props;
    JSONScript.forEach((obj) => {
        if (obj.class === "RootCategoryPage") {
            props = obj.props;
        }
    });
    return props.contentItems;
}

//returns array of item objects
async function getAllItemsDetails() {
    try {
        const JSONScript = await _fetchJSONScript();
        const contentItems = _extractContentItems(JSONScript);  //return array
        
        let result = [];
        const itemsKey = 'skus'; 
        contentItems.forEach((obj) => {
            if (obj.hasOwnProperty(itemsKey)) {
                obj[itemsKey].forEach((item) => {
                    result.push(item);
                });
            }
        });
        return result;

    } catch (err) {
        console.log(err);
    }
};

//returns item object
async function getItemDetails(skuId) {
    try {
        const JSONScript = await _fetchJSONScript();
        const contentItems = _extractContentItems(JSONScript);  //return array

        let result;
        const itemsKey = 'skus';
        contentItems.forEach((obj) => {
            if (obj.hasOwnProperty(itemsKey)) {
                obj[itemsKey].forEach((item) => {
                    if (item.skuId === skuId) {
                        result = item;
                    }
                });
            }
        });
        return result;

    } catch (err) {
        console.log(err);
    }
}

async function getAllItems() {
    try {
        const items = await getAllItemsDetails();
        let returnedItems = [];

        for (const item of items) {
            let newItem = {};
            newItem.brandName = item.brandName;
            newItem.isNaturalOrganic = item.isNaturalOrganic;
            newItem.listPrice = item.listPrice;
            newItem.productName = item.productName;
            newItem.skuId = item.skuId;
            newItem.starRatings = item.starRatings;
            returnedItems.push(newItem);
        }
        return returnedItems;
    } catch (err) {
        console.log(err);
    }
}

async function getItem(skuId) {
    try {
        const item = await getItemDetails(skuId);

        let newItem = {};
        newItem.brandName = item.brandName;
        newItem.isNaturalOrganic = item.isNaturalOrganic;
        newItem.listPrice = item.listPrice;
        newItem.productName = item.productName;
        newItem.skuId = item.skuId;
        newItem.starRatings = item.starRatings;
        return newItem;
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    getAllItems,
    getItem,
    getAllItemsDetails,
    getItemDetails
};