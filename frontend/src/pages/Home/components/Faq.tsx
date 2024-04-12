import { useRef, useState } from "react"


const FaqsCard = (props: any) => {
    const answerElRef = useRef<HTMLDivElement>(null);

// Asignar la referencia al elemento HTMLDivElement
{/* <div ref={answerElRef} className="duration-300">...</div> */}

    // const answerElRef = useRef()
    const [state, setState] = useState(false)
    const [answerH, setAnswerH] = useState('0px')
    const { faqsList, idx } = props

    const handleOpenAnswer = () => {
        if (answerElRef.current) {
            const firstChildNode = answerElRef.current.childNodes[0];
            if (firstChildNode instanceof HTMLElement) {
                const answerElH = firstChildNode.offsetHeight;
                setState(!state);
                setAnswerH(`${answerElH + 20}px`);
            }
        }
    }

    return (
        <div
            className="space-y-3 mt-5 overflow-hidden border-b"
            key={idx}
            onClick={handleOpenAnswer}
        >
            <h4 className="cursor-pointer pb-5 flex items-center justify-between text-lg text-gray-700 font-medium">
                {faqsList.q}
                {
                    state ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                    )
                }
            </h4>
            <div
                ref={answerElRef} className="duration-300"
                style={state ? { height: answerH } : { height: '0px' }}
            >
                <div>
                    {faqsList.a}
                </div>
            </div>
        </div>
    )
}

export default () => {

    const faqsList = [
        {
            q: "¿Que es Fitkidpedia?",
            a: <p className="text-gray-500">Fitkidpedia es la enciclopedia del código Fitkid federado. La misión es que el código sea mucho más comprensible para todo el mundo. Puedes buscar en el código y encontrar toda la información que necesitas.</p>
        },
        {
            q: "¿Donde está el código FitKid original?",
            a: <p className="text-gray-500">Puedes encontrar el código original del FitKid federado pulsando <a className="underline text-blue-500" href='https://www.febd.es/wordpress/wp-content/uploads/2019/01/CODIGO-FIT-KID-2019.pdf' target="_blank" rel="noopener noreferrer">aquí</a></p>
        },
        {
            q: "¡Veo información erronea!",
            a: <p className="text-gray-500">¡Es posible! Si hay algo que no te cuadra puedes contactar directamente conmigo a través de Instagram. @alberto_ripoll</p>
        }
    ]

    return (
        <section className="leading-relaxed max-w-screen-xl mt-12 mx-auto px-4 md:px-8">
            <div className="space-y-3 text-center">
                <h1 className="text-3xl text-gray-800 font-semibold">
                    Sobre la Fitkidpedia...
                </h1>
                <p className="text-gray-600 max-w-lg mx-auto text-lg">
                    Preguntas frecuentes sobre la Fitkidpedia. Sigues confundido? Contáctame.
                </p>
            </div>
            <div className="mt-14 max-w-2xl mx-auto">
                {
                    faqsList.map((item, idx) => (
                        <FaqsCard
                            idx={idx}
                            faqsList={item}
                        />
                    ))
                }
            </div>
        </section>
    )
}