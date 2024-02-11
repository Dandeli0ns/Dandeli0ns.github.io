import { NavBar } from "../../components/navBar/NavBar"
import { Prompt } from "../../components/prompt/Prompt"

export const ImageGeneration = () => {
    return (
        <div className='p-5 bg-white dark:bg-gray-900 antialiased '>
            <h1 className={'mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white'}>Image Generation</h1>
            <Prompt />
        </div>
    )
}