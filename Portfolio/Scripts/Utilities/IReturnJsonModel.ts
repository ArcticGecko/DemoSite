export interface IReturnJsonModel<TV> {
    wasSuccessful: boolean;
    message: string;
    value: TV;
}