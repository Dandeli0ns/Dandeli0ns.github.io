import { Button, Label, Select, Textarea, TextInput } from "flowbite-react"
import { Field, Form, Formik } from "formik"
import OpenAI from "openai";
import { Fragment } from "react"

export const Prompt = () => {
    const openai = new OpenAI({ apiKey: process.env.REACT_APP_OPENAI_API_KEY, dangerouslyAllowBrowser: true });

    const onSubmit = async () => {
        const response = await openai.images.generate({
            model: "dall-e-2",
            prompt: "a white siamese cat",
            n: 1,
            size: "1024x1024",
          });
    }

    return (
        <Formik
            initialValues={{ model: '', prompt: '', number: '' }}
            onSubmit={async (values, actions) => {
                const response = await openai.images.generate({
                    model: values.model,
                    prompt: values.prompt,
                    n: parseInt(values.number),
                    size: "1024x1024",
                  });
            }}
            >
            {formik => (
                <Form>
                    <div className="flex flex-col gap-4">
                        <div className="mb-2 block">
                            <Label htmlFor="prompt">Enter image generation prompt</Label>
                            <Field as={Textarea} id="prompt" name="prompt" className="w-full block gap-2" maxLength={4096} />
                        </div>
                        <div className="mb-2 block">
                            <Label htmlFor="model">Model</Label>
                            <Field as={Select} name="model" className="max-w-md" required>
                                <option value="dall-e-2">dall-e-2</option>
                                <option value="dall-e-3">dall-e-3</option>
                            </Field>
                        </div>
                        <div className="mb-2 block">
                            <Label htmlFor="number">Number of Images</Label>
                            <Field as={Select} name="number" className="max-w-md" required>
                                <option value="1">1</option>
                                <option value="2">2</option>
                            </Field>
                        </div>
                        <div className="mb-4 block">
                            <Button type="submit">Submit</Button>
                        </div>
                    </div>
                </Form>
            )}
        </Formik>
    );
};