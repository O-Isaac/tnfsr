import type { APIRest } from "@lib/api";
import { Input, Textarea, Button } from "@nextui-org/react";
import { toast } from 'sonner'

export default function FormComponentContact () {
    const handleSumbit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        
        const form = new FormData(event.currentTarget)
        const request = await fetch("/api/form", { body: form, method: "POST" })
        const response = await request.json() as APIRest
        
        if (response.status === 400) {
            const { issues } = response.response
            const messages = issues.map((issue: any) => issue.message)
            toast.error(response.message, {
                description: messages.join(" "),
                richColors: true
            })
        } else if (response.status === 200)  {
            toast.success("Contact succesfully!", {
                richColors: true
            })
        }
    }
    
    return (
        <form onSubmit={handleSumbit} method="post" action="/api/form" className="grid gap-4">
            <Input size="lg" name="email" type="email" label="Email" />
            <Input size="lg" name="subject" type="text" label="Subject" />
            <Textarea isRequired name="message" size="lg" label="Message" />
            <div className="grid lg:grid-cols-2 gap-2">
                <Button color="primary" variant="shadow" type="submit">
                    Sumbit
                </Button> 
                <Button color="secondary" variant="flat" type="submit">
                    Reset
                </Button> 
            </div> 
        </form>
    )
}