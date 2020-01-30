export const stringToDate = (dateString: string): Date => {
  //1991-03-02
  const dateElms = dateString.split("-").map((val: string): number => {
    return parseInt(val);
  });

  return new Date(dateElms[0], dateElms[1] - 1, dateElms[2]);
};
