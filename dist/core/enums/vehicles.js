export var VehicleCategory;
(function (VehicleCategory) {
    VehicleCategory["Cars"] = "cars";
    VehicleCategory["Motorcycles"] = "motorcycles";
    VehicleCategory["Scooters"] = "scooters";
    VehicleCategory["Trucks"] = "trucks";
    VehicleCategory["Watercraft"] = "watercraft";
    VehicleCategory["Other"] = "other";
})(VehicleCategory || (VehicleCategory = {}));
export var VehicleFeedView;
(function (VehicleFeedView) {
    VehicleFeedView["Transform"] = "transform";
    VehicleFeedView["FeedMix"] = "feed-mix";
})(VehicleFeedView || (VehicleFeedView = {}));
export var GearBox;
(function (GearBox) {
    GearBox[GearBox["Manual"] = 101] = "Manual";
    GearBox[GearBox["Automatic"] = 102] = "Automatic";
})(GearBox || (GearBox = {}));
export var EngineType;
(function (EngineType) {
    EngineType[EngineType["Petrol"] = 1101] = "Petrol";
    EngineType[EngineType["Diesel"] = 1102] = "Diesel";
    EngineType[EngineType["Lpg"] = 1106] = "Lpg";
    EngineType[EngineType["HybridPetrol"] = 2101] = "HybridPetrol";
    EngineType[EngineType["HybridDiesel"] = 2102] = "HybridDiesel";
    EngineType[EngineType["PluginHybridPetrol"] = 5104] = "PluginHybridPetrol";
    EngineType[EngineType["PluginHybridDiesel"] = 5105] = "PluginHybridDiesel";
    EngineType[EngineType["ElectricPetrol"] = 6101] = "ElectricPetrol";
    EngineType[EngineType["Electric"] = 6103] = "Electric";
})(EngineType || (EngineType = {}));
export var CarFamilyType;
(function (CarFamilyType) {
    CarFamilyType[CarFamilyType["Mini"] = 1] = "Mini";
    CarFamilyType[CarFamilyType["Family"] = 2] = "Family";
    CarFamilyType[CarFamilyType["Executive"] = 3] = "Executive";
    CarFamilyType[CarFamilyType["Sport"] = 4] = "Sport";
    CarFamilyType[CarFamilyType["Jeep"] = 5] = "Jeep";
    CarFamilyType[CarFamilyType["PickupTruck"] = 6] = "PickupTruck";
    CarFamilyType[CarFamilyType["Commercial"] = 7] = "Commercial";
    CarFamilyType[CarFamilyType["Minivan"] = 9] = "Minivan";
    CarFamilyType[CarFamilyType["Crossover"] = 10] = "Crossover";
})(CarFamilyType || (CarFamilyType = {}));
export var CarColor;
(function (CarColor) {
    CarColor[CarColor["Black"] = 1] = "Black";
    CarColor[CarColor["Green"] = 2] = "Green";
    CarColor[CarColor["Orange"] = 3] = "Orange";
    CarColor[CarColor["Pink"] = 4] = "Pink";
    CarColor[CarColor["Red"] = 5] = "Red";
    CarColor[CarColor["Brown"] = 6] = "Brown";
    CarColor[CarColor["Gray"] = 7] = "Gray";
    CarColor[CarColor["Purple"] = 8] = "Purple";
    CarColor[CarColor["Blue"] = 9] = "Blue";
    CarColor[CarColor["White"] = 10] = "White";
    CarColor[CarColor["Yellow"] = 11] = "Yellow";
})(CarColor || (CarColor = {}));
export var OwnerType;
(function (OwnerType) {
    OwnerType[OwnerType["Private"] = 1] = "Private";
    OwnerType[OwnerType["Company"] = 2] = "Company";
    OwnerType[OwnerType["Rental"] = 3] = "Rental";
    OwnerType[OwnerType["Taxi"] = 6] = "Taxi";
    OwnerType[OwnerType["DrivingSchool"] = 8] = "DrivingSchool";
    OwnerType[OwnerType["PersonalImport"] = 9] = "PersonalImport";
    OwnerType[OwnerType["Government"] = 10] = "Government";
    OwnerType[OwnerType["UnitedNations"] = 11] = "UnitedNations";
    OwnerType[OwnerType["ParallelImport"] = 12] = "ParallelImport";
    OwnerType[OwnerType["Leasing"] = 13] = "Leasing";
    OwnerType[OwnerType["NoPreviousOwner"] = 14] = "NoPreviousOwner";
    OwnerType[OwnerType["CarDealer"] = 15] = "CarDealer";
})(OwnerType || (OwnerType = {}));
export var MotorcycleLicense;
(function (MotorcycleLicense) {
    MotorcycleLicense[MotorcycleLicense["UpTo125cc"] = 2] = "UpTo125cc";
    MotorcycleLicense[MotorcycleLicense["UpTo47hp"] = 3] = "UpTo47hp";
    MotorcycleLicense[MotorcycleLicense["Unlimited"] = 4] = "Unlimited";
})(MotorcycleLicense || (MotorcycleLicense = {}));
export var MotorcycleType;
(function (MotorcycleType) {
    MotorcycleType[MotorcycleType["DualUse"] = 1] = "DualUse";
    MotorcycleType[MotorcycleType["Motocross"] = 2] = "Motocross";
    MotorcycleType[MotorcycleType["SportsRoad"] = 3] = "SportsRoad";
    MotorcycleType[MotorcycleType["Custom"] = 4] = "Custom";
})(MotorcycleType || (MotorcycleType = {}));
export var WatercraftType;
(function (WatercraftType) {
    WatercraftType[WatercraftType["Sailboat"] = 33] = "Sailboat";
    WatercraftType[WatercraftType["Motorboat"] = 35] = "Motorboat";
    WatercraftType[WatercraftType["FishingBoat"] = 38] = "FishingBoat";
    WatercraftType[WatercraftType["Catamaran"] = 37] = "Catamaran";
    WatercraftType[WatercraftType["JetSki"] = 183] = "JetSki";
    WatercraftType[WatercraftType["Other"] = 40] = "Other";
})(WatercraftType || (WatercraftType = {}));
export var SpecialVehicleType;
(function (SpecialVehicleType) {
    SpecialVehicleType[SpecialVehicleType["Atv"] = 2] = "Atv";
    SpecialVehicleType[SpecialVehicleType["CollectorsVehicle"] = 4] = "CollectorsVehicle";
    SpecialVehicleType[SpecialVehicleType["Trailer"] = 8] = "Trailer";
    SpecialVehicleType[SpecialVehicleType["OperationalVehicle"] = 15] = "OperationalVehicle";
    SpecialVehicleType[SpecialVehicleType["Tractor"] = 17] = "Tractor";
    SpecialVehicleType[SpecialVehicleType["Forklift"] = 19] = "Forklift";
    SpecialVehicleType[SpecialVehicleType["HeavyEquipment"] = 20] = "HeavyEquipment";
    SpecialVehicleType[SpecialVehicleType["PlowerTractor"] = 22] = "PlowerTractor";
    SpecialVehicleType[SpecialVehicleType["MotorizedCaravan"] = 24] = "MotorizedCaravan";
    SpecialVehicleType[SpecialVehicleType["Minibus"] = 25] = "Minibus";
})(SpecialVehicleType || (SpecialVehicleType = {}));
export var CarTag;
(function (CarTag) {
    CarTag[CarTag["Luxurious"] = 1] = "Luxurious";
    CarTag[CarTag["OffroadCapable"] = 3] = "OffroadCapable";
    CarTag[CarTag["SixSeats"] = 4] = "SixSeats";
    CarTag[CarTag["Hybrid"] = 5] = "Hybrid";
    CarTag[CarTag["Electric"] = 6] = "Electric";
    CarTag[CarTag["FuelEfficient"] = 7] = "FuelEfficient";
    CarTag[CarTag["HighHorsePower"] = 8] = "HighHorsePower";
    CarTag[CarTag["BigTrunk"] = 9] = "BigTrunk";
    CarTag[CarTag["Sunroof"] = 10] = "Sunroof";
    CarTag[CarTag["MagnesiumWheels"] = 11] = "MagnesiumWheels";
    CarTag[CarTag["FastAcceleration"] = 12] = "FastAcceleration";
    CarTag[CarTag["BigFuelTank"] = 13] = "BigFuelTank";
    CarTag[CarTag["HighSafetyEquipment"] = 14] = "HighSafetyEquipment";
    CarTag[CarTag["ForwardDistanceMonitor"] = 15] = "ForwardDistanceMonitor";
    CarTag[CarTag["AdaptiveCruiseControl"] = 16] = "AdaptiveCruiseControl";
    CarTag[CarTag["LowPollution"] = 17] = "LowPollution";
})(CarTag || (CarTag = {}));
