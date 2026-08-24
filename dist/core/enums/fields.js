export var CatalogField;
(function (CatalogField) {
    CatalogField["Manufacturer"] = "manufacturer";
    CatalogField["Model"] = "model";
    CatalogField["SubModel"] = "subModel";
    CatalogField["SpecialSubCategory"] = "CarSpecialSubCatID";
    CatalogField["SpecialCategory"] = "CarSpecialID";
})(CatalogField || (CatalogField = {}));
export var AddressEntity;
(function (AddressEntity) {
    AddressEntity["Regions"] = "regions";
    AddressEntity["TopAreas"] = "top-areas";
    AddressEntity["Areas"] = "areas";
    AddressEntity["Cities"] = "cities";
    AddressEntity["Hoods"] = "hoods";
    AddressEntity["Streets"] = "streets";
})(AddressEntity || (AddressEntity = {}));
export var QueryKey;
(function (QueryKey) {
    QueryKey["ResultType"] = "result_type";
    QueryKey["Limit"] = "limit";
    QueryKey["CityId"] = "city_id";
    QueryKey["ScrollSessionId"] = "scrollSessionId";
    QueryKey["Query"] = "q";
    QueryKey["SearchTerm"] = "searchTerm";
    QueryKey["Phrase"] = "phrase";
    QueryKey["FreeQuery"] = "query";
})(QueryKey || (QueryKey = {}));
export var ResultType;
(function (ResultType) {
    ResultType["Extended"] = "extended";
})(ResultType || (ResultType = {}));
/** Names of positional arguments, for validation messages. */
export var ArgumentName;
(function (ArgumentName) {
    ArgumentName["Category"] = "category";
    ArgumentName["Deal"] = "deal";
})(ArgumentName || (ArgumentName = {}));
/** Buckets in the baked address index (tools/bake-address.mjs). */
export var BakedBucket;
(function (BakedBucket) {
    BakedBucket["Hoods"] = "hoods";
    BakedBucket["Cities"] = "cities";
    BakedBucket["Areas"] = "areas";
    BakedBucket["TopAreas"] = "topAreas";
    BakedBucket["Regions"] = "regions";
})(BakedBucket || (BakedBucket = {}));
/** Keys of SearchLocation, so a bucket can name the id it fills in. */
export var LocationField;
(function (LocationField) {
    LocationField["Region"] = "region";
    LocationField["TopArea"] = "topArea";
    LocationField["Area"] = "area";
    LocationField["City"] = "city";
    LocationField["Neighborhood"] = "neighborhood";
})(LocationField || (LocationField = {}));
