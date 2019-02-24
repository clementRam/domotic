export class Notification {
    type: string;
    message: string;
    displayed: boolean;

    constructor(message: string, type: string) {
        this.message = message;
        this.type = type;
        this.displayed = true;
    }
}
