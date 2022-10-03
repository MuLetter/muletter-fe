import { getSample } from "@api";
import { ITrack } from "@store/types";
import { useMutation } from "@tanstack/react-query";
import React from "react";

export function useSample(size: number) {
  const [items, setItems] = React.useState<ITrack[] | null>(null);
  const { mutate: sampleMutate } = useMutation(getSample, {
    onSuccess: (data) => {
      setItems(data);
    },
  });

  const onSamples = React.useCallback(() => {
    sampleMutate(size);
  }, [sampleMutate, size]);

  return [items, onSamples];
}
