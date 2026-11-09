import { TextToSpeechLayout } from "@/features/text-to-speech/views/text-to-speech-layout";

export default function Layput({children}: {children: React.ReactNode}){
    return(
        <main>
        <TextToSpeechLayout>
            {children}
        </TextToSpeechLayout>
        </main>
    )
}