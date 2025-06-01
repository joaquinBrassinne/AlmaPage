interface IconProps {
    color?: string;
    width?: number;
    height?: number;
}

const BathIcon = ({ color = "black", width = 25, height = 24 }: IconProps) => {
    return (
        <svg width={width} height={height} viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 7C9.10457 7 ... 6.5L5.5 10Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M17 7C18.1046 7 ... 15 5C15 6.10457 15.8954 7 17 7Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M5.5 10H10.5L9.5 21H6.5L5.5 10ZM14.5 10H19.5L20.5 15.5H19L18.5 21H15.5L15 15.5H13.5L14.5 10Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export default BathIcon