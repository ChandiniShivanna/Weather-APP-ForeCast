import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

function VoiceSearch({ fetchWeather }) {
  const { transcript, listening, resetTranscript } = useSpeechRecognition();

  const startListening = () => {
    resetTranscript();
    SpeechRecognition.startListening();
  };

  const stopListening = () => {
    SpeechRecognition.stopListening();
    fetchWeather(transcript);
  };

  return (
    <div className="flex gap-3 justify-center mt-5">
      <button
        onClick={startListening}
        className="bg-red-500 px-5 py-3 rounded-2xl"
      >
        🎤 Start
      </button>

      <button
        onClick={stopListening}
        className="bg-green-500 px-5 py-3 rounded-2xl"
      >
        Stop
      </button>

      <p>{listening ? "Listening..." : transcript}</p>
    </div>
  );
}

export default VoiceSearch;
