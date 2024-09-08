export interface APIRest {
    status: number
    response: any
    message: string
    uuid: string
}

export default class APIResponse {
    private status = 200;
    private message = "ok";
    private response = {};
    public uuid = "";
    public headers = new Headers()
    
    private constructor (status: number, message: string, uuid: string) {
        this.status = status
        this.message = message
        this.uuid = uuid
    }

    static create(status: number, message: string) {
        return new APIResponse(status, message, crypto.randomUUID())
    }

    public setResponse(response: object) {
        this.response = response
    }

    public setMessage(message: string) {
        this.message = message
    }

    public setStatus(status: number) {
        this.status = status
    }

    public get responseData () {
        const response = JSON.stringify({ 
            uuid: this.uuid,
            status: this.status,
            message: this.message,
            response: this.response
        })

        return new Response(response, { status: this.status, headers: this.headers })
    }
}