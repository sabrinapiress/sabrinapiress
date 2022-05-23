import bugImageUrl from '../../assets/bug.svg'
import ideaImageUrl from '../../assets/idea.svg'
import otherImageUrl from '../../assets/thought.svg'
import { useState } from "react";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentSteps } from "./Steps/FeedbackContentStep";
import { FeedbackSuccessStep } from './Steps/FeedbackSuccessStep';

export const feedbackTypes = {
    BUG: {
        title: 'Problema',
        image: {
            source: bugImageUrl,
            alt: 'Imagem de um inseto'

        }
    },
    IDEA: {
        title: 'Ideia',
        image: {
            source: ideaImageUrl,
            alt: 'Imagem de uma lâmpada'

        }
    },
    OTHER: {
        title: 'Outro',
        image: {
            source: otherImageUrl,
            alt: 'Imagem de um nuvem de pensamento'

        }
    }
}
//array com os objetos que são nossos tipos de formularios

export type FeedbackType = keyof typeof feedbackTypes
//criando um type do typescript- estou falando que o tipo do FeedbackType são as chaves de (keyof) e convertendo o objeto em tipagem. resumindo falando que o feedback vai ser os tipos, se passar o mouse em cima dessa função tirando o key (no codigo nos dizemos que a key é o BUG, IDEA etc. na linha 42, no parametro)
// e tbm com ele, da pra entender melhor, pois quando está so com o typeof ele retorna so os tipo

export function WidgetForm() {
    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
    //no estado estamos dizendo que ele pode armazenar esses tipos de feedback "bug" "idea" "other", ou nulo, caso a pessoa não tenha selecionado nada
    const [feedbackSent, setFeedbackSent] = useState(false)

    function hendleRestartFeedback() {
        setFeedbackSent(false)
        setFeedbackType(null)
    }
    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            {/* ternario para dizer que se o feedback jpa foi enviado mostramos o "sucesso", senão mostramos o formulario para ser preenchido */}
            {feedbackSent ? (
                <FeedbackSuccessStep onFeedbackRestartRequested={hendleRestartFeedback} />
            ) : (
                <>
                    {/*essa função serve pra escolher, onde ou ele mostra os tipos de feedbacks para esolher, e depois que escolhe o estado não esta mais no null, e ele ira retornar 
                        o formulario para se preencher */}
                    {!feedbackType ? (
                        <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
                    ) : ( //essa função que esta indo por props é a função de setar o valor. e quando clica no feedback escolhido ele retorna a tag depois do ":" que vai ser um componente que é a caixa de formulario
                        <FeedbackContentSteps feedbackType={feedbackType}
                            onFeedbackRestartRequested={hendleRestartFeedback}
                            onFeedbackSent={() => setFeedbackSent(true)}
                        />
                    )}
                </>
            )}

            <footer className="text-xs text-neutral-400">
                Feito com ♥ pela <a className="underline underline-offset-2" href="https://rocketseat.com.br">Rocketseat</a> e desenvolvido por Sabrina Pires
            </footer>
        </div>
    )
}