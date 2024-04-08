// import { useRef, useState } from "react"

// const FaqsCard = (props: any) => {
//     const answerElRef = useRef()
//     const [state, setState] = useState(false)
//     const [answerH, setAnswerH] = useState('0px')
//     const { faqsList, idx } = props

//     const handleOpenAnswer = () => {
        
//         const answerElH = answerElRef.current.childNodes[0].offsetHeight
//         setState(!state)
//         setAnswerH(`${answerElH + 20}px`)
//     }

//     return (
//         <div
//             className="space-y-3 mt-5 overflow-hidden border-b"
//             key={idx}
//             onClick={handleOpenAnswer}
//         >
//             <h4 className="cursor-pointer pb-5 flex items-center justify-between text-lg text-gray-700 font-medium">
//                 {faqsList.q}
//                 {
//                     state ? (
//                         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />
//                         </svg>
//                     ) : (
//                         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
//                         </svg>
//                     )
//                 }
//             </h4>
//             <div
//                 ref={answerElRef} className="duration-300"
//                 style={state ? { height: answerH } : { height: '0px' }}
//             >
//                 <div>
//                     <p className="text-gray-500">
//                         {faqsList.a}
//                     </p>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default () => {

//     const faqsList = [
//         {
//             q: "¿Que es Fitkid Book?",
//             a: "Fitkid Book hace que el código de Fitkid federado sea mucho más comprensible. Puedes buscar en el código y encontrar la información que necesitas."
//         },
//         {
//             q: "¿Donde está el código fitkid original?",
//             a: "Puedes encontrar el código original de Fitkid buscando 'fitkid code' en Google."
//         },
//         {
//             q: "¡Veo información erronea!",
//             a: "¡Es posible! Si hay algo que no te cuadra puedes contactar directamente conmigo a través de Instagram. @alberto_ripoll"
//         }
//     ]

//     return (
//         <section className="leading-relaxed max-w-screen-xl mt-12 mx-auto px-4 md:px-8">
//             <div className="space-y-3 text-center">
//                 <h1 className="text-3xl text-gray-800 font-semibold">
//                     Información que tienes que saber
//                 </h1>
//                 <p className="text-gray-600 max-w-lg mx-auto text-lg">
//                     Preguntas frecuentes del FitKid Book. Sigues confundido? Contáctame.
//                 </p>
//             </div>
//             <div className="mt-14 max-w-2xl mx-auto">
//                 {
//                     faqsList.map((item, idx) => (
//                         <FaqsCard
//                             idx={idx}
//                             faqsList={item}
//                         />
//                     ))
//                 }
//             </div>
//         </section>
//     )
// }