export class IntentMock {
    public sentEvents: {roomId: string, content: any}[] = [];

    static create(){
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return new this() as any;
    }

    sendText(roomId: string, noticeText: string, msgtype: string) {
        this.sentEvents.push({
            roomId,
            content: {
                msgtype,
                body: noticeText,
            }
        });
    }

    sendEvent(roomId: string, content: any) {
        this.sentEvents.push({
            roomId,
            content,
        });
    }
}