import { Button, Label, Textarea, TextInput } from "flowbite-react"
import { Fragment } from "react"

export const Prompt = () => {
    return (
        <>
            <div className=' w-full block gap-2'>
            <   Label htmlFor="large">Enter image generation prompt</Label>
                <Textarea id='large' maxLength={4096}></Textarea>
            </div>
            <label htmlFor=""></label>
            <Button>Sumbmit</Button>
        </>

    )
}