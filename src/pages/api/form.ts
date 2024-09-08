import type { APIRoute } from "astro";
import { z } from "zod";

import APIResponse from "@lib/api";
import { FormContact } from "@lib/validations";

export const POST: APIRoute = async ({ request }) => {
    const response = APIResponse.create(200, "ok")

    try {
        const data = await request.formData()
        const formDataUnvalidate = Object.fromEntries(data)
        const formDataValidate = FormContact.parse(formDataUnvalidate)
       
        const formRequestAppend = await fetch("https://docs.google.com/forms/d/e/1FAIpQLSfHJTAHEUaKMGavWAcDv6eR8w8EQgpheX_UqL8TXusvtH2vZQ/formResponse", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: new URLSearchParams({
                "entry.1318961954": formDataValidate.email as string,
                "entry.390466474": formDataValidate.subject as string,
                "entry.1720182503": formDataValidate.message as string
            })
        })

        if (!formRequestAppend.ok) throw new Error("An error occurred while sending the contact form. Please try again later. Thank you for your patience.")
    } catch (error) {
        if (error instanceof z.ZodError) {
            response.setMessage("Not Valid Form")
            response.setStatus(400)
            response.setResponse(error)
        } else if (error instanceof Error) {
            response.setMessage("Internal Error")
            response.setStatus(500)
            response.setResponse({
                message: error.message
            })
        } else {
            console.log(response.uuid, error)
        }
    }

    response.headers.append("Content-Type", "application/json")

    return response.responseData
}