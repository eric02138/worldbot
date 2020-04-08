import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
	name: "countryNameFormatter"
})

export class CountryNameFormatter implements PipeTransform {
	/*
	* @param CountryBot object ({'name': 'United States', 'iso3cc': 'USA', 'count': 0})
	* @returns an html string with the country name and an image tag with the flag of that country 
	*/
	transform(countryBot: any) {
		if (!countryBot){
			return "";
		} else {
			const basePath = 'https://raw.githubusercontent.com/adamoliver/Country-Flags-ISO-3/master/gif/';
			let countryName = countryBot.name;
			let iso3cc = countryBot.iso3cc.toLowerCase();
			let flagPath = `${basePath}${iso3cc}.gif`;
			return `${countryName} - <img src='${flagPath}'>`;
		}
	}
}