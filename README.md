# countries-data
The project contain json data in a typescript files.
The data is about countries, languages codes and anthems.

Used by [ng2-pipe](https://github.com/dormd/ng2-pipe) and [ng2-countries](https://github.com/dormd/ng2-countries).

## Table of Contents
* [Installation](#installation)
* [Countries Data](#countries-data)
* [Languages Data](#languages-data)
* [Anthems Data](#anthems-data)
* [How to use with Angular 2](#how-to-use-in-angular-2)
* [Initial Data Source](#initial-data-source)

## Installation
```
npm install countries-data
```

## Countries Data
The countries data based on iso_3166_1_alpha2 (a2) countries codes.

## Languages Data
The Languages data based on ISO 639-3 languages codes.

## Anthems Data
The country keys is based on iso_3166_1_alpha2 (a2) countries codes.

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
