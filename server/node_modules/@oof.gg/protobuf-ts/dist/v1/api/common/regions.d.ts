export declare const protobufPackage = "v1.api.common";
/** / Enum for regions */
export declare enum RegionEnum {
    /** REGION_UNSPECIFIED - Default unspecified region */
    REGION_UNSPECIFIED = 0,
    /** NA_EAST - / Americas */
    NA_EAST = 1,
    /** NA_WEST - North America West */
    NA_WEST = 2,
    /** SA - South America (all countries) */
    SA = 3,
    /** EU_WEST - / Europe */
    EU_WEST = 4,
    /** EU_CENTRAL - Central Europe */
    EU_CENTRAL = 5,
    /** EU_NORTH - Northern Europe */
    EU_NORTH = 6,
    /** AS_EAST - / Asia */
    AS_EAST = 7,
    /** AS_SE - Southeast Asia */
    AS_SE = 8,
    /** AS_SOUTH - South Asia */
    AS_SOUTH = 9,
    /** OC - / Oceania */
    OC = 10,
    /** MENA - / MENA (Middle East & North Africa) */
    MENA = 11,
    /** AFRICA - Sub-Saharan Africa */
    AFRICA = 12,
    /** GLOBAL - Global */
    GLOBAL = 13,
    UNRECOGNIZED = -1
}
export declare function regionEnumFromJSON(object: any): RegionEnum;
export declare function regionEnumToJSON(object: RegionEnum): string;
