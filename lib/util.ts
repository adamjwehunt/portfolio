export function joinListItems(arr: string[]): string {
	if (arr.length === 0) {
		return '';
	} else {
		return arr.join(', ');
	}
}
