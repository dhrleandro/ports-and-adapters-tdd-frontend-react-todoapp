export default class UniqueIdentifier {
    public static generate(): string {
        // https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
        // https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
        return Math.random().toString(36).slice(2, 7) + (+new Date).toString(36); // base 36, return 5 + 8 = 13 characters
    }
}