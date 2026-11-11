interface BotaoProps {
    cor?: 'green' | 'blue' | 'gray'
    className?: string
    children: React.ReactNode
    onClick?: () => void
}

export default function Botao({cor, className, children, onClick} : BotaoProps) {
    const cores = cor === 'green' ? 'from-green-400 to-green-700' :
                     cor === 'gray' ? 'from-gray-400 to-gray-700' :
                     'from-blue-400 to-blue-700';
    return (
        <button onClick={onClick} className={`bg-linear-to-r ${cores} text-white px-4 py-2 rounded-md ${className}`}>
            {children}
        </button>
    )
}