import { FeedbackType, feedbackTypes } from ".."
import { CloseButton } from "../../CloseButton"

interface FeedbackTypeStepProps {
    onFeedbackTypeChanged: (type: FeedbackType) => void
}
//aqui estamos recebendo a props do index, linha 52. temos que fazer essa função para falar que FeedbackTypeStep vai receber onFeedbackTypeChanged como props .
//e que essa função recebe qual é o tipo do feedback (parametro), e void pq ela não retorna nada

export function FeedbackTypeStep(props: FeedbackTypeStepProps) {
    //aqui estamos recebendo a props por parametro
    return (
        // essa div sem nada dentro é chamada de fragment, serve para não influenciar nas estilizações, pois se percebermos, com uma tag <div> normal no lugar, a estilização acaba mudando
        <>
            <header>
                <span className="text-xl leading-6 flex justify-center">Deixe seu feedback</span>
                <CloseButton />
            </header>

                <div className="flex py-8 gap-2 w-full">
                    {Object.entries(feedbackTypes).map(([key, value]) => {
                        return (
                            //Esse botão são os tipos de feedback, onde se faz o map para passar pelo array de objetos onde tem os nomes dos feedback, e retornar suas respectivas imagens e nomes.
                            <button
                                key={key}
                                className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
                                onClick={() => props.onFeedbackTypeChanged(key as FeedbackType)}
                                type="button"       //nessa parte se só deixarmos com key como parametro, ele não reconhece, diz que a key é um string, não entende que é o BUG, IDEA E OTHER, passando o as FeedbackType, vc diz que obrigatoriamente a key vai ser isso.
                            >
                                <img src={value.image.source} alt={value.image.alt} />
                                <span>{value.title}</span>
                            </button>
                        )
                    })}
                </div>
        </>
    )
}