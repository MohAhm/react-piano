import { useEffect } from "react";
import { useSoundfont } from "../../adapters/Soundfont";
import { useInstrument } from "../../state/Instrument";
import { useAudioContext } from "../AudioContextProvider";
import { Keyboard } from "./Keyboard";

export const KeyboardWithInstrument = () => {
  const AudioContext = useAudioContext()!;
  const { instrument } = useInstrument();
  const { loading, play, stop, load, current } = useSoundfont({ AudioContext });

  useEffect(() => {
    if (!loading && instrument !== current) {
      load(instrument);
    }
  }, [load, loading, instrument, current]);

  return <Keyboard loading={loading} play={play} stop={stop} />;
};
