export const setCardsAC = (cards: []) => {
  return { type: "SET_CARDS", payload: { cards } } as const;
};

export type CartActionTypes = ReturnType<typeof setCardsAC>;
