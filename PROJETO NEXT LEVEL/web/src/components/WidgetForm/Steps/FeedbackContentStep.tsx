import { ArrowLeft } from "phosphor-react"
import { FormEvent, useState } from "react"
import { FeedbackType, feedbackTypes } from ".."
import { CloseButton } from "../../CloseButton"
import { ScreenshotButton } from "../ScreenshotButton"

interface FeedbackTypeStepProps {
    feedbackType: FeedbackType
    //esse FeedbackType é a função que fizemos para falar que nosso estado são os tipos de feedback, e o interface serve para passar por props
    //que é BUG, IDEA OU OUTHER
    onFeedbackRestartRequested: () => void
    onFeedbackSent: () => void //função de mostrar caixa de "sucesso", que esta sendo passada por props do index.tsx
}

export function FeedbackContentSteps({
    feedbackType,
    onFeedbackRestartRequested,
    onFeedbackSent //props
}: FeedbackTypeStepProps) { //aqui fazemos uma desestruturação, para não precisar passar por props quando formos chamar a função, como fizemos no outro arquivo(index.tsx), então aqui fica uma outra maneira
    
    const [screenshot, setScreenshot] = useState <string | null> (null)  //esse estado é o do print tirado, falamos que esse estado é uma string caso a foto já tenha sido tirada ou null caso não

    const [comment, setComment]= useState("") //state do comentario do formulario do feedback

    const feedbackTypeInfo = feedbackTypes[feedbackType] //aqui estamos dizendo que feedbackinfo são as informações do nosso objeto no index.tsx(feedbackType"s"), e usamos a função FeedbackType, da linha 36 do index.tsx, que passamos por props, que serve para pegar só os tipos de feedbck BUG< IDEA etc
    
    function handleSubmitFeedback(event: FormEvent) {
        event.preventDefault
        onFeedbackSent()
    }
    return (
        // essa div sem nada dentro é chamada de fragment, serve para não influenciar nas estilizações, pois se percebermos, com uma tag <div> normal no lugar, a estilização acaba mudando
        <>
            <header>
                <button
                    type="button"
                    className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100"
                    onClick={onFeedbackRestartRequested}
                >
                    <ArrowLeft weight="bold" className="w-4 h-4" />
                    {/* botão de voltar para os feedbacks*/}
                </button>
                <span className="text-xl leading-6 flex justify-center gap-2">
                    <img src={feedbackTypeInfo.image.source} alt={feedbackTypeInfo.image.alt} className="w-6 h-6" />
                    {feedbackTypeInfo.title}</span>
                    {/* titulozinho com a imagem */}
                <CloseButton />
                {/* botão de fechar */}
            </header>

            <form onSubmit={handleSubmitFeedback} className="my-4 w-full">
                <textarea
                    className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none resize-none scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
                    placeholder="Conte com detalhes o que esta acontecendo..."
                    onChange={event => setComment(event.target.value)}
                />
                {/* formulario para se preencher */}
                <footer className="flex gap-2 mt-2">
                    <ScreenshotButton 
                    screenshot={screenshot}
                    onScreenshotTook={setScreenshot}
                    // aqui estamos passando por props o estado pada adicionar a foto e conseguirmos acessar esse valor
                    />
                    {/* botão para tirat print da tela */}
                    <button
                        type="submit"
                        disabled={comment.length === 0}
                        className="p-2 bg-brand-500 rounded-md border-transparent flex-1 justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500"
                    >
                        Enviar Feedback
                    </button>
                    {/* botão para enviar o feedback */}
                </footer>
            </form>
        </>
    )
}