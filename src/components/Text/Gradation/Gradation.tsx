type Props = {
  text: string
}

export default function Gradation({text}: Props) {
    return (
        <p className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          {text}
        </p>
    );
}
