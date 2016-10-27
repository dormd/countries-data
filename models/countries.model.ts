interface IStringToString {
    [key: string]: string
}

interface IStringToOfficialCommon {
    [key: string]: {
        official: string,
        common: string
    }
}

export interface ICountry {
    name: {
        wiki?: string,
        common: string,
        official: string,
        native: IStringToOfficialCommon
    },    
    demonym: string,
    capital: string,
    iso_3166_1_alpha2: string,
    iso_3166_1_alpha3: string,
    iso_3166_1_numeric: string,
    currency: any[] | {
        [key: string]: {
            iso_4217_code: string,
            iso_4217_numeric: number | string,
            iso_4217_name: string,
            iso_4217_minor_unit: number
        }
    },
    tld: string[],
    alt_spellings: string[],
    languages: IStringToString | any[],
    translations: IStringToOfficialCommon | any[],
    geo: {
        continent: IStringToString,
        postal_code: boolean,
        latitude: string,
        latitude_dec: string,
        longitude: string,
        longitude_dec: string,
        max_latitude: string,
        max_longitude: string,
        min_latitude: string,
        min_longitude: string,
        area: number,
        region: string,
        subregion: string,
        world_region: string,
        region_code: string,
        subregion_code: string,
        landlocked: boolean,
        borders: string[],
        independent: string,
    },
    dialling: {
        calling_code: string[],
        national_prefix: string,
        national_number_lengths: number[],
        national_destination_code_lengths: number[],
        international_prefix: string | number
    },
    extra: {
        geonameid: number,
        edgar: string | number,
        itu: string | number,
        marc: string | number,
        wmo: string | number,
        ds: string | number,
        fifa: string | number,
        fips: string | number,
        gaul: number,
        ioc: string | number,
        cowc: string | number,
        cown: number,
        fao: number,
        imf: number,
        ar5: string | number,
        address_format: string,
        eu_member: boolean,
        vat_rates: {
            standard: number,
            reduced: number[],
            super_reduced: number,
            parking: number
        }
    },
    population: {
        count: number,
        worldPercentage: number
    },
    wikiLink: string,
    isOutlinesImgExist?: boolean,
    isCoatOfArmsImgExist?: boolean,
}

export class Countries {
    [key: string]: ICountry;
}