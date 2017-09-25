# countries-data
The project contains json data in typescript files.
The data is about countries, languages codes and anthems.

Used by [ng2-pipe](https://github.com/dormd/ng2-pipe) and [ng2-countries](https://github.com/dormd/ng2-countries).

## Table of Contents
* [Installation](#installation)
* [How to use with Angular 2](#how-to-use-in-angular-2)
* [Countries Data](#countries-data)
  * [Data Structure](#data-structure)
  * [Example: Israel](#example:-israel)
* [Languages Data](#languages-data)
  * [Data Structure](#data-structure)
  * [Example: Hebrew](#example:-hebrew)
  * [Example: Malay](#example:-malay)
  * [Example: Albanian](#example:-albanian)  
* [Anthems Data](#anthems-data)
  * [Data Structure](#data-structure)
  * [Example: Israel](#example:-israel)
* [Initial Data Source](#initial-data-source)

## Installation
```
npm install countries-data
```

## Countries Data
The countries data based on iso_3166_1_alpha2 (a2) countries codes.

### Data Structure
- `name`
    - `common` - common name in english
    - `official` - official name in english
    - `native` - list of all native names
        - key: three-letter ISO 639-3 language alpha code
        - value: name object
            - key: `official` - official name translation
            - key: `common` - common name translation
- `demonym` - name of residents
- `capital` - capital city
- `iso_3166_1_alpha2` - code ISO 3166-1 alpha-2
- `iso_3166_1_alpha3` -code ISO  3166-1 alpha-3
- `iso_3166_1_numeric` - code ISO 3166-1 numeric
- `currency` - ISO 4217 currency code(s)
    - key: three-letter ISO 4217 currency code
    - value: currency object
        - key: `iso_4217_code` - three-letter ISO 4217 currency alpha code
        - key: `iso_4217_numeric` - three-number ISO 4217 currency numeric code
        - key: `iso_4217_name` - official ISO 4217 currency name
        - key: `iso_4217_minor_unit` - minor currency unit
- `tld` - country code top-level domain
- `alt_spellings` - alternative spellings
- `languages` - list of official languages
    - key: three-letter ISO 639-3 language code
    - value: name of the language in english
- `translations` - list of name translations
    - key: three-letter ISO 639-3 language code
    - value: name object
        - key: `official` - official name translation
        - key: `common` - common name translation
- `geo`
    - `continent` - continents that country lies in
        - key: two-letter continent code
        - value: name of the continent in english
    - `postal_code` - geographical area postal code
    - `latitude` - short form of latitude coordinate point
    - `latitude_dec` - described latitude coordinate point
    - `longitude` - short form of longitude coordinate point
    - `longitude_dec` - described longitude coordinate point
    - `max_latitude` - maximum latitude coordinate point
    - `max_longitude` - maximum longitude coordinate point
    - `min_latitude` - minimum latitude coordinate point
    - `min_longitude` - minimum longitude coordinate point
    - `area` - land area in km²
    - `region` - geographical region
    - `subregion` - geographical sub-region
    - `world_region` - geographical world region
    - `region_code` - geographical region numeric code
    - `subregion_code` - geographical sub-region numeric code 
    - `landlocked` - landlocked status
    - `borders` - land borders
    - `independent` - independent status
- `dialling`
    - `calling_code` - calling code(s)
    - `national_prefix` - national prefix
    - `national_number_lengths` - national number lengths
    - `national_destination_code_lengths` - national destination code lengths 
    - `international_prefix` - international prefix
- `extra`
    - `geonameid` - Geoname ID
    - `edgar` - Electronic Data Gathering, Analysis, and Retrieval system
    - `itu` - Codes assigned by the International Telecommunications Union
    - `marc` - MAchine-Readable Cataloging codes from the Library of Congress
    - `wmo` - Country abbreviations by the World Meteorological Organization
    - `ds` - Distinguishing signs of vehicles in international traffic
    - `fifa` - Codes assigned by the Fédération Internationale de Football Association
    - `fips` - Codes from the U.S. Federal Information Processing Standard
    - `gaul` - Global Administrative Unit Layers from the Food and Agriculture Organization
    - `ioc` - Codes assigned by the International Olympics Committee
    - `cowc` - Correlates of War character
    - `cown` - Correlates of War numeric
    - `fao` - Food and Agriculture Organization 
    - `imf` - International Monetary Fund 
    - `ar5` - Fifth Assessment Report (AR5) 
    - `address_format` - Address forma
    - `eu_member` - European Union Member
    - `vat_rates` - Value-Added Tax
- `population`
    - `count` - population number
    - `worldPercentage` - country population of world population percentage
- `wikiLink` - relative link to country wikipedia page

### Example: Israel
```json
{
  "IL": {
    "name": {
      "common": "Israel",
      "official": "State of Israel",
      "native": {
        "heb": {
          "official": "\u05de\u05d3\u05d9\u05e0\u05ea \u05d9\u05e9\u05e8\u05d0\u05dc",
          "common": "\u05d9\u05e9\u05e8\u05d0\u05dc"
        },
        "ara": {
          "official": "\u062f\u0648\u0644\u0629 \u0625\u0633\u0631\u0627\u0626\u064a\u0644",
          "common": "\u0625\u0633\u0631\u0627\u0626\u064a\u0644"
        }
      }
    },
    "demonym": "Israeli",
    "capital": "Jerusalem",
    "iso_3166_1_alpha2": "IL",
    "iso_3166_1_alpha3": "ISR",
    "iso_3166_1_numeric": "376",
    "currency": {
      "ILS": {
        "iso_4217_code": "ILS",
        "iso_4217_numeric": 376,
        "iso_4217_name": "New Israeli Sheqel",
        "iso_4217_minor_unit": 2
      }
    },
    "tld": [
      ".il"
    ],
    "alt_spellings": [
      "IL",
      "State of Israel",
      "Med\u012bnat Yisr\u0101'el"
    ],
    "languages": {
      "ara": "Arabic",
      "heb": "Hebrew"
    },
    "translations": {
      "deu": {
        "official": "Staat Israel",
        "common": "Israel"
      },
      "fra": {
        "official": "\u00c9tat d'Isra\u00ebl",
        "common": "Isra\u00ebl"
      },
      "hrv": {
        "official": "Dr\u017eava Izrael",
        "common": "Izrael"
      },
      "ita": {
        "official": "Stato di Israele",
        "common": "Israele"
      },
      "jpn": {
        "official": "\u30a4\u30b9\u30e9\u30a8\u30eb\u56fd",
        "common": "\u30a4\u30b9\u30e9\u30a8\u30eb"
      },
      "nld": {
        "official": "Staat Isra\u00ebl",
        "common": "Isra\u00ebl"
      },
      "por": {
        "official": "Estado de Israel",
        "common": "Israel"
      },
      "rus": {
        "official": "\u0413\u043e\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u043e \u0418\u0437\u0440\u0430\u0438\u043b\u044c",
        "common": "\u0418\u0437\u0440\u0430\u0438\u043b\u044c"
      },
      "spa": {
        "official": "Estado de Israel",
        "common": "Israel"
      },
      "fin": {
        "official": "Israelin valtio",
        "common": "Israel"
      }
    },
    "geo": {
      "continent": {
        "AS": "Asia"
      },
      "postal_code": true,
      "latitude": "31 30 N",
      "latitude_dec": "31.814193725585938",
      "longitude": "34 45 E",
      "longitude_dec": "34.75337219238281",
      "max_latitude": "33.286111",
      "max_longitude": "35.666667",
      "min_latitude": "29.516667",
      "min_longitude": "34.283333",
      "area": 20770,
      "region": "Asia",
      "subregion": "Western Asia",
      "world_region": "EMEA",
      "region_code": "142",
      "subregion_code": "145",
      "landlocked": false,
      "borders": [
        "EGY",
        "JOR",
        "LBN",
        "SYR"
      ],
      "independent": "Yes"
    },
    "dialling": {
      "calling_code": [
        "972"
      ],
      "national_prefix": "0",
      "national_number_lengths": [
        7,
        8,
        9
      ],
      "national_destination_code_lengths": [
        2
      ],
      "international_prefix": "00"
    },
    "extra": {
      "geonameid": 294640,
      "edgar": "L3",
      "itu": "ISR",
      "marc": "is",
      "wmo": "IS",
      "ds": "IL",
      "fifa": "ISR",
      "fips": "IS",
      "gaul": 121,
      "ioc": "ISR",
      "cowc": "ISR",
      "cown": 666,
      "fao": 105,
      "imf": 436,
      "ar5": "MAF",
      "address_format": "{{recipient}}\n{{street}}\n{{postalcode}} {{city}}\n{{country}}",
      "eu_member": null,
      "vat_rates": null
    },
    "population": {
      "count": 8597260,
      "worldPercentage": 0.115
    },
    "wikiLink": "\/wiki\/Israel"
  }
}
```

## Languages Data
The Languages data based on ISO 639-3 languages codes.

### Data Structure
- `full` - language full name
- `speak` (optional)
    - `isExist` - true if language speaker exist
    - `optional` - another speaker that speak the language
    - `speakerGenderRestriction` - Male when Female speaker does not exist

### Example: Hebrew
```json
{
  "heb": {
    "full": "Hebrew",
    "speak": {
      "isExist": false
    }
  }
}
```

### Example: Malay
```json
{
  "msa": {
    "full": "Malay",
    "speak": {
      "optional": "eng"
    }
  }
}
```

### Example: Albanian
```json
{
  "alb": {
    "full": "Albanian",
    "speak": {
      "speakerGenderRestriction": "Male"
    }
  }
}
```

## Anthems Data
The country keys is based on iso_3166_1_alpha2 (a2) countries codes.

### Data Structure
- `link` - full link to audio file 
- `source` - link source

### Example: Israel
```json
{ 
  "IL": {
    "link":"https://commons.wikimedia.org/wiki/File%3AHatikvah instrumental.ogg?embedplayer=yes",
    "source":"wikimedia"
  }
}
```

## How to use with Angular 2
### Step 1: NgModule file
```javascript
import { NgModule, OpaqueToken }      from '@angular/core';
         
export { Countries, ICountry, 
         Anthems, IAnthem,
         Languages, ILanguage,
         CountriesData, AnthemsData,
         LanguagesData }              from 'countries-data';

export const COUNTRIES_DATA = new OpaqueToken('CountriesData');
export const LANGUAGES_DATA = new OpaqueToken('LanguagesData');
export const ANTHEMS_DATA = new OpaqueToken('AnthemsData');

const providers = [
    { provide: COUNTRIES_DATA, useValue: CountriesData },
    { provide: LANGUAGES_DATA, useValue: LanguagesData },  
    { provide: ANTHEMS_DATA, useValue: AnthemsData }
];

@NgModule({
    providers: providers
})
export class SharedModule { }
```

### Step 2: Component file
```javascript
import { Injectable } from '@angular/core';
import { COUNTRIES_DATA, Countries } from '../../shared/models';

@Injectable()
export class MyService {

    constructor(@Inject(COUNTRIES_DATA) private _countriesData: Countries) { }

    public getCountryPopulation(alpha2: string): ICountryNativeName {
        return this._countriesData[alpha2].population.count;
    }
}
```



### Initial Data Source
The initial json data is part of [rinvex country](https://github.com/rinvex/country) repository.
