# SEPHORA SKINCARE API \*\*BROKEN\*\*

Simple API that returns the skincare products that are currently on the Sephora Website.

`getItem(skuId)`:

* `skuId` `<String>`

* returns `<Object>` Object containing the following properties:
    * brandName
    * isNaturalOrganic
    * listPrice
    * productName
    * skuId
    * starRatings

`getAllItems()`:

* returns `<Array>` Array of all Sephora's online skincare items with each item having properties as returned by `getItem(skuId)`.

`getItemDetails(skuId)`:

* `skuId` `<String>`

* returns `<Object>` Object containing the following properties:
    * badgeAltText
    * biExclusiveLevel
    * brandName
    * image
    * isAppExclusive
    * isbiOnly
    * isFirstAccess
    * isFree
    * isLimitedEdition
    * isLimitedQuantity
    * isLimitedTimeOffer
    * isNaturalOrganic
    * isNaturalSephora
    * isNew
    * isOnlineOnly
    * isOutOfStock
    * isSephoraExclusive
    * listPrice
    * productId
    * productName
    * skuId
    * skuImages
    * starRatings
    * targetUrl

`getAllItemsDetails()`:

* returns `<Array>` Array of all Sephora's online skincare items with each item having properties as returned by `getItemDetails(skuId)`.
