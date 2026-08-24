export enum CatalogField {
  Manufacturer = 'manufacturer',
  Model = 'model',
  SubModel = 'subModel',
  SpecialSubCategory = 'CarSpecialSubCatID',
  SpecialCategory = 'CarSpecialID',
}

export enum AddressEntity {
  Regions = 'regions',
  TopAreas = 'top-areas',
  Areas = 'areas',
  Cities = 'cities',
  Hoods = 'hoods',
  Streets = 'streets',
}

export enum QueryKey {
  ResultType = 'result_type',
  Limit = 'limit',
  CityId = 'city_id',
  ScrollSessionId = 'scrollSessionId',
  Query = 'q',
  SearchTerm = 'searchTerm',
  Phrase = 'phrase',
  FreeQuery = 'query',
}

export enum ResultType {
  Extended = 'extended',
}

/** Names of positional arguments, for validation messages. */
export enum ArgumentName {
  Category = 'category',
  Deal = 'deal',
}

/** Buckets in the baked address index (tools/bake-address.mjs). */
export enum BakedBucket {
  Hoods = 'hoods',
  Cities = 'cities',
  Areas = 'areas',
  TopAreas = 'topAreas',
  Regions = 'regions',
}

/** Keys of SearchLocation, so a bucket can name the id it fills in. */
export enum LocationField {
  Region = 'region',
  TopArea = 'topArea',
  Area = 'area',
  City = 'city',
  Neighborhood = 'neighborhood',
}
