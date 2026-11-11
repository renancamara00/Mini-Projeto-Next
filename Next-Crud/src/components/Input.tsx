interface InputProps {
    texto: string
    tipo?: 'text' | 'number'
    value: any
    leitura?: boolean
    className?: string
    onChange?: (valor: any) => void
}

export default function Input({texto, tipo, value, leitura, className, onChange}: InputProps) {
    return (
        <div className="flex flex-col">
            <label className="mb-2">
                {texto}
            </label>
            <input
                type={tipo ?? 'text'}
                value={value}
                readOnly={leitura}
                onChange={e => onChange?.(e.target.value)}
                className={`
                    border border-purple-500 rounded-lg p-2
                    focus:outline-hidden focus:bg-white
                    ${leitura ? "" : "focus:ring-2 focus:ring-purple-400"}
                    ${leitura ? "bg-gray-100 cursor-not-allowed text-gray-500" : "bg-gray-50 text-gray-800"}
                    `}
                />
        </div>
    )
}