export class ObjectUtils {

    public static deepClone(input: any): any {
        return JSON.parse(JSON.stringify(input));
    }

}