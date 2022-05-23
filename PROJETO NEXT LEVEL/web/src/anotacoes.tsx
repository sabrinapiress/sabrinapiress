//instalação  front aqui:
//npm create vite@latest - dar nome e depois escolher a ferramenta que quer
//cd pasta que criou
//npm install
//npm run dev

//tailwindcss fazer as instalações
//copias as tres linhas com @ e fazer um arquivo global.css
//import "./global.css" no html ou main


//instalação back aqui:
//npm init -y
// npm i typescript @types/node ts-node-dev -D
//npx tsc --init
// "target": "es2020", "rootDir": "./scr", "outDir": "./dist",   --- alterar no documento tsconfig.json
//npx tsc
//"dev": "ts-node-dev src/server.ts" --- por no package.json no "scripts"

//bibliotecas:
//tailwind css- faz toda a parte de css nas linhas do jsx
//html2canvas - para tirar o print da tela e transformar em imagem
//headless ui - janela de abrir e fechar e botão tbm, o Popover, aqui tem varios outros tipos tbm, para formulario entre outras funções
//phosphor-react - icones usados, tirando os que estão no assets


//----EXEMPLO------

interface ButtonProps {
  text?: string;
  //essa função serve para dizer que o botão é por string- o "text="Enviar""
}

function Button(props: ButtonProps){
  return <button className="bg-violet-500 px-4 h-10 rounded text-violet-100 hover:bg-violet-700 transition-colors">{props.text ?? "Default"}</button>
  //uma função que retorna um button, poderia ter um map.
  //o tailwind que possibilita o css assim, achei bem pratico bg = background-color px = padding h = height rounded = border-radios
  //feito por className. -- bg[#000] para cores exadecimais--  
  //sm=small md=mediam lg=large -- tamanhos da tela, ajda na responsividade
}

function App() {

  return (
    <div className="flex gap-2">
      <Button text="Enviar"/>
      <Button text="Ok"/>
      <Button/>
    </div>
  )
}

export default App


//py= padding --- gap= distancia os elementos --- w-full= ocupa tamanho todo ---