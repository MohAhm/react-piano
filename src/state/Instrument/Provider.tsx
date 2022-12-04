import React, { FC, useState } from "react";
import { DEFAULT_INSTRUMENT } from "../../domain/sound";
import { InstrumentContext } from "./Context";

type InstrumentProps = {
  children: React.ReactNode;
};

export const InstrumentContextProvider: FC<InstrumentProps> = ({
  children,
}) => {
  const [instrument, setInstrument] = useState(DEFAULT_INSTRUMENT);

  return (
    <InstrumentContext.Provider value={{ instrument, setInstrument }}>
      {children}
    </InstrumentContext.Provider>
  );
};
