import html2canvas from "html2canvas"
import { backgroundPosition } from "html2canvas/dist/types/css/property-descriptors/background-position"
import { Camera, Trash } from "phosphor-react"
import { useState } from "react"
import { Loading } from "../Loading"

interface ScrenshotButtonProps{
    screenshot:string|null
    //recebendo a foto do state por props
    onScreenshotTook: (screenshot: string | null) => void
}

export const ScreenshotButton = ({screenshot, onScreenshotTook}: ScrenshotButtonProps) => {
    const [isTakingScreenshot, setIsTakingScreenshot] = useState(false)
    //estado que enquanto a foto esta sendo tirada quero mostrar um loadin
    async function handleTakeScreenshot(){
        setIsTakingScreenshot(true)

        const canvas = await html2canvas(document.querySelector('html')!)
        const base64image = canvas.toDataURL('image/png')
        // console.log(base64image);
        
        onScreenshotTook(base64image)
        //a função de onScreenshot esta retornando a nossa foto agora
        setIsTakingScreenshot(false)
    }
    //const canvas -  tira foto da tela, o querySelector por padrão do typescrip ele sempre pode retornar o elemento ou nulo, pq ele pode acabar não encontrando,
    //mas nesse caso como sabemos que ele vai encontrar o 'html', pois o nosso index sempre vai ter.. colocamos o ponto de exclamação.. para forçar dizendo que ele nunca vai ser nulo
    //const base64image - converte o print tirado para uma imagem em png no formato base64, é um formato de texto e representa uma imagem.. podemos dar um console.log para dar uma olhada melhor
    //pois quando tirado a foto o que retorna no console é um grande texto sem sentido que no final tem um copy, que se vc copia esse terxo e joga no google ele retorna a  foto tirada 
    if(screenshot){
        return(
            <button
            type="button"
            className="p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-zinc-400 hover:text-zinc-100 transition-colors"
            onClick={()=> onScreenshotTook(null)}
            style={{
                backgroundImage:`url($(screenshot))`,
                backgroundPosition:  'right bottom',
                backgroundSize: 100
            }}
            //aqui é onde aparece a foto
            >
                <Trash weight="fill"/>
            {/* icone da lixeira */}
            </button>
        )
    }
    //se eu já tiver uma foto ele retorna outra coisa
    return (
        <button
            type="button"
            className="p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500"
            onClick={handleTakeScreenshot}
            >
            {isTakingScreenshot? <Loading/> : <Camera className="w-6 h-6 text-zinc-100" />}
            {/* se a foto esta sendo tirada, vou mostrar o componente de loading, senão mostra a camera */}
        </button>
    )
}