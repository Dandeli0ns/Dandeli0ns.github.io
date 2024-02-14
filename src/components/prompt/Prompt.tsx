import { Console } from "console";
import { Button, Label, Modal, Select, Textarea, TextInput } from "flowbite-react"
import { Field, Form, Formik } from "formik"
import OpenAI from "openai";
import { Fragment, useState } from "react"

export const Prompt = () => {
    const [imageUrl, setImageUrl] = useState(""); 
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isRegenerating, setIsRegenerating] = useState(false);
    const [generateErrorModal, setGenerateErrorModal] = useState(false);
    const [regenerateErrorModal, setRegenerateErrorModal] = useState(false);
    
    const openai = new OpenAI({ apiKey: process.env.REACT_APP_OPENAI_API_KEY, dangerouslyAllowBrowser: true });

    const onRegenerateClick = async () => {
        if (imageUrl === undefined) {
            setRegenerateErrorModal(true);
        }
        setIsRegenerating(true);

        const image = await fetch(imageUrl);

        const response = await openai.images.createVariation({image});
        
        const regenerateUrl = response.data[0].url;

        if (regenerateUrl !== undefined){
            setImageUrl(regenerateUrl);
        }
        else {
            setRegenerateErrorModal(true);
            setIsRegenerating(false);
        }
    }

    return (
        <Formik
            initialValues={{ model: 'dall-e-2', prompt: '', number: '' }}
            onSubmit={async (values, actions) => {
                setIsSubmitting(true);
                try{
                const response = await openai.images.generate({
                    model: values.model,
                    prompt: values.prompt,
                    n: parseInt(values.number) || 1,
                    size: "1024x1024",
                  });

                  const image = response.data[0].url;
                  console.log(image);
                  setImageUrl(image || '');
                  setIsSubmitting(false);
                }
                catch{
                    setIsSubmitting(false);
                    setGenerateErrorModal(true)
                }
            }}
            >
            {formik => (
                <Form>
                    <Modal show={generateErrorModal} onClose={() => setGenerateErrorModal(false)}>
                        <Modal.Header>Oops!</Modal.Header>
                        <Modal.Body>
                        <div className="space-y-6">
                            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                An error occured connecting to OpenAI
                            </p>
                        </div>
                        </Modal.Body>
                        <Modal.Footer>
                        <Button color="gray" onClick={() => setGenerateErrorModal(false)}>
                            Decline
                        </Button>
                        </Modal.Footer>
                    </Modal>
                    <Modal show={regenerateErrorModal} onClose={() => setRegenerateErrorModal(false)}>
                        <Modal.Header>Oops!</Modal.Header>
                        <Modal.Body>
                        <div className="space-y-6">
                            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                An error occured connecting to OpenAI
                            </p>
                        </div>
                        </Modal.Body>
                        <Modal.Footer>
                        <Button color="gray" onClick={() => setGenerateErrorModal(false)}>
                            Decline
                        </Button>
                        </Modal.Footer>
                    </Modal>
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
                            <Button type="submit" isProcessing={isSubmitting}>Submit</Button>
                        </div>
                        {imageUrl && <>
                    <img src={imageUrl} alt="Generated" width={500}/>
                    <Button.Group>
                        <Button isProcessing={isRegenerating} onClick={onRegenerateClick}>Regenerate</Button>
                    </Button.Group>
                    </>}
                    </div>
                </Form>
            )}
        </Formik>
    );
};