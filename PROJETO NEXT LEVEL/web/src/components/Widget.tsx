import { ChatTeardropDots } from 'phosphor-react'
import { Popover } from '@headlessui/react'
import { WidgetForm } from './WidgetForm'

export function Widget() {
    // const [isWidgetOpen, setIsWidgetOpen] = useState(false)

    // function toggleWidgetVisibility() {
    //     setIsWidgetOpen(!isWidgetOpen)
    // } //com a biblioteca do headlessui não é mais necessario essas funçoes de abrir e fechar tela, ou estados
    //pois a mesma já vem com essas funções --- onClick={toggleWidgetVisibility} ---

    return (
        <Popover className="absolute bottom-4 right-4 md:bottom-8 md:right-8 flex flex-col items-end">
            {/* {isWidgetOpen && <p>Hello World</p> } */}
            <Popover.Panel>
                <WidgetForm />
            </Popover.Panel>

            <Popover.Button className='bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group'>
                <ChatTeardropDots className='w-6 h-6' />
                <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear">
                    <span className="pl-2"></span>
                    Feedback</span>
            </Popover.Button>
            {/* esse é o botão roxo de feedback, para fazer a função de abrir e fechar usamos o Popover, e estamos importando a imagem do balãozinho aqui */}
        </Popover>
    )
}