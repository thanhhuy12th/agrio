export class StringLibary {
	public convertHomeUrl (url: string): string {
		let arr = url.split("/");
		arr = arr.filter(item => arr.indexOf(item) <= 1)
		let newUrl = arr.join("/");
		return newUrl;
	}
	public convertAdminUrl (url: string): string {
		let arr = url.split("/");
		arr = arr.filter(item => arr.indexOf(item) <= 2)
		let newUrl = arr.join("/");
		return newUrl;
	}
}