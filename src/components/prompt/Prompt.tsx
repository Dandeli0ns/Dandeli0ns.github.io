import { Button, Label, Textarea, TextInput } from "flowbite-react"
import { Formik } from "formik"
import { Fragment } from "react"

export const Prompt = () => {

    const onSubmit = () => {
        
    }

    return (
            <Formik
                initialValues={{ input: '' }}
                onSubmit={async (values, actions) => {
                const apiUrl = process.env.REACT_APP_API_URL || "";
                actions.setSubmitting(false);
                }}
                >
                {formik => (
                    <>
                    <div className=' w-full block gap-2'>
                    <Label htmlFor="large">Enter image generation prompt</Label>
                        <Textarea id='large' maxLength={4096}></Textarea>
                        </div>
                    <label htmlFor=""></label>
                    <Button>Sumbmit</Button>        
                    </>
                )}
            </Formik>


    )
}